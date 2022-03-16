import React from 'react'
import Image from 'next/image'

function HeroSection() {
  return (
    <div className="w-full h-full bg-image: url(">
      <div
        className="flex justify-between h-screen mb-24 ml-24 mr-24 w-100"
        id="hero-sect "
      >
        <div className="flex flex-col flex-1 h-auto mt-40 devInfo">
          <div className="w-9/12 text-4xl font-semibold about">
            <a className="text-transparent bg-purple-500 bg-clip-text bg-gradient-to-r from-pink-500 to">
              I build and craft amazing experiences
            </a>
          </div>

          <div className="w-9/12 mt-12 text-xl moreAbout">
            My name's Aman Soni. I craft user interfaces using modern frontend
            framework's such as Next.js, Flutter & React Native.
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
        <img />
        <Image
          className="object-contain w-7/12 mt-40 rounded-lg h-3/6"
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
