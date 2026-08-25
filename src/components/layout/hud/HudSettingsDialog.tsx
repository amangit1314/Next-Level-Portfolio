"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { secondaryFont, primaryFont } from "@/lib/fonts";
import { FiX, FiCheck } from "react-icons/fi";
import { useUIStore } from "@/stores/uiStore";
import { accentFlavors } from "@/lib/hudAccentFlavors";

// Same compact-popover pattern as HudMenu.tsx (anchored near its trigger,
// click-outside close, no full-screen overlay/scroll-lock) — see that file
// for why. Anchored to the right-edge-center gear (HudChrome.tsx) instead
// of bottom-right, matching where the trigger actually sits.
export function HudSettingsDialog() {
    const isOpen = useUIStore((s) => s.isSettingsOpen);
    const closeSettings = useUIStore((s) => s.closeSettings);
    const accentFlavorId = useUIStore((s) => s.accentFlavorId);
    const setAccentFlavorId = useUIStore((s) => s.setAccentFlavorId);

    useEffect(() => {
        if (!isOpen) return;
        const handleClick = (e: MouseEvent) => {
            if (!(e.target as HTMLElement).closest("[data-hud-settings]")) closeSettings();
        };
        const id = setTimeout(() => document.addEventListener("click", handleClick), 0);
        return () => {
            clearTimeout(id);
            document.removeEventListener("click", handleClick);
        };
    }, [isOpen, closeSettings]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    data-hud-settings
                    initial={{ opacity: 0, scale: 0.96, x: 8 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.96, x: 8 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        transformOrigin: "right center",
                        backgroundColor: "var(--hud-bg-elevated)",
                        borderColor: "var(--hud-border)",
                    }}
                    className="fixed right-16 sm:right-20 top-1/2 -translate-y-1/2 z-50 w-[min(320px,calc(100vw-2rem))] max-h-[70vh] flex flex-col rounded-none border overflow-hidden"
                >
                    <div className="flex items-center justify-between border-b px-5 py-3" style={{ borderBottomColor: "var(--hud-border)" }}>
                        <span className={`text-lg ${primaryFont.className}`} style={{ color: "var(--hud-text-primary)" }}>
                            SYSTEM
                        </span>
                        <button
                            onClick={closeSettings}
                            className="transition-opacity hover:opacity-75"
                            style={{ color: "var(--hud-text-primary)" }}
                            aria-label="Close settings"
                        >
                            <FiX size={18} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-5 py-5">
                        <label
                            className={`mb-3 block text-xs font-semibold tracking-wider ${secondaryFont.className}`}
                            style={{ color: "var(--hud-text-muted)" }}
                        >
                            CORE THEME
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            {accentFlavors.map((flavor) => {
                                const isActive = flavor.id === accentFlavorId;
                                return (
                                    <button
                                        key={flavor.id}
                                        onClick={() => setAccentFlavorId(flavor.id)}
                                        className={`flex items-center gap-2 rounded-none border px-3 py-2.5 text-left text-sm transition-all hover:opacity-80 ${secondaryFont.className}`}
                                        style={{
                                            borderColor: isActive ? flavor.primary.hex : "var(--hud-border)",
                                            color: "var(--hud-text-primary)",
                                        }}
                                    >
                                        <span
                                            className="w-3 h-3 shrink-0 rounded-full"
                                            style={{ backgroundColor: flavor.primary.hex }}
                                            aria-hidden
                                        />
                                        <span className="truncate flex-1">{flavor.name}</span>
                                        {isActive && <FiCheck size={14} style={{ color: flavor.primary.hex }} />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
