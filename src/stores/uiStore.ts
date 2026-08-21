import { create } from "zustand";

interface UIState {
  // AI Copilot drawer — the toggle button lives in HudStatusBar (always
  // visible, bottom bar) and the drawer itself renders from AICopilot.tsx;
  // both are siblings under root layout.tsx, so the open/close state has to
  // live here rather than as local state in either one.
  isCopilotOpen: boolean;
  openCopilot: () => void;
  closeCopilot: () => void;
  toggleCopilot: () => void;

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
  isCopilotOpen: false,
  openCopilot: () => set({ isCopilotOpen: true }),
  closeCopilot: () => set({ isCopilotOpen: false }),
  toggleCopilot: () => set((s) => ({ isCopilotOpen: !s.isCopilotOpen })),

  pendingProjectSearch: null,
  setPendingProjectSearch: (query) => set({ pendingProjectSearch: query }),
  clearPendingProjectSearch: () => set({ pendingProjectSearch: null }),
}));
