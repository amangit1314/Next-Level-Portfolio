"use client";

import React, { useRef, useEffect } from "react";
import { PROJECTS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Inter, Poppins } from "next/font/google";
import { FiArrowRight, FiExternalLink, FiGithub } from "react-icons/fi";

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

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
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
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

  const stats = [
    { number: PROJECTS.length, label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-0 lg:pb-32 overflow-hidden px-4 md:px-0 bg-gradient-to-br from-black via-zinc-950 to-purple-950/20"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: bgY1 }}
          className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: bgY2 }}
          className="absolute bottom-1/3 -left-20 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-blue-600/5 rounded-full blur-3xl" />

        {/* Grid Pattern - Darker */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        {/* Dark overlay to ensure darkness */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {/* Enhanced Section Header */}
          <ProjectsHeader />

          {/* Enhanced Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="project-card group relative bg-zinc-900/80 backdrop-blur-md rounded-3xl border border-zinc-800/70 hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
                style={{
                  background: `
                    radial-gradient(
                      600px circle at var(--mouse-x) var(--mouse-y),
                      rgba(168, 85, 247, 0.08),
                      transparent 40%
                    ),
                    linear-gradient(135deg, rgba(9, 9, 11, 0.95) 0%, rgba(24, 24, 27, 0.85) 100%)
                  `,
                }}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent" />

                  {/* Project Number */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full border border-purple-500/30"
                  >
                    <span className="text-xs font-mono text-purple-400">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.div>

                  {/* Overlay Links */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.code && (
                      <motion.a
                        href={project.code}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-black/80 backdrop-blur-md rounded-lg border border-zinc-700/70 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <FiGithub className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-black/80 backdrop-blur-md rounded-lg border border-zinc-700/70 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <FiExternalLink className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-px bg-gradient-to-r from-purple-500 to-transparent" />
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                      Case Study
                    </span>
                  </div>

                  <h3
                    className={`text-2xl font-bold text-white ${poppins.className} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-gray-300/90 leading-relaxed ${inter.className}`}
                  >
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 bg-zinc-800/80 text-gray-300 rounded-lg border border-zinc-700/70 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300 text-sm font-medium backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {/* <motion.div className="pt-4" whileHover={{ x: 5 }}>
                    <Link
                      href={project.link || "#"}
                      className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                    >
                      <span>Explore Project</span>
                      <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </motion.div> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

const ProjectsHeader = () => {

  const stats = [
    { number: `${PROJECTS.length}+`, label: "Projects" },
    { number: "3+", label: "Years" },
    // { number: "50K+", label: "Lines of Code" },
    { number: "15+", label: "Technologies" },
  ];

  return (
    <section className="relative py-24 md:py-12 overflow-hidden bg-black">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgb(71, 85, 105, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(71, 85, 105, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "4rem 4rem",
          }}
        />
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/30 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/30 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/20 blur-[100px] rounded-full"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Enhanced Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <ol className="flex items-center space-x-3 text-sm backdrop-blur-sm bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <li>
                <a
                  href="/"
                  className="text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li className="text-neutral-600">→</li>
              <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium">
                Projects
              </li>
            </ol>
          </motion.nav>

          {/* Enhanced Title with Glitch Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
              <span className="inline-block bg-gradient-to-r pb-3 from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            {/* Decorative Underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full"
            />
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto mb-16 leading-relaxed"
          >
            Showcasing{" "}
            <span className="text-purple-400 font-semibold">
              {PROJECTS.length}+ projects
            </span>{" "}
            built over{" "}
            <span className="text-cyan-400 font-semibold">3 years</span> of
            professional development experience.
            <br className="hidden md:block" />
            <span className="text-neutral-400">
              From enterprise applications to innovative side projects.
            </span>
          </motion.p>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-100" />

                {/* Card Content */}
                <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
                  {/* Top Accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full" />

                  <motion.div
                    className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-200 mb-3"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>

                  <div className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
                    {stat.label}
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex flex-col items-center text-neutral-500 hover:text-purple-400 transition-colors cursor-pointer"
            >
              <span className="text-xs uppercase tracking-wider mb-2">
                Scroll to explore
              </span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
