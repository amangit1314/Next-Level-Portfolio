import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialItem from "../components/TestimonialItem";
import "swiper/css";

const testimonails = [
  {
    personImg: "https://rb.gy/ibd52e",
    personName: "Rajat Dabral",
    personRole: "Co-Founder & CTO, Tempo",
    comment:
      "A amazing person to work with who give his best shot on every opportunity and brings different and inovative solutions to the problem statment. He can also lead team of different midsets and take the best out of them according to their calabour.",
  },
  {
    personImg: "https://rb.gy/idy1ur",
    personName: "Ankit Sharma",
    personRole: "Founder & CEO, E2V",
    comment:
      "Aman is not just a skilled developer; He's a fantastic team player. His collaborative spirit and positive attitude made them a joy to work with. Aman actively participated in team discussions, readily shared their knowledge, and were always willing to help their colleagues. He's problem-solving skills were equally impressive. He could break down complex challenges into manageable pieces and develop creative solutions, often exceeding expectations. I'm confident that Aman will be a valuable asset to any team he join.",
  },
  {
    personImg:
      "https://omlogistics.co.in/wp-content/uploads/2015/09/Randheer-sharma-359X233-848X335.jpg",
    personName: "Vikas Kumawat",
    personRole: "Manager, Om Logistics",
    comment:
      "A generous person who has a passion to work with different mindsets and also lead them too according to their calabour, this person is a hard working personality.",
  },
];

export default function Testimonials() {
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
    <div className="xl:mx-[5rem]">
      <section className="flex-col items-center justify-between mx-auto max-w-7xl">
        <h1 className="p-8 text-3xl font-bold">Testimonials</h1>
        <Swiper
          slidesPerView={isMobile ? 1 : 3}
          className="flex content-center justify-between w-full p-8 mx-auto swiper-wrapper"
        >
          {testimonails.map((item, index) => {
            return (
              <SwiperSlide>
                <TestimonialItem
                  imgUrl={item.personImg}
                  name={item.personName}
                  role={item.personRole}
                  comment={item.comment}
                />
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide className="swiper-slide">
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
          </SwiperSlide> */}
        </Swiper>
      </section>
    </div>
  );
}
