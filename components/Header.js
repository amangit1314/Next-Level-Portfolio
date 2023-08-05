import { motion } from "framer-motion";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
function Header() {
  return (
    <div className="sticky top-0 items-center mx-auto backdrop-blur-sm max-w-7xl">
      <nav className="sticky top-0 flex items-center justify-between p-8 mx-auto backdrop-blur-sm max-w-screen">
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
          className="flex items-center list-none md:inline-flex lg:visible xl:visible"
        >
          <ul className="flex items-center">
            {/* <li>
            <div
              className="py-3 mr-8 text-lg font-bold text-purple-500 duration-500 cursor-pointer hover:shadow-lg"
              href="#skills-sect"
            >
              About
            </div>
          </li>
          <li>
            <div
              className="py-3 mr-8 text-lg font-bold text-purple-500 duration-500 cursor-pointer hover:shadow-lg"
              href="#skills-sect"
            >
              Skills
            </div>
          </li>
          <li>
            <div
              className="py-3 mr-8 text-lg font-bold text-purple-500 duration-500 cursor-pointer hover:shadow-lg"
              href="#projects"
            >
              Projects
            </div>
          </li>
          <li>
            <div
              className="py-3 mr-8 text-lg font-bold text-purple-500 duration-500cursor-pointer hover:shadow-lg"
              href="#skills-sect"
            >
              Blog
            </div>
          </li>
          <li>
            <div
              className="py-3 text-lg font-bold text-purple-500 duration-500 cursor-pointer hover:shadow-lg"
              href="#contact"
            >
              Contact
            </div>
          </li> */}
            <li className="mr-8">
              <BsFillMoonStarsFill />
            </li>
            <li className="py-3 text-lg font-bold text-purple-500 duration-500 cursor-pointer hover:shadow-lg">
              <Link href="/api/getRESUME">Resume</Link>
            </li>
          </ul>
        </motion.div>
      </nav>
    </div>
  );
}

export default Header;

{
  /* Show hamburger icon on only mobile screen */
}
{
  /* <motion.div
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

      </motion.div> */
}
