"use client";

import { motion } from "framer-motion";
import { inter, unbounded } from "@/lib/fonts";
import { FiHome, FiChevronRight } from "react-icons/fi";
import { ProfileStats } from "@/types/profile-stats";

interface ProjectsHeaderProps {
  projectCount: number;
  stats: ProfileStats;
}

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({ projectCount, stats }) => {
  return (
    <div className="relative pt-20 sm:pt-28 pb-12 overflow-hidden">
      {/* Ambient orbs — fixed, not animated, to avoid layout recalc */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-theme-primary/12 blur-[140px] rounded-full" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-theme-secondary/8 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1.5 mb-8 text-sm"
        >
          <a
            href="/"
            className={`flex items-center gap-1.5 text-theme-text-muted hover:text-theme-primary transition-colors duration-200 ${inter.className}`}
          >
            <FiHome className="w-3.5 h-3.5" />
            Home
          </a>
          <FiChevronRight className="w-3.5 h-3.5 text-theme-border" />
          <span className={`text-theme-primary font-semibold ${unbounded.className}`}>Projects</span>
        </motion.nav>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className={`text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[1.15] mb-5 ${unbounded.className}`}
        >
          <span className="theme-text-gradient bg-clip-text text-transparent">My Projects</span>
        </motion.h1>

        {/* Subtitle + stats — subtitle left, stats pinned to far right */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <p className={`text-theme-text-secondary text-base md:text-lg max-w-xs ${inter.className}`}>
            AI engineering, full-stack, and open source — built to ship.
          </p>

          <div className="flex items-end gap-6 shrink-0">
            <div>
              <div className={`text-3xl font-black text-theme-primary leading-[1.15] tabular-nums ${unbounded.className}`}>
                {projectCount}+
              </div>
              <div className={`text-[11px] text-theme-text-muted mt-1 ${inter.className}`}>Projects</div>
            </div>
            <div className="w-px h-10 bg-theme-border/50 mb-0.5" />
            <div>
              <div className={`text-3xl font-black text-theme-secondary leading-[1.15] tabular-nums ${unbounded.className}`}>
                {stats.experienceYears || "4+"}
              </div>
              <div className={`text-[11px] text-theme-text-muted mt-1 ${inter.className}`}>Years</div>
            </div>
            <div className="w-px h-10 bg-theme-border/50 mb-0.5" />
            <div>
              <div className={`text-3xl font-black text-theme-accent leading-[1.15] tabular-nums ${unbounded.className}`}>
                {stats.technologiesCount || "24+"}
              </div>
              <div className={`text-[11px] text-theme-text-muted mt-1 ${inter.className}`}>Technologies</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsHeader;
