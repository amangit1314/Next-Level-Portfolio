"use client";

import React from "react";

import {
  AboutSection,
  Contact,
  Experience,
  HeroSection,
  Projects,
  Skills,
  Testimonials,
} from "@/components";

const Home = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-theme-bg-primary via-theme-bg-secondary to-theme-bg-primary">
      <div className="pt-20 pb-24 lg:pb-0">
        <HeroSection />
        <AboutSection />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
