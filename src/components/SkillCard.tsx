import { poppins } from "@/lib/fonts";
import { Skill } from "@/types/skill";
import { motion } from "framer-motion";

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const IconComponent = skill.icon;

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
      className="group relative bg-zinc-800/40 backdrop-blur-md rounded-2xl border border-zinc-700/50 hover:border-blue-500/50 p-6 cursor-pointer overflow-hidden transition-all duration-500"
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
        <div className="absolute inset-[1px] rounded-2xl bg-zinc-900" />
      </div>

      {/* Skill Content */}
      <div className="relative z-10 text-center space-y-4">
        {/* Enhanced Icon */}
        <div className="flex justify-center">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500`}
          >
            <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
          </motion.div>
        </div>

        {/* Name & Proficiency */}
        <div className="space-y-3">
          <div
            className={`font-bold text-white text-sm group-hover:text-white transition-colors duration-300 ${poppins.className}`}
          >
            {skill.name}
          </div>

          {/* Proficiency Bar */}
          {skill.proficiency && (
            <div className="space-y-2">
              <div className="w-full bg-zinc-700/50 rounded-full h-1.5 overflow-hidden">
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
                <span className="text-xs text-gray-400 font-medium">
                  Proficiency
                </span>
                <span className="text-xs font-bold text-white">
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
            className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
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
