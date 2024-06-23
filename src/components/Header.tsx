import React from "react";

import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Josefin_Sans, Megrim, Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

const josefinSans = Josefin_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const Header = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between md:justify-between mx-auto w-full md:px-8 backdrop-blur-sm md:max-w-7xl">
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
        className="flex justify-start items-center text-sm font-bold text-transparent bg-purple-500 cursor-pointer bg-clip-text  bg-gradient-to-r from-pink-500 to-orange-600 space-x-2"
      >
        <Image
          className="object-cover w-[60px] h-[60px] duration-1000 ease-in-out transition-all hover:scale-105"
          height={60}
          width={60}
          src="/images/logo/logo.png"
          alt="Aman Soni"
        />

        <div className="py-4 text-white text-base">
          <div className="text-sm md:text-base">Aman Soni</div>
        </div>
      </motion.div>

      {/* nav */}
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
      >
        {/* big screen nav */}
        {/* <Nav /> */}

        {/* mobile screen nav */}
        {/* <div className="lg:hidden m-2 lg:m-0">
          <AnimatedHamburger />
        </div> */}
      </motion.div>
    </div>
  );
};

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

const Nav = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Resume", path: "/resume" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const pathname = usePathname();
  console.log("Pathname: ", pathname);

  return (
    <div className="hidden lg:flex gap-6 lg:justify-center lg:items-center lg:py-4 lg:list-none md:mr-6">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          /**" text-sm hover:underline hover:text-pink-600 translate-x-1 text-gray-500 duration-500 cursor-pointer hover:shadow-lg" */
          className={`${link.path === pathname && "text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-purple-500 border-b-2 border-purple-500 " } capitalize font-medium hover:text-purple-500 cursor-pointer transition-all text-gray-500 text-xs`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

/**
 * bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-purple-500
 */