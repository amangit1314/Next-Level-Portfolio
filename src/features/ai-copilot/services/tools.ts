// Groq function-calling tool definitions for the AI Copilot. Extracted from
// app/api/chat/route.ts — client-side execution lives in AICopilot.tsx.
// Tool/theme/section names come from the shared enums in ../types so this
// schema can't silently drift from the executeTool switch that consumes it.

import { CopilotTool, ThemeMode, PortfolioSection } from "../types";

export const copilotTools = [
    {
        type: "function",
        function: {
            name: CopilotTool.ChangeTheme,
            description: "Change the visual interface color theme of the portfolio website between light and dark mode.",
            parameters: {
                type: "object",
                properties: {
                    theme: {
                        type: "string",
                        enum: Object.values(ThemeMode),
                        description: "The visual mode to apply.",
                    },
                },
                required: ["theme"],
            },
        },
    },
    {
        type: "function",
        function: {
            name: CopilotTool.ScrollToSection,
            description: "Smooth scroll the recruiter's browser window to a specific section on the page (home, about, skills, experience, projects, contact).",
            parameters: {
                type: "object",
                properties: {
                    section: {
                        type: "string",
                        enum: Object.values(PortfolioSection),
                        description: "The section anchor name.",
                    },
                },
                required: ["section"],
            },
        },
    },
    {
        type: "function",
        function: {
            name: CopilotTool.SearchProjects,
            description: "Search, filter, or query the projects grid by a technology, tag, or word (e.g. 'Next.js', 'Python', 'RAG').",
            parameters: {
                type: "object",
                properties: {
                    query: {
                        type: "string",
                        description: "The search keyword.",
                    },
                },
                required: ["query"],
            },
        },
    },
    {
        type: "function",
        function: {
            name: CopilotTool.DownloadResume,
            description: "Open the candidate's resume/CV PDF document in a new window or trigger a download.",
            parameters: {
                type: "object",
                properties: {},
            },
        },
    },
    {
        type: "function",
        function: {
            name: CopilotTool.SearchContent,
            description:
                "Search the candidate's actual projects, skills, and experience for details relevant to the question (tech stack specifics, project descriptions, achievements, role history). Call this before answering any question that needs specifics beyond the candidate's name/role/headline — do not guess or invent details.",
            parameters: {
                type: "object",
                properties: {
                    query: {
                        type: "string",
                        description: "What to search for, e.g. 'RAG projects', 'React Native experience', 'AWS skills'.",
                    },
                },
                required: ["query"],
            },
        },
    },
];
