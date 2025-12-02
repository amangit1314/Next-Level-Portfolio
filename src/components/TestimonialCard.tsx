import { Testimonial } from "@/types/testimonial";
import { motion } from "framer-motion";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import Image from "next/image";
import { unbounded } from "@/lib/fonts";

const TestimonialCard = ({
  comment,
  name,
  post,
  image,
  index,
}: Testimonial) => {
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
        transition: { duration: 0.2 },
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
              className="w-[60px] h-[60px] rounded-full object-cover flex-shrink-0 border-2 border-zinc-600 group-hover:border-purple-500/50 transition-all duration-300 shadow-lg"
            />
            {/* Online Indicator */}
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-800" />
          </div>

          <div className="flex-1 text-left">
            <p className={`text-white font-semibold text-base group-hover:text-purple-100 transition-colors duration-300 ${unbounded.className}`}>
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

export default TestimonialCard;
