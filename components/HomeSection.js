import React from 'react'

function HomeSection() {
  return (
    <div
      className="h-screen mr-24 ml-24 mb-24 w-100 flex justify-between"
      id="hero-sect "
    >
      <div className="h-auto  devInfo mt-40 flex flex-1 flex-col">
        <div className="about w-9/12 font-semibold text-4xl">
          <a className="bg-clip-text  text-transparent bg-gradient-to-r from-pink-500 to bg-purple-500">
            I build and craft amazing experiences
          </a>
        </div>

        <div className="moreAbout w-9/12 mt-12 text-xl">
          My name's Aman Soni. I craft user interfaces using modern frontend
          framework's such as Next.js, Flutter & React Native.
        </div>

        <svg
          className="down-arrow bottom-10 w-4 absolute stroke-white animate-bounce "
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
      <img
        className="h-3/6 w-5/12 mt-40 rounded-lg object-contain"
        src="https://videohive.img.customer.envatousercontent.com/files/f3ba701a-5a31-40ec-80df-c390390d0c08/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=5afba6a57e913c5a454f9e76e91ccb3b"
      />
    </div>
  )
}

export default HomeSection
