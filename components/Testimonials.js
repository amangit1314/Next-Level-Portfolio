import React from "react";
import TestimonialItem from "./TestimonialItem";

// Import Swiper styles
import "swiper/css";

export default function Testimonials() {
  return (
    <section className="flex-col items-center justify-between mx-auto max-w-7xl">
      <h1 className="p-8 text-3xl font-bold ">Testimonials</h1>
      <div className="flex items-center justify-between flex-1 w-full pb-20">
        <h3 className="w-auto p-8 xl:w-7/12">
          I always try to put my 100 percent to do the work and give the value
          for the same. For me the delivery of the demanded thing is necessary.
        </h3>
        <div className="w-12 h-10 bg-black"></div>
      </div>
      <div className="flex justify-between w-full px-8 xl:flex-2">
        <TestimonialItem
          className="xl:ml-24"
          imgUrl={
            "https://omlogistics.co.in/wp-content/uploads/2015/09/Randheer-sharma-359X233-848X335.jpg"
          }
          name={"Vikas Kumawat"}
          role={"HR Manger, Om Logistics."}
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
          role={"HR Manger, Hacker Rank"}
          comment={
            "A generous person who has a passion to work with different mindsets and also lead them too according to their calabour, this person is a hard working personality."
          }
        />
      </div>
    </section>
  );
}
