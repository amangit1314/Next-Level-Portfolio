import React from 'react'
import TestimonialItem from './TestimonialItem'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

function Testimonials() {
  return (
    <div className="ml-24 mr-24">
      <h1 className="mb-12 text-3xl font-bold ">Testimonials</h1>
      <div className="flex w-12/12">
        <div className="flex flex-col justify-between w-9/12 flex-2">
          <TestimonialItem
            className="ml-24"
            url={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Shiv_Nadar1.jpg/1200px-Shiv_Nadar1.jpg'
            }
            name={'Naresh Mital'}
            post={'Sales Manger, Verzo'}
            // comment={
            //   'A generous person who has a passion to work with different mindsets $ also lead them too according to their calabour, this person is a hard working personality.'
            // }
          />

          <TestimonialItem
            url={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICSVq9-BAcWmscgA5pQyPPxdeJGu6p6w-0Q&usqp=CAU'
            }
            name={'James D'}
            post={'Global Team Lead, Slack'}
            // comment={
            //   'A generous person who has a passion to work with different mindsets $ also lead them too according to their calabour, this person is a hard working personality.'
            // }
          />
          <TestimonialItem
            className="mr-24"
            url={
              'https://www.seekpng.com/png/detail/402-4024748_how-to-apply-the-porefessional-face-primer-persons.png'
            }
            name={'John Doe'}
            post={'HR Manger, Hacker Rank'}
            // comment={
            //   'A generous person who has a passion to work with different mindsets $ also lead them too according to their calabour, this person is a hard working personality.'
            // }
          />
        </div>

        <div className="flex flex-col flex-1 w-6/12 ">
          <div className="mb-1 text-xl font-bold">Heading</div>
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
  )
}

export default Testimonials
