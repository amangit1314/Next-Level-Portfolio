"use client";

// Global HUD chrome — replaces Header/Footer's rendered output everywhere
// (mounted once here, in layout.tsx, instead of per-page). Header.tsx and
// Footer.tsx are NOT deleted: MobileBottomNav.tsx still imports
// `sectionLinks` from Header.tsx, and pageLinks (data only, not the
// component's render output) is reused below for the numbered nav.
//
// Fixed monochrome by design — see globals.css's --hud-* tokens comment.
// Not wired into the theme-switcher system, deliberately.

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HudTicker } from "./HudTicker";
import { HudStatusBar } from "./HudStatusBar";
import { HudMenu } from "./HudMenu";
import { pageLinks } from "@/components/layout/Header";
import { SOCIAL_LINKS } from "@/constants/socialLinks";

// Matches the real address already used in components/sections/Contact.tsx
const CONTACT_EMAIL = "amansoni53453@gmail.com";

export function HudChrome() {
    const pathname = usePathname();
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);

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
            {/* overflow-hidden here (the actual fixed, full-viewport-width box) is
                load-bearing: html/body's overflow-x:hidden does NOT clip
                position:fixed descendants (a real CSS quirk, not a Tailwind gap),
                so without this the ticker's marquee track bled past the browser
                edge — visible as pills overflowing off-screen. */}
            <div className="fixed top-0 left-0 right-0 z-30 px-4 sm:px-8 py-3 pointer-events-none overflow-hidden">
                <div className="pointer-events-auto max-w-2xl ml-auto">
                    <HudTicker />
                </div>
            </div>

            <HudStatusBar
                email={CONTACT_EMAIL}
                pageIndex={currentIndex}
                pageLabel={currentLabel}
                onSettingsClick={() => setMenuOpen(true)}
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
