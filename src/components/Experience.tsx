// import { EXPERIENCES } from "@/utils/constants";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export const Experience = () => {
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

//   const experienceItem = {
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
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-center mb-16"
//         >
//           <p className="text-sm md:text-base text-pink-400 font-mono mb-2">
//             Career Timeline
//           </p>
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
//             Professional Experience
//           </h2>
//           <p className="max-w-2xl mx-auto text-neutral-400">
//             My journey through the tech industry
//           </p>
//         </motion.div>

//         {/* Experience Timeline */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="visible"
//           className="relative space-y-12"
//         >
//           {/* Timeline line */}
//           <div className="absolute left-4 md:left-[calc(25%)] top-0 h-full w-0.5 bg-gradient-to-b from-purple-500/20 via-purple-500/50 to-purple-500/20"></div>

//           {EXPERIENCES.map((experience, index) => (
//             <motion.div
//               key={index}
//               variants={experienceItem}
//               whileHover="hover"
//               className="relative pl-12 md:pl-0 md:pr-16 md:py-8"
//             >
//               {/* Timeline dot */}
//               <div className="absolute left-0 md:left-[calc(25%-8px)] top-8 w-5 h-5 rounded-full bg-purple-500 border-4 border-neutral-950 z-10"></div>

//               {/* Glow effect container */}
//               <motion.div
//                 variants={glowVariant}
//                 className="absolute inset-0 rounded-xl bg-purple-500/20 pointer-events-none"
//               />

//               <div className="flex flex-col md:flex-row gap-6">
//                 {/* Year */}
//                 <div className="md:w-1/4 md:pr-8 md:text-right">
//                   <p className="text-sm font-mono text-pink-400 mt-0">
//                     {experience.year}
//                   </p>
//                 </div>

//                 {/* Content card */}
//                 <div className="relative md:w-3/4 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6 space-y-4 group hover:border-pink-400/30 transition-all duration-300 md:ml-8">
//                   <h3 className="text-xl font-bold text-white">
//                     {experience.role}
//                     <span className="text-xs font-normal text-pink-300 block md:inline">
//                       {" "}@{" "}
//                       <Link
//                         href={experience.companyLink}
//                         className="hover:text-pink-400 transition-colors underline underline-offset-4 decoration-pink-400/30 hover:decoration-pink-400/70"
//                       >
//                         {experience.company}
//                       </Link>
//                     </span>
//                   </h3>

//                   <p className="text-neutral-400">
//                     {experience.description}
//                   </p>

//                   {/* Technologies */}
//                   <div className="flex flex-wrap gap-2 mt-4">
//                     {experience.technologies.map((tech, techIndex) => (
//                       <motion.span
//                         key={techIndex}
//                         className="text-xs font-mono px-3 py-1 bg-neutral-900 text-neutral-300 rounded-full border border-neutral-700 hover:border-pink-400 hover:text-pink-400 transition-all duration-300"
//                         whileHover={{
//                           scale: 1.1,
//                           backgroundColor: "rgba(45, 212, 191, 0.1)",
//                         }}
//                       >
//                         {tech}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

"use client";

import { EXPERIENCES } from "@/utils/constants";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";
import {
  FiExternalLink,
  FiCalendar,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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

export const Experience = () => {
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
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-24 lg:py-32 overflow-hidden px-4 md:px-8 bg-gradient-to-br from-zinc-950 via-transparent to-purple-950/10"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-blue-600/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {/* Enhanced Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              className="flex items-center justify-center space-x-3 mb-6"
              variants={floatingVariants}
              animate="float"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              <span
                className={`text-sm font-semibold text-purple-400/90 tracking-widest uppercase ${poppins.className}`}
              >
                My Career Journey
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
            </motion.div>
            <h2
              className={`${poppins.className} text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight`}
            >
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            <p
              className={`text-gray-400/90 text-lg max-w-2xl mx-auto ${inter.className}`}
            >
              My journey through the tech industry, building innovative
              solutions and growing as a developer
            </p>
          </motion.div>

          {/* Enhanced Timeline */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-transparent origin-top"
            />

            <div className="space-y-12">
              {EXPERIENCES.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col lg:flex-row ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
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
                    className="absolute left-6 lg:left-1/2 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-zinc-900 z-20 shadow-2xl shadow-purple-500/25"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-sm opacity-75 animate-pulse" />
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
                    className={`group relative flex-1 bg-zinc-800/40 backdrop-blur-md rounded-3xl border border-zinc-700/50 hover:border-purple-500/50 p-8 lg:p-10 transition-all duration-500 ${
                      index % 2 === 0 ? "lg:mr-16" : "lg:ml-16"
                    }`}
                  >
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                    <div className="relative z-10 space-y-8">
                      {/* Enhanced Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0" />
                            <h3
                              className={`text-2xl lg:text-3xl font-black text-white group-hover:bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-500 ${poppins.className}`}
                            >
                              {experience.role}
                            </h3>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Link
                              href={experience.companyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link inline-flex items-center space-x-3 text-purple-400 hover:text-pink-400 transition-all duration-300"
                            >
                              <span
                                className={`font-bold text-lg ${poppins.className}`}
                              >
                                {experience.company}
                              </span>
                              <FiExternalLink className="w-5 h-5 group-hover/link:scale-110 group-hover/link:translate-x-0.5 transition-transform duration-300" />
                            </Link>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 text-sm">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-3 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-xl"
                          >
                            <FiCalendar className="w-4 h-4 text-purple-400" />
                            <span
                              className={`text-purple-300 font-semibold ${poppins.className}`}
                            >
                              {experience.year}
                            </span>
                          </motion.div>
                        </div>
                      </div>

                      {/* Enhanced Description */}
                      <motion.p
                        className={`text-gray-300/90 leading-relaxed text-lg ${inter.className}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {experience.description}
                      </motion.p>

                      {/* Enhanced Technologies */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                          <h4
                            className={`text-sm font-bold text-purple-400 uppercase tracking-wider ${poppins.className}`}
                          >
                            Technologies Used
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {experience.technologies.map((tech, techIndex) => (
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
                              className={`px-4 py-2 text-sm font-semibold bg-zinc-700/50 text-gray-300 rounded-xl border border-zinc-600/30 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-300 cursor-default backdrop-blur-sm ${poppins.className}`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-8 h-8 border-2 border-purple-500/30 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Year Indicator for Desktop */}
                  <div
                    className={`hidden lg:flex flex-1 items-center justify-center ${
                      index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm ${
                        index % 2 === 0 ? "text-left" : "text-right"
                      }`}
                    >
                      <div
                        className={`text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ${poppins.className}`}
                      >
                        {experience.year}
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-zinc-800/40 backdrop-blur-md rounded-3xl border border-zinc-700/50 hover:border-purple-500/30 p-12 transition-all duration-500">
                <h3
                  className={`text-3xl lg:text-4xl font-black text-white mb-6 ${poppins.className}`}
                >
                  Ready to Build Something{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Amazing?
                  </span>
                </h3>
                <p
                  className={`text-gray-400/90 text-lg mb-8 max-w-md mx-auto ${inter.className}`}
                >
                  Let&apos;s discuss how my experience can help bring your next
                  project to life.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* <Link
                    href="#contact"
                    className="group/cta inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 overflow-hidden"
                  >
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000" />
                    
                    <span className={`text-lg ${poppins.className} relative z-10`}>
                      Let's Work Together
                    </span>
                    <FiArrowRight className="w-5 h-5 relative z-10 group-hover/cta:translate-x-1 transition-transform duration-300" />
                  </Link> */}

                  <Link
                    href="#contact"
                    className="group/cta relative inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 overflow-hidden"
                  >
                    {/* More Consistent Shine */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      <div className="absolute top-0 -left-10 w-8 h-full bg-white/20 skew-x-12 transition-all duration-700 ease-out group-hover/cta:left-[120%]" />
                    </div>

                    <span
                      className={`text-lg ${poppins.className} relative z-10`}
                    >
                      Let&apos;s Work Together
                    </span>
                    <FiArrowRight className="w-5 h-5 relative z-10 group-hover/cta:translate-x-1 transition-transform duration-300" />
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

// "use client";

// import { EXPERIENCES } from "@/utils/constants";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { Inter, JetBrains_Mono } from "next/font/google";
// import { FiExternalLink, FiCalendar, FiMapPin } from "react-icons/fi";

// const inter = Inter({
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
// });

// const jetbrainsMono = JetBrains_Mono({
//   weight: ["400", "500", "600"],
//   subsets: ["latin"],
// });

// export const Experience = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section id="experience" className="relative py-20 overflow-hidden px-4 md:px-8">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="space-y-16"
//         >
//           {/* Section Header */}
//           <motion.div variants={itemVariants} className="text-center space-y-4">
//             <div className="flex items-center justify-center space-x-2 mb-4">
//               <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-pink-500" />
//               <span
//                 className={`text-sm font-medium text-purple-400 tracking-wider uppercase ${jetbrainsMono.className}`}
//               >
//                 Career Timeline
//               </span>
//               <div className="w-8 h-px bg-gradient-to-r from-pink-500 to-purple-500" />
//             </div>
//             <h2
//               className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent ${inter.className}`}
//             >
//               Professional Experience
//             </h2>
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               My journey through the tech industry, building scalable solutions
//               and growing as a developer
//             </p>
//           </motion.div>

//           {/* Timeline */}
//           <div className="relative">
//             {/* Timeline Line */}
//             <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />

//             <div className="space-y-8">
//               {EXPERIENCES.map((experience, index) => (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   className="relative pl-12 md:pl-20"
//                 >
//                   {/* Timeline Dot */}
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     transition={{ duration: 0.4, delay: index * 0.1 }}
//                     className="absolute left-2 md:left-6 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-zinc-950 z-10"
//                   >
//                     <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-sm opacity-50 animate-pulse" />
//                   </motion.div>

//                   {/* Experience Card */}
//                   <motion.div
//                     whileHover={{
//                       scale: 1.02,
//                       transition: { duration: 0.2 },
//                     }}
//                     className="group relative bg-zinc-800/40 backdrop-blur-sm rounded-2xl border border-zinc-700/30 hover:border-purple-500/30 p-8 transition-all duration-300"
//                   >
//                     {/* Gradient Background on Hover */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                     <div className="relative z-10 space-y-6">
//                       {/* Header */}
//                       <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
//                         <div className="space-y-2">
//                           <h3
//                             className={`text-xl lg:text-2xl font-bold text-white group-hover:text-purple-100 transition-colors duration-300 ${inter.className}`}
//                           >
//                             {experience.role}
//                           </h3>
//                           <div className="flex items-center space-x-2">
//                             <Link
//                               href={experience.companyLink}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="group/link inline-flex items-center space-x-2 text-purple-400 hover:text-pink-400 transition-colors duration-300"
//                             >
//                               <span className="font-semibold">
//                                 {experience.company}
//                               </span>
//                               <FiExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
//                             </Link>
//                           </div>
//                         </div>

//                         <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
//                           <div className="flex items-center space-x-2">
//                             <FiCalendar className="w-4 h-4 text-purple-400" />
//                             <span className={jetbrainsMono.className}>
//                               {experience.year}
//                             </span>
//                           </div>
//                           {/* {experience.location && (
//                             <div className="flex items-center space-x-2">
//                               <FiMapPin className="w-4 h-4 text-pink-400" />
//                               <span>{experience.location}</span>
//                             </div>
//                           )} */}
//                         </div>
//                       </div>

//                       {/* Description */}
//                       <p className="text-gray-300 leading-relaxed">
//                         {experience.description}
//                       </p>

//                       {/* Highlights */}
//                       {/* {experience.highlights && (
//                         <div className="space-y-2">
//                           <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
//                             Key Achievements
//                           </h4>
//                           <ul className="space-y-1">
//                             {experience.highlights.map(
//                               (highlight, highlightIndex) => (
//                                 <li
//                                   key={highlightIndex}
//                                   className="flex items-start space-x-2 text-sm text-gray-300"
//                                 >
//                                   <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0" />
//                                   <span>{highlight}</span>
//                                 </li>
//                               )
//                             )}
//                           </ul>
//                         </div>
//                       )} */}

//                       {/* Technologies */}
//                       <div className="space-y-3">
//                         <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
//                           Technologies Used
//                         </h4>
//                         <div className="flex flex-wrap gap-2">
//                           {experience.technologies.map((tech, techIndex) => (
//                             <motion.span
//                               key={techIndex}
//                               whileHover={{ scale: 1.05 }}
//                               className={`px-3 py-1 text-xs font-medium bg-zinc-700/50 text-gray-300 rounded-full border border-zinc-600/30 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-300 cursor-default ${jetbrainsMono.className}`}
//                             >
//                               {tech}
//                             </motion.span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* CTA Section */}
//           <motion.div variants={itemVariants} className="text-center pt-8">
//             <div className="bg-zinc-800/30 backdrop-blur-sm rounded-2xl border border-zinc-700/30 p-8">
//               <h3 className="text-2xl font-bold text-white mb-4">
//                 Ready to Build Something Amazing?
//               </h3>
//               <p className="text-gray-400 mb-6 max-w-md mx-auto">
//                 Let&apos;s discuss how my experience can help bring your next project
//                 to life.
//               </p>
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Link
//                   href="#contact"
//                   className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
//                 >
//                   <span>Let&apos;s Work Together</span>
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };
