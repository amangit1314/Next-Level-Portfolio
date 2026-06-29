"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiExternalLink,
  FiCalendar,
  FiArrowRight,
} from "react-icons/fi";
import { inter, unbounded } from "@/lib/fonts";
import { client } from "@/sanity/lib/client";
import { experiencesQuery } from "@/sanity/lib/queries";

const floatingVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      // ease: "easeInOut",
    },
  },
};

const Experience = () => {
  const [experiences, setExperiences] = useState<any[]>([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const data = await client.fetch(experiencesQuery);
      setExperiences(data);
    };
    fetchExperiences();
  }, []);

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
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        // ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      id="experience"
      className="v2-section bg-theme-bg-primary"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="v2-grid-bg absolute inset-0" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-theme-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="v2-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="v2-label">
              <div className="v2-label-line" />
              <span className={`v2-label-text ${unbounded.className}`}>Career</span>
              <div className="v2-label-line" />
            </div>
            <h2 className={`text-4xl sm:text-5xl font-black text-theme-text-primary ${unbounded.className}`}>
              Professional Experience
            </h2>
            <div className="w-16 h-0.5 theme-gradient-primary mx-auto rounded-full" />
          </motion.div>

          {/* Enhanced Timeline */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-theme-primary via-theme-secondary to-transparent origin-top"
            />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? "lg:flex-row-reverse" : ""
                    } gap-8 lg:gap-16 items-start`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="absolute left-6 lg:left-1/2 top-8 -translate-x-1/2 w-5 h-5 rounded-full theme-gradient-primary border-4 border-theme-bg-primary z-20 shadow-lg shadow-theme-primary/30"
                  >
                  </motion.div>

                  {/* Enhanced Experience Card */}
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      },
                    }}
                    className={`group relative flex-1 bg-theme-bg-secondary/40 backdrop-blur-md rounded-3xl border border-theme-border/50 hover:border-theme-primary/50 p-8 lg:p-10 transition-all duration-500 ${index % 2 === 0 ? "lg:mr-16" : "lg:ml-16"
                      }`}
                  >
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-theme-primary/5 via-theme-secondary/5 to-theme-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-theme-primary/10 via-theme-secondary/10 to-theme-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                    <div className="relative z-10 space-y-8">
                      {/* Enhanced Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-3 h-3 theme-gradient-primary rounded-full flex-shrink-0" />
                            <h3
                              className={`text-2xl lg:text-3xl font-black text-theme-primary group-hover:theme-text-gradient bg-clip-text text-transparent transition-all duration-500 ${unbounded.className}`}
                            >
                              {experience.role}
                            </h3>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Link
                              href={experience.companyLink || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link inline-flex items-center space-x-3 text-theme-primary hover:text-theme-secondary transition-all duration-300"
                            >
                              <span
                                className={`font-bold text-lg ${unbounded.className}`}
                              >
                                {experience.company}
                              </span>
                              <FiExternalLink className="w-5 h-5 group-hover/link:scale-110 group-hover/link:translate-x-0.5 transition-transform duration-300" />
                            </Link>
                          </div>
                        </div>

                        {/* <div className="flex flex-col sm:flex-row gap-4 text-sm">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-3 px-4 py-2 bg-theme-primary/10 border border-theme-primary/20 rounded-xl"
                          >
                            <FiCalendar className="w-4 h-4 text-theme-primary" />
                            <span
                              className={`text-theme-primary-light font-semibold ${unbounded.className}`}
                            >
                              {experience.year}
                            </span>
                          </motion.div>
                        </div> */}
                      </div>

                      {/* Enhanced Description */}
                      <motion.p
                        className={`text-theme-text-secondary/90 leading-relaxed text-lg ${inter.className}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {experience.description}
                      </motion.p>

                      {/* Enhanced Technologies */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 theme-gradient-primary rounded-full" />
                          <h4
                            className={`text-sm font-bold text-theme-primary uppercase tracking-wider ${unbounded.className}`}
                          >
                            Technologies Used
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {experience.technologies?.map((tech: string, techIndex: number) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.4,
                                delay: index * 0.05 + techIndex * 0.1,
                              }}
                              whileHover={{
                                scale: 1.1,
                                y: -2,
                                transition: { type: "spring", stiffness: 400 },
                              }}
                              className={`px-4 py-2 text-sm font-semibold bg-theme-bg-tertiary/50 text-theme-text-secondary rounded-xl border border-theme-border/30 hover:border-theme-primary/50 hover:bg-theme-primary/10 hover:text-theme-primary-light transition-all duration-300 cursor-default backdrop-blur-sm ${unbounded.className}`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>

                  {/* Year Indicator for Desktop */}
                  <div
                    className={`hidden lg:flex flex-1 items-center justify-center ${index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                      }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`px-6 py-3 bg-gradient-to-r from-theme-primary/10 to-theme-secondary/10 border border-theme-primary/20 rounded-2xl backdrop-blur-sm ${index % 2 === 0 ? "text-left" : "text-right"
                        }`}
                    >
                      <div
                        className={`${unbounded.className} text-sm  font-black theme-text-gradient bg-clip-text text-transparent `}
                      >
                        {experience.year}
                      </div>
                      <div className="text-sm text-theme-text-muted font-medium">
                        Duration
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <motion.div variants={itemVariants} className="text-center pt-12">
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-theme-primary/10 via-theme-secondary/10 to-theme-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-theme-bg-secondary/40 backdrop-blur-md rounded-3xl border border-theme-border/50 hover:border-theme-primary/30 p-12 transition-all duration-500">
                <h3
                  className={`text-3xl lg:text-4xl font-black text-theme-text-primary mb-6 ${unbounded.className}`}
                >
                  Ready to Build Something{" "}
                  <span className="theme-text-gradient bg-clip-text text-transparent">
                    Amazing?
                  </span>
                </h3>
                <p
                  className={`text-theme-text-muted/90 text-lg mb-8 max-w-md mx-auto ${inter.className}`}
                >
                  Let&apos;s discuss how my experience can help bring your next
                  project to life.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="group/cta relative inline-flex items-center space-x-4 px-8 py-4 theme-gradient-accent rounded-2xl font-bold text-theme-text-primary shadow-2xl hover:shadow-theme-primary/30 transition-all duration-500 overflow-hidden"
                  >
                    {/* More Consistent Shine */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      <div className="absolute top-0 -left-10 w-8 h-full bg-white/20 skew-x-12 transition-all duration-700 ease-out group-hover/cta:left-[120%]" />
                    </div>

                    <span
                      className={`text-lg ${unbounded.className} relative z-10 text-white`}
                    >
                      Let&apos;s Work Together
                    </span>
                    <FiArrowRight className="w-5 h-5 text-white relative z-10 group-hover/cta:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
