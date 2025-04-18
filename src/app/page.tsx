"use client";

import React from "react";

import { Header } from "@/components/Header";
import {HeroSection} from "@/components/HeroSection";
import {AboutSection} from "@/components/AboutSection";
import {MiscSkills} from "@/components/MiscSkills";
import {Experience} from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Project } from "@/components/ProjectsGithub";
import { Contact } from "@/components/export";

const Home = () => {
  return (
    <main className="flex flex-col items-center overflow-x-hidden justify-between min-h-screen md:px-8 bg-zinc-950">
      <div className="flex  justify-center items-center z-10 w-full text-sm md:max-w-7xl">
        <Header />
      </div>

      <div className="flex justify-start items-center w-full max-w-7xl">
        <HeroSection />
      </div>

      <div className="flex justify-center items-center w-full max-w-7xl">
        <AboutSection />
      </div>

      <div className="flex justify-center items-center w-full max-w-7xl mb-8">
        <MiscSkills directionLeft />
      </div>

      <div className="flex justify-center items-center w-full max-w-7xl mb-8">
        <Experience />
      </div>

      <div className="flex justify-center items-center w-full max-w-7xl mb-8">
        <Project />
      </div>

      <div className="flex justify-center items-center w-full max-w-7xl">
        <Testimonials />
      </div>

      {/* <Contact /> */}
      <Contact />

      <div className="mt-8">
        <Footer />
      </div>
    </main>
  );
};

export default Home;
