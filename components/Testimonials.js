import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialItem from "../components/TestimonialItem";
import "swiper/css";

export default function Testimonials() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize(); // Get initial window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallScreen = windowSize.width <= 640; // Adjust breakpoint for sm
  const isMediumScreen = windowSize.width <= 768; // Adjust breakpoint for md

  return (
    <div>
      <section className="flex-col items-center justify-between mx-auto max-w-7xl">
        <h1 className="p-8 text-3xl font-bold">Testimonials</h1>
        {isSmallScreen || isMediumScreen ? (
          <Swiper
            slidesPerView={1}
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
        ) : (
          <div className="flex justify-between w-full px-8 md:hidden lg:hidden xl:flex-2">
            <TestimonialItem
              className="xl:ml-24"
              imgUrl={
                "https://omlogistics.co.in/wp-content/uploads/2015/09/Randheer-sharma-359X233-848X335.jpg"
              }
              name={"Vikas Kumawat"}
              role={"HR Manager, Om Logistics."}
              comment={
                "A generous person who has a passion to work with different mindsets and also lead them too according to their calabour, this person is a hard working personality."
              }
            />
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
            <TestimonialItem
              className="xl:mr-24"
              imgUrl={
                "https://www.seekpng.com/png/detail/402-4024748_how-to-apply-the-porefessional-face-primer-persons.png"
              }
              name={"John Doe"}
              role={"HR Manager, Hacker Rank"}
              comment={
                "A generous person who has a passion to work with different mindsets and also lead them too according to their calabour, this person is a hard working personality."
              }
            />
          </div>
        )}
      </section>
    </div>
  );
}
