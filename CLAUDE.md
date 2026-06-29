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
  components/
    HeroSection.tsx           → Section #home — profile image, typewriter, stats, CTAs
    AboutSection.tsx          → Section #about — bio, tech stack, experience cards
    Skills.tsx                → Section #skills — skill cards by category
    Experience.tsx            → Section #experience — timeline of roles
    Projects.tsx              → Section #projects — project cards with filter
    Testimonials.tsx          → Testimonials marquee
    Contact.tsx               → Section #contact — contact form
    Header.tsx                → Fixed top nav (desktop) + hamburger sidebar (mobile)
    Footer.tsx                → Footer
    MobileBottomNav.tsx       → Bottom tab bar shown on mobile when menu closed
    AICopilot.tsx             → Floating AI chat assistant
    ScrollProgress.tsx        → Top progress bar on scroll
    ThemeSwitcher.tsx         → Theme selector UI
    BugReportDialog.tsx       → Bug report modal
    ExperienceCard.tsx        → Used inside AboutSection
    SkillCard.tsx             → Used inside Skills
    ProjectCard.tsx           → Used inside Projects
    Avatar.tsx, Magnetic.tsx  → UI utilities
    ui/                       → shadcn primitives — regenerate via CLI, never hand-edit
    magicui/marquee.tsx       → Magic UI marquee for Testimonials
    skeletons/                → Loading skeletons per section
  contexts/
    ThemeContext.tsx           → Custom theme state + CSS variable injection
  data/
    ai-blogs.ts               → Static AI blog metadata
    ai-projects.ts            → Static AI project data
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
  utils/constants.tsx         → App-wide constants (PROJECTS, etc.)
```

### Key Lookups

- Theme variables → `src/app/globals.css` (`:root` block)
- Theme context/switcher → `src/contexts/ThemeContext.tsx`
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
| ~~Double profileQuery fetch~~ | FIXED — ProfileProvider fetches once, HeroSection + AboutSection consume via useProfile() | Phase 1 |
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
