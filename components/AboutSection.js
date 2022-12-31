import Image from "next/image";
import { FaBtc } from "react-icons/fa";
import { HiOutlineDeviceTablet } from "react-icons/hi";
import { SiWeb3Dotjs } from "react-icons/si";

function AboutSection() {
  return (
    <div className="items-center flex flex-col align-middle mx-auto p-8 max-w-7xl justify-between">
      <p className="mb-24 text-4xl font-semibold text-center about-txt">
        About Me
      </p>
      <section
        id="aboutSect"
        className="flex items-center justify-center mb-24 about"
      >
        <div className="align-middle items-center">
          <Image
            className="object-cover cursor-pointer overflow-hidden bg-gray-900 rounded-lg shadow-lg about-left left-img"
            src="/images/jpg/ar.jpg"
            alt="Loading..."
            height={300}
            width={300}
            objectFit="cover"
          />
        </div>

        <div className="felx flex-col flex-1 w-6/12 text-white about-right">
          <div className="flex w-7/12 h-auto mb-10 ml-24 rounded-lg hover:shadow-md">
            <div className="h-40 p-2 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 text-gray-100 bg-gray-600 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white w-65">
              <button className="items-center mt-2 ml-3">
                {" "}
                <HiOutlineDeviceTablet size={42} />{" "}
              </button>
              <div className="mt-1 mb-1 ml-1 text-sm font-bold">Experience</div>
              <div className="m-1 text-sm">
                2+ Years of expr building projects with flutter
              </div>
            </div>
            <div className="h-40 p-2 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 text-gray-100 bg-gray-600 rounded-lg cursor-pointer hover:shadow-md hover:bg-purple-500 hover:text-white w-65">
              <button className="items-center mt-2 ml-3">
                {" "}
                <SiWeb3Dotjs size={42} />{" "}
              </button>
              <div className="mt-1 mb-1 ml-1 text-sm font-bold">Experience</div>
              <div className="m-1 text-sm">
                I like to build stuff on web3 and full stack with Next.js
              </div>
            </div>
            <div className="h-40 p-2 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 text-gray-100 bg-gray-600 rounded-lg cursor-pointer hover:shadow-md hover:bg-purple-500 hover:text-white w-65">
              <button className="items-center mt-2 ml-3">
                {" "}
                <FaBtc size={42} />{" "}
              </button>
              <div className="mt-1 mb-1 ml-1 text-sm font-bold">Experience</div>
              <div className="m-1 text-sm">
                I build Blockchain Dapp's for Web3.0 & Metaverse
              </div>
            </div>
          </div>

          <p className="w-6/12 ml-24 mr-24">
            Full Stack Developer, i create full stack apps and dapps with
            beautiful UI / UX. I have years of experience and many clients are
            happy with the projects carried out.
          </p>

          <button className="px-4 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 transition ease-in-out delay-150 py-2 mt-12 ml-24 text-white bg-purple-600 rounded-lg">
            Contact Me
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
