// Core copilot chat logic (system prompt → Groq → resolve searchContent →
// Groq again) extracted from the API route so the eval script (scripts/eval-copilot.ts)
// exercises the exact same code path as production, not a re-implementation
// of it that could silently drift from what actually ships.

import { groqChatCompletion, type GroqToolCall } from "@/lib/ai/groq";
import { buildSystemInstruction } from "./systemPrompt";
import { copilotTools } from "./tools";
import { searchContent } from "./retrieval";
import { logInteraction } from "./interactionLog";
import { ChatRole, CopilotTool } from "../types";

export interface CopilotChatOutcome {
    ok: boolean;
    content: string;
    tool_calls: GroqToolCall[] | null;
    searchedContent: boolean;
    errorText?: string;
    status?: number;
}

export async function runCopilotChat(messages: unknown[]): Promise<CopilotChatOutcome> {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
        return { ok: false, content: "", tool_calls: null, searchedContent: false, errorText: "GROQ_API_KEY not set", status: 500 };
    }

    const systemInstruction = await buildSystemInstruction();
    const apiMessages: unknown[] = [systemInstruction, ...messages];
    const modelName = process.env.GROQ_MODEL_NAME || "openai/gpt-oss-120b";

    let result = await groqChatCompletion({ apiKey, model: modelName, messages: apiMessages, tools: copilotTools });
    if (!result.ok) {
        return { ok: false, content: "", tool_calls: null, searchedContent: false, errorText: result.errorText, status: result.status };
    }

    const searchCalls = (result.message?.tool_calls || []).filter(
        (tc: GroqToolCall) => tc.function?.name === CopilotTool.SearchContent
    );

    if (searchCalls.length > 0) {
        const toolResultMessages = await Promise.all(
            searchCalls.map(async (tc: GroqToolCall) => {
                const args = tc.function?.arguments ? JSON.parse(tc.function.arguments) : {};
                const content = await searchContent(args.query || "");
                return { role: "tool", tool_call_id: tc.id, content };
            })
        );

        apiMessages.push(
            { role: ChatRole.Assistant, content: result.message?.content || null, tool_calls: result.message?.tool_calls },
            ...toolResultMessages
        );

        result = await groqChatCompletion({ apiKey, model: modelName, messages: apiMessages, tools: copilotTools });
        if (!result.ok) {
            return { ok: false, content: "", tool_calls: null, searchedContent: true, errorText: result.errorText, status: result.status };
        }
    }

    const outcome: CopilotChatOutcome = {
        ok: true,
        content: result.message?.content || "",
        tool_calls: result.message?.tool_calls || null,
        searchedContent: searchCalls.length > 0,
    };

    // Fire-and-forget: never let logging failure or latency affect the
    // response. This is the real, honest version of "learns from every
    // visit" — real questions get captured for review, not silently
    // auto-trusted into the eval set (we have no way to auto-verify an
    // answer is correct; a human promotes good ones via scripts/promote-interactions.ts).
    const lastUserMessage = [...messages].reverse().find((m): m is { role: string; content: string } => {
        return typeof m === "object" && m !== null && (m as { role?: string }).role === ChatRole.User;
    });
    if (lastUserMessage) {
        logInteraction({
            question: lastUserMessage.content,
            answer: outcome.content,
            searchedContent: outcome.searchedContent,
            toolCalls: outcome.tool_calls,
        }).catch((e) => console.error("logInteraction failed:", e));
    }

    return outcome;
}
