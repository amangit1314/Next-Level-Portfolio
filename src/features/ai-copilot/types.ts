// Centralized here (not left as string-literal unions) because each value is
// compared/branched on in 2+ files: CopilotTool in tools.ts (schema) AND
// AICopilot.tsx (executeTool switch); ThemeMode/PortfolioSection likewise
// appear in both the tool's JSON-schema enum and the client-side handler.
// Drift between those pairs would silently break tool execution.

export enum ChatRole {
    User = "user",
    Assistant = "assistant",
    System = "system",
}

export enum CopilotTool {
    ChangeTheme = "changeTheme",
    ScrollToSection = "scrollToSection",
    SearchProjects = "searchProjects",
    DownloadResume = "downloadResume",
    // Executed server-side in app/api/chat/route.ts (needs DB + embedding
    // access) — never appears in useCopilotChat's client-side executeTool.
    SearchContent = "searchContent",
}

export enum ThemeMode {
    Light = "light",
    Dark = "dark",
}

export enum PortfolioSection {
    Home = "home",
    About = "about",
    Skills = "skills",
    Experience = "experience",
    Projects = "projects",
    Contact = "contact",
}

// A chunk the RAG pipeline actually retrieved and fed to the model for this
// answer — surfaced in the UI (AICopilot.tsx) so "search my content" isn't a
// black box. See retrieval.ts for where this gets populated.
export interface RetrievedSource {
    sourceType: string;
    title: string;
    similarity: number;
}

export interface ChatMessage {
    role: ChatRole;
    content: string;
    isError?: boolean;
    sources?: RetrievedSource[];
}

export interface ToolCall {
    function?: {
        name?: string;
        arguments?: string;
    };
}
