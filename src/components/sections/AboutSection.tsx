"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FiCode, FiServer, FiArrowRight, FiAward, FiUsers, FiTrendingUp, FiCpu } from "react-icons/fi";
import ExperienceCard from "../cards/ExperienceCard";
import { inter, secondaryFont, primaryFont } from "@/lib/fonts";
import { useProfile } from "@/hooks/useSanityQuery";
import { AboutSkeleton } from "@/components/skeletons/AboutSkeleton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  SiReact, SiNodedotjs, SiMongodb, SiTypescript, SiNextdotjs, SiTailwindcss,
  SiFramer, SiGithub, SiGit, SiSupabase, SiPostgresql, SiRedis,
  SiJavascript, SiExpress, SiNestjs, SiPython, SiPytorch,
  SiHuggingface, SiOpenai, SiJupyter, SiTensorflow, SiFastapi, SiDocker,
} from "react-icons/si";

// Sanity's techStackPreview is free-text ("Fast Api" vs "FastAPI" vs
// "fastapi" have all shown up) — normalizing both the map's keys and the
// lookup to bare lowercase alphanumerics means spacing/punctuation/casing
// variants all resolve to the same icon instead of silently missing and
// falling back to the JS icon (happened twice: FastAPI, then Docker).
const normalizeTechName = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, "");

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
  FastAPI: SiFastapi,
  Docker: SiDocker,
};

const normalizedIconMap: Record<string, React.ComponentType<{ className?: string }>> = Object.fromEntries(
  Object.entries(skillToIconMap).map(([name, icon]) => [normalizeTechName(name), icon])
);

export const AboutSection = () => {
  const { data: profile, isLoading } = useProfile();
  const headerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef, "fade-up", { deps: [profile] });
  useScrollReveal(avatarRef, "fade-up", { from: { opacity: 0, x: -24 }, deps: [profile] });
  useScrollReveal(rightColRef, "stagger-lines", { deps: [profile] });

  const getTechIcon = (techName: string) =>
    normalizedIconMap[normalizeTechName(techName)] ?? SiJavascript;

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
      </div>

      <div className="v2-container space-y-10 lg:space-y-16">

        {/* ── Section Header ─────────────────────────── */}
        <div ref={headerRef} className="text-center space-y-4">
          <div className="v2-label">
            <div className="v2-label-line" />
            <span className={`v2-label-text ${secondaryFont.className}`}>About Me</span>
            <div className="v2-label-line" />
          </div>
          <h2 className={`text-4xl sm:text-6xl uppercase leading-none text-theme-text-primary ${primaryFont.className}`}>
            The Engineer Behind the Code
          </h2>
          <div className="w-16 h-0.5 theme-gradient-primary mx-auto rounded-none" />
        </div>

        {/* ── Main Grid ──────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* LEFT: Image + Tech Stack — hidden on mobile (avatar already shown in Hero) */}
          <div ref={avatarRef} className="space-y-6 hidden lg:block">
            {/* Avatar */}
            <div className="relative group">
              {/* Glow */}
              <div className="absolute -inset-3 bg-theme-primary/10 rounded-none blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative w-full max-w-sm mx-auto">
                {/* Image */}
                <div className="relative w-full aspect-[4/5] rounded-none overflow-hidden border border-theme-border/50 shadow-2xl">
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
                          <div className={`text-sm font-bold text-theme-text-primary ${primaryFont.className}`}>
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
            {(profile.techStackPreview?.length ?? 0) > 0 && (
              <div className="v2-card p-5">
                <div className={`text-sm font-semibold text-theme-text-primary mb-4 uppercase tracking-wide ${secondaryFont.className}`}>
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-4">
                  {profile.techStackPreview!.map((techName: string) => {
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
          </div>

          {/* RIGHT: Text Content */}
          <div ref={rightColRef} className="space-y-8">
            {/* Experience Cards */}
            <div
              data-reveal-item
              className="flex gap-3 overflow-x-auto py-3 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-x-visible lg:py-0 lg:items-stretch"
            >
              {[
                { field: "AI Engineering", duration: profile.experienceAreas?.ai ?? "2+ Years", icon: <FiCpu className="w-6 h-6" />, description: "Agentic systems & RAG" },
                { field: "Full Stack", duration: profile.experienceAreas?.fullStack ?? "4+ Years", icon: <FiCode className="w-6 h-6" />, description: "Next.js & systems" },
                { field: "Backend Scale", duration: profile.experienceAreas?.backend ?? "4+ Years", icon: <FiServer className="w-6 h-6" />, description: "APIs & Pgvector" },
              ].map((card) => (
                <div key={card.field} className="flex-shrink-0 w-[68%] sm:w-[45%] snap-start lg:w-auto h-full">
                  <ExperienceCard {...card} gradient="from-theme-primary to-theme-secondary" />
                </div>
              ))}
            </div>

            {/* Bio — was two self-introductions back to back (a hardcoded
                "I'm {name}, a {role}..." sentence, then longBio restating
                the same "I'm Aman, a full-stack engineer..." beat).
                longBio is the real, CMS-owned bio; the hardcoded one was
                redundant filler, not a second data point. */}
            <div data-reveal-item className="space-y-4">
              <h3 className={`text-2xl sm:text-3xl uppercase leading-none text-theme-text-primary ${primaryFont.className}`}>
                {profile.headline ?? "What I Actually Build"}
              </h3>
              {profile.longBio ? (
                <p className={`text-theme-text-secondary leading-relaxed ${inter.className}`}>
                  {profile.longBio}
                </p>
              ) : (
                <p className={`text-theme-text-secondary leading-relaxed ${inter.className}`}>
                  I&apos;m <span className="text-theme-primary font-semibold">{profile.name}</span>
                  , a {profile.role} focused on production AI systems — RAG pipelines, document
                  extraction agents, and full-stack applications that ship reliably.
                </p>
              )}
            </div>

            {/* Key Strengths — indexed HUD-style rows instead of generic
                bullet-dot sentences, matching the ticker/menu register
                (bracketed index, mono, bordered) rather than reading like
                a plain marketing list. */}
            {(profile.keyStrengths?.length ?? 0) > 0 && (
              <div data-reveal-item className="space-y-0 border-t border-theme-border/40">
                {profile.keyStrengths!.map((strength: string, i: number) => (
                  <div
                    key={strength}
                    className="group flex items-start gap-4 py-3 border-b border-theme-border/40"
                  >
                    <span
                      className={`text-xs font-semibold text-theme-primary shrink-0 pt-0.5 ${secondaryFont.className}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`text-theme-text-secondary text-sm leading-relaxed ${inter.className}`}>
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <motion.div data-reveal-item whileTap={{ scale: 0.98 }}>
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
