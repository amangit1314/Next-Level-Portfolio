'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { jetbrainsMono, anton } from '@/lib/fonts';
import { FiX } from 'react-icons/fi';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface NavLink {
  name: string;
  path: string;
  index: number;
}

interface HudMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function HudMenu({
  isOpen,
  onClose,
  navLinks,
  socialLinks,
  currentPath,
  onNavigate,
}: HudMenuProps) {
  // Click-outside close — a compact anchored popover (not a full-screen
  // drawer anymore, see the panel below) doesn't cover the page, so there's
  // no full-viewport overlay to catch the close click. Scroll is left
  // unlocked for the same reason: the page behind is fully visible and
  // interactive except within the popover itself.
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('[data-hud-menu]')) onClose();
    };
    // Listen on the next tick so the click that opened the menu (via the
    // settings button) doesn't immediately close it again.
    const id = setTimeout(() => document.addEventListener('click', handleClick), 0);
    return () => {
      clearTimeout(id);
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          data-hud-menu
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'bottom right', backgroundColor: 'var(--hud-bg-elevated)', borderColor: 'var(--hud-border)' }}
          className="fixed bottom-20 sm:bottom-24 right-4 sm:right-8 z-50 w-[min(380px,calc(100vw-2rem))] max-h-[75vh] flex flex-col rounded-none border overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b px-5 py-3" style={{ borderBottomColor: 'var(--hud-border)' }}>
            <span className={`text-lg ${anton.className}`} style={{ color: 'var(--hud-text-primary)' }}>
              MENU
            </span>
            <button
              onClick={onClose}
              className="transition-opacity hover:opacity-75"
              style={{ color: 'var(--hud-text-primary)' }}
              aria-label="Close menu"
            >
              <FiX size={18} />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto">
            {/* Social Links — compact bulleted rows, not icon tiles. Reads
                as a data list (matches the ticker/status-bar chip language
                elsewhere) rather than an app-icon grid. */}
            <div className="px-5 py-5">
              <label
                className={`mb-3 block text-xs font-semibold tracking-wider ${jetbrainsMono.className}`}
                style={{ color: 'var(--hud-text-muted)' }}
              >
                NAVIGATION
              </label>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Real color invert on hover (bg <-> text swap), not
                    // just an opacity fade — matches the filled/inverted
                    // treatment used elsewhere for "this is clickable".
                    className={`flex items-center gap-2 rounded-none border px-3 py-2.5 text-sm transition-colors text-[var(--hud-text-primary)] hover:bg-[var(--hud-text-primary)] hover:text-[var(--hud-bg)] ${jetbrainsMono.className}`}
                    style={{ borderColor: 'var(--hud-border)' }}
                  >
                    <span aria-hidden style={{ color: 'currentColor', opacity: 0.55 }}>•</span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Numbered Nav — Anton display face + a filled active row
                instead of a small dot, so the current page reads at a
                glance instead of needing a close look. */}
            <div className="border-t" style={{ borderTopColor: 'var(--hud-border)' }}>
              {navLinks.map((link) => {
                const isActive = link.path === currentPath;
                return (
                  <button
                    key={link.path}
                    onClick={() => {
                      onNavigate(link.path);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between border-b px-5 py-4 text-left transition-colors"
                    style={{
                      borderBottomColor: 'var(--hud-border)',
                      backgroundColor: isActive ? 'var(--hud-text-primary)' : 'transparent',
                    }}
                  >
                    <span
                      className={`text-lg uppercase leading-none ${anton.className}`}
                      style={{ color: isActive ? 'var(--hud-bg)' : 'var(--hud-text-primary)' }}
                    >
                      [{link.index}] {link.name}
                    </span>
                    {!isActive && (
                      <span className={`text-xs ${jetbrainsMono.className}`} style={{ color: 'var(--hud-text-muted)' }}>
                        GO
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
