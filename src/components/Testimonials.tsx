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
      className="v2-section bg-theme-bg-primary"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="v2-grid-bg absolute inset-0" />
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-theme-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="v2-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="v2-label mb-4">
            <div className="v2-label-line" />
            <span className={`v2-label-text ${jetbrainsMono.className}`}>
              Client Feedback
            </span>
            <div className="w-8 h-px theme-gradient-secondary" />
          </div>
          <h2
            className={`text-4xl sm:text-5xl font-black text-theme-text-primary ${unbounded.className}`}
          >
            Testimonials
          </h2>
          <div className="w-16 h-0.5 theme-gradient-primary mx-auto rounded-full" />
          <p className={`text-theme-text-muted max-w-xl mx-auto ${inter.className}`}>
            What people say about working with me
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
