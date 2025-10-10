// import { SOCIAL_LINKS } from "@/utils/constants";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { FaMailBulk } from "react-icons/fa";

// export const Contact = () => {
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

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <section
//       id="contact"
//       className="relative py-16 md:py-24 bg-gradient-to-b bg-transparent overflow-hidden"
//     >
//       {/* Background glow effects */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-600/20 blur-3xl"></div>
//       </div>

//       <div className="container px-4 mx-auto relative">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-4xl mx-auto"
//         >
//           {/* Contact Card */}
//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="visible"
//             className="relative bg-neutral-900/70 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 md:p-10 overflow-hidden"
//           >
//             {/* Glow effect */}
//             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

//             {/* Header */}
//             <motion.div
//               variants={item}
//               className="relative mb-8 pb-6 border-b border-neutral-800"
//             >
//               <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center">
//                 Get In Touch{" "}
//                 <motion.span
//                   className="text-purple-500 ml-1"
//                   animate={{ opacity: [0.6, 1, 0.6] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                 >
//                   .
//                 </motion.span>
//               </h1>
//             </motion.div>

//             {/* Content */}
//             <div className="relative space-y-8">
//               <motion.p
//                 variants={item}
//                 className="text-center text-neutral-400 text-sm md:text-base"
//               >
//                 Have a project in mind or want to collaborate? Feel free to
//                 reach out!
//               </motion.p>

//               {/* Social Links Grid */}
//               <motion.div
//                 variants={container}
//                 className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
//               >
//                 {SOCIAL_LINKS.map((social, index) => (
//                   <motion.div
//                     key={index}
//                     variants={item}
//                     whileHover={{ y: -5, scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex justify-center"
//                   >
//                     <Link
//                       href={social.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`${social.color} transition-all duration-300 flex flex-col items-center gap-2`}
//                     >
//                       <div className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300">
//                         {social.icon}
//                       </div>
//                       <span className="text-xs font-medium">{social.name}</span>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               {/* Email Section */}
//               <motion.div
//                 variants={item}
//                 className="flex flex-col items-center gap-4 mt-8 pt-6 border-t border-neutral-800"
//               >
//                 <p className="text-neutral-400 text-sm">
//                   Or send me an email at:
//                 </p>
//                 <div className="flex items-center gap-3 bg-neutral-800/50 px-6 py-3 rounded-full">
//                   <div className="p-2 rounded-full bg-purple-500/10">
//                     <FaMailBulk className="text-purple-400" />
//                   </div>
//                   <a
//                     href="mailto:amansoni53453@gmail.com"
//                     className="text-base md:text-lg text-white hover:text-purple-400 transition-colors duration-300"
//                   >
//                     amansoni53453@gmail.com
//                   </a>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

"use client";

import { SOCIAL_LINKS } from "@/utils/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaMailBulk } from "react-icons/fa";
import { Inter, JetBrains_Mono } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";
import React from "react";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const Contact = () => {
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
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden px-4 md:px-8"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
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
              <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-pink-500" />
              <span
                className={`text-sm font-medium text-purple-400 tracking-wider uppercase ${jetbrainsMono.className}`}
              >
                Let&apos;s Connect
              </span>
              <div className="w-8 h-px bg-gradient-to-r from-pink-500 to-purple-500" />
            </div>
            <h2
              className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent ${inter.className}`}
            >
              Get In Touch
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
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
            className="relative bg-zinc-800/40 backdrop-blur-sm rounded-2xl border border-zinc-700/30 p-6 md:p-12 overflow-hidden group"
          >
            {/* Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 space-y-8">
              {/* Intro Text */}
              <motion.p
                variants={itemVariants}
                className="text-center text-gray-300 text-lg leading-relaxed"
              >
                Have a project in mind or want to collaborate? I&apos;m always
                open to discussing new opportunities and creative ideas.
              </motion.p>

              {/* Social Links Grid */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
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
                        className="flex flex-col items-center gap-3 p-4 bg-zinc-700/30 rounded-xl border border-zinc-600/30 hover:border-purple-500/50 transition-all duration-300 group-hover/link:bg-zinc-700/50"
                      >
                        <div className="p-3 rounded-full bg-zinc-600/30 group-hover/link:bg-gradient-to-r from-purple-500/20 to-pink-500/20 transition-all duration-300">
                          {React.cloneElement(social.icon, {
                            className:
                              "w-6 h-6 text-gray-300 group-hover/link:text-purple-400 transition-colors duration-300",
                          })}
                        </div>
                        <span className="text-sm font-medium text-gray-300 group-hover/link:text-white transition-colors duration-300">
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
                className="text-center pt-8 border-t border-zinc-700/50"
              >
                <p className="text-gray-400 text-sm mb-6">
                  Prefer email? Reach out directly at:
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-zinc-700/30 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-zinc-600/30 hover:border-purple-500/50 transition-all duration-300 group/email w-full max-w-md mx-auto"
                >
                  <div className="p-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex-shrink-0">
                    <FaMailBulk className="w-5 h-5 text-purple-400" />
                  </div>
                  <Link
                    href="mailto:amansoni53453@gmail.com"
                    className="text-base sm:text-lg font-semibold text-white hover:text-purple-300 transition-colors duration-300 flex items-center gap-2 break-all text-center sm:text-left"
                  >
                    amansoni53453@gmail.com
                    <FiArrowUpRight className="w-4 h-4 opacity-0 group-hover/email:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* CTA */}
              <motion.div variants={itemVariants} className="text-center pt-6">
                <p className="text-gray-400 text-sm">
                  I typically respond within 24 hours
                </p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-purple-500/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-pink-500/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
