"use client";

import React from "react";

import { Header } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MiscSkills from "@/components/MiscSkills";
import Experience from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import Footer from "@/components/Footer";
import {
  FaMailBulk,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Project from "@/components/ProjectsGithub";

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
      {/* <div className="flex justify-center items-center w-full max-w-7xl space-y-8 p-8 md:p-0">
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
              className="text-indigo-500 cursor-pointer  hover:text-indigo-600 transition-all "
            >
              Linkedin
            </Link>
            ,{" "}
            <Link
              href={"https://www.instagram.com/soni.amanic"}
              className="text-rose-500 cursor-pointer  hover:text-rose-800 transition-all "
            >
              Instagram
            </Link>{" "}
            or{" "}
            <Link
              href={"https://x.com/Hulk131469"}
              className="text-sky-500 hover:text-blue-600 transition-all cursor-pointer"
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
      </div> */}
      <Contact />

      <div className="mt-8">
        <Footer />
      </div>
    </main>
  );
};

export default Home;

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aman-soni1",
      icon: <FaLinkedin className="text-xl" />,
      color: "text-indigo-400 hover:text-indigo-300",
    },
    {
      name: "GitHub",
      url: "https://github.com/amangit1314",
      icon: <FaGithub className="text-xl" />,
      color: "text-gray-400 hover:text-white",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/yourchannel",
      icon: <FaYoutube className="text-xl" />,
      color: "text-red-500 hover:text-red-400",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/soni.amanic",
      icon: <FaInstagram className="text-xl" />,
      color: "text-rose-400 hover:text-rose-300",
    },
    {
      name: "X",
      url: "https://x.com/Hulk131469",
      icon: <FaTwitter className="text-xl" />,
      color: "text-sky-400 hover:text-sky-300",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-gradient-to-b bg-transparent overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-600/20 blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Contact Card */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative bg-neutral-900/70 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 md:p-10 overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Header */}
            <motion.div
              variants={item}
              className="relative mb-8 pb-6 border-b border-neutral-800"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center">
                Get In Touch{" "}
                <motion.span
                  className="text-purple-500 ml-1"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  .
                </motion.span>
              </h1>
            </motion.div>

            {/* Content */}
            <div className="relative space-y-8">
              <motion.p
                variants={item}
                className="text-center text-neutral-400 text-sm md:text-base"
              >
                Have a project in mind or want to collaborate? Feel free to
                reach out!
              </motion.p>

              {/* Social Links Grid */}
              <motion.div
                variants={container}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex justify-center"
                  >
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} transition-all duration-300 flex flex-col items-center gap-2`}
                    >
                      <div className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300">
                        {social.icon}
                      </div>
                      <span className="text-xs font-medium">{social.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Email Section */}
              <motion.div
                variants={item}
                className="flex flex-col items-center gap-4 mt-8 pt-6 border-t border-neutral-800"
              >
                <p className="text-neutral-400 text-sm">
                  Or send me an email at:
                </p>
                <div className="flex items-center gap-3 bg-neutral-800/50 px-6 py-3 rounded-full">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <FaMailBulk className="text-purple-400" />
                  </div>
                  <a
                    href="mailto:amansoni53453@gmail.com"
                    className="text-base md:text-lg text-white hover:text-purple-400 transition-colors duration-300"
                  >
                    amansoni53453@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
