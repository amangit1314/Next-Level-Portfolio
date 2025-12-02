"use client";

import { poppins } from "@/lib/fonts";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiCoffee,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiArrowUp,
} from "react-icons/fi";
import { SiNextdotjs, SiVercel } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/amansoni53453",
      icon: FiGithub,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/amansoni53453",
      icon: FiLinkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/amansoni53453",
      icon: FiTwitter,
    },
    {
      name: "Email",
      url: "mailto:amansoni53453@gmail.com",
      icon: FiMail,
    },
  ];

  // Safe animation variants
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
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-theme-bg-secondary to-theme-bg-primary border-t border-theme-border/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-64 h-64 bg-theme-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-theme-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-12"
        >
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              <h3 className={`${poppins.className} text-2xl font-bold theme-text-gradient bg-clip-text text-transparent`}>
                Let&apos;s Build Something Amazing
              </h3>
              <p className="text-theme-text-muted max-w-md leading-relaxed">
                Passionate full-stack developer crafting digital experiences
                with modern technologies and creative solutions.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-theme-bg-secondary/50 backdrop-blur-sm rounded-xl border border-theme-border/50 hover:border-theme-primary/50 text-theme-text-muted hover:text-theme-text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className={`${poppins.className} text-lg font-semibold text-theme-text-primary`}>Quick Links</h4>
            <div className="space-y-3">
              {[
                { name: "Home", path: "#home" },
                { name: "About", path: "#about" },
                { name: "Projects", path: "#projects" },
                { name: "Experience", path: "#experience" },
                { name: "Contact", path: "#contact" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.path);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="block text-theme-text-muted hover:text-theme-text-primary transition-all duration-300 text-left hover:translate-x-1 transform "
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className={`${poppins.className} text-lg font-semibold text-theme-text-primary`}>Built With</h4>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 p-3 bg-theme-bg-secondary/50 backdrop-blur-sm rounded-xl border border-theme-border/50 hover:scale-105 transition-transform duration-300">
                <SiNextdotjs className="w-6 h-6 text-theme-text-primary" />
                <span className="text-sm text-theme-text-secondary">Next.js</span>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-theme-bg-secondary/50 backdrop-blur-sm rounded-xl border border-theme-border/50 hover:scale-105 transition-transform duration-300">
                <SiVercel className="w-6 h-6 text-theme-text-primary" />
                <span className="text-sm text-theme-text-secondary">Vercel</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-theme-border/50 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-theme-text-muted text-sm">
              <span>&copy; {currentYear} Aman Soni. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <FiHeart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>and</span>
                <FiCoffee className="w-4 h-4 text-amber-500" />
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-theme-bg-secondary/50 backdrop-blur-sm rounded-xl border border-theme-border/50 hover:border-theme-primary/50 text-theme-text-muted hover:text-theme-text-primary transition-all duration-300 hover:scale-105"
            >
              <span className={`${poppins.className} text-xs`}>Back to Top</span>
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
