// import React from "react";

// import { motion, MotionConfig } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { Josefin_Sans, Megrim, Poppins } from "next/font/google";
// import { usePathname } from "next/navigation";
// import { FiDownload } from "react-icons/fi";

// const josefinSans = Josefin_Sans({
//   weight: ["400", "600"],
//   subsets: ["latin"],
// });

// export const Header = () => {
//   return (
//     <div className="sticky top-0 flex items-center justify-between md:justify-between mx-auto w-full md:px-8 backdrop-blur-sm md:max-w-7xl">
//       {/* aman soni text */}
//       <motion.div
//         initial={{
//           x: -500,
//           opacity: 0,
//           scale: 0.5,
//         }}
//         animate={{
//           x: 0,
//           opacity: 1,
//           scale: 1,
//         }}
//         transition={{ duration: 1.5 }}
//         className="flex justify-start items-center text-sm font-bold text-transparent bg-purple-500 cursor-pointer bg-clip-text  bg-gradient-to-r from-pink-500 to-orange-600 space-x-2"
//       >
//         <Image
//           className="object-cover w-[60px] h-[60px] duration-1000 ease-in-out transition-all hover:scale-105"
//           height={60}
//           width={60}
//           src="/images/logo/logo.png"
//           alt="Aman Soni"
//         />

//         <div className="py-4 text-white text-base">
//           <div className="text-sm md:text-base">Aman Soni</div>
//         </div>
//       </motion.div>

//       {/* nav */}
//       <motion.div
//         initial={{
//           x: 500,
//           opacity: 0,
//           scale: 0.5,
//         }}
//         animate={{
//           x: 0,
//           opacity: 1,
//           scale: 1,
//         }}
//         transition={{ duration: 1.5 }}
//       >
//         {/* big screen nav */}
//         {/* <Nav /> */}

//         {/* mobile screen nav */}
//         {/* <div className="lg:hidden m-2 lg:m-0">
//           <AnimatedHamburger />
//         </div> */}

//         <Link
//           href="/assets/aman_resume_new.pdf"
//           download
//           className="group relative px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-600 rounded-lg shadow hover:scale-105 transition-transform duration-300"
//         >
//           Resume {"  "}
//           {/* Hover icon */}
//           {/* <span className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-300">
//             <FiDownload size={18} />
//           </span> */}
//         </Link>
//       </motion.div>
//     </div>
//   );
// };

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
//         className="relative h-10 w-10 rounded-full bg-white/0 transition-colors hover:bg-white/20"
//         animate={active ? "open" : "closed"}
//       >
//         <motion.span
//           style={{
//             left: "50%",
//             top: "35%",
//             x: "-50%",
//             y: "-50%",
//           }}
//           className="absolute h-[2px] w-6 bg-white rounded-full"
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
//           className="absolute h-[2px] w-6 bg-white rounded-full"
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
//             left: "calc(20% + 7px)",
//             bottom: "35%",
//             x: "-50%",
//             y: "50%",
//           }}
//           className="absolute h-[2px] w-2 bg-white rounded-full"
//           variants={{
//             open: {
//               rotate: ["0deg", "0deg", "45deg"],
//               left: "50%",
//               bottom: ["35%", "50%", "50%"],
//             },
//             closed: {
//               rotate: ["45deg", "0deg", "0deg"],
//               left: "calc(50% + 7px)",
//               bottom: ["50%", "50%", "35%"],
//             },
//           }}
//         />
//       </motion.button>
//     </MotionConfig>
//   );
// };

// const Nav = () => {
//   const links = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Work", path: "/work" },
//     { name: "Resume", path: "/resume" },
//     { name: "Services", path: "/services" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const pathname = usePathname();
//   console.log("Pathname: ", pathname);

//   return (
//     <div className="hidden lg:flex gap-6 lg:justify-center lg:items-center lg:py-4 lg:list-none md:mr-6">
//       {links.map((link, index) => (
//         <Link
//           key={index}
//           href={link.path}
//           /**" text-sm hover:underline hover:text-pink-600 translate-x-1 text-gray-500 duration-500 cursor-pointer hover:shadow-lg" */
//           className={`${link.path === pathname && "text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-purple-500 border-b-2 border-purple-500 "} capitalize font-medium hover:text-purple-500 cursor-pointer transition-all text-gray-500 text-xs`}
//         >
//           {link.name}
//         </Link>
//       ))}
//     </div>
//   );
// };

// /**
//  * bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-purple-500
//  */

"use client";

import React from "react";
import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { Josefin_Sans, Maven_Pro } from "next/font/google";
import { FiDownload } from "react-icons/fi";

const josefinSans = Josefin_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const mavenPro = Maven_Pro({
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
});

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Work", path: "#work" },
  { name: "Services", path: "#services" },
  { name: "Contact", path: "#contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between w-full px-4 md:px-8 backdrop-blur-sm bg-transparent">
      {/* Logo and Name */}
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <Image
          src="/images/logo/logo.png"
          alt="Aman Soni"
          width={60}
          height={60}
          className="object-cover w-[60px] h-[60px] transition-transform duration-300 hover:scale-105"
        />
        {/* <span className="text-white text-base md:text-lg font-semibold">
          Aman Soni
        </span> */}
        <span
          className={`text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent tracking-tight ${mavenPro.className}`}
        >
          Aman Soni
        </span>
      </motion.div>

      {/* Nav and Resume */}
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center space-x-4"
      >
        {/* Desktop Nav */}
        {/* <div className="hidden md:flex items-center space-x-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-300 hover:text-pink-500 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div> */}

        {/* Resume Button */}
        <a
          href="/assets/aman_resume_new.pdf"
          download
          className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-600 rounded-lg shadow hover:scale-105 transition-transform duration-300 md:mr-4"
        >
          Resume
        </a>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          {/* <AnimatedHamburger
            active={mobileMenuOpen}
            setActive={setMobileMenuOpen}
          /> */}
        </div>
      </motion.div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black/80 backdrop-blur-md p-6 md:hidden flex flex-col gap-4 z-40 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-base hover:text-pink-400 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const AnimatedHamburger = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.4,
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
          className="absolute h-[2px] w-6 bg-white rounded-full"
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
      </motion.button>
    </MotionConfig>
  );
};
