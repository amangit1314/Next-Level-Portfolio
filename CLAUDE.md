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
| Animations | Framer Motion 12 | All animations go here, no CSS keyframes |
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
    features/                  → Self-contained interactive widgets
      AICopilot.tsx               → Floating AI chat assistant
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
  sanity/
    env.ts                    → Sanity env vars
    lib/client.ts             → Sanity client
    lib/queries.ts            → All GROQ queries (profileQuery, skillsQuery, etc.)
    lib/image.ts              → Image URL builder
    lib/live.ts               → Sanity live preview
    schemaTypes/              → All schema definitions
    structure.ts              → Sanity Studio structure
  types/                      → TypeScript types for CMS data
  utils/constants.tsx         → App-wide constants — NOTE: `PROJECTS` here is dead/stale,
                                do not read it for a project count (see Known Issues)
```

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
- All animations → Framer Motion. No raw CSS keyframes for component animations
- All new icons → `react-icons/fi` (Feather) or `react-icons/si` (Simple Icons) — already imported
- shadcn `ui/` components: regenerate via `npx shadcn add`, never hand-edit
- Sanity schema changes: always ask before modifying — they affect Studio and all queries

---

## Explored Map

| Path | What it does | Last touched |
|------|-------------|--------------|
| `src/app/page.tsx` | Home page — renders all sections, scroll tracking, mobile menu state. HeroSection + AboutSection rendered directly (no wrapper section) | Phase 1 |
| `src/app/layout.tsx` | Root layout — fonts, metadata, ThemeProvider > ProfileProvider > children + AICopilot | Phase 1 |
| `src/app/globals.css` | Tailwind v4 import + all theme CSS variables (:root block) + utility classes | Initial scan |
| `src/components/HeroSection.tsx` | Section #home — uses useProfile(), HeroSkeleton on load, typewriter, profile image, stats, CTAs | Phase 1 |
| `src/components/AboutSection.tsx` | Section #about — uses useProfile(), AboutSkeleton on load, bio, tech stack, ExperienceCards | Phase 1 |
| `src/contexts/ProfileContext.tsx` | ProfileProvider — single Sanity profileQuery fetch, exposes { profile, isLoading } via useProfile() | Phase 1 |
| `src/components/skeletons/HeroSkeleton.tsx` | Full-height loading skeleton matching HeroSection layout | Phase 1 |
| `src/components/skeletons/AboutSkeleton.tsx` | Loading skeleton matching AboutSection layout | Phase 1 |
| `src/components/Header.tsx` | Fixed nav — pageLinks (6 routes), sectionLinks, hamburger sidebar, ThemeSwitcher, Resume download | Initial scan |
| `src/sanity/lib/queries.ts` | All GROQ queries — profileQuery is the main one (profile + techStack + stats + socialLinks + resume) | Initial scan |
| `src/lib/fonts.ts` | Next.js font instances: inter, poppins, caveat, unbounded, righteous | Initial scan |
| `src/contexts/ThemeContext.tsx` | Theme state + CSS variable injection on :root | Initial scan |
| `src/data/ai-projects.ts` | Static AI project data (used when Sanity has no data) | Initial scan |
| `src/data/ai-blogs.ts` | Static AI blog metadata | Initial scan |
| `src/utils/constants.tsx` | PROJECTS constant + other app-wide constants | Initial scan |

---

## Known Issues

| Issue | Location | Impact |
|-------|----------|--------|
| ~~Double section IDs + double padding~~ | FIXED — HeroSection + AboutSection rendered directly in page.tsx, no wrapper sections | Phase 1 |
| ~~Sanity data loading — no loading state~~ | FIXED — HeroSkeleton + AboutSkeleton shown while ProfileContext loads | Phase 1 |
| ~~Double profileQuery fetch~~ | FIXED (again) — Skills.tsx had silently reintroduced this via its own `useProfile` import from `useSanityQuery.ts` (react-query) instead of the shared `ProfileContext`. Fixed to use `ProfileContext` like every other section. **Watch for this recurring** — two hooks are both named `useProfile` (`@/contexts/ProfileContext` vs `@/hooks/useSanityQuery`), easy to import the wrong one. | 2026-08-18 |
| ~~Project-count stat drift~~ | FIXED — three independent sources disagreed (Hero's stale `profile.stats.projectsCount`, Skills' hardcoded `PROJECTS` array from `utils/constants.tsx`, Projects page's live computation). Unified via `useProjectsCount()`/`useAiProjectsCount()` in `useSanityQuery.ts` — this is now the only place that should compute a project count. | 2026-08-18 |
| `PROJECTS` array in `utils/constants.tsx` is dead code | Nothing reads it anymore after the count-drift fix above | Cleanup candidate, not yet removed | 2026-08-18 |
| All Sanity fetches are client-side | `useEffect + client.fetch` in every section — no server fetch, no caching, multiple round trips | Future — server components pass |
| Skills, Experience, Projects, Contact, Testimonials | Still have section wrappers in page.tsx — may have same double-ID issue, not yet audited | TBD |

---

## Session Learnings

- [Initial scan] Each section component owns its own `<section id="...">` — page.tsx must not add another wrapper section with the same ID.
- [Initial scan] Theme system is fully custom CSS variables on `:root` — never import or use next-themes.
- [Phase 1] profileQuery now fetched once via ProfileProvider in layout.tsx. HeroSection + AboutSection use useProfile() hook. Don't add new direct client.fetch(profileQuery) calls anywhere.
- [Phase 1] HeroSection and AboutSection render skeletons (not null) while loading — eliminates layout shift for those two sections.
- [Initial scan] `src/data/ai-projects.ts` and `src/data/ai-blogs.ts` are static fallbacks — the real data comes from Sanity. Don't confuse the two.
- [Initial scan] HeroSection needs `min-h-screen` + full-width background — do NOT wrap it in max-w-7xl from page.tsx.
- [Phase 1] npm run build fails with "id argument must be of type string" — pre-existing Next.js build worker issue, not caused by our changes. TypeScript type-check passes clean.
- [2026-08-18] Folder structure listed above WAS stale for months — the actual `components/` split into `sections/`, `layout/`, `cards/`, `features/`, `primitives/`, `skeletons/` happened in a past `refactor(v2)` commit but this doc was never updated to match. Re-verify this doc against `ls src/components` periodically rather than trusting it blindly.
- [2026-08-18] `src/stores/uiStore.ts` (Zustand) already exists for cross-component client UI state — use it for new global UI state instead of a new Context or a `window.dispatchEvent`/CustomEvent hack (found and replaced one: AICopilot → Projects page search used a CustomEvent, now goes through `uiStore.pendingProjectSearch`). Never put Sanity/server data in this store — that's react-query's job via `useSanityQuery.ts`.
- [2026-08-18] Any new "stat" derived from Sanity content (counts, totals) must go through a shared hook in `useSanityQuery.ts`, not a fresh per-component `client.fetch()` or a hardcoded fallback array — this exact mistake caused 3 independent project-count values to drift in three different places before being caught.

---

## Growth Tips — AI Engineer Path

These are patterns in this codebase worth owning, not just accepting:

### Study Queue (from this codebase)
- [ ] **Framer Motion `layoutId`** — used in Header for active nav pill animation. Understand why it needs a stable `layoutId` across renders.
- [ ] **CSS Custom Properties cascade** — how `var(--theme-primary)` in `:root` gets consumed by Tailwind v4's `@theme` block. This is Tailwind v4's new "CSS-first config."
- [ ] **Next.js `metadata` API** — `layout.tsx` has full OG + Twitter + robots config. Worth knowing for SEO.
- [ ] **GROQ query language** — `profileQuery` in `sanity/lib/queries.ts`. Understand the `->` dereference operator and projection syntax.
- [ ] **Framer Motion `whileInView` + `viewport`** — used in AboutSection for scroll-triggered animations. Learn `once: true` vs repeated.

### What to build next (portfolio impact, high signal for AI Engineer roles)
1. ~~**Shared Sanity data context**~~ — DONE. ProfileProvider in layout.tsx, useProfile() in Hero + About.
2. ~~**Loading skeletons for Hero + About**~~ — DONE. HeroSkeleton + AboutSkeleton wired.
3. **Audit remaining sections for double-ID** — Skills, Experience, Projects, Contact may also have duplicate section wrappers in page.tsx. Quick grep job.
4. **Convert Sanity fetches to server components** — right now everything is client-side `useEffect`. Moving to `async` Server Components with `cache()` would show you understand Next.js rendering model deeply. High employer signal.
5. **AI Copilot with RAG (Groq)** — `AICopilot.tsx` exists but the `/api/chat` endpoint is likely a stub. Wire it with Groq (llama-3.3-70b), RAG over Sanity content. The highest-signal portfolio piece for AI Engineer roles.
6. **Hero + About positioning copy** — rewrite headline and bio to signal AI Engineer seniority, not just list tech.
7. **Blog content from Sanity with MDX** — check if blog pulls real Sanity content or static data.
