"use client";

// Global smooth-scroll — the single biggest thing missing to close the gap
// with GSAP-heavy reference sites. Native browser scroll is discrete (each
// wheel tick jumps instantly); Lenis intercepts scroll input and replaces
// it with an eased, momentum-carrying interpolation, so scrolling itself
// feels weighted before a single element animation even runs. Was already
// an installed dependency (package.json), never actually wired up.
//
// Driven by GSAP's own ticker (not Lenis's built-in rAF loop) — the
// documented integration pattern for GSAP + Lenis: one requestAnimationFrame
// loop instead of two competing ones, and ScrollTrigger stays in sync via
// lenis.on("scroll", ScrollTrigger.update) so every useScrollReveal-driven
// animation scrubs against Lenis's eased position, not the raw scrollTop.
//
// Skipped entirely under prefers-reduced-motion — native (instant) scroll
// stays, which is the correct accessible behavior, not a lesser one.

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { setLenisInstance } from "@/lib/lenisScroll";

export function LenisProvider() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const lenis = new Lenis({
            autoRaf: false,
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        setLenisInstance(lenis);
        lenis.on("scroll", ScrollTrigger.update);

        const tick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        // Lenis already smooths the scroll itself — GSAP's own lag-smoothing
        // (which skips/compresses frames after a stall) would fight it.
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(tick);
            lenis.destroy();
            setLenisInstance(null);
        };
    }, []);

    return null;
}
