import { SOCIAL_LINKS } from "@/utils/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaMailBulk } from "react-icons/fa";

export const Contact = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-gradient-to-b bg-transparent overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-600/20 blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Contact Card */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative bg-neutral-900/70 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 md:p-10 overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Header */}
            <motion.div
              variants={item}
              className="relative mb-8 pb-6 border-b border-neutral-800"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center justify-center">
                Get In Touch{" "}
                <motion.span
                  className="text-purple-500 ml-1"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  .
                </motion.span>
              </h1>
            </motion.div>

            {/* Content */}
            <div className="relative space-y-8">
              <motion.p
                variants={item}
                className="text-center text-neutral-400 text-sm md:text-base"
              >
                Have a project in mind or want to collaborate? Feel free to
                reach out!
              </motion.p>

              {/* Social Links Grid */}
              <motion.div
                variants={container}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
              >
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex justify-center"
                  >
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} transition-all duration-300 flex flex-col items-center gap-2`}
                    >
                      <div className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300">
                        {social.icon}
                      </div>
                      <span className="text-xs font-medium">{social.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Email Section */}
              <motion.div
                variants={item}
                className="flex flex-col items-center gap-4 mt-8 pt-6 border-t border-neutral-800"
              >
                <p className="text-neutral-400 text-sm">
                  Or send me an email at:
                </p>
                <div className="flex items-center gap-3 bg-neutral-800/50 px-6 py-3 rounded-full">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <FaMailBulk className="text-purple-400" />
                  </div>
                  <a
                    href="mailto:amansoni53453@gmail.com"
                    className="text-base md:text-lg text-white hover:text-purple-400 transition-colors duration-300"
                  >
                    amansoni53453@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
