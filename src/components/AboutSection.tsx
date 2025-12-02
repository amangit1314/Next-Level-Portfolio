"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";
import {
  FiCode,
  FiServer,
  FiSmartphone,
  FiArrowRight,
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiChevronRight,
} from "react-icons/fi";
import ExperienceCard from "./ExperienceCard";
import { inter, poppins } from "@/lib/fonts";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { profileQuery } from "@/sanity/lib/queries";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGithub,
  SiGit,
  SiSupabase,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiExpress,
} from "react-icons/si";
// Add NestJS icon if available, or use a fallback
import { SiNestjs } from "react-icons/si"; // Check if this exists

// Skill to icon component mapping
const skillToIconMap: { [key: string]: any } = {
  "Next.js": SiNextdotjs,
  "NestJS": SiNestjs || SiNodedotjs, // Fallback to Node.js if NestJS not available
  "Node.js": SiNodedotjs,
  "React.js": SiReact,
  "Javascript": SiJavascript,
  "JavaScript": SiJavascript,
  "Typescript": SiTypescript,
  "TypeScript": SiTypescript,
  "GitHub": SiGithub,
  "Git": SiGit,
  "React Query": SiReact, // Or find/use specific tanstack query icon
  "Zustand": SiReact, // State management fallback to React
  "Supabase": SiSupabase,
  "PostgreSQL": SiPostgresql,
  "SQL": SiPostgresql, // Generic SQL fallback
  "MongoDB": SiMongodb,
  "Redis": SiRedis,
  "Express.js": SiExpress,
  // Add more as needed
  "TailwindCSS": SiTailwindcss,
  "Framer": SiFramer,
};

// Enhanced Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      // ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const floatingVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      // ease: "easeInOut",
    },
  },
};

export const AboutSection = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await client.fetch(profileQuery);
      setProfile(data);
    };
    fetchProfile();
  }, []);

  const getTechIcon = (techName: string) => {
    // Normalize skill name (trim, handle common variations)
    const normalizedSkill = techName.trim();

    // Return mapped icon or fallback
    return skillToIconMap[normalizedSkill] || SiJavascript;
  };

  if (!profile) return null;

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden px-4 md:px-8 bg-gradient-to-br from-theme-bg-primary via-transparent to-theme-primary-dark/10"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-theme-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-theme-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-theme-accent/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {" "}
        {/* FIXED: Added sm:px-6 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {/* Enhanced Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6 px-4"
          >
            {" "}
            {/* FIXED: Added px-4 */}
            <motion.div
              className="flex items-center justify-center space-x-3 mb-6"
              variants={floatingVariants}
              animate="float"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-theme-primary to-transparent" />
              <span
                className={`text-sm font-semibold text-theme-primary/90 tracking-widest uppercase ${poppins.className}`}
              >
                Discover My Journey
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-theme-secondary to-transparent" />
            </motion.div>
            <h2
              className={`${poppins.className} text-4xl sm:text-5xl lg:text-7xl font-black theme-text-gradient bg-clip-text text-transparent leading-tight px-2`}
            >
              About Me
            </h2>
            <div className="w-24 h-1 theme-gradient-primary mx-auto rounded-full" />
          </motion.div>

          {/* Enhanced Main Content - FIXED RIGHT SPACING */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center px-4 sm:px-0">
            {" "}
            {/* FIXED: Added px-4 on mobile */}
            {/* Enhanced Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative group perspective-1000">
                {/* 3D Floating Effect */}
                <motion.div
                  className="relative w-full max-w-md mx-auto"
                  whileHover={{ rotateY: 5, rotateX: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Outer Glow */}
                  <div className="absolute -inset-4 sm:-inset-6 theme-gradient-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700" />{" "}
                  {/* FIXED: Responsive inset */}
                  {/* Main Image Container */}
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-theme-bg-secondary to-theme-bg-tertiary p-2 shadow-2xl mx-auto">
                    {" "}
                    {/* FIXED: Added mx-auto */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-theme-border/50">
                      <Image
                        src={profile.profileImage?.asset?.url || "/images/aman_avatar.webp"}
                        alt={`${profile.name} - ${profile.role}`}
                        fill
                        className="object-cover object-top transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                        quality={100}
                        priority
                      />

                      {/* Advanced Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-theme-bg-primary/80 via-theme-bg-primary/20 to-transparent" />

                      {/* Animated Scan Line */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-theme-primary/10 to-transparent"
                        initial={{ y: "-100%" }}
                        whileHover={{ y: "100%" }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                      />

                      {/* (todo: make them dynamic) Enhanced Stats Overlay */}
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 grid grid-cols-3 gap-2 sm:gap-3">
                        {" "}
                        {/* FIXED: Responsive spacing */}
                        {[
                          { icon: FiAward, value: profile.stats?.experienceYears, label: "Years Exp" },
                          { icon: FiUsers, value: profile.stats?.projectsCount, label: "Projects" },
                          {
                            icon: FiTrendingUp,
                            value: profile.stats?.clientSatisfaction,
                            label: "Success",
                          },
                        ].map((stat, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="bg-theme-bg-secondary/90 backdrop-blur-md rounded-xl p-2 sm:p-3 text-center border border-theme-border/50 hover:border-theme-primary/50 transition-all duration-300" // FIXED: Responsive padding
                          >
                            <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-theme-primary mx-auto mb-1 sm:mb-2" />{" "}
                            {/* FIXED: Responsive icon size */}
                            <div
                              className={`text-xs sm:text-sm font-bold text-theme-text-primary ${poppins.className}`} // FIXED: Responsive text
                            >
                              {stat.value}
                            </div>
                            <div className="text-[10px] sm:text-xs text-theme-text-muted font-medium">
                              {" "}
                              {/* FIXED: Responsive text */}
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced Floating Tech Icons - FIXED: Responsive positioning */}
                <motion.div
                  className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 theme-gradient-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-theme-primary/25" // FIXED: Responsive size and position
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <SiReact className="w-6 h-6 sm:w-8 sm:h-8 text-white" />{" "}
                  {/* FIXED: Responsive icon */}
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25" // FIXED: Responsive size and position
                  variants={floatingVariants}
                  animate="float"
                >
                  <SiNodedotjs className="w-5 h-5 sm:w-7 sm:h-7 text-white" />{" "}
                  {/* FIXED: Responsive icon */}
                </motion.div>

                {/* New Floating Icon - FIXED: Responsive positioning */}
                <motion.div
                  className="absolute top-1/2 -right-6 sm:-right-10 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/25" // FIXED: Responsive size and position
                  animate={{
                    y: [-15, 15, -15],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    // ease: "easeInOut",
                  }}
                >
                  <SiFramer className="w-4 h-4 sm:w-6 sm:h-6 text-white" />{" "}
                  {/* FIXED: Responsive icon */}
                </motion.div>
              </div>
            </motion.div>
            {/* Enhanced Content - FIXED: Right spacing on mobile */}
            <motion.div
              variants={itemVariants}
              className="space-y-8 sm:space-y-10 px-2 sm:px-0"
            >
              {/* Enhanced Experience Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <ExperienceCard
                  field="Full Stack"
                  duration={profile?.experienceAreas?.fullStack || "3+ Years"}
                  icon={<FiCode className="w-6 h-6 sm:w-7 sm:h-7" />}
                  gradient="from-purple-500 to-blue-500"
                  description="End-to-end solutions"
                />
                <ExperienceCard
                  field="Backend"
                  duration={profile?.experienceAreas?.backend || "3+ Years"}
                  icon={<FiServer className="w-6 h-6 sm:w-7 sm:h-7" />}
                  gradient="from-blue-500 to-cyan-500"
                  description="Robust APIs & Systems"
                />
                <ExperienceCard
                  field="Mobile"
                  duration={profile?.experienceAreas?.mobile || "2+ Years"}
                  icon={<FiSmartphone className="w-6 h-6 sm:w-7 sm:h-7" />}
                  gradient="from-cyan-500 to-green-500"
                  description="Cross-platform apps"
                />
              </div>

              {/* Enhanced Description */}
              <div className="space-y-6 sm:space-y-8">
                {" "}
                {/* FIXED: Responsive spacing */}
                <div className="space-y-4 sm:space-y-6">
                  {" "}
                  {/* FIXED: Responsive spacing */}
                  <h3
                    className={`text-2xl sm:text-3xl lg:text-4xl font-black text-theme-text-primary ${poppins.className}`} // FIXED: Responsive text
                  >
                    Crafting Digital{" "}
                    <span className="theme-text-gradient">
                      Excellence
                    </span>
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {" "}
                    {/* FIXED: Responsive spacing */}
                    <p
                      className={`text-theme-text-secondary/90 leading-relaxed text-base sm:text-lg ${inter.className}`} // FIXED: Responsive text
                    >
                      I&apos;m{" "}
                      <span
                        className={`${poppins.className} text-theme-primary font-semibold`}
                      >
                        {profile.name}
                      </span>
                      , a passionate {profile.role} with{" "}
                      <span
                        className={`${poppins.className} text-theme-secondary font-semibold`}
                      >
                        {profile.stats?.experienceYears}
                      </span>{" "}
                      of experience building scalable web applications and
                      cutting-edge digital solutions.
                    </p>
                    <p
                      className={`text-theme-text-secondary/90 leading-relaxed text-base sm:text-lg ${inter.className}`} // FIXED: Responsive text
                    >
                      {profile.longBio}
                    </p>
                  </div>
                </div>
                {/* Enhanced Key Strengths */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {" "}
                  {/* FIXED: Responsive gap */}
                  {profile.keyStrengths?.map((strength: string, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 sm:space-x-3 group" // FIXED: Responsive spacing
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="w-2 h-2 sm:w-3 sm:h-3 theme-gradient-primary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />{" "}
                      {/* FIXED: Responsive dot size */}
                      <span
                        className={`text-theme-text-secondary font-medium text-sm sm:text-base ${inter.className} group-hover:text-theme-text-primary transition-colors duration-300`} // FIXED: Responsive text
                      >
                        {strength}
                      </span>
                    </motion.div>
                  ))}
                </div>
                {/* Enhanced Tech Stack Preview */}
                <motion.div
                  className="p-4 sm:p-6 bg-theme-bg-secondary/40 backdrop-blur-md rounded-2xl border border-theme-border/50 hover:border-theme-primary/30 transition-all duration-500 group" // FIXED: Responsive padding
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    {" "}
                    {/* FIXED: Responsive spacing */}
                    <span
                      className={`${poppins.className} text-base sm:text-lg font-semibold text-theme-text-primary`} // FIXED: Responsive text
                    >
                      Tech Stack
                    </span>
                    <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-theme-primary group-hover:translate-x-1 transition-transform duration-300" />{" "}
                    {/* FIXED: Responsive icon */}
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-4 sm:space-x-6 flex-wrap gap-3 sm:gap-0">
                    {" "}
                    {/* FIXED: Responsive layout */}
                    {profile.techStackPreview?.map((techName: string, index: number) => {
                      const Icon = getTechIcon(techName);
                      return (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.3, y: -5 }}
                          className="flex flex-col items-center space-y-1 sm:space-y-2 group/tech" // FIXED: Responsive spacing
                        >
                          <div
                            className={`text-white opacity-80 group-hover/tech:opacity-100 transition-all duration-300`}
                          >
                            <Icon className="w-5 h-5 sm:w-7 sm:h-7" />{" "}
                            {/* FIXED: Responsive icon */}
                          </div>
                          <span className="text-[10px] sm:text-xs text-theme-text-muted font-medium opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300">
                            {" "}
                            {/* FIXED: Responsive text */}
                            {techName}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
                {/* Enhanced CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="pt-4"
                >
                  <Link
                    href="#contact"
                    className="group relative inline-flex items-center space-x-3 sm:space-x-4 px-6 sm:px-8 py-3 sm:py-4 theme-gradient-accent rounded-2xl font-bold text-white shadow-2xl hover:shadow-theme-primary/30 transition-all duration-500 overflow-hidden text-base sm:text-lg" // FIXED: Responsive sizing
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className={`relative z-10 ${poppins.className}`}>
                      Let&apos;s Build Something Amazing
                    </span>
                    <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />{" "}
                    {/* FIXED: Responsive icon */}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
