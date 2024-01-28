import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialItem from "../components/TestimonialItem";
import "swiper/css";

export default function Testimonials() {
  return (
    <div>
      <section className="flex-col items-center justify-between mx-auto max-w-7xl">
        <h1 className="p-8 text-3xl font-bold">Testimonials</h1>
        <Swiper
          slidesPerView={3}
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
        </Swiper>
      </section>
    </div>
  );
}
