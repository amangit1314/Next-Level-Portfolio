// import Image from "next/image";
// import { CiMobile2 } from "react-icons/ci";
// import { RiFlutterFill } from "react-icons/ri";
// import { IoFileTrayFull } from "react-icons/io5";
// import { HiOutlineServerStack } from "react-icons/hi2";
// import Link from "next/link";

// export const AboutSection = () => {
//   return (
//     <div className="flex flex-col items-center justify-center px-4 md:px-8 xl:px-20 py-16 max-w-7xl mx-auto">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <p className="text-base font-normal text-gray-300">Get To Know More</p>
//         <p className="mt-2 text-3xl font-semibold text-white xl:text-4xl">
//           About Me
//         </p>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-10 lg:gap-8 xl:gap-6">
//         {/* Left: Profile Image */}
//         <div className="hidden lg:flex">
//           <div className="relative w-72 h-72 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px]">
//             <div className="relative shadow-lg w-full h-full overflow-hidden rounded-2xl">
//               <Image
//                 src="/images/aman_gibly.png"
//                 alt="Profile"
//                 fill
//                 style={{ objectPosition: "top" }}
//                 className="object-cover rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="w-full md:w-3/5 space-y-8">
//           {/* Experience List */}
//           <ExperienceList />

//           {/* Bio + Button */}
//           <div className="space-y-4">
//             <p className="text-sm md:text-base text-gray-300">
//               My name is Aman Soni and I am a Full Stack Developer. As a
//               full-stack developer, I create full stack experiences with
//               beautiful UI / UX. With my 3 years of experience building projects
//               my clients are happy with, I can provide both assurance and
//               quality in my work.
//             </p>

//             {/* <button className="px-4 py-2 text-white bg-purple-600 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
//               Contact Me
//             </button> */}
//             <Link
//               href="#contact"
//               scroll={true}
//               className="inline-block px-4 py-2 text-white bg-purple-600 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

// // ===================== ExperienceList =========================

// const ExperienceList = () => {
//   return (
//     <div className="flex items-center justify-start gap-4 overflow-x-auto w-full px-2 py-4">
//       <ExperienceItem
//         field="Full Stack dev"
//         duration={3}
//         icon={<IoFileTrayFull size={38} />}
//       />
//       <ExperienceItem
//         field="Backend dev"
//         duration={3}
//         icon={<HiOutlineServerStack size={38} />}
//       />
//       <ExperienceItem
//         field="Mobile app dev"
//         duration={3}
//         icon={<CiMobile2 size={38} />}
//       />
//     </div>
//   );
// };

// // ===================== ExperienceItem =========================

// const ExperienceItem = ({
//   field,
//   duration,
//   icon,
// }: {
//   field: string;
//   duration: number;
//   icon: JSX.Element;
// }) => {
//   return (
//     <div className="min-w-[6.5rem] md:min-w-[8rem] text-center bg-zinc-800 text-gray-100 rounded-xl p-4 hover:bg-purple-500 hover:text-white transition-all duration-300 cursor-pointer">
//       <div className="flex justify-center mb-2">{icon}</div>
//       <div className="text-sm font-semibold">{field}</div>
//       <div className="text-xs mt-1">{duration} Year of exp</div>
//     </div>
//   );
// };

/// --------------------------------------------------------------------------------

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { Inter, Poppins } from "next/font/google";
// import {
//   FiCode,
//   FiServer,
//   FiSmartphone,
//   FiArrowRight,
//   FiAward,
//   FiUsers,
//   FiTrendingUp,
//   FiChevronRight,
// } from "react-icons/fi";
// import {
//   SiReact,
//   SiNodedotjs,
//   SiMongodb,
//   SiTypescript,
//   SiNextdotjs,
//   SiTailwindcss,
//   SiFramer,
// } from "react-icons/si";

// const inter = Inter({
//   weight: ["300", "400", "500", "600"],
//   subsets: ["latin"],
// });

// const poppins = Poppins({
//   weight: ["400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

// // Enhanced Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//       delayChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: [0.25, 0.1, 0.25, 1],
//     },
//   },
// };

// const floatingVariants = {
//   float: {
//     y: [-10, 10, -10],
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

// export const AboutSection = () => {
//   return (
//     <section
//       id="about"
//       className="relative py-24 lg:py-32 overflow-hidden px-4 md:px-8 bg-gradient-to-br from-zinc-950 via-transparent to-purple-950/10"
//     >
//       {/* Advanced Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-1/3 -left-20 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-blue-600/5 rounded-full blur-3xl" />

//         {/* Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="space-y-20"
//         >
//           {/* Enhanced Section Header */}
//           <motion.div variants={itemVariants} className="text-center space-y-6">
//             <motion.div
//               className="flex items-center justify-center space-x-3 mb-6"
//               variants={floatingVariants}
//               animate="float"
//             >
//               <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
//               <span
//                 className={`text-sm font-semibold text-purple-400/90 tracking-widest uppercase ${poppins.className}`}
//               >
//                 Discover My Journey
//               </span>
//               <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
//             </motion.div>
//             <h2
//               className={`${poppins.className} text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight`}
//             >
//               About Me
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
//           </motion.div>

//           {/* Enhanced Main Content */}
//           <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
//             {/* Enhanced Profile Image */}
//             <motion.div variants={itemVariants} className="relative">
//               <div className="relative group perspective-1000">
//                 {/* 3D Floating Effect */}
//                 <motion.div
//                   className="relative w-full max-w-md mx-auto"
//                   whileHover={{ rotateY: 5, rotateX: 5 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 >
//                   {/* Outer Glow */}
//                   <div className="absolute -inset-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700" />

//                   {/* Main Image Container */}
//                   <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 p-2 shadow-2xl">
//                     <div className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-700/50">
//                       <Image
//                         src="/images/aman_gibly.png"
//                         alt="Aman Soni - Full Stack Developer"
//                         fill
//                         className="object-cover object-top transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
//                         quality={100}
//                         priority
//                       />

//                       {/* Advanced Overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent" />

//                       {/* Animated Scan Line */}
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"
//                         initial={{ y: "-100%" }}
//                         whileHover={{ y: "100%" }}
//                         transition={{ duration: 1.2, ease: "easeInOut" }}
//                       />

//                       {/* Enhanced Stats Overlay */}
//                       <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
//                         {[
//                           { icon: FiAward, value: "3+", label: "Years Exp" },
//                           { icon: FiUsers, value: "15+", label: "Projects" },
//                           {
//                             icon: FiTrendingUp,
//                             value: "100%",
//                             label: "Success",
//                           },
//                         ].map((stat, index) => (
//                           <motion.div
//                             key={index}
//                             whileHover={{ scale: 1.05, y: -2 }}
//                             className="bg-zinc-900/90 backdrop-blur-md rounded-xl p-3 text-center border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-300"
//                           >
//                             <stat.icon className="w-4 h-4 text-purple-400 mx-auto mb-2" />
//                             <div
//                               className={`text-sm font-bold text-white ${poppins.className}`}
//                             >
//                               {stat.value}
//                             </div>
//                             <div className="text-xs text-gray-400 font-medium">
//                               {stat.label}
//                             </div>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Enhanced Floating Tech Icons */}
//                 <motion.div
//                   className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/25"
//                   animate={{
//                     rotate: 360,
//                     scale: [1, 1.1, 1],
//                   }}
//                   transition={{
//                     rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//                     scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
//                   }}
//                 >
//                   <SiReact className="w-8 h-8 text-white" />
//                 </motion.div>

//                 <motion.div
//                   className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25"
//                   variants={floatingVariants}
//                   animate="float"
//                 >
//                   <SiNodedotjs className="w-7 h-7 text-white" />
//                 </motion.div>

//                 {/* New Floating Icon */}
//                 <motion.div
//                   className="absolute top-1/2 -right-10 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/25"
//                   animate={{
//                     y: [-15, 15, -15],
//                     rotate: [0, 180, 360],
//                   }}
//                   transition={{
//                     duration: 6,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   <SiFramer className="w-6 h-6 text-white" />
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Enhanced Content */}
//             <motion.div variants={itemVariants} className="space-y-10">
//               {/* Enhanced Experience Cards */}
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//                 <EnhancedExperienceCard
//                   field="Full Stack"
//                   duration="3+ Years"
//                   icon={<FiCode size={28} />}
//                   gradient="from-purple-500 to-blue-500"
//                   description="End-to-end solutions"
//                 />
//                 <EnhancedExperienceCard
//                   field="Backend"
//                   duration="3+ Years"
//                   icon={<FiServer size={28} />}
//                   gradient="from-blue-500 to-cyan-500"
//                   description="Robust APIs & Systems"
//                 />
//                 <EnhancedExperienceCard
//                   field="Mobile"
//                   duration="2+ Years"
//                   icon={<FiSmartphone size={28} />}
//                   gradient="from-cyan-500 to-green-500"
//                   description="Cross-platform apps"
//                 />
//               </div>

//               {/* Enhanced Description */}
//               <div className="space-y-8">
//                 <div className="space-y-6">
//                   <h3
//                     className={`text-3xl lg:text-4xl font-black text-white ${poppins.className}`}
//                   >
//                     Crafting Digital{" "}
//                     <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                       Excellence
//                     </span>
//                   </h3>
//                   <div className="space-y-4">
//                     <p
//                       className={`text-gray-300/90 leading-relaxed text-lg ${inter.className}`}
//                     >
//                       I'm{" "}
//                       <span
//                         className={`${poppins.className} text-purple-400 font-semibold`}
//                       >
//                         Aman Soni
//                       </span>
//                       , a passionate Full Stack Developer with{" "}
//                       <span
//                         className={`${poppins.className} text-pink-400 font-semibold`}
//                       >
//                         3+ years
//                       </span>{" "}
//                       of experience building scalable web applications and
//                       cutting-edge digital solutions.
//                     </p>
//                     <p
//                       className={`text-gray-300/90 leading-relaxed text-lg ${inter.className}`}
//                     >
//                       I specialize in creating seamless user experiences with
//                       modern technologies, clean architecture, and
//                       performance-optimized code that delivers real business
//                       value.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Enhanced Key Strengths */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {[
//                     "Modern Tech Stack",
//                     "Clean Code Architecture",
//                     "Performance Optimization",
//                     "User-Centric Design",
//                     "Agile Development",
//                     "Continuous Learning",
//                   ].map((strength, index) => (
//                     <motion.div
//                       key={index}
//                       className="flex items-center space-x-3 group"
//                       whileHover={{ x: 5 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                     >
//                       <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
//                       <span
//                         className={`text-gray-300 font-medium ${inter.className} group-hover:text-white transition-colors duration-300`}
//                       >
//                         {strength}
//                       </span>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* Enhanced Tech Stack Preview */}
//                 <motion.div
//                   className="p-6 bg-zinc-800/40 backdrop-blur-md rounded-2xl border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-500 group"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <div className="flex items-center justify-between mb-4">
//                     <span
//                       className={`${poppins.className} text-lg font-semibold text-white`}
//                     >
//                       Tech Stack
//                     </span>
//                     <FiChevronRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
//                   </div>
//                   <div className="flex items-center space-x-6">
//                     {[
//                       {
//                         icon: SiNextdotjs,
//                         color: "text-white",
//                         name: "Next.js",
//                       },
//                       {
//                         icon: SiTypescript,
//                         color: "text-blue-400",
//                         name: "TypeScript",
//                       },
//                       {
//                         icon: SiMongodb,
//                         color: "text-green-400",
//                         name: "MongoDB",
//                       },
//                       {
//                         icon: SiTailwindcss,
//                         color: "text-cyan-400",
//                         name: "Tailwind",
//                       },
//                       { icon: SiReact, color: "text-cyan-300", name: "React" },
//                     ].map((tech, index) => (
//                       <motion.div
//                         key={index}
//                         whileHover={{ scale: 1.3, y: -5 }}
//                         className="flex flex-col items-center space-y-2 group/tech"
//                       >
//                         <div
//                           className={`${tech.color} opacity-80 group-hover/tech:opacity-100 transition-all duration-300`}
//                         >
//                           <tech.icon className="w-7 h-7" />
//                         </div>
//                         <span className="text-xs text-gray-400 font-medium opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300">
//                           {tech.name}
//                         </span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>

//                 {/* Enhanced CTA Button */}
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="pt-4"
//                 >
//                   <Link
//                     href="#contact"
//                     className="group relative inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 overflow-hidden"
//                   >
//                     {/* Shine Effect */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

//                     <span
//                       className={`text-lg ${poppins.className} relative z-10`}
//                     >
//                       Let's Build Something Amazing
//                     </span>
//                     <FiArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
//                   </Link>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // Enhanced Experience Card Component
// const EnhancedExperienceCard = ({
//   field,
//   duration,
//   icon,
//   gradient,
//   description,
// }: {
//   field: string;
//   duration: string;
//   icon: JSX.Element;
//   gradient: string;
//   description: string;
// }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.08, y: -8 }}
//       className="group relative bg-zinc-800/40 backdrop-blur-md rounded-2xl p-6 border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-500 cursor-pointer"
//     >
//       {/* Animated Gradient Background */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
//       />

//       {/* Hover Glow */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 blur-xl rounded-2xl transition-opacity duration-500`}
//       />

//       <div className="relative z-10 text-center space-y-4">
//         <motion.div
//           className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${gradient} rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}
//           whileHover={{ rotate: 5 }}
//         >
//           {icon}
//         </motion.div>
//         <div className="space-y-2">
//           <div className={`font-bold text-white text-lg ${poppins.className}`}>
//             {field}
//           </div>
//           <div className={`font-semibold text-gray-300 ${poppins.className}`}>
//             {duration}
//           </div>
//           <div className="text-sm text-gray-400 font-medium">{description}</div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default AboutSection;

/// --------------------------------------------------------------------------------

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";
import {
  FiCode,
  FiServer,
  FiSmartphone,
  FiArrowRight,
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiChevronRight,
} from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

// Enhanced Animation variants
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

export const AboutSection = () => {
  return (
    <section
      id="about"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {" "}
        {/* FIXED: Added sm:px-6 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {/* Enhanced Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6 px-4"
          >
            {" "}
            {/* FIXED: Added px-4 */}
            <motion.div
              className="flex items-center justify-center space-x-3 mb-6"
              variants={floatingVariants}
              animate="float"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              <span
                className={`text-sm font-semibold text-purple-400/90 tracking-widest uppercase ${poppins.className}`}
              >
                Discover My Journey
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
            </motion.div>
            <h2
              className={`${poppins.className} text-4xl sm:text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight px-2`}
            >
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          {/* Enhanced Main Content - FIXED RIGHT SPACING */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center px-4 sm:px-0">
            {" "}
            {/* FIXED: Added px-4 on mobile */}
            {/* Enhanced Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative group perspective-1000">
                {/* 3D Floating Effect */}
                <motion.div
                  className="relative w-full max-w-md mx-auto"
                  whileHover={{ rotateY: 5, rotateX: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Outer Glow */}
                  <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-700" />{" "}
                  {/* FIXED: Responsive inset */}
                  {/* Main Image Container */}
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 p-2 shadow-2xl mx-auto">
                    {" "}
                    {/* FIXED: Added mx-auto */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-700/50">
                      <Image
                        src="/images/aman_gibly.png"
                        alt="Aman Soni - Full Stack Developer"
                        fill
                        className="object-cover object-top transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                        quality={100}
                        priority
                      />

                      {/* Advanced Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent" />

                      {/* Animated Scan Line */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"
                        initial={{ y: "-100%" }}
                        whileHover={{ y: "100%" }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                      />

                      {/* Enhanced Stats Overlay */}
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 grid grid-cols-3 gap-2 sm:gap-3">
                        {" "}
                        {/* FIXED: Responsive spacing */}
                        {[
                          { icon: FiAward, value: "3+", label: "Years Exp" },
                          { icon: FiUsers, value: "15+", label: "Projects" },
                          {
                            icon: FiTrendingUp,
                            value: "100%",
                            label: "Success",
                          },
                        ].map((stat, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="bg-zinc-900/90 backdrop-blur-md rounded-xl p-2 sm:p-3 text-center border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-300" // FIXED: Responsive padding
                          >
                            <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 mx-auto mb-1 sm:mb-2" />{" "}
                            {/* FIXED: Responsive icon size */}
                            <div
                              className={`text-xs sm:text-sm font-bold text-white ${poppins.className}`} // FIXED: Responsive text
                            >
                              {stat.value}
                            </div>
                            <div className="text-[10px] sm:text-xs text-gray-400 font-medium">
                              {" "}
                              {/* FIXED: Responsive text */}
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced Floating Tech Icons - FIXED: Responsive positioning */}
                <motion.div
                  className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/25" // FIXED: Responsive size and position
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <SiReact className="w-6 h-6 sm:w-8 sm:h-8 text-white" />{" "}
                  {/* FIXED: Responsive icon */}
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25" // FIXED: Responsive size and position
                  variants={floatingVariants}
                  animate="float"
                >
                  <SiNodedotjs className="w-5 h-5 sm:w-7 sm:h-7 text-white" />{" "}
                  {/* FIXED: Responsive icon */}
                </motion.div>

                {/* New Floating Icon - FIXED: Responsive positioning */}
                <motion.div
                  className="absolute top-1/2 -right-6 sm:-right-10 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/25" // FIXED: Responsive size and position
                  animate={{
                    y: [-15, 15, -15],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <SiFramer className="w-4 h-4 sm:w-6 sm:h-6 text-white" />{" "}
                  {/* FIXED: Responsive icon */}
                </motion.div>
              </div>
            </motion.div>
            {/* Enhanced Content - FIXED: Right spacing on mobile */}
            <motion.div
              variants={itemVariants}
              className="space-y-8 sm:space-y-10 px-2 sm:px-0"
            >
              {" "}
              {/* FIXED: Added px-2 on mobile */}
              {/* Enhanced Experience Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {" "}
                {/* FIXED: Responsive gap */}
                <EnhancedExperienceCard
                  field="Full Stack"
                  duration="3+ Years"
                  icon={<FiCode className="w-6 h-6 sm:w-7 sm:h-7" />}
                  gradient="from-purple-500 to-blue-500"
                  description="End-to-end solutions"
                />
                <EnhancedExperienceCard
                  field="Backend"
                  duration="3+ Years"
                  icon={<FiServer className="w-6 h-6 sm:w-7 sm:h-7" />}
                  gradient="from-blue-500 to-cyan-500"
                  description="Robust APIs & Systems"
                />
                <EnhancedExperienceCard
                  field="Mobile"
                  duration="2+ Years"
                  icon={<FiSmartphone className="w-6 h-6 sm:w-7 sm:h-7" />}
                  gradient="from-cyan-500 to-green-500"
                  description="Cross-platform apps"
                />
              </div>
              {/* Enhanced Description */}
              <div className="space-y-6 sm:space-y-8">
                {" "}
                {/* FIXED: Responsive spacing */}
                <div className="space-y-4 sm:space-y-6">
                  {" "}
                  {/* FIXED: Responsive spacing */}
                  <h3
                    className={`text-2xl sm:text-3xl lg:text-4xl font-black text-white ${poppins.className}`} // FIXED: Responsive text
                  >
                    Crafting Digital{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Excellence
                    </span>
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {" "}
                    {/* FIXED: Responsive spacing */}
                    <p
                      className={`text-gray-300/90 leading-relaxed text-base sm:text-lg ${inter.className}`} // FIXED: Responsive text
                    >
                      I'm{" "}
                      <span
                        className={`${poppins.className} text-purple-400 font-semibold`}
                      >
                        Aman Soni
                      </span>
                      , a passionate Full Stack Developer with{" "}
                      <span
                        className={`${poppins.className} text-pink-400 font-semibold`}
                      >
                        3+ years
                      </span>{" "}
                      of experience building scalable web applications and
                      cutting-edge digital solutions.
                    </p>
                    <p
                      className={`text-gray-300/90 leading-relaxed text-base sm:text-lg ${inter.className}`} // FIXED: Responsive text
                    >
                      I specialize in creating seamless user experiences with
                      modern technologies, clean architecture, and
                      performance-optimized code that delivers real business
                      value.
                    </p>
                  </div>
                </div>
                {/* Enhanced Key Strengths */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {" "}
                  {/* FIXED: Responsive gap */}
                  {[
                    "Modern Tech Stack",
                    "Clean Code Architecture",
                    "Performance Optimization",
                    "User-Centric Design",
                    "Agile Development",
                    "Continuous Learning",
                  ].map((strength, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 sm:space-x-3 group" // FIXED: Responsive spacing
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />{" "}
                      {/* FIXED: Responsive dot size */}
                      <span
                        className={`text-gray-300 font-medium text-sm sm:text-base ${inter.className} group-hover:text-white transition-colors duration-300`} // FIXED: Responsive text
                      >
                        {strength}
                      </span>
                    </motion.div>
                  ))}
                </div>
                {/* Enhanced Tech Stack Preview */}
                <motion.div
                  className="p-4 sm:p-6 bg-zinc-800/40 backdrop-blur-md rounded-2xl border border-zinc-700/50 hover:border-purple-500/30 transition-all duration-500 group" // FIXED: Responsive padding
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    {" "}
                    {/* FIXED: Responsive spacing */}
                    <span
                      className={`${poppins.className} text-base sm:text-lg font-semibold text-white`} // FIXED: Responsive text
                    >
                      Tech Stack
                    </span>
                    <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />{" "}
                    {/* FIXED: Responsive icon */}
                  </div>
                  <div className="flex items-center justify-center sm:justify-start space-x-4 sm:space-x-6 flex-wrap gap-3 sm:gap-0">
                    {" "}
                    {/* FIXED: Responsive layout */}
                    {[
                      {
                        icon: SiNextdotjs,
                        color: "text-white",
                        name: "Next.js",
                      },
                      {
                        icon: SiTypescript,
                        color: "text-blue-400",
                        name: "TypeScript",
                      },
                      {
                        icon: SiMongodb,
                        color: "text-green-400",
                        name: "MongoDB",
                      },
                      {
                        icon: SiTailwindcss,
                        color: "text-cyan-400",
                        name: "Tailwind",
                      },
                      { icon: SiReact, color: "text-cyan-300", name: "React" },
                    ].map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.3, y: -5 }}
                        className="flex flex-col items-center space-y-1 sm:space-y-2 group/tech" // FIXED: Responsive spacing
                      >
                        <div
                          className={`${tech.color} opacity-80 group-hover/tech:opacity-100 transition-all duration-300`}
                        >
                          <tech.icon className="w-5 h-5 sm:w-7 sm:h-7" />{" "}
                          {/* FIXED: Responsive icon */}
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-400 font-medium opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300">
                          {" "}
                          {/* FIXED: Responsive text */}
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                {/* Enhanced CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="pt-4"
                >
                  <Link
                    href="#contact"
                    className="group relative inline-flex items-center space-x-3 sm:space-x-4 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-2xl font-bold text-white shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 overflow-hidden text-base sm:text-lg" // FIXED: Responsive sizing
                  >
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className={`relative z-10 ${poppins.className}`}>
                      Let's Build Something Amazing
                    </span>
                    <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />{" "}
                    {/* FIXED: Responsive icon */}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Experience Card Component - FIXED: Responsive design
const EnhancedExperienceCard = ({
  field,
  duration,
  icon,
  gradient,
  description,
}: {
  field: string;
  duration: string;
  icon: JSX.Element;
  gradient: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      className="group relative bg-zinc-800/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-500 cursor-pointer" // FIXED: Responsive padding
    >
      {/* Animated Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
      />

      {/* Hover Glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 blur-xl rounded-2xl transition-opacity duration-500`}
      />

      <div className="relative z-10 text-center space-y-3 sm:space-y-4">
        {" "}
        {/* FIXED: Responsive spacing */}
        <motion.div
          className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${gradient} rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-105 sm:group-hover:scale-110 transition-all duration-500`} // FIXED: Responsive size and hover
          whileHover={{ rotate: 5 }}
        >
          {icon}
        </motion.div>
        <div className="space-y-1 sm:space-y-2">
          {" "}
          {/* FIXED: Responsive spacing */}
          <div
            className={`font-bold text-white text-base sm:text-lg ${poppins.className}`}
          >
            {" "}
            {/* FIXED: Responsive text */}
            {field}
          </div>
          <div
            className={`font-semibold text-gray-300 text-sm sm:text-base ${poppins.className}`}
          >
            {" "}
            {/* FIXED: Responsive text */}
            {duration}
          </div>
          <div className="text-xs sm:text-sm text-gray-400 font-medium">
            {description}
          </div>{" "}
          {/* FIXED: Responsive text */}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
