"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { primaryFont, secondaryFont } from "@/lib/fonts";
import { HudMediaFrame } from "@/components/primitives/HudMediaFrame";
import Marquee from "@/components/magicui/marquee";

interface ProjectListRowProps {
  index: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  href?: string;
}

export function ProjectListRow({
  index,
  title,
  description,
  tags,
  imageUrl,
  href,
}: ProjectListRowProps) {
  const [isHovering, setIsHovering] = useState(false);
  const paddedIndex = String(index).padStart(2, "0");
  const isExternal = href?.startsWith("http");

  const rowContent = (
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
        <div className="flex gap-2 mb-2">
          {tags.slice(0, 2).map((tag, idx) => (
            <div
              key={idx}
              className={`text-xs px-2 py-1 border ${secondaryFont.className} uppercase flex-shrink-0`}
              style={{
                borderColor: "var(--hud-border)",
                color: "var(--hud-text-muted)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        <div
          className="text-sm line-clamp-2"
          style={{ color: "var(--hud-text-muted)" }}
        >
          {description}
        </div>
      </div>

      {href && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={`w-28 border ${secondaryFont.className} uppercase flex-shrink-0 overflow-hidden`}
          style={{ borderColor: "var(--hud-border)", color: "var(--hud-text-muted)" }}
        >
          <Marquee repeat={2} className="[--duration:6s] py-1 text-xs">
            <span className="px-2">View Project</span>
          </Marquee>
        </motion.div>
      )}

      {imageUrl && (
        <div className="hidden sm:block flex-shrink-0">
          <HudMediaFrame src={imageUrl} alt={title} />
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="block"
      >
        {rowContent}
      </a>
    );
  }

  return rowContent;
}
