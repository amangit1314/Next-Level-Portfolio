import { motion } from "framer-motion";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
function Header() {
  return (
    <nav className="sticky top-0 flex items-center justify-between xl:mx-[5rem] backdrop-blur-sm max-w-screen">
      {/* aman soni text */}
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
        className="text-[1rem] font-bold text-transparent bg-purple-500 cursor-pointer bg-clip-text  bg-gradient-to-r from-pink-500 to"
      >
        {/* Aman
        <span className="invisible ml-2 xl:visible md:invisible lg:visible">
          Soni
        </span> */}
        <img
          className="object-cover w-[60px] h-[60px] duration-1000 ease-in-out transition-transhtmlForm transhtmlForm hover:scale-105"
          src="/logo.png"
          alt="Aman Soni"
        />
      </motion.div>

      {/* nav links */}
      <ul className="items-center justify-center hidden py-4 space-x-4 md:flex">
        <li>
          <div
            className="text-[1rem] font-semibold hover:text-purple-400 duration-300 cursor-pointer hover:shadow-lg"
            href="#skills-sect"
          >
            About
          </div>
        </li>
        <li>
          <div
            className="text-[1rem] font-semibold hover:text-purple-500 duration-300 cursor-pointer hover:shadow-lg"
            href="#skills-sect"
          >
            Skills
          </div>
        </li>
        <li>
          <div
            className="text-[1rem] font-semibold hover:text-purple-500 duration-300 cursor-pointer hover:shadow-lg"
            href="#projects"
          >
            Projects
          </div>
        </li>
        <li>
          <div
            className="text-[1rem] font-semibold hover:text-purple-500 duration-300 cursor-pointer hover:shadow-lg"
            href="#skills-sect"
          >
            Blog
          </div>
        </li>
        <li>
          <div
            className="text-[1rem] font-semibold hover:text-purple-500 cursor-pointer duration-300 hover:shadow-lg"
            href="#contact"
          >
            Contact
          </div>
        </li>
      </ul>

      {/* resume and theme toggle buttons */}
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
        className="flex items-center py-4 ml-auto list-none md:inline-flex lg:visible xl:visible"
      >
        <ul className="flex items-center space-x-4">
          {/* <li className="">
            <BsFillMoonStarsFill />
          </li> */}
          <li className=" text-[1rem] pr-[24px] hover:underline hover:text-pink-600 translate-x-1 font-bold text-purple-500 duration-500 cursor-pointer hover:shadow-lg">
            <Link href="/api/getRESUME">Resume</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
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
