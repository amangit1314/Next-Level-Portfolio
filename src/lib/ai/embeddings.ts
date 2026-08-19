// Local, open-source embeddings via @huggingface/transformers (the
// maintained successor to @xenova/transformers) — runs entirely in-process,
// no external API, no cost. Swapped in after the Vercel AI Gateway's
// embedding endpoint required a card on file even for free-tier credits.
// Same idea repo-rag uses (sentence-transformers, Python) — this is the JS
// equivalent of the same model family.
//
// Model download (~30MB, quantized) happens once per warm serverless
// instance and is cached after that — Vercel Fluid Compute reuses instances
// across requests, so this cost is amortized, not paid per-request.

import { pipeline, type FeatureExtractionPipeline } from "@huggingface/transformers";

const MODEL_ID = "Xenova/all-MiniLM-L6-v2";
export const EMBEDDING_DIMENSIONS = 384;

let _extractor: Promise<FeatureExtractionPipeline> | null = null;

function getExtractor() {
    if (!_extractor) {
        // Node build of this package only supports device "cpu" (routes
        // through onnxruntime-node's native binary) — "wasm" is not a valid
        // option here (confirmed locally: throws "Unsupported device").
        // The native .so missing from Vercel's deployment bundle is fixed
        // via outputFileTracingIncludes in next.config.mjs instead.
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
