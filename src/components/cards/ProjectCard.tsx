"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { unbounded } from "@/lib/fonts";

interface ProjectCardProps {
  index: number;
  project: Project;
}

const ProjectCard = ({ index, project }: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
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

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
  };

  const imgSrc = project.image?.asset?.url || "/placeholder.png";

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-theme-bg-secondary/50 backdrop-blur-xl border border-theme-border hover:border-theme-primary/50 transition-all duration-500 shadow-sm shadow-black/[0.06]"
    >
      {/* Cursor glow */}
      <div
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(320px circle at ${glowPos.x}% ${glowPos.y}%, color-mix(in srgb, var(--theme-primary) 9%, transparent), transparent 70%)`,
        }}
      />

      {/* Top shimmer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-primary/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Border glow */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden pointer-events-none">
        <div className="absolute inset-[-2px] bg-gradient-to-r from-theme-primary via-transparent to-theme-secondary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700" />
      </div>

      {/* ── MOBILE layout: thumbnail left + content right ─── */}
      <div className="relative flex flex-row lg:hidden">
        {/* Thumbnail */}
        <Link
          href={project.link || ""}
          className="w-28 sm:w-36 flex-shrink-0 relative overflow-hidden block"
        >
          <div className="relative h-full min-h-[168px] overflow-hidden">
            {!imageError && (
              <Image
                src={imgSrc}
                fill
                alt={project.title}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onError={() => setImageError(true)}
                sizes="144px"
              />
            )}
            {/* Right-side fade so image blends into card body */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-theme-bg-secondary/80" />
          </div>
        </Link>

        {/* Mobile content */}
        <div className="flex-1 min-w-0 p-4 sm:p-5 flex flex-col justify-between">
          {/* Meta row */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-theme-primary uppercase tracking-widest">
              Case Study
            </span>
            <span className="text-[10px] font-mono text-theme-text-muted">
              #{String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Title */}
          <Link href={project.link || ""}>
            <h3
              className={`text-sm sm:text-base font-bold text-theme-text-primary leading-snug line-clamp-3 mb-2 group-hover:text-theme-primary transition-colors duration-300 ${unbounded.className}`}
            >
              {project.title}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-theme-text-secondary text-xs leading-relaxed line-clamp-2 mb-3">
            {project.description}
          </p>

          {/* Tech chips — show max 3 + overflow count */}
          <div className="flex flex-wrap gap-1">
            {project.technologies?.slice(0, 3).map((tech: string, i: number) => (
              <span
                key={i}
                className={`px-2 py-0.5 text-[9px] font-semibold rounded-md border border-theme-border/60 bg-theme-bg-tertiary/80 text-theme-text-muted ${unbounded.className}`}
              >
                {tech}
              </span>
            ))}
            {(project.technologies?.length ?? 0) > 3 && (
              <span className="px-2 py-0.5 text-[9px] font-semibold rounded-md border border-theme-border/60 bg-theme-bg-tertiary/80 text-theme-text-muted">
                +{project.technologies!.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout: image left + content right ─── */}
      <div className="relative hidden lg:flex lg:flex-row">
        {/* Image panel */}
        <div className="lg:w-1/2 relative overflow-hidden">
          <Link href={project.link || ""} className="relative block h-full">
            <div className="relative h-72 xl:h-80 overflow-hidden">
              {!imageError && (
                <Image
                  src={imgSrc}
                  fill
                  alt={project.title}
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  onError={() => setImageError(true)}
                  sizes="(max-width: 1280px) 50vw, 640px"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-linear-to-br from-theme-primary/20 via-transparent to-theme-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="absolute top-6 left-6 px-3 py-1 bg-theme-bg-primary/60 backdrop-blur-md rounded-full border border-theme-primary/30"
              >
                <span className="text-xs font-mono text-theme-primary">
                  #{String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>
            </div>
          </Link>
        </div>

        {/* Desktop content */}
        <div className="p-8 lg:p-10 lg:w-1/2 flex flex-col justify-center relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 self-start"
          >
            <div className="h-px w-8 bg-gradient-to-r from-theme-primary to-transparent" />
            <span className="text-xs font-mono text-theme-primary uppercase tracking-wider">
              Case Study
            </span>
          </motion.div>

          <Link href={project.link || ""}>
            <motion.h3
              className={`text-3xl lg:text-4xl font-bold text-theme-text-primary mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-theme-primary group-hover:to-theme-secondary group-hover:bg-clip-text transition-all duration-300 ${unbounded.className}`}
            >
              {project.title}
            </motion.h3>
          </Link>

          <p className="text-theme-text-secondary text-base lg:text-lg mb-6 leading-relaxed line-clamp-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech: string, i: number) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                whileHover={{ y: -2 }}
                className={`px-3 py-1.5 bg-linear-to-br from-theme-bg-tertiary/80 to-theme-bg-primary/80 text-theme-text-secondary rounded-lg border border-theme-border/50 hover:border-theme-primary/50 hover:text-theme-primary-light transition-all duration-300 text-xs font-medium backdrop-blur-sm ${unbounded.className}`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
