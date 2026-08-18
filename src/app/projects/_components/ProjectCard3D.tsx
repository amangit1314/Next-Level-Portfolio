"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub, FiBookOpen, FiArrowUpRight } from "react-icons/fi";
import { unbounded, inter } from "@/lib/fonts";

interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: { asset: { url: string } };
  link?: string;
  code?: string;
  isAI?: boolean;
  blogSlug?: string;
}

export default function ProjectCard3D({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
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
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.45, ease: "easeOut" as const }}
      className="relative rounded-2xl border border-theme-border/50 bg-theme-bg-secondary/40 backdrop-blur-xl overflow-hidden group cursor-default"
    >
      {/* Cursor-tracking glow */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(260px circle at ${glowPos.x}% ${glowPos.y}%, color-mix(in srgb, var(--theme-primary) 12%, transparent), transparent 70%)`,
        }}
      />

      {/* Top edge shimmer on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        {project.image?.asset?.url ? (
          <Image
            src={project.image.asset.url}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-theme-primary/5 via-theme-bg-tertiary to-theme-secondary/5 flex items-center justify-center">
            <span className={`text-7xl font-black text-theme-primary/8 select-none ${unbounded.className}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-theme-bg-secondary via-theme-bg-secondary/30 to-transparent" />

        {/* Number badge */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`text-[10px] text-theme-primary/90 bg-theme-bg-primary/75 backdrop-blur-sm border border-theme-primary/25 rounded-md px-2 py-1 font-mono ${unbounded.className}`}
          >
            #{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* AI / Featured badge */}
        {project.isAI && (
          <div className="absolute top-3 right-3 z-10 flex gap-1.5">
            {featured && (
              <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-theme-primary text-white backdrop-blur-sm ${unbounded.className}`}>
                Featured
              </span>
            )}
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-1 rounded-md border border-theme-primary/40 bg-theme-bg-primary/85 text-theme-primary backdrop-blur-sm">
              AI Agent
            </span>
          </div>
        )}
      </div>

      {/* Body — lifted layer */}
      <div className="p-5 space-y-3" style={{ transform: "translateZ(18px)" }}>
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-px bg-theme-primary/70" />
          <span className={`text-[10px] text-theme-primary/80 uppercase tracking-widest ${unbounded.className}`}>
            {project.isAI ? "AI System" : "Case Study"}
          </span>
        </div>

        <h3
          className={`text-xl font-bold text-theme-text-primary group-hover:text-theme-primary leading-tight transition-colors duration-300 ${unbounded.className}`}
        >
          {project.title}
        </h3>

        <p className={`text-sm text-theme-text-secondary/75 leading-relaxed line-clamp-2 ${inter.className}`}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {project.technologies?.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className={`text-[10px] px-2 py-0.5 rounded-md border border-theme-border/60 text-theme-text-muted bg-theme-bg-tertiary/50 font-medium ${unbounded.className}`}
            >
              {tech}
            </span>
          ))}
          {(project.technologies?.length ?? 0) > 4 && (
            <span
              className={`text-[10px] px-2 py-0.5 rounded-md border border-theme-border/60 text-theme-text-muted bg-theme-bg-tertiary/50 ${unbounded.className}`}
            >
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer actions */}
      <div
        className="px-5 pb-5 flex items-center justify-between gap-2"
        style={{ transform: "translateZ(18px)" }}
      >
        <div className="flex items-center gap-2">
          {project.blogSlug && (
            <a
              href={`/blogs/${project.blogSlug}`}
              className={`flex items-center gap-1.5 text-xs text-theme-text-muted hover:text-theme-primary border border-theme-border/50 hover:border-theme-primary/40 rounded-lg px-3 py-1.5 transition-all duration-200 ${unbounded.className}`}
            >
              <FiBookOpen className="w-3 h-3" />
              Case Study
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-theme-text-muted hover:text-theme-primary border border-theme-border/50 hover:border-theme-primary/40 rounded-lg transition-all duration-200"
            >
              <FiGithub className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-xs font-semibold text-theme-primary border border-theme-primary/35 hover:bg-theme-primary hover:text-white rounded-lg px-3 py-1.5 transition-all duration-300 ${unbounded.className}`}
          >
            Visit <FiArrowUpRight className="w-3 h-3" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
