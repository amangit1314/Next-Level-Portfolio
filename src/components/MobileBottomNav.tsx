"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiHome, 
  FiUser, 
  FiCode, 
  FiBriefcase, 
  FiMail, 
  FiDownload,
  FiGithub
} from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "#home", icon: FiHome },
  { name: "About", path: "#about", icon: FiUser },
  { name: "Skills", path: "#skills", icon: FiCode },
  { name: "Projects", path: "#projects", icon: FiGithub },
  { name: "Experience", path: "#experience", icon: FiBriefcase },
  { name: "Contact", path: "#contact", icon: FiMail },
];

interface MobileBottomNavProps {
  activeSection: string;
  onNavClick: (path: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ 
  activeSection, 
  onNavClick 
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  // Show on mobile screens only
  React.useEffect(() => {
    const checkMobile = () => {
      setIsVisible(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-16 left-4 right-4 z-50 lg:hidden"
        >
          {/* Floating Navigation Bar */}
          <div className="bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/50 rounded-2xl shadow-2xl px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Navigation Icons */}
              <div className="flex items-center space-x-4 flex-1 justify-between">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.path}
                    onClick={() => onNavClick(link.path)}
                    whileTap={{ scale: 0.9 }}
                    className={`relative flex flex-col items-center p-2 rounded-lg transition-all duration-300 min-w-[50px] ${
                      activeSection === link.path.substring(1)
                        ? "text-purple-400 bg-purple-500/10"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                    }`}
                  >
                    <link.icon className="w-5 h-5 mb-1" />
                    
                    {/* Active Indicator */}
                    {/* {activeSection === link.path.substring(1) && (
                      <motion.div
                        layoutId="activeBottomNav"
                        className="w-1.5 h-1.5 bg-purple-400 rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )} */}
                    
                    {/* Label for active item only */}
                    <AnimatePresence>
                      {activeSection === link.path.substring(1) && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="text-[10px] font-medium mt-1 whitespace-nowrap"
                        >
                          {link.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}
                
                {/* Resume Download Button */}
                {/* <motion.a
                  href="/assets/aman_resume_new.pdf"
                  download
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center p-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 min-w-[50px]"
                >
                  <FiDownload className="w-5 h-5 mb-1" />
                  <span className="text-[10px] font-medium mt-1">Resume</span>
                </motion.a> */}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};