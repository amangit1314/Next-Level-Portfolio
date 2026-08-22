# GSAP Scroll-Animation Core — Design

**Branch:** `feat/hud-chrome`
**Status:** Approved for implementation
**Sub-project 1 of 4** in the "match saifullah.dev animation fidelity" initiative. See
`[[project_hud_v2_redesign]]` memory for branch context. Remaining sub-projects
(cursor/magnetic interactions, performance-tier selector, ambient audio engine)
are each their own future spec — not in scope here.

## Motivation

`feat/hud-chrome` has the HUD/terminal visual language down but section
transitions still feel like a standard Framer Motion `whileInView` fade —
flat compared to the reference site's scroll-driven feel (`NEXT_THREE_GSAP`
stack: GSAP + ScrollTrigger driving pinned/scrubbed scroll sequences).

GSAP is already a dependency (`gsap@^3.15.0`), currently used in exactly one
place (`HudTicker.tsx`'s infinite marquee, via a hand-rolled
`gsap.context()` + `useEffect`). This sub-project promotes GSAP + ScrollTrigger
to the site's scroll-animation system, standardizes the existing one-off
pattern behind a shared hook, and migrates every section's reveal animation
onto it.

## Rule change (explicit, not incidental)

Project CLAUDE.md currently states: *"All animations → Framer Motion. No raw
CSS keyframes for component animations."* This spec consciously narrows that
rule rather than breaking it silently:

- **GSAP + ScrollTrigger** owns scroll-driven animation (section reveals,
  stagger sequences, scroll-linked parallax) from this point forward.
- **Framer Motion** stays for everything non-scroll: hover/tap states, the
  HUD menu open/close, `AnimatePresence` unmount transitions, layout
  animations. Nothing here touches those call sites.
- No raw CSS `@keyframes` either way — unchanged.

This mirrors the precedent already set by `[[project_hud_v2_redesign]]`
(single-theme supersedes the multi-theme switcher on this branch, deliberately,
documented, not re-litigated) — `CLAUDE.md` should get a one-line update
alongside this spec's implementation to reflect the narrowed rule so a future
session doesn't flag GSAP usage as a violation.

## Architecture

```
src/lib/gsap.ts                 registers ScrollTrigger + gsap once, client-only
src/hooks/useScrollReveal.ts    the one reusable scroll-animation primitive
src/components/.../*.tsx        call useScrollReveal(ref, variant) instead of
                                 Framer Motion's whileInView
```

### `src/lib/gsap.ts`

One-time plugin registration, mirrors `lib/fonts.ts` / `lib/themes.ts` in
scope (one file, one job). Guards `gsap.registerPlugin(ScrollTrigger)` so it
only runs client-side (Next.js SSR safety — GSAP/ScrollTrigger touch
`window`/`document`).

### `src/hooks/useScrollReveal.ts`

```ts
type RevealVariant = "fade-up" | "stagger-lines" | "stagger-rows";

function useScrollReveal<T extends HTMLElement>(
  ref: RefObject<T | null>,
  variant: RevealVariant,
  opts?: { start?: string; scrub?: boolean }
): void
```

- Built on `@gsap/react`'s `useGSAP()` (new dependency — official React
  binding, handles StrictMode's double-invoke/cleanup correctly, replacing
  the manual `gsap.context()` pattern `HudTicker.tsx` currently hand-rolls).
- `fade-up`: single-element translateY + opacity — the direct replacement for
  today's per-section `whileInView` fade. Used by section wrapper elements.
- `stagger-lines`: children (text lines/words) animate in with a stagger —
  used for hero/section headings.
- `stagger-rows`: children (list rows) animate in with a stagger — used by
  `ProjectListRow`/`BlogListRow`/`ComponentListRow` and card grids
  (`SkillCard`, `TestimonialCard`, `ProjectCard`).
- `prefers-reduced-motion` check lives inside this hook, once: if set, the
  `ScrollTrigger` is skipped entirely and elements are set to their animated
  end-state immediately via `gsap.set()`. No section component needs to know
  about this — it's handled centrally, which is the point of having one hook.
- Returns nothing. It's an effect, not state — components don't branch on
  animation status.

### Hero parallax

`ParticlePortrait.tsx` (Three.js point cloud) gets a `scrub: true`
ScrollTrigger tied to the hero section's scroll range, driving a subtle
camera/points offset — same `ScrollTrigger` system observes both DOM and
canvas, rather than a second scroll-observation mechanism (e.g. a raw
`useScroll` from Framer just for this one component).

## Migration scope

Replace `whileInView` usage with `useScrollReveal` in:

- `src/components/sections/HeroSection.tsx`
- `src/components/sections/AboutSection.tsx`
- `src/components/sections/Skills.tsx`
- `src/components/sections/Experience.tsx`
- `src/components/sections/Projects.tsx`
- `src/components/sections/Testimonials.tsx`
- `src/components/sections/Contact.tsx`
- `src/components/cards/ProjectCard.tsx`
- `src/components/cards/SkillCard.tsx`
- `src/components/cards/TestimonialCard.tsx`
- `src/app/projects/_components/ProjectListRow.tsx`
- `src/app/blogs/_components/BlogListRow.tsx`
- `src/app/components/_components/ComponentListRow.tsx`

`HudTicker.tsx`'s existing hand-rolled `gsap.context()` marquee gets
refactored onto `useGSAP()` too, for consistency (same library, same
cleanup pattern, one less bespoke implementation).

Framer Motion import stays in every file above wherever it drives non-scroll
interaction (button hover, etc.) — only the `whileInView`/reveal-on-scroll
call sites move.

## Error handling

No state, no data fetching — this is a pure presentation-layer effect
system. The only realistic failure mode is a ref not yet mounted at effect
time (SSR/hydration timing); `useGSAP`'s dependency array plus a null-guard
on the ref (same pattern `HudTicker.tsx` already proves out in production)
covers it. No new error boundaries or loading states needed.

## Testing

No unit tests for animation timing/easing — industry-standard: not
meaningfully testable, and this codebase has no animation tests today either.
Verification is:

1. `tsc --noEmit` — type safety on the hook's generic ref/variant API.
2. `npm run lint` — no new errors.
3. `npm run dev` — manual scroll-through of every migrated section,
   confirming reveal timing/stagger reads correctly and nothing double-fires
   under React 19 Strict Mode (dev-only double-invoke).
4. Manual check with OS-level "reduce motion" toggled on — confirms the
   `prefers-reduced-motion` branch in `useScrollReveal` actually skips
   animation instead of just reading the media query and ignoring it.

## Out of scope (future sub-projects)

- Cursor/magnetic interaction upgrades (sub-project 2)
- Performance-tier selector that throttles animation complexity
  (sub-project 3 — depends on this one existing first)
- Ambient audio engine (sub-project 4, fully independent)
