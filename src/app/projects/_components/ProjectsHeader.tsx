import { inter, unbounded } from "@/lib/fonts";
import { ProfileStats } from "@/types/profile-stats";
import { motion } from "framer-motion";


interface ProjectsHeaderProps {
  projectCount: number;
  stats: ProfileStats;
}

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({
  projectCount,
  stats,
}) => {
  const headerStats = [
    { number: `${projectCount}+`, label: "Projects" },
    { number: `${stats.yearsExperience || 3}+`, label: "Years" },
    { number: `${stats.technologies || 15}+`, label: "Technologies" },
  ];

  return (
    <section className="relative py-24 md:py-12 overflow-hidden bg-black">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgb(71, 85, 105, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(71, 85, 105, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "4rem 4rem",
          }}
        />
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/30 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/30 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/20 blur-[100px] rounded-full"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Enhanced Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <ol
              className={`flex items-center space-x-3 text-sm backdrop-blur-sm bg-white/5 px-6 py-3 rounded-full border border-white/10 ${unbounded.className}`}
            >
              <li>
                <a
                  href="/"
                  className="text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li className="text-neutral-600">→</li>
              <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium">
                Projects
              </li>
            </ol>
          </motion.nav>

          {/* Enhanced Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight ${unbounded.className}`}
            >
              <span className="inline-block bg-gradient-to-r pb-3 from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            {/* Decorative Underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 mx-auto rounded-full"
            />
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto mb-16 leading-relaxed ${inter.className}`}
          >
            Showcasing{" "}
            <span
              className={`text-purple-400 font-semibold ${unbounded.className}`}
            >
              {projectCount}+ projects
            </span>{" "}
            built over{" "}
            <span
              className={`text-cyan-400 font-semibold ${unbounded.className}`}
            >
              {stats.yearsExperience || 3} years
            </span>{" "}
            of professional development experience.
            <br className="hidden md:block" />
            <span className="text-neutral-400">
              From enterprise applications to innovative side projects.
            </span>
          </motion.p>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {headerStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-100" />

                {/* Card Content */}
                <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
                  {/* Top Accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full" />

                  <motion.div
                    className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-200 mb-3 ${unbounded.className}`}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>

                  <div
                    className={`text-sm font-medium text-neutral-400 uppercase tracking-wider ${unbounded.className}`}
                  >
                    {stat.label}
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`inline-flex flex-col items-center text-neutral-500 hover:text-purple-400 transition-colors cursor-pointer ${unbounded.className}`}
            >
              <span className="text-xs uppercase tracking-wider mb-2">
                Scroll to explore
              </span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHeader;