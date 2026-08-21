"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { jetbrainsMono, inter, anton } from "@/lib/fonts";

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
// pages, so they share the shape. Card-flip/3D-tilt treatment (BlogCard3D)
// is gone; that was the pre-HUD theme system's language, not this one's.
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
          className={`text-3xl font-bold ${jetbrainsMono.className} flex-shrink-0`}
          style={{ color: "var(--hud-text-muted)" }}
        >
          {paddedIndex}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`text-xs px-2 py-1 border ${jetbrainsMono.className} uppercase flex-shrink-0`}
              style={{ borderColor: "var(--hud-border)", color: "var(--hud-text-muted)" }}
            >
              {category.replace(/-/g, " ")}
            </div>
            {(date || readingTime) && (
              <div
                className={`text-xs ${jetbrainsMono.className} flex-shrink-0`}
                style={{ color: "var(--hud-text-muted)" }}
              >
                {date}
                {date && readingTime ? " · " : ""}
                {readingTime ? `${readingTime} min` : ""}
              </div>
            )}
          </div>
          <div
            className={`text-2xl uppercase leading-tight mb-1 ${anton.className}`}
            style={{ color: "var(--hud-text-primary)" }}
          >
            {title}
          </div>
          <div className={`text-sm line-clamp-1 ${inter.className}`} style={{ color: "var(--hud-text-primary)" }}>
            {excerpt}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={`text-xs px-3 py-1 border ${jetbrainsMono.className} uppercase whitespace-nowrap flex-shrink-0`}
          style={{ borderColor: "var(--hud-border)", color: "var(--hud-text-muted)" }}
        >
          Read
        </motion.div>

        {imageUrl && (
          <div className="hidden sm:block rounded overflow-hidden flex-shrink-0">
            <Image src={imageUrl} alt={title} width={128} height={80} className="object-cover" />
          </div>
        )}
      </div>
    </Link>
  );
}
