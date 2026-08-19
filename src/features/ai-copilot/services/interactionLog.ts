// Logs real copilot Q&A to Supabase for later human review. This is the
// honest foundation for "gets better with use": we cannot auto-verify an
// answer is correct, so nothing here is auto-promoted into the eval set —
// see scripts/promote-interactions.ts for the reviewed-promotion workflow.

import { getSupabaseServerClient } from "@/lib/supabase/serverClient";
import type { GroqToolCall } from "@/lib/ai/groq";

interface InteractionInput {
    question: string;
    answer: string;
    searchedContent: boolean;
    toolCalls: GroqToolCall[] | null;
}

export async function logInteraction(input: InteractionInput): Promise<void> {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("portfolio_copilot_interactions").insert({
        question: input.question,
        answer: input.answer,
        searched_content: input.searchedContent,
        tool_calls: input.toolCalls,
    });

    if (error) {
        console.error("logInteraction: Supabase insert error:", error);
    }
}
