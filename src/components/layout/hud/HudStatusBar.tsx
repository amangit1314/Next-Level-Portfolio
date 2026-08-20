'use client';

import { useState, useEffect } from 'react';
import { jetbrainsMono } from '@/lib/fonts';
import { FiActivity, FiSettings } from 'react-icons/fi';

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
      className={`fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between border-t-[1px] px-4 sm:px-8 py-3 ${jetbrainsMono.className}`}
      style={{
        backgroundColor: 'var(--hud-bg)',
        borderTopColor: 'var(--hud-border)',
      }}
    >
      {/* Left Section: Say Hello */}
      <div className="flex flex-col gap-1 sm:gap-2">
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

      {/* Right Section: Activity + Settings + Page (hidden on mobile) */}
      <div className="hidden items-center gap-4 sm:flex">
        {/* Activity Icon */}
        <div style={{ color: 'var(--hud-text-muted)' }}>
          <FiActivity size={16} />
        </div>

        {/* Settings Button */}
        <button
          onClick={onSettingsClick}
          className="transition-opacity hover:opacity-75"
          style={{ color: 'var(--hud-text-muted)' }}
          aria-label="Settings"
        >
          <FiSettings size={16} />
        </button>

        {/* Page Indicator Pill */}
        <div
          className="rounded border border-[1px] px-2 py-1 text-xs"
          style={{
            borderColor: 'var(--hud-border)',
            color: 'var(--hud-text-primary)',
          }}
        >
          [{pageIndex}] {pageLabel.toUpperCase()}
        </div>
      </div>
    </div>
  );
}
