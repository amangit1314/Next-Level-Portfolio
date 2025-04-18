"use client";

import "swiper/css";

import React from "react";
import { TESTIMONIALS } from "@/utils/constants";
import Image from "next/image";
import Marquee from "./magicui/marquee";
import { FaQuoteLeft } from "react-icons/fa6";

export const Testimonials = () => {
  return (
    <div className="px-4 md:px-12 xl:px-20 py-20 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950  rounded-t-3xl">
      <div className="max-w-7xl w-full mx-auto">
        {/* Title and Sub-title */}
        <div className="flex flex-col items-center justify-center text-center mb-16 space-y-2">
          <p className="text-base font-normal text-gray-400">
            What people say about my work
          </p>
          <p className="text-3xl font-bold text-white xl:text-4xl">
            Testimonials
          </p>
        </div>

        {/* Marquee container */}
        <div className="relative w-full overflow-hidden rounded-3xl md:shadow-2xl ">
          <Marquee pauseOnHover className="[--duration:25s] px-4">
            {TESTIMONIALS.map((testimonialItem, index) => (
              <div key={index} className="mx-4">
                <NewTestimonialItem
                  image={testimonialItem.personImg}
                  name={testimonialItem.personName}
                  post={testimonialItem.personRole}
                  comment={testimonialItem.comment}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

type Testimonial = {
  comment: string;
  name: string;
  post: string;
  image: string;
};

const NewTestimonialItem = ({ comment, name, post, image }: Testimonial) => {
  const [imgSrc, setImgSrc] = React.useState(image);

  return (
    <div className="w-[320px] sm:w-[360px] md:w-[400px] bg-zinc-900 p-6 rounded-3xl shadow-md flex flex-col items-center text-center relative">
      {/* Quote Icon */}
      <div className="text-purple-500 text-3xl mb-4">
        <FaQuoteLeft />
      </div>

      {/* Comment */}
      <p className="text-gray-300 text-sm leading-relaxed line-clamp-[10] max-h-[14em]">
        {/* {comment.length > 300 ? comment.slice(0, 300) + "..." : comment} */}
        {comment}
      </p>

      {/* Person */}
      <div className="mt-6 flex flex-col items-center">
        <Image
          src={imgSrc}
          onError={() => setImgSrc("/images/default-user.png")}
          alt={name}
          width={80}
          height={80}
          className="rounded-full object-cover border border-zinc-700 shadow-sm"
        />
        <p className="mt-3 text-white font-medium text-base">{name}</p>
        <p className="text-sm text-gray-400">{post}</p>
      </div>
    </div>
  );
};
