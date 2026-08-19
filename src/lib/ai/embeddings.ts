// Local, open-source embeddings via @huggingface/transformers (the
// maintained successor to @xenova/transformers) — runs entirely in-process,
// no external API, no cost. Swapped in after the Vercel AI Gateway's
// embedding endpoint required a card on file even for free-tier credits.
// Same idea repo-rag uses (sentence-transformers, Python) — this is the JS
// equivalent of the same model family.
//
// STATUS: non-functional in production right now (see docs/DECISIONS.md).
// The native onnxruntime-node binary doesn't fit Vercel's 250MB function
// size limit alongside this route's other dependencies. import() is
// dynamic (not a top-level static import) specifically so that failure
// happens inside the try/catch in retrieval.ts's searchContent(), not at
// module-load time before any of our code runs — a static import here
// crashes the whole route's module graph on boot, uncatchable from outside.
//
// Model download (~30MB, quantized) happens once per warm serverless
// instance and is cached after that — Vercel Fluid Compute reuses instances
// across requests, so this cost is amortized, not paid per-request.

import type { FeatureExtractionPipeline } from "@huggingface/transformers";

const MODEL_ID = "Xenova/all-MiniLM-L6-v2";
export const EMBEDDING_DIMENSIONS = 384;

let _extractor: Promise<FeatureExtractionPipeline> | null = null;

async function getExtractor() {
    if (!_extractor) {
        const { pipeline } = await import("@huggingface/transformers");
        _extractor = pipeline("feature-extraction", MODEL_ID);
    }
    return _extractor;
}

async function runExtraction(values: string[]): Promise<number[][]> {
    const extractor = await getExtractor();
    const output = await extractor(values, { pooling: "mean", normalize: true });
    return output.tolist();
}

export async function embedText(value: string): Promise<number[]> {
    const [embedding] = await runExtraction([value]);
    return embedding;
}

export async function embedTexts(values: string[]): Promise<number[][]> {
    return runExtraction(values);
}
