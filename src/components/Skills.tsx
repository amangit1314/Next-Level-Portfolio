"use client";

import { motion } from "framer-motion";
import { FiChevronRight, FiStar } from "react-icons/fi";
import { PROJECTS } from "@/utils/constants";
import { inter, poppins } from "@/lib/fonts";
import SkillCard from "./SkillCard";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { skillsQuery, profileQuery } from "@/sanity/lib/queries";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGithub,
  SiGit,
  SiSupabase,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiExpress,
  SiNestjs,
  SiPython,
  SiPytorch,
  SiHuggingface,
  SiOpenai,
  SiJupyter,
  SiTensorflow,
} from "react-icons/si";

const categories = ["Frontend", "Backend", "Mobile", "Database", "DevOps", "AI & Machine Learning", "MLOps"];

const floatingVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      // ease: "easeInOut",
    },
  },
};

// Skill to icon component mapping
const skillToIconMap: { [key: string]: any } = {
  "Next.js": SiNextdotjs,
  NestJS: SiNestjs || SiNodedotjs, // Fallback to Node.js if NestJS not available
  "Node.js": SiNodedotjs,
  "React.js": SiReact,
  Javascript: SiJavascript,
  JavaScript: SiJavascript,
  Typescript: SiTypescript,
  TypeScript: SiTypescript,
  GitHub: SiGithub,
  Git: SiGit,
  "React Query": SiReact, // Or find/use specific tanstack query icon
  Zustand: SiReact, // State management fallback to React
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  SQL: SiPostgresql, // Generic SQL fallback
  MongoDB: SiMongodb,
  Redis: SiRedis,
  "Express.js": SiExpress,
  // Add more as needed
  TailwindCSS: SiTailwindcss,
  Framer: SiFramer,
  Python: SiPython,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  HuggingFace: SiHuggingface,
  OpenAI: SiOpenai,
  LangChain: SiOpenai,
  Jupyter: SiJupyter,
};

const getTechIcon = (techName: string) => {
  // Normalize skill name (trim, handle common variations)
  const normalizedSkill = techName.trim();

  // Return mapped icon or fallback
  return skillToIconMap[normalizedSkill] || SiJavascript;
};

const Skills = () => {
  const [skills, setSkills] = useState<any[]>([]);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const skillsData = await client.fetch(skillsQuery);
      const profileData = await client.fetch(profileQuery);
      setSkills(skillsData);
      setProfile(profileData);
    };
    fetchData();
  }, []);

  console.log("Fetched skills:", JSON.stringify(skills, null, 2));
  return (
    <section
      id="skills"
      className="relative py-24 lg:py-32 overflow-hidden px-4 md:px-8 bg-linear-to-br from-theme-bg-primary via-transparent to-theme-primary-dark/10"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-theme-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-theme-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-theme-accent/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-20"
        >
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <motion.div
              className="flex items-center justify-center space-x-3 mb-6"
              variants={floatingVariants}
              whileInView="float"
              viewport={{ once: false }}
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-theme-primary to-transparent" />
              <span
                className={`text-sm font-semibold text-theme-primary/90 tracking-widest uppercase ${poppins.className}`}
              >
                My Technical Arsenal
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-theme-secondary to-transparent" />
            </motion.div>
            {/* <h2
              className={`${poppins.className} text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight`}
            >
              Skills & Technologies
            </h2> */}
            <h2
              className={`${poppins.className} text-3xl sm:text-5xl lg:text-7xl font-black theme-text-gradient bg-clip-text text-transparent leading-tight`}
            >
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 theme-gradient-primary mx-auto rounded-full" />
          </motion.div>

          {/* Enhanced Skills by Category */}
          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
                className="space-y-8"
              >
                {/* Enhanced Category Title */}
                <div className="flex items-center space-x-6 group cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 theme-gradient-primary rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <h3
                      className={`text-2xl lg:text-3xl font-black text-theme-text-primary ${poppins.className} group-hover:theme-text-gradient group-hover:bg-clip-text group-hover:theme-text-gradient transition-all duration-500`}
                    >
                      {category}
                    </h3>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-theme-border to-transparent group-hover:from-theme-primary/50 group-hover:to-theme-secondary/50 transition-all duration-500" />
                  <FiChevronRight className="w-6 h-6 text-theme-text-muted group-hover:text-theme-primary group-hover:translate-x-2 transition-all duration-300" />
                </div>

                {/* Enhanced Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-theme-primary/10 via-theme-secondary/10 to-theme-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-theme-bg-secondary/40 backdrop-blur-md rounded-3xl border border-theme-border/50 hover:border-theme-primary/30 p-8 lg:p-12 transition-all duration-500">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {(profile?.stats
                  ? [
                    {
                      value: profile.stats.experienceYears || "3+",
                      label: "Years Experience",
                      color: "from-purple-400 to-pink-400",
                      icon: FiStar,
                    },
                    {
                      value:
                        profile.stats.technologiesCount ||
                        `${skills.length}+`,
                      label: "Technologies",
                      color: "from-blue-400 to-cyan-400",
                      icon: FiStar,
                    },
                    {
                      value: profile.stats.projectsCount || PROJECTS.length,
                      label: "Projects Built",
                      color: "from-green-400 to-teal-400",
                      icon: FiStar,
                    },
                    {
                      value: profile.stats.clientSatisfaction || "100%",
                      label: "Client Satisfaction",
                      color: "from-orange-400 to-red-400",
                      icon: FiStar,
                    },
                  ]
                  : [
                    {
                      value: "3+",
                      label: "Years Experience",
                      color: "from-purple-400 to-pink-400",
                      icon: FiStar,
                    },
                    {
                      value: `${skills.length}+`,
                      label: "Technologies",
                      color: "from-blue-400 to-cyan-400",
                      icon: FiStar,
                    },
                    {
                      value: PROJECTS.length,
                      label: "Projects Built",
                      color: "from-green-400 to-teal-400",
                      icon: FiStar,
                    },
                    {
                      value: "100%",
                      label: "Client Satisfaction",
                      color: "from-orange-400 to-red-400",
                      icon: FiStar,
                    },
                  ]
                ).map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group/stat cursor-pointer"
                  >
                    <div
                      className={`text-3xl lg:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 ${poppins.className}`}
                    >
                      {stat.value}
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <stat.icon className="w-4 h-4 text-theme-text-muted group-hover/stat:text-theme-primary transition-colors duration-300" />
                      <div
                        className={`text-sm text-theme-text-muted font-medium group-hover/stat:text-theme-text-primary transition-colors duration-300 ${inter.className}`}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
