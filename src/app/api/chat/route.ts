import { NextRequest, NextResponse } from "next/server";
import { runCopilotChat } from "@/features/ai-copilot/services/chatService";
import { ChatRole } from "@/features/ai-copilot/types";

// Simple in-memory rate limiting to protect API key
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_LIMIT = 15; // requests per minute
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in ms

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const clientData = ipRequestCounts.get(ip);

    if (!clientData) {
        ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return false;
    }

    if (now > clientData.resetTime) {
        ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return false;
    }

    clientData.count++;
    return clientData.count > RATE_LIMIT_LIMIT;
}

export async function POST(req: NextRequest) {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "anonymous";
    if (isRateLimited(ip)) {
        return NextResponse.json({ error: "Rate limit exceeded. Please try again in a minute." }, { status: 429 });
    }

    let body;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { messages } = body;
    if (!messages || !Array.isArray(messages)) {
        return NextResponse.json({ error: "Missing messages array" }, { status: 400 });
    }

    const startedAt = Date.now();
    try {
        const outcome = await runCopilotChat(messages);
        const latencyMs = Date.now() - startedAt;

        if (!outcome.ok) {
            console.error("Groq API error:", { status: outcome.status, errorText: outcome.errorText, latencyMs });
            return NextResponse.json(
                { error: "Error communicating with the AI provider. Please try again." },
                { status: outcome.status || 500 }
            );
        }

        console.log("Copilot chat completion:", { latencyMs, searchedContent: outcome.searchedContent });

        return NextResponse.json({ role: ChatRole.Assistant, content: outcome.content, tool_calls: outcome.tool_calls });
    } catch (e) {
        console.error("Error inside chat route handler:", e);
        return NextResponse.json({ error: "Internal Server Error in chat handler" }, { status: 500 });
    }
}
