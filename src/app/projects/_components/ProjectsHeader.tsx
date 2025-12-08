// import { inter, unbounded } from "@/lib/fonts";
// import { ProfileStats } from "@/types/profile-stats";
// import { motion } from "framer-motion";

// interface ProjectsHeaderProps {
//   projectCount: number;
//   stats: ProfileStats;
// }

// const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({
//   projectCount,
//   stats,
// }) => {
//   const headerStats = [
//     { number: `${projectCount}+`, label: "Projects" },
//     { number: `${stats.yearsExperience || 2}+`, label: "Years" },
//     { number: `${stats.technologies || 24}+`, label: "Technologies" },
//   ];

//   return (
//     <section className="relative py-24 md:py-12 overflow-hidden bg-theme-bg-primary">
//       {/* Animated Background Grid */}
//       <div className="absolute inset-0">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, rgba(148,163,184,0.1) 1px, transparent 1px),
//               linear-gradient(to bottom, rgba(148,163,184,0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: "4rem 4rem",
//           }}
//         />
//       </div>

//       {/* Enhanced Background Effects */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//           }}
//           className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-theme-primary/30 blur-[120px] rounded-full"
//         />
//         <motion.div
//           animate={{
//             scale: [1, 1.3, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             delay: 1,
//           }}
//           className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/30 blur-[120px] rounded-full"
//         />
//         <motion.div
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{
//             duration: 7,
//             repeat: Infinity,
//             delay: 2,
//           }}
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-theme-secondary/20 blur-[100px] rounded-full"
//         />
//       </div>

//       {/* Floating Particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-theme-primary/40 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <div className="container px-4 mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           {/* Enhanced Breadcrumb */}
//           <motion.nav
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="flex justify-center mb-8"
//           >
//             <ol
//               className={`flex items-center space-x-3 text-sm backdrop-blur-sm bg-theme-bg-secondary/60 px-6 py-3 rounded-full border border-theme-border ${unbounded.className}`}
//             >
//               <li>
//                 <a
//                   href="/"
//                   className="text-theme-text-muted hover:text-theme-text-primary transition-colors duration-300"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li className="text-theme-text-muted">→</li>
//               <li className="theme-text-gradient font-medium bg-clip-text text-transparent">
//                 Projects
//               </li>
//             </ol>
//           </motion.nav>

//           {/* Enhanced Title */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="mb-8"
//           >
//             <h1
//               className={`text-4xl md:text-5xl lg:text-6xl font-black text-theme-text-primary mb-4 tracking-tight ${unbounded.className}`}
//             >
//               <span className="inline-block theme-text-gradient pb-3 bg-clip-text">
//                 Projects
//               </span>
//             </h1>

//             {/* Decorative Underline */}
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: "200px" }}
//               transition={{ duration: 1, delay: 0.6 }}
//               className="h-1.5 theme-gradient-accent mx-auto rounded-full"
//             />
//           </motion.div>

//           {/* Enhanced Subtitle */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className={`text-xl md:text-2xl text-theme-text-secondary max-w-4xl mx-auto mb-16 leading-relaxed ${inter.className}`}
//           >
//             Showcasing{" "}
//             <span
//               className={`text-theme-primary font-semibold ${unbounded.className}`}
//             >
//               {projectCount}+ projects
//             </span>{" "}
//             built over{" "}
//             <span
//               className={`text-theme-secondary font-semibold ${unbounded.className}`}
//             >
//               {stats.yearsExperience || "2+"} years
//             </span>{" "}
//             of professional development experience.
//             <br className="hidden md:block" />
//             <span className="text-theme-text-muted">
//               From enterprise applications to innovative side projects.
//             </span>
//           </motion.p>

//           {/* Enhanced Stats Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//             {headerStats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7 + index * 0.1 }}
//                 whileHover={{ y: -5, scale: 1.05 }}
//                 className="group relative"
//               >
//                 {/* Card Background */}
//                 <div className="absolute inset-0 bg-linear-to-br from-theme-primary/20 to-theme-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-100" />

//                 {/* Card Content */}
//                 <div className="relative backdrop-blur-sm bg-theme-bg-secondary/60 border border-theme-border rounded-2xl p-6 hover:border-theme-primary/50 transition-all duration-300">
//                   {/* Top Accent */}
//                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 theme-gradient-accent rounded-full" />

//                   <motion.div
//                     className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-br from-theme-text-primary to-theme-primary-light mb-3 ${unbounded.className}`}
//                     initial={{ scale: 0.5, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
//                   >
//                     {stat.number}
//                   </motion.div>

//                   <div
//                     className={`text-sm font-medium text-theme-text-muted uppercase tracking-wider ${unbounded.className}`}
//                   >
//                     {stat.label}
//                   </div>

//                   {/* Hover Glow */}
//                   <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-theme-primary/0 to-theme-secondary/0 group-hover:from-theme-primary/10 group-hover:to-theme-secondary/10 transition-all duration-300" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Scroll Indicator */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.2 }}
//             className="mt-20"
//           >
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className={`inline-flex flex-col items-center text-theme-text-muted hover:text-theme-primary transition-colors cursor-pointer ${unbounded.className}`}
//             >
//               <span className="text-xs uppercase tracking-wider mb-2">
//                 Scroll to explore
//               </span>
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 14l-7 7m0 0l-7-7m7 7V3"
//                 />
//               </svg>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsHeader;


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
    { number: `${projectCount}+`, label: "Projects", icon: "📦" },
    { number: `${stats.yearsExperience || 2}+`, label: "Years", icon: "⏱️" },
    { number: `${stats.technologies || 24}+`, label: "Technologies", icon: "⚡" },
  ];

  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-theme-bg-primary">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(168,85,247,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(168,85,247,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "3rem 3rem",
          }}
        />
      </div>

      {/* Enhanced Gradient Orbs with better positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-theme-primary/40 blur-[140px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-theme-secondary/40 blur-[140px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-theme-accent/30 blur-[120px] rounded-full"
        />
      </div>

      {/* Floating Particles with varied sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const size = Math.random() > 0.7 ? 2 : 1;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 3 === 0 
                  ? 'rgba(168,85,247,0.6)' 
                  : i % 3 === 1 
                  ? 'rgba(236,72,153,0.6)' 
                  : 'rgba(249,115,22,0.6)',
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Modern Breadcrumb with glass effect */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <ol
              className={`flex items-center space-x-3 text-sm backdrop-blur-xl bg-theme-bg-secondary/80 px-8 py-4 rounded-full border border-theme-border/50 shadow-lg shadow-theme-primary/10 ${unbounded.className}`}
            >
              <li>
                <a
                  href="/"
                  className="text-theme-text-muted hover:text-theme-primary transition-all duration-300 flex items-center gap-2"
                >
                  <span>🏠</span> Home
                </a>
              </li>
              <li>
                <svg className="w-4 h-4 text-theme-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="theme-text-gradient font-semibold flex items-center gap-2">
                <span>💼</span> Projects
              </li>
            </ol>
          </motion.nav>

          {/* Hero Title with improved animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-10"
          >
            <motion.h1
              className={`text-5xl md:text-7xl lg:text-8xl font-black text-theme-text-primary mb-6 tracking-tight ${unbounded.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="inline-block theme-text-gradient pb-2 bg-clip-text relative">
                My Projects
                {/* Animated underline */}
                {/* <motion.span
                  className="absolute -bottom-2 pt-2 left-0 right-0 h-2 theme-gradient-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                /> */}
              </span>
            </motion.h1>
          </motion.div>

          {/* Enhanced Description with better typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <p
              className={`text-xl md:text-2xl text-theme-text-secondary leading-relaxed ${inter.className}`}
            >
              A curated collection of{" "}
              <span className="relative inline-block">
                <span className={`text-theme-primary font-bold ${unbounded.className}`}>
                  {projectCount}+ innovative projects
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-theme-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                />
              </span>
              {" "}crafted over{" "}
              <span className="relative inline-block">
                <span className={`text-theme-secondary font-bold ${unbounded.className}`}>
                  {stats.yearsExperience || "2+"} years
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-theme-secondary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                />
              </span>
            </p>
            <p className={`text-lg text-theme-text-muted mt-4 ${inter.className}`}>
              Enterprise applications • Side projects • Open source contributions
            </p>
          </motion.div>

          {/* Premium Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {headerStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 0.8 + index * 0.15,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-theme-primary via-theme-secondary to-theme-accent rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-500" />

                {/* Card */}
                <div className="relative backdrop-blur-2xl bg-gradient-to-br from-theme-bg-secondary/90 to-theme-bg-tertiary/90 border border-theme-border/50 rounded-3xl p-8 hover:border-theme-primary/60 transition-all duration-500 overflow-hidden">
                  {/* Top gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 theme-gradient-accent" />
                  
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div
                      style={{
                        backgroundImage: `radial-gradient(circle, var(--theme-primary) 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                      }}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="text-5xl mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1 + index * 0.15, type: "spring" }}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Number with counter animation */}
                  <motion.div
                    className={`text-5xl md:text-6xl font-black mb-3 ${unbounded.className}`}
                    style={{
                      background: 'linear-gradient(135deg, var(--theme-primary-light), var(--theme-secondary))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.number}
                  </motion.div>

                  {/* Label */}
                  <div
                    className={`text-base font-semibold text-theme-text-muted uppercase tracking-widest ${unbounded.className}`}
                  >
                    {stat.label}
                  </div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator with modern design */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex flex-col items-center cursor-pointer group"
            >
              <span className={`text-xs uppercase tracking-widest mb-3 text-theme-text-muted group-hover:text-theme-primary transition-colors duration-300 ${unbounded.className}`}>
                Explore Projects
              </span>
              <div className="relative">
                <div className="absolute inset-0 bg-theme-primary/20 blur-xl rounded-full" />
                <div className="relative w-8 h-12 border-2 border-theme-primary/50 rounded-full flex items-start justify-center p-2 group-hover:border-theme-primary transition-colors duration-300">
                  <motion.div
                    animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 h-1.5 bg-theme-primary rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-theme-bg-primary to-transparent pointer-events-none" />
    </section>
  );
};

export default ProjectsHeader;