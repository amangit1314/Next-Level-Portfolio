"use client";

/**
 * Theme Switcher Component
 *
 * Elegant dropdown UI for switching between themes.
 * Shows theme preview cards with color swatches and active indicator.
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { useTheme } from "@/contexts/ThemeContext";
import { Theme } from "@/types/theme";
import { unbounded } from "@/lib/fonts";
import { FaPalette } from "react-icons/fa6";

export const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currentTheme, setTheme, availableThemes } = useTheme();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleThemeSelect = (themeId: string) => {
    setTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-2.5 rounded-lg bg-theme-bg-tertiary/70 border border-theme-border hover:border-theme-primary/60 transition-all duration-300 group relative"
        aria-label="Change theme"
      >
        <FaPalette className="w-5 h-5 text-theme-text-secondary group-hover:text-theme-primary transition-colors duration-300" />

        {/* Active theme indicator dot */}
        <div
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-theme-bg-primary"
          style={{ backgroundColor: currentTheme.colors.primary.hex }}
        />
      </motion.button>

      {/* Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 p-4 bg-theme-bg-secondary/95 backdrop-blur-xl rounded-2xl border border-theme-border shadow-2xl w-[90vw] max-w-sm max-h-[70vh] overflow-y-auto z-50 origin-top-right xs:w-80"
          >
            <div className="mb-3">
              <h3
                className={`text-sm font-semibold text-theme-text-primary ${unbounded.className}`}
              >
                Choose Theme
              </h3>
              <p className="text-xs text-theme-text-muted mt-1">
                {availableThemes.length} themes available
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {availableThemes.map((theme) => (
                <ThemeCard
                  key={theme.id}
                  theme={theme}
                  isActive={theme.id === currentTheme.id}
                  onClick={() => handleThemeSelect(theme.id)}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ====================================================================================== 

interface ThemeCardProps {
  theme: Theme;
  isActive: boolean;
  onClick: () => void;
}

const ThemeCard = ({ theme, isActive, onClick }: ThemeCardProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`relative p-3 rounded-xl border-2 transition-all duration-300
          ${isActive
          ? "border-theme-text-primary bg-theme-bg-tertiary/70 shadow-lg"
          : "border-theme-border hover:border-theme-border-light bg-theme-bg-tertiary/30"
        }`}
    >
      {/* Light theme badge */}
      {theme.mode === "light" && (
        <div className="absolute -top-1.5 -right-1.5 px-2 py-0.5 bg-amber-500 text-[10px] font-bold rounded-full text-white shadow-lg">
          LIGHT
        </div>
      )}

      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{theme.emoji}</span>
        <span
          className={`text-xs font-semibold text-theme-text-primary truncate ${unbounded.className}`}
        >
          {theme.name}
        </span>
      </div>

      {/* Color preview swatches */}
      <div className="flex gap-1 mb-2">
        <div
          className="h-6 flex-1 rounded"
          style={{ background: theme.colors.primary.hex }}
        />
        <div
          className="h-6 flex-1 rounded"
          style={{ background: theme.colors.secondary.hex }}
        />
        <div
          className="h-6 flex-1 rounded"
          style={{ background: theme.colors.accent.hex }}
        />
      </div>

      {/* Background preview for light theme */}
      {theme.mode === "light" && (
        <div
          className="h-2 rounded mb-1"
          style={{ background: theme.colors.bgPrimary }}
        />
      )}

      {/* Active indicator */}
      {isActive && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex items-center justify-center mt-1"
        >
          <FiCheck className="w-4 h-4 text-green-400" />
        </motion.div>
      )}
    </motion.button>
  );
};

export default ThemeSwitcher;
