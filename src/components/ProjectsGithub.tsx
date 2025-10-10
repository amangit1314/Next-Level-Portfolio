// import React from "react";
// import { PROJECTS } from "@/utils/constants";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export const Project = () => {
//   // Animation variants
//   const container = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const projectItem = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//     hover: {
//       y: -5,
//       transition: { duration: 0.2 },
//     },
//   };

//   const glowVariant = {
//     initial: { opacity: 0, scale: 0.95 },
//     hover: { opacity: 0.3, scale: 1.02 },
//   };

//   return (
//     <section className="relative py-16 md:py-24 bg-gradient-to-b bg-transparent overflow-hidden">
//       {/* Background glow elements */}
//       <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
//         <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-600 blur-3xl"></div>
//         <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-cyan-600 blur-3xl"></div>
//       </div>

//       <div className="container px-4 mx-auto relative">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-center mb-16"
//         >
//           <p className="text-sm md:text-base text-purple-400 font-mono mb-2">
//             My Work
//           </p>
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
//             Featured Projects
//           </h2>
//           <p className="max-w-2xl mx-auto text-neutral-400">
//             Here are some of my selected projects with case studies
//           </p>
//         </motion.div>

//         {/* Projects Grid */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 gap-8 md:gap-12"
//         >
//           {PROJECTS.map((project, index) => (
//             <motion.div
//               key={index}
//               variants={projectItem}
//               whileHover="hover"
//               className="group relative overflow-hidden rounded-2xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:border-purple-400/30 transition-all duration-300"
//             >
//               {/* Glossy overlay effect */}
//               <div className="absolute inset-0 pointer-events-none">
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
//                 <div className="absolute inset-0 bg-[linear-gradient(110deg,_transparent_0%,_rgba(192,132,252,0.03)_20%,_transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               </div>

//               {/* Glow effect container */}
//               <motion.div
//                 variants={glowVariant}
//                 className="absolute inset-0 rounded-2xl bg-purple-500/20 pointer-events-none"
//               />

//               <div className="flex flex-col md:flex-row h-full">
//                 {/* Image */}
//                 <div className="md:w-1/2 lg:w-2/5 relative overflow-hidden">
//                   <Link href={project.link} className="relative block h-full">
//                     <Image
//                       src={project.image}
//                       width={800}
//                       height={500}
//                       alt={project.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </Link>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 md:p-8 md:w-1/2 lg:w-3/5 flex flex-col justify-center relative z-10">
//                   <div className="mb-4 flex items-center space-x-2">
//                     <span className="text-xs font-mono text-neutral-400">
//                       Project {index + 1}
//                     </span>
//                   </div>

//                   <Link href={project.link}>
//                     <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
//                       {project.title}
//                     </h3>
//                   </Link>

//                   <p className="text-neutral-400 mb-6">
//                     {project.description}
//                   </p>

//                   {/* Technologies */}
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {project.technologies.map((tech, techIndex) => (
//                       <motion.span
//                         key={techIndex}
//                         className="text-xs font-mono px-3 py-1 bg-neutral-900 text-neutral-300 rounded-full border border-neutral-700 hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
//                         whileHover={{
//                           scale: 1.1,
//                           backgroundColor: "rgba(192, 132, 252, 0.1)",
//                         }}
//                       >
//                         {tech}
//                       </motion.span>
//                     ))}
//                   </div>

//                   {/* View Project Button */}
//                   <div className="mt-auto">
//                     <Link
//                       href={project.link}
//                       className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 group/link transition-colors"
//                     >
//                       View Project
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                         className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* View All Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           className="text-center mt-16"
//         >
//           <Link
//             href="/projects"
//             className="inline-flex items-center px-6 py-3 border border-purple-400 text-purple-400 rounded-full hover:bg-purple-400/10 transition-all duration-300 font-medium"
//           >
//             View All Projects
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//               className="w-4 h-4 ml-2"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

/// =========================================================================================
import React, { useRef, useEffect } from "react";
import { PROJECTS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export const Project = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

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

  const projectItem = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // Custom easing
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
        ease: "easeInOut",
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
      className="relative py-20 px-4 md:px-8 md:py-32 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden"
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
            className="w-full h-full rounded-full bg-purple-600/30 blur-[100px]"
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
            className="w-full h-full rounded-full bg-cyan-500/30 blur-[100px]"
            style={{ animationDelay: "1.5s" }}
          />
        </motion.div>

        {/* Rotating gradient ring */}
        <motion.div
          style={{ rotate: bgRotate }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        >
          <div className="w-full h-full rounded-full border border-purple-500/10 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5" />
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
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <p className="text-sm font-mono text-purple-400">
              Portfolio Showcase
            </p>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg text-neutral-400"
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
          {PROJECTS.slice(0, 4).map((project, index) => (
            <motion.div
              key={index}
              variants={projectItem}
              className="project-card group relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900/90 via-neutral-900/50 to-neutral-900/90 backdrop-blur-xl border border-neutral-800 hover:border-purple-500/50 transition-all duration-500"
              style={{
                background: `
                  radial-gradient(
                    600px circle at var(--mouse-x) var(--mouse-y),
                    rgba(168, 85, 247, 0.06),
                    transparent 40%
                  ),
                  linear-gradient(135deg, rgba(17, 17, 17, 0.9) 0%, rgba(17, 17, 17, 0.7) 100%)
                `,
              }}
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-[-2px] bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700" />
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
              </div>

              <div className="relative flex flex-col lg:flex-row">
                {/* Enhanced Image Container */}
                <div className="lg:w-1/2 relative overflow-hidden h-64 md:h-80 lg:h-auto">
                  <Link href={project.link} className="relative block h-full">
                    {/* Image wrapper with effects */}
                    <div className="relative h-full overflow-hidden">
                      <Image
                        src={project.image}
                        width={800}
                        height={500}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />

                      {/* Overlay effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                      {/* Project number badge */}
                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 * index, duration: 0.5 }}
                        className="absolute top-6 left-6 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-purple-500/30"
                      >
                        <span className="text-xs font-mono text-purple-400">
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
                    <div className="h-px w-8 bg-gradient-to-r from-purple-500 to-transparent" />
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                      Case Study
                    </span>
                  </motion.div>

                  <Link href={project.link}>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Enhanced Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * techIndex }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 text-neutral-300 rounded-xl border border-neutral-700/50 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300 text-sm font-medium backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Enhanced CTA Button */}
                  <motion.div className="mt-auto" whileHover={{ x: 5 }}>
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
                  </motion.div>
                </div>
              </div>
            </motion.div>
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
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            <span className="relative text-lg font-medium text-purple-400 group-hover:text-purple-300">
              Discover All Projects
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="relative w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-all duration-300 group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};


/// =========================================================================================

