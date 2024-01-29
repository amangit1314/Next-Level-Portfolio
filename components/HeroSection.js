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
import * as scrollAnimation from "../public/scrollAnimation.json";
import Lottie from "lottie-react";

export default function HeroSection() {
  const { text } = useTypewriter({
    words: ["Amazing Experiences", "Beautiful Apps", "Amazing Dapps"],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="flex lg:mx-[5rem] mt-[3rem] items-center justify-center align-middle">
      <section
        id="hero-sect"
        className="flex flex-col items-center justify-between w-full max-h-screen p-8 mx-auto align-middle md:p-0 lg:flex-row max-w-7xl"
      >
        {/* Column */}
        <div className="flex flex-col items-start justify-center space-y-8">
          {/* Bold Text */}
          <motion.div
            className="items-center w-full mx-0 text-3xl font-bold tracking-tight text-center lg:mt-10 lg:w-4xl xl:w-5xl lg:items-start xl:items-start lg:text-left xl:text-left lg:text-4xl xl:text-5xl"
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
            <a className="w-full mt-20 text-5xl tracking-tight text-center text-transparent lg:text-left xl:text-left lg:w-4xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              I build and craft <br /> <span>{text}</span>
            </a>
            <Cursor cursorColor="#6745FF" />
          </motion.div>

          {/* Sub Text */}
          <motion.div className="w-full text-base text-center text-gray-300 text-md lg:text-xl xl:text-xl xl:max-w-md lg:max-w-md lg:text-left xl:text-left ">
            <a>
              My name's Aman Soni. I craft user interfaces using modern frontend
              framework's such as Next.js & Flutter.
            </a>
          </motion.div>

          {/* Buttons */}
          <div className="flex items-center justify-start mx-auto text-center lg:mx-0 xl:mx-0 lg:items-start xl:items-start lg:text-left xl:text-left ">
            <AiFillLinkedin
              size={25}
              href=""
              className="mr-8 cursor-pointer hover:text-purple-500 rounded-xl"
            />
            <AiFillGithub
              size={25}
              href=""
              className="mr-8 cursor-pointer hover:text-purple-500 rounded-xl"
            />
            <AiFillTwitterCircle
              size={25}
              href=""
              className="mr-8 cursor-pointer hover:text-purple-500 rounded-xl"
            />
            <AiFillYoutube
              size={25}
              href=""
              className="mr-8 cursor-pointer hover:text-purple-500 rounded-xl"
            />
          </div>
        </div>

        {/* Image */}
        <div className="relative hidden w-full max-w-xs mx-auto md:block md:visible lg:mt-0 lg:mx-0 h-80 lg:w-96 lg:h-96 lg:max-w-lg xl:max-w-xl">
          <div className="relative w-full h-full mt-12 overflow-hidden shadow-lg lg:mt-0 rounded-xl lg:rounded-2xl">
            <img
              className="object-cover w-full h-full duration-1000 ease-in-out transition-transhtmlForm transhtmlForm hover:scale-105"
              src="/illus.png"
              alt="Aman Soni"
            />
          </div>
        </div>

        <Lottie
          className="visible mt-8 md:hidden"
          animationData={scrollAnimation}
          loop={true}
        />
      </section>
    </div>
  );
}
