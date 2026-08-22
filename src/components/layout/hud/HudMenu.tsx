'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { jetbrainsMono } from '@/lib/fonts';
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
          className="fixed bottom-20 sm:bottom-24 right-4 sm:right-8 z-50 w-[min(360px,calc(100vw-2rem))] max-h-[70vh] flex flex-col rounded-none border overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b px-5 py-3" style={{ borderBottomColor: 'var(--hud-border)' }}>
            <span className="font-bold" style={{ color: 'var(--hud-text-primary)' }}>
              Menu
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
            {/* Social Links Section */}
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
                    className="flex flex-col items-center justify-center gap-2 rounded-none border px-3 py-2.5 transition-all hover:opacity-80"
                    style={{
                      borderColor: 'var(--hud-border)',
                      color: 'var(--hud-text-primary)',
                    }}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="text-xs text-center">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              {navLinks.map((link) => {
                const isActive = link.path === currentPath;
                return (
                  <button
                    key={link.path}
                    onClick={() => {
                      onNavigate(link.path);
                      onClose();
                    }}
                    className={`w-full flex items-center justify-between border-b px-5 py-3 text-left transition-all hover:bg-white/5 ${jetbrainsMono.className}`}
                    style={{
                      borderBottomColor: 'var(--hud-border)',
                      color: 'var(--hud-text-primary)',
                    }}
                  >
                    <span className="text-sm font-medium">
                      [{link.index}] {link.name.toUpperCase()}
                    </span>
                    <div
                      className="h-2 w-2 rounded-full transition-opacity"
                      style={{
                        backgroundColor: isActive
                          ? 'var(--hud-text-primary)'
                          : 'var(--hud-text-muted)',
                      }}
                    />
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
