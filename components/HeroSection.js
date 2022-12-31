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
      className="grid lg:grid-cols-2 gap-10 justify-between w-full xl:flex-row lg:flex-row h-screen max-w-7xl mx-auto p-8"
    >
      {/* Column */}
      <div className="items-start justify-center h-screen">
        {/* Bold Text */}
        <motion.div
          className="w-full items-center mx-0 mb-16 text-3xl font-semibold lg:max-w-7xl xl:max-w-7xl lg:text-4xl lg:text-left xl:text-left text-center xl:text-5xl about lg:mx-0 lg:mb-16 lg:mt-12 xl:mx-0 xl:mb-16"
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
        <motion.div className="w-full text-center mb-16 text-xl lg:text-xl lg:max-w-md lg:text-left xl:text-left xl:text-xl xl:max-w-md">
          <a>
            My name's Aman Soni. I craft user interfaces using modern frontend
            framework's such as Next.js & Flutter.
          </a>
        </motion.div>
      </div>

      {/* Image */}

      <img
        className="mx-auto my-10 overflow-hidden rounded-lg h-80 w-80"
        src="/atn.png"
        objectFit="cover"
        alt="Aman Soni"
        height="300"
        width="100"
      />
    </div>
  );
}
