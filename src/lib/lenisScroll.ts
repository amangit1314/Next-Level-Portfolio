import type Lenis from "lenis";

// Single choke point for "smooth scroll to a section" across the app —
// Hero's "View My Work", MobileBottomNav's tabs, and the AI Copilot's
// scrollToSection tool all used to call element.scrollIntoView directly.
// Under Lenis (see LenisProvider.tsx), native scrollIntoView still moves
// the page but skips Lenis's own easing — two different scroll feels on
// the same site. Routing everything through here means Lenis owns all of
// it; falls back to native scrollIntoView if Lenis isn't mounted yet (or
// was skipped under prefers-reduced-motion) rather than doing nothing.
let lenisInstance: Lenis | null = null;

export const setLenisInstance = (instance: Lenis | null) => {
    lenisInstance = instance;
};

// Read access for anything that needs to hook Lenis's own scroll event
// (e.g. HudScrollSlider deriving progress from Lenis's eased position
// instead of raw window.scrollY) rather than drive scroll itself.
export const getLenisInstance = () => lenisInstance;

export function scrollToTarget(target: string | HTMLElement, options?: { offset?: number }) {
    const el = typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
    if (!el) return;

    if (lenisInstance) {
        lenisInstance.scrollTo(el, { offset: options?.offset ?? 0 });
    } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
