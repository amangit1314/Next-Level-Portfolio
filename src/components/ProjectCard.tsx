"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { unbounded } from "@/lib/fonts";

interface ProjectCardProps {
  index: number;
  project: Project;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { index, project } = props;

  const projectItem = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      key={index}
      variants={projectItem}
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

      <div className="relative flex flex-col lg:flex-row">
        {/* Enhanced Image Container */}
        <div className="lg:w-1/2 relative overflow-hidden h-64 md:h-80 lg:h-auto">
          <Link href={project.link || ""} className="relative block h-full">
            {/* Image wrapper with effects */}
            <div className="relative h-full overflow-hidden">
              <Image
                src={project.image?.asset?.url || "/placeholder.png"}
                width={800}
                height={500}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-linear-to-br from-theme-primary/20 via-transparent to-theme-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

              {/* Project number badge */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="absolute top-6 left-6 px-3 py-1 bg-theme-bg-primary/60 backdrop-blur-md rounded-full border border-theme-primary/30"
              >
                <span className="text-xs font-mono text-theme-primary">
                  #{String(index + 1).padStart(2, "0")}
                </span>
              </motion.div>
            </div>
          </Link>
        </div>

        {/* Enhanced Content */}
        <div className="p-8 lg:p-10 lg:w-1/2 flex flex-col justify-center relative">
          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 self-start"
          >
            <div className="h-px w-8 bg-gradient-to-r from-theme-primary to-transparent" />
            <span className="text-xs font-mono text-theme-primary uppercase tracking-wider">
              Case Study
            </span>
          </motion.div>

          <Link href={project.link || ""}>
            <motion.h3
              className={`text-3xl md:text-4xl font-bold text-theme-text-primary mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-theme-primary group-hover:to-theme-secondary group-hover:bg-clip-text transition-all duration-300 ${unbounded.className}`}
            >
              {project.title}
            </motion.h3>
          </Link>

          <p className="text-theme-text-secondary text-lg mb-8 leading-relaxed">
            {project.description}
          </p>

          {/* Enhanced Technologies */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies?.map((tech: string, techIndex: number) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * techIndex }}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`px-4 py-2 bg-linear-to-br from-theme-bg-tertiary/80 to-theme-bg-primary/80 text-theme-text-secondary rounded-xl border border-theme-border/50 hover:border-theme-primary/50 hover:text-theme-primary-light transition-all duration-300 text-xs font-medium backdrop-blur-sm ${unbounded.className}`}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          {/* <motion.div className="mt-auto" whileHover={{ x: 5 }}>
                    <Link
                      href={project.link}
                      className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                    >
                      <span>Explore Project</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:rotate-[-45deg]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </motion.div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
