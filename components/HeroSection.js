import React from 'react'
import Image from 'next/image'
import Avatar from './Avatar'

function HeroSection() {
  return (
    <div className="w-full h-full">
      <div
        className="w-screen h-screen mb-12 ml-6 mr-6 lg:mb-24 xl:mb-20 lg:justify-between xl:justify-between xl:w-12/12 lg:w-12/12 lg:flex xl:flex lg:ml-24 xl:ml-24 xl:mr-24 lg:mr-24"
        id="hero-sect "
      >
        <div className="h-auto mt-10 lg:flex lg:flex-col xl:flex xl:flex-col lg:flex-1 md:flex-1 xl:selection:flex-1 devInfo">
          <div className="w-full text-3xl font-semibold lg:text-4xl xl:text-4xl lg:w-9/12 xl:w-9/12 about">
            <Avatar className="" src="/images/svg/boy.svg" />
            <a className="mt-20 text-transparent bg-purple-500 lg:mt-0 xl:mt-0 bg-clip-text bg-gradient-to-r from-pink-500 ">
              I build and craft amazing experiences
            </a>
          </div>

          <div className="w-full mt-8 text-lg xl:text-xl lg:text-xl lg:w-9/12 moreAbout">
            My name's Aman Soni. I craft user interfaces using modern frontend
            framework's such as Next.js & Flutter.
          </div>

          <svg
            className="absolute w-4 down-arrow bottom-10 stroke-white animate-bounce "
            viewBox="0 0 16 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z"
              fill="white"
            />
          </svg>
        </div>
        {/* <img /> */}
        <Image
          className="invisible lg:object-contain xl:object-contain lg:w-7/12 xl:w-7/12 lg:mt-40 xl:mt-40 lg:rounded-lg lg:h-3/6 xl-h-3/6 lg:visible xl:visible"
          src="/images/jpg/sm.webp"
          alt="Loading..."
          height={700}
          width={500}
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default HeroSection
