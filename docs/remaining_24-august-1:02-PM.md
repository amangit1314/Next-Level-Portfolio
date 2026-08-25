# Remaining — Animation & Smoothness Sweep

> feat/hud-chrome. Continuation of the Lenis smooth-scroll work
> (`3b0f99e`). Ordered punch list, approved by Aman — see chat history for
> the original 4-area plan. Update this file as each item lands so a new
> session can resume without re-deriving context.

## Status

| # | Area | Status |
|---|------|--------|
| 1 | Perceived performance | **Done, browser-verified** — CLS fix confirmed: Skills/Experience/Projects/Testimonials skeletons resolve cleanly to real content, no layout jump. |
| 2 | Scroll-reveal polish | **Done, browser-verified** — Skills grid, Experience timeline, Projects cards all reveal without visual regression. |
| 3 | Micro-interactions | **Done (code-complete)** — hover/tap states are inherently interactive-only; not exercised by the automated pass (see verification note below). |
| 4 | Page/section transitions | **Done, browser-verified** — Home → /projects nav captured mid-flight: real crossfade (blur+fade, no hard cut) confirmed via screenshot at ~80ms into the transition, then settles clean. |

**Browser verification pass (2026-08-25):** ran the existing dev server
(`localhost:3000`) headless via Playwright (no `chromium-cli`/Claude-in-Chrome
available in this environment), screenshotted Home/Skills/Experience/Projects/
Contact, the `/projects` list page, and a live nav transition. Zero console
errors across all of it. `git status` and `tsc --noEmit` reconfirmed clean
against this doc's file list before starting. Not exercised: actual
hover/tap pointer feedback (area 3) and Lenis lerp "feel" (subjective, needs
a human scrolling) — both are code-complete but need Aman's own pass, not an
automated one.

Plus post-sweep fixes from live browser feedback (screenshots against
saifullah.dev/projects as reference):
- `HudScrollSlider` thumb: was a literal `w-1 h-1` (1x1px) dot — barely
  visible. Enlarged to a `w-1 h-8` bar (done).
- That change introduced two regressions, both fixed: (a) a CSS
  `transition-[top]` fighting Lenis's own per-frame eased updates, read as
  sluggish/laggy; (b) the taller bar poking past the track's top/bottom
  edge at scroll progress 0/1 (fixed via pixel-math clamped travel range
  instead of `top:0-100% + translate-y(-50%)`).
- **Lenis feel — done (code-complete, not browser-verified).** Root cause:
  Lenis only runs its `lerp` continuous-smoothing mode when `duration` is
  unset — our config passed `duration: 1.1` + a custom easing, which
  switches Lenis to a per-scroll-event tween (ease to a target, then stop)
  instead of the continuous per-frame re-chasing that produces a "rolling"
  feel. Reference sites like saifullah.dev use lerp mode, not duration
  mode, for that heavier momentum. Fix: `LenisProvider.tsx` now passes
  `lerp: 0.075` (no `duration`/`easing`) — between Lenis's own
  `smoothWheel` default (0.1) and `touch` default (0.075), for noticeably
  more roll without going unresponsive. **Not yet browser-verified** —
  this is a feel-tuning change, needs an actual scroll test; if 0.075
  still isn't heavy enough, lower it further (0.05–0.06) rather than
  reintroducing duration mode.

Plus three ad-hoc fixes landed mid-sweep (from screenshots, not the punch list):
- `HudScrollSlider` extended to Home + synced to Lenis's eased `progress` (done, uncommitted — see below)
- Hero stats: dropped redundant "Agents" stat (done)
- AICopilot suggestion pills: added `cursor-pointer` (done)
- `HudTicker` (top-bar marquee: RENDERING/AVAILABILITY/etc.) given the same
  left/right edge-fade treatment as Testimonials' marquee — two absolute
  `linear-gradient(..., var(--hud-bg), transparent)` divs over the track,
  `--hud-bg` not `--theme-bg-primary` since HudTicker lives in the HUD
  chrome's own token set, not the v2 theme (done)

## 1. Perceived performance — detail

**Audited, no change needed:**
- `LenisProvider.tsx` — `duration: 1.1` + custom expo-out easing is a reasonable "buttery" value. Not touched.
- `useScrollReveal` scrub/once — no call site passes `scrub: true` anywhere in the codebase. No mismatch exists.
- Images — all `next/image`, all either explicit `width`/`height` or `fill` inside an explicitly-sized parent. No image-driven CLS.

**Fixed — CLS from unguarded Sanity-loading sections:**
`Skills`, `Experience`, `Projects` (home section), `Testimonials` fetched via
react-query and rendered straight from `data = []` with no loading branch,
unlike Hero/About (which already had skeletons). Section was ~0px tall
until Sanity resolved, then jumped to full height — a real layout shift on
every fresh load.

Fix applied (matches the existing `HeroSkeleton`/`AboutSkeleton` pattern,
but `rounded-none` to match this branch's HUD/v2 sharp-corner identity
rather than the older `rounded-xl` style those two use):
- Added `src/components/skeletons/SkillsSkeleton.tsx`
- Added `src/components/skeletons/ExperienceSkeleton.tsx`
- Added `src/components/skeletons/ProjectsSkeleton.tsx` (home section — not
  `ProjectListRowSkeleton`, which is the separate `/projects` page)
- Added `src/components/skeletons/TestimonialsSkeleton.tsx`
- Wired `isLoading` from each section's `useSanityQuery.ts` hook
  (`useSkills`/`useExperiences`/`useProjects`/`useTestimonials`) into an
  early-return skeleton, same shape as `HeroSection.tsx`'s
  `if (isLoading || !profile) return <HeroSkeleton />;`
- Every `useScrollReveal` call in these 4 sections now passes
  `deps: [isLoading]` — the ref sits behind the loading gate, so without
  this the reveal effect fires once while `ref.current` is still null and
  never retries (documented in `useScrollReveal`'s own JSDoc).

**Not yet done — remaining for area 1:**
- Have not visually verified any of the 4 new skeletons in the running
  dev server (`npm run dev`) — dimensions were estimated from each
  section's real markup, not measured. Worth a quick look per section,
  especially `ExperienceSkeleton`'s card count/height and
  `TestimonialsSkeleton`'s marquee row (real one is an infinite marquee,
  skeleton is a static 4-card row — close enough, not pixel-identical).
- `npx tsc --noEmit` is clean after all 4 wiring changes (this is the
  reliable check on this branch — `npm run build` fails on a pre-existing,
  unrelated Next.js build-worker issue, see project `CLAUDE.md` Session
  Learnings).

## 2. Scroll-reveal polish — done (code-complete, not browser-verified)

Audited all 20 `useScrollReveal` call sites first. Original assumption
("uniform stagger/timing everywhere") was partly wrong — `stagger`/`delay`/
`start` are already well-differentiated per call site (`SkillCard` uses
`start: "top 95%"` + `delay: index * 0.025` for its dense grid, `Experience`'s
timeline dot already overrides `ease: "back.out(2)"`). What actually was
uniform: every reveal used the same `power3.out` ease, full stop.

`start: "top 85%"` — checked, GSAP's `%` trigger is viewport-relative so it
already scales correctly across screen sizes. No bug, left unchanged.

Fix applied — added a `VARIANT_EASE` map to
`src/hooks/useScrollReveal.ts` (same pattern as the existing
`VARIANT_FROM`/`VARIANT_STAGGER`), still overridable per call site via
`opts.ease`:
- `fade-up` → `power3.out` (unchanged — single large elements: hero text,
  section headers, deliberate settle)
- `stagger-lines` → `power3.out` (unchanged — text lines)
- `stagger-rows` → `power2.out` (changed — grid/list pop-ins: card grids,
  list rows. Snappier since each item's travel distance is small; reads
  more alive on reveal)

**Not yet done:** not visually verified in the running dev server — this
is a subjective "feel" change and should be eyeballed on Skills' grid,
Projects' cards, and the `/projects`, `/blogs`, `/components` list-page
rows (all `stagger-rows` consumers) before considering it final.

## 3. Micro-interactions — done (code-complete, not browser-verified)

Audited first: `Contact.tsx` already has good `whileHover`/`whileTap`
treatment (not a gap, contradicts original plan's assumption).
`ExperienceCard`/`ProjectCard` had `whileHover` only, no tap feedback.
`HeroSpecializationSwitcher`'s pills had zero interaction feedback — plain
CSS `transition-colors`, nothing on hover/tap.

Fixes applied:
- `src/components/sections/HeroSpecializationSwitcher.tsx` — added
  `hover:scale-[1.04] active:scale-95` (Tailwind/CSS only, **not**
  Framer Motion). This file has an explicit documented exception at its
  top: GSAP-driven by deliberate one-off request, not Framer — adding
  `whileHover`/`whileTap` here would have contradicted that. Plain CSS
  transform utilities don't cross that line.
- `src/components/cards/ExperienceCard.tsx` — removed `cursor-pointer`.
  This card (About section's experience-years stat display) has no
  `onClick`/`Link` — the pointer cursor was promising interactivity that
  didn't exist. A correctness fix, not just polish.
- `src/components/cards/ProjectCard.tsx` — added `whileTap={{ scale: 0.98
  }}` to the outer card. Its existing mouse-tilt glow is desktop-only
  (driven by `mousemove`); this is the only feedback touch users get,
  since the card wraps 3 separate `<Link>`s rather than being one target.

**Deliberately not done — `Magnetic` extension:** the punch list floated
extending `Magnetic.tsx` (currently only used in `Header.tsx`) to HUD
elements like the menu pill/settings trigger. Decided against it: this
branch's identity is explicitly sharp/rigid/data-console (see `HudChrome.tsx`
top comment, "sharp corners throughout"), and a magnetic pull toward the
cursor reads as generic web fluff that cuts against that precision. Not a
gap — a considered no.

**Not yet done:** not visually verified in the running dev server —
`active:scale-95` in particular only shows on a real tap/click, worth
confirming it doesn't feel too snappy/subtle in practice.

## 4. Page/section transitions — done (code-complete, not browser-verified)

Root cause found: `src/app/template.tsx` could only ever animate an
*entrance*. Next.js templates remount fresh on every navigation — by the
time the new instance mounts, the previous one is already gone — and
Next's own docs say explicitly that templates don't support exit
animations. So every route change was: outgoing page vanishes instantly
(hard cut), incoming page fades in after. The 0.5s fade+blur+slide was
real, it just started from a cut, not a crossfade.

HUD chrome (status bar, ticker, identity, menu) — checked, mounted outside
`{children}` in `layout.tsx`, doesn't remount on nav. Confirmed this is
correct as-is, not a bug: it's persistent chrome, not page content: it
shouldn't re-animate every time you navigate.

Fix applied:
- Deleted `src/app/template.tsx`.
- Added `src/components/layout/PageTransition.tsx` — a client component
  that wraps `{children}` with `AnimatePresence mode="wait"`, keyed on
  `usePathname()`. Wired into `src/app/layout.tsx` in template.tsx's old
  spot: `<PageTransition>{children}</PageTransition>`. Because this
  component lives in the root layout (which itself doesn't remount),
  `AnimatePresence` can see both the outgoing and incoming page and run a
  real exit-then-enter, instead of template.tsx's remount-only entrance.
- Exit and enter have separate transitions (asymmetric on purpose): exit
  `{ opacity: 0, y: -12, blur: 6px }` over 0.25s (`easeIn`), enter
  `{ opacity: 0→1, y: 20→0, blur: 10px→0 }` over 0.4s (`easeOut`, same
  values `template.tsx` used). `mode="wait"` runs them sequentially, so a
  symmetric 0.4/0.4 would read as an 0.8s wait on every nav — the shorter
  exit keeps it feeling fast while still killing the hard cut.

**Not yet done:** not visually verified — navigate between pages
(Home → Projects → Blogs → Components) in the dev server and confirm the
crossfade reads as intended, and that scroll position / Lenis state don't
do anything odd across the transition (untested).

## Uncommitted changes at time of writing

`git status` on `feat/hud-chrome` currently has these files modified/added
and NOT committed:
- `src/components/layout/hud/HudStatusBar.tsx` (pre-existing, unrelated to
  this sweep — mobile overlap fix, was already dirty at session start)
- `src/lib/lenisScroll.ts` (`getLenisInstance` added)
- `src/components/layout/hud/HudScrollSlider.tsx` (Lenis-synced progress)
- `src/components/layout/hud/HudChrome.tsx` (slider extended to Home)
- `src/components/sections/HeroSection.tsx` ("Agents" stat dropped)
- `src/features/ai-copilot/components/AICopilot.tsx` (`cursor-pointer` on
  suggestion pills)
- `src/components/sections/Skills.tsx`, `Experience.tsx`, `Projects.tsx`,
  `Testimonials.tsx` (isLoading skeleton wiring)
- New files: `src/components/skeletons/SkillsSkeleton.tsx`,
  `ExperienceSkeleton.tsx`, `ProjectsSkeleton.tsx`, `TestimonialsSkeleton.tsx`
- `src/hooks/useScrollReveal.ts` (`VARIANT_EASE` map)
- `src/components/layout/hud/HudTicker.tsx` (edge fades)
- `src/components/sections/HeroSpecializationSwitcher.tsx` (hover/tap scale)
- `src/components/cards/ExperienceCard.tsx` (removed misleading cursor-pointer)
- `src/components/cards/ProjectCard.tsx` (whileTap on outer card)
- Deleted `src/app/template.tsx`; added `src/components/layout/PageTransition.tsx`
- `src/app/layout.tsx` (wired `PageTransition` in place of bare `{children}`)
- `src/components/layout/hud/HudScrollSlider.tsx` (bar thumb + fixed lag/overflow regressions)
- `src/components/layout/LenisProvider.tsx` (switched duration+easing → lerp mode)

Nothing has been committed yet — Aman hasn't asked for a commit. A new
session should check `git status`/`git diff` against this list before
assuming anything landed differently.
