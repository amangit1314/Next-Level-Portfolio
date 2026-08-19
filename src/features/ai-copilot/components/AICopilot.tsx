"use client";

import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend, FiCpu, FiZap, FiDownload } from "react-icons/fi";
import { unbounded, inter } from "@/lib/fonts";
import { ChatRole } from "../types";
import { useCopilotChat } from "../hooks/useCopilotChat";
import { Route } from "@/types/enums";

export const AICopilot = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, isLoading, sendMessage, chatEndRef } = useCopilotChat();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Hide on terminal and sanity studio routes
  if (pathname === Route.Terminal || pathname === Route.Studio || pathname?.startsWith(Route.Studio)) {
    return null;
  }

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || input;
    if (!textToSend) {
      setInput("");
    }
    sendMessage(query);
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
                const isSystem = msg.role === ChatRole.System;
                const isUser = msg.role === ChatRole.User;

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
