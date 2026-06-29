"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { unbounded, inter } from "@/lib/fonts";

interface Component {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  category: string;
  tags: string[];
  previewImage?: { asset: { url: string } };
  difficulty: string;
}

const difficultyStyle: Record<string, string> = {
  beginner: "border-green-500/40 bg-green-500/10 text-green-400",
  intermediate: "border-yellow-500/40 bg-yellow-500/10 text-yellow-400",
  advanced: "border-red-500/40 bg-red-500/10 text-red-400",
};

export default function ComponentCard3D({
  component,
  index,
}: {
  component: Component;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
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
  };

  return (
    <Link href={`/components/${component.slug.current}`} className="block h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.06, duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-40px" }}
        className="relative h-full rounded-2xl border border-theme-border/50 bg-theme-bg-secondary/40 backdrop-blur-xl overflow-hidden group"
      >
        {/* Cursor glow */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(260px circle at ${glowPos.x}% ${glowPos.y}%, color-mix(in srgb, var(--theme-primary) 11%, transparent), transparent 70%)`,
          }}
        />

        {/* Top edge shimmer */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

        {/* Preview image */}
        <div className="relative h-48 overflow-hidden">
          {component.previewImage?.asset?.url ? (
            <Image
              src={component.previewImage.asset.url}
              alt={component.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-theme-primary/5 via-theme-bg-tertiary to-theme-secondary/5 flex items-center justify-center">
              <span className={`text-6xl font-black text-theme-primary/8 select-none ${unbounded.className}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-theme-bg-secondary via-theme-bg-secondary/20 to-transparent" />

          {/* Difficulty badge */}
          {component.difficulty && (
            <div className="absolute top-3 right-3 z-10">
              <span
                className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-1 rounded-md border backdrop-blur-sm capitalize ${
                  difficultyStyle[component.difficulty] ?? "border-zinc-500/40 bg-zinc-500/10 text-zinc-400"
                } ${unbounded.className}`}
              >
                {component.difficulty}
              </span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-5 space-y-3" style={{ transform: "translateZ(18px)" }}>
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-px bg-theme-primary/70" />
            <span className={`text-[10px] text-theme-primary/80 uppercase tracking-widest ${unbounded.className}`}>
              {component.category?.replace(/-/g, " ")}
            </span>
          </div>

          <h3
            className={`text-xl font-bold text-theme-text-primary group-hover:text-white leading-tight transition-colors duration-300 ${unbounded.className}`}
          >
            {component.title}
          </h3>

          <p className={`text-sm text-theme-text-secondary/75 leading-relaxed line-clamp-2 ${inter.className}`}>
            {component.description}
          </p>

          {/* Tags */}
          {component.tags && component.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {component.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className={`text-[10px] px-2 py-0.5 rounded-md border border-theme-border/60 text-theme-text-muted bg-theme-bg-tertiary/50 font-medium ${unbounded.className}`}
                >
                  {tag}
                </span>
              ))}
              {component.tags.length > 3 && (
                <span className={`text-[10px] px-2 py-0.5 rounded-md border border-theme-border/60 text-theme-text-muted bg-theme-bg-tertiary/50 ${unbounded.className}`}>
                  +{component.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className="px-5 pb-5 flex items-center justify-end"
          style={{ transform: "translateZ(18px)" }}
        >
          <span className={`flex items-center gap-1 text-xs font-semibold text-theme-primary ${unbounded.className}`}>
            View Component <FiArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
