"use client";

// import React from "react";
// import { PROJECTS } from "@/utils/constants";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function ProjectsPage() {
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
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   const stats = [
//     { number: PROJECTS.length, label: "Projects Completed" },
//     { number: "3+", label: "Years Experience" },
//     { number: "15+", label: "Technologies" },
//     { number: "100%", label: "Client Satisfaction" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black">
//       {/* Header Section */}
//       <section className="relative py-20 md:py-32 overflow-hidden">
//         {/* Background Effects */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full" />
//           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full" />
//         </div>

//         <div className="container px-4 mx-auto relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             {/* Breadcrumb */}
//             <nav className="flex justify-center mb-6">
//               <ol className="flex items-center space-x-2 text-sm text-neutral-400">
//                 <li>
//                   <Link href="/" className="hover:text-purple-400 transition-colors">
//                     Home
//                   </Link>
//                 </li>
//                 <li className="text-neutral-600">/</li>
//                 <li className="text-purple-400">Projects</li>
//               </ol>
//             </nav>

//             {/* Main Title */}
//             <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
//               <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
//                 Projects
//               </span>
//             </h1>

//             {/* Subtitle */}
//             <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed">
//               Showcasing {PROJECTS.length}+ projects built over 3 years of professional development experience.
//               From enterprise applications to innovative side projects.
//             </p>

//             {/* Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 + index * 0.1 }}
//                   className="text-center"
//                 >
//                   <div className="text-2xl md:text-3xl font-bold text-white mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-sm text-neutral-400">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Projects Grid Section */}
//       <section className="relative py-20">
//         <div className="container px-4 mx-auto">
//           {/* Filters */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-wrap justify-center gap-4 mb-16"
//           >
//             <button className="px-6 py-3 bg-purple-500 text-white rounded-full font-medium transition-all duration-300 hover:bg-purple-600">
//               All Projects
//             </button>
//             <button className="px-6 py-3 bg-neutral-800 text-neutral-300 rounded-full font-medium transition-all duration-300 hover:bg-neutral-700 hover:text-white">
//               Web Apps
//             </button>
//             <button className="px-6 py-3 bg-neutral-800 text-neutral-300 rounded-full font-medium transition-all duration-300 hover:bg-neutral-700 hover:text-white">
//               Mobile Apps
//             </button>
//             <button className="px-6 py-3 bg-neutral-800 text-neutral-300 rounded-full font-medium transition-all duration-300 hover:bg-neutral-700 hover:text-white">
//               Full Stack
//             </button>
//             <button className="px-6 py-3 bg-neutral-800 text-neutral-300 rounded-full font-medium transition-all duration-300 hover:bg-neutral-700 hover:text-white">
//               Open Source
//             </button>
//           </motion.div>

//           {/* Projects Grid */}
//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="visible"
//             className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
//           >
//             {PROJECTS.map((project, index) => (
//               <motion.div
//                 key={index}
//                 variants={projectItem}
//                 className="group relative bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-800 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
//               >
//                 {/* Project Image */}
//                 <div className="relative h-48 overflow-hidden">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-110"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

//                   {/* Project Number */}
//                   <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-purple-500/30">
//                     <span className="text-xs font-mono text-purple-400">
//                       #{String(index + 1).padStart(2, "0")}
//                     </span>
//                   </div>

//                   {/* View Project Button */}
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <Link
//                       href={project.link}
//                       className="px-6 py-3 bg-purple-500 text-white rounded-full font-medium transition-all duration-300 hover:bg-purple-600 transform translate-y-4 group-hover:translate-y-0"
//                     >
//                       View Project
//                     </Link>
//                   </div>
//                 </div>

//                 {/* Project Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
//                     {project.title}
//                   </h3>

//                   <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
//                     {project.description}
//                   </p>

//                   {/* Technologies */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.slice(0, 3).map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs rounded-full border border-neutral-700"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                     {project.technologies.length > 3 && (
//                       <span className="px-3 py-1 bg-neutral-800 text-neutral-400 text-xs rounded-full">
//                         +{project.technologies.length - 3}
//                       </span>
//                     )}
//                   </div>

//                   {/* Project Meta */}
//                   <div className="flex items-center justify-between text-sm text-neutral-500">
//                     <span className="flex items-center gap-1">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                       {project.duration || "3 months"}
//                     </span>

//                     <Link
//                       href={project.link}
//                       className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
//                     >
//                       Details
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </Link>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Load More Button */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="text-center mt-16"
//           >
//             <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-500/10 transition-all duration-300 font-medium">
//               Load More Projects
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative py-20">
//         <div className="container px-4 mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
//               Ready to Start Your Project?
//             </h2>
//             <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-8">
//               With 3 years of experience in modern web technologies, I&apos;m ready to bring your ideas to life.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 href="/contact"
//                 className="px-8 py-4 bg-purple-500 text-white rounded-full font-medium transition-all duration-300 hover:bg-purple-600"
//               >
//                 Get In Touch
//               </Link>
//               <Link
//                 href="/about"
//                 className="px-8 py-4 border border-neutral-600 text-neutral-300 rounded-full font-medium transition-all duration-300 hover:border-purple-400 hover:text-purple-400"
//               >
//                 Learn More About Me
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

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

  return (
    <section
      ref={containerRef}
      className="relative py-24 lg:py-32 overflow-hidden px-4 md:px-8 bg-gradient-to-br from-zinc-950 via-transparent to-purple-950/10"
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

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
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
          <motion.div variants={itemVariants} className="text-center space-y-6">
            {/* <motion.div
              className="flex items-center justify-center space-x-3 mb-6"
              variants={floatingVariants}
              animate="float"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              <span
                className={`text-sm font-semibold text-purple-400/90 tracking-widest uppercase ${poppins.className}`}
              >
                Portfolio Showcase
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
            </motion.div> */}
            <motion.div
              className="flex items-center justify-center space-x-3 mb-6"
              variants={floatingVariants}
              animate="float"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              <span
                className={`text-sm font-semibold text-purple-400/90 tracking-widest uppercase ${poppins.className}`}
              >
                Portfolio Showcase
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
            </motion.div>
            <h2
              className={`${poppins.className} text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight`}
            >
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            <motion.p
              variants={itemVariants}
              className={`max-w-2xl mx-auto text-lg text-gray-300/90 ${inter.className}`}
            >
              Crafting digital experiences with modern technologies and creative
              solutions
            </motion.p>
          </motion.div>

          {/* Enhanced Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {PROJECTS.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="project-card group relative bg-zinc-800/40 backdrop-blur-md rounded-3xl border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
                style={{
                  background: `
                    radial-gradient(
                      600px circle at var(--mouse-x) var(--mouse-y),
                      rgba(168, 85, 247, 0.08),
                      transparent 40%
                    ),
                    linear-gradient(135deg, rgba(39, 39, 42, 0.9) 0%, rgba(24, 24, 27, 0.7) 100%)
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
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent" />

                  {/* Project Number */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-purple-500/30"
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
                        className="p-2 bg-black/60 backdrop-blur-md rounded-lg border border-zinc-600/50 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <FiGithub className="w-4 h-4 text-white" />
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-black/60 backdrop-blur-md rounded-lg border border-zinc-600/50 hover:border-purple-500/50 transition-all duration-300"
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
                        className="px-3 py-1 bg-zinc-700/50 text-gray-300 rounded-lg border border-zinc-600/50 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300 text-sm font-medium backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div className="pt-4" whileHover={{ x: 5 }}>
                    <Link
                      href={project.link || "#"}
                      className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                    >
                      <span>Explore Project</span>
                      <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced View All Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Link
              href="/projects"
              className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-2xl bg-zinc-800/40 backdrop-blur-md border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              <span className="relative text-lg font-medium text-purple-400 group-hover:text-purple-300">
                Discover All Projects
              </span>
              <FiArrowRight className="relative w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
