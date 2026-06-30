"use client";

import React from "react";

import {
  AboutSection,
  Contact,
  Experience,
  Footer,
  Header,
  HeroSection,
  Projects,
  Skills,
  Testimonials,
} from "@/components";

const Home = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-theme-bg-primary via-theme-bg-secondary to-theme-bg-primary">
      <header className="fixed top-0 left-0 right-0 z-50">
        <Header />
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

      <footer className="mt-16 pb-24 lg:pb-0 w-full overflow-hidden border-t border-theme-border/50 bg-gradient-to-b from-theme-bg-secondary to-theme-bg-primary">
        <Footer />
      </footer>
    </main>
  );
};

export default Home;
