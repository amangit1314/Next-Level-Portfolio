import React from 'react'

function HeroSection() {
  return (
    // pb-12 pl-6 pr-6 max-w-700 lg:mb-24 xl:mb-20 md:justify-between lg:justify-between xl:justify-between xl:w-12/12 lg:w-12/12 lg:flex xl:flex md:flex lg:ml-24 xl:ml-24 xl:mr-24 lg:mr-24
    <div
      className="flex flex-col justify-between w-full h-screen lg:flex-row xl:flex-row"
      id="hero-sect "
    >
      <div className="h-auto mt-10 xl:mr-24 lg:flex lg:flex-col xl:flex xl:flex-col lg:flex-1 md:flex-1 xl:flex-1 devInfo">
        {/* <Image
          className="items-center visible ml-8 h-80 w-80 align-center md:visible lg:invisible lg:h-0 lg:w-0 xl:invisible xl:h-0 xl:w-0 "
          src="https://avatars.dicebear.com/api/miniavs/hulk.svg"
          layout="fill"
        /> */}

        <div className="w-full mt-16 ml-6 text-3xl font-semibold lg:max-w-md xl:max-w-md lg:text-4xl lg:ml-24 xl:text-4xl xl:ml-24 lg:w-9/12 xl:w-9/12 about">
          <a className="mt-8 text-transparent bg-purple-500 lg:mt-0 xl:mt-0 bg-clip-text bg-gradient-to-r from-pink-500 ">
            I build and craft amazing experiences
          </a>
        </div>

        {/* lg:text-4xl xl:text-4xl lg:w-9/12 xl:w-9/12 about lg:mt-0 xl:mt-0 bg-clip-text bg-gradient-to-r from-pink-500 */}

        <div className="w-full mt-8 ml-6 text-lg lg:text-xl lg:ml-24 lg:max-w-md xl:text-xl xl:ml-24 xl:max-w-md">
          My name's Aman Soni. I craft user interfaces using modern frontend
          framework's such as Next.js & Flutter.
        </div>

        <svg
          className="absolute invisible w-4 ml-8 down-arrow bottom-10 xl:mr-24 stroke-white animate-bounce lg:visible lg:ml-24 lg:mt-8 lg:bottom-7 xl:visible xl:ml-24 xl:mt-8 xl:bottom-10"
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

      <div className="mb-24 xl:mt-10 xl:mr-24">
        {/* <Image
          className="visible w-40 h-40 lg:w-20 lg:h-20 xl:h-20 xl:w-20 md:invisible lg:mr-24 lg:visible lg:mt-40 lg:max-h-md lg:max-w-md xl:mr-24 xl:object-contain xl:visible"
          //src="/images/jpg/sm.webp"
          src="https://avatars.dicebear.com/api/miniavs/hulk.svg"
          alt="Loading..."
          height={400}
          width={400}
          objectFit="contain"
        /> */}
        {/* <ShowAvatar /> */}
      </div>
    </div>
  )
}

export default HeroSection
