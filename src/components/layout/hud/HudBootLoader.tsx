"use client";

// One-time boot sequence, matching the reference site's loading session —
// a HUD "system initializing" overlay before the site reveals itself.
// Shown once per browser tab session (sessionStorage flag), not on every
// client-side route navigation — a loader on every internal Link click
// would be an annoyance, not a flourish. Skipped entirely under
// prefers-reduced-motion (still respects the flag mount order, just
// resolves instantly instead of animating).

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { anton, jetbrainsMono } from "@/lib/fonts";

const SESSION_KEY = "hud-booted";
const BOOT_LINES = ["INIT_SYSTEM", "LOAD_PROFILE", "MOUNT_INTERFACE"];

export function HudBootLoader() {
    const [shouldRender, setShouldRender] = useState(false);
    const [visible, setVisible] = useState(true);
    const overlayRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Decide once, client-only (sessionStorage isn't available at SSR/build
    // time) — same documented exception pattern as ThemeContext.tsx.
    useEffect(() => {
        if (sessionStorage.getItem(SESSION_KEY)) return;
        sessionStorage.setItem(SESSION_KEY, "1");
        /* eslint-disable react-hooks/set-state-in-effect -- one-shot decision
           gated on sessionStorage (client-only, unavailable at SSR), not
           state synced from a live external source. Same documented
           exception as ThemeContext.tsx. */
        setShouldRender(true);
        /* eslint-enable react-hooks/set-state-in-effect */
    }, []);

    useGSAP(
        () => {
            if (!shouldRender || !overlayRef.current) return;

            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                setVisible(false);
                return;
            }

            const tl = gsap.timeline({ onComplete: () => setVisible(false) });
            lineRefs.current.forEach((el, i) => {
                if (!el) return;
                tl.fromTo(el, { opacity: 0, x: -8 }, { opacity: 1, x: 0, duration: 0.25, ease: "power2.out" }, i * 0.2);
            });
            tl.fromTo(barRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "power1.inOut" }, 0.1);
            tl.to(overlayRef.current, { opacity: 0, duration: 0.35, ease: "power2.in" }, "+=0.2");
        },
        { dependencies: [shouldRender] }
    );

    if (!shouldRender || !visible) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4"
            style={{ backgroundColor: "var(--hud-bg)" }}
            aria-hidden="true"
        >
            <div className={`text-lg sm:text-xl uppercase tracking-widest ${anton.className}`} style={{ color: "var(--theme-primary)" }}>
                CORE
            </div>
            <div className="flex flex-col gap-1">
                {BOOT_LINES.map((line, i) => (
                    <div
                        key={line}
                        ref={(el) => {
                            lineRefs.current[i] = el;
                        }}
                        className={`text-[11px] tracking-wide ${jetbrainsMono.className}`}
                        style={{ color: "var(--hud-text-muted)", opacity: 0 }}
                    >
                        {`> ${line}`}
                    </div>
                ))}
            </div>
            <div className="w-40 h-px overflow-hidden" style={{ backgroundColor: "var(--hud-border)" }}>
                <div ref={barRef} className="w-full h-full origin-left" style={{ backgroundColor: "var(--theme-primary)", transform: "scaleX(0)" }} />
            </div>
        </div>
    );
}
