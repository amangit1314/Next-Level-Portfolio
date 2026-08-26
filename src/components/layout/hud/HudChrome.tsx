"use client";

// Global HUD chrome — replaces Header/Footer's rendered output everywhere
// (mounted once here, in layout.tsx, instead of per-page). Header.tsx and
// Footer.tsx are NOT deleted: MobileBottomNav.tsx still imports
// `sectionLinks` from Header.tsx, and pageLinks (data only, not the
// component's render output) is reused below for the numbered nav.
//
// Background/text/border stay fixed monochrome (globals.css's --hud-*
// tokens) — NOT wired into v1's ThemeContext/ThemeSwitcher (that system is
// still single-entry, see themes.ts). What IS user-selectable is the
// accent color layer (hudAccentFlavors.ts, applied by HudAccentSync) —
// saifullah.dev's own "theme" is the same idea: a color swap, not a full
// re-skin. See docs/superpowers/specs and [[project_hud_v2_redesign]].

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HudTicker } from "./HudTicker";
import { HudStatusBar } from "./HudStatusBar";
import { HudMenu } from "./HudMenu";
import { HudIdentity } from "./HudIdentity";
import { HudSettingsDialog } from "./HudSettingsDialog";
import { HudAccentSync } from "./HudAccentSync";
import { HudScrollSlider } from "./HudScrollSlider";
import { HudBootLoader } from "./HudBootLoader";
import { HudCursorTrail } from "./HudCursorTrail";
import { pageLinks } from "@/components/layout/Header";
import { SOCIAL_LINKS } from "@/constants/socialLinks";
import { useUIStore } from "@/stores/uiStore";
import { FiSettings } from "react-icons/fi";

// Mounted globally (every route, including Home) here rather than per-page
// — position:fixed stayed correctly pinned to the viewport for the settings
// button (mounted at this same layout.tsx-level) but drifted with page
// scroll when mounted from inside each page's own component tree — some
// ancestor in that per-page tree was creating a containing block, even
// though nothing obviously did (no transform found). Mounting alongside the
// settings button sidesteps it entirely and guarantees identical behavior.
// Previously Projects/Blogs/Components-only; extended to Home too — the
// scroll feedback it gives shouldn't differ per page, and its progress is
// now driven by Lenis's eased value (see HudScrollSlider), not raw
// window.scrollY, so it stays in sync with the rest of the smooth-scroll
// system everywhere it renders.

// Matches the real address already used in components/sections/Contact.tsx
const CONTACT_EMAIL = "amansoni53453@gmail.com";

export function HudChrome() {
    const pathname = usePathname();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleSettings = useUIStore((s) => s.toggleSettings);

    const isHome = pathname === "/";
    const isPageActive = (path: string) => (path === "/" ? pathname === "/" : pathname.startsWith(path));
    const currentIndex = Math.max(1, pageLinks.findIndex((link) => isPageActive(link.path)) + 1);
    const currentLabel = pageLinks.find((link) => isPageActive(link.path))?.name ?? "Home";

    // Numbered nav shown in HudMenu — highest-numbered link first, matching
    // the reference site's ordering (current page's number is highest).
    const navLinks = pageLinks
        .map((link, i) => ({ name: link.name, path: link.path, index: i + 1 }))
        .slice()
        .reverse();

    const socialLinks = SOCIAL_LINKS.map((s) => ({ name: s.name, url: s.url, icon: s.icon }));

    return (
        <>
            <HudAccentSync />
            <HudBootLoader />
            <HudCursorTrail />
            <HudScrollSlider />

            {/* Settings trigger — floating right-edge, vertically centered,
                roughly where a scrollbar would sit. Matches the reference
                site's placement; deliberately separate from the bottom-bar
                chip group (HudStatusBar) and the [n] PAGE pill (that opens
                HudMenu, navigation — a different concern from settings).
                lg-and-up only: vertically centered on the viewport works
                on wide screens where there's margin outside the content
                column, but on narrow mobile viewports the content spans
                nearly edge-to-edge, so this landed directly on top of row
                content (e.g. Projects list, row #2's tags). HudStatusBar
                carries an equivalent trigger for lg:hidden. */}
            <button
                onClick={toggleSettings}
                data-hud-settings
                className="hidden lg:flex fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 items-center justify-center w-9 h-9 rounded-none border cursor-pointer transition-colors hover:border-[var(--theme-primary)] hover:text-[var(--theme-primary)]"
                style={{ borderColor: "var(--hud-border)", color: "var(--hud-text-muted)", backgroundColor: "var(--hud-bg)" }}
                aria-label="Open settings"
            >
                <FiSettings size={16} />
            </button>
            <HudSettingsDialog />

            {/* overflow-hidden here (the actual fixed, full-viewport-width box) is
                load-bearing: html/body's overflow-x:hidden does NOT clip
                position:fixed descendants (a real CSS quirk, not a Tailwind gap),
                so without this the ticker's marquee track bled past the browser
                edge — visible as pills overflowing off-screen. */}
            {/* Ticker is home-only — "AVAILABILITY: OPEN / STACK: ..." reads
                as a system-status readout on the hero, not as chrome that
                belongs on every inner page (it was showing up over the
                Projects/Components/Blogs catalog pages with no context).
                Identity mark stays everywhere — it's branding, not status. */}
            <div className="fixed top-0 left-0 right-0 z-30 px-4 sm:px-8 py-3 pointer-events-none overflow-hidden flex items-start justify-between gap-4">
                <div className="pointer-events-auto shrink-0">
                    <HudIdentity />
                </div>
                {isHome && (
                    <div className="pointer-events-auto max-w-2xl ml-auto">
                        <HudTicker />
                    </div>
                )}
            </div>

            <HudStatusBar
                email={CONTACT_EMAIL}
                pageIndex={currentIndex}
                pageLabel={currentLabel}
                onMenuClick={() => setMenuOpen(true)}
            />

            <HudMenu
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
                navLinks={navLinks}
                socialLinks={socialLinks}
                currentPath={pathname}
                onNavigate={(path) => {
                    setMenuOpen(false);
                    router.push(path);
                }}
            />
        </>
    );
}
