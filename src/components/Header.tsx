import React from "react";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Megrim, Poppins } from "next/font/google";

const megrim = Megrim({
  weight: ["400"],
  subsets: ["latin"],
});

export const Header = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between mx-auto w-full px-8 backdrop-blur-sm md:max-w-7xl">
      {/* aman soni text */}
      {/* <motion.div
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
        transition={{ duration: 1.5 }} */}
      <div className="flex justify-start items-center text-sm font-bold text-transparent bg-purple-500 cursor-pointer bg-clip-text  bg-gradient-to-r from-pink-500 to-orange-600 space-x-2">
        {/* Aman
        <span className="invisible ml-2 xl:visible md:invisible lg:visible">
          Soni
        </span> */}
        <Image
          className="object-cover w-[60px] h-[60px] duration-1000 ease-in-out transition-all hover:scale-105"
          height={60}
          width={60}
          src="/images/logo/logo.png"
          alt="Aman Soni"
        />

        <div className="py-4 text-white text-base">
          <div className={megrim.className}>Aman Soni</div>
        </div>
        {/* </motion.div> */}
      </div>

      {/* nav links */}
      {/* <ul className="items-center justify-center hidden py-4 space-x-4 md:flex">
        <li>
          <p className="text-sm text-gray-400 font-semibold hover:text-purple-400 duration-300 cursor-pointer hover:shadow-lg">
            About
          </p>
        </li>
        <li>
          <p className="text-sm text-gray-400 font-semibold hover:text-purple-500 duration-300 cursor-pointer hover:shadow-lg">
            Skills
          </p>
        </li>
        <li>
          <pattern className="text-sm text-gray-400 font-semibold hover:text-purple-500 duration-300 cursor-pointer hover:shadow-lg">
            Projects
          </pattern>
        </li>
        <li>
          <p className="text-sm text-gray-400 font-semibold hover:text-purple-500 duration-300 cursor-pointer hover:shadow-lg">
            Blog
          </p>
        </li>
        <li>
          <p className="text-sm text-gray-400 font-semibold hover:text-purple-500 cursor-pointer duration-300 hover:shadow-lg">
            Contact
          </p>
        </li>
      </ul> */}

      {/* resume and theme toggle buttons */}
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
        transition={{ duration: 1.5 }} */}
      {/* <div className="flex items-center py-4 ml-auto list-none md:inline-flex lg:visible xl:visible"> */}
      {/* <ul className="flex items-center space-x-4"> */}
      {/* <li className="">
            <BsFillMoonStarsFill />
          </li> */}
      {/* <li className=" text-sm pr-[24px] hover:underline hover:text-pink-600 translate-x-1 font-bold text-purple-500 duration-500 cursor-pointer hover:shadow-lg">
            <Link href="/api/getRESUME">Resume</Link>
          </li> */}
      {/* </ul> */}
      {/* </motion.div> */}
      {/* </div> */}

      <div>
        <AnimatedHamburger />
      </div>
    </div>
  );
};

// const AnimatedHamburger = () => {
//   const [active, setActive] = React.useState(false);

//   return (
//     <MotionConfig
//       transition={{
//         duration: 0.5,
//         ease: "easeInOut",
//       }}
//     >
//       <motion.button
//         initial={false}
//         onClick={() => setActive((pv) => !pv)}
//         className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20 "
//         animate={active ? "open" : "closed"}
//       >
//         <motion.span
//           style={{
//             left: "50%",
//             top: "35%",
//             x: "-50%",
//             y: "-50%",
//           }}
//           className="absolute h-1 w-10 bg-white"
//           variants={{
//             open: {
//               rotate: ["0deg", "0deg", "45deg"],
//               top: ["35%", "50%", "50%"],
//             },
//             closed: {
//               rotate: ["45deg", "0deg", "0deg"],
//               top: ["50%", "50%", "35%"],
//             },
//           }}
//         />
//         <motion.span
//           style={{
//             left: "50%",
//             top: "50%",
//             x: "-50%",
//             y: "-50%",
//           }}
//           className="absolute h-1 w-10 bg-white"
//           variants={{
//             open: {
//               rotate: ["0deg", "0deg", "-45deg"],
//             },
//             closed: {
//               rotate: ["-45deg", "0deg", "0deg"],
//             },
//           }}
//         />
//         <motion.span
//           style={{
//             left: "calc(50% + 10px)",
//             bottom: "35%",
//             x: "-50%",
//             y: "50%",
//           }}
//           className="absolute h-1 w-5 bg-white"
//           variants={{
//             open: {
//               rotate: ["0deg", "0deg", "45deg"],
//               left: "50%",
//               bottom: ["35%", "50%", "50%"],
//             },
//             closed: {
//               rotate: ["45deg", "0deg", "0deg"],
//               left: "calc(50% + 10px)",
//               bottom: ["50%", "50%", "35%"],
//             },
//           }}
//         />
//       </motion.button>
//     </MotionConfig>
//   );
// };

const AnimatedHamburger = () => {
  const [active, setActive] = React.useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-10 w-10 rounded-full bg-white/0 transition-colors hover:bg-white/20"
        animate={active ? "open" : "closed"}
      >
        <motion.span
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-[2px] w-3 bg-white rounded-full"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        />
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-[2px] w-6 bg-white rounded-full"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          style={{
            left: "calc(20% + 7px)",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          className="absolute h-[2px] w-2 bg-white rounded-full"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              left: "50%",
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              left: "calc(50% + 7px)",
              bottom: ["50%", "50%", "35%"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};
