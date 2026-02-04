"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiDownload,
  FiGithub,
  FiHome,
  FiMail,
  FiFileText,
  FiLayers,
  FiBookOpen,
} from "react-icons/fi";
import { caveat, inter, unbounded } from "@/lib/fonts";
import { usePathname, useRouter } from "next/navigation";
import { Variants, Transition } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";
import Magnetic from "./Magnetic";

// PAGE-LEVEL NAV (top bar)
export const pageLinks = [
  { name: "Home", path: "/", icon: FiHome },
  { name: "Projects", path: "/projects", icon: FiGithub },
  { name: "Components", path: "/components", icon: FiLayers },
  { name: "Blogs", path: "/blogs", icon: FiFileText },
];

// SECTION NAV (used only on home page in a separate vertical component)
export const sectionLinks = [
  { name: "Intro", id: "home", icon: FiHome },
  { name: "About", id: "about", icon: FiBriefcase },
  { name: "Skills", id: "skills", icon: FiLayers },
  { name: "Experience", id: "experience", icon: FiBookOpen },
  { name: "Projects", id: "projects", icon: FiGithub },
  { name: "Contact", id: "contact", icon: FiMail },
];

export const sidebarTransition: Transition = {
  type: "tween",
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1],
  when: "beforeChildren",
  staggerChildren: 0.07,
  delayChildren: 0.1,
};

export const sidebarVariants: Variants = {
  closed: { x: "100%" },
  open: {
    x: 0,
    transition: sidebarTransition,
  },
};

export const itemVariants: Variants = {
  closed: { opacity: 0, x: 40 },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
    },
  },
};

export const overlayVariants: Variants = {
  closed: { opacity: 0, pointerEvents: "none" },
  open: { opacity: 1, pointerEvents: "auto" },
};

/// ===============================================================================================

type HeaderProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigate to page
  const handlePageNavClick = (path: string) => {
    if (path === pathname) return;
    router.push(path);
  };

  const isPageActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 w-full py-4 transition-all duration-300 ${scrolled
          ? "bg-theme-bg-primary/95 backdrop-blur-xl border-b border-theme-border/50 shadow-2xl"
          : "bg-transparent"
          } ${isMobile ? "hidden lg:block" : "block"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Magnetic>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 cursor-pointer group"
                onClick={() => handlePageNavClick("/")}
              >
                <div className="relative">
                  {/* Letter logo */}
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-theme-bg-secondary ring-2 ring-theme-border/50 group-hover:ring-theme-primary/70 transition-all duration-300 overflow-visible"
                    whileHover={{ rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span
                      className={`relative z-10 ${caveat.className} text-xl font-bold tracking-wide theme-text-gradient bg-clip-text text-transparent`}
                    >
                      As
                    </span>
                  </motion.div>

                  {/* Glow ring on hover */}
                  <div className="pointer-events-none absolute -inset-1 rounded-full theme-gradient-accent opacity-0 blur group-hover:opacity-100 transition-colors duration-500 -z-10" />
                </div>
              </motion.div>
            </Magnetic>

            {/* Desktop Navigation - PAGE LINKS ONLY */}
            <div className="flex items-center space-x-1">
              {pageLinks.map((link, index) => {
                const active = isPageActive(link.path);
                return (
                  <Magnetic key={link.name}>
                    <motion.button
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * index }}
                      layoutId={link.name}
                      onClick={() => handlePageNavClick(link.path)}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${active
                        ? "text-theme-primary"
                        : "text-theme-text-secondary hover:text-theme-text-primary"
                        }`}
                    >
                      <span className="relative z-10 flex items-center space-x-2">
                        <link.icon className="w-4 h-4" />
                        <span
                          className={`text-xs font-bold theme-text-gradient bg-clip-text text-transparent tracking-tight ${unbounded.className}`}
                        >
                          {link.name}
                        </span>
                      </span>

                      {/* Active Indicator */}
                      {active && (
                        <motion.div
                          className="absolute inset-0 theme-gradient-accent/10 rounded-lg border border-theme-primary/20"
                          layoutId="activePageNav"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}

                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 theme-gradient-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.02 }}
                      />
                    </motion.button>
                  </Magnetic>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <ThemeSwitcher />

              {/* Resume Button */}
              <Magnetic>
                <motion.a
                  href="/assets/aman_resume_new.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="
      group relative px-6 py-2.5
      inline-flex items-center justify-center
      text-sm font-semibold rounded-lg
      transition-all duration-300
      theme-gradient-accent
      shadow-lg hover:shadow-[0_0_22px_rgba(var(--theme-primary-rgb),0.35)]
      hover:brightness-105
    "
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span
                      className={`
          text-xs font-extrabold tracking-tight uppercase
          text-white ${unbounded.className}
        `}
                    >
                      Resume
                    </span>

                    <FiDownload className="w-4 h-4 group-hover:translate-y-0.5 text-primary-foreground transition-transform duration-300" />
                  </span>
                </motion.a>
              </Magnetic>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Header - Minimal */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:hidden fixed top-0 left-0 right-0 z-40 py-3 transition-all duration-300 bg-theme-bg-primary/95 backdrop-blur-xl border-b border-theme-border/50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handlePageNavClick("/")}
            >
              <div className="relative">
                {/* Letter logo */}
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-theme-bg-secondary ring-2 ring-theme-border/50 group-hover:ring-theme-primary/70 transition-all duration-300 overflow-visible"
                  whileHover={{ rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span
                    className={`relative z-10 ${caveat.className} text-xl font-bold tracking-wide theme-text-gradient bg-clip-text text-transparent`}
                  >
                    As
                  </span>
                </motion.div>

                {/* Glow ring on hover */}
                <div className="pointer-events-none absolute -inset-1 rounded-full theme-gradient-accent opacity-0 blur group-hover:opacity-100 transition-colors duration-500 -z-10" />
              </div>
            </motion.div>

            <div className="flex items-center gap-4">
              {/* Theme Switcher */}
              <ThemeSwitcher />

              {/* Animated Menu Icon */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-theme-bg-secondary border border-theme-border/70 text-theme-text-primary"
                aria-label="Toggle menu"
              >
                <motion.span
                  initial={false}
                  animate={isMenuOpen ? "open" : "closed"}
                  className="relative h-4 w-4 space-y-1 "
                >
                  {/* top line */}
                  <motion.span
                    variants={{
                      closed: { y: -3, rotate: 0 },
                      open: { y: 0, rotate: 45 },
                    }}
                    className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-current"
                  />
                  {/* middle line */}
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-current"
                  />
                  {/* bottom line */}
                  <motion.span
                    variants={{
                      closed: { y: 3, rotate: 0 },
                      open: { y: 0, rotate: -45 },
                    }}
                    className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-current"
                  />
                </motion.span>
              </motion.button>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay + Sidebar */}
      <motion.div
        className="fixed inset-0 z-40 lg:hidden"
        variants={overlayVariants}
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Dark overlay */}
        <motion.div className="absolute inset-0 bg-theme-bg-primary/80 backdrop-blur-sm" />

        {/* Sidebar */}
        <motion.aside
          className="absolute right-0 top-0 h-full w-full sm:w-[60%] md:w-[45%] bg-theme-bg-primary"
          initial={false}
          variants={sidebarVariants}
          onClick={(e) => e.stopPropagation()}
        >
          {/* header section */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-theme-border">
            <span
              className={`text-base font-semibold text-theme-text-primary ${unbounded.className}`}
            >
              Menu
            </span>

            {/* close menu */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-theme-border text-theme-text-secondary"
              aria-label="Close menu"
            >
              <motion.span
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
                className="relative h-4 w-4"
              >
                {/* top line */}
                <motion.span
                  variants={{
                    closed: { y: -2, rotate: 0 },
                    open: { y: 0, rotate: 45 },
                  }}
                  className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-current"
                />

                {/* middle line */}
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-current"
                />

                {/* bottom line */}
                <motion.span
                  variants={{
                    closed: { y: 2, rotate: 0 },
                    open: { y: 0, rotate: -45 },
                  }}
                  className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-current"
                />
              </motion.span>
            </motion.button>
          </div>

          <div className="flex h-[calc(100%-56px)] flex-col justify-between px-6 py-6">
            {/* Main links */}
            <nav className="space-y-4">
              {pageLinks.map((link, index) => {
                const active = isPageActive(link.path);
                return (
                  <motion.button
                    key={link.name}
                    variants={itemVariants}
                    className={`flex ${inter.className} cursor-pointer hover:text-theme-primary w-full items-center justify-between text-left text-2xl font-semibold ${active
                      ? "text-theme-text-primary"
                      : "text-theme-text-muted"
                      }`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      handlePageNavClick(link.path);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-theme-text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{link.name.toUpperCase()}</span>
                    </div>
                    <link.icon className="w-5 h-5 text-theme-text-muted" />
                  </motion.button>
                );
              })}
            </nav>
          </div>
        </motion.aside>
      </motion.div>
    </>
  );
};

export default Header;
