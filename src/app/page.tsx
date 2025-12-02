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

  // Handle active section detection
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

  const handleNavClick = (path: string) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-theme-bg-primary via-theme-bg-secondary to-theme-bg-primary overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </header>

      {/* Main content */}
      <div className="pt-20 flex flex-col items-center">
        <section id="home" className="w-full max-w-7xl">
          <HeroSection />
        </section>

        <section id="about" className="w-full max-w-7xl">
          <AboutSection />
        </section>

        <section id="skills" className="w-full max-w-7xl">
          <Skills />
        </section>

        <section id="experience" className="w-full max-w-7xl">
          <Experience />
        </section>

        <section id="projects" className="w-full max-w-7xl">
          <Projects />
        </section>
      </div>

      {/* Testimonials */}
      <section className="w-full max-w-7xl mx-auto">
        <Testimonials />
      </section>

      <section id="contact" className="w-full max-w-7xl">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="mt-16 w-full bg-zinc-900/50 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <Footer />
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </main>
  );
};

export default Home;
