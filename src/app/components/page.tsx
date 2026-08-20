"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useQueryState, parseAsString } from "nuqs";
import { motion } from "framer-motion";
import { FiSearch, FiX, FiHome, FiChevronRight } from "react-icons/fi";
import { client } from "@/sanity/lib/client";
import { componentsQuery } from "@/sanity/lib/queries";
import { inter, unbounded } from "@/lib/fonts";
import { ComponentCardSkeleton } from "@/components/skeletons/ComponentCardSkeleton";
import ComponentCard3D from "./_components/ComponentCard3D";

interface Component {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  category: string;
  tags: string[];
  previewImage?: { asset: { url: string } };
  difficulty: string;
  publishedAt: string;
}

const CATEGORIES = [
  { value: "all", label: "All" },
  { value: "buttons", label: "Buttons" },
  { value: "forms", label: "Forms" },
  { value: "cards", label: "Cards" },
  { value: "navigation", label: "Navigation" },
  { value: "modals", label: "Modals" },
  { value: "animations", label: "Animations" },
  { value: "layout", label: "Layout" },
  { value: "data-display", label: "Data Display" },
  { value: "feedback", label: "Feedback" },
];

const ComponentsContent = () => {
  const [components, setComponents] = useState<Component[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [searchQuery, setSearchQuery] = useQueryState("q", parseAsString.withDefault(""));
  const [selectedCategory, setSelectedCategory] = useQueryState("cat", parseAsString.withDefault("all"));

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const data = await client.fetch(componentsQuery);
        setComponents(data);
      } catch (error) {
        console.error("Error fetching components:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchComponents();
  }, []);

  const filtered = components.filter((c) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      c.title.toLowerCase().includes(q) ||
      c.description?.toLowerCase().includes(q) ||
      c.tags?.some((t) => t.toLowerCase().includes(q));
    const matchesCat = selectedCategory === "all" || c.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const clearFilters = () => {
    void setSearchQuery("");
    void setSelectedCategory("all");
  };

  if (loading) {
    return (
      <>
        <div className="min-h-screen bg-theme-bg-primary">
          <div className="max-w-7xl mx-auto px-4 pt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {[...Array(6)].map((_, i) => (
                <ComponentCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-theme-bg-primary relative overflow-x-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-48 right-1/4 w-[600px] h-[600px] bg-theme-secondary/7 blur-[170px] rounded-full" />
        <div className="absolute top-1/2 -left-24 w-[500px] h-[500px] bg-theme-primary/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-theme-accent/4 blur-[130px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <div className="relative pt-28 pb-12">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-theme-secondary/12 blur-[140px] rounded-full" />
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
              <span className={`text-theme-primary font-semibold ${unbounded.className}`}>Components</span>
            </motion.nav>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className={`text-5xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[1.4] mb-5 ${unbounded.className}`}
            >
              <span className="theme-text-gradient bg-clip-text text-transparent">Components</span>
            </motion.h1>

            {/* Subtitle + stats — subtitle left, stats pinned right */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
            >
              <p className={`text-theme-text-secondary text-base md:text-lg max-w-xs ${inter.className}`}>
                Copy-paste ready React components — accessible, animated, and themeable.
              </p>

              <div className="flex items-end gap-6 shrink-0">
                <div>
                  <div className={`text-3xl font-black text-theme-primary leading-[1.15] tabular-nums ${unbounded.className}`}>
                    {components.length}+
                  </div>
                  <div className={`text-[11px] text-theme-text-muted mt-1 ${inter.className}`}>Components</div>
                </div>
                <div className="w-px h-10 bg-theme-border/50 mb-0.5" />
                <div>
                  <div className={`text-3xl font-black text-theme-secondary leading-[1.15] tabular-nums ${unbounded.className}`}>
                    {CATEGORIES.length - 1}
                  </div>
                  <div className={`text-[11px] text-theme-text-muted mt-1 ${inter.className}`}>Categories</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Filter bar — search + pills in one row */}
        <motion.div
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
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`text-[11px] px-3 py-1.5 rounded-full border transition-all duration-200 ${unbounded.className} ${
                selectedCategory === cat.value
                  ? "border-theme-primary/70 bg-theme-primary/12 text-theme-primary"
                  : "border-theme-border/50 text-theme-text-muted hover:border-theme-primary/30 hover:text-theme-text-secondary bg-transparent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Result count */}
        <div className="mb-5 flex items-center gap-3">
          <span className={`text-sm text-theme-text-muted ${inter.className}`}>
            <span className={`text-theme-text-secondary font-semibold ${unbounded.className}`}>
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "component" : "components"}
          </span>
          {(searchQuery || selectedCategory !== "all") && (
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
              {searchQuery
                ? `No components match "${searchQuery}".`
                : "No components found."}
            </p>
          </motion.div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pb-24"
            style={{ perspective: "1200px" }}
          >
            {filtered.map((component, index) => (
              <ComponentCard3D key={component._id} component={component} index={index} />
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10 border-t border-theme-border/30">
      </div>
    </div>
  );
};

const ComponentsPage = () => (
  <Suspense>
    <ComponentsContent />
  </Suspense>
);

export default ComponentsPage;
