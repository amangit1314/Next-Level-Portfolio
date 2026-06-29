"use client";

import { motion } from "framer-motion";
import { FiChevronRight, FiStar } from "react-icons/fi";
import { PROJECTS } from "@/utils/constants";
import { inter, unbounded } from "@/lib/fonts";
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
      className="v2-section bg-theme-bg-primary"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="v2-grid-bg absolute inset-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-theme-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="v2-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <div className="v2-label">
              <div className="v2-label-line" />
              <span className={`v2-label-text ${unbounded.className}`}>Technical Arsenal</span>
              <div className="v2-label-line" />
            </div>
            <h2 className={`text-4xl sm:text-5xl font-black text-theme-text-primary ${unbounded.className}`}>
              Skills & Technologies
            </h2>
            <div className="w-16 h-0.5 theme-gradient-primary mx-auto rounded-full" />
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
                      className={`text-2xl lg:text-3xl font-black text-theme-text-primary ${unbounded.className} group-hover:theme-text-gradient group-hover:bg-clip-text group-hover:theme-text-gradient transition-all duration-500`}
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
                      color: "theme-text-gradient",
                      icon: FiStar,
                    },
                    {
                      value:
                        profile.stats.technologiesCount ||
                        `${skills.length}+`,
                      label: "Technologies",
                      color: "theme-text-gradient",
                      icon: FiStar,
                    },
                    {
                      value: profile.stats.projectsCount || PROJECTS.length,
                      label: "Projects Built",
                      color: "theme-text-gradient",
                      icon: FiStar,
                    },
                    {
                      value: profile.stats.clientSatisfaction || "100%",
                      label: "Client Satisfaction",
                      color: "theme-text-gradient",
                      icon: FiStar,
                    },
                  ]
                  : [
                    {
                      value: "3+",
                      label: "Years Experience",
                      color: "theme-text-gradient",
                      icon: FiStar,
                    },
                    {
                      value: `${skills.length}+`,
                      label: "Technologies",
                      color: "theme-text-gradient",
                      icon: FiStar,
                    },
                    {
                      value: PROJECTS.length,
                      label: "Projects Built",
                      color: "theme-text-gradient",
                      icon: FiStar,
                    },
                    {
                      value: "100%",
                      label: "Client Satisfaction",
                      color: "theme-text-gradient",
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
                      className={`text-3xl lg:text-4xl font-black theme-text-gradient bg-clip-text text-transparent mb-2 ${unbounded.className}`}
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
