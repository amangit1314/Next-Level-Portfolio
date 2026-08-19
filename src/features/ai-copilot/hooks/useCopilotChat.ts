"use client";

// Chat/tool-execution logic extracted from AICopilot.tsx so the component
// stays presentational. Owns messages, loading state, and the client-side
// tool executor — everything that isn't UI open/close or input text.

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useUIStore } from "@/stores/uiStore";
import { useProfile } from "@/hooks/useSanityQuery";
import { ChatRole, CopilotTool, ThemeMode, type ChatMessage, type ToolCall } from "../types";
import { Route } from "@/types/enums";

const WELCOME_MESSAGE: ChatMessage = {
    role: ChatRole.Assistant,
    content:
        "Hello! I am your AI Co-pilot. I can answer questions about Aman's experience, skills, and projects, or directly run commands on this website. Try asking me to switch themes, search projects, or scroll to a section!",
};

export function useCopilotChat() {
    const setPendingProjectSearch = useUIStore((s) => s.setPendingProjectSearch);
    const { setTheme } = useTheme();
    // Resume URL comes from the shared ProfileContext (already fetched once in
    // layout.tsx) rather than a duplicate client.fetch(profileQuery) here.
    const { data: profile } = useProfile();
    const resumeUrl = profile?.resume?.asset?.url || null;

    const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    const addSystemLog = (text: string) => {
        setMessages((prev) => [...prev, { role: ChatRole.System, content: `⚙️ [System Command] ${text}` }]);
    };

    // Client-Side Tool Executor
    const executeTool = (toolCall: ToolCall) => {
        const { name, arguments: argsString } = toolCall.function || {};
        if (!name) return;

        let args: Record<string, string> = {};
        try {
            args = argsString ? JSON.parse(argsString) : {};
        } catch (e) {
            console.error("Failed to parse tool arguments:", e);
        }

        switch (name) {
            case CopilotTool.ChangeTheme: {
                const targetTheme = args.theme;
                if (targetTheme === ThemeMode.Light) {
                    setTheme("coffee-latte");
                    addSystemLog("Theme switched to Coffee Latte (Light Mode)");
                } else if (targetTheme === ThemeMode.Dark) {
                    setTheme("forest-emerald");
                    addSystemLog("Theme switched to Forest Emerald (Dark Mode)");
                }
                break;
            }

            case CopilotTool.ScrollToSection: {
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
            }

            case CopilotTool.SearchProjects: {
                const query = args.query;
                if (query) {
                    if (window.location.pathname === Route.Projects) {
                        setPendingProjectSearch(query);
                        addSystemLog(`Searching projects: "${query}"`);
                    } else {
                        // Redirect — "q" matches the Projects page's nuqs search param.
                        window.location.href = `${Route.Projects}?q=${encodeURIComponent(query)}`;
                    }
                }
                break;
            }

            case CopilotTool.DownloadResume: {
                if (resumeUrl) {
                    window.open(resumeUrl, "_blank");
                    addSystemLog("Resume downloaded/opened in new tab");
                } else {
                    const cvBtn = document.querySelector("a[href*='resume']") as HTMLAnchorElement;
                    if (cvBtn) {
                        cvBtn.click();
                        addSystemLog("CV download triggered");
                    } else {
                        addSystemLog("Resume URL is currently unavailable.");
                    }
                }
                break;
            }

            default:
                console.warn("Unknown tool called:", name);
        }
    };

    const sendMessage = async (query: string) => {
        const trimmed = query.trim();
        if (!trimmed || isLoading) return;

        const newUserMessage: ChatMessage = { role: ChatRole.User, content: trimmed };
        const updatedMessages = [...messages, newUserMessage];
        setMessages(updatedMessages);
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: updatedMessages.map(({ role, content }) => ({ role, content })),
                }),
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                throw new Error(errData.error || "Failed to communicate with LLM proxy");
            }

            const data = await response.json();
            const assistantMessage: ChatMessage = { role: ChatRole.Assistant, content: data.content || "" };
            setMessages((prev) => [...prev, assistantMessage]);

            if (data.tool_calls && Array.isArray(data.tool_calls)) {
                for (const toolCall of data.tool_calls) {
                    executeTool(toolCall);
                }
            }
        } catch (e) {
            console.error("Co-pilot chat error:", e);
            setMessages((prev) => [
                ...prev,
                {
                    role: ChatRole.Assistant,
                    content: e instanceof Error ? e.message : "An unexpected error occurred. Please try again.",
                    isError: true,
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return { messages, isLoading, sendMessage, chatEndRef };
}
