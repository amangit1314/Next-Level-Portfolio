"use client";

import "swiper/css";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialItem } from "./TestimonialItem";
import { TESTIMONIALS } from "@/utils/constants";

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
        <div className="flex flex-col items-center justify-between p-8 mx-[5rem] my-8">
          <p className="mt-12 text-base font-normal text-center text-gray-300 ">
            What peopel say about my work <meta name="keywords" content="" />
          </p>
          <p className="mt-2 text-3xl font-semibold text-center xl:text-4xl text-white">
            Testimonails
          </p>
        </div>

        {/* main testimonials */}
        <div
          // slidesPerView={isMobile ? 1 : 3}
          // swiper-wrapper
          className="grid md:grid-cols-2 justify-center items-center max-w-7xl w-full  mx-auto gap-2"
        >
          {TESTIMONIALS.map((testimonailItem, index) => {
            return (
              // <SwiperSlide key={index} className="mr-[8px]">
              <div key={index}>
                <TestimonialItem
                  imgUrl={testimonailItem.personImg}
                  name={testimonailItem.personName}
                  role={testimonailItem.personRole}
                  comment={testimonailItem.comment}
                />
              </div>
              // </SwiperSlide>
            );
          })}
        </div>
        {/* <div className="">
          
        </div> */}

        {/* <Swiper
          slidesPerView={isMobile ? 1 : 3}
          className="flex content-center justify-between w-full p-8 mx-auto swiper-wrapper"
        >
          <SwiperSlide className="swiper-slide">
            <TestimonialItem
              className=""
              imgUrl={
                "https://omlogistics.co.in/wp-content/uploads/2015/09/Randheer-sharma-359X233-848X335.jpg"
              }
              name={"Vikas Kumawat"}
              role={"HR Manager, Om Logistics."}
              comment={
                "A generous person who has a passion to work with different mindsets and also lead them too according to their calabour, this person is a hard working personality."
              }
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <TestimonialItem
              imgUrl={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICSVq9-BAcWmscgA5pQyPPxdeJGu6p6w-0Q&usqp=CAU"
              }
              name={"James D"}
              role={"Global Team Lead, Slack"}
              comment={
                "A generous person who has a passion to work with different mindsets and also lead them too according to their calabour, this person is a hard working personality."
              }
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <TestimonialItem
              className=""
              imgUrl={
                "https://www.seekpng.com/png/detail/402-4024748_how-to-apply-the-porefessional-face-primer-persons.png"
              }
              name={"John Doe"}
              role={"HR Manager, Hacker Rank"}
              comment={
                "A generous person who has a passion to work with different mindsets and also lead them too according to their calabour, this person is a hard working personality."
              }
            />
          </SwiperSlide>
        </Swiper> */}
      </div>
    </div>
  );
};
