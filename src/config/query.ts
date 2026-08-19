/**
 * react-query timing tiers, centralized so every hook picks a tier instead
 * of hand-writing its own `1000 * 60 * 5`-style literal. Add a tier here
 * only when a second hook would otherwise duplicate the same magic number —
 * same drift-test as everything else in this codebase.
 */
export const STALE_TIME = {
  /** Sanity content — doesn't change without a manual Studio edit. */
  DEFAULT: 1000 * 60 * 5, // 5 min
  /** Count-only queries (projectsCount, aiProjectsCount) — cheap to refetch, kept short. */
  SHORT: 1000 * 60, // 1 min
} as const;

export const GC_TIME = {
  DEFAULT: 1000 * 60 * 10, // 10 min
} as const;

/** External HTTP call timeouts (fetch AbortSignal.timeout, etc.). */
export const REQUEST_TIMEOUT_MS = {
  // 15s was too tight for gpt-oss-120b's reasoning overhead, especially on a
  // cold Groq/serverless instance — a real production 500 traced back to
  // this timeout firing with no graceful handling (see lib/ai/groq.ts).
  DEFAULT: 25_000,
} as const;
