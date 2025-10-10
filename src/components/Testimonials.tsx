// "use client";

// import "swiper/css";

// import React from "react";
// import { TESTIMONIALS } from "@/utils/constants";
// import Image from "next/image";
// import Marquee from "./magicui/marquee";
// import { FaQuoteLeft } from "react-icons/fa6";

// export const Testimonials = () => {
//   return (
//     <div className="px-4 md:px-12 xl:px-20 py-20 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950  rounded-t-3xl">
//       <div className="max-w-7xl w-full mx-auto">
//         {/* Title and Sub-title */}
//         <div className="flex flex-col items-center justify-center text-center mb-16 space-y-2">
//           <p className="text-base font-normal text-gray-400">
//             What people say about my work
//           </p>
//           <p className="text-3xl font-bold text-white xl:text-4xl">
//             Testimonials
//           </p>
//         </div>

//         {/* Marquee container */}
//         <div className="relative w-full overflow-hidden rounded-3xl md:shadow-2xl ">
//           <Marquee pauseOnHover className="[--duration:25s] px-4">
//             {TESTIMONIALS.map((testimonialItem, index) => (
//               <div key={index} className="mx-4">
//                 <NewTestimonialItem
//                   image={testimonialItem.personImg}
//                   name={testimonialItem.personName}
//                   post={testimonialItem.personRole}
//                   comment={testimonialItem.comment}
//                 />
//               </div>
//             ))}
//           </Marquee>
//         </div>
//       </div>
//     </div>
//   );
// };

// type Testimonial = {
//   comment: string;
//   name: string;
//   post: string;
//   image: string;
// };

// const NewTestimonialItem = ({ comment, name, post, image }: Testimonial) => {
//   const [imgSrc, setImgSrc] = React.useState(image);

//   return (
//     <div className="w-[320px] sm:w-[360px] md:w-[400px] bg-zinc-900 p-6 rounded-3xl shadow-md flex flex-col items-center text-center relative">
//       {/* Quote Icon */}
//       <div className="text-purple-500 text-3xl mb-4">
//         <FaQuoteLeft />
//       </div>

//       {/* Comment */}
//       <p className="text-gray-300 text-sm leading-relaxed line-clamp-[10] max-h-[14em]">
//         {/* {comment.length > 300 ? comment.slice(0, 300) + "..." : comment} */}
//         {comment}
//       </p>

//       {/* Person */}
//       <div className="mt-6 flex flex-col items-center">
//         <Image
//           src={imgSrc}
//           onError={() => setImgSrc("/images/default-user.png")}
//           alt={name}
//           width={80}
//           height={80}
//           className="rounded-full object-cover border border-zinc-700 shadow-sm"
//         />
//         <p className="mt-3 text-white font-medium text-base">{name}</p>
//         <p className="text-sm text-gray-400">{post}</p>
//       </div>
//     </div>
//   );
// };


"use client";

import "swiper/css";
import React from "react";
import { TESTIMONIALS } from "@/utils/constants";
import Image from "next/image";
import Marquee from "./magicui/marquee";
import { FaQuoteLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 overflow-hidden px-4 md:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-pink-500" />
            <span className={`text-sm font-medium text-purple-400 tracking-wider uppercase ${jetbrainsMono.className}`}>
              Client Feedback
            </span>
            <div className="w-8 h-px bg-gradient-to-r from-pink-500 to-purple-500" />
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent ${inter.className}`}>
            Testimonials
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What people say about working with me and the solutions I&apos;ve delivered
          </p>
        </motion.div>

        {/* Marquee Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden"
        >
          <Marquee pauseOnHover className="[--duration:25s] py-4">
            {TESTIMONIALS.map((testimonialItem, index) => (
              <div key={index} className="mx-4">
                <NewTestimonialItem
                  image={testimonialItem.personImg}
                  name={testimonialItem.personName}
                  post={testimonialItem.personRole}
                  comment={testimonialItem.comment}
                  index={index}
                />
              </div>
            ))}
          </Marquee>
          
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10" />
        </motion.div>
      </div>
    </section>
  );
};

type Testimonial = {
  comment: string;
  name: string;
  post: string;
  image: string;
  index: number;
};

const NewTestimonialItem = ({ comment, name, post, image, index }: Testimonial) => {
  const [imgSrc, setImgSrc] = React.useState(image);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="group relative w-[320px] sm:w-[360px] md:w-[400px] bg-zinc-800/40 backdrop-blur-sm p-8 rounded-2xl border border-zinc-700/30 hover:border-purple-500/30 transition-all duration-300 shadow-lg"
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Quote Icon */}
        <div className="text-purple-500 text-3xl mb-6 group-hover:text-pink-500 transition-colors duration-300">
          <FaQuoteLeft />
        </div>

        {/* Comment */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-6">
          {comment}
        </p>

        {/* Person Info */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Image
              src={imgSrc}
              onError={() => setImgSrc("/images/default-user.png")}
              alt={name}
              width={60}
              height={60}
              className="rounded-full object-cover border-2 border-zinc-600 group-hover:border-purple-500/50 transition-all duration-300 shadow-lg"
            />
            {/* Online Indicator */}
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-800" />
          </div>
          
          <div className="flex-1 text-left">
            <p className="text-white font-semibold text-base group-hover:text-purple-100 transition-colors duration-300">
              {name}
            </p>
            <p className="text-sm text-gray-400 group-hover:text-pink-400 transition-colors duration-300">
              {post}
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-purple-500/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-pink-500/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};