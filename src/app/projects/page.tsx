"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { client } from "@/sanity/lib/client";
import { projectsQuery, profileQuery } from "@/sanity/lib/queries";
import { unbounded, inter } from "@/lib/fonts";
import Header from "@/components/Header";
import { ProfileStats } from "@/types/profile-stats";
import ProjectsHeader from "./_components/ProjectsHeader";
import Footer from "@/components/Footer";
import { ProjectCardSkeleton } from "@/components/skeletons/ProjectCardSkeleton";
import SearchFilter from "@/components/SearchFilter";

interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: {
    asset: {
      url: string;
    };
  };
  link?: string;
  code?: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [stats, setStats] = useState<ProfileStats>({});
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const containerRef = useRef<HTMLElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Handle mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fetch data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, profileData] = await Promise.all([
          client.fetch(projectsQuery),
          client.fetch(profileQuery),
        ]);
        setProjects(projectsData);
        setStats(profileData?.stats || {});
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  // Mouse tracking for gradient effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".project-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (loading) {
    return (
      <>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-theme-bg-primary via-theme-bg-secondary to-theme-bg-tertiary/80">
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
            <div className="flex justify-center items-center max-w-5xl w-full mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                {[...Array(4)].map((_, i) => (
                  <ProjectCardSkeleton key={i} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-linear-to-br from-theme-bg-primary via-theme-bg-secondary to-theme-bg-tertiary/80"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: bgY1 }}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-theme-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: bgY2 }}
          className="absolute bottom-1/3 -left-20 w-80 h-80 bg-theme-secondary/10 rounded-full blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-theme-primary/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-theme-bg-primary/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <div className="mt-10" />
          {/* Enhanced Section Header */}
          <ProjectsHeader projectCount={projects.length} stats={stats} />

          {/* Search and Filter */}
          <SearchFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={Array.from(new Set(projects.flatMap(p => p.technologies || []))).sort()}
            placeholder="Search projects..."
          />

          {/* Enhanced Projects Grid */}
          <div className="flex justify-center items-center max-w-5xl w-full mx-auto">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {projects
                .filter((project) => {
                  const matchesSearch = project.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());
                  const matchesCategory =
                    selectedCategory === "All" ||
                    project.technologies?.includes(selectedCategory);
                  return matchesSearch && matchesCategory;
                })
                .map((project, index) => (
                  <motion.div
                    key={project._id}
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

                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      {project.image?.asset?.url && (
                        <Image
                          src={project.image.asset.url}
                          alt={project.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-theme-bg-primary/90 via-theme-bg-primary/40 to-transparent" />

                      {/* Project Number */}
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="absolute top-4 left-4 px-3 py-1 bg-theme-bg-primary/80 backdrop-blur-md rounded-full border border-theme-primary/30"
                      >
                        <span
                          className={`text-xs font-mono text-theme-primary ${unbounded.className}`}
                        >
                          #{String(index + 1).padStart(2, "0")}
                        </span>
                      </motion.div>

                      {/* Overlay Links */}
                      <div className="absolute top-4 right-4 flex gap-2 group-hover:z-50">
                        {project.code && (
                          <motion.a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="p-2 bg-theme-bg-primary/80 backdrop-blur-md rounded-lg border border-theme-border hover:border-theme-primary/50 transition-all duration-300"
                          >
                            <FiGithub className="w-4 h-4 text-theme-text-primary" />
                          </motion.a>
                        )}
                        {project.link && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="p-2 bg-theme-bg-primary/80 backdrop-blur-md rounded-lg border border-theme-border hover:border-theme-primary/50 transition-all duration-300"
                          >
                            <FiExternalLink className="w-4 h-4 text-theme-text-primary" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4 group-hover:text-white overflow-hidden">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-px bg-gradient-to-r from-theme-primary to-transparent group-hover:text-white" />
                        <span
                          className={`text-xs font-mono text-theme-primary uppercase tracking-wider group-hover:text-white ${unbounded.className}`}
                        >
                          Case Study
                        </span>
                      </div>

                      <h3
                        className={`text-2xl font-bold text-theme-text-primary group-hover:text-white ${unbounded.className} group-hover:text-transparent group-hover:theme-text-gradient group-hover:bg-clip-text transition-all duration-300`}
                      >
                        {project.title}
                      </h3>

                      <p
                        className={`text-theme-text-secondary/90 group-hover:text-white leading-relaxed ${inter.className}`}
                      >
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies?.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className={`px-3 py-1 bg-theme-bg-tertiary/80 text-theme-text-secondary rounded-lg border border-theme-border hover:border-theme-primary/50 hover:text-theme-primary-light transition-all duration-300 text-sm font-medium backdrop-blur-sm ${unbounded.className}`}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>

          {/* Footer */}
          <Footer />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
