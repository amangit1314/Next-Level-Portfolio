"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useQueryState, parseAsString } from "nuqs";
import { motion } from "framer-motion";
import { FiSearch, FiX } from "react-icons/fi";
import { client } from "@/sanity/lib/client";
import { componentsQuery } from "@/sanity/lib/queries";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { ComponentListRowSkeleton } from "@/components/skeletons/ComponentListRowSkeleton";
import { ComponentListRow } from "./_components/ComponentListRow";
import { HudPageTitle } from "@/components/layout/hud/HudPageTitle";
import { HudScrollSlider } from "@/components/layout/hud/HudScrollSlider";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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

  const rowsRef = useRef<HTMLDivElement>(null);
  useScrollReveal(rowsRef, "stagger-rows", { deps: [filtered.length] });

  const clearFilters = () => {
    void setSearchQuery("");
    void setSelectedCategory("all");
  };

  if (loading) {
    return (
      <div className="min-h-screen [background-color:var(--hud-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32">
          <HudPageTitle title="COMPONENTS" breadcrumb={["HOME", "COMPONENTS"]} />
          <div className="mt-8">
            {[...Array(6)].map((_, i) => (
              <ComponentListRowSkeleton key={i} />
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
        <HudPageTitle title="COMPONENTS" breadcrumb={["HOME", "COMPONENTS"]} />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 space-y-3"
        >
          <div className="relative w-full sm:w-48">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none [color:var(--hud-text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search components..."
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

          <div className="flex overflow-x-auto scrollbar-none gap-2 -mx-4 sm:mx-0 px-4 sm:px-0 pb-1 sm:flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`shrink-0 text-[11px] px-3 py-1.5 border transition-all duration-200 uppercase tracking-wide ${jetbrainsMono.className}`}
                style={
                  selectedCategory === cat.value
                    ? { borderColor: "var(--hud-text-primary)", color: "var(--hud-text-primary)" }
                    : { borderColor: "var(--hud-border)", color: "var(--hud-text-muted)" }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mb-5 flex items-center gap-3">
          <span className={`text-sm ${inter.className} [color:var(--hud-text-muted)]`}>
            <span className={`font-semibold ${jetbrainsMono.className} [color:var(--hud-text-primary)]`}>
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "component" : "components"}
          </span>
          {(searchQuery || selectedCategory !== "all") && (
            <button
              onClick={clearFilters}
              className={`text-xs hover:underline underline-offset-2 uppercase tracking-wide ${jetbrainsMono.className} [color:var(--hud-text-primary)]`}
            >
              Clear
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-24 text-center">
            <p className={`${inter.className} [color:var(--hud-text-muted)]`}>
              {searchQuery ? `No components match "${searchQuery}".` : "No components found."}
            </p>
          </motion.div>
        ) : (
          <div ref={rowsRef} className="pb-24">
            {filtered.map((component, i) => (
              <div key={component._id} data-reveal-item>
                <ComponentListRow
                  index={i + 1}
                  slug={component.slug.current}
                  title={component.title}
                  description={component.description}
                  category={component.category}
                  difficulty={component.difficulty}
                  imageUrl={component.previewImage?.asset?.url}
                />
              </div>
            ))}
          </div>
        )}
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
