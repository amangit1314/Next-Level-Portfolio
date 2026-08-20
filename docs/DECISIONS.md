# Decisions Log

A running log of non-obvious engineering decisions: what was chosen, why,
and what was rejected. Newest entry on top. Append — don't rewrite history.

---

## 2026-08-20 — Local embeddings replaced with Gemini's hosted embedContent API

**Context:** The 2026-08-19 "local embeddings" decision (`@huggingface/transformers`,
MiniLM, 384-dim) never actually worked in production — its native
onnxruntime binary doesn't fit Vercel's function size limit alongside
`/api/chat`'s other dependencies (confirmed via three failed file-tracing
attempts the same night, see the entries below). `searchContent` degraded
to "search unavailable" on every single call, silently, since the day it
shipped.

**Decision:** Call Gemini's `embedContent` API (`gemini-embedding-001`,
Matryoshka-truncated to 768 dimensions) over HTTP instead of running any
model in-process. `lib/ai/embeddings.ts` keeps the same `embedText`/
`embedTexts` interface — `retrieval.ts` and `reindex-rag.ts` needed zero
changes. Supabase's `portfolio_rag_chunks.embedding` column migrated from
`vector(384)` to `vector(768)` (table truncated and repopulated via
`npm run reindex` — no ivfflat/hnsw index existed to rebuild, table is
small enough for a brute-force scan).

**Why not Vercel AI Gateway (tried first, both times):** requires a card
on file even for free-tier credits (`customer_verification_required`) —
still true today. Gemini's API key (from Google AI Studio) needs no
billing info for its free tier and has generous enough limits for a
portfolio's traffic.

**Library/tool (if any):** none new — plain `fetch()`, same raw-client
style as `lib/ai/groq.ts`. `@huggingface/transformers` dependency removed
entirely; `next.config.mjs`'s `serverExternalPackages` entry for it and
`onnxruntime-node` removed (no longer needed).

Purpose: six months from now, "why did I do it this way?" should be
answerable by scrolling this file, not by re-deriving the reasoning from
the diff.

Each entry should be small — one decision, not a session summary. Skip
anything the code already makes obvious (e.g. "used TypeScript").

---

## Template

```
## YYYY-MM-DD — <short title>
**Context:** what problem/feature prompted this
**Decision:** what was chosen
**Why:** reasoning; trade-offs considered and rejected
**Library/tool (if any):** what + why over the alternatives
```

---

## 2026-08-19 — Functional QA pass: claim vs. reality, page by page

**Context:** No browser automation available this session, so verification
was route-health (curl, all 200/307 as expected, zero server errors) +
rigorous source-tracing per page — does the code that backs a claimed
feature actually do what it claims, not just render. Browser click-testing
is still a real gap; flagged, not faked.

**Verified genuinely working (traced state → handler → render, not just presence):**
- Skills category filter — `activeCategory` state, `onClick` wired, `filteredFlat` render
- Projects search/category/tab filters + AI-Copilot search handoff (`pendingProjectSearch`)
- Terminal — all 10 commands (`help/about/skills/projects/experience/contact/download/theme/clear/exit`) call real handler functions reading the merged `sanityData` (profile from context + live projects/skills/experience)
- Components showcase search/filter
- Blog code-copy button (`navigator.clipboard.writeText`)
- Dashboard auth gate (middleware 307-redirects unauthenticated `/dashboard` → `/dashboard/login`, confirmed live) and analytics route (genuinely calls Vercel's real Web Analytics REST API, not mock data)
- Playground — honestly labeled "AI Engineering Simulator"/"Visual RAG Explorer" for the chunking/retrieval visualization (intentionally a hardcoded local doc set, not the real RAG pipeline), but its "Generate Answer" step genuinely calls the real `/api/chat` route

**One claim-vs-reality gap found:** `Contact.tsx` — no false UI (no fake form fields that silently do nothing), it's honestly just a `mailto:` CTA + social links. But `CLAUDE.md`'s folder-structure doc calls it "#contact — contact form", which overstates it. Doc wording only, not a functional bug — not fixed yet, low priority.

**Not verified (no browser tool this session):** actual click/type/visual behavior — animations, responsive layout, hover states, the AI Copilot widget's UI (its `/api/chat` backend was verified extensively via curl earlier, but the chat drawer's rendering wasn't clicked through this pass). If Chrome extension gets connected, worth a real pass.

---

## 2026-08-19 — Full-codebase audit: 2 real regressions found and fixed, docs/memory brought current

**Context:** Requested full-app review to close out the day's work: verify
the Explored Map covers everything, find remaining tightening opportunities,
update docs and memory, remove stale content.

**Real bugs found and fixed:**
- `sitemap.ts`'s earlier fix (Sanity-only blog fetch) silently dropped the 3
  static AI blog posts (`data/ai-blogs.ts` — bundled pages, not Sanity) from
  the sitemap. Same bug existed in the same-day `llms.txt` route for
  `data/ai-projects.ts`. Both fixed to merge static + Sanity sources. Lesson
  captured in Session Learnings: any new content-aggregation point must merge
  both, this project has two permanent static content sources, not one CMS.
- Confirmed (not assumed) the "double section ID" Known Issue was actually
  clean app-wide — every home-page section owns its own `<section id>`,
  `page.tsx` renders them directly with no wrapper. Downgraded from "TBD" to
  resolved.

**Docs/memory updated:**
- `CLAUDE.md`'s Explored Map, Known Issues, Session Learnings, and Growth
  Tips fully rewritten — the old versions referenced deleted files
  (`ProfileContext.tsx`, `utils/constants.tsx`) and pre-refactor paths
  (`src/components/HeroSection.tsx` instead of `src/components/sections/`).
  Now covers dashboard, playground, terminal, components showcase, blogs
  (static + Sanity), and the full RAG/eval infra — not just AI Copilot.
- `docs/planning/ai_fullstack_portfolio_plan.md` — added a status header
  marking it directional history now that RAG/evals/restructure are done;
  didn't rewrite the whole doc (large, still useful as the original vision),
  just stopped it from reading as current.
- Persistent cross-session memory (`project_ai_portfolio_goal.md`) updated —
  the priority-order list was fully stale (items 1-4 all done), replaced
  with current status + the actual remaining priorities.

**Not done:** did not delete `Avatar.tsx`/`BackgroundCircles.tsx` (confirmed
dead, zero importers) — flagged in Known Issues for a decision rather than
deleted without being asked.

---

## 2026-08-19 — QueryKey enum, config/site.ts, config/query.ts — closing the constants/enums gap vs. sibling repos

**Context:** Checked `aman-starter-kit`/`CareerSpire` for their query-key
and config conventions. Neither actually enums query keys directly (react-query
keys are arrays, e.g. `["users"] as const` — an enum can't itself be an
array), but both centralize a `src/config/site.ts` for the app's own URL and
`src/types/enums.ts` for cross-file domain values.

**Decision:**
- `src/types/enums.ts` (new, project's first) — `QueryKey` string enum, used
  as `[QueryKey.Profile]` etc. in `useSanityQuery.ts`. Gets the enum benefit
  (typo-proof, greppable, no accidental two-different-strings-for-one-concept)
  while keeping the array shape react-query actually wants.
- `src/config/site.ts` — `SITE_URL`. Was the literal string
  `"https://amansoni.dev"` hardcoded in **9 places across 5 files**
  (`layout.tsx` metadata block, `sitemap.ts`, `robots.ts`, `llms.txt` route,
  `StructuredData.tsx`) — a domain change or typo in any one of them
  silently drifts from the rest. Same drift pattern this project has hit
  repeatedly elsewhere.
- `src/config/query.ts` — `STALE_TIME`/`GC_TIME` tiers, wired into both
  `queryClient.ts`'s defaults and every hook in `useSanityQuery.ts`
  (`DEFAULT` for content, `SHORT` for the count queries, which are cheap
  and benefit from fresher data). Also `REQUEST_TIMEOUT_MS`, now actually
  used — added an `AbortSignal.timeout()` to the Groq fetch in `lib/ai/groq.ts`,
  which had no timeout at all before (a hung request would've blocked the
  serverless function until the platform's own much longer timeout).
- AI-copilot's own enums (`ChatRole`, `CopilotTool`, `ThemeMode`,
  `PortfolioSection`) **stay** in `features/ai-copilot/types.ts` — deliberately
  not moved to the new central `enums.ts`. They're only ever compared within
  that one feature; centralizing them would be indirection with no second
  consumer to protect against drift, which is exactly what the drift-test
  in CLAUDE.md says not to do.

**uiStore.ts check:** confirmed still genuinely used —
`Header.tsx` (mobile menu), `projects/page.tsx` and `useCopilotChat.ts`
(AI-Copilot → Projects search handoff). Not dead code.

**Why:** Direct response to "use constants for URLs/timeouts, enums for
query keys, checked against the sibling repos' actual conventions" —
implemented the version that fits react-query's real shape rather than a
literal enum-everything reading of the request.

---

## 2026-08-19 — Deleted ProfileContext; react-query's useProfile() is now the only profile hook

**Context:** `hooks/useSanityQuery.ts` already had a react-query `useProfile()`
this whole time — react-query dedupes identical query keys across every
component that calls it, which is exactly what `ProfileContext.tsx` was
hand-rolling with its own `useState`/`useEffect`/Provider. Two hooks named
`useProfile()` (`@/contexts/ProfileContext` vs `@/hooks/useSanityQuery`) was
already a flagged recurring bug (wrong one imported by mistake, twice).

**Decision:** Deleted `ProfileContext.tsx` and its `Provider` entirely.
Every consumer (`HeroSection`, `AboutSection`, `Skills`, `projects/page.tsx`,
`blogs/[slug]/page.tsx`, `terminal/page.tsx`, `useCopilotChat.ts`) now
imports `useProfile` from `@/hooks/useSanityQuery` and destructures
`{ data: profile }`. Also deleted the now-dead hand-written `src/types/profile.ts`
— its `Profile`/`SocialLink` types were a second, looser-typed definition of
the same shape `sanity.types.ts`' generated `ProfileQueryResult` already
covers correctly (nullable fields and all — the generated type is honest
about optionality where the hand-written one wasn't, which is exactly the
kind of drift a codegen'd type is supposed to prevent).

**Why:** Answers "should react-query be used for state management here" —
it already was, partially; the actual fix was finishing the consolidation
onto it instead of running two competing patterns (react-query for most
Sanity data, hand-rolled Context for profile). One state layer for all
server data, zero duplicate fetches, and the naming-collision bug class is
now structurally impossible (only one `useProfile` exists).

Chat state (`useCopilotChat`) stays plain `useState` — a running message
list is a local UI reducer, not cacheable GET data, so react-query's
`useQuery` doesn't fit it. `sendMessage`'s fetch could reasonably become a
`useMutation` for built-in retry/loading state, but the current hand-rolled
try/catch is small enough that it isn't worth the churn right now — noted
as a minor follow-up, not done.

**Library/tool (if any):** none new — `@tanstack/react-query` was already a
dependency, this just stopped bypassing it in one place.

---

## 2026-08-19 — Eval harness, DRY profile-fetch cleanup, SEO/AI-search pass, interaction logging

**Eval harness:** `docs/eval/golden-questions.json` (12 questions: grounded
facts, refusals, tool-calls) + `npm run eval` — deterministic grading only
(substring/hedge-phrase/tool-name checks), no LLM judge, same reasoning as
repo-rag's own eval doc. Extracted `runCopilotChat()` into
`services/chatService.ts` so both the API route and the eval script run the
exact same code path — no drift between what's tested and what ships.
11/12 passing (the 1 flaky case is phrasing variance from temperature, not a
real failure).

**DRY fix — 5 duplicate `client.fetch(profileQuery)` calls → 1:** this exact
mistake was already flagged once in Known Issues ("watch for this
recurring"), and it had recurred in `projects/page.tsx`,
`blogs/[slug]/page.tsx`, `terminal/page.tsx`, and
`useCopilotChat.ts` — all re-fetching profile data `ProfileProvider` in
`layout.tsx` already fetches once. All four now read from `useProfile()`.
Only `systemPrompt.ts` still fetches directly, correctly — it runs
server-side in an API route, outside the React tree, so there's no context
to read from.

**SEO / AI-search:**
- `sitemap.ts` had a hardcoded `blogSlugs` array — same drift pattern as
  everything else in this file, now fetches live from Sanity.
- Added `StructuredData` (server component, Person JSON-LD in `layout.tsx`)
  — lets Google/AI search engines resolve "who is Aman Soni" as facts.
- Added `GET /llms.txt` (llmstxt.org convention) — a route, not a static
  file, so it can't go stale: fetches profile/projects/skills from Sanity
  live, revalidates hourly.

**Interaction logging (the honest version of "learns from every visit"):**
Every real chat exchange is now logged to `portfolio_copilot_interactions`
(Supabase) — question, answer, whether it searched, tool calls. Nothing is
auto-promoted into the eval set: we have no way to auto-verify a logged
answer is *correct*, so blind auto-add would poison the eval with whatever
the model happened to say. `npm run eval:review` surfaces unreviewed
interactions for a human to hand-pick good ones into
`golden-questions.json`. This is deliberately NOT self-healing/fine-tuning —
no online learning, no automatic behavior change exists in this stack. If
that's wanted later, it's a real, separate scoping conversation (retrieval
memory-bank of past good Q&A vs. actual fine-tuning), not something to claim
by default.

**Known, not fixed:** the chat route's rate limiter is an in-memory `Map` —
resets per server instance, so it isn't a real global limit under Vercel's
horizontally-scaled Fluid Compute. Pre-existing, not introduced by this
pass. Proper fix is Upstash Redis (new infra dependency) — flagged, not
silently added.

---

## 2026-08-19 — Real RAG: pgvector retrieval replaces full-context-stuffing

**Context:** The system prompt was dumping the entire candidate profile
(bio, tech stack, stats, experience areas) into every request regardless
of what was asked — no retrieval at all. Modeled the fix loosely on
`repo-rag` (a separate project: lazy, cache-augmented, agent-driven
retrieval over a live GitHub account) but adapted down: this portfolio's
content is small and Sanity-published, not a live multi-repo surface, so
the lazy-fetch/live-browse machinery doesn't apply — a manual reindex
step is the right amount of infrastructure here.

**Decision:**
- **Vector store:** Supabase Postgres + pgvector, reusing the existing
  `ApplyPilot` project with a dedicated `portfolio_rag_chunks` table
  (RLS locked to service-role only — no client-side access). Provisioned
  directly via the connected Supabase MCP rather than the Vercel
  Marketplace CLI (Vercel CLI isn't installed locally; MCP was the
  lower-friction real-infra path available in-session).
- **Embeddings:** `@huggingface/transformers` running `Xenova/all-MiniLM-L6-v2`
  locally (384-dim, mean-pooled, normalized) — zero external API cost.
  **Not** the original plan: first tried Vercel AI Gateway
  (`openai/text-embedding-3-small`), which failed with
  `customer_verification_required` — the Gateway requires a card on file
  even to use free-tier credits. Swapped to a fully open-source,
  in-process model instead of asking for a card.
- **Retrieval flow:** `searchContent` tool added to the copilot's existing
  tool set, but unlike the client-executed tools (theme/scroll/etc.),
  it's resolved **server-side** in `app/api/chat/route.ts`: first Groq
  call → if it requests `searchContent` → embed the query, call the
  `match_portfolio_chunks` RPC, feed the results back as a `tool` message
  → second Groq call synthesizes the final answer. Similarity floor of
  0.3 — a weak match returns "nothing found" rather than noise.
- **Indexing:** `npm run reindex` (manual, not webhook-triggered) fetches
  projects/skills/experience from Sanity, flattens each into one text
  block, embeds, upserts by `(source_type, source_id)`. One row per
  Sanity doc — no sub-chunking needed at this content size.
- **System prompt:** trimmed to identity only (name/role/headline); all
  project/skill/experience detail now comes from `searchContent`, with an
  explicit instruction not to guess when nothing is found.
- **Keepalive:** Supabase free-tier projects pause after 7 days idle.
  Added `GET /api/keepalive` (trivial read against the RAG table) + a
  daily Vercel Cron (`vercel.json`) hitting it — well inside the
  inactivity window.

**Why:** This was the single biggest gap between "portfolio that calls an
LLM API" and "portfolio that demonstrates RAG" — full-context-stuffing
doesn't scale and doesn't show retrieval design. Verified end-to-end
manually: a real question ("has Aman used React Native?") returned a
grounded, specific answer citing the actual project; a question with no
match ("Rust or blockchain?") correctly said so instead of hallucinating;
client-action tool calls (theme change) still pass through unaffected.

**Library/tool (if any):** `@huggingface/transformers` (open-source, MIT),
`@supabase/supabase-js`, `ai` (for the embed API surface, even though the
Gateway embedding path itself wasn't used in the end — kept for the
`ai`/`embed()` types and because Groq completions may move onto it later).

---

## 2026-08-19 — Groq model swap: llama-3.3-70b-versatile → openai/gpt-oss-120b, plus a correctness fix that came with it

**Context:** `llama-3.3-70b-versatile` was deprecated by Groq (June 2026).
Groq's docs name `openai/gpt-oss-120b` as the official migration target for
that tier — native tool-calling, 131K context, free-tier eligible, and
cheap even on paid usage ($0.15/$0.60 per 1M tokens).

**Decision:** Swapped the default model in `route.ts`. While migrating,
found and fixed a real correctness issue this swap would have caused
silently: gpt-oss-120b is a reasoning model — hidden chain-of-thought
tokens count against the same budget as the visible answer, and Groq
expects `max_completion_tokens` (not the legacy `max_tokens`). The old
`max_tokens: 250` cap (sized for llama-3.3, a non-reasoning model) would
have let gpt-oss-120b burn its whole budget on reasoning and return empty
`content`. `lib/ai/groq.ts` now sends `max_completion_tokens: 600` +
`reasoning_effort: "low"` (keeps reasoning overhead — and cost — small
for a latency-sensitive chat widget).

Also fixed while in this file: the route was returning Groq's raw
`errorText` straight to the client on failure — could leak
account/provider details. Now logged server-side only; client gets a
generic message. Added a one-line `console.log` per request (model,
latency, token usage) for cheap request-level observability — no metrics
backend, just enough to eyeball cost/latency during development.

**Why:** A model swap that only changes the model string but not the
token-budget mechanics is a classic silent-breakage trap with reasoning
models — worth catching at the same time as the swap, not after a user
reports empty chat replies.

**Library/tool (if any):** n/a — same Groq REST endpoint, different params.

---

## 2026-08-19 — AI Copilot tool/role names centralized as enums in `features/ai-copilot/types.ts`

**Context:** During the restructure, `CopilotTool` names (`changeTheme`,
`scrollToSection`, ...) were string literals duplicated in two places:
the Groq tool schema (`services/tools.ts`) and the client-side
`executeTool` switch (`components/AICopilot.tsx`). Same for `ThemeMode`
("light"/"dark") and `PortfolioSection` (home/about/...), and `ChatRole`
duplicated as a local `Message` interface in the component that
re-declared the same shape as the route's message type.

**Decision:** Centralized `ChatRole`, `CopilotTool`, `ThemeMode`,
`PortfolioSection` as enums in `features/ai-copilot/types.ts`. The tool
schema builds its JSON-schema `enum` arrays via `Object.values(...)` so
the LLM-facing contract and the client switch can't drift apart.

**Why:** Passes the drift test from CLAUDE.md's Code Quality Paradigms —
these values are compared/branched on in 2+ files and a typo in one
(e.g. `"changeTheme"` vs `"change_theme"`) would silently break tool
execution with no type error. Scoped to `features/ai-copilot/types.ts`,
not the project-wide `src/types/enums.ts`, since nothing outside this
feature reads them yet.

**Library/tool (if any):** n/a

---

## 2026-08-19 — `src/features/` only for AI Copilot, not every section

**Context:** Restructuring the codebase to match `aman-starter-kit` /
`CareerSpire` conventions (`src/features/<domain>/`, `src/lib/ai/`,
`src/config/`, `src/constants/`). Sibling repos use `features/` for real
business domains (auth, payments, users) with their own
`hooks/services/schemas/types`.

**Decision:** Only `AICopilot` gets promoted to `src/features/ai-copilot/`
with real substance (service layer, hooks, types). Page sections (Hero,
Skills, Projects, Experience, etc.) stay in `components/sections/` — they
are page composition wired to one shared `useSanityQuery.ts`, not
independent domains.

**Why:** Matching the sibling repos' file *convention* isn't the same as
matching their file *count*. Forcing empty `services/`/`schemas/` folders
onto sections that have no domain logic would add indirection without
preventing any real bug — same drift-test already applied to enums in
CLAUDE.md's Code Quality Paradigms section. AI Copilot is the one place
with genuine service-shaped code (tool-calling, system-prompt building,
rate limiting) currently dumped in `app/api/chat/route.ts`.

**Library/tool (if any):** n/a

---

## 2026-08-18 — Project-count stat unified via `useProjectsCount()`

**Context:** Three independent sources disagreed on project count: Hero's
stale `profile.stats.projectsCount`, Skills' hardcoded `PROJECTS` array
from `utils/constants.tsx`, Projects page's live computation.

**Decision:** Single source of truth: `useProjectsCount()` /
`useAiProjectsCount()` in `hooks/useSanityQuery.ts`.

**Why:** Any new "stat" derived from Sanity content must go through a
shared hook, never a fresh per-component `client.fetch()` or a hardcoded
fallback array — this exact mistake caused 3 independent values to drift
before being caught.

**Library/tool (if any):** react-query (already the project's server-state
layer)

---

## 2026-08-18 — Cross-component client UI state goes in `stores/uiStore.ts`, never a new Context or CustomEvent

**Context:** AI Copilot → Projects page search handoff was implemented via
`window.dispatchEvent`/CustomEvent.

**Decision:** Replaced with Zustand `uiStore.pendingProjectSearch`. New
global UI state (mobile menu open/closed, cross-page handoffs) goes here.

**Why:** CustomEvent hacks are untyped and invisible to TypeScript;
Zustand gives a typed, greppable single source. Server/CMS data still
never belongs in this store — that stays react-query's job.

**Library/tool (if any):** Zustand — already used elsewhere, no new dep.
