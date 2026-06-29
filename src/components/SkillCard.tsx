// import { poppins } from "@/lib/fonts";
// import { Skill } from "@/types/skill";
// import { motion } from "framer-motion";

// const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
//   // Safe icon component with fallback
//   const IconComponent = skill.icon as React.ComponentType<{ className?: string }> | null;

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8, y: 20 }}
//       whileInView={{ opacity: 1, scale: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       whileHover={{
//         scale: 1.1,
//         y: -8,
//         transition: { type: "spring", stiffness: 400, damping: 25 },
//       }}
//       className="group relative bg-theme-bg-secondary/40 backdrop-blur-md rounded-2xl border border-theme-border/50 hover:border-theme-primary/50 p-6 cursor-pointer overflow-hidden transition-all duration-500"
//     >
//       {/* Animated Gradient Background */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-500`}
//       />

//       {/* Hover Glow Effect */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity duration-500`}
//       />

//       {/* Animated Border */}
//       <div
//         className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//       >
//         <div className="absolute inset-[1px] rounded-2xl bg-theme-bg-primary" />
//       </div>

//       {/* Skill Content */}
//       <div className="relative z-10 text-center space-y-4">
//         {/* Enhanced Icon with fallback */}
//         <div className="flex justify-center">
//           <motion.div
//             whileHover={{ rotate: 360 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500`}
//           >
//             {IconComponent ? (
//               <IconComponent className={`${skill.color} w-8 h-8 text-white drop-shadow-lg`} />
//             ) : (
//               <div className="w-8 h-8 bg-theme-text-primary/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
//                 <span className="text-xs font-bold text-white/80">?</span>
//               </div>
//             )}
//           </motion.div>
//         </div>

//         {/* Name & Proficiency */}
//         <div className="space-y-3">
//           <div
//             className={`font-bold text-theme-text-primary text-sm group-hover:text-theme-text-primary transition-colors duration-300 ${unbounded.className}`}
//           >
//             {skill.name}
//           </div>

//           {/* Proficiency Bar */}
//           {skill.proficiency && (
//             <div className="space-y-2">
//               <div className="w-full bg-theme-bg-tertiary/50 rounded-full h-1.5 overflow-hidden">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: `${skill.proficiency}%` }}
//                   transition={{
//                     duration: 1.5,
//                     delay: index * 0.05 + 0.5,
//                     ease: "easeOut",
//                   }}
//                   className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
//                 />
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-xs text-theme-text-muted font-medium">
//                   Proficiency
//                 </span>
//                 <span className="text-xs font-bold text-theme-text-primary">
//                   {skill.proficiency}%
//                 </span>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Floating Particles on Hover */}
//       <div className="absolute inset-0 overflow-hidden rounded-2xl">
//         {[...Array(3)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-theme-text-primary rounded-full opacity-0 group-hover:opacity-100"
//             initial={{
//               x: Math.random() * 100 - 50,
//               y: Math.random() * 100 - 50,
//               scale: 0,
//             }}
//             whileHover={{
//               scale: [0, 1, 0],
//               opacity: [0, 1, 0],
//               transition: {
//                 duration: 1.5,
//                 delay: i * 0.3,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               },
//             }}
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default SkillCard;

import React from "react";
import { unbounded } from "@/lib/fonts";
import { Skill } from "@/types/skill";
import { motion } from "framer-motion";

import type { IconType } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io5";
import * as DiIcons from "react-icons/di";
import * as RiIcons from "react-icons/ri";

// Helper: get icon component from string like "FaAws"
const iconPacks: Record<string, Record<string, IconType>> = {
  Fa: FaIcons,
  Si: SiIcons,
  Tb: TbIcons,
  Bi: BiIcons,
  Io: IoIcons,
  Di: DiIcons,
  Ri: RiIcons,
};

function getIconComponent(iconName?: string): IconType | null {
  if (!iconName) return null;

  // Prefix is first 2 letters: Fa, Si, Tb, Bi, Io...
  const prefix = iconName.slice(0, 2);
  const pack = iconPacks[prefix];

  if (!pack) return null;

  const Icon = (pack as Record<string, IconType>)[iconName];
  return Icon || null;
}

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  // Get icon from string like "FaAws"
  const IconComponent = getIconComponent(skill.iconName);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.1,
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      className="group relative bg-theme-bg-secondary/40 backdrop-blur-md rounded-2xl border border-theme-border/50 hover:border-theme-primary/50 p-6 cursor-pointer overflow-hidden transition-all duration-500"
    >
      {/* Animated Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-500`}
      />

      {/* Hover Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity duration-500`}
      />

      {/* Animated Border */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      >
        <div className="absolute inset-[1px] rounded-2xl bg-theme-bg-primary" />
      </div>

      {/* Skill Content */}
      <div className="relative z-10 text-center space-y-4">
        {/* Icon with fallback */}
        <div className="flex justify-center">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500`}
          >
            {IconComponent ? (
              <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
            ) : (
              <div className="w-8 h-8 bg-theme-text-primary/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <span className="text-xs font-bold text-white/80">?</span>
              </div>
            )}
          </motion.div>
        </div>

        {/* Name & Proficiency */}
        <div className="space-y-3">
          <div
            className={`font-bold text-theme-text-primary text-sm group-hover:text-theme-text-primary transition-colors duration-300 ${unbounded.className}`}
          >
            {skill.name}
          </div>

          {/* Proficiency Bar */}
          {skill.proficiency && (
            <div className="space-y-2">
              <div className="w-full bg-theme-bg-tertiary/50 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.05 + 0.5,
                    ease: "easeOut",
                  }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-theme-text-muted font-medium">
                  Proficiency
                </span>
                <span className="text-xs font-bold text-theme-text-primary">
                  {skill.proficiency}%
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Particles on Hover */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-theme-text-primary rounded-full opacity-0 group-hover:opacity-100"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: 0,
            }}
            whileHover={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              transition: {
                duration: 1.5,
                delay: i * 0.3,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
