"use client";

// Top-left identity mark — the dead space left of HudTicker (which is
// right-aligned, see HudChrome.tsx) was empty. A monogram badge alone
// (initials, no name text) — the idea started as v1 Header.tsx's cursive
// Momo_Signature logo, but that script font read as a mismatched flourish
// against this branch's Anton/JetBrains-Mono system (a different register
// entirely — decorative vs. systematic). Set in Anton instead — the same
// display face used for every heading in the HUD chrome — so the mark
// reads as *this* system's identity, not a bolted-on decoration. Colored
// via the accent-flavor system so picking a flavor visibly recolors it.
// Pulls the name from the existing useProfile() cache — no new fetch, per
// the don't-hand-roll-a-client.fetch() rule in CLAUDE.md.

import Link from "next/link";
import { primaryFont } from "@/lib/fonts";
import { useProfile } from "@/hooks/useSanityQuery";
import { Route } from "@/types/enums";

export function HudIdentity() {
    const { data: profile } = useProfile();
    if (!profile?.name) return null;

    const [first, ...rest] = profile.name.split(" ");
    const last = rest.join(" ") || first;
    const initials = `${first[0] ?? ""}${last[0] ?? ""}`.toUpperCase();

    return (
        <Link
            href={Route.Home}
            className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 cursor-pointer items-center justify-center rounded-none border transition-colors hover:border-[var(--theme-primary)]"
            style={{ borderColor: "var(--hud-border)", backgroundColor: "var(--hud-bg-elevated)" }}
            aria-label="Go to home"
        >
            <span className={`${primaryFont.className} text-sm sm:text-base leading-none`} style={{ color: "var(--theme-primary)" }}>
                {initials}
            </span>
        </Link>
    );
}
