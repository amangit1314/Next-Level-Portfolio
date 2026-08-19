"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend, FiCpu, FiZap, FiDownload } from "react-icons/fi";
import { useTheme } from "@/contexts/ThemeContext";
import { useUIStore } from "@/stores/uiStore";
import { client } from "@/sanity/lib/client";
import { profileQuery } from "@/sanity/lib/queries";
import { unbounded, inter } from "@/lib/fonts";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
  isError?: boolean;
}

export const AICopilot = () => {
  const pathname = usePathname();
  const setPendingProjectSearch = useUIStore((s) => s.setPendingProjectSearch);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I am your AI Co-pilot. I can answer questions about Aman's experience, skills, and projects, or directly run commands on this website. Try asking me to switch themes, search projects, or scroll to a section!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);

  const { currentTheme, setTheme, availableThemes } = useTheme();
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Fetch profile to retrieve resume url dynamically
  useEffect(() => {
    const fetchResume = async () => {
      try {
        const profile = await client.fetch(profileQuery);
        if (profile?.resume?.asset?.url) {
          setResumeUrl(profile.resume.asset.url);
        }
      } catch (e) {
        console.error("Failed to fetch resume URL for co-pilot:", e);
      }
    };
    fetchResume();
  }, []);

  // Hide on terminal and sanity studio routes
  if (pathname === "/terminal" || pathname === "/studio" || pathname?.startsWith("/studio")) {
    return null;
  }

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    if (!textToSend) {
      setInput("");
    }

    const newUserMessage: Message = { role: "user", content: query };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      // Proxy chat route
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to communicate with LLM proxy");
      }

      const data = await response.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.content || "",
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Check for tool calls / function calling
      if (data.tool_calls && Array.isArray(data.tool_calls)) {
        for (const toolCall of data.tool_calls) {
          executeTool(toolCall);
        }
      }
    } catch (e: any) {
      console.error("Co-pilot chat error:", e);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: e.message || "An unexpected error occurred. Please try again.",
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Client-Side Tool Executor
  const executeTool = (toolCall: any) => {
    const { name, arguments: argsString } = toolCall.function || {};
    if (!name) return;

    let args: any = {};
    try {
      args = argsString ? JSON.parse(argsString) : {};
    } catch (e) {
      console.error("Failed to parse tool arguments:", e);
    }

    console.log("Executing tool:", name, args);

    switch (name) {
      case "changeTheme":
        const targetTheme = args.theme;
        if (targetTheme === "light") {
          setTheme("coffee-latte");
          addSystemLog("Theme switched to Coffee Latte (Light Mode)");
        } else if (targetTheme === "dark") {
          // Switch to emerald or purple
          setTheme("forest-emerald");
          addSystemLog("Theme switched to Forest Emerald (Dark Mode)");
        }
        break;

      case "scrollToSection":
        const section = args.section;
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          addSystemLog(`Scrolled to section: ${section}`);
        } else {
          // If on subpage, redirect to home with anchor
          window.location.href = `/#${section}`;
        }
        break;

      case "searchProjects":
        const query = args.query;
        if (query) {
          // Check if on projects subpage
          if (window.location.pathname === "/projects") {
            setPendingProjectSearch(query);
            addSystemLog(`Searching projects: "${query}"`);
          } else {
            // Redirect — "q" matches the Projects page's nuqs search param.
            window.location.href = `/projects?q=${encodeURIComponent(query)}`;
          }
        }
        break;

      case "downloadResume":
        if (resumeUrl) {
          window.open(resumeUrl, "_blank");
          addSystemLog("Resume downloaded/opened in new tab");
        } else {
          // Trigger click on DOM element if exists
          const cvBtn = document.querySelector("a[href*='resume']") as HTMLAnchorElement;
          if (cvBtn) {
            cvBtn.click();
            addSystemLog("CV download triggered");
          } else {
            addSystemLog("Resume URL is currently unavailable.");
          }
        }
        break;

      default:
        console.warn("Unknown tool called:", name);
    }
  };

  const addSystemLog = (text: string) => {
    setMessages((prev) => [...prev, { role: "system", content: `⚙️ [System Command] ${text}` }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestionPills = [
    { text: "Core AI skills", prompt: "What are your core AI and Machine Learning skills?" },
    { text: "Show AI Projects", prompt: "Filter projects by AI" },
    { text: "Change Theme", prompt: "Switch to dark theme mode" },
    { text: "Download CV", prompt: "Can you download the resume?" },
  ];

  return (
    <>
      {/* Floating Action Button — raised above mobile bottom nav on small screens */}
      <div className="fixed bottom-24 right-4 lg:bottom-6 lg:right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center text-white bg-linear-to-br from-theme-primary to-theme-secondary shadow-2xl border border-theme-primary/30 group"
          style={{
            boxShadow: `0 0 20px rgba(var(--theme-primary-rgb), 0.4)`,
          }}
        >
          {isOpen ? (
            <FiX className="w-6 h-6 transition-transform duration-300" />
          ) : (
            <div className="relative">
              <FiCpu className="w-6 h-6 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-theme-bg-primary" />
            </div>
          )}
          <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-300 px-3 py-1.5 rounded-lg bg-theme-bg-secondary border border-theme-border text-theme-text-primary text-xs font-mono whitespace-nowrap shadow-lg">
            AI Co-pilot
          </span>
        </motion.button>
      </div>

      {/* Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="fixed bottom-40 right-4 lg:bottom-24 lg:right-6 w-[92vw] sm:w-[440px] h-[600px] max-h-[75vh] rounded-3xl bg-theme-bg-secondary/90 backdrop-blur-xl border border-theme-border/60 shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-theme-border/50 flex items-center justify-between theme-gradient-primary/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl theme-gradient-primary flex items-center justify-center relative shadow-md">
                  <FiZap className="w-5 h-5 text-white" />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-theme-bg-secondary" />
                </div>
                <div>
                  <h3 className={`text-base font-bold text-theme-text-primary ${unbounded.className}`}>
                    AI Co-pilot
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
                    <span className="text-[10px] font-mono text-green-400">Agentic Engine Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-theme-bg-hover/50 text-theme-text-muted hover:text-theme-text-primary transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Message Pane */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar"
            >
              {messages.map((msg, index) => {
                const isSystem = msg.role === "system";
                const isUser = msg.role === "user";

                if (isSystem) {
                  return (
                    <div
                      key={index}
                      className="text-center text-[11px] font-mono text-theme-text-muted/80 bg-theme-bg-tertiary/30 py-1.5 px-3 rounded-lg max-w-[85%] mx-auto border border-theme-border/30"
                    >
                      {msg.content}
                    </div>
                  );
                }

                return (
                  <div
                    key={index}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed border transition-all duration-300
                        ${
                          isUser
                            ? "bg-linear-to-br from-theme-bg-tertiary to-theme-bg-tertiary/70 text-theme-text-primary border-theme-border rounded-br-none"
                            : msg.isError
                            ? "bg-red-950/20 text-red-400 border-red-900/50 rounded-bl-none"
                            : "bg-theme-bg-tertiary/20 text-theme-text-secondary border-theme-border/40 rounded-bl-none shadow-sm shadow-theme-primary/5"
                        }
                      `}
                    >
                      <p className={inter.className}>{msg.content}</p>
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-theme-bg-tertiary/20 border border-theme-border/40 text-theme-text-muted p-3.5 rounded-2xl rounded-bl-none text-sm flex items-center gap-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-theme-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-theme-secondary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-theme-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                    <span className="text-xs font-mono opacity-80">Groq thinking...</span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-[10px] font-mono text-theme-text-muted mb-2 uppercase tracking-widest">Suggested queries</p>
                <div className="flex flex-wrap gap-2">
                  {suggestionPills.map((pill) => (
                    <button
                      key={pill.text}
                      onClick={() => handleSendMessage(pill.prompt)}
                      className="px-3 py-1.5 text-xs rounded-xl bg-theme-bg-tertiary/40 border border-theme-border hover:border-theme-primary/60 hover:text-theme-primary text-theme-text-secondary transition-all duration-300"
                    >
                      {pill.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <div className="p-4 border-t border-theme-border/50 bg-theme-bg-secondary flex gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask co-pilot or run tools..."
                rows={1}
                className={`flex-1 max-h-20 p-3 bg-theme-bg-tertiary/40 border border-theme-border rounded-xl focus:border-theme-primary/60 focus:ring-1 focus:ring-theme-primary/30 outline-none text-sm text-theme-text-primary resize-none placeholder-theme-text-muted/60 ${inter.className}`}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || isLoading}
                className="w-11 h-11 rounded-xl theme-gradient-primary flex items-center justify-center text-white shadow-md disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-theme-primary/25 transition-shadow"
              >
                <FiSend className="w-4.5 h-4.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AICopilot;
