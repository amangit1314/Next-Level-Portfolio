// Hosted embeddings via Gemini's embedContent API. Replaces the local
// @huggingface/transformers pipeline — that model's native onnxruntime
// binary never fit Vercel's function size limit alongside /api/chat's
// other dependencies (see docs/DECISIONS.md), so searchContent degraded
// to "search unavailable" on every single call in production. Gemini's
// free tier needs no card (unlike the Vercel AI Gateway path tried first),
// which is why this wasn't the original choice.

const EMBED_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:batchEmbedContents";

// Matryoshka-truncated to 768 — a supported output size for this model,
// matching the common embedding dimension convention. Changing this
// requires a matching Supabase column migration (see docs/DECISIONS.md).
export const EMBEDDING_DIMENSIONS = 768;

async function embedBatch(values: string[]): Promise<number[][]> {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        throw new Error("GEMINI_API_KEY is not set — required for embeddings (reindex script + searchContent tool).");
    }

    const response = await fetch(`${EMBED_URL}?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            requests: values.map((value) => ({
                model: "models/gemini-embedding-001",
                content: { parts: [{ text: value }] },
                outputDimensionality: EMBEDDING_DIMENSIONS,
            })),
        }),
    });

    if (!response.ok) {
        throw new Error(`Gemini embed request failed: ${response.status} ${await response.text()}`);
    }

    const data = await response.json();
    return data.embeddings.map((e: { values: number[] }) => e.values);
}

export async function embedText(value: string): Promise<number[]> {
    const [embedding] = await embedBatch([value]);
    return embedding;
}

export async function embedTexts(values: string[]): Promise<number[][]> {
    return embedBatch(values);
}
