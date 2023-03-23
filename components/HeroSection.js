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
      // Main div
      <section
        id="hero-sect "
        // className="grid justify-around h-screen grid-cols-1 grid-rows-1 p-8 mx-auto xl:gap-10 xl:justify-between lg:grid-cols-2 xl:grid-cols-2 lg:flex-row max-w-7xl"
        className="flex flex-col justify-center h-auto px-8 mx-auto xl:justify-between xl:flex-row lg:flex-row max-w-7xl"
      >
        {/* Column */}
        <div className="items-start content-center justify-center my-16 ">
          {/* Bold Text */}
          <motion.div
            className="items-center w-full mx-0 text-3xl font-semibold text-center lg:max-w-7xl xl:max-w-7xl lg:text-4xl lg:text-left xl:text-left xl:text-5xl about lg:mx-0 lg:mb-16 lg:mt-12 xl:mx-0 xl:mb-16"
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
            <a className="mt-20 text-transparent bg-purple-500 bg-clip-text bg-gradient-to-r from-pink-500 ">
              I build and craft <br /> <span>{text}</span>
            </a>
            <Cursor cursorColor="#6745FF" />
          </motion.div>

          {/* Sub Text */}
          <motion.div className="w-full mt-8 text-center text-md lg:text-xl lg:max-w-md lg:text-left xl:text-left xl:text-xl xl:max-w-md">
            <a>
              My name's Aman Soni. I craft user interfaces using modern frontend
              framework's such as Next.js & Flutter.
            </a>
          </motion.div>

          {/* Buttons */}
          <div className="flex items-center justify-center mx-auto xl:justify-start lg:justify-start md:justify-center xl:mx-0 align-center mt-14 ">
            <AiFillLinkedin
              href=""
              className="w-8 h-8 mr-8 bg-transparent hover:pointer-curson rounded-xl"
            />
            <AiFillGithub
              href=""
              className="w-8 mr-8 bg-transparent h-9 hover:pointer-cursor rounded-xl"
            />
            <AiFillTwitterCircle
              href=""
              className="w-8 h-8 mr-8 bg-transparent hover:pointer-cursor rounded-xl"
            />
            <AiFillYoutube
              href=""
              className="w-8 mr-8 bg-transparent h-9 hover:pointer-cursor rounded-xl"
            />
          </div>
        </div>

        {/* Image */}
        <div className="items-center justify-center bg-transparent rounded-full w-100 xl:bg-transparet">
          {/* <svg
          viewBox="0 0 200 200"
          className="absolute z-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#9333EA"
            d="M63.8,-35C75.5,-16.4,73.2,12.2,60.2,35.4C47.2,58.6,23.6,76.4,-2.1,77.6C-27.7,78.8,-55.5,63.4,-68.7,40.1C-81.9,16.7,-80.7,-14.5,-66.8,-34.4C-52.9,-54.2,-26.5,-62.5,-0.2,-62.3C26,-62.2,52,-53.6,63.8,-35Z"
            transform="translate(100 100)"
          />
        </svg> */}

          {/* <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          width="100%"
          id="blobSvg"
          style={{ zIndex: `-1` }}
        >
          {" "}
          <defs>
            {" "}
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              {" "}
              <stop
                offset="0%"
                style="stop-color: rgb(104, 104, 255);"
              ></stop>{" "}
              <stop offset="100%" style="stop-color: rgb(239, 98, 159);"></stop>{" "}
            </linearGradient>{" "}
          </defs>{" "}
          <path id="blob" fill="url(#gradient)">
            {" "}
            <animate
              attributeName="d"
              dur="6900ms"
              repeatCount="indefinite"
              values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"
            ></animate>{" "}
          </path>{" "}
        </svg> */}
          <Image
            className="justify-center h-auto mx-auto overflow-hidden rounded-lg xl:mx-0 z-1 xl:visible w-80"
            src="/aman_animated2.png"
            objectFit="cover"
            alt="Aman Soni"
            height={300}
            width={100}
          />
        </div>
      </section>
    </div>
  );
}
