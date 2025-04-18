import { EXPERIENCES } from "@/utils/constants";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Experience = () => {
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

  const experienceItem = {
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
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base text-pink-400 font-mono mb-2">
            Career Timeline
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400">
            My journey through the tech industry
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative space-y-12"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-[calc(25%)] top-0 h-full w-0.5 bg-gradient-to-b from-purple-500/20 via-purple-500/50 to-purple-500/20"></div>

          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              variants={experienceItem}
              whileHover="hover"
              className="relative pl-12 md:pl-0 md:pr-16 md:py-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-[calc(25%-8px)] top-8 w-5 h-5 rounded-full bg-purple-500 border-4 border-neutral-950 z-10"></div>

              {/* Glow effect container */}
              <motion.div
                variants={glowVariant}
                className="absolute inset-0 rounded-xl bg-purple-500/20 pointer-events-none"
              />

              <div className="flex flex-col md:flex-row gap-6">
                {/* Year */}
                <div className="md:w-1/4 md:pr-8 md:text-right">
                  <p className="text-sm font-mono text-pink-400 mt-0">
                    {experience.year}
                  </p>
                </div>

                {/* Content card */}
                <div className="relative md:w-3/4 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6 space-y-4 group hover:border-pink-400/30 transition-all duration-300 md:ml-8">
                  <h3 className="text-xl font-bold text-white">
                    {experience.role}
                    <span className="text-xs font-normal text-pink-300 block md:inline">
                      {" "}@{" "}
                      <Link
                        href={experience.companyLink}
                        className="hover:text-pink-400 transition-colors underline underline-offset-4 decoration-pink-400/30 hover:decoration-pink-400/70"
                      >
                        {experience.company}
                      </Link>
                    </span>
                  </h3>

                  <p className="text-neutral-400">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="text-xs font-mono px-3 py-1 bg-neutral-900 text-neutral-300 rounded-full border border-neutral-700 hover:border-pink-400 hover:text-pink-400 transition-all duration-300"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(45, 212, 191, 0.1)",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
