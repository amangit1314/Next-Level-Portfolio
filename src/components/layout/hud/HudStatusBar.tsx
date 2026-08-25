'use client';

import { useState, useEffect } from 'react';
import { secondaryFont } from '@/lib/fonts';
import { FiZap, FiSettings } from 'react-icons/fi';
import { useUIStore } from '@/stores/uiStore';

interface HudStatusBarProps {
  email: string;
  pageIndex: number;
  pageLabel: string;
  /** Opens HudMenu's popover — triggered by the [n] PAGE pill. Settings
   * now lives at its own floating trigger, right-edge-center — see
   * HudChrome.tsx / HudSettingsDialog.tsx. */
  onMenuClick?: () => void;
}

export function HudStatusBar({
  email,
  pageIndex,
  pageLabel,
  onMenuClick,
}: HudStatusBarProps) {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState('');
  const isCopilotOpen = useUIStore((s) => s.isCopilotOpen);
  const toggleCopilot = useUIStore((s) => s.toggleCopilot);
  const toggleSettings = useUIStore((s) => s.toggleSettings);

  useEffect(() => {
    // Hydration-safety flag, not state synced from an external source —
    // same documented exception pattern used elsewhere in this codebase
    // (ThemeContext.tsx/HeroSection.tsx) for "don't render server/client-
    // mismatched content until mounted."
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const updateTime = () => {
      const now = new Date();
      const timeStr = now
        .toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
        .toLowerCase();
      setTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 flex items-end justify-between gap-4 px-4 sm:px-8 py-4 pointer-events-none ${secondaryFont.className}`}
    >
      {/* Left group: Say Hello + Local Time share one bordered/textured
          panel (sharp corners — this branch's identity, reference uses
          rounded) instead of floating free or a full-width bar. Hidden
          below sm — on mobile it was just "Wanna Say Hello?" anyway
          (Local Time already hides there), and the right group (menu/
          Copilot/settings) is what needs the room. */}
      <div
        className="hud-grid-bg pointer-events-auto hidden sm:flex items-center gap-6 sm:gap-10 rounded-none border px-4 sm:px-6 py-3"
        style={{ borderColor: 'var(--hud-border)', backgroundColor: 'color-mix(in srgb, var(--hud-bg-elevated) 70%, transparent)' }}
      >
        <div className="flex flex-col gap-1 sm:gap-2">
          <span className="text-xs" style={{ color: 'var(--hud-text-muted)' }}>
            Wanna Say Hello?
          </span>
          <a
            href={`mailto:${email}`}
            className="text-sm transition-opacity hover:opacity-75"
            style={{ color: 'var(--hud-text-primary)' }}
          >
            {email}
          </a>
        </div>

        {mounted && (
          <div className="hidden flex-col gap-2 sm:flex">
            <span className="text-xs" style={{ color: 'var(--hud-text-muted)' }}>
              Local Time
            </span>
            <span className="text-sm font-medium" style={{ color: 'var(--hud-text-primary)' }}>
              {time}
            </span>
          </div>
        )}
      </div>

      {/* Right group: page pill + AI Copilot, each its own bordered chip,
          sharp corners throughout. (Waveform/audio-engine icon dropped —
          audio is explicitly out of scope, see [[project_hud_v2_redesign]].
          Settings moved out to its own floating right-edge trigger.) */}
      <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 ml-auto">
        {/* Page pill — now the menu trigger (anchors HudMenu's popover,
            see HudMenu.tsx). Was the settings icon; that's reserved for a
            separate settings dialog, not built yet. Kept visible at every
            breakpoint (unlike the old settings icon's sm:block gate) —
            it's the only way to reach the social links in HudMenu, so
            hiding it on mobile would strand that content. */}
        <button
          onClick={onMenuClick}
          className="rounded-none border px-3 py-2 text-xs cursor-pointer transition-colors hover:border-[var(--theme-primary)] hover:text-[var(--theme-primary)]"
          style={{ borderColor: 'var(--hud-border)', color: 'var(--hud-text-primary)' }}
          aria-label="Open menu"
        >
          [{pageIndex}] {pageLabel.toUpperCase()}
        </button>

        {/* AI Copilot toggle — same chip styling as the settings trigger
            beside it, instead of a visually orphaned floating button. */}
        <button
          onClick={toggleCopilot}
          className="relative flex items-center justify-center w-9 h-9 rounded-none border cursor-pointer transition-colors hover:border-[var(--theme-primary)] hover:text-[var(--theme-primary)]"
          style={{
            borderColor: isCopilotOpen ? 'var(--theme-primary)' : 'var(--hud-border)',
            color: isCopilotOpen ? 'var(--theme-primary)' : 'var(--hud-text-muted)',
          }}
          aria-label={isCopilotOpen ? 'Close CORE' : 'Open CORE'}
        >
          <FiZap size={16} />
          {!isCopilotOpen && (
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-theme-status animate-pulse" />
          )}
        </button>

        {/* Settings — mobile/tablet equivalent of HudChrome's floating
            right-edge trigger (that one's lg:hidden now — it overlapped
            page content on narrow viewports, see HudChrome.tsx). Same
            data-hud-settings marker so HudSettingsDialog's click-outside
            handler treats this as a trigger too, not an outside click. */}
        <button
          onClick={toggleSettings}
          data-hud-settings
          className="lg:hidden flex items-center justify-center w-9 h-9 rounded-none border cursor-pointer transition-colors hover:border-[var(--theme-primary)] hover:text-[var(--theme-primary)]"
          style={{ borderColor: 'var(--hud-border)', color: 'var(--hud-text-muted)' }}
          aria-label="Open settings"
        >
          <FiSettings size={16} />
        </button>
      </div>
    </div>
  );
}
