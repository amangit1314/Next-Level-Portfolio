"use client";

// Boot sequence — a HUD "system initializing" overlay before the site
// reveals itself. Shown on every full page load (not gated behind
// sessionStorage — deliberate: this component only mounts once per real
// navigation anyway, since it lives in the root layout, which doesn't
// remount on client-side route changes. A hard refresh/fresh visit is
// the only thing that ever re-triggers it, which is what "every load"
// means in practice). Auto-dismisses on its own (no click-to-enter gate)
// — GSAP timeline runs the boot lines + progress bar, then fades out.
// Skipped entirely under prefers-reduced-motion (resolves instantly
// instead of animating).

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { primaryFont, secondaryFont } from "@/lib/fonts";

const BOOT_LINES = ["INIT_SYSTEM", "LOAD_PROFILE", "MOUNT_INTERFACE"];

export function HudBootLoader() {
    const [visible, setVisible] = useState(true);
    const overlayRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        if (!overlayRef.current) return;

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
    }, []);

    if (!visible) return null;

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4"
            style={{ backgroundColor: "var(--hud-bg)" }}
            aria-hidden="true"
        >
            <div className={`text-lg sm:text-xl uppercase tracking-widest ${primaryFont.className}`} style={{ color: "var(--theme-primary)" }}>
                CORE
            </div>
            <div className="flex flex-col gap-1">
                {BOOT_LINES.map((line, i) => (
                    <div
                        key={line}
                        ref={(el) => {
                            lineRefs.current[i] = el;
                        }}
                        className={`text-[11px] tracking-wide ${secondaryFont.className}`}
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
