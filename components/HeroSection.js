import React from 'react'

function HeroSection() {
  return (
    <div className="h-screen mr-24 ml-24">
      <section
        id="hero-sect "
        className="h-auto w-100 flex flex-row justify-between  mt-8"
      >
        <div className="devInfo mt-20 flex flex-1 flex-col">
          <div className="about  w-9/12 font-semibold mt-8 text-4xl text-pink-500 ">
            I build and craft amazing experiences
          </div>

          <div className="moreAbout w-10/12 mt-12 text-2xl">
            My name's Aman Soni. I craft user interfaces using modern frontend
            framework's such as Flutter, React and other web technologie's.
          </div>

          <svg
            className="down-arrow bottom-12 w-4 mt-24  absolute stroke-white animate-bounce "
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
        {/* bg-gradient-to-r from-purple-500 to-pink-500 */}
        <div className="devPic relative flex-1 object-fill max-w-1 rounded mt-24  mb-24 ml-24 mr-4 h-0">
          {/* <img
            className="dev-pic absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            src="./images/jpg/aman.jpg"
            alt=""
          /> */}
          <a href="https://icons8.com/illustrations/author/5f32934501d0360017af905d"></a>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
