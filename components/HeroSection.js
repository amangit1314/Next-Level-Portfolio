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
        className="flex flex-col justify-center px-8 mx-auto lg:flex-row max-w-7xl"
      >
        {/* Column */}
        <div className="flex flex-col items-center justify-center my-8 lg:my-16">
          {/* Bold Text */}
          <motion.div
            className="w-full text-3xl font-semibold text-center lg:text-4xl xl:text-5xl about"
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
            <a className="mt-20 text-transparent bg-clip-text bg-gradient-to-r from-pink-500">
              I build and craft <br /> <span>{text}</span>
            </a>
            <Cursor cursorColor="#6745FF" />
          </motion.div>

          {/* Sub Text */}
          <motion.div className="w-full mt-8 text-center text-md lg:text-xl lg:max-w-md">
            <a>
              My name's Aman Soni. I craft user interfaces using modern frontend
              framework's such as Next.js & Flutter.
            </a>
          </motion.div>

          {/* Buttons */}
          <div className="flex items-center justify-center mt-14">
            <AiFillLinkedin
              href=""
              className="w-8 h-8 mr-8 hover:pointer-cursor rounded-xl"
            />
            <AiFillGithub
              href=""
              className="w-8 mr-8 h-9 hover:pointer-cursor rounded-xl"
            />
            <AiFillTwitterCircle
              href=""
              className="w-8 h-8 mr-8 hover:pointer-cursor rounded-xl"
            />
            <AiFillYoutube
              href=""
              className="w-8 mr-8 h-9 hover:pointer-cursor rounded-xl"
            />
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-xs h-80 lg:w-96 lg:h-96 lg:max-w-lg xl:max-w-xl">
          <Image
            className="object-cover w-full h-full rounded-lg"
            src="/aman_animated2.png"
            alt="Aman Soni"
            layout="fill"
          />
        </div>
      </section>
    </div>
  );
}
