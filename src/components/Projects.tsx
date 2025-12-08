import React, { useRef, useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import { poppins } from "@/lib/fonts";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  // const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end start"],
  // });

  const containerRef = useRef<HTMLElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollYProgress } = useScroll({
    // on the server this will be `false`, so target = undefined
    // target: isClient ? containerRef : undefined,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await client.fetch(projectsQuery);
      setProjects(data);
    };
    fetchProjects();
  }, []);

  // Parallax transforms for background elements
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };



  const glowPulse = {
    initial: { opacity: 0.3 },
    animate: {
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        // ease: "easeInOut",
      },
    },
  };

  // Mouse tracking for gradient effect
  useEffect(() => {
    const handleMouseMove = (e: any) => {
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

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-20 px-4 md:px-8 md:py-32 bg-gradient-to-b from-theme-bg-primary via-theme-bg-secondary to-theme-bg-primary overflow-hidden"
    >
      {/* Advanced animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          style={{ y: bgY1 }}
          className="absolute top-0 left-1/4 w-96 h-96"
        >
          <motion.div
            variants={glowPulse}
            initial="initial"
            animate="animate"
            className="w-full h-full rounded-full bg-theme-primary/30 blur-[100px]"
          />
        </motion.div>

        <motion.div
          style={{ y: bgY2 }}
          className="absolute bottom-0 right-1/4 w-96 h-96"
        >
          <motion.div
            variants={glowPulse}
            initial="initial"
            animate="animate"
            className="w-full h-full rounded-full bg-theme-secondary/30 blur-[100px]"
            style={{ animationDelay: "1.5s" }}
          />
        </motion.div>

        {/* Rotating gradient ring */}
        <motion.div
          style={{ rotate: bgRotate }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        >
          <div className="w-full h-full rounded-full border border-theme-primary/10 bg-gradient-to-r from-theme-primary/5 via-transparent to-theme-secondary/5" />
        </motion.div>

        {/* Grid pattern overlay */}
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E')] opacity-50" /> */}
        <div className='absolute inset-0 bg-[url(&apos;data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E&apos;)] opacity-50' />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-theme-primary/20 bg-theme-primary/5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-primary"></span>
            </span>
            <p className="text-sm font-mono text-theme-primary">
              Portfolio Showcase
            </p>
          </motion.div>

          <motion.h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-theme-text-primary mb-6">
            <span className={`theme-text-gradient bg-clip-text text-transparent ${poppins.className}`}>
              Featured Projects
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg text-theme-text-muted"
          >
            Crafting digital experiences with modern technologies and creative
            solutions
          </motion.p>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-10 md:gap-16"
        >
          {projects.slice(0, 4).map((project, index) => (
            <ProjectCard key={`project_${index}`} index={index} project={project} />
          ))}
        </motion.div>

        {/* Enhanced View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="/projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-2xl bg-linear-to-br from-theme-bg-secondary to-theme-bg-tertiary border border-theme-primary/30 hover:border-theme-primary/50 transition-all duration-500"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-theme-primary/0 via-theme-primary/20 to-theme-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            <span className={`relative text-xs font-medium text-theme-primary group-hover:text-theme-primary-light ${poppins.className}`}>
              Discover All Projects
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="relative w-5 h-5 text-theme-primary group-hover:text-theme-primary-light transition-all duration-300 group-hover:translate-x-1"
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