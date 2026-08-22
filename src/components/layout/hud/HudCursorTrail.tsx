"use client";

// Custom cursor trail — a small ring that lags smoothly behind the real
// cursor, matching the reference site's pointer-tracing feel. GSAP's
// quickTo (built for exactly this: a value updated on every mousemove,
// eased toward continuously) instead of hand-rolled rAF lerp math.
//
// Desktop-with-a-real-mouse only: hidden below lg (touch devices have no
// hover cursor to trace) and under prefers-reduced-motion. Fixed
// pointer-events-none throughout so it never intercepts real clicks.

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export function HudCursorTrail() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        /* eslint-disable react-hooks/set-state-in-effect -- capability check
           (window.matchMedia), only readable client-side post-mount, same
           documented exception as ParticlePortrait.tsx/HudBootLoader.tsx. */
        setEnabled(hasFinePointer && !reduceMotion);
        /* eslint-enable react-hooks/set-state-in-effect */
    }, []);

    useGSAP(
        () => {
            if (!enabled || !dotRef.current || !ringRef.current) return;

            const dotX = gsap.quickTo(dotRef.current, "x", { duration: 0.12, ease: "power3.out" });
            const dotY = gsap.quickTo(dotRef.current, "y", { duration: 0.12, ease: "power3.out" });
            const ringX = gsap.quickTo(ringRef.current, "x", { duration: 0.35, ease: "power3.out" });
            const ringY = gsap.quickTo(ringRef.current, "y", { duration: 0.35, ease: "power3.out" });

            const handleMove = (e: MouseEvent) => {
                dotX(e.clientX);
                dotY(e.clientY);
                ringX(e.clientX);
                ringY(e.clientY);
            };
            window.addEventListener("mousemove", handleMove);
            return () => window.removeEventListener("mousemove", handleMove);
        },
        { dependencies: [enabled] }
    );

    if (!enabled) return null;

    return (
        <div className="fixed inset-0 z-[90] pointer-events-none hidden lg:block" aria-hidden="true">
            {/* Tight dot — tracks almost instantly */}
            <div
                ref={dotRef}
                className="absolute top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full"
                style={{ backgroundColor: "var(--theme-primary)" }}
            />
            {/* Trailing ring — noticeably laggier, is the actual "trace" */}
            <div
                ref={ringRef}
                className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border"
                style={{ borderColor: "var(--theme-primary)" }}
            />
        </div>
    );
}
