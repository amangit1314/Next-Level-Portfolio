import React from 'react'
import TestimonialItem from './TestimonialItem'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

function Testimonials() {
  return (
    <div className="">
      <h1 className="font-bold text-3xl ml-24 mb-12 ">Testimonials</h1>
      <div className="ml-24">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <TestimonialItem
              url={
                'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/desnsw3yxrxlbzrwx3d9'
              }
              name={'GenioPay'}
              comment={
                'We have tried to work with aman but he had declined the offer from  us.'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              url={
                'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/desnsw3yxrxlbzrwx3d9'
              }
              name={'GenioPay'}
              comment={
                'We have tried to work with aman but he had declined the offer from  us.'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              url={
                'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/desnsw3yxrxlbzrwx3d9'
              }
              name={'GenioPay'}
              comment={
                'We have tried to work with aman but he had declined the offer from  us.'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              url={
                'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/desnsw3yxrxlbzrwx3d9'
              }
              name={'GenioPay'}
              comment={
                'We have tried to work with aman but he had declined the offer from  us.'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              url={
                'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/desnsw3yxrxlbzrwx3d9'
              }
              name={'GenioPay'}
              comment={
                'We have tried to work with aman but he had declined the offer from  us.'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialItem
              url={
                'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/desnsw3yxrxlbzrwx3d9'
              }
              name={'GenioPay'}
              comment={
                'We have tried to work with aman but he had declined the offer from  us.'
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials
