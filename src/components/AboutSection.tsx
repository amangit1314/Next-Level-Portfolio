"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
  SiNestjs,
} from "react-icons/si";

// Skill to icon component mapping
const skillToIconMap: { [key: string]: any } = {
  "Next.js": SiNextdotjs,
  NestJS: SiNestjs || SiNodedotjs,
  "Node.js": SiNodedotjs,
  "React.js": SiReact,
  Javascript: SiJavascript,
  JavaScript: SiJavascript,
  Typescript: SiTypescript,
  TypeScript: SiTypescript,
  GitHub: SiGithub,
  Git: SiGit,
  "React Query": SiReact,
  Zustand: SiReact,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  SQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  "Express.js": SiExpress,
  TailwindCSS: SiTailwindcss,
  Framer: SiFramer,
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
    },
  },
};

const floatingVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
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
    const normalizedSkill = techName.trim();
    return skillToIconMap[normalizedSkill] || SiJavascript;
  };

  if (!profile) return null;

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden px-4 md:px-8 theme-gradient-primary/80"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-theme-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-theme-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-theme-accent/10 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
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

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center px-4 sm:px-0">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative group perspective-1000">
                <motion.div
                  className="relative w-full max-w-md mx-auto"
                  whileHover={{ rotateY: 5, rotateX: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Outer Glow */}
                  <div className="absolute -inset-4 sm:-inset-6 theme-gradient-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700" />
                  {/* Main Image Container */}
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-theme-bg-secondary to-theme-bg-tertiary p-2 shadow-2xl mx-auto">
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-theme-border/50">
                      <Image
                        src={
                          profile.profileImage?.asset?.url ||
                          "/images/aman_avatar.webp"
                        }
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

                      {/* Stats Overlay */}
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 grid grid-cols-3 gap-2 sm:gap-3">
                        {[
                          {
                            icon: FiAward,
                            value: profile.stats?.experienceYears,
                            label: "Years Exp",
                          },
                          {
                            icon: FiUsers,
                            value: profile.stats?.projectsCount,
                            label: "Projects",
                          },
                          {
                            icon: FiTrendingUp,
                            value: profile.stats?.clientSatisfaction,
                            label: "Success",
                          },
                        ].map((stat, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="bg-theme-bg-secondary/90 backdrop-blur-md rounded-xl p-2 sm:p-3 text-center border border-theme-border/50 hover:border-theme-primary/50 transition-all duration-300"
                          >
                            <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-theme-primary mx-auto mb-1 sm:mb-2" />
                            <div
                              className={`text-xs sm:text-sm font-bold text-theme-text-primary ${poppins.className}`}
                            >
                              {stat.value}
                            </div>
                            <div className="text-[10px] sm:text-xs text-theme-text-muted font-medium">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Tech Stack Preview */}
                <motion.div
                  className="p-4 mt-8 sm:p-6 bg-theme-bg-secondary/40 backdrop-blur-md rounded-2xl border border-theme-border/50 hover:border-theme-primary/30 transition-all duration-500 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span
                      className={`${poppins.className} text-base sm:text-lg font-semibold text-theme-text-primary`}
                    >
                      Tech Stack
                    </span>
                    <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mb-2 text-theme-primary group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-4 sm:space-x-6 flex-wrap gap-3 sm:gap-0">
                    {profile.techStackPreview?.map(
                      (techName: string, index: number) => {
                        const Icon = getTechIcon(techName);
                        return (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.3, y: -5 }}
                            className="flex flex-col items-center space-y-1 group/tech"
                          >
                            <div className="text-theme-text-muted opacity-80 group-hover/tech:opacity-100 transition-all duration-300">
                              <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                            </div>
                            <span className="text-[10px] sm:text-xs text-theme-text-muted font-medium opacity-0 group-hover/tech:opacity-100 group-hover:mb-4 transition-opacity duration-300">
                              {techName}
                            </span>
                          </motion.div>
                        );
                      }
                    )}
                  </div>
                </motion.div>

                {/* Floating Tech Icons */}
                <motion.div
                  className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 theme-gradient-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-theme-primary/25"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <SiReact className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25"
                  variants={floatingVariants}
                  animate="float"
                >
                  <SiNodedotjs className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 -right-6 sm:-right-10 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-500 to-zinc-950 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/25"
                  animate={{
                    y: [-15, 15, -15],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                >
                  <SiNextdotjs className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-8 sm:space-y-10 px-2 sm:px-0"
            >
              {/* Experience Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <ExperienceCard
                  field="Full Stack"
                  duration={profile?.experienceAreas?.fullStack || "3+ Years"}
                  icon={<FiCode className="w-6 h-6 sm:w-7 sm:h-7" />}
                  gradient="from-theme-primary to-theme-secondary"
                  description="End-to-end solutions"
                />
                <ExperienceCard
                  field="Backend"
                  duration={profile?.experienceAreas?.backend || "3+ Years"}
                  icon={<FiServer className="w-6 h-6 sm:w-7 sm:h-7" />}
                  gradient="from-theme-primary to-theme-secondary"
                  description="Robust APIs & Systems"
                />
                <ExperienceCard
                  field="Mobile"
                  duration={profile?.experienceAreas?.mobile || "2+ Years"}
                  icon={<FiSmartphone className="w-6 h-6 sm:w-7 sm:h-7" />}
                  gradient="from-theme-primary to-theme-secondary"
                  description="Cross-platform apps"
                />
              </div>

              {/* Description */}
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <h3
                    className={`text-2xl sm:text-3xl lg:text-4xl font-black text-theme-text-primary ${poppins.className}`}
                  >
                    Crafting Digital{" "}
                    <span className="theme-text-gradient">Excellence</span>
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <p
                      className={`text-theme-text-secondary/90 leading-relaxed text-base sm:text-lg ${inter.className}`}
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
                      className={`text-theme-text-secondary/90 leading-relaxed text-base sm:text-lg ${inter.className}`}
                    >
                      {profile.longBio}
                    </p>
                  </div>
                </div>

                {/* Key Strengths */}
                <div className="grid grid-cols-1  gap-3 sm:gap-4">
                  {profile.keyStrengths?.map(
                    (strength: string, index: number) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-2 sm:space-x-3 group"
                      // whileHover={{ x: 5 }}
                      // transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className="w-2 h-2 sm:w-3 sm:h-3 theme-gradient-primary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        <span
                          className={`text-theme-text-secondary font-medium text-sm sm:text-base ${inter.className} group-hover:text-theme-text-primary transition-colors duration-300`}
                        >
                          {strength}
                        </span>
                      </motion.div>
                    )
                  )}
                </div>

                {/* CTA */}
                <motion.div
                  // whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="pt-4"
                >
                  <Link
                    href="#contact"
                    className="group relative inline-flex items-center space-x-3 sm:space-x-4 px-6 sm:px-8 py-3 sm:py-4 theme-gradient-accent rounded-2xl font-bold text-white shadow-2xl hover:shadow-theme-primary/30 transition-all duration-500 overflow-hidden text-base sm:text-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className={`relative z-10 ${poppins.className}`}>
                      Let&apos;s Build Something Amazing
                    </span>
                    <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
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
