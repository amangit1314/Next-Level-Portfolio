"use client";

import { inter, anton, jetbrainsMono } from "@/lib/fonts";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiArrowDown, FiExternalLink } from "react-icons/fi";
import { useProfile } from "@/hooks/useSanityQuery";
import { HeroSkeleton } from "@/components/skeletons/HeroSkeleton";
import * as Icons from "react-icons/fi";
import { useProjectsCount, useAiProjectsCount } from "@/hooks/useSanityQuery";
import { ParticlePortrait } from "@/components/three/ParticlePortrait";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
});

const HeroSection = () => {
  const { data: profile, isLoading } = useProfile();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  // projectsCount and aiProjectsCount come from the shared useSanityQuery
  // hooks — single source of truth also used by Skills, so this number
  // can't drift from what Skills/Projects show (same drift bug as the
  // years-of-experience/tech-count fixes, now happened a 3rd time via a
  // stale hardcoded PROJECTS array in Skills.tsx). aiProjectsCount also
  // replaces the old "Tokens orchestrated" stat — an unverifiable
  // self-reported number — with something concrete and checkable.
  const { data: liveProjectsCount } = useProjectsCount();
  const { data: liveAiProjectsCount } = useAiProjectsCount();

  useEffect(() => {
    if (!profile?.typewriterTexts?.length) return;
    const currentText = profile.typewriterTexts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(() => setDisplayedText(currentText.slice(0, displayedText.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2200);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => setDisplayedText(displayedText.slice(0, -1)), 40);
      } else {
        /* eslint-disable react-hooks/set-state-in-effect -- this effect is
           the typewriter's own sequencer (advance to the next phrase once
           backspacing hits zero length), not state synced from an external
           source. Restructuring into a reducer/interval to satisfy the rule
           risks changing the animation's actual behavior with no way to
           visually verify the result this session — left as a documented,
           deliberate exception rather than a blind refactor. */
        setCurrentTextIndex((prev) => (prev + 1) % (profile.typewriterTexts?.length ?? 1));
        setIsTyping(true);
        /* eslint-enable react-hooks/set-state-in-effect */
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentTextIndex, profile]);

  const getIcon = (iconName: string) =>
    (Icons as Record<string, React.ComponentType<{ className?: string }>>)[iconName] ?? Icons.FiLink;

  const handleScrollToProjects = () =>
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });

  if (isLoading || !profile) return <HeroSkeleton />;

  const stats = [
    { value: profile.stats?.experienceYears, label: "Years Exp" },
    { value: liveProjectsCount ? `${liveProjectsCount}+` : profile.stats?.projectsCount, label: "Projects" },
    { value: liveAiProjectsCount ? `${liveAiProjectsCount}+` : undefined, label: "AI Systems" },
    { value: profile.stats?.agentsDeployed, label: "Agents" },
  ].filter((s) => s.value);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-theme-bg-primary"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="v2-grid-bg absolute inset-0" />
      </div>

      <div className="v2-container py-14 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">

          {/* ── Left: Text ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div {...fadeUp(0.05)}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-none bg-theme-bg-secondary border border-theme-border/50">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className={`text-xs font-medium text-theme-text-secondary ${inter.className}`}>
                  Open to full-time opportunities
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div {...fadeUp(0.1)}>
              <h1 className={`uppercase leading-[0.95] tracking-tight ${anton.className}`}>
                <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-theme-text-primary">
                  {profile.name?.split(" ")[0]}
                </span>
                <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-theme-text-primary">
                  {profile.name?.split(" ")[1]}
                </span>
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div {...fadeUp(0.15)}>
              <p className={`text-lg sm:text-xl text-theme-text-muted ${inter.className}`}>
                <span className="text-theme-primary font-medium">{displayedText}</span>
                <span className="animate-pulse text-theme-primary">|</span>
              </p>
            </motion.div>

            {/* Bio */}
            <motion.div {...fadeUp(0.2)}>
              <p className={`text-theme-text-secondary leading-relaxed text-base sm:text-lg max-w-lg mx-auto lg:mx-0 ${inter.className}`}>
                {profile.shortBio}
              </p>
            </motion.div>

            {/* Stats row */}
            {stats.length > 0 && (
              <motion.div {...fadeUp(0.25)} className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 flex-wrap">
                {stats.map((stat, i) => (
                  <React.Fragment key={stat.label}>
                    <div>
                      <div className={`text-2xl uppercase leading-none text-theme-text-primary ${anton.className}`}>
                        {stat.value}
                      </div>
                      <div className={`text-xs text-theme-text-muted mt-0.5 ${inter.className}`}>
                        {stat.label}
                      </div>
                    </div>
                    {i < stats.length - 1 && (
                      <div className="v2-stat-divider hidden sm:block" />
                    )}
                  </React.Fragment>
                ))}
              </motion.div>
            )}

            {/* CTAs */}
            <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <motion.button
                onClick={handleScrollToProjects}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="v2-btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                View My Work
                <FiExternalLink className="w-4 h-4" />
              </motion.button>
              {profile.resume?.asset?.url && (
                <motion.a
                  href={profile.resume.asset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="v2-btn-ghost w-full sm:w-auto text-center"
                >
                  Download CV
                </motion.a>
              )}
            </motion.div>

            {/* Social links */}
            {(profile.socialLinks?.length ?? 0) > 0 && (
              <motion.div {...fadeUp(0.35)} className="flex items-center justify-center lg:justify-start gap-2.5">
                {profile.socialLinks!.map((social: NonNullable<typeof profile.socialLinks>[number]) => {
                  const Icon = getIcon(social.iconName ?? "");
                  return (
                    <motion.a
                      key={social.platform ?? social.url}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2.5 bg-theme-bg-secondary border border-theme-border/50 hover:border-theme-primary/50 rounded-none transition-all duration-300 group"
                    >
                      <Icon className="w-4 h-4 text-theme-text-muted group-hover:text-theme-primary transition-colors" />
                    </motion.a>
                  );
                })}
              </motion.div>
            )}
          </motion.div>

          {/* ── Right: Avatar ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.15 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow behind avatar */}
              <div className="absolute inset-6 bg-theme-primary/20 rounded-none blur-3xl" />

              {/* Avatar frame */}
              <div className="relative w-44 h-44 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] rounded-none overflow-hidden border border-theme-border/60 shadow-2xl">
                <Image
                  src={profile.profileImage?.asset?.url || "/images/aman_avatar.webp"}
                  alt={`${profile.name} — ${profile.role}`}
                  fill
                  sizes="(max-width: 640px) 176px, (max-width: 1024px) 256px, 400px"
                  className="object-cover object-top"
                  quality={95}
                  priority
                />
                {/* Dot-matrix particle portrait, layered over the plain photo
                    above — renders nothing (photo stays visible) on no-WebGL,
                    prefers-reduced-motion, or a CORS-tainted canvas read. */}
                <ParticlePortrait imageUrl={profile.profileImage?.asset?.url || "/images/aman_avatar.webp"} />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-theme-bg-primary/40 to-transparent" />
              </div>

              {/* Role badge — bottom right */}
              <div className="absolute -bottom-3 -right-3 px-4 py-2.5 v2-card shadow-lg">
                <div className={`text-xs font-semibold text-theme-text-primary uppercase tracking-wide ${jetbrainsMono.className}`}>
                  {profile.role}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={handleScrollToProjects}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" as const }}
          className={`flex flex-col items-center gap-1.5 text-theme-text-muted hover:text-theme-primary transition-colors ${inter.className}`}
        >
          <span className="text-xs tracking-wider">Explore</span>
          <FiArrowDown className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
