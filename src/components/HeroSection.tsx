"use client";

import { inter, poppins, righteous, unbounded } from "@/lib/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FiArrowDown,
  FiExternalLink,
} from "react-icons/fi";
import { client } from "@/sanity/lib/client";
import { profileQuery } from "@/sanity/lib/queries";
import * as Icons from "react-icons/fi";
import HeroBackground from "./HeroBackground";

const HeroSection = () => {
  const [profile, setProfile] = useState<any>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await client.fetch(profileQuery);
      setProfile(data);
    };
    fetchProfile();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!profile?.typewriterTexts?.length) return;

    const currentText = profile.typewriterTexts[currentTextIndex];
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
        setCurrentTextIndex((prev) => (prev + 1) % profile.typewriterTexts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentTextIndex, profile]);

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getIconComponent = (iconName: string) => {
    // @ts-ignore
    return Icons[iconName] || Icons.FiLink;
  };

  // Don't render until profile data is loaded from Sanity
  if (!profile) return null;

  return (
    <section
      id="home"
      className="relative min-h-screen flex px-4 md:px-8 items-center justify-center overflow-hidden bg-linear-to-br from-theme-bg-primary via-transparent to-theme-primary-dark/10"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* WebGL Background */}
        <HeroBackground />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Main content */}
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
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-theme-bg-secondary/50 backdrop-blur-sm border border-theme-border/50"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span
              className={`text-sm font-medium text-green-400 ${inter.className}`}
            >
              Available for new projects
            </span>
          </motion.div>

          <div className="space-y-4">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-2"
            >
              <motion.h1
                className={`font-bold leading-[1.1] tracking-tighter text-3xl sm:text-5xl lg:text-7xl xl:text-8xl break-words hyphens-auto ${unbounded.className}`}
              >
                <span className="theme-text-gradient bg-clip-text text-transparent inline-block">
                  {profile.name?.split(" ")[0]}
                </span>{" "}
                <span className="theme-text-gradient bg-clip-text text-transparent z-10 inline-block">
                  {profile.name?.split(" ")[1]}
                </span>
              </motion.h1>
            </motion.div>

            {/* Typewriter Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div
                className={`font-semibold text-theme-text-secondary text-lg sm:text-xl lg:text-2xl xl:text-3xl ${inter.className}`}
              >
                {/* I am a{" "} */}
                <span className="text-transparent theme-text-gradient bg-clip-text">
                  {displayedText}
                  <span className="animate-pulse text-theme-primary">|</span>
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
              className={`text-theme-text-muted text-lg leading-relaxed ${inter.className}`}
            >
              {profile.shortBio}
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
              { number: profile.stats?.experienceYears, label: "Years Experience" },
              { number: profile.stats?.projectsCount, label: "Projects" },
              { number: profile.stats?.clientSatisfaction, label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div
                  className={`text-2xl lg:text-3xl font-bold text-theme-text-primary ${poppins.className}`}
                >
                  {stat.number}
                </div>
                <div
                  className={`text-sm text-theme-text-muted mt-1 ${inter.className}`}
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
              className="group relative px-8 py-4 theme-gradient-primary rounded-xl font-semibold text-white shadow-lg hover:shadow-theme-primary/25 transition-all duration-300 flex items-center gap-2"
            >
              <span>View My Work</span>
              <FiExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href={profile.resume?.asset?.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-theme-border text-theme-text-secondary rounded-xl font-semibold hover:border-theme-primary hover:text-theme-primary transition-all duration-300"
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
            {profile.socialLinks?.map((social: any, index: number) => {
              const Icon = getIconComponent(social.iconName);
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-theme-bg-secondary/50 hover:bg-theme-bg-hover border border-theme-border/50 hover:border-theme-primary/50 rounded-xl transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-theme-text-muted group-hover:text-theme-primary transition-colors duration-300" />
                </motion.a>
              );
            })}
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
                src={profile.profileImage?.asset?.url || "/images/aman_avatar.webp"}
                alt={`${profile.name} - ${profile.role}`}
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
              className="absolute -top-4 -right-4 px-4 py-2 bg-theme-bg-secondary/80 backdrop-blur-sm rounded-xl border border-theme-border/50 shadow-lg"
            >
              <div
                className={`text-sm font-semibold text-theme-text-primary ${poppins.className}`}
              >
                Tech Stack
              </div>
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 px-4 py-3 theme-gradient-primary rounded-xl shadow-lg"
            >
              <div className={`text-theme-text-primary font-semibold ${poppins.className}`}>
                <div className="text-sm">{profile.stats?.experienceYears}</div>
                <div className="text-xs opacity-90">Experience</div>
              </div>
            </motion.div>

            {/* Animated Border */}
            <div className="absolute -inset-4 rounded-3xl theme-gradient-accent opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
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
          className="flex flex-col items-center space-y-2 text-theme-text-muted hover:text-theme-primary transition-colors duration-300"
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