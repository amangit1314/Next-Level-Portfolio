// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import {
//   FiBriefcase,
//   FiCode,
//   FiDownload,
//   FiGithub,
//   FiHome,
//   FiMail,
//   FiUser,
// } from "react-icons/fi";
// import { poppins } from "@/lib/fonts";

// const navLinks = [
//   { name: "Home", path: "#home", icon: FiHome },
//   { name: "About", path: "#about", icon: FiUser },
//   { name: "Skills", path: "#skills", icon: FiCode },
//   { name: "Experience", path: "#experience", icon: FiBriefcase },
//   { name: "Projects", path: "#projects", icon: FiGithub },
//   { name: "Contact", path: "#contact", icon: FiMail },
// ];

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [isMobile, setIsMobile] = useState(false);

//   // Check if mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Handle scroll effect and active section
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);

//       // Update active section based on scroll position
//       const sections = navLinks.map((link) => link.path.substring(1));
//       const current = sections.find((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });

//       if (current) {
//         setActiveSection(current);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle smooth scroll
//   const handleNavClick = (path: string) => {
//     const element = document.querySelector(path);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       {/* Desktop Header */}
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className={`w-full py-4 transition-all duration-300 ${scrolled
//           ? "bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 shadow-2xl"
//           : "bg-transparent"
//           } ${isMobile ? "hidden" : "block"}`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between">
//             {/* Logo Section */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center space-x-3 cursor-pointer group"
//               onClick={() => handleNavClick("#home")}
//             >
//               <div className="relative">
//                 <Image
//                   src="/images/logo/logo.png"
//                   alt="Aman Soni"
//                   width={48}
//                   height={48}
//                   className="object-cover rounded-full ring-2 ring-zinc-700/50 group-hover:ring-purple-500/50 transition-all duration-300"
//                 />
//                 <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
//               </div>
//               {/* <div className="flex flex-col">
//                 <span
//                   className={`text-lg md:text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight ${poppins.className}`}
//                 >
//                   Aman Soni
//                 </span>
//                 <span className="text-xs text-zinc-400 font-medium tracking-wide">
//                   Full Stack Developer
//                 </span>
//               </div> */}
//             </motion.div>

//             {/* Desktop Navigation */}
//             <div className="flex items-center space-x-1">
//               {navLinks.map((link, index) => (
//                 <motion.button
//                   key={link.name}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 * index }}
//                   layoutId={link.name}
//                   onClick={() => handleNavClick(link.path)}
//                   className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${activeSection === link.path.substring(1)
//                     ? "text-purple-400"
//                     : "text-zinc-300 hover:text-white"
//                     }`}
//                 >
//                   <span className="relative z-10 flex items-center space-x-2">
//                     <link.icon className="w-4 h-4" />
//                     <span className={`text-xs font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight ${poppins.className}`}>{link.name}</span>
//                   </span>

//                   {/* Enhanced Active Indicator */}
//                   {activeSection === link.path.substring(1) && (
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20"
//                       layoutId="activeNav"
//                       transition={{
//                         type: "spring",
//                         stiffness: 300,
//                         damping: 30,
//                       }}
//                     />
//                   )}

//                   {/* Hover Effect */}
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     whileHover={{ scale: 1.02 }}
//                   />
//                 </motion.button>
//               ))}
//             </div>

//             {/* Resume Button */}
//             <motion.a
//               href="/assets/aman_resume_new.pdf"
//               download
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="group relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
//             >
//               <span className="relative z-10 flex items-center space-x-2">
//                 <span className={`text-xs font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight ${poppins.className}`}>Resume</span>
//                 <FiDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
//               </span>
//             </motion.a>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Header - Minimal version */}
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className={`lg:hidden fixed top-0 left-0 right-0 z-40 py-3 transition-all duration-300 ${scrolled
//           ? "bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50"
//           : "bg-transparent"
//           }`}
//       >
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center space-x-2 cursor-pointer"
//               onClick={() => handleNavClick("#home")}
//             >
//               <Image
//                 src="/images/logo/logo.png"
//                 alt="Aman Soni"
//                 width={36}
//                 height={36}
//                 className="object-cover rounded-full ring-1 ring-zinc-700/50"
//               />
//               <span
//                 className={`text-base font-bold text-white ${poppins.className}`}
//               >
//                 Aman Soni
//               </span>
//             </motion.div>

//             {/* Resume Button for Mobile Header */}
//             <motion.a
//               href="/assets/aman_resume_new.pdf"
//               download
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2 ${poppins.className}`}
//             >
//               <span>Resume</span>
//               <FiDownload className="w-4 h-4" />
//             </motion.a>
//           </div>
//         </div>
//       </motion.nav>
//     </>
//   );
// };

// export default Header;

/// ==================================================================

// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import {
//   FiBriefcase,
//   FiDownload,
//   FiGithub,
//   FiHome,
//   FiMail,
//   FiFileText,
//   FiLayers,
//   FiBookOpen,
// } from "react-icons/fi";
// import { caveat, poppins } from "@/lib/fonts";
// import { usePathname, useRouter } from "next/navigation";

// // PAGE-LEVEL NAV (top bar)
// const pageLinks = [
//   { name: "Home", path: "/", icon: FiHome },
//   { name: "Projects", path: "/projects", icon: FiGithub },
//   { name: "Components", path: "/components", icon: FiLayers },
//   { name: "Courses", path: "/courses", icon: FiBookOpen },
//   { name: "Blog", path: "/blog", icon: FiFileText },
//   { name: "Contact", path: "/contact", icon: FiMail },
// ];

// // SECTION NAV (used only on home page in a separate vertical component)
// export const sectionLinks = [
//   { name: "Intro", id: "home", icon: FiHome },
//   { name: "About", id: "about", icon: FiBriefcase },
//   { name: "Skills", id: "skills", icon: FiLayers },
//   { name: "Experience", id: "experience", icon: FiBookOpen },
//   { name: "Projects", id: "projects", icon: FiGithub },
//   { name: "Contact", id: "contact", icon: FiMail },
// ];

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   // Check if mobile
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Scroll effect for background
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Navigate to page
//   const handlePageNavClick = (path: string) => {
//     if (path === pathname) return;
//     router.push(path);
//   };

//   const isPageActive = (path: string) => {
//     if (path === "/") return pathname === "/";
//     return pathname.startsWith(path);
//   };

//   return (
//     <>
//       {/* Desktop Header */}
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className={`fixed top-0 left-0 right-0 z-40 w-full py-4 transition-all duration-300 ${scrolled
//           ? "bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 shadow-2xl"
//           : "bg-transparent"
//           } ${isMobile ? "hidden lg:block" : "block"}`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between">
//             {/* Logo Section */}
//             {/* <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center space-x-3 cursor-pointer group"
//               onClick={() => handlePageNavClick("/")}
//             >
//               <div className="relative">
//                 <Image
//                   src="/images/logo/logo.png"
//                   alt="Aman Soni"
//                   width={48}
//                   height={48}
//                   className="object-cover rounded-full ring-2 ring-zinc-700/50 group-hover:ring-purple-500/50 transition-all duration-300"
//                 />
//                 <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
//               </div>
//             </motion.div> */}

//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center space-x-3 cursor-pointer group"
//               onClick={() => handlePageNavClick("/")}
//             >
//               <div className="relative">
//                 {/* Letter logo */}
//                 <motion.div
//                   className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 ring-2 ring-zinc-700/50 group-hover:ring-purple-500/70 transition-all duration-300 overflow-hidden"
//                   whileHover={{ rotate: 2 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 >
//                   <span
//                     className={` ${caveat.className}
//           text-lg font-semibold tracking-wide
//           bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
//           bg-[length:200%_200%]
//           bg-clip-text text-transparent
//           transition-all duration-300
//           group-hover:animate-gradient-x
//         `}
//                   >
//                     As
//                   </span>
//                 </motion.div>

//                 {/* Glow ring on hover */}
//                 <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/40 via-pink-500/30 to-blue-500/40 opacity-0 blur group-hover:opacity-100 transition-all duration-500" />
//               </div>
//             </motion.div>


//             {/* Desktop Navigation - PAGE LINKS ONLY */}
//             <div className="flex items-center space-x-1">
//               {pageLinks.map((link, index) => {
//                 const active = isPageActive(link.path);
//                 return (
//                   <motion.button
//                     key={link.name}
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.05 * index }}
//                     layoutId={link.name}
//                     onClick={() => handlePageNavClick(link.path)}
//                     className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${active
//                       ? "text-purple-400"
//                       : "text-zinc-300 hover:text-white"
//                       }`}
//                   >
//                     <span className="relative z-10 flex items-center space-x-2">
//                       <link.icon className="w-4 h-4" />
//                       <span
//                         className={`text-xs font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight ${poppins.className}`}
//                       >
//                         {link.name}
//                       </span>
//                     </span>

//                     {/* Active Indicator */}
//                     {active && (
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20"
//                         layoutId="activePageNav"
//                         transition={{
//                           type: "spring",
//                           stiffness: 300,
//                           damping: 30,
//                         }}
//                       />
//                     )}

//                     {/* Hover Effect */}
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                       whileHover={{ scale: 1.02 }}
//                     />
//                   </motion.button>
//                 );
//               })}
//             </div>

//             {/* Resume Button */}
//             <motion.a
//               href="/assets/aman_resume_new.pdf"
//               download
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="group relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
//             >
//               <span className="relative z-10 flex items-center space-x-2">
//                 <span
//                   className={`text-xs font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight ${poppins.className}`}
//                 >
//                   Resume
//                 </span>
//                 <FiDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
//               </span>
//             </motion.a>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Header - Minimal */}
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="lg:hidden fixed top-0 left-0 right-0 z-40 py-3 transition-all duration-300
//           bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50"
//       >
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             {/* <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center space-x-2 cursor-pointer"
//               onClick={() => handlePageNavClick("/")}
//             >
//               <Image
//                 src="/images/logo/logo.png"
//                 alt="Aman Soni"
//                 width={36}
//                 height={36}
//                 className="object-cover rounded-full ring-1 ring-zinc-700/50"
//               />
//               <span
//                 className={`text-base font-bold text-white ${poppins.className}`}
//               >
//                 Aman Soni
//               </span>
//             </motion.div> */}

//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center space-x-3 cursor-pointer group"
//               onClick={() => handlePageNavClick("/")}
//             >
//               <div className="relative">
//                 {/* Letter logo */}
//                 <motion.div
//                   className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 ring-2 ring-zinc-700/50 group-hover:ring-purple-500/70 transition-all duration-300 overflow-hidden"
//                   whileHover={{ rotate: 2 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 >
//                   <span
//                     className={` ${caveat.className}
//           text-lg font-semibold tracking-wide
//           bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
//           bg-[length:200%_200%]
//           bg-clip-text text-transparent
//           transition-all duration-300
//           group-hover:animate-gradient-x
//         `}
//                   >
//                     As
//                   </span>
//                 </motion.div>

//                 {/* Glow ring on hover */}
//                 <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/40 via-pink-500/30 to-blue-500/40 opacity-0 blur group-hover:opacity-100 transition-all duration-500" />
//               </div>
//             </motion.div>

//             {/* Simple Resume Button for Mobile */}
//             <motion.a
//               href="/assets/aman_resume_new.pdf"
//               download
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2 ${poppins.className}`}
//             >
//               <span>Resume</span>
//               <FiDownload className="w-4 h-4" />
//             </motion.a>
//           </div>
//         </div>
//       </motion.nav>
//     </>
//   );
// };

// export default Header;

/// ====================================================================

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiDownload,
  FiGithub,
  FiHome,
  FiMail,
  FiFileText,
  FiLayers,
  FiBookOpen,
} from "react-icons/fi";
import { caveat, poppins } from "@/lib/fonts";
import { usePathname, useRouter } from "next/navigation";
import { Variants, Transition } from "framer-motion";

// PAGE-LEVEL NAV (top bar)
const pageLinks = [
  { name: "Home", path: "/", icon: FiHome },
  { name: "Projects", path: "/projects", icon: FiGithub },
  { name: "Components", path: "/components", icon: FiLayers },
  // { name: "Courses", path: "/courses", icon: FiBookOpen },
  { name: "Blogs", path: "/blogs", icon: FiFileText },
  // { name: "Contact", path: "/contact", icon: FiMail },
  // { name: "Contact", path: "/", id: "contact", icon: FiMail },
];

// SECTION NAV (used only on home page in a separate vertical component)
export const sectionLinks = [
  { name: "Intro", id: "home", icon: FiHome },
  { name: "About", id: "about", icon: FiBriefcase },
  { name: "Skills", id: "skills", icon: FiLayers },
  { name: "Experience", id: "experience", icon: FiBookOpen },
  { name: "Projects", id: "projects", icon: FiGithub },
  { name: "Contact", id: "contact", icon: FiMail },
];



const sidebarTransition: Transition = {
  type: "tween",            // <- typed as AnimationGeneratorType
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1],  // <- valid cubic-bezier tuple
  when: "beforeChildren",
  staggerChildren: 0.07,
  delayChildren: 0.1,
};

export const sidebarVariants: Variants = {
  closed: { x: "100%" },
  open: {
    x: 0,
    transition: sidebarTransition,
  },
};

export const itemVariants: Variants = {
  closed: { opacity: 0, x: 40 },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      type: "tween",
    },
  },
};

export const overlayVariants: Variants = {
  closed: { opacity: 0, pointerEvents: "none" },
  open: { opacity: 1, pointerEvents: "auto" },
};


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigate to page
  const handlePageNavClick = (path: string) => {
    if (path === pathname) return;
    router.push(path);
  };

  const isPageActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 w-full py-4 transition-all duration-300 ${scrolled
          ? "bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 shadow-2xl"
          : "bg-transparent"
          } ${isMobile ? "hidden lg:block" : "block"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handlePageNavClick("/")}
            >
              <div className="relative">
                {/* Letter logo */}
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 ring-2 ring-zinc-700/50 group-hover:ring-purple-500/70 transition-all duration-300 overflow-hidden"
                  whileHover={{ rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span
                    className={`${caveat.className} text-lg font-semibold tracking-wide bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent transition-all duration-300 group-hover:animate-gradient-x`}
                  >
                    As
                  </span>
                </motion.div>

                {/* Glow ring on hover */}
                <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/40 via-pink-500/30 to-blue-500/40 opacity-0 blur group-hover:opacity-100 transition-all duration-500" />
              </div>
            </motion.div>

            {/* Desktop Navigation - PAGE LINKS ONLY */}
            <div className="flex items-center space-x-1">
              {pageLinks.map((link, index) => {
                const active = isPageActive(link.path);
                return (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                    layoutId={link.name}
                    onClick={() => handlePageNavClick(link.path)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${active
                      ? "text-purple-400"
                      : "text-zinc-300 hover:text-white"
                      }`}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <link.icon className="w-4 h-4" />
                      <span
                        className={`text-xs font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight ${poppins.className}`}
                      >
                        {link.name}
                      </span>
                    </span>

                    {/* Active Indicator */}
                    {active && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20"
                        layoutId="activePageNav"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.02 }}
                    />
                  </motion.button>
                );
              })}
            </div>

            {/* Resume Button */}
            <motion.a
              href="/assets/aman_resume_new.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span
                  className={`text-xs font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent tracking-tight ${poppins.className}`}
                >
                  Resume
                </span>
                <FiDownload className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
              </span>
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Header - Minimal */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:hidden fixed top-0 left-0 right-0 z-40 py-3 transition-all duration-300 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => {
                setIsMenuOpen(false);
                handlePageNavClick("/");
              }}
            >
              <div className="relative">
                <motion.div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 ring-2 ring-zinc-700/50 group-hover:ring-purple-500/70 transition-all duration-300 overflow-hidden"
                  whileHover={{ rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span
                    className={`${caveat.className} text-lg font-semibold tracking-wide bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent transition-all duration-300 group-hover:animate-gradient-x`}
                  >
                    As
                  </span>
                </motion.div>
                <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/40 via-pink-500/30 to-blue-500/40 opacity-0 blur group-hover:opacity-100 transition-all duration-500" />
              </div>
            </motion.div>
            {/* Animated Menu Icon */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-700/70 text-zinc-200"
              aria-label="Toggle menu"
            >
              <motion.span
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
                className="relative h-4 w-4"
              >
                {/* top line */}
                <motion.span
                  variants={{
                    closed: { y: -3, rotate: 0 },
                    open: { y: 0, rotate: 45 },
                  }}
                  className="absolute left-0 right-0 h-[2px] rounded-full bg-current"
                />
                {/* middle line */}
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-current"
                />
                {/* bottom line */}
                <motion.span
                  variants={{
                    closed: { y: 3, rotate: 0 },
                    open: { y: 0, rotate: -45 },
                  }}
                  className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full bg-current"
                />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay + Sidebar */}
      <motion.div
        className="fixed inset-0 z-40 lg:hidden"
        variants={overlayVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Dark overlay */}
        <motion.div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Sidebar */}
        <motion.aside
          className="absolute right-0 top-0 h-full w-full sm:w-[60%] md:w-[45%] bg-black"
          variants={sidebarVariants}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
            <span
              className={`text-base font-semibold text-zinc-100 ${poppins.className}`}
            >
              Menu
            </span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-zinc-300"
              aria-label="Close menu"
            >
              <motion.span
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
                className="relative h-4 w-4"
              >
                <motion.span
                  variants={{
                    closed: { y: -3, rotate: 0 },
                    open: { y: 0, rotate: 45 },
                  }}
                  className="absolute left-0 right-0 h-[2px] rounded-full bg-current"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-current"
                />
                <motion.span
                  variants={{
                    closed: { y: 3, rotate: 0 },
                    open: { y: 0, rotate: -45 },
                  }}
                  className="absolute left-0 right-0 bottom-0 h-[2px] rounded-full bg-current"
                />
              </motion.span>
            </motion.button>
          </div>

          <div className="flex h-[calc(100%-56px)] flex-col justify-between px-6 py-6">
            {/* Main links */}
            <nav className="space-y-4">
              {pageLinks.map((link, index) => {
                const active = isPageActive(link.path);
                return (
                  <motion.button
                    key={link.name}
                    variants={itemVariants}
                    className={`flex w-full items-center justify-between text-left text-2xl font-semibold ${active ? "text-white" : "text-zinc-500"
                      }`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      handlePageNavClick(link.path);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{link.name.toUpperCase()}</span>
                    </div>
                    <link.icon className="w-5 h-5 text-zinc-500" />
                  </motion.button>
                );
              })}
            </nav>

            {/* Footer area */}
            <motion.div
              variants={itemVariants}
              className="space-y-3 text-xs text-zinc-500"
            >
              <div className="space-y-1">
                <p className="font-medium text-zinc-400">Social</p>
                <div className="flex flex-wrap gap-4 text-[11px]">
                  <a
                    href="https://github.com/amandev07"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-zinc-200"
                  >
                    GITHUB
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-zinc-200"
                  >
                    LINKEDIN
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-zinc-200"
                  >
                    TWITTER
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <p className="font-medium text-zinc-400">Contact</p>
                <p>hello@company.com</p>
                <p>+91-00000 00000</p>
              </div>
            </motion.div>
          </div>
        </motion.aside>
      </motion.div>
    </>
  );
};

export default Header;
