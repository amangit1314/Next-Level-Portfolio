"use client";

import { motion } from "framer-motion";
import { Black_Han_Sans, Space_Mono } from "next/font/google";
import Image from "next/image";
import React from "react";
// import { Cursor, useTypewriter } from "react-simple-typewriter";
// import Lottie from "lottie-react";
const blackHanSans = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const HeroSection = () => {

  // const [text, helper] = useTypewriter({
  //   words: ["Amazing Experiences", "Beautiful Apps", "Amazing Dapps"],
  //   loop: true,
  //   delaySpeed: 1000,
  // });

  return (
    <div className="flex mx-auto my-8 items-center justify-center max-w-7xl w-full">
      <div
        id="hero-sect"
        className="flex w-full flex-col items-center justify-between max-h-screen py-8 px-8 align-middle md:p-0 lg:flex-row lg:items-center lg:justify-between  mx-12"
      >
        {/* Text's Column */}
        <div className=" space-y-8 ">
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
            {/* <div>
                <p className="w-full tracking-tight text-5xl text-center text-transparent lg:text-left lg:w-5xl bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-purple-500 animate-text">
                  I build and craft <br /> <span>{text}</span>
                </p>
                <Cursor cursorColor="#6745FF" />
              </div> */}

            <div>
              <p className="w-full tracking-tight text-xl text-center text-transparent lg:text-left lg:w-5xl bg-clip-text bg-gradient-to-r from-white  to-gray-500 animate-text">
                I build and craft
              </p>

              <div className={blackHanSans.className}>
                <span className="w-full tracking-tighter text-4xl text-center text-transparent lg:text-left lg:w-5xl bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-purple-500 animate-text">
                  Amazing Experiences
                </span>
              </div>
            </div>
          </motion.div>

          {/* Sub Text */}
          <div className="w-full text-base text-center text-gray-300 lg:max-w-xl lg:text-left  ">
            <p className="lg:hidden">
              My name is Aman Soni and I am a Full Stack Developer. As a
              full-stack developer, I create full stack expereince with
              beautiful UI / UX
            </p>

            <p className="hidden lg:flex">
              My name is Aman Soni and I am a Full Stack Developer. As a
              full-stack developer, I create full stack expereince with
              beautiful UI / UX with my 3 years of experience building projects
              my clients are happy with the projects carried out. So I can
              provide you ensurance and quality both in my work.
            </p>
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
              src="/images/aman_gibly.png"
              alt="Aman Soni"
              style={{ objectPosition: "top" }}
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
