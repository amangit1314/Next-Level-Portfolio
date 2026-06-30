"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiCode, FiServer, FiArrowRight, FiAward, FiUsers, FiTrendingUp, FiCpu } from "react-icons/fi";
import ExperienceCard from "../cards/ExperienceCard";
import { inter, unbounded, jetbrainsMono } from "@/lib/fonts";
import { useProfile } from "@/contexts/ProfileContext";
import { AboutSkeleton } from "@/components/skeletons/AboutSkeleton";
import {
  SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiNextdotjs, SiTailwindcss,
  SiFramer, SiGithub, SiGit, SiSupabase, SiPostgresql, SiRedis,
  SiJavascript, SiExpress, SiNestjs, SiPython, SiPytorch,
  SiHuggingface, SiOpenai, SiJupyter, SiTensorflow,
} from "react-icons/si";

const skillToIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Next.js": SiNextdotjs,
  NestJS: SiNestjs,
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
  Python: SiPython,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  HuggingFace: SiHuggingface,
  OpenAI: SiOpenai,
  LangChain: SiOpenai,
  Jupyter: SiJupyter,
};

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.07 },
  }),
};

export const AboutSection = () => {
  const { profile, isLoading } = useProfile();

  const getTechIcon = (techName: string) =>
    skillToIconMap[techName.trim()] ?? SiJavascript;

  if (isLoading || !profile) return <AboutSkeleton />;

  const imageStats = [
    { icon: FiAward, value: profile.stats?.experienceYears, label: "Years" },
    { icon: FiUsers, value: profile.stats?.projectsCount, label: "Projects" },
    { icon: FiTrendingUp, value: profile.stats?.clientSatisfaction, label: "Success" },
  ].filter((s) => s.value);

  return (
    <section id="about" className="v2-section bg-theme-bg-primary">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="v2-grid-bg absolute inset-0" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-theme-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="v2-container space-y-10 lg:space-y-16">

        {/* ── Section Header ─────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={reveal}
          className="text-center space-y-4"
        >
          <div className="v2-label">
            <div className="v2-label-line" />
            <span className={`v2-label-text ${jetbrainsMono.className}`}>About Me</span>
            <div className="v2-label-line" />
          </div>
          <h2 className={`text-3xl sm:text-5xl font-black text-theme-text-primary ${unbounded.className}`}>
            The Engineer Behind the Code
          </h2>
          <div className="w-16 h-0.5 theme-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* ── Main Grid ──────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* LEFT: Image + Tech Stack — hidden on mobile (avatar already shown in Hero) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={reveal}
            className="space-y-6 hidden lg:block"
          >
            {/* Avatar */}
            <div className="relative group">
              {/* Glow */}
              <div className="absolute -inset-3 bg-theme-primary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative w-full max-w-sm mx-auto">
                {/* Image */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-theme-border/50 shadow-2xl">
                  <Image
                    src={profile.profileImage?.asset?.url || "/images/aman_avatar.webp"}
                    alt={`${profile.name} — ${profile.role}`}
                    fill
                    sizes="(max-width: 1024px) 90vw, 384px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    quality={95}
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-theme-bg-primary/70 via-theme-bg-primary/10 to-transparent" />

                  {/* Stats overlay */}
                  {imageStats.length > 0 && (
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      {imageStats.map((stat) => (
                        <div
                          key={stat.label}
                          className="flex-1 v2-card p-3 text-center bg-theme-bg-secondary/80"
                        >
                          <stat.icon className="w-3.5 h-3.5 text-theme-primary mx-auto mb-1" />
                          <div className={`text-sm font-bold text-theme-text-primary ${unbounded.className}`}>
                            {stat.value}
                          </div>
                          <div className="text-[10px] text-theme-text-muted">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            {profile.techStackPreview?.length > 0 && (
              <div className="v2-card p-5">
                <div className={`text-sm font-semibold text-theme-text-primary mb-4 ${unbounded.className}`}>
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-4">
                  {profile.techStackPreview.map((techName: string) => {
                    const Icon = getTechIcon(techName);
                    return (
                      <motion.div
                        key={techName}
                        whileHover={{ scale: 1.2, y: -3 }}
                        className="flex flex-col items-center gap-1.5 group/tech"
                        title={techName}
                      >
                        <Icon className="w-6 h-6 text-theme-text-muted group-hover/tech:text-theme-primary transition-colors duration-300" />
                        <span className={`text-[9px] text-theme-text-muted opacity-0 group-hover/tech:opacity-100 transition-opacity ${inter.className}`}>
                          {techName}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>

          {/* RIGHT: Text Content */}
          <div className="space-y-8">
            {/* Experience Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex gap-3 overflow-x-auto py-3 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-x-visible lg:py-0 lg:items-stretch"
            >
              {[
                { field: "AI Engineering", duration: profile.experienceAreas?.ai ?? "2+ Years", icon: <FiCpu className="w-6 h-6" />, description: "Agentic systems & RAG" },
                { field: "Full Stack", duration: profile.experienceAreas?.fullStack ?? "4+ Years", icon: <FiCode className="w-6 h-6" />, description: "Next.js & systems" },
                { field: "Backend Scale", duration: profile.experienceAreas?.backend ?? "4+ Years", icon: <FiServer className="w-6 h-6" />, description: "APIs & Pgvector" },
              ].map((card, i) => (
                <motion.div key={card.field} custom={i} variants={reveal} className="flex-shrink-0 w-[68%] sm:w-[45%] snap-start lg:w-auto h-full">
                  <ExperienceCard {...card} gradient="from-theme-primary to-theme-secondary" />
                </motion.div>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              custom={1}
              className="space-y-4"
            >
              <h3 className={`text-2xl sm:text-3xl font-black text-theme-text-primary ${unbounded.className}`}>
                {profile.headline ?? "What I Actually Build"}
              </h3>
              <p className={`text-theme-text-secondary leading-relaxed ${inter.className}`}>
                I&apos;m{" "}
                <span className="text-theme-primary font-semibold">{profile.name}</span>
                , a {profile.role} focused on production AI systems — RAG pipelines, document
                extraction agents, and full-stack applications that ship reliably.
              </p>
              {profile.longBio && (
                <p className={`hidden sm:block text-theme-text-secondary/80 leading-relaxed ${inter.className}`}>
                  {profile.longBio}
                </p>
              )}
            </motion.div>

            {/* Key Strengths */}
            {profile.keyStrengths?.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-2.5"
              >
                {profile.keyStrengths.map((strength: string, i: number) => (
                  <motion.div
                    key={strength}
                    custom={i}
                    variants={reveal}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-theme-primary mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                    <span className={`text-theme-text-secondary text-sm leading-relaxed ${inter.className}`}>
                      {strength}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* CTA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              custom={2}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-3 v2-btn-primary w-full sm:w-auto"
              >
                Let&apos;s Work Together
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
