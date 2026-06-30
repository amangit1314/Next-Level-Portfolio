"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiCalendar, FiClock, FiArrowUpRight } from "react-icons/fi";
import { unbounded, inter } from "@/lib/fonts";

interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: string;
  tags: string[];
  coverImage?: { asset: { url: string } };
  readingTime?: number;
  featured: boolean;
  publishedAt: string;
}

export default function BlogCard3D({
  blog,
  index,
  featured = false,
}: {
  blog: Blog;
  index: number;
  featured?: boolean;
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

  const formattedDate = blog.publishedAt
    ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <Link href={`/blogs/${blog.slug.current}`} className="block h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.15 }}
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

        {/* Cover image */}
        <div className={`relative overflow-hidden ${featured ? "h-56" : "h-48"}`}>
          {blog.coverImage?.asset?.url ? (
            <Image
              src={blog.coverImage.asset.url}
              alt={blog.title}
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

          {/* Featured badge */}
          {featured && (
            <div className="absolute top-3 right-3 z-10">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border border-theme-primary/40 bg-theme-primary/15 text-theme-primary backdrop-blur-sm ${unbounded.className}`}>
                Featured
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
              {blog.category?.replace(/-/g, " ")}
            </span>
          </div>

          <h3
            className={`${featured ? "text-xl" : "text-lg"} font-bold text-theme-text-primary group-hover:text-white leading-tight transition-colors duration-300 line-clamp-2 ${unbounded.className}`}
          >
            {blog.title}
          </h3>

          <p className={`text-sm text-theme-text-secondary/75 leading-relaxed line-clamp-2 ${inter.className}`}>
            {blog.excerpt}
          </p>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {blog.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className={`text-[10px] px-2 py-0.5 rounded-md border border-theme-border/60 text-theme-text-muted bg-theme-bg-tertiary/50 font-medium ${unbounded.className}`}
                >
                  {tag}
                </span>
              ))}
              {blog.tags.length > 3 && (
                <span className={`text-[10px] px-2 py-0.5 rounded-md border border-theme-border/60 text-theme-text-muted bg-theme-bg-tertiary/50 ${unbounded.className}`}>
                  +{blog.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className="px-5 pb-5 flex items-center justify-between gap-2 text-xs text-theme-text-muted"
          style={{ transform: "translateZ(18px)" }}
        >
          <div className="flex items-center gap-3">
            {formattedDate && (
              <div className="flex items-center gap-1.5">
                <FiCalendar className="w-3 h-3 shrink-0" />
                <span className={inter.className}>{formattedDate}</span>
              </div>
            )}
            {blog.readingTime && (
              <div className="flex items-center gap-1.5">
                <FiClock className="w-3 h-3 shrink-0" />
                <span className={inter.className}>{blog.readingTime} min</span>
              </div>
            )}
          </div>

          <span className={`flex items-center gap-1 text-theme-primary font-semibold ${unbounded.className}`}>
            Read <FiArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
