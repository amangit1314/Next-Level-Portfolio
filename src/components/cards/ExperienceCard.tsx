import React, { JSX } from "react";
import { anton, jetbrainsMono } from "@/lib/fonts";
import { motion } from "framer-motion";

// Hard-edged HUD card — matches the rest of the site's rounded-none/
// no-blur language (was rounded-2xl + backdrop-blur, the one card the
// v2→HUD pass missed; flagged from a screenshot comparison against the
// other cards on the page).
const ExperienceCard = ({
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
      whileHover={{ y: -4 }}
      className="group relative h-full bg-theme-bg-secondary/70 rounded-none p-4 sm:p-6 border border-theme-border/60 hover:border-theme-primary/50 transition-all duration-300 cursor-pointer shadow-sm shadow-black/[0.05]"
    >
      {/* Hover glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`}
      />

      <div className="relative z-10 text-center space-y-3 sm:space-y-4">
        <motion.div
          className={`inline-flex text-theme-bg-primary items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${gradient} rounded-none shadow-lg group-hover:shadow-xl group-hover:scale-105 sm:group-hover:scale-110 transition-all duration-500`}
          whileHover={{ rotate: 5 }}
        >
          {icon}
        </motion.div>

        <div className="space-y-1 sm:space-y-3">
          <div className="">
            <div
              className={`uppercase leading-tight text-theme-text-primary text-base sm:text-lg ${anton.className}`}
            >
              {field}
            </div>
            <div
              className={`font-semibold text-theme-text-secondary text-sm sm:text-base ${jetbrainsMono.className}`}
            >
              {duration}
            </div>
          </div>
          {/* <div className="text-xs sm:text-sm text-theme-text-muted font-medium">
            {description}
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
