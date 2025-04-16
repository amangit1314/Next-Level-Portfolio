
// import React from "react";
// import { PROJECTS } from "@/utils/constants";
// import Image from "next/image";
// import Link from "next/link";

// const Project = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4">
//       <div className="flex flex-col items-center justify-between px-4 md:px-8 xl:px-20 mt-8">
//         <p className="text-base font-normal text-center text-gray-300">
//           See all my projects below
//         </p>
//         <p className="mt-2 text-3xl font-semibold text-center xl:text-4xl text-white">
//           Projects
//         </p>
//       </div>

//       <div className="px-4 md:px-8 xl:px-20 py-8 space-y-10">
//         {PROJECTS.map((project, index) => (
//           <div
//             key={index}
//             className="flex flex-col md:flex-row md:items-start md:space-x-10 space-y-4 md:space-y-0"
//           >
//             <Link
//               href={project.link}
//               className="w-full md:w-[40%] lg:w-[30%] flex-shrink-0"
//             >
//               <Image
//                 src={project.image}
//                 width={600}
//                 height={300}
//                 alt={project.title}
//                 className="rounded-xl w-full h-[200px] sm:h-[250px] md:h-[220px] object-cover transition-all duration-300"
//               />
//             </Link>

//             <div className="w-full">
//               <Link href={project.link}>
//                 <h6 className="mb-2 text-xl font-semibold text-white cursor-pointer hover:underline transition-all duration-300">
//                   {project.title}
//                 </h6>
//               </Link>
//               <p className="mb-4 text-sm text-gray-300">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {project.technologies.map((tech, index) => (
//                   <span
//                     key={index}
//                     className="rounded bg-neutral-900 text-gray-300 px-2 py-1 text-sm font-medium"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Project;

import React from "react";
import { PROJECTS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Project = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b  bg-transparent">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm md:text-base text-purple-400 font-mono mb-2">
            My Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-400">
            Here are some of my selected projects with case studies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-8 md:gap-12"
        >
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-2xl bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 border border-neutral-700 hover:border-purple-400/20"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image */}
                <div className="md:w-1/2 lg:w-2/5 relative overflow-hidden">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      width={800}
                      height={500}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 md:w-1/2 lg:w-3/5 flex flex-col justify-center">
                  <div className="mb-4 flex items-center space-x-2">
                    {/* {project.featured && (
                      <span className="text-xs font-mono px-2 py-1 bg-purple-400/10 text-purple-400 rounded">
                        Featured
                      </span>
                    )} */}
                    <span className="text-xs font-mono text-neutral-400">
                      Project {index + 1}
                    </span>
                  </div>

                  <Link href={project.link}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="text-neutral-400 mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-mono px-3 py-1 bg-neutral-900 text-neutral-300 rounded-full border border-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <div className="mt-auto">
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 group/link transition-colors"
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-purple-400 text-purple-400 rounded-full hover:bg-purple-400/10 transition-all duration-300 font-medium"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;