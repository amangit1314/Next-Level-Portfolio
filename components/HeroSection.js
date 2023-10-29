import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const { text } = useTypewriter({
    words: ["Amazing Experiences", "Beautiful Apps", "Amazing Dapps"],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div>
      <section
        id="hero-sect"
        className="flex flex-col justify-between max-h-screen p-8 mx-auto lg:flex-row xl:flex-row max-w-7xl"
      >
        {/* Column */}
        <div className="flex flex-col items-start justify-center my-8 lg:my-18 xl:my-34">
          {/* Bold Text */}
          <motion.div
            className="items-center w-full mx-0 text-3xl font-semibold text-center lg:w-4xl xl:w-5xl lg:items-start xl:items-start lg:text-left xl:text-left lg:text-4xl xl:text-5xl"
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
            <a className="w-full mt-20 text-center text-transparent lg:text-left xl:text-left lg:w-4xl xl:4xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              I build and craft <br /> <span>{text}</span>
            </a>
            <Cursor cursorColor="#6745FF" />
          </motion.div>

          {/* Sub Text */}
          <motion.div className="mt-8 mr-8 text-lg text-center lg:text-xl xl:text-xl w-ful xl:max-w-md lg:max-w-md lg:text-left xl:text-left ">
            <a>
              My name's Aman Soni. I craft user interfaces using modern frontend
              framework's such as Next.js & Flutter.
            </a>
          </motion.div>

          {/* Buttons */}
          <div className="flex items-center justify-start mx-auto mt-12 text-center lg:mx-0 xl:mx-0 lg:items-start xl:items-start lg:text-left xl:text-left">
            <AiFillLinkedin
              href=""
              className="w-8 h-8 mr-8 hover:pointer-cursor rounded-xl"
            />
            <AiFillGithub
              href=""
              className="w-8 h-8 mr-8 hover:pointer-cursor rounded-xl"
            />
            <AiFillTwitterCircle
              href=""
              className="w-8 h-8 mr-8 hover:pointer-cursor rounded-xl"
            />
            <AiFillYoutube
              href=""
              className="w-8 h-8 mr-8 hover:pointer-cursor rounded-xl"
            />
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-xs mx-auto mt-10 lg:mt-0 xl:mt-0 lg:mx-0 xl:mx-0 h-80 lg:w-96 lg:h-96 lg:max-w-lg xl:max-w-xl">
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <img
              className="object-cover w-full h-full transition-transform duration-1000 ease-in-out transform hover:scale-105"
              src="/aman_animated2.png"
              alt="Aman Soni"
            />
        
          </div>
        </div>
      </section>
    </div>
  );
}
