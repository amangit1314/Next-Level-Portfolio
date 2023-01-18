import { motion } from "framer-motion";
function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between p-8 mx-auto backdrop-blur-sm max-w-7xl">
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
        class="bg-clip-text cursor-pointer font-bold text-xl md:text-2xl lg:text-2xl xl:text-2xl text-transparent bg-gradient-to-r from-pink-500 to bg-purple-500"
      >
        Aman
        <span className="invisible xl:visible md:invisible lg:visible">
          {" "}
          Soni
        </span>
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
        className="flex items-center invisible list-none md:inline-flex lg:visible xl:visible"
      >
        <div
          className="py-3 mr-8 text-lg font-bold text-purple-500 duration-500 cursor-pointer hover:shadow-lg"
          href="#skills-sect"
        >
          About
        </div>
        <div
          className="py-3 mr-8 text-lg font-bold text-purple-500 duration-500 cursor-pointer hover:shadow-lg"
          href="#skills-sect"
        >
          Skills
        </div>
        <div
          className="py-3 mr-8 text-lg font-bold text-purple-500 duration-500 cursor-pointer hover:shadow-lg"
          href="#projects"
        >
          Projects
        </div>
        <div
          className="py-3 mr-8 text-lg font-bold text-purple-500 duration-500cursor-pointer hover:shadow-lg"
          href="#skills-sect"
        >
          Blog
        </div>
        <div
          className="py-3 text-lg font-bold text-purple-500 duration-500 cursor-pointer hover:shadow-lg"
          href="#contact"
        >
          Contact
        </div>
      </motion.div>

      {/* Show hamburger icon on only mobile screen */}
      {/* <motion.div
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
        className="items-center justify-center visible block p-0 text-4xl list-none md:hidden lg:hidden xl:hidden"
      >

      </motion.div> */}
    </header>
  );
}

export default Header;
