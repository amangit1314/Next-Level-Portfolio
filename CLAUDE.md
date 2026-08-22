# Portfolio — Project Brain

> Global workflow, mentorship rules, and response style live in `~/.claude/CLAUDE.md`.
> This file is project-specific. Both are always loaded.

---

## Commands

```bash
npm run dev       # dev server at localhost:3000
npm run build     # production build
npm run lint      # ESLint
```

---

## Exploration Tracking (Token Budget — Non-Negotiable)

Rules:
- Before reading any file: check `## Explored Map` and `## Known Issues` first
- Before scanning a folder: grep for the symbol/pattern needed, don't cat everything
- After exploring a file or module: log it in `## Explored Map`
- After a task changes a file: update only that entry
- Never re-scan the full project mid-session — state lives here

---

## Self-Healing Rules

If Claude makes a wrong assumption:
- Correct course immediately, no second prompt needed
- Log correction in `## Session Learnings` so it doesn't repeat
- Apply the fix pattern to all similar cases in the same pass

If Claude hits a gap (missing file, unknown API, unclear type):
- Grep first → read second → ask third
- Never assume — surface the unknown before implementing

Pattern repetition rule: if the same mistake appears twice in Session Learnings, Claude flags it proactively at the start of every related task.

---

## Project Architecture

### Stack

| Concern | Tool | Notes |
|---|---|---|
| Framework | Next.js 16 (App Router) | React 19, server + client components |
| Language | TypeScript (strict) | All files typed |
| Styling | Tailwind v4 + shadcn/ui | Custom CSS variable theme system — NOT next-themes |
| Animations | GSAP + ScrollTrigger (scroll-driven), Framer Motion 12 (hover/tap/layout/exit) | No raw CSS keyframes. See "Animation split" below |
| CMS | Sanity v5 | Single source of truth for all content |
| Fonts | Inter, Poppins, Caveat, Unbounded, Righteous | All in `src/lib/fonts.ts` |
| Hosting | Vercel (assumed) | `metadataBase` set to `amansoni.dev` |

### Sanity Data Model

| Schema | Used in |
|---|---|
| `profile` | HeroSection, AboutSection (name, bio, stats, socialLinks, techStack, resume, typewriterTexts) |
| `skill` | Skills section |
| `project` | Projects section |
| `experience` | Experience section |
| `blog` | /blogs and /blogs/[slug] |
| `testimonial` | Testimonials section |
| `component` | /components and /components/[slug] |

All CMS data fetched client-side via `useState` + `useEffect` + `client.fetch()`. No server components for data yet.

### Theme System

Custom CSS variable system in `src/app/globals.css` — not next-themes.

- Context: `src/contexts/ThemeContext.tsx`
- Variables set on `:root` → consumed via `bg-theme-primary`, `text-theme-text-secondary`, etc.
- Default theme: Cyber Emerald (primary) + Neon Indigo (secondary) + Electric Cyan (accent)
- Dark-only — no light mode CSS defined, `data-theme-mode` attribute switches shadows only

### Layout Rule (Critical)

**Every section component owns its own `<section id="...">`, its own padding, and its own `max-w-7xl mx-auto`.**

`page.tsx` must NOT re-wrap them in another `<section>` with padding — that creates duplicate IDs and double-padding that breaks mobile.

### Folder Structure

```
src/
  app/
    api/
      chat/route.ts           → AI Copilot chat endpoint
      report-bug/route.ts     → Bug report endpoint
    blogs/
      [slug]/page.tsx         → Individual blog post
      _components/            → BlogArticleLayout
      page.tsx                → Blog listing
    components/               → /components showcase page + [slug]
    playground/page.tsx       → Interactive playground
    terminal/page.tsx         → Terminal UI page
    projects/page.tsx         → Full projects page
    studio/[[...tool]]/       → Sanity Studio embedded
    page.tsx                  → Home (all sections)
    layout.tsx                → Root layout (fonts, metadata, ThemeProvider)
    globals.css               → Tailwind v4 + all theme CSS variables
  components/                 → Domain folders (v2 restructure, Jun 2026) — no flat files at this level
    sections/                  → One file per <section id="..."> on the home page
      HeroSection.tsx            → #home — profile image, typewriter, stats, CTAs
      AboutSection.tsx           → #about — bio, tech stack, experience cards
      Skills.tsx                 → #skills — skill cards by category
      Experience.tsx             → #experience — timeline of roles
      Projects.tsx                → #projects — project cards with filter
      Testimonials.tsx           → Testimonials marquee
      Contact.tsx                → #contact — contact form
    layout/                    → Chrome shared across every page
      Header.tsx                 → Fixed top nav (desktop) + hamburger sidebar (mobile)
      Footer.tsx
      MobileBottomNav.tsx        → Bottom tab bar shown on mobile when menu closed
      ScrollProgress.tsx         → Top progress bar on scroll
      Providers.tsx               → QueryClientProvider (react-query) wrapper
    features/                  → Self-contained interactive widgets (UI only — see src/features/ for domain logic)
      ThemeSwitcher.tsx          → Theme selector UI
      BugReportDialog.tsx        → Bug report modal
    cards/                     → Reusable card presentational components
      ExperienceCard.tsx, ProjectCard.tsx, SkillCard.tsx, TestimonialCard.tsx
    primitives/                → Small UI utilities, no section context
      Avatar.tsx, Magnetic.tsx, BackgroundCircles.tsx, HeroBackground.tsx,
      HoverImageLinks.tsx, SearchFilter.tsx
    skeletons/                 → Loading skeletons, one per section/page that needs one
    ui/                        → shadcn primitives — regenerate via CLI, never hand-edit
    magicui/marquee.tsx        → Magic UI marquee for Testimonials
  contexts/
    ThemeContext.tsx           → Custom theme state + CSS variable injection
    ProfileContext.tsx         → Single shared profileQuery fetch (see Session Learnings)
  stores/
    uiStore.ts                 → Zustand — cross-component client UI state only (mobile
                                  menu open/close, AI-Copilot→Projects search handoff).
                                  Server data (Sanity) stays in react-query, never here.
  hooks/
    useSanityQuery.ts          → react-query hooks per Sanity query (useSkills, useProjects,
                                  useProjectsCount, etc.) — single source of truth per stat;
                                  don't hand-roll a duplicate client.fetch() for something
                                  already covered here.
  data/
    ai-blogs.ts                → Static AI blog metadata
    ai-projects.ts             → Static AI project data — statically bundled, needs a
                                  rebuild+redeploy to reflect edits (unlike Sanity content)
  lib/
    fonts.ts                  → All Next.js font instances
    themes.ts                 → Theme definitions (colors, names)
    themeUtils.ts             → Theme helper functions
    utils.ts                  → cn() utility
    ai/groq.ts                → Raw Groq chat-completions client (no domain logic —
                                  that's in src/features/ai-copilot/services/)
    ai/embeddings.ts           → Local embeddings (@huggingface/transformers,
                                  Xenova/all-MiniLM-L6-v2, 384-dim) — zero API cost,
                                  used by the RAG reindex script + searchContent tool
  supabase/
    serverClient.ts             → Service-role Supabase client, server-only. RAG table
                                  (portfolio_rag_chunks) RLS is service-role-only.
  sanity/
    env.ts                    → Sanity env vars
    lib/client.ts             → Sanity client
    lib/queries.ts            → All GROQ queries (profileQuery, skillsQuery, etc.)
    lib/image.ts              → Image URL builder
    lib/live.ts               → Sanity live preview
    schemaTypes/              → All schema definitions
    structure.ts              → Sanity Studio structure
  types/                      → TypeScript types for CMS data
  constants/
    socialLinks.tsx            → SOCIAL_LINKS — replaces old utils/constants.tsx (dead
                                  EXPERIENCES/PROJECTS/TESTIMONIALS/CONTACT exports deleted,
                                  all superseded by Sanity)
  features/                    → Domain slices with real service logic (not UI widgets —
                                  those stay in components/features/). Only created where
                                  a domain earns it — see docs/DECISIONS.md 2026-08-19.
    ai-copilot/
      components/AICopilot.tsx   → moved from components/features/
      services/systemPrompt.ts   → candidate-context + system-instruction builder (Sanity)
      services/tools.ts          → Groq tool-calling definitions
      types.ts                   → ChatRole/CopilotTool/ThemeMode/PortfolioSection enums
                                    + ChatMessage/ToolCall types — centralized because each
                                    is compared in 2+ files (schema + client switch)
      hooks/useCopilotChat.ts    → messages state, tool executor, sendMessage — component
                                    stays presentational
      services/retrieval.ts      → searchContent — embeds query, calls Supabase
                                    match_portfolio_chunks RPC. Executed server-side
                                    in api/chat/route.ts, NOT in useCopilotChat's
                                    client-side executeTool (unlike the other tools).
```

**RAG infra (2026-08-19):** Supabase Postgres + pgvector, reusing the existing
`ApplyPilot` project — dedicated `portfolio_rag_chunks` table, RLS locked to
service-role. Reindex after any Sanity content edit: `npm run reindex`
(fetches projects/skills/experience, embeds, upserts — not automatic/webhook).
`GET /api/keepalive` + daily Vercel Cron (`vercel.json`) keep the Supabase
free-tier project from pausing after 7 days idle. Full reasoning:
`docs/DECISIONS.md` 2026-08-19 "Real RAG".

**Central constants/enums (2026-08-19 app-wide pass — don't re-survey, this is current):**
- `src/types/enums.ts` — `Route` (was hand-typed in 6 files: Header's `pageLinks`,
  `middleware.ts`, `AICopilot.tsx`, `useCopilotChat.ts`, `Projects.tsx`), `QueryKey`
  (react-query cache keys, used as `[QueryKey.X]` — array shape, not a bare enum value)
- `src/config/site.ts` — `SITE_URL`
- `src/config/query.ts` — `STALE_TIME`, `GC_TIME`, `REQUEST_TIMEOUT_MS`
- Checked and deliberately left alone (real duplication, not worth centralizing —
  don't re-flag these): `"Server config error"` string in 2 API routes (each
  guards a different env var, zero functional risk from divergence); hex colors
  in `playground/page.tsx` and `terminal/page.tsx` (single-file, semantically
  local to one visualization, not theme-system colors)
- Found but NOT yet acted on: `src/components/primitives/Avatar.tsx` and
  `BackgroundCircles.tsx` have zero importers anywhere in `src/` — dead code,
  predates the theme system (raw hex borders/gradients, not `bg-theme-*`).
  Candidate for deletion; ask before removing since not explicitly requested.

### Key Lookups

- Theme variables → `src/app/globals.css` (`:root` block)
- Theme context/switcher → `src/contexts/ThemeContext.tsx`
- Cross-component client UI state → `src/stores/uiStore.ts` (Zustand) — add here, not a new Context, for anything genuinely global (open/closed flags, cross-page handoffs). Server/CMS data always goes through `useSanityQuery.ts`, never into this store.
- All fonts → `src/lib/fonts.ts`
- All GROQ queries → `src/sanity/lib/queries.ts`
- Nav links (page-level) → `src/components/Header.tsx` (`pageLinks` array)
- Nav links (section-level) → `src/components/Header.tsx` (`sectionLinks` array)
- Static projects data → `src/data/ai-projects.ts`
- Static blogs data → `src/data/ai-blogs.ts`
- Sanity schemas → `src/sanity/schemaTypes/`

---

## Project Rules

- No new features unless explicitly scoped
- Files < 500 lines — split if over
- NEVER commit `.env` or secrets
- **Animation split (2026-08-22, feat/hud-chrome):** scroll-driven animation
  (section reveals, stagger, scroll-linked parallax) → GSAP + ScrollTrigger via
  `useScrollReveal` (`src/hooks/useScrollReveal.ts`) — don't hand-roll a new
  ScrollTrigger, extend the hook. Everything non-scroll (hover/tap, layout
  animations, `AnimatePresence` unmounts, filter-switch transitions) stays
  Framer Motion. No raw CSS keyframes either way. Full rationale:
  `docs/superpowers/specs/2026-08-22-gsap-scroll-animation-core-design.md`
- All new icons → `react-icons/fi` (Feather) or `react-icons/si` (Simple Icons) — already imported
- shadcn `ui/` components: regenerate via `npx shadcn add`, never hand-edit
- Sanity schema changes: always ask before modifying — they affect Studio and all queries

---

## Explored Map

Full-codebase pass done 2026-08-19 (122 files under `src/`). This table is
current — re-verify only the specific area you're about to touch, don't
re-survey the whole tree.

| Path | What it does |
|------|-------------|
| `src/app/page.tsx` | Home — renders Header, HeroSection, AboutSection, Skills, Experience, Projects, Testimonials, Contact, Footer directly. No wrapper `<section>` anywhere — each section owns its own `<section id="...">`. Confirmed clean 2026-08-19. |
| `src/app/layout.tsx` | Root layout — fonts, metadata (uses `SITE_URL`), `<StructuredData>` (Person JSON-LD), `Providers` (react-query + nuqs + ThemeProvider), `AICopilot`, `MobileBottomNav` |
| `src/app/sitemap.ts` | Merges 3 sources: static app routes, static AI blog slugs (`data/ai-blogs.ts`), live Sanity blog slugs. All three needed — the AI blogs aren't in Sanity, dropping them was a real regression caught and fixed 2026-08-19. |
| `src/app/robots.ts` | Static rules, `sitemap` field uses `SITE_URL` |
| `src/app/llms.txt/route.ts` | AI-crawler summary (llmstxt.org convention) — merges Sanity projects/skills with static `data/ai-projects.ts` (same merge requirement as sitemap.ts, same bug class, fixed same day) |
| `src/components/layout/StructuredData.tsx` | Server component, Person JSON-LD from `profileQuery` |
| `src/components/layout/Header.tsx` | `pageLinks` (uses `Route` enum) + `sectionLinks`, hamburger sidebar, ThemeSwitcher, Resume download |
| `src/components/sections/*.tsx` | One file per home-page section (Hero, About, Skills, Experience, Projects, Testimonials, Contact) — each owns its own `<section id>`, uses `useProfile()` from `useSanityQuery.ts` |
| `src/hooks/useSanityQuery.ts` | Every Sanity read goes through here — `useSkills/useExperiences/useProjects/useBlogs/useProfile/useTestimonials/useComponents/useProjectsCount/useAiProjectsCount`. All use `QueryKey` enum + `STALE_TIME` from `config/query.ts`. Single source of truth — don't hand-roll a `client.fetch()` elsewhere. |
| `src/lib/gsap.ts` | Client-only `ScrollTrigger` + `useGSAP` registration, one place, mirrors `fonts.ts`/`themes.ts`. |
| `src/hooks/useScrollReveal.ts` | The one scroll-animation primitive — `fade-up`/`stagger-lines`/`stagger-rows` variants, `data-reveal-item` marks stagger children (direct children only, via `:scope >`), `prefers-reduced-motion` handled once inside it. Used by every section + `ProjectCard`/`SkillCard`/`TestimonialCard` + the 3 list pages. Pass `deps` when the ref sits behind a conditional/loading-gated render (see `AboutSection.tsx`) — otherwise the effect fires once while `ref.current` is still null and never retries. |
| `src/features/ai-copilot/` | AI Copilot — see "RAG infra" note below, full detail in `docs/DECISIONS.md` |
| `src/app/api/chat/route.ts` | Thin HTTP wrapper — rate-limits, calls `runCopilotChat()` (chatService.ts), returns JSON |
| `src/app/dashboard/` | Password-gated analytics dashboard (`page.tsx`, `login/page.tsx`, `layout.tsx`) — gated by `middleware.ts` checking a `dashboard_session` cookie set by `api/dashboard/auth/route.ts`. `api/dashboard/analytics/route.ts` reads Vercel Analytics via `DASHBOARD_VERCEL_TOKEN`. Real domain logic, correctly organized as an App Router route (not `src/features/` — it's a page, not a cross-cutting widget). |
| `src/app/playground/page.tsx` | Interactive playground — has its own local status-visualization hex colors (`#10b981` etc.), single-file/local, not a theme-system violation |
| `src/app/terminal/page.tsx` | Terminal UI — `sanityData` state merges `useProfile()` (context) with its own `projects/experiences/skills` fetch |
| `src/app/components/` | `/components` showcase page + `[slug]` detail page — separate from `src/components/` (the actual React component folder); this is a portfolio content type (reusable code snippets shown off), sourced from `componentsQuery`/`componentBySlugQuery` |
| `src/app/blogs/` | `page.tsx` (listing), `[slug]/page.tsx` (Sanity-driven posts), plus 3 static bundled posts under their own slug folders (`doc-extraction-agent-visual-grounding/`, etc.) sourced from `data/ai-blogs.ts`, `_components/BlogArticleLayout.tsx` shared layout |
| `src/app/api/report-bug/route.ts` | 33-line webhook proxy to `N8N_BUG_WEBHOOK_URL` — intentionally not a `src/features/` slice, too small to earn it (checked 2026-08-19) |
| `src/middleware.ts` | Gates `/dashboard*` + `/api/dashboard*` behind the session cookie; uses `Route.Dashboard` enum |
| `src/contexts/ThemeContext.tsx` | Theme state + CSS variable injection on `:root` — the only remaining Context (ProfileContext deleted 2026-08-19, react-query replaced it entirely) |
| `src/stores/uiStore.ts` | Zustand — confirmed genuinely used: `Header.tsx` (mobile menu), `projects/page.tsx` + `useCopilotChat.ts` (AI-Copilot→Projects search handoff) |
| `src/data/ai-projects.ts` / `ai-blogs.ts` | Static, bundled content — NOT a Sanity fallback, these are permanent hand-authored entries merged alongside Sanity content everywhere they're shown (Projects page, counts, sitemap, llms.txt). A rebuild+redeploy is required to reflect edits. |
| `src/config/site.ts` | `SITE_URL` |
| `src/config/query.ts` | `STALE_TIME`, `GC_TIME`, `REQUEST_TIMEOUT_MS` |
| `src/types/enums.ts` | `Route`, `QueryKey` — project's only centralized cross-file enums |
| `src/constants/socialLinks.tsx` | `SOCIAL_LINKS` — the one surviving export from the deleted `utils/constants.tsx` |
| `src/lib/ai/groq.ts` | Raw Groq client, `max_completion_tokens`/`reasoning_effort` for gpt-oss-120b, `AbortSignal.timeout()` |
| `src/lib/ai/embeddings.ts` | Local embeddings, `@huggingface/transformers`, `Xenova/all-MiniLM-L6-v2`, 384-dim, zero API cost |
| `src/lib/supabase/serverClient.ts` | Service-role Supabase client, server-only |
| `scripts/reindex-rag.ts` / `eval-copilot.ts` / `promote-interactions.ts` | `npm run reindex` / `eval` / `eval:review` |

**RAG infra (2026-08-19):** Supabase (`ApplyPilot` project, reused — dedicated
`portfolio_rag_chunks` + `portfolio_copilot_interactions` tables, RLS
service-role-only) + pgvector + local embeddings. `searchContent` tool
resolved server-side in `chatService.ts` (2-pass Groq call). Full reasoning
and the AI Gateway billing dead-end that led to local embeddings:
`docs/DECISIONS.md` 2026-08-19 "Real RAG".

---

## Known Issues

| Issue | Status |
|-------|--------|
| ~~Double section IDs + double padding~~ | FIXED, confirmed clean app-wide 2026-08-19 — every home-page section owns its own `<section id>`, page.tsx adds no wrapper |
| ~~Sanity data loading — no loading state~~ | FIXED — HeroSkeleton + AboutSkeleton |
| ~~Double/scattered profileQuery fetch~~ | FIXED FOR GOOD 2026-08-19 — `ProfileContext.tsx` deleted, only `hooks/useSanityQuery.ts`'s `useProfile()` exists now. Collision is structurally impossible. |
| ~~Project-count stat drift~~ | FIXED — unified via `useProjectsCount()`/`useAiProjectsCount()` |
| ~~`utils/constants.tsx` dead code~~ | FIXED — deleted, `SOCIAL_LINKS` moved to `src/constants/socialLinks.tsx` |
| ~~Route paths hand-typed in 6 files~~ | FIXED 2026-08-19 — `Route` enum in `src/types/enums.ts` |
| ~~Sitemap/llms.txt dropped static AI blogs/projects~~ | FIXED 2026-08-19 — a regression from the same day's earlier fix (Sanity-only fetch replaced a list that also needed the static entries); both routes now merge both sources |
| All Sanity fetches are client-side | `useEffect`/react-query in every section — no server components/fetch yet. Not urgent; noted as future work below. |
| Rate limiter in `api/chat/route.ts` is in-memory | Resets per server instance — not a real global limit under Vercel's horizontally-scaled Fluid Compute. Proper fix is Upstash Redis (new infra dependency) — flagged, not silently added, your call. |
| `Avatar.tsx` / `BackgroundCircles.tsx` (primitives) | Zero importers anywhere in `src/` — dead code, predates the theme system (raw hex, not `bg-theme-*`). Not deleted — wasn't asked, flagging for a decision. |

---

## Session Learnings

- Each section component owns its own `<section id="...">` — page.tsx must not add another wrapper section with the same ID. Confirmed true app-wide, not just Hero/About.
- Theme system is fully custom CSS variables on `:root` — never import or use next-themes.
- `src/data/ai-projects.ts` and `ai-blogs.ts` are NOT Sanity fallbacks — they're permanent static content merged alongside Sanity everywhere content is aggregated (project/blog lists, counts, sitemap, llms.txt). Any new aggregation point (a new count, a new feed, a new crawler-facing route) must merge both sources or it'll silently under-report — this exact mistake happened twice in one day (sitemap.ts, then llms.txt) before being caught.
- `npm run build` fails with "id argument must be of type string" — pre-existing Next.js build worker issue, unrelated to app changes. `tsc --noEmit` is the reliable check.
- `src/stores/uiStore.ts` (Zustand) is for cross-component client UI state only (mobile menu, AI-Copilot→Projects search handoff) — never Sanity/server data, that's react-query's job.
- Any new "stat" derived from Sanity content must go through `useSanityQuery.ts`, never a fresh per-component `client.fetch()` — this caused a 3-way count drift before being caught once already.
- Centralize a value into `src/types/enums.ts`/`src/config/` only when compared/branched on in 2+ files (the drift-test in `~/.claude/CLAUDE.md`). Checked and deliberately left alone 2026-08-19: `"Server config error"` string duplicated in 2 API routes (each guards a different env var, zero functional risk), hex colors in `playground/page.tsx`/`terminal/page.tsx` (single-file, local to one visualization). Don't re-flag these.
- AI-copilot's own enums (`ChatRole`, `CopilotTool`, `ThemeMode`, `PortfolioSection`) deliberately stay in `features/ai-copilot/types.ts`, not the central `enums.ts` — compared only within that one feature, centralizing would be indirection with no second consumer to protect.
- `src/features/` is reserved for domains with real service logic that aren't a page (currently only `ai-copilot`). Checked 2026-08-19: bug-report (33-line webhook proxy) and dashboard (real logic, but it's already a correctly-organized App Router route, not a widget) don't qualify — don't promote them without new logic that actually earns it.

---

## Growth Tips — AI Engineer Path

### Study Queue (from this codebase)
- [ ] **Framer Motion `layoutId`** — Header's active nav pill animation.
- [ ] **CSS Custom Properties cascade** — `var(--theme-primary)` → Tailwind v4's `@theme` block.
- [ ] **Next.js `metadata` API** — `layout.tsx`'s OG + Twitter + robots config.
- [ ] **GROQ query language** — `->` dereference + projection syntax in `sanity/lib/queries.ts`.
- [ ] **pgvector + HNSW indexing** — `docs/DECISIONS.md`'s RAG entry; understand cosine distance (`<=>`) vs the similarity floor used in `retrieval.ts`.
- [ ] **Reasoning-model token budgets** — why gpt-oss-120b needed `max_completion_tokens` + `reasoning_effort` instead of the old `max_tokens` (see Groq model-swap decision).

### What to build next (portfolio impact, high signal for AI Engineer roles)
1. ~~Shared Sanity data context~~ — DONE, then further consolidated onto react-query only (ProfileContext deleted).
2. ~~Loading skeletons for Hero + About~~ — DONE.
3. ~~Audit remaining sections for double-ID~~ — DONE, confirmed clean 2026-08-19.
4. ~~AI Copilot with real RAG~~ — DONE 2026-08-19 (Groq gpt-oss-120b, Supabase pgvector, local embeddings).
5. ~~Eval harness~~ — DONE 2026-08-19 (`npm run eval`, 12 golden questions, no LLM judge).
6. **Convert Sanity fetches to server components** — still client-side `useEffect`/react-query everywhere. Moving key pages to `async` Server Components with `cache()` is the next high-signal Next.js-rendering-model demonstration. Not started.
7. **Streaming chat responses** — copilot still returns a single blocking JSON response. Token-by-token streaming is expected UX for a production LLM chat surface.
8. **Rate limiting via Upstash Redis** — replace the in-memory Map (see Known Issues).
9. Hero + About positioning copy — still worth a pass for AI-engineer-seniority signal specifically.
