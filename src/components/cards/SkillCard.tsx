"use client";

import React from "react";
import { motion } from "framer-motion";
import { unbounded } from "@/lib/fonts";
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
  const Icon = getIconComponent(skill.iconName ?? undefined);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-16px" }}
      transition={{ delay: index * 0.025, duration: 0.35, ease: "easeOut" }}
      className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-theme-border/50 bg-theme-bg-secondary/40 backdrop-blur-sm hover:border-theme-primary/50 hover:bg-theme-bg-secondary/70 transition-all duration-200 cursor-default"
    >
      <div className="shrink-0 w-5 h-5 flex items-center justify-center">
        {Icon ? (
          <Icon className="w-5 h-5 text-theme-text-muted group-hover:text-theme-primary transition-colors duration-200" />
        ) : (
          <div className="w-3.5 h-3.5 rounded bg-theme-border/60" />
        )}
      </div>
      <span
        className={`text-[11px] sm:text-sm font-semibold text-theme-text-secondary group-hover:text-theme-text-primary transition-colors duration-200 truncate leading-none ${unbounded.className}`}
      >
        {skill.name}
      </span>
    </motion.div>
  );
};

export default SkillCard;
