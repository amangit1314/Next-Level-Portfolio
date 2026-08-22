/**
 * GSAP setup — client-only plugin registration, one place, one job (mirrors
 * fonts.ts/themes.ts). ScrollTrigger owns scroll-driven animation site-wide;
 * see docs/superpowers/specs/2026-08-22-gsap-scroll-animation-core-design.md
 * for why this narrows (not breaks) the "Framer Motion only" rule.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
