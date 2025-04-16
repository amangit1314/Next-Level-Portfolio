// "use client";

// import "swiper/css";

// import React, { useEffect } from "react";
// import { TESTIMONIALS } from "@/utils/constants";
// import Image from "next/image";
// import Marquee from "./magicui/marquee";

// export const Testimonials = () => {
//   const [isMobile, setIsMobile] = React.useState(false);

//   useEffect(() => {
//     // Detect mobile screen size (you might need to adjust the breakpoint)
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize(); // Run on initial render

//     // Cleanup function to remove event listener
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="xl:mx-[5rem] mb-32">
//       <div className="flex-col items-center justify-between mx-auto max-w-7xl w-full">
//         {/* title and sub-title text */}
//         <div className="flex flex-col items-center justify-between p-8 mx-[5rem] my-8 space-y-2">
//           <p className="text-base font-normal text-center text-gray-300 ">
//             What peopel say about my work <meta name="keywords" content="" />
//           </p>
//           <p className="text-3xl font-semibold text-center xl:text-4xl text-white">
//             Testimonails
//           </p>
//         </div>

//         {/* main testimonials */}
//         <div className="relative flex h-[500px] md:max-w-8xl w-full flex-col mx-auto items-center justify-center overflow-hidden rounded-3xl md:shadow-xl">
//           <Marquee pauseOnHover className="[--duration:20s]">
//             {TESTIMONIALS.map((testimonailItem: any, index) => (
//               <div key={index}>
//                 <NewTestimonailItem
//                   image={testimonailItem.personImg}
//                   name={testimonailItem.personName}
//                   post={testimonailItem.personRole}
//                   comment={testimonailItem.comment}
//                 />
//               </div>
//             ))}
//           </Marquee>
//         </div>
//       </div>
//     </div>
//   );
// };

// type Testimonail = {
//   comment: string;
//   name: string;
//   post: string;
//   image: string;
// };

// const NewTestimonailItem = ({ comment, name, post, image }: Testimonail) => {
//   return (
//     <div className="max-w-[500px] max-h-[400px] h-full w-full grid grid-flow-row md:grid-cols-3 p-4 rounded-3xl py-6 md:space-x-6 bg-zinc-900 space-y-6 md:space-y-0">
//       <div className="flex flex-col items-center align-middle justify-center col-span-1 space-y-4">
//         <div>
//           <Image
//             className="w-40 h-40 rounded-3xl object-cover"
//             height={160}
//             width={160}
//             quality={100}
//             src={image}
//             alt={name}
//           />
//         </div>

//         <div>
//           <p className="text-lg tracking-tight text-white md:text-center">
//             {name}
//           </p>
//           <p className="text-sm text-gray-200 md:text-center line-clamp-1 text-ellipsis">
//             {post}
//           </p>
//         </div>
//       </div>

//       <div className="text-gray-200 col-span-2 ">{comment}</div>
//     </div>
//   );
// };

"use client";

import "swiper/css";

import React, { useEffect } from "react";
import { TESTIMONIALS } from "@/utils/constants";
import Image from "next/image";
import Marquee from "./magicui/marquee";
import { FaQuoteLeft } from "react-icons/fa6";

// export const Testimonials = () => {
//   const [isMobile, setIsMobile] = React.useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="px-4 md:px-12 xl:px-20 mb-32">
//       <div className="flex-col items-center justify-between mx-auto max-w-7xl w-full">
//         {/* title and sub-title */}
//         <div className="flex flex-col items-center justify-center text-center space-y-2">
//           <p className="text-base font-normal text-gray-300">
//             What people say about my work
//           </p>
//           <p className="text-3xl font-semibold text-white xl:text-4xl">
//             Testimonials
//           </p>
//         </div>

//         {/* marquee container */}
//         <div className="relative flex h-auto md:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl md:shadow-xl">
//           <Marquee pauseOnHover className="[--duration:20s]">
//             {TESTIMONIALS.map((testimonialItem: any, index) => (
//               <div key={index}>
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
        {comment.length > 300 ? comment.slice(0, 300) + "..." : comment}
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

// const NewTestimonialItem = ({ comment, name, post, image }: Testimonial) => {
//   const [imgSrc, setImgSrc] = React.useState(image);

//   return (
//     <div className="relative max-w-xl w-full mx-auto bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-3xl shadow-lg overflow-hidden">
//       {/* Quote Icon */}
//       <FaQuoteLeft className="absolute text-purple-500 text-4xl top-6 left-6 opacity-10" />

//       {/* Profile Image */}
//       <div className="absolute -top-10 left-6">
//         <Image
//           className="rounded-full border-4 border-zinc-900 shadow-lg object-cover"
//           src={imgSrc}
//           alt={name}
//           width={64}
//           height={64}
//           onError={() => setImgSrc("/images/default-user.png")}
//         />
//       </div>

//       {/* Content */}
//       <div className="pl-24 pt-4">
//         <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-[10]">
//           {comment.length > 300 ? comment.slice(0, 300) + "..." : comment}
//         </p>

//         <div className="mt-4">
//           <p className="text-white font-semibold">{name}</p>
//           <p className="text-xs text-gray-400">{post}</p>
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
//     <div className="max-w-[500px] w-full bg-zinc-900 p-6 rounded-3xl mx-4 my-6 flex flex-col md:flex-row md:items-start gap-6">
//       {/* Image + Name */}
//       <div className="flex flex-col items-center justify-center text-center md:text-left md:items-start flex-shrink-0">
//         <Image
//           className="rounded-2xl object-cover w-32 h-32"
//           src={imgSrc}
//           width={128}
//           height={128}
//           alt={name}
//           onError={() => setImgSrc("/images/default-user.png")}
//         />
//         <div className="mt-3">
//           <p className="text-lg font-medium text-white">{name}</p>
//           <p className="text-sm text-gray-400">{post}</p>
//         </div>
//       </div>

//       {/* Comment */}
//       <div className="text-gray-300 text-sm leading-relaxed line-clamp-[10]">
//         {/* {comment.length > 300 ? comment.slice(0, 300) + "..." : comment} */}
//         {comment}
//       </div>
//     </div>
//   );
// };
