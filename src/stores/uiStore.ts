import { create } from "zustand";

interface UIState {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;

  // One-shot signal from AICopilot -> Projects page for a same-page search
  // request. Replaces a window.dispatchEvent("search-projects") CustomEvent
  // hack — the Projects page's nuqs `q` param stays the canonical source of
  // truth for the search box; this is just the handoff, consumed once then
  // cleared.
  pendingProjectSearch: string | null;
  setPendingProjectSearch: (query: string) => void;
  clearPendingProjectSearch: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
  toggleMenu: () => set((s) => ({ isMenuOpen: !s.isMenuOpen })),

  pendingProjectSearch: null,
  setPendingProjectSearch: (query) => set({ pendingProjectSearch: query }),
  clearPendingProjectSearch: () => set({ pendingProjectSearch: null }),
}));
