"use client";

import "swiper/css";
import React from "react";
import { TESTIMONIALS } from "@/utils/constants";
import { motion } from "framer-motion";
import { inter, jetbrainsMono } from "@/lib/fonts";
import Marquee from "./magicui/marquee";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-20 overflow-hidden px-4 md:px-8"
    >
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
            <span
              className={`text-sm font-medium text-purple-400 tracking-wider uppercase ${jetbrainsMono.className}`}
            >
              Client Feedback
            </span>
            <div className="w-8 h-px bg-gradient-to-r from-pink-500 to-purple-500" />
          </div>
          <h2
            className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent ${inter.className}`}
          >
            Testimonials
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What people say about working with me and the solutions I&apos;ve
            delivered
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
                <TestimonialCard
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

export default Testimonials;
