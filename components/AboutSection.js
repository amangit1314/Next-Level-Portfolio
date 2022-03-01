import Image from 'next/image'
import { HiOutlineDeviceTablet } from 'react-icons/hi'
import { FaBtc } from 'react-icons/fa'
import { SiWeb3Dotjs } from 'react-icons/si'

function AboutSection() {
  return (
    <div className="items-center">
      <p className="about-txt ml-24 mb-24 text-4xl text-center font-semibold">
        About Me
      </p>
      <section
        id="aboutSect"
        className="about mb-24 flex justify-between items-center"
      >
        <div className="ml-60 align-middle">
          <Image
            className="about-left overflow-hidden bg-gray-900 rounded-lg left-img shadow-lg z-1 object-cover"
            src="/images/jpg/aman.jpg"
            alt="Loading..."
            height={300}
            width={300}
            objectFit="cover"
          />
        </div>
        <div className="about-right text-white w-6/12 flex-1">
          <div className=" flex h-auto w-7/12 hover:shadow-md ml-24 rounded-lg mb-10">
            <div className="bg-gray-600 hover:bg-purple-500 hover:text-white cursor-pointer text-gray-100 h-40 w-65 rounded-lg m-2 p-2">
              <button className="ml-3 items-center mt-2">
                {' '}
                <HiOutlineDeviceTablet size={42} />{' '}
              </button>
              <div className="text-sm font-bold ml-1 mb-1 mt-1">Experience</div>
              <div className="text-sm m-1">
                2+ Years of expr building projects with flutter
              </div>
            </div>
            <div className="bg-gray-600 cursor-pointer hover:shadow-md hover:bg-purple-500 hover:text-white text-gray-100 h-40 w-65 rounded-lg m-2 p-2">
              <button className="ml-3 items-center mt-2">
                {' '}
                <SiWeb3Dotjs size={42} />{' '}
              </button>
              <div className="text-sm font-bold ml-1 mb-1 mt-1">Experience</div>
              <div className="text-sm m-1">
                I like to build stuff on web3 and full stack with Next.js
              </div>
            </div>
            <div className="bg-gray-600 cursor-pointer hover:shadow-md hover:bg-purple-500 hover:text-white text-gray-100 h-40 w-65 rounded-lg m-2 p-2">
              <button className="ml-3 items-center mt-2">
                {' '}
                <FaBtc size={42} />{' '}
              </button>
              <div className="text-sm font-bold ml-1 mb-1 mt-1">Experience</div>
              <div className="text-sm m-1">
                I build Blockchain Dapp's for Web3.0 & Metaverse
              </div>
            </div>
          </div>

          <p className="ml-24 mr-24 w-6/12">
            Full Stack Developer, i create full stack apps and dapps with
            beautiful UI / UX. I have years of experience and many clients are
            happy with the projects carried out.
          </p>
          <button
            className=" bg-pink-600 mt-12 ml-24 hover:bg-pink-700 text-white py-2 px-4 rounded-lg
          "
          >
            Contact Me
          </button>
        </div>
      </section>
    </div>
  )
}

export default AboutSection
