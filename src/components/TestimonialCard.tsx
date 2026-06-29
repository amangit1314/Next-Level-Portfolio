import { Testimonial } from "@/types/testimonial";
import { motion } from "framer-motion";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import Image from "next/image";
import { unbounded, inter } from "@/lib/fonts";

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
      whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
      // Named group so hover effects are scoped to THIS card only, not the parent Marquee's group
      className="group/card relative w-[320px] sm:w-[360px] md:w-[400px] flex flex-col bg-theme-bg-secondary/40 backdrop-blur-sm p-7 rounded-2xl border border-theme-border/30 group-hover/card:border-theme-primary/40 transition-all duration-300 shadow-md overflow-hidden cursor-default"
    >
      {/* Hover glow bg — scoped to this card */}
      <div className="absolute inset-0 bg-gradient-to-br from-theme-primary/6 via-transparent to-theme-secondary/6 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-400 pointer-events-none" />

      {/* Top-right corner accent */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-theme-primary/0 group-hover/card:border-theme-primary/50 rounded-tr-2xl transition-all duration-300" />
      {/* Bottom-left corner accent */}
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-theme-secondary/0 group-hover/card:border-theme-secondary/50 rounded-bl-2xl transition-all duration-300" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Quote icon + stars row */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-10 h-10 rounded-xl bg-theme-primary/10 group-hover/card:bg-theme-primary/20 flex items-center justify-center transition-colors duration-300">
            <FaQuoteLeft className="text-theme-primary text-base" />
          </div>
          {/* Stars */}
          <div className="flex items-center gap-0.5 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} className="text-theme-primary/70 text-xs" />
            ))}
          </div>
        </div>

        {/* Comment */}
        <p className={`text-theme-text-secondary text-sm leading-relaxed line-clamp-5 flex-1 mb-6 ${inter.className}`}>
          {comment}
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-theme-border/30 mb-5 group-hover/card:bg-theme-primary/20 transition-colors duration-300" />

        {/* Person info */}
        <div className="flex items-center gap-4">
          <div className="relative flex-shrink-0">
            <div className="w-[48px] h-[48px] rounded-full p-[2px] bg-gradient-to-br from-theme-primary/40 to-theme-secondary/40 group-hover/card:from-theme-primary/70 group-hover/card:to-theme-secondary/70 transition-all duration-300">
              <Image
                src={imgSrc}
                onError={() => setImgSrc("/images/default-user.png")}
                alt={name}
                width={44}
                height={44}
                className="w-full h-full rounded-full object-cover bg-theme-bg-tertiary"
              />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <p className={`text-theme-text-primary font-bold text-sm leading-tight truncate group-hover/card:text-theme-primary transition-colors duration-300 ${unbounded.className}`}>
              {name}
            </p>
            <p className={`text-theme-text-muted text-xs mt-0.5 truncate ${inter.className}`}>
              {post}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
