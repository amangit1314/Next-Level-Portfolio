import React from "react";
import { PROJECTS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Project = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  const glowVariant = {
    initial: { opacity: 0, scale: 0.95 },
    hover: { opacity: 0.3, scale: 1.02 },
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b bg-transparent overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-600 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-cyan-600 blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base text-purple-400 font-mono mb-2">
            My Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400">
            Here are some of my selected projects with case studies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 md:gap-12"
        >
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              variants={projectItem}
              whileHover="hover"
              className="group relative overflow-hidden rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-purple-400/30 transition-all duration-300"
            >
              {/* Glossy overlay effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[linear-gradient(110deg,_transparent_0%,_rgba(192,132,252,0.03)_20%,_transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Glow effect container */}
              <motion.div
                variants={glowVariant}
                className="absolute inset-0 rounded-2xl bg-purple-500/20 pointer-events-none"
              />

              <div className="flex flex-col md:flex-row h-full">
                {/* Image */}
                <div className="md:w-1/2 lg:w-2/5 relative overflow-hidden">
                  <Link href={project.link} className="relative block h-full">
                    <Image
                      src={project.image}
                      width={800}
                      height={500}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 md:w-1/2 lg:w-3/5 flex flex-col justify-center relative z-10">
                  <div className="mb-4 flex items-center space-x-2">
                    <span className="text-xs font-mono text-neutral-400">
                      Project {index + 1}
                    </span>
                  </div>

                  <Link href={project.link}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-neutral-400 mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="text-xs font-mono px-3 py-1 bg-neutral-900 text-neutral-300 rounded-full border border-neutral-700 hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(192, 132, 252, 0.1)",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <div className="mt-auto">
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 group/link transition-colors"
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-purple-400 text-purple-400 rounded-full hover:bg-purple-400/10 transition-all duration-300 font-medium"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};