// Vector retrieval for the searchContent tool. Replaces full-context-stuffing
// (dumping every project/skill into the system prompt on every request) with
// the LLM deciding what to look up — same idea as repo-rag's tool-driven
// retrieval, scaled down for a small, static (Sanity-published) corpus.

import { embedText } from "@/lib/ai/embeddings";
import { getSupabaseServerClient } from "@/lib/supabase/serverClient";

interface RetrievedChunk {
    source_type: string;
    title: string;
    content: string;
    similarity: number;
}

const MATCH_COUNT = 5;
// Below this cosine similarity, a result is more noise than signal — telling
// the model "nothing relevant found" is more honest than feeding it a weak match.
const MIN_SIMILARITY = 0.3;

export async function searchContent(query: string): Promise<string> {
    let queryEmbedding: number[];
    try {
        queryEmbedding = await embedText(query);
    } catch (e) {
        // Local embeddings are currently non-functional in production (see
        // docs/DECISIONS.md) — this catch is what keeps that a degraded
        // answer instead of a full request crash while it's being sorted out.
        console.error("searchContent: embedding failed:", e);
        return "Search is temporarily unavailable. Answer from general knowledge if possible, and say the specifics couldn't be looked up right now.";
    }

    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase.rpc("match_portfolio_chunks", {
        query_embedding: queryEmbedding,
        match_count: MATCH_COUNT,
    });

    if (error) {
        console.error("searchContent: Supabase RPC error:", error);
        return "Search is temporarily unavailable. Answer from general knowledge if possible, and say the specifics couldn't be looked up right now.";
    }

    const chunks = ((data as RetrievedChunk[]) || []).filter((c) => c.similarity >= MIN_SIMILARITY);

    if (chunks.length === 0) {
        return `No content found matching "${query}". Say so rather than guessing.`;
    }

    return chunks
        .map((c) => `[${c.source_type}] ${c.title}\n${c.content}`)
        .join("\n\n---\n\n");
}
