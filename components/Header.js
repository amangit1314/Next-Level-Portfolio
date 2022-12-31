import { motion } from "framer-motion";
function Header() {
  return (
    <header className="sticky top-0 flex items-start justify-between p-8 mx-auto backdrop-blur-sm max-w-7xl xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        href="/"
        class="bg-clip-text cursor-pointer font-bold text-xl md:text-2xl lg:text-2xl text-transparent bg-gradient-to-r from-pink-500 to bg-purple-500"
      >
        Aman
        <span> Soni</span>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center invisible p-0 list-none md:inline-flex lg:felx lg:visible xl:visible xl:flex"
      >
        <div
          className="py-3 mr-8 text-lg font-bold text-purple-500 cursor-pointer hover:shadow-lg"
          href="#skills-sect"
        >
          Skills
        </div>
        <div
          className="py-3 mr-8 text-lg font-bold text-purple-500 cursor-pointer hover:shadow-lg"
          href="#projects"
        >
          Projects
        </div>
        <div
          className="py-3 text-lg font-bold text-purple-500 cursor-pointer hover:shadow-lg"
          href="#contact"
        >
          Contact
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
