"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { secondaryFont, inter, primaryFont } from "@/lib/fonts";
import { HudMediaFrame } from "@/components/primitives/HudMediaFrame";
import Marquee from "@/components/magicui/marquee";

interface BlogListRowProps {
  index: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date?: string;
  readingTime?: number;
  imageUrl?: string;
}

// Mirrors ProjectListRow's indexed-row pattern (same HUD tokens, same
// hover affordance) — Blogs and Projects are the two "browse a list"
// pages, so they share the shape. The scroll-linked rotateX tilt
// (2026-08-25) deliberately reverses an earlier call that removed a
// pre-HUD card-flip/3D-tilt treatment as off-brand — this is a different,
// intentional effect (continuous per-row scrub via useScrollReveal's
// "tilt-rows" variant, not a hover card-flip), reinstated after explicit
// user approval. See useScrollReveal.ts for the implementation.
export function BlogListRow({
  index,
  slug,
  title,
  excerpt,
  category,
  date,
  readingTime,
  imageUrl,
}: BlogListRowProps) {
  const [isHovering, setIsHovering] = useState(false);
  const paddedIndex = String(index).padStart(2, "0");

  return (
    <Link href={`/blogs/${slug}`} className="block">
      <div
        className="flex items-start gap-6 py-8 border-b"
        style={{ borderColor: "var(--hud-border)" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className={`text-3xl font-bold ${secondaryFont.className} flex-shrink-0 transition-colors duration-200`}
          style={{ color: isHovering ? "var(--theme-primary)" : "var(--hud-text-muted)" }}
        >
          {paddedIndex}
        </div>

        <div className="flex-1 min-w-0">
          <div
            className={`text-2xl sm:text-3xl uppercase leading-tight mb-3 ${primaryFont.className}`}
            style={{ color: "var(--hud-text-primary)" }}
          >
            {title}
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`text-xs px-2 py-1 border ${secondaryFont.className} uppercase flex-shrink-0`}
              style={{ borderColor: "var(--hud-border)", color: "var(--hud-text-muted)" }}
            >
              {category.replace(/-/g, " ")}
            </div>
            {(date || readingTime) && (
              <div
                className={`text-xs ${secondaryFont.className} flex-shrink-0`}
                style={{ color: "var(--hud-text-muted)" }}
              >
                {date}
                {date && readingTime ? " · " : ""}
                {readingTime ? `${readingTime} min` : ""}
              </div>
            )}
          </div>
          <div className={`text-sm line-clamp-2 ${inter.className}`} style={{ color: "var(--hud-text-muted)" }}>
            {excerpt}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={`w-28 border ${secondaryFont.className} uppercase flex-shrink-0 overflow-hidden`}
          style={{ borderColor: "var(--hud-border)", color: "var(--hud-text-muted)" }}
        >
          <Marquee repeat={2} className="[--duration:6s] py-1 text-xs">
            <span className="px-2">Read</span>
          </Marquee>
        </motion.div>

        {imageUrl && (
          <div className="hidden sm:block flex-shrink-0">
            <HudMediaFrame src={imageUrl} alt={title} />
          </div>
        )}
      </div>
    </Link>
  );
}
