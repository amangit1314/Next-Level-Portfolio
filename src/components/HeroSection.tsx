"use client";

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
import Lottie from "lottie-react";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const HeroSection = () => {
  const [text, helper] = useTypewriter({
    words: ["Amazing Experiences", "Beautiful Apps", "Amazing Dapps"],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="flex mx-auto my-8 items-center justify-center max-w-7xl w-full">
      <div
        id="hero-sect"
        className="flex flex-col items-center justify-between max-h-screen py-8 px-8 align-middle md:p-0 lg:flex-row lg:items-center lg:justify-between w-full mx-12"
      >
        <div className="flex w-full ">
          {/* Column */}
          <div className="space-y-8 ">
            {/* Bold Text */}
            <motion.div
              className="items-center w-full text-3xl font-bold tracking-tight text-center lg:mt-10 lg:w-5xl lg:items-start lg:text-left lg:text-5xl"
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
              <p className="w-full tracking-tight text-5xl text-center text-transparent lg:text-left lg:w-5xl bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-purple-500 animate-text">
                I build and craft Amazing Experiences
                {/* <span>{text}</span> */}
                {/* Amazing Experiences */}
              </p>

              {/* <Cursor cursorColor="#6745FF" /> */}
            </motion.div>

            {/* Sub Text */}
            <div className="w-full text-base text-center text-gray-300 lg:max-w-xl lg:text-left  ">
              <p>
                {/* My name&apos;s Aman Soni. I craft user interfaces using modern
                frontend framework&apos;s such as Next.js & Flutter. */}
                My name is Aman Soni and I am a Full Stack Developer. As a
                full-stack developer, I create full stack expereince with
                beautiful UI / UX with my 2 years of experience building
                projects my clients are happy with the projects carried out. So
                I can provide you ensurance and quality both in my work.
              </p>
            </div>

            {/* Buttons */}
            {/* <div className="flex items-center justify-start mx-auto text-center lg:mx-0 xl:mx-0 lg:items-start xl:items-start lg:text-left xl:text-left ">
            <AiFillLinkedin
              size={25}
              href=""
              className="mr-8 cursor-pointer text-gray-300 hover:text-transparent transition-all duration-300 rounded-xl hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-orange-500 hover:to-purple-500 hover:animate-text"
            />
            <AiFillGithub
              size={25}
              href=""
              className="mr-8 cursor-pointer text-gray-300 hover:text-transparent  transition-all duration-300 rounded-xl hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-orange-500 hover:to-purple-500 hover:animate-text"
            />
            <AiFillTwitterCircle
              size={25}
              href=""
              className="mr-8 cursor-pointer text-gray-300 hover:text-transparent transition-all duration-300 rounded-xl hover:bg-clip-text hover:text-gradient-to-r hover:from-pink-500 hover:via-orange-500 hover:to-purple-500 hover:animate-text"
            />
            <AiFillYoutube
              size={25}
              href=""
              className="mr-8 cursor-pointer text-gray-300 hover:text-transparent transition-all duration-300 rounded-xl  hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:via-orange-500 hover:to-purple-500 hover:animate-text"
            />
          </div> */}
          </div>
        </div>

        {/* Image */}
        <div className="relative hidden w-full max-w-xs mx-auto md:block md:visible lg:mt-0 lg:mx-0 h-80 lg:w-96 lg:h-96 lg:max-w-xl">
          <div className="relative w-full h-full mt-12 overflow-hidden shadow-lg lg:mt-0 rounded-xl lg:rounded-2xl">
            <Image
              className="object-cover w-full h-full duration-300 ease-in-out transition-transform hover:scale-105"
              height={100}
              width={320}
              quality={100}
              src="/images/jpg/aman_professional.jfif"
              alt="Aman Soni"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
