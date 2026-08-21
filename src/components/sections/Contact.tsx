"use client";

import { SOCIAL_LINKS } from "@/constants/socialLinks";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaMailBulk } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import React from "react";
import { inter, jetbrainsMono, anton } from "@/lib/fonts";

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
      className="v2-section [background-color:var(--hud-bg)]"
    >
      <div className="absolute inset-0 pointer-events-none hud-grid-bg" />

      <div className="v2-container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8 sm:space-y-16"
        >
          {/* Section Header */}
          <motion.div className="text-center space-y-4">
            <div className="v2-label mb-4">
              <div className="v2-label-line" style={{ backgroundColor: "var(--hud-border)" }} />
              <span className={`v2-label-text ${jetbrainsMono.className} [color:var(--hud-text-muted)] uppercase tracking-widest`}>
                Wanna Say Hello?
              </span>
              <div className="v2-label-line" style={{ backgroundColor: "var(--hud-border)" }} />
            </div>
            <h2 className={`text-5xl sm:text-7xl uppercase leading-none [color:var(--hud-text-primary)] ${anton.className}`}>
              Get In Touch
            </h2>
            <div className="w-16 h-0.5 mx-auto rounded-full" style={{ backgroundColor: "var(--hud-border)" }} />
            <p className={`${jetbrainsMono.className} [color:var(--hud-text-muted)] max-w-2xl mx-auto`}>
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
            className="relative p-5 sm:p-8 md:p-12 overflow-hidden group border"
            style={{ backgroundColor: "var(--hud-bg-elevated)", borderColor: "var(--hud-border)" }}
          >

            <div className="relative z-10 space-y-5 sm:space-y-8">
              {/* Intro Text */}
              <motion.p
                variants={itemVariants}
                className={`text-center ${jetbrainsMono.className} text-sm sm:text-base leading-relaxed [color:var(--hud-text-muted)]`}
              >
                Have a project in mind or want to collaborate? I&apos;m always
                open to discussing new opportunities and creative ideas.
              </motion.p>

              {/* Social Links Grid */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4"
              >
                {SOCIAL_LINKS.map((social) => (
                  <motion.div
                    key={social.name}
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
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 border transition-all duration-300"
                        style={{ borderColor: "var(--hud-border)" }}
                      >
                        <div className="p-2 sm:p-3 rounded-full">
                          {React.cloneElement(social.icon, {
                            className: "w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 [color:var(--hud-text-muted)] group-hover/link:[color:var(--hud-text-primary)]",
                          })}
                        </div>
                        <span className={`text-xs sm:text-sm font-medium transition-colors duration-300 [color:var(--hud-text-muted)] group-hover/link:[color:var(--hud-text-primary)] ${jetbrainsMono.className} uppercase`}>
                          {social.name}
                        </span>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Email Section */}
              <motion.div
                variants={itemVariants}
                className="text-center pt-5 sm:pt-8 border-t"
                style={{ borderColor: "var(--hud-border)" }}
              >
                <p className={`${jetbrainsMono.className} text-sm mb-6 [color:var(--hud-text-muted)]`}>
                  Prefer email? Reach out directly at:
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex flex-row items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 border transition-all duration-300 group/email w-full max-w-md mx-auto"
                  style={{ borderColor: "var(--hud-border)" }}
                >
                  <div className="p-2 rounded-full flex-shrink-0">
                    <FaMailBulk className="w-5 h-5 [color:var(--hud-text-primary)]" />
                  </div>
                  <Link
                    href="mailto:amansoni53453@gmail.com"
                    className={`text-xs sm:text-base font-semibold transition-colors duration-300 flex items-center gap-2 break-all [color:var(--hud-text-primary)] ${jetbrainsMono.className}`}
                  >
                    amansoni53453@gmail.com
                    <FiArrowUpRight className="w-4 h-4 opacity-0 group-hover/email:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* CTA */}
              <motion.div variants={itemVariants} className="text-center pt-6">
                <p className={`text-sm [color:var(--hud-text-muted)] ${jetbrainsMono.className}`}>
                  I typically respond within 24 hours
                </p>
              </motion.div>
            </div>

            {/* Decorative corner brackets — technical HUD framing detail */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: "var(--hud-text-muted)" }} />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: "var(--hud-text-muted)" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
