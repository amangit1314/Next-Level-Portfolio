"use client";

// Mounts once (see HudChrome.tsx). Has no visual output — it's the effect
// that keeps CSS variables, the store, and localStorage in sync for v2's
// accent-flavor system. Mirrors ThemeContext.tsx's mount-then-apply pattern
// (reading localStorage during render would mismatch SSR and cause a
// hydration error) but scoped to accent-only variables — see
// applyAccentVariables in themeUtils.ts for what that means.

import { useEffect, useRef } from "react";
import { useUIStore } from "@/stores/uiStore";
import { applyAccentVariables } from "@/lib/themeUtils";
import { getAccentFlavorById, getDefaultAccentFlavor } from "@/lib/hudAccentFlavors";

const STORAGE_KEY = "hud-accent-flavor";

export function HudAccentSync() {
    const accentFlavorId = useUIStore((s) => s.accentFlavorId);
    const setAccentFlavorId = useUIStore((s) => s.setAccentFlavorId);
    const hasLoadedFromStorage = useRef(false);

    // Load saved flavor once on mount.
    useEffect(() => {
        const savedId = localStorage.getItem(STORAGE_KEY);
        const flavor = (savedId && getAccentFlavorById(savedId)) || getDefaultAccentFlavor();
        applyAccentVariables(flavor);
        hasLoadedFromStorage.current = true;
        // Syncs the Zustand store to what actually got applied above,
        // rather than the store's SSR-time default — same reason
        // ThemeContext.tsx can only read localStorage post-mount.
        if (flavor.id !== accentFlavorId) setAccentFlavorId(flavor.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps -- mount-only
    }, []);

    // Re-apply + persist whenever the user picks a different flavor.
    useEffect(() => {
        if (!hasLoadedFromStorage.current) return; // skip the redundant re-apply right after mount's own apply
        const flavor = getAccentFlavorById(accentFlavorId) ?? getDefaultAccentFlavor();
        applyAccentVariables(flavor);
        localStorage.setItem(STORAGE_KEY, flavor.id);
    }, [accentFlavorId]);

    return null;
}
