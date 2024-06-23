"use client";

import React from "react";

import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MiscSkills from "@/components/MiscSkills";
import Experience from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Contact } from "@/components/export";
import Project from "@/components/ProjectsGithub";
import { FaGithub, FaInstagram, FaX, FaYoutube } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import Link from "next/link";

const Home = () => {
  return (
    <main className="flex flex-col items-center overflow-x-hidden justify-between min-h-screen md:px-8 bg-zinc-950">
      <div className="flex sticky fixed justify-center items-center z-10 w-full text-sm md:max-w-7xl">
        <Header />
      </div>

      <div className="flex justify-start items-center w-full max-w-7xl">
        {/* vertical links */}
        {/* <div className="flex justify-end items-center space-x-4 rotate-90 ml-auto">
          <div className="flex justify-start items-center text-xs text-gray-300 font-thin uppercase cursor-pointer hover:text-purple-500 transition-all duration-300 space-x-2">
            <FaInstagram />
            <p>Instagram</p>
          </div>

          <div className="h-5 border rotate-90 border-stroke border-gray-500" />

          <div className="flex justify-start items-center text-xs text-gray-300 font-thin uppercase cursor-pointer hover:text-purple-500 transition-all duration-300 space-x-2">
            <FaGithub />
            <p>GitHub</p>
          </div>

          <div className="h-5 border rotate-90 border-stroke border-gray-500" />

          <div className="flex justify-start items-center text-xs text-gray-300 font-thin uppercase cursor-pointer hover:text-purple-500 transition-all duration-300 space-x-2">
            <FaX />
            <p>X</p>
          </div>

          <div className="h-5 border rotate-90 border-stroke border-gray-500" />

          <div className="flex justify-start items-center text-xs text-gray-300 font-thin uppercase cursor-pointer hover:text-purple-500 transition-all duration-300 space-x-2">
            <FaYoutube />
            <p>Youtube</p>
          </div>
        </div> */}

        {/* hero section */}
        <HeroSection />
      </div>

      <div className="flex justify-center items-center w-full max-w-7xl">
        <AboutSection />
      </div>

      <div className="flex justify-center items-center w-full max-w-7xl">
        <MiscSkills directionLeft />
      </div>

      <div className="flex justify-center items-center w-full max-w-7xl">
        <Experience />
      </div>

      <div className="flex justify-center items-center w-full max-w-7xl">
        <Project />
      </div>

      <div className="flex justify-center items-center w-full max-w-7xl">
        <Testimonials />
      </div>

      {/* <Contact /> */}
      <div className="flex justify-center items-center w-full max-w-7xl space-y-8 p-8 md:p-0">
        <div className="max-w-4xl w-full rounded-2xl p-6 space-y-6 text-gray-400 bg-zinc-900">
          <h1 className="flex border-b border-stroke border-neutral-800 justify-center items-center text-3xl font-bold tracking-tight mx-auto text-white">
            Contact{" "}
            <span className="text-5xl text-purple-500 pl-1 pb-2">.</span>
          </h1>

          <p className="text-center text-sm md:text-base ">
            Shoot me an email if you want to connect! <br /> You can also find
            me on{" "}
            <Link
              href={"https://www.linkedin.com/in/aman-soni1"}
              className="text-indigo-500 cursor-pointer  hover:text-purple-600 transition-all "
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <Link
              href={"https://x.com/Hulk131469"}
              className="text-sky-500 hover:text-purple-600 transition-all cursor-pointer"
            >
              X
            </Link>{" "}
            if that&apos;s more your speed.{" "}
          </p>

          <div className="flex justify-center items-center space-x-2">
            <FaMailBulk className="text-white" />
            <p className="text-md text-base">amansoni53453@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Footer />
      </div>
    </main>
  );
};

export default Home;
