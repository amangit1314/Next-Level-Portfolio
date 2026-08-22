'use client';

import { useState, useEffect } from 'react';
import { jetbrainsMono } from '@/lib/fonts';
import { FiActivity, FiSettings, FiCpu } from 'react-icons/fi';
import { useUIStore } from '@/stores/uiStore';

interface HudStatusBarProps {
  email: string;
  pageIndex: number;
  pageLabel: string;
  onSettingsClick?: () => void;
}

export function HudStatusBar({
  email,
  pageIndex,
  pageLabel,
  onSettingsClick,
}: HudStatusBarProps) {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState('');
  const isCopilotOpen = useUIStore((s) => s.isCopilotOpen);
  const toggleCopilot = useUIStore((s) => s.toggleCopilot);

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
    // Floating HUD overlay, not a panel — no border/background fill. The
    // reference site's bottom elements sit directly on the page background;
    // an enclosing bar read as "UI chrome" instead of a weightless readout.
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 py-4 pointer-events-none ${jetbrainsMono.className}`}
    >
      {/* Left Section: Say Hello */}
      <div className="pointer-events-auto flex flex-col gap-1 sm:gap-2">
        <span
          className="text-xs"
          style={{ color: 'var(--hud-text-muted)' }}
        >
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

      {/* Center Section: Local Time (hidden on mobile) */}
      {mounted && (
        <div className="hidden flex-col gap-2 sm:flex">
          <span
            className="text-xs"
            style={{ color: 'var(--hud-text-muted)' }}
          >
            Local Time
          </span>
          <span
            className="text-sm font-medium"
            style={{ color: 'var(--hud-text-primary)' }}
          >
            {time}
          </span>
        </div>
      )}

      {/* Right Section */}
      <div className="pointer-events-auto flex items-center gap-3 sm:gap-4">
        {/* Activity + Settings + Page pill — hidden on mobile, unchanged */}
        <div className="hidden items-center gap-4 sm:flex">
          <div style={{ color: 'var(--hud-text-muted)' }}>
            <FiActivity size={16} />
          </div>

          <button
            onClick={onSettingsClick}
            className="transition-opacity hover:opacity-75"
            style={{ color: 'var(--hud-text-muted)' }}
            aria-label="Settings"
          >
            <FiSettings size={16} />
          </button>

          <div
            className="rounded-none border border-[1px] px-2 py-1 text-xs"
            style={{
              borderColor: 'var(--hud-border)',
              color: 'var(--hud-text-primary)',
            }}
          >
            [{pageIndex}] {pageLabel.toUpperCase()}
          </div>
        </div>

        {/* AI Copilot toggle — moved here from a floating FAB that overlapped
            page content bottom-right (see AICopilot.tsx). Deliberately NOT
            inside the sm:flex group above: the status bar is the one piece
            of chrome that's always on screen on every breakpoint, which is
            the whole point of putting it here instead of a corner button. */}
        <button
          onClick={toggleCopilot}
          className="relative flex items-center justify-center w-8 h-8 border transition-colors"
          style={{
            borderColor: isCopilotOpen ? 'var(--hud-text-primary)' : 'var(--hud-border)',
            color: isCopilotOpen ? 'var(--hud-text-primary)' : 'var(--hud-text-muted)',
          }}
          aria-label={isCopilotOpen ? 'Close AI Co-pilot' : 'Open AI Co-pilot'}
        >
          <FiCpu size={16} />
          {!isCopilotOpen && (
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          )}
        </button>
      </div>
    </div>
  );
}
