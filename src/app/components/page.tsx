"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub, FiSearch, FiFilter } from "react-icons/fi";
import { client } from "@/sanity/lib/client";
import { componentsQuery } from "@/sanity/lib/queries";
import { unbounded, inter } from "@/lib/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ComponentCardSkeleton } from "@/components/skeletons/ComponentCardSkeleton";

interface Component {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  category: string;
  tags: string[];
  previewImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  difficulty: string;
  publishedAt: string;
}

const categories = [
  { value: "all", label: "All Components" },
  { value: "buttons", label: "Buttons" },
  { value: "forms", label: "Forms" },
  { value: "cards", label: "Cards" },
  { value: "navigation", label: "Navigation" },
  { value: "modals", label: "Modals" },
  { value: "animations", label: "Animations" },
  { value: "layout", label: "Layout" },
  { value: "data-display", label: "Data Display" },
  { value: "feedback", label: "Feedback" },
  { value: "other", label: "Other" },
];

const difficultyColors = {
  beginner: "from-green-500 to-emerald-500",
  intermediate: "from-yellow-500 to-orange-500",
  advanced: "from-red-500 to-pink-500",
};

const ComponentsPage = () => {
  const [components, setComponents] = useState<Component[]>([]);
  const [filteredComponents, setFilteredComponents] = useState<Component[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerRef = useRef<HTMLElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Fetch components from Sanity
  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const data = await client.fetch(componentsQuery);
        setComponents(data);
        setFilteredComponents(data);
      } catch (error) {
        console.error("Error fetching components:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComponents();
  }, []);

  // Filter components
  useEffect(() => {
    let filtered = components;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((comp) => comp.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (comp) =>
          comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          comp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          comp.tags?.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    setFilteredComponents(filtered);
  }, [selectedCategory, searchQuery, components]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  if (loading) {
    return (
      <>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <section className="relative min-h-screen py-24 lg:py-32 overflow-hidden bg-linear-to-br bg-theme-bg-primary via-theme-bg-secondary to-theme-bg-tertiary/80">
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="flex justify-center items-center max-w-5xl w-full mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {[...Array(6)].map((_, i) => (
                  <ComponentCardSkeleton key={i} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <section
        ref={containerRef}
        className="relative min-h-screen py-24 lg:py-32 overflow-hidden bg-linear-to-br bg-theme-bg-primary via-theme-bg-secondary to-theme-bg-tertiary/80"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y: bgY1 }}
            className="absolute top-1/4 -right-20 w-96 h-96 bg-theme-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            style={{ y: bgY2 }}
            className="absolute bottom-1/3 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
          <div className="absolute inset-0 bg-theme-bg-primary/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-theme-border-light bg-theme-bg-tertiary/50 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-primary"></span>
              </span>
              <p
                className={`text-sm font-mono text-theme-primary ${unbounded.className}`}
              >
                Component Library
              </p>
            </motion.div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-black text-theme-text-primary mb-6 ${unbounded.className}`}
            >
              <span className="theme-text-gradient bg-clip-text">
                UI Components
              </span>
            </h1>

            <p
              className={`text-xl text-theme-text-secondary max-w-3xl mx-auto mb-12 ${inter.className}`}
            >
              A collection of beautifully crafted, reusable React components.
              Copy, paste, and customize to build your next project faster.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              {/* Search */}
              <div className="flex-1 relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-theme-text-muted" />
                <input
                  type="text"
                  placeholder="Search components..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 bg-theme-bg-secondary border border-theme-border rounded-xl text-theme-text-primary placeholder-theme-text-muted focus:outline-none focus:border-theme-primary/50 transition-all ${inter.className}`}
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <FiFilter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-theme-text-muted pointer-events-none" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`pl-12 pr-8 py-3 bg-theme-bg-secondary border border-theme-border rounded-xl text-theme-text-primary focus:outline-none focus:border-theme-primary/50 transition-all cursor-pointer appearance-none ${inter.className}`}
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`mt-6 text-sm text-theme-text-muted ${inter.className}`}
            >
              Showing {filteredComponents.length} of {components.length}{" "}
              components
            </motion.p>
          </motion.div>

          {/* Components Grid */}
          <div className="flex justify-center items-center max-w-5xl w-ful mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredComponents.length === 0 ? (
                <div className="col-span-full text-center py-20">
                  <p
                    className={`text-xl text-theme-text-muted ${inter.className}`}
                  >
                    No components found. Try adjusting your filters.
                  </p>
                </div>
              ) : (
                filteredComponents.map((component) => (
                  <motion.div
                    key={component._id}
                    variants={itemVariants}
                    className="project-card group relative overflow-hidden rounded-3xl bg-linear-to-br from-theme-bg-secondary/90 via-theme-bg-secondary/50 to-theme-bg-secondary/90 backdrop-blur-xl border border-theme-border hover:border-theme-primary/50 transition-all duration-500"
                    style={{
                      background: `
                  radial-gradient(
                    600px circle at var(--mouse-x) var(--mouse-y),
                    rgba(var(--theme-primary-rgb), 0.06),
                    transparent 40%
                  ),
                  linear-gradient(135deg, rgba(var(--theme-bg-rgb), 0.9) 0%, rgba(var(--theme-bg-rgb), 0.7) 100%)
                `,
                    }}
                  >
                    {/* Animated border gradient */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <div className="absolute inset-[-2px] bg-gradient-to-r from-theme-primary via-transparent to-theme-secondary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700" />
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl">
                      <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
                    </div>

                    <Link href={`/components/${component.slug.current}`}>
                      <div className="relative bg-theme-bg-secondary backdrop-blur-md rounded-2xl border border-theme-border hover:border-theme-primary/50 transition-all duration-500 overflow-hidden h-full">

                        {/* Preview Image */}
                        <div className="relative h-48 overflow-hidden bg-theme-bg-primary">
                          {component.previewImage?.asset?.url && (
                            <Image
                              src={component.previewImage.asset.url}
                              alt={component.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-theme-bg-primary/90 to-transparent" />

                          {/* Difficulty Badge */}
                          {component.difficulty && (
                            <div className="absolute top-3 right-3">
                              <div
                                className={`px-3 py-1 rounded-full text-xs font-bold text-theme-text-primary bg-gradient-to-r ${difficultyColors[
                                  component.difficulty as keyof typeof difficultyColors
                                ] || "from-zinc-500 to-zinc-600"
                                  } capitalize ${unbounded.className}`}
                              >
                                {component.difficulty}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-px bg-gradient-to-r from-theme-primary to-transparent" />
                            <span
                              className={`text-xs text-theme-primary uppercase tracking-wider ${unbounded.className}`}
                            >
                              {component.category}
                            </span>
                          </div>

                          {/* group-hover:text-transparent group-hover:theme-text-gradient group-hover:bg-clip-text */}
                          <h3
                            className={`text-xl font-bold text-theme-text-primary  transition-all ${unbounded.className}`}
                          >
                            {component.title}
                          </h3>

                          <p
                            className={`text-theme-text-secondary text-sm line-clamp-2 ${inter.className}`}
                          >
                            {component.description}
                          </p>

                          {/* Tags */}
                          {component.tags && component.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-2">
                              {component.tags.slice(0, 3).map((tag, idx) => (
                                <span
                                  key={idx}
                                  className={`px-2 py-1 text-xs bg-theme-bg-tertiary/80 text-theme-text-secondary rounded-md ${inter.className}`}
                                >
                                  {tag}
                                </span>
                              ))}
                              {component.tags.length > 3 && (
                                <span
                                  className={`px-2 py-1 text-xs text-theme-text-muted ${inter.className}`}
                                >
                                  +{component.tags.length - 3} more
                                </span>
                              )}
                            </div>
                          )}

                          {/* View Details */}
                          <div className="pt-4">
                            <div
                              className={`inline-flex items-center gap-2 text-sm text-theme-primary group-hover:text-theme-primary-light transition-colors ${unbounded.className}`}
                            >
                              <span>View Details</span>
                              <FiExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))
              )}
            </motion.div>
          </div>


        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default ComponentsPage;
