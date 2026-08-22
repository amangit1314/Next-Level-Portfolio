"use client";

// Top-left identity mark — the dead space left of HudTicker (which is
// right-aligned, see HudChrome.tsx) was empty; the reference HUD fills it
// with a two-line "First | Portfolio" / "Last | Year" stack. Pulls the name
// from the existing useProfile() cache — no new fetch, per the
// don't-hand-roll-a-client.fetch() rule in CLAUDE.md.

import { jetbrainsMono } from "@/lib/fonts";
import { useProfile } from "@/hooks/useSanityQuery";

export function HudIdentity() {
    const { data: profile } = useProfile();
    if (!profile?.name) return null;

    const [first, ...rest] = profile.name.split(" ");
    const last = rest.join(" ") || first;
    const year = new Date().getFullYear();

    return (
        <div className={`leading-tight ${jetbrainsMono.className}`}>
            <div className="text-xs sm:text-sm">
                <span style={{ color: "var(--hud-text-primary)" }}>{first}</span>
                <span style={{ color: "var(--hud-text-muted)" }}> | Portfolio</span>
            </div>
            <div className="text-xs sm:text-sm">
                <span style={{ color: "var(--hud-text-primary)" }}>{last}</span>
                <span style={{ color: "var(--hud-text-muted)" }}> | {year}</span>
            </div>
        </div>
    );
}
