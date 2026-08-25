"use client";

import { type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export type RevealVariant = "fade-up" | "stagger-lines" | "stagger-rows" | "tilt-rows";

interface ScrollRevealOptions {
  start?: string;
  scrub?: boolean;
  delay?: number;
  duration?: number;
  ease?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  stagger?: number;
  /** Extra values that should re-run the reveal — e.g. pass the loading
   * flag/data a conditionally-rendered section waits on, so the effect
   * fires again once the ref actually mounts (it no-ops while `ref.current`
   * is null, e.g. behind a loading skeleton, and won't retry on its own). */
  deps?: unknown[];
}

const VARIANT_FROM: Record<RevealVariant, gsap.TweenVars> = {
  "fade-up": { opacity: 0, y: 24 },
  "stagger-lines": { opacity: 0, y: 24 },
  "stagger-rows": { opacity: 0, y: 16 },
  // tilt-rows builds its own per-item timeline (see the dedicated branch
  // below) and never reads these generic maps — entry exists only to
  // satisfy the Record<RevealVariant, …> type.
  "tilt-rows": { opacity: 0, y: 0 },
};
// Every reveal used the same power3.out regardless of what's animating —
// fine for a single large element (fade-up: hero text, section headers),
// but grid/list pop-ins (stagger-rows: card grids, list rows) read as more
// alive with a snappier curve since each individual item's travel distance
// is small. Still overridable per call site via opts.ease (see SkillCard,
// Experience's timeline dot) — this only changes the fallback.
const VARIANT_EASE: Record<RevealVariant, string> = {
  "fade-up": "power3.out",
  "stagger-lines": "power3.out",
  "stagger-rows": "power2.out",
  "tilt-rows": "none", // unused — see VARIANT_FROM comment
};
const VARIANT_STAGGER: Record<RevealVariant, number> = {
  "fade-up": 0,
  "stagger-lines": 0.08,
  "stagger-rows": 0.06,
  "tilt-rows": 0, // unused — see VARIANT_FROM comment
};

/**
 * The one reusable scroll-animation primitive — every section calls this
 * instead of hand-rolling ScrollTrigger. "fade-up" animates the ref'd
 * element itself; "stagger-lines"/"stagger-rows" animate its direct
 * `data-reveal-item` children with a stagger. prefers-reduced-motion is
 * handled once, here — no section needs to know about it.
 *
 * See docs/superpowers/specs/2026-08-22-gsap-scroll-animation-core-design.md
 */
export function useScrollReveal<T extends HTMLElement>(
  ref: RefObject<T | null>,
  variant: RevealVariant,
  opts: ScrollRevealOptions = {}
) {
  useGSAP(
    () => {
      if (!ref.current) return;
      // :scope > … keeps this to direct children only — plain descendant
      // selection would also catch a nested reveal group's own
      // [data-reveal-item] children (e.g. Contact's social-link grid inside
      // its card), double-animating them under two different triggers.
      const targets: Element | NodeListOf<Element> =
        variant === "fade-up" ? ref.current : ref.current.querySelectorAll(":scope > [data-reveal-item]");
      if (variant !== "fade-up" && (targets as NodeListOf<Element>).length === 0) return;

      // tilt-rows is a different shape from every other variant: instead of
      // one shared entrance tween, each row gets its own continuously
      // scrubbed timeline keyed to its own transit through the viewport
      // (enter tilted-down → flat at center → tilt-up on exit). That "is"
      // the reveal — there's no separate one-shot entrance. Reuses the
      // hook's ref/deps/reduced-motion contract; doesn't touch the
      // fromTo path below, which the other 3 variants share.
      if (variant === "tilt-rows") {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        (targets as NodeListOf<Element>).forEach((row) => {
          if (reduced) {
            gsap.set(row, { opacity: 1, rotateX: 0, y: 0 });
            return;
          }
          gsap
            .timeline({
              scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: 0.5 },
              defaults: { ease: "none" },
            })
            .fromTo(row, { rotateX: 8, y: 24, opacity: 0.15 }, { rotateX: 0, y: 0, opacity: 1 }, 0)
            .to(row, { rotateX: -8, y: -12, opacity: 0.35 }, 0.5);
        });
        return;
      }

      const from = opts.from ?? VARIANT_FROM[variant];
      const to = { ...(opts.to ?? { opacity: 1, y: 0 }) };

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(targets, to);
        return;
      }

      gsap.fromTo(targets, from, {
        ...to,
        duration: opts.duration ?? 0.6,
        delay: opts.delay ?? 0,
        ease: opts.ease ?? VARIANT_EASE[variant],
        stagger: opts.stagger ?? VARIANT_STAGGER[variant],
        scrollTrigger: {
          trigger: ref.current,
          start: opts.start ?? "top 85%",
          scrub: opts.scrub ?? false,
          once: !opts.scrub,
        },
      });
    },
    { scope: ref, dependencies: [variant, ...(opts.deps ?? [])] }
  );
}
