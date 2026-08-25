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

        // lerp mode, not duration+easing — Lenis only runs its lerp
        // smoothing when `duration` is unset; passing `duration` (the
        // previous config) switches it to a per-scroll-event tween that
        // eases to a target and stops, which reads as "ease after each
        // wheel tick" rather than a continuously rolling scroll. lerp
        // instead re-chases the target position every animation frame via
        // exponential smoothing, which is the actual mechanism behind the
        // heavier "liquid" momentum feel on reference sites like
        // saifullah.dev. Lower lerp = more viscous/heavier lag behind the
        // input; 0.075 sits between Lenis's smoothWheel default (0.1,
        // lighter) and its touch default (0.075) — chosen for noticeably
        // more roll without going so low it feels unresponsive.
        const lenis = new Lenis({
            autoRaf: false,
            lerp: 0.075,
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
