// Raw Groq chat-completions client. No domain logic — that lives in
// src/features/ai-copilot/services/. Mirrors CareerSpire's lib/ai/groq.ts split.

import { REQUEST_TIMEOUT_MS } from "@/config/query";

const GROQ_CHAT_COMPLETIONS_URL = "https://api.groq.com/openai/v1/chat/completions";

interface GroqChatParams {
    apiKey: string;
    model: string;
    messages: unknown[];
    tools?: unknown[];
    temperature?: number;
    maxCompletionTokens?: number;
    // gpt-oss models spend part of the token budget on hidden chain-of-thought
    // before the visible answer — "low" keeps that overhead small for a
    // latency-sensitive chat widget. Ignored by non-reasoning models.
    reasoningEffort?: "low" | "medium" | "high";
}

export interface GroqToolCall {
    id?: string;
    function?: { name?: string; arguments?: string };
}

export interface GroqChatResult {
    ok: boolean;
    status: number;
    message?: { content?: string; tool_calls?: GroqToolCall[] };
    usage?: { totalTokens: number; promptTokens: number; completionTokens: number };
    errorText?: string;
}

export async function groqChatCompletion({
    apiKey,
    model,
    messages,
    tools,
    temperature = 0.3,
    // Reasoning tokens count against this budget on gpt-oss models, so it's
    // sized well above the ~60-word answer the system prompt asks for.
    maxCompletionTokens = 600,
    reasoningEffort = "low",
}: GroqChatParams): Promise<GroqChatResult> {
    // fetch() itself throwing (network failure, or the abort signal firing)
    // was never handled here — only HTTP-level !response.ok was. An
    // unhandled throw from this function propagates uncaught all the way to
    // the route's outer catch (a raw 500, no useful error text) instead of
    // the normal { ok: false, ... } shape every other failure path returns.
    // Found via a real production 500 with no other explanation.
    try {
        const response = await fetch(GROQ_CHAT_COMPLETIONS_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model,
                messages,
                temperature,
                max_completion_tokens: maxCompletionTokens,
                reasoning_effort: reasoningEffort,
                ...(tools ? { tools, tool_choice: "auto" } : {}),
            }),
            // Without this, a hung Groq request blocks the serverless function
            // until the platform's own (much longer) timeout — a slow failure
            // instead of a fast, clear one. gpt-oss-120b's reasoning overhead
            // means this needs real margin, not a tight budget.
            signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS.DEFAULT),
        });

        if (!response.ok) {
            return { ok: false, status: response.status, errorText: await response.text() };
        }

        const data = await response.json();
        const choice = data.choices?.[0];
        if (!choice) {
            return { ok: false, status: 500, errorText: "Empty response from LLM" };
        }

        const usage = data.usage
            ? {
                  totalTokens: data.usage.total_tokens,
                  promptTokens: data.usage.prompt_tokens,
                  completionTokens: data.usage.completion_tokens,
              }
            : undefined;

        // Some gpt-oss responses surface reasoning under message.reasoning —
        // only the visible `content` field is ever returned to the client.
        return { ok: true, status: 200, message: choice.message, usage };
    } catch (e) {
        const isTimeout = e instanceof Error && e.name === "TimeoutError";
        return {
            ok: false,
            status: isTimeout ? 504 : 502,
            errorText: isTimeout ? "Groq request timed out" : e instanceof Error ? e.message : "Network error contacting Groq",
        };
    }
}
