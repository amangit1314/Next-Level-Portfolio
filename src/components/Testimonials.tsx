"use client";

import "swiper/css";

import React, { useEffect } from "react";
import { TESTIMONIALS } from "@/utils/constants";
import Image from "next/image";
import Marquee from "./magicui/marquee";

export const Testimonials = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    // Detect mobile screen size (you might need to adjust the breakpoint)
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Run on initial render

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="xl:mx-[5rem] mb-32">
      <div className="flex-col items-center justify-between mx-auto max-w-7xl w-full">
        {/* title and sub-title text */}
        <div className="flex flex-col items-center justify-between p-8 mx-[5rem] my-8 space-y-2">
          <p className="text-base font-normal text-center text-gray-300 ">
            What peopel say about my work <meta name="keywords" content="" />
          </p>
          <p className="text-3xl font-semibold text-center xl:text-4xl text-white">
            Testimonails
          </p>
        </div>

        {/* main testimonials */}
        <div className="relative flex h-[500px] md:max-w-8xl w-full flex-col mx-auto items-center justify-center overflow-hidden rounded-3xl md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:20s]">
            {TESTIMONIALS.map((testimonailItem: any, index) => (
              <div key={index}>
                <NewTestimonailItem
                  image={testimonailItem.personImg}
                  name={testimonailItem.personName}
                  post={testimonailItem.personRole}
                  comment={testimonailItem.comment}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

type Testimonail = {
  comment: string;
  name: string;
  post: string;
  image: string;
};

const NewTestimonailItem = ({ comment, name, post, image }: Testimonail) => {
  return (
    <div className="max-w-[500px] max-h-[400px] h-full w-full grid grid-flow-row md:grid-cols-3 p-4 rounded-3xl py-6 md:space-x-6 bg-zinc-900 space-y-6 md:space-y-0">
      <div className="flex flex-col items-center align-middle justify-center col-span-1 space-y-4">
        <div>
          <Image
            className="w-40 h-40 rounded-3xl object-cover"
            height={160}
            width={160}
            quality={100}
            src={image}
            alt={name}
          />
        </div>

        <div>
          <p className="text-lg tracking-tight text-white md:text-center">
            {name}
          </p>
          <p className="text-sm text-gray-200 md:text-center line-clamp-1 text-ellipsis">
            {post}
          </p>
        </div>
      </div>

      <div className="text-gray-200 col-span-2 ">{comment}</div>
    </div>
  );
};
