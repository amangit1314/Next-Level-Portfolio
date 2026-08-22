"use client";

import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { jetbrainsMono, anton } from "@/lib/fonts";
import ProjectCard from "../cards/ProjectCard";
import { Route } from "@/types/enums";
import { aiProjects } from "@/data/ai-projects";
import { useProjects } from "@/hooks/useSanityQuery";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Projects = () => {
  const { data: sanityProjects = [] } = useProjects();
  const projects = [...aiProjects.filter((p) => !p.hidden), ...sanityProjects];
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const viewAllRef = useRef<HTMLDivElement>(null);
  useScrollReveal(headerRef, "fade-up");
  useScrollReveal(gridRef, "stagger-rows", { deps: [projects.length] });
  useScrollReveal(viewAllRef, "fade-up", { delay: 0.15 });

  return (
    <section id="projects" className="v2-section bg-theme-bg-primary">
      <div className="absolute inset-0 pointer-events-none">
        <div className="v2-grid-bg absolute inset-0" />
      </div>

      <div className="v2-container">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-20 space-y-4">
          <div className="v2-label mb-4">
            <div className="v2-label-line" />
            <span className={`v2-label-text ${jetbrainsMono.className}`}>
              Portfolio Showcase
            </span>
            <div className="v2-label-line" />
          </div>
          <h2 className={`text-4xl sm:text-6xl uppercase leading-none text-theme-text-primary ${anton.className}`}>
            Featured Projects
          </h2>
          <div className="w-16 h-0.5 theme-gradient-primary mx-auto rounded-none" />
          <p className="max-w-2xl mx-auto text-lg text-theme-text-muted">
            Crafting digital experiences with modern technologies and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-1 gap-6 sm:gap-10 md:gap-16">
          {projects.slice(0, 2).map((project, index) => (
            <div key={(project as { _id?: string })._id ?? `ai_project_${index}`} data-reveal-item>
              <ProjectCard index={index} project={project as Project} />
            </div>
          ))}
        </div>

        {/* View All */}
        <div ref={viewAllRef} className="text-center mt-10 sm:mt-16">
          <a
            href={Route.Projects}
            className={`group inline-flex items-center gap-3 px-8 py-4 rounded-none border border-theme-primary/30 hover:border-theme-primary/60 bg-theme-bg-secondary/40 hover:bg-theme-primary/5 transition-all duration-300 text-xs font-medium text-theme-primary ${jetbrainsMono.className}`}
          >
            Discover All Projects
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
