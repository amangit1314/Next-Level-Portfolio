"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiBriefcase,
  FiCode,
  FiDownload,
  FiGithub,
  FiHome,
  FiMail,
  FiUser,
} from "react-icons/fi";
import { poppins } from "@/lib/fonts";

const navLinks = [
  { name: "Home", path: "#home", icon: FiHome },
  { name: "About", path: "#about", icon: FiUser },
  { name: "Skills", path: "#skills", icon: FiCode },
  { name: "Experience", path: "#experience", icon: FiBriefcase },
  { name: "Projects", path: "#projects", icon: FiGithub },
  { name: "Contact", path: "#contact", icon: FiMail },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.path.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scroll
  const handleNavClick = (path: string) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full py-4 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 shadow-2xl"
            : "bg-transparent"
        } ${isMobile ? "hidden" : "block"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavClick("#home")}
            >
              <div className="relative">
                <Image
                  src="/images/logo/logo.png"
                  alt="Aman Soni"
                  width={48}
                  height={48}
                  className="object-cover rounded-full ring-2 ring-zinc-700/50 group-hover:ring-purple-500/50 transition-all duration-300"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-lg md:text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight ${poppins.className}`}
                >
                  Aman Soni
                </span>
                <span className="text-xs text-zinc-400 font-medium tracking-wide">
                  Full Stack Developer
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => handleNavClick(link.path)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    activeSection === link.path.substring(1)
                      ? "text-purple-400"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </span>

                  {/* Enhanced Active Indicator */}
                  {activeSection === link.path.substring(1) && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20"
                      layoutId="activeNav"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.02 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Resume Button */}
            <motion.a
              href="/assets/aman_resume_new.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Resume</span>
                <FiDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
              </span>
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Header - Minimal version */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`lg:hidden fixed top-0 left-0 right-0 z-40 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => handleNavClick("#home")}
            >
              <Image
                src="/images/logo/logo.png"
                alt="Aman Soni"
                width={36}
                height={36}
                className="object-cover rounded-full ring-1 ring-zinc-700/50"
              />
              <span
                className={`text-base font-bold text-white ${poppins.className}`}
              >
                Aman Soni
              </span>
            </motion.div>

            {/* Resume Button for Mobile Header */}
            <motion.a
              href="/assets/aman_resume_new.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Resume</span>
              <FiDownload className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Header;
