import { poppins } from "@/lib/fonts";
import { motion } from "framer-motion";

// Enhanced Experience Card Component - FIXED: Responsive design
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
        <motion.div
          className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${gradient} rounded-2xl shadow-lg group-hover:shadow-xl group-hover:scale-105 sm:group-hover:scale-110 transition-all duration-500`} // FIXED: Responsive size and hover
          whileHover={{ rotate: 5 }}
        >
          {icon}
        </motion.div>

        <div className="space-y-1 sm:space-y-3">
          <div className="">
            <div
              className={`font-bold text-white text-base sm:text-lg ${poppins.className}`}
            >
              {field}
            </div>
            <div
              className={`font-semibold text-gray-300 text-sm sm:text-base ${poppins.className}`}
            >
              {duration}
            </div>
          </div>
          {/* <div className="text-xs sm:text-sm text-gray-400 font-medium">
            {description}
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
