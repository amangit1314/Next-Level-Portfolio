import React from "react";
import TestimonialItem from "./TestimonialItem";

// Import Swiper styles
import "swiper/css";

export default function Testimonials() {
  // function itemDetail() {
  //   React.useState();
  // }

  return (
    <div className="flex flex-col items-center mx-auto p-8 max-w-7xl justify-between">
      <h1 className="mb-12 text-3xl font-bold ">Testimonials</h1>
      <div className="flex w-full">
        <div className="flex flex-col justify-between w-9/12 flex-2">
          <TestimonialItem
            //onClick = {itemDetail}
            className="ml-24"
            url={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Shiv_Nadar1.jpg/1200px-Shiv_Nadar1.jpg"
            }
            name={"Naresh Mital"}
            post={"Sales Manger, Verzo"}
            // comment={
            //   'A generous person who has a passion to work with different mindsets $ also lead them too according to their calabour, this person is a hard working personality.'
            // }
          />

          <TestimonialItem
            url={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICSVq9-BAcWmscgA5pQyPPxdeJGu6p6w-0Q&usqp=CAU"
            }
            name={"James D"}
            post={"Global Team Lead, Slack"}
            // comment={
            //   'A generous person who has a passion to work with different mindsets $ also lead them too according to their calabour, this person is a hard working personality.'
            // }
          />

          <TestimonialItem
            className="mr-24"
            url={
              "https://www.seekpng.com/png/detail/402-4024748_how-to-apply-the-porefessional-face-primer-persons.png"
            }
            name={"John Doe"}
            post={"HR Manger, Hacker Rank"}
            // comment={
            //   'A generous person who has a passion to work with different mindsets $ also lead them too according to their calabour, this person is a hard working personality.'
            // }
          />
        </div>

        <div className="flex flex-col flex-1 w-6/12 ">
          {/* onClick={headingText} */}
          <div className="mb-1 text-xl font-bold">Heading</div>
          {/* onClick={subHeadingText} */}
          <div className="mb-4 text-lg font-medium">Sub-Text</div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus,
            voluptatum quod aliquid aut voluptatem voluptate quia deleniti
            eveniet ducimus consequuntur sapiente in! Quis placeat blanditiis,
            minus magnam sed veritatis soluta sequi voluptates nesciunt eum.
          </div>
        </div>
      </div>
    </div>
  );
}
