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
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 flex items-end justify-between gap-4 px-4 sm:px-8 py-4 pointer-events-none ${jetbrainsMono.className}`}
    >
      {/* Left group: Say Hello + Local Time share one bordered/textured
          panel (sharp corners — this branch's identity, reference uses
          rounded) instead of floating free or a full-width bar. */}
      <div
        className="hud-grid-bg pointer-events-auto flex items-center gap-6 sm:gap-10 rounded-none border px-4 sm:px-6 py-3"
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

      {/* Right group: activity + page pill + AI Copilot + menu trigger,
          each its own bordered chip, sharp corners throughout. */}
      <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
        <div className="hidden sm:block" style={{ color: 'var(--hud-text-muted)' }}>
          <FiActivity size={16} />
        </div>

        <div
          className="hidden sm:block rounded-none border px-3 py-2 text-xs"
          style={{ borderColor: 'var(--hud-border)', color: 'var(--hud-text-primary)' }}
        >
          [{pageIndex}] {pageLabel.toUpperCase()}
        </div>

        {/* AI Copilot toggle — same chip styling as the settings trigger
            beside it, instead of a visually orphaned floating button. */}
        <button
          onClick={toggleCopilot}
          className="relative flex items-center justify-center w-9 h-9 rounded-none border transition-colors"
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

        {/* Menu trigger — anchors HudMenu's compact popover, see HudMenu.tsx */}
        <button
          onClick={onSettingsClick}
          className="flex items-center justify-center w-9 h-9 rounded-none border transition-colors hover:opacity-75"
          style={{ borderColor: 'var(--hud-border)', color: 'var(--hud-text-muted)' }}
          aria-label="Open menu"
        >
          <FiSettings size={16} />
        </button>
      </div>
    </div>
  );
}
