import { motion } from "framer-motion";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const { text } = useTypewriter({
    words: ["Amazing Experiences", "Beautiful Apps", "Amazing Dapps"],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    // Main div
    <div
      id="hero-sect "
      className="grid min-h-screen grid-cols-1 grid-rows-1 p-8 mx-auto xl:gap-10 xl:justify-between lg:grid-cols-2 xl:grid-cols-2 lg:flex-row max-w-7xl"
    >
      {/* <img
        className="flex justify-center visible mx-auto overflow-hidden rounded-lg xl:my-10 xl:invisible h-60 w-60"
        src="/atn.png"
        objectFit="cover"
        alt="Aman Soni"
      /> */}

      {/* Column */}
      <div className="items-start content-center justify-center mt-5 xl:mt-0">
        {/* Bold Text */}
        <motion.div
          className="items-center w-full mx-0 mb-16 text-3xl font-semibold text-center lg:max-w-7xl xl:max-w-7xl lg:text-4xl lg:text-left xl:text-left xl:text-5xl about lg:mx-0 lg:mb-16 lg:mt-12 xl:mx-0 xl:mb-16"
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
        >
          <a className="text-transparent bg-purple-500 bg-clip-text bg-gradient-to-r from-pink-500 ">
            I build and craft <br /> <span>{text}</span>
          </a>
          <Cursor cursorColor="#6745FF" />
        </motion.div>

        {/* Sub Text */}
        <motion.div className="w-full text-xl text-center lg:text-xl lg:max-w-md lg:text-left xl:text-left xl:text-xl xl:max-w-md">
          <a>
            My name's Aman Soni. I craft user interfaces using modern frontend
            framework's such as Next.js & Flutter.
          </a>
        </motion.div>

        {/* Buttons */}
        {/* <div className="flex invisible">
          <a
            className="mx-auto text-lg font-bold text-purple-500 cursor-pointer xl:py-3 hover:shadow-lg"
            href="#skills-sect"
          >
            <svg path="images/svg/Groupgithub.svg"></svg>
          </a>
          <a
            className="py-3 mr-8 text-lg font-bold text-purple-500 cursor-pointer hover:shadow-lg"
            href="#skills-sect"
          >
            <img src="" alt="" srcset="" />
          </a>
          <a
            className="py-3 mr-8 text-lg font-bold text-purple-500 cursor-pointer hover:shadow-lg"
            href="#projects"
          >
            <img src="" alt="" srcset="" />
          </a>
          <a
            className="py-3 mr-8 text-lg font-bold text-purple-500 cursor-pointer hover:shadow-lg"
            href="#skills-sect"
          >
            <img src="" alt="" srcset="" />
          </a>
        </div> */}
      </div>

      {/* Image */}

      <img
        className="justify-center invisible ml-auto overflow-hidden rounded-lg xl:visible xl:my-10 h-80 w-80"
        src="/atn.png"
        objectFit="cover"
        alt="Aman Soni"
        height="300"
        width="100"
      />
    </div>
  );
}
