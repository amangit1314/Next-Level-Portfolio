"use client";

import { inter, poppins } from "@/lib/fonts";
import { PROJECTS } from "@/utils/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
} from "react-icons/fi";

const typewriterTexts = [
  "Building Seamless Full-Stack Experiences (Next.js + Node.js)",
  "Crafting Scalable React & TypeScript Architectures",
  "Blending AI with Real-Time Magic ✨",
  "Turning Milliseconds into Masterpieces ⚡",
  // "Engineering E-Commerce & EdTech Platforms that Convert",
  "Designing Interfaces People *Love* to Use ❤️",
];

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const currentText = typewriterTexts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentTextIndex]);

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex px-4 md:px-8 items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 via-transparent to-purple-950/10"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto px-4 py-20">
        {/* Text Content - Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span
              className={`text-sm font-medium text-green-400 ${inter.className}`}
            >
              Available for new projects
            </span>
          </motion.div>

          {/* <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-4"
            >
              <h1
                className={`text-3xl lg:text-4xl space-x-2 xl:text-8xl font-bold leading-tight tracking-tight ${poppins.className}`}
              >
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Aman
                </span>
               
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Soni
                </span>
              </h1>
            </motion.div>

          
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-2"
            >
              <div
                className={`text-2xl lg:text-3xl font-semibold text-gray-300 ${poppins.className}`}
              >
                I am a{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  {displayedText}
                  <span className="animate-pulse text-purple-400">|</span>
                </span>
              </div>
            </motion.div>
          </div> */}

          <div className="space-y-4">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-2"
            >
              <h1
                className={`font-bold leading-[1.1] tracking-tighter text-4xl sm:text-5xl lg:text-7xl xl:text-8xl ${poppins.className}`}
              >
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Aman
                </span>{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Soni
                </span>
              </h1>
            </motion.div>

            {/* Typewriter Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div
                className={`font-semibold text-gray-300 text-lg sm:text-xl lg:text-2xl xl:text-3xl ${inter.className}`}
              >
                {/* I am a{" "} */}
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  {displayedText}
                  <span className="animate-pulse text-purple-400">|</span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-2xl"
          >
            <p
              className={`text-gray-400 text-lg leading-relaxed ${inter.className}`}
            >
              With{" "}
              <span className="text-purple-400 font-semibold">3+ years</span> of
              experience, I create digital experiences that blend beautiful
              design with robust functionality. Passionate about building
              scalable applications using modern technologies.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="grid grid-cols-3 gap-8"
          >
            {[
              { number: "3+", label: "Years Experience" },
              { number: PROJECTS.length, label: "Projects" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div
                  className={`text-2xl lg:text-3xl font-bold text-white ${poppins.className}`}
                >
                  {stat.number}
                </div>
                <div
                  className={`text-sm text-gray-400 mt-1 ${inter.className}`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
          >
            <motion.button
              onClick={handleScrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
            >
              <span>View My Work</span>
              <FiExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-zinc-700 text-gray-300 rounded-xl font-semibold hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start space-x-4 pt-6"
          >
            {[
              {
                icon: FiGithub,
                href: "https://github.com/yourusername",
                label: "GitHub",
              },
              {
                icon: FiLinkedin,
                href: "https://linkedin.com/in/yourusername",
                label: "LinkedIn",
              },
              {
                icon: FiMail,
                href: "mailto:your.email@example.com",
                label: "Email",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-zinc-800/50 hover:bg-zinc-700 border border-zinc-700/50 hover:border-purple-500/50 rounded-xl transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden">
              <Image
                src="/images/aman_gibly.png"
                alt="Aman Soni - Full Stack Developer"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                quality={95}
                priority
              />

              {/* Gradient Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-transparent to-transparent" /> */}

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>

            {/* Floating Tech Stack */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-4 -right-4 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-700/50 shadow-lg"
            >
              <div
                className={`text-sm font-semibold text-white ${poppins.className}`}
              >
                Tech Stack
              </div>
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg"
            >
              <div className={`text-white font-semibold ${poppins.className}`}>
                <div className="text-sm">3+ Years</div>
                <div className="text-xs opacity-90">Experience</div>
              </div>
            </motion.div>

            {/* Animated Border */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={handleScrollToProjects}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
        >
          <span className={`text-sm font-medium ${inter.className}`}>
            Explore More
          </span>
          <FiArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;