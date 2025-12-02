"use client";

import { SOCIAL_LINKS } from "@/utils/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaMailBulk } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import React from "react";
import { inter, jetbrainsMono, unbounded } from "@/lib/fonts";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        // ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden px-4 md:px-8 bg-gradient-to-b from-theme-bg-primary via-theme-bg-secondary to-theme-bg-primary"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-theme-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-theme-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-theme-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-px theme-gradient-primary" />
              <span
                className={`text-sm font-medium text-theme-primary tracking-wider uppercase ${jetbrainsMono.className}`}
              >
                Let&apos;s Connect
              </span>
              <div className="w-8 h-px theme-gradient-secondary" />
            </div>
            <h2
              className={`text-4xl lg:text-5xl font-bold theme-text-gradient bg-clip-text text-transparent ${unbounded.className}`}
            >
              Get In Touch
            </h2>
            <p className="text-theme-text-muted max-w-2xl mx-auto">
              Ready to bring your next project to life? Let&apos;s discuss how
              we can work together.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative bg-theme-bg-secondary/40 backdrop-blur-sm rounded-2xl border border-theme-border/30 p-6 md:p-12 overflow-hidden group"
          >
            {/* Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-theme-primary/5 via-theme-secondary/5 to-theme-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 space-y-8">
              {/* Intro Text */}
              <motion.p
                variants={itemVariants}
                className="text-center text-theme-text-secondary text-lg leading-relaxed"
              >
                Have a project in mind or want to collaborate? I&apos;m always
                open to discussing new opportunities and creative ideas.
              </motion.p>

              {/* Social Links Grid */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex justify-center"
                  >
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link w-full"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center gap-3 p-4 bg-theme-bg-tertiary/30 rounded-xl border border-theme-border/30 hover:border-theme-primary/50 transition-all duration-300 group-hover/link:bg-theme-bg-tertiary/50"
                      >
                        <div className="p-3 rounded-full bg-theme-bg-hover/30 group-hover/link:bg-gradient-to-r from-theme-primary/20 to-theme-secondary/20 transition-all duration-300">
                          {React.cloneElement(social.icon, {
                            className:
                              "w-6 h-6 text-theme-text-secondary group-hover/link:text-theme-primary transition-colors duration-300",
                          })}
                        </div>
                        <span className={`text-sm font-medium text-theme-text-secondary group-hover/link:text-theme-text-primary transition-colors duration-300 ${unbounded.className}`}>
                          {social.name}
                        </span>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Email Section - FIXED FOR MOBILE */}
              <motion.div
                variants={itemVariants}
                className="text-center pt-8 border-t border-theme-border/50"
              >
                <p className="text-theme-text-muted text-sm mb-6">
                  Prefer email? Reach out directly at:
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-theme-bg-tertiary/30 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-theme-border/30 hover:border-theme-primary/50 transition-all duration-300 group/email w-full max-w-md mx-auto"
                >
                  <div className="p-2 rounded-full bg-gradient-to-r from-theme-primary/20 to-theme-secondary/20 flex-shrink-0">
                    <FaMailBulk className="w-5 h-5 text-theme-primary" />
                  </div>
                  <Link
                    href="mailto:amansoni53453@gmail.com"
                    className={`text-base sm:text-lg font-semibold text-theme-text-primary hover:text-theme-primary-light transition-colors duration-300 flex items-center gap-2 break-all text-center sm:text-left ${unbounded.className}`}
                  >
                    amansoni53453@gmail.com
                    <FiArrowUpRight className="w-4 h-4 opacity-0 group-hover/email:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* CTA */}
              <motion.div variants={itemVariants} className="text-center pt-6">
                <p className="text-theme-text-muted text-sm">
                  I typically respond within 24 hours
                </p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-theme-primary/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-theme-secondary/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
