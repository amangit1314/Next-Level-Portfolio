"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { anton, jetbrainsMono } from "@/lib/fonts";

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
        className={`text-3xl font-bold ${jetbrainsMono.className} flex-shrink-0`}
        style={{ color: "var(--hud-text-muted)" }}
      >
        {paddedIndex}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex gap-2 mb-2">
          {tags.slice(0, 2).map((tag, idx) => (
            <div
              key={idx}
              className={`text-xs px-2 py-1 border ${jetbrainsMono.className} uppercase flex-shrink-0`}
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
          className={`text-2xl uppercase leading-tight mb-1 ${anton.className}`}
          style={{ color: "var(--hud-text-primary)" }}
        >
          {title}
        </div>
        <div
          className="text-sm line-clamp-1"
          style={{ color: "var(--hud-text-primary)" }}
        >
          {description}
        </div>
      </div>

      {href && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={`text-xs px-3 py-1 border ${jetbrainsMono.className} uppercase whitespace-nowrap flex-shrink-0`}
          style={{
            borderColor: "var(--hud-border)",
            color: "var(--hud-text-muted)",
          }}
        >
          View Project
        </motion.div>
      )}

      {imageUrl && (
        <div className="hidden sm:block rounded overflow-hidden flex-shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            width={128}
            height={80}
            className="object-cover"
          />
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
