"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiMail,
  FiGithub,
} from "react-icons/fi";
import { inter } from "@/lib/fonts";

const SECTION_IDS = ["home", "about", "skills", "experience", "projects", "contact"];

const navLinks = [
  { name: "Home",     path: "#home",       id: "home",       icon: FiHome },
  { name: "About",    path: "#about",      id: "about",      icon: FiUser },
  { name: "Skills",   path: "#skills",     id: "skills",     icon: FiCode },
  { name: "Work",     path: "#experience", id: "experience", icon: FiBriefcase },
  { name: "Projects", path: "#projects",   id: "projects",   icon: FiGithub },
  { name: "Contact",  path: "#contact",    id: "contact",    icon: FiMail },
];

// Self-contained: tracks its own scroll state, needs no props
const MobileBottomNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  // Only show on the homepage where sections exist
  const isHome = pathname === "/";

  const handleNavClick = useCallback((path: string) => {
    const el = document.querySelector(path);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const current = SECTION_IDS.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Only render on homepage (sections only exist there)
  if (!isHome) return null;

  return (
    <div
      className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-[999]"
      style={{ width: "min(calc(100vw - 32px), 480px)" }}
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 26, stiffness: 300, delay: 0.3 }}
      >
        <div
          className="flex items-center justify-between px-2 py-2 rounded-2xl border border-theme-border/60"
          style={{
            background: "color-mix(in srgb, var(--theme-bg-secondary) 94%, transparent)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <motion.button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                whileTap={{ scale: 0.86 }}
                className="relative flex flex-col items-center justify-center flex-1 py-1.5 rounded-xl min-w-0"
                aria-label={link.name}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileNavPill"
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background:
                        "color-mix(in srgb, var(--theme-primary) 16%, transparent)",
                      border:
                        "1px solid color-mix(in srgb, var(--theme-primary) 35%, transparent)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 36 }}
                  />
                )}

                <link.icon
                  className="relative z-10 w-[18px] h-[18px] shrink-0 transition-colors duration-200"
                  style={{
                    color: isActive
                      ? "var(--theme-primary)"
                      : "var(--theme-text-muted)",
                  }}
                />

                <span
                  className={`relative z-10 mt-0.5 text-[9px] leading-tight truncate max-w-[44px] transition-colors duration-200 ${inter.className}`}
                  style={{
                    color: isActive
                      ? "var(--theme-primary)"
                      : "var(--theme-text-muted)",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {link.name}
                </span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default MobileBottomNav;
