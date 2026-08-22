"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useQueryState, parseAsString } from "nuqs";
import { motion } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { ProjectListRowSkeleton } from "@/components/skeletons/ProjectListRowSkeleton";
import { ProjectListRow } from "./_components/ProjectListRow";
import { HudPageTitle } from "@/components/layout/hud/HudPageTitle";
import { HudScrollSlider } from "@/components/layout/hud/HudScrollSlider";
import { aiProjects } from "@/data/ai-projects";
import { useUIStore } from "@/stores/uiStore";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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

const ProjectsContent = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useQueryState("q", parseAsString.withDefault(""));
  const [selectedCategory, setSelectedCategory] = useQueryState("cat", parseAsString.withDefault("All"));
  const [activeTab, setActiveTab] = useQueryState("view", parseAsString.withDefault("featured"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsData = await client.fetch(projectsQuery);
        setProjects([...aiProjects.filter((p) => !p.hidden), ...projectsData]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // AI Co-pilot same-page search handoff via uiStore — nuqs `q` param
  // stays the canonical source of truth for the search box; this just
  // consumes the one-shot signal and clears it.
  const pendingProjectSearch = useUIStore((s) => s.pendingProjectSearch);
  const clearPendingProjectSearch = useUIStore((s) => s.clearPendingProjectSearch);
  useEffect(() => {
    if (pendingProjectSearch) {
      void setSearchQuery(pendingProjectSearch);
      clearPendingProjectSearch();
    }
  }, [pendingProjectSearch, setSearchQuery, clearPendingProjectSearch]);

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

  const rowsRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rowsRef, "stagger-rows", { deps: [filtered.length, activeTab] });

  const clearFilters = () => {
    void setSearchQuery("");
    void setSelectedCategory("All");
  };

  if (loading) {
    return (
      <div className="min-h-screen [background-color:var(--hud-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32">
          <HudPageTitle title="PROJECTS" breadcrumb={["HOME", "PROJECTS"]} />
          <div className="mt-8">
            {[...Array(6)].map((_, i) => (
              <ProjectListRowSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen [background-color:var(--hud-bg)] relative overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none hud-grid-bg" />

      <HudScrollSlider />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <HudPageTitle title="PROJECTS" breadcrumb={["HOME", "PROJECTS"]} />

        {/* Filter bar — search + scrollable pills */}
        <motion.div
          id="projects-search-filters"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 space-y-3"
        >
          {/* Search input */}
          <div className="relative w-full sm:w-48">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none [color:var(--hud-text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className={`w-full pl-[30px] pr-7 py-2 border text-[11px] focus:outline-none transition-all duration-200 ${inter.className}`}
              style={{ borderColor: "var(--hud-border)", backgroundColor: "var(--hud-bg-elevated)", color: "var(--hud-text-primary)" }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 transition-colors [color:var(--hud-text-muted)] hover:[color:var(--hud-text-primary)]"
              >
                <FiX className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Category pills — horizontally scrollable on mobile */}
          <div className="flex overflow-x-auto scrollbar-none gap-2 -mx-4 sm:mx-0 px-4 sm:px-0 pb-1 sm:flex-wrap">
            {["All", ...filterChips].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 text-[11px] px-3 py-1.5 border transition-all duration-200 uppercase tracking-wide ${jetbrainsMono.className}`}
                style={
                  selectedCategory === cat
                    ? { borderColor: "var(--theme-primary)", color: "var(--theme-primary)" }
                    : { borderColor: "var(--hud-border)", color: "var(--hud-text-muted)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Result count + clear */}
        <div className="mb-5 flex items-center gap-3">
          <span className={`text-sm ${inter.className} [color:var(--hud-text-muted)]`}>
            <span className={`font-semibold ${jetbrainsMono.className} [color:var(--hud-text-primary)]`}>
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "project" : "projects"}
          </span>
          {(searchQuery || selectedCategory !== "All") && (
            <button
              onClick={clearFilters}
              className={`text-xs hover:underline underline-offset-2 uppercase tracking-wide ${jetbrainsMono.className} [color:var(--hud-text-primary)]`}
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
            <p className={`${inter.className} [color:var(--hud-text-muted)]`}>
              No projects match &ldquo;{searchQuery}&rdquo;.
            </p>
          </motion.div>
        ) : (() => {
          const featuredProjects = filtered.filter((p) => p.isAI);
          const hasFeatured = featuredProjects.length > 0;
          // Featured tab only makes sense when there's something to feature —
          // fall back to "all" rather than showing an empty tab as default.
          const tab = hasFeatured ? activeTab : "all";
          const visible = tab === "featured" ? featuredProjects : filtered;

          return (
            <div className="pb-24">
              {/* Tab switcher */}
              {hasFeatured && (
                <div className="flex gap-2 mb-6">
                  {(
                    [
                      { key: "featured", label: "Featured", count: featuredProjects.length },
                      { key: "all", label: "All Projects", count: filtered.length },
                    ] as const
                  ).map((t) => (
                    <button
                      key={t.key}
                      onClick={() => void setActiveTab(t.key)}
                      className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${jetbrainsMono.className}`}
                      style={
                        tab === t.key
                          ? { borderColor: "var(--theme-primary)", color: "var(--theme-primary)" }
                          : { borderColor: "var(--hud-border)", color: "var(--hud-text-muted)" }
                      }
                    >
                      {t.label}
                      <span className="text-[10px] opacity-70">{t.count}</span>
                    </button>
                  ))}
                </div>
              )}

              <div ref={rowsRef}>
                {visible.map((project, i) => (
                  <div key={project._id} data-reveal-item>
                    <ProjectListRow
                      index={i + 1}
                      title={project.title}
                      description={project.description}
                      tags={[project.isAI ? "AI SYSTEM" : "WEB APP", ...(project.technologies?.slice(0, 1) ?? [])]}
                      imageUrl={project.image?.asset?.url}
                      href={project.link || project.code}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </div>

      <div className="relative z-10 border-t border-theme-border/30">
      </div>
    </div>
  );
};

const Projects = () => (
  <Suspense>
    <ProjectsContent />
  </Suspense>
);

export default Projects;
