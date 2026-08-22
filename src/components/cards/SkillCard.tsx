"use client";

import React, { useMemo, useRef } from "react";
import { jetbrainsMono } from "@/lib/fonts";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Skill } from "@/types/skill";
import type { IconType } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io5";
import * as DiIcons from "react-icons/di";
import * as RiIcons from "react-icons/ri";

const iconPacks: Record<string, Record<string, IconType>> = {
  Fa: FaIcons,
  Si: SiIcons,
  Tb: TbIcons,
  Bi: BiIcons,
  Io: IoIcons,
  Di: DiIcons,
  Ri: RiIcons,
};

function getIconComponent(iconName?: string): IconType | null {
  if (!iconName) return null;
  const prefix = iconName.slice(0, 2);
  const pack = iconPacks[prefix];
  if (!pack) return null;
  return (pack as Record<string, IconType>)[iconName] || null;
}

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  // getIconComponent's result is already stable (pulled from static module
  // imports, never freshly created) — the lint rule can't statically trace
  // that through a function call and flags it regardless of memoization.
  // react-hooks/static-components (React Compiler diagnostic, doesn't
  // respect inline eslint-disable comments) is downgraded for this file in
  // eslint.config.mjs instead.
  const Icon = useMemo(() => getIconComponent(skill.iconName ?? undefined), [skill.iconName]);
  const ref = useRef<HTMLDivElement>(null);
  useScrollReveal(ref, "fade-up", { from: { opacity: 0, y: 10 }, duration: 0.35, delay: index * 0.025, start: "top 95%" });

  return (
    <div
      ref={ref}
      className="group relative flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-none border border-theme-border/50 bg-theme-bg-secondary/40 hover:border-theme-primary/50 hover:bg-theme-bg-secondary/70 transition-all duration-200 cursor-default"
    >
      <div className="shrink-0 w-5 h-5 flex items-center justify-center">
        {Icon ? (
          <Icon className="w-5 h-5 text-theme-text-muted group-hover:text-theme-primary transition-colors duration-200" />
        ) : (
          <div className="w-3.5 h-3.5 rounded bg-theme-border/60" />
        )}
      </div>
      <span
        className={`text-[11px] sm:text-sm font-semibold text-theme-text-secondary group-hover:text-theme-text-primary transition-colors duration-200 truncate leading-[1.15] ${jetbrainsMono.className}`}
      >
        {skill.name}
      </span>

      {/* Truncated names (e.g. "Tool-Calling / Function Calling") were
          unreadable with no way to see the full text — worse than not
          truncating at all. Floating tooltip on hover shows it in full. */}
      <div
        className={`pointer-events-none absolute left-1/2 bottom-full mb-2 -translate-x-1/2 z-50 whitespace-nowrap px-3 py-1.5 rounded-none bg-theme-bg-primary border border-theme-border text-xs text-theme-text-primary shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 ${jetbrainsMono.className}`}
      >
        {skill.name}
      </div>
    </div>
  );
};

export default SkillCard;
