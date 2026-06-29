"use client";

import React, { useEffect, useState } from "react";
import { useQueryState, parseAsString } from "nuqs";
import { motion } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";
import { client } from "@/sanity/lib/client";
import { projectsQuery, profileQuery } from "@/sanity/lib/queries";
import { inter, unbounded } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProjectCardSkeleton } from "@/components/skeletons/ProjectCardSkeleton";
import ProjectsHeader from "./_components/ProjectsHeader";
import ProjectCard3D from "./_components/ProjectCard3D";
import { aiProjects } from "@/data/ai-projects";
import { ProfileStats } from "@/types/profile-stats";

interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: { asset: { url: string } };
  link?: string;
  code?: string;
  isAI?: boolean;
  playgroundUrl?: string;
  architectureDiagram?: { asset: { url: string } };
  metrics?: Array<{ label: string; value: string }>;
  blogSlug?: string;
}

const MAX_FILTER_CHIPS = 10;

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [stats, setStats] = useState<ProfileStats>({});
  const [loading, setLoading] = useState(true);
  
  const [searchQuery, setSearchQuery] = useQueryState("q", parseAsString.withDefault(""));
  const [selectedCategory, setSelectedCategory] = useQueryState("cat", parseAsString.withDefault("All"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, profileData] = await Promise.all([
          client.fetch(projectsQuery),
          client.fetch(profileQuery),
        ]);
        setProjects([...aiProjects, ...projectsData]);
        setStats(profileData?.stats || {});
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // AI Co-pilot search event (nuqs handles URL sync natively)
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.query) void setSearchQuery(detail.query);
    };
    window.addEventListener("search-projects", handler);
    return () => window.removeEventListener("search-projects", handler);
  }, [setSearchQuery]);

  const allTechs = Array.from(
    new Set(projects.flatMap((p) => p.technologies || []))
  ).sort();

  const filterChips = allTechs.slice(0, MAX_FILTER_CHIPS);

  const filtered = projects.filter((p) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      p.title.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q);
    const matchesCat =
      selectedCategory === "All" || p.technologies?.includes(selectedCategory);
    return matchesSearch && matchesCat;
  });

  const clearFilters = () => {
    void setSearchQuery("");
    void setSelectedCategory("All");
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-theme-bg-primary">
          <div className="max-w-7xl mx-auto px-4 pt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {[...Array(6)].map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-theme-bg-primary relative overflow-x-hidden">
      {/* Ambient background — fixed so it doesn't scroll */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-48 left-1/4 w-[700px] h-[700px] bg-theme-primary/7 blur-[180px] rounded-full" />
        <div className="absolute top-1/3 -right-24 w-[500px] h-[500px] bg-theme-secondary/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 -left-16 w-[400px] h-[400px] bg-theme-accent/4 blur-[130px] rounded-full" />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <Header />

        {/* Hero */}
        <ProjectsHeader projectCount={projects.length} stats={stats} />

        {/* Filter bar — search + pills in one row */}
        <motion.div
          id="projects-search-filters"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 flex flex-wrap items-center gap-2"
        >
          {/* Search input */}
          <div className="relative w-48 shrink-0">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-theme-text-secondary pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className={`w-full pl-[30px] pr-7 py-1.5 rounded-full border border-theme-border/60 bg-theme-bg-secondary/50 backdrop-blur-md text-[11px] text-theme-text-primary placeholder:text-theme-text-muted focus:outline-none focus:border-theme-primary/50 transition-all duration-200 ${inter.className}`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-theme-text-muted hover:text-theme-text-primary transition-colors"
              >
                <FiX className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-theme-border/50 mx-1" />

          {/* Category pills */}
          {["All", ...filterChips].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[11px] px-3 py-1.5 rounded-full border transition-all duration-200 ${unbounded.className} ${
                selectedCategory === cat
                  ? "border-theme-primary/70 bg-theme-primary/12 text-theme-primary"
                  : "border-theme-border/50 text-theme-text-muted hover:border-theme-primary/30 hover:text-theme-text-secondary bg-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Result count + clear */}
        <div className="mb-5 flex items-center gap-3">
          <span className={`text-sm text-theme-text-muted ${inter.className}`}>
            <span className={`text-theme-text-secondary font-semibold ${unbounded.className}`}>
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "project" : "projects"}
          </span>
          {(searchQuery || selectedCategory !== "All") && (
            <button
              onClick={clearFilters}
              className={`text-xs text-theme-primary hover:underline underline-offset-2 ${unbounded.className}`}
            >
              Clear
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-24 text-center"
          >
            <p className={`text-theme-text-muted ${inter.className}`}>
              No projects match &ldquo;{searchQuery}&rdquo;.
            </p>
          </motion.div>
        ) : (() => {
          const featuredProjects = filtered.filter((p) => p.isAI);
          const regularProjects = filtered.filter((p) => !p.isAI);
          return (
            <div className="pb-24 space-y-10">
              {/* Featured row */}
              {featuredProjects.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1.5 h-4 rounded-full bg-theme-primary" />
                    <span className={`text-xs font-semibold text-theme-text-secondary uppercase tracking-widest ${unbounded.className}`}>
                      Featured
                    </span>
                  </div>
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    style={{ perspective: "1200px" }}
                  >
                    {featuredProjects.map((project, index) => (
                      <ProjectCard3D
                        key={project._id}
                        project={project}
                        index={index}
                        featured
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Regular grid */}
              {regularProjects.length > 0 && (
                <div>
                  {featuredProjects.length > 0 && (
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-1.5 h-4 rounded-full bg-theme-border" />
                      <span className={`text-xs font-semibold text-theme-text-muted uppercase tracking-widest ${unbounded.className}`}>
                        All Projects
                      </span>
                    </div>
                  )}
                  <div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                    style={{ perspective: "1200px" }}
                  >
                    {regularProjects.map((project, index) => (
                      <ProjectCard3D
                        key={project._id}
                        project={project}
                        index={featuredProjects.length + index}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })()}
      </div>

      <div className="relative z-10 border-t border-theme-border/30">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
