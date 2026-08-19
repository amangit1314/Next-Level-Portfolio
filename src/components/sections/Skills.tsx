"use client";

import { motion, AnimatePresence } from "framer-motion";
import { inter, unbounded } from "@/lib/fonts";
import SkillCard from "../cards/SkillCard";
import { useState } from "react";
import { useSkills, useProjectsCount } from "@/hooks/useSanityQuery";
import { useProfile } from "@/hooks/useSanityQuery";

const ORDERED_CATEGORIES = [
  "Frontend",
  "Backend",
  "Mobile",
  "Database",
  "DevOps",
  "AI & Machine Learning",
  "MLOps",
];

const Skills = () => {
  const { data: skills = [] } = useSkills();
  const { data: profile } = useProfile();
  const { data: liveProjectsCount } = useProjectsCount();
  const [activeCategory, setActiveCategory] = useState("All");

  // Categories that actually have skills
  const activeCategories = ORDERED_CATEGORIES.filter((cat) =>
    skills.some((s) => s.category === cat)
  );

  const tabs = ["All", ...activeCategories];

  // For "All" → group by category. For specific → flat list.
  const groupedForAll = activeCategories
    .map((cat) => ({
      category: cat,
      items: skills.filter((s) => s.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  const filteredFlat = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="v2-section bg-theme-bg-primary relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="v2-grid-bg absolute inset-0 opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-theme-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-theme-secondary/4 rounded-full blur-[100px]" />
      </div>

      <div className="v2-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12 space-y-4"
        >
          <div className="v2-label">
            <div className="v2-label-line" />
            <span className={`v2-label-text ${unbounded.className}`}>Technical Arsenal</span>
            <div className="v2-label-line" />
          </div>

          <h2
            className={`text-4xl sm:text-5xl font-black text-center text-theme-text-primary ${unbounded.className}`}
          >
            Skills
          </h2>

          <p className={`text-center text-theme-text-muted text-sm max-w-md mx-auto ${inter.className}`}>
            Technologies I use to design, build, and ship production systems.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mb-10 -mx-4 sm:mx-0"
        >
          <div className="flex overflow-x-auto scrollbar-none gap-2 px-4 sm:px-0 sm:flex-wrap sm:justify-center pb-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`shrink-0 text-[11px] px-4 py-2 rounded-full border transition-all duration-200 ${unbounded.className} ${
                  activeCategory === tab
                    ? "border-theme-primary/70 bg-theme-primary/12 text-theme-primary"
                    : "border-theme-border/50 text-theme-text-muted hover:border-theme-primary/30 hover:text-theme-text-secondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills display */}
        <AnimatePresence mode="wait">
          {activeCategory === "All" ? (
            <motion.div
              key="all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-7 sm:space-y-10"
            >
              {groupedForAll.map(({ category, items }) => (
                <div key={category}>
                  {/* Category label */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-theme-primary" />
                    <span
                      className={`text-xs font-semibold text-theme-text-muted uppercase tracking-widest ${unbounded.className}`}
                    >
                      {category}
                    </span>
                    <div className="flex-1 h-px bg-theme-border/40" />
                    <span className={`text-[10px] text-theme-text-muted ${inter.className}`}>
                      {items.length}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
                    {items.map((skill, index) => (
                      <SkillCard key={skill._id ?? skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5"
            >
              {filteredFlat.length > 0 ? (
                filteredFlat.map((skill, index) => (
                  <SkillCard key={skill._id ?? skill.name} skill={skill} index={index} />
                ))
              ) : (
                <p className={`col-span-full text-center py-12 text-theme-text-muted text-sm ${inter.className}`}>
                  No skills in this category yet.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-theme-border/30 rounded-2xl overflow-hidden border border-theme-border/30"
        >
          {[
            { value: profile?.stats?.experienceYears || "—", label: "Years Experience" },
            { value: `${skills.length}+`, label: "Technologies" },
            { value: liveProjectsCount ? `${liveProjectsCount}+` : "—", label: "Projects Built" },
            { value: activeCategories.length, label: "Specializations" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-5 sm:py-8 bg-theme-bg-secondary/30 hover:bg-theme-bg-secondary/60 transition-colors duration-200"
            >
              <div
                className={`text-2xl sm:text-3xl font-black theme-text-gradient bg-clip-text text-transparent mb-1 ${unbounded.className}`}
              >
                {stat.value}
              </div>
              <div className={`text-xs text-theme-text-muted ${inter.className}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
