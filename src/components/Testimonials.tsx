"use client";

import "swiper/css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { inter, jetbrainsMono, righteous, unbounded } from "@/lib/fonts";
import Marquee from "./magicui/marquee";
import TestimonialCard from "./TestimonialCard";
import { client } from "@/sanity/lib/client";
import { testimonialsQuery } from "@/sanity/lib/queries";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await client.fetch(testimonialsQuery);
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-20 overflow-hidden px-4 md:px-8 bg-gradient-to-b from-theme-bg-primary via-theme-bg-secondary to-theme-bg-primary"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-theme-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-theme-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-theme-accent/5 rounded-full blur-3xl" />
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
            <div className="w-8 h-px theme-gradient-primary" />
            <span
              className={`text-sm font-medium text-theme-primary tracking-wider uppercase ${jetbrainsMono.className}`}
            >
              Client Feedback
            </span>
            <div className="w-8 h-px theme-gradient-secondary" />
          </div>
          <h2
            className={`text-4xl lg:text-5xl font-bold theme-text-gradient bg-clip-text text-transparent ${unbounded.className}`}
          >
            Testimonials
          </h2>
          <p className="text-theme-text-muted max-w-2xl mx-auto">
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
            {testimonials.map((testimonialItem, index) => (
              <div key={index} className="mx-4">
                <TestimonialCard
                  image={testimonialItem.personImg?.asset?.url || "/placeholder.png"}
                  name={testimonialItem.personName}
                  post={testimonialItem.personRole}
                  comment={testimonialItem.comment}
                  index={index}
                />
              </div>
            ))}
          </Marquee>

          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-theme-bg-primary to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-theme-bg-primary to-transparent z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
