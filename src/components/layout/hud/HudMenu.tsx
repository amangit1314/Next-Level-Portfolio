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
  // The overlay only covers the viewport visually — it doesn't stop the
  // underlying page from receiving wheel/trackpad scroll, so the page behind
  // was scrolling right through the (now-translucent) overlay while the
  // menu sat fixed on top of it. `body.overflow:hidden` alone didn't fix it
  // because `<html>` (documentElement), not `<body>`, is the element that's
  // actually scrolling here — locking body did nothing since html was still
  // free to scroll. Lock both, with height pinned so there's no scroll track
  // left at all (the menu's own content pane keeps its own overflow-y-auto
  // for internal scrolling, unaffected by this).
  useEffect(() => {
    if (!isOpen) return;
    const { documentElement, body } = document;
    const previous = {
      htmlOverflow: documentElement.style.overflow,
      htmlHeight: documentElement.style.height,
      bodyOverflow: body.style.overflow,
      bodyHeight: body.style.height,
    };
    documentElement.style.overflow = 'hidden';
    documentElement.style.height = '100%';
    body.style.overflow = 'hidden';
    body.style.height = '100%';
    return () => {
      documentElement.style.overflow = previous.htmlOverflow;
      documentElement.style.height = previous.htmlHeight;
      body.style.overflow = previous.bodyOverflow;
      body.style.height = previous.bodyHeight;
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Full-screen overlay — was a fully OPAQUE --hud-bg fill, so closing
              the menu via a nav link (onNavigate closes it, then router.push
              navigates) blacked out the entire screen — ticker, status bar,
              the new page underneath, everything — for the whole 0.35s exit
              fade. Looked like the app had crashed. Translucent now, so the
              page is dimly visible through it during that transition. */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{ backgroundColor: 'color-mix(in srgb, var(--hud-bg) 80%, transparent)' }}
          />

          {/* Slide-in panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 z-50 h-full w-full sm:w-[420px] flex flex-col overflow-hidden"
            style={{ backgroundColor: 'var(--hud-bg-elevated)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b px-6 py-4" style={{ borderBottomColor: 'var(--hud-border)' }}>
              <span className="font-bold" style={{ color: 'var(--hud-text-primary)' }}>
                Menu
              </span>
              <button
                onClick={onClose}
                className="transition-opacity hover:opacity-75"
                style={{ color: 'var(--hud-text-primary)' }}
                aria-label="Close menu"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto">
              {/* Social Links Section */}
              <div className="px-6 py-6">
                <label
                  className="mb-4 block text-xs font-semibold tracking-wider"
                  style={{ color: 'var(--hud-text-muted)' }}
                >
                  NAVIGATION
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center gap-2 rounded border px-4 py-3 transition-all hover:opacity-80"
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
                      className={`w-full flex items-center justify-between border-b px-6 py-4 text-left transition-all hover:bg-white/5 ${jetbrainsMono.className}`}
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
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
