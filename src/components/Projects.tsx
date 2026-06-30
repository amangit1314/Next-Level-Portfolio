"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import { unbounded, jetbrainsMono } from "@/lib/fonts";
import ProjectCard from "./ProjectCard";
import { aiProjects } from "@/data/ai-projects";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const sanityData = await client.fetch(projectsQuery);
      setProjects([...aiProjects, ...sanityData]);
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="v2-section bg-theme-bg-primary">
      <div className="absolute inset-0 pointer-events-none">
        <div className="v2-grid-bg absolute inset-0" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-theme-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="v2-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20 space-y-4"
        >
          <div className="v2-label mb-4">
            <div className="v2-label-line" />
            <span className={`v2-label-text ${jetbrainsMono.className}`}>
              Portfolio Showcase
            </span>
            <div className="v2-label-line" />
          </div>
          <h2 className={`text-4xl sm:text-5xl font-black text-theme-text-primary ${unbounded.className}`}>
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 theme-gradient-primary mx-auto rounded-full" />
          <p className="max-w-2xl mx-auto text-lg text-theme-text-muted">
            Crafting digital experiences with modern technologies and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-10 md:gap-16"
        >
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={`project_${index}`} index={index} project={project} />
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="/projects"
            className={`group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-theme-primary/30 hover:border-theme-primary/60 bg-theme-bg-secondary/40 hover:bg-theme-primary/5 transition-all duration-300 text-xs font-medium text-theme-primary ${unbounded.className}`}
          >
            Discover All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
