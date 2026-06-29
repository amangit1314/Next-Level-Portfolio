"use client";

import React, { useState, useEffect } from "react";

import {
  AboutSection,
  Contact,
  Experience,
  Footer,
  Header,
  HeroSection,
  MobileBottomNav,
  Projects,
  Skills,
  Testimonials,
} from "@/components/export";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-theme-bg-primary via-theme-bg-secondary to-theme-bg-primary">
      <header className="fixed top-0 left-0 right-0 z-50">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </header>

      <div className="pt-20">
        <HeroSection />
        <AboutSection />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </div>

      <footer className="mt-16 w-full overflow-hidden border-t border-theme-border/50 bg-gradient-to-b from-theme-bg-secondary to-theme-bg-primary">
        <Footer />
      </footer>

      {!isMenuOpen && (
        <MobileBottomNav
          activeSection={activeSection}
          onNavClick={handleNavClick}
        />
      )}
    </main>
  );
};

export default Home;
