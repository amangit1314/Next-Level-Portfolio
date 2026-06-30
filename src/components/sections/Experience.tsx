"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import { inter, unbounded } from "@/lib/fonts";
import { useExperiences } from "@/hooks/useSanityQuery";
import type { ExperiencesQueryResult } from "../../../sanity.types";

type ExperienceItem = ExperiencesQueryResult[number];

const ExperienceItem = ({ experience, index }: { experience: ExperienceItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 280, damping: 28 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 280, damping: 28 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="relative pl-10 sm:pl-14"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 220, delay: index * 0.12 + 0.1 }}
        className="absolute left-0 top-6 w-3.5 h-3.5 rounded-full bg-theme-primary border-[3px] border-theme-bg-primary z-10"
        style={{ boxShadow: "0 0 12px var(--theme-primary)" }}
      />

      {/* 3D card */}
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" } as React.CSSProperties}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setHovered(true)}
        className="group relative rounded-2xl border border-theme-border/60 bg-theme-bg-secondary/80 backdrop-blur-md overflow-hidden cursor-default transition-[border-color,box-shadow] duration-300 hover:border-theme-primary/40 shadow-sm shadow-black/[0.06]"
      >
        {/* Cursor glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(300px circle at ${glowPos.x}% ${glowPos.y}%, color-mix(in srgb, var(--theme-primary) 10%, transparent), transparent 70%)`,
          }}
        />

        {/* Top shimmer */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 p-5 sm:p-8 lg:p-9 space-y-4 sm:space-y-5">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="space-y-1.5">
              <h3
                className={`text-xl lg:text-2xl font-black theme-text-gradient bg-clip-text text-transparent ${unbounded.className}`}
              >
                {experience.role}
              </h3>
              <Link
                href={experience.companyLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-theme-text-secondary hover:text-theme-primary transition-colors duration-200 text-sm font-semibold ${unbounded.className}`}
              >
                {experience.company}
                <FiExternalLink className="w-3.5 h-3.5 shrink-0" />
              </Link>
            </div>

            {experience.year && (
              <span
                className={`shrink-0 self-start px-3 py-1.5 rounded-lg border border-theme-primary/25 bg-theme-primary/8 text-xs font-semibold text-theme-primary ${unbounded.className}`}
              >
                {experience.year}
              </span>
            )}
          </div>

          {/* Description */}
          <p className={`text-theme-text-secondary/90 leading-relaxed text-[15px] ${inter.className}`}>
            {experience.description}
          </p>

          {/* Tech chips */}
          {!!experience.technologies?.length && (
            <div className="flex flex-wrap gap-2 pt-1">
              {experience.technologies!.map((tech: string, i: number) => (
                <span
                  key={i}
                  className={`px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-semibold rounded-md sm:rounded-lg border border-theme-border/60 bg-theme-bg-tertiary/80 text-theme-text-muted hover:border-theme-primary/40 hover:text-theme-primary transition-all duration-200 cursor-default ${unbounded.className}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const { data: experiences = [] } = useExperiences();

  return (
    <section id="experience" className="v2-section bg-theme-bg-secondary/30 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="v2-grid-bg absolute inset-0" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-theme-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-theme-secondary/4 rounded-full blur-[100px]" />
      </div>

      <div className="v2-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 space-y-4 text-center"
        >
          <div className="v2-label">
            <div className="v2-label-line" />
            <span className={`v2-label-text ${unbounded.className}`}>Career</span>
            <div className="v2-label-line" />
          </div>
          <h2 className={`text-4xl sm:text-5xl font-black text-theme-text-primary ${unbounded.className}`}>
            Professional Experience
          </h2>
          <div className="w-16 h-0.5 theme-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[6px] sm:left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-theme-primary via-theme-primary/30 to-transparent origin-top"
          />

          <div className="space-y-7">
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp._id ?? index} experience={exp} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="relative group">
            {/* Outer glow on hover */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-theme-primary/40 via-theme-secondary/30 to-theme-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            {/* Card */}
            <div className="relative rounded-2xl border border-theme-border/60 bg-theme-bg-secondary/80 backdrop-blur-md overflow-hidden shadow-sm shadow-black/[0.06] transition-[border-color] duration-300 group-hover:border-theme-primary/40">
              {/* Persistent tinted fill */}
              <div className="absolute inset-0 bg-gradient-to-br from-theme-primary/6 via-transparent to-theme-secondary/4 pointer-events-none" />

              {/* Top shimmer */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-6 sm:p-8 lg:p-10">
                {/* Text */}
                <div className="space-y-2">
                  <h3 className={`text-2xl lg:text-3xl font-black text-theme-text-primary leading-tight ${unbounded.className}`}>
                    Ready to Build Something{" "}
                    <span className="theme-text-gradient bg-clip-text text-transparent">Amazing?</span>
                  </h3>
                  <p className={`text-theme-text-muted text-[14px] max-w-sm ${inter.className}`}>
                    Let&apos;s talk about your next project — I&apos;m open to full-time roles and freelance work.
                  </p>
                </div>

                {/* Action */}
                <motion.div className="shrink-0 w-full sm:w-auto" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="#contact"
                    className={`group/cta inline-flex items-center justify-center gap-3 px-7 py-4 theme-gradient-accent rounded-xl font-bold text-white shadow-lg hover:shadow-theme-primary/25 transition-all duration-300 overflow-hidden relative w-full sm:w-auto ${unbounded.className}`}
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                      <div className="absolute top-0 -left-10 w-7 h-full bg-white/20 skew-x-12 transition-all duration-700 ease-out group-hover/cta:left-[120%]" />
                    </div>
                    <span className="relative z-10 text-sm whitespace-nowrap">Let&apos;s Work Together</span>
                    <FiArrowRight className="w-4 h-4 relative z-10 group-hover/cta:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
