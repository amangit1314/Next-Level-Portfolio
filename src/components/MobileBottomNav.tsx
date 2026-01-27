// "use client";

// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FiHome,
//   FiUser,
//   FiCode,
//   FiBriefcase,
//   FiMail,
//   FiGithub,
// } from "react-icons/fi";

// const navLinks = [
//   { name: "Home", path: "#home", icon: FiHome },
//   { name: "About", path: "#about", icon: FiUser },
//   { name: "Skills", path: "#skills", icon: FiCode },
//   { name: "Experience", path: "#experience", icon: FiBriefcase },
//   { name: "Projects", path: "#projects", icon: FiGithub },
//   { name: "Contact", path: "#contact", icon: FiMail },
// ];

// interface MobileBottomNavProps {
//   activeSection: string;
//   onNavClick: (path: string) => void;
// }

// const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
//   activeSection,
//   onNavClick,
// }) => {
//   const [isVisible, setIsVisible] = React.useState(false);

//   // Show on mobile screens only
//   React.useEffect(() => {
//     const checkMobile = () => {
//       setIsVisible(window.innerWidth < 1024);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 100, opacity: 0 }}
//           transition={{ type: "spring", damping: 25, stiffness: 300 }}
//           className="fixed bottom-6 left-4 right-4 z-50 lg:hidden"
//         >
//           {/* Floating Navigation Bar */}
//           <div className="bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/50 rounded-2xl shadow-2xl px-4 py-3">
//             <div className="flex items-center justify-between">
//               {/* Navigation Icons */}
//               <div className="flex items-center space-x-4 flex-1 justify-between">
//                 {navLinks.map((link) => (
//                   <motion.button
//                     key={link.path}
//                     onClick={() => onNavClick(link.path)}
//                     whileTap={{ scale: 0.9 }}
//                     className={`relative flex flex-col items-center p-2 rounded-lg transition-all duration-300 min-w-[50px] ${activeSection === link.path.substring(1)
//                       ? "text-purple-400 bg-purple-500/10"
//                       : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
//                       }`}
//                   >
//                     <link.icon className="w-5 h-5 mb-1" />

//                     {/* Label for active item only */}
//                     <AnimatePresence>
//                       {activeSection === link.path.substring(1) && (
//                         <motion.span
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           exit={{ opacity: 0, scale: 0.8 }}
//                           className="text-[10px] font-medium mt-1 whitespace-nowrap"
//                         >
//                           {link.name}
//                         </motion.span>
//                       )}
//                     </AnimatePresence>
//                   </motion.button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default MobileBottomNav;


"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiCode,
  FiBriefcase,
  FiMail,
  FiGithub,
} from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "#home", icon: FiHome },
  { name: "About", path: "#about", icon: FiUser },
  { name: "Skills", path: "#skills", icon: FiCode },
  { name: "Experience", path: "#experience", icon: FiBriefcase },
  { name: "Projects", path: "#projects", icon: FiGithub },
  { name: "Contact", path: "#contact", icon: FiMail },
];

interface MobileBottomNavProps {
  activeSection: string;
  onNavClick: (path: string) => void;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onNavClick,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsVisible(window.innerWidth < 1024);

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[999] w-[90vw] max-w-[500px]"
        >
          <div
            className="
              backdrop-blur-xl
              border 
              rounded-2xl 
              shadow-lg 
              px-3 py-2
              flex
              items-center
              justify-center
              gap-2
              overflow-hidden
              bg-[var(--theme-bg-secondary)]
              border-[var(--theme-border)]
            "
          >
            <div className="flex items-center justify-between w-full overflow-x-auto scrollbar-none">
              {navLinks.map((link) => {
                const isActive = activeSection === link.path.substring(1);

                return (
                  <motion.button
                    key={link.path}
                    onClick={() => onNavClick(link.path)}
                    whileTap={{ scale: 0.92 }}
                    className={`
                      relative flex flex-col items-center 
                      min-w-[52px] px-2 py-1 rounded-xl 
                      transition-all duration-200
                      ${isActive
                        ? "bg-[var(--theme-bg-hover)] text-[var(--theme-primary)]"
                        : "text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-primary)] hover:bg-[var(--theme-bg-hover)]"
                      }
                    `}
                  >
                    <link.icon className="w-5 h-5 shrink-0" />

                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="text-[10px] mt-0.5 whitespace-nowrap text-[var(--theme-text-primary)]"
                        >
                          {link.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileBottomNav;
