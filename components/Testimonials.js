import React from 'react'
import TestimonialItem from './TestimonialItem'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

function Testimonials() {
  return (
    <div className="">
      <h1 className="mb-12 ml-24 text-3xl font-bold ">Testimonials</h1>
      <div className="flex ml-24 ">
        <TestimonialItem
          className="ml-24"
          url={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigc0EeiuVYHOa1fh1n7klYO5PZWyZP3PtW-BC25wDFPdfxxkhluzZmIJp1RH1BpK2D3g&usqp=CAU'
          }
          name={'Nirman'}
          comment={
            'A generous person who has a passion to work with different mindsets $ also lead them too according to their calabour, this person is a hard working personality.'
          }
        />
        <TestimonialItem
          url={
            'https://play-lh.googleusercontent.com/M_aPovsamOxCvWIkNvm4dy9-imZOGzNXfvGT0_hHkOcvvIUqb-fyC1Bo7BdSQDaeEQ=s180'
          }
          name={'GDSC BKBIET'}
          comment={
            'A generous person who has a passion to work with different mindsets $ also lead them too according to their calabour, this person is a hard working personality.'
          }
        />
        <TestimonialItem
          url={
            'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/605d2aed0238ea0001dabbea/picture'
          }
          name={'Hackclub'}
          comment={
            'A generous person who has a passion to work with different mindsets $ also lead them too according to their calabour, this person is a hard working personality.'
          }
        />
        <TestimonialItem
          className="mr-24"
          url={
            'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/desnsw3yxrxlbzrwx3d9'
          }
          name={'GenioPay'}
          comment={
            'A generous person who has a passion to work with different mindsets $ also lead them too according to their calabour, this person is a hard working personality.'
          }
        />
      </div>
    </div>
  )
}

export default Testimonials
