"use client";

import { type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export type RevealVariant = "fade-up" | "stagger-lines" | "stagger-rows";

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
};
const VARIANT_STAGGER: Record<RevealVariant, number> = {
  "fade-up": 0,
  "stagger-lines": 0.08,
  "stagger-rows": 0.06,
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
        ease: opts.ease ?? "power3.out",
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
