import Image from "next/image";
import { FaBtc } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { HiOutlineServerStack } from "react-icons/hi2";
import { TbBrandNextjs } from "react-icons/tb";

function AboutSection() {
  return (
    <div>
      <section
        id="aboutSect"
        className="flex flex-col items-center justify-center h-auto p-8 mx-auto my-16 align-middle about max-w-7xl"
      >
        <p className="mt-12 font-normal text-center text-md">
          Get To Know More
        </p>
        <p className="mt-3 mb-12 text-3xl font-semibold text-center xl:text-4xl xl:mb-24">
          About Me
        </p>

        <div className="flex items-center justify-center mx-auto mb-10">
          {/* Image */}
          <div className="mx-auto ">
            <Image
              className="h-40 w-[15rem] rounded-lg relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
              src="/aman_animated2.png"
              alt="Profile"
              width={240}
              height={40}
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          {/* Right */}
          <div className="flex-col mt-10 mb-10 text-white xl:w-8/12 about-right">
            {/* Three long containers */}
            <div className="flex items-start justify-start w-8/12 h-auto mb-10 rounded-lg xl:ml-24 hover:shadow-md">
              <div className="w-auto h-auto p-2 m-2 text-gray-100 transition duration-200 ease-in-out delay-150 bg-gray-600 cursor-pointer rounded-xl xl:p-2 xl:h-40 hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 hover:text-white xl:w-65">
                <button className="items-center mt-2 ml-3">
                  {" "}
                  <TbBrandNextjs size={42} />{" "}
                </button>
                <div className="font-bold xl:mt-1 xl:mb-1 xl:ml-1 xl:text-sm">
                  Experience
                </div>
                <div className="mt-2 text-xs xl:m-1 xl:text-sm">2+ Years</div>
                <div className="mt-2 text-xs xl:text-sm xl:m-1">
                  Full Stack dev
                </div>
              </div>
              <div className="w-auto h-auto p-2 m-2 text-gray-100 transition duration-200 ease-in-out delay-150 bg-gray-600 cursor-pointer rounded-xl xl:p-2 xl:h-40 hover:-translate-y-1 hover:scale-110 hover:shadow-md hover:bg-purple-500 hover:text-white w-65">
                <button className="items-center mt-2 ml-3">
                  {" "}
                  <HiOutlineServerStack size={42} />{" "}
                </button>
                <div className="mt-1 mb-1 ml-1 font-bold :text-sm">
                  Experience
                </div>
                <div className="mt-2 text-xs xl:text-sm xl:m-1">6 months</div>
                <div className="mt-2 text-xs xl:text-sm xl:m-1">
                  Backend dev
                </div>
              </div>
              <div className="w-auto h-auto p-2 m-2 text-gray-100 transition duration-200 ease-in-out delay-150 bg-gray-600 cursor-pointer rounded-xl xl:p-2 xl:h-40 hover:-translate-y-1 hover:scale-110 hover:shadow-md hover:bg-purple-500 hover:text-white w-65">
                <button className="items-center mt-2 ml-3">
                  {" "}
                  <RiFlutterFill size={42} />{" "}
                </button>
                <div className="mt-1 mb-1 ml-1 text-sm font-bold">
                  Experience
                </div>
                <div className="mt-2 text-xs xl:text-sm xl:m-1">1 year</div>
                <div className="mt-2 text-xs xl:text-sm xl:m-1">Flutter</div>
              </div>
            </div>

            {/* Content text */}
            <p className="w-11/12 xl:w-8/12 xl:ml-24 ">
              Full Stack Developer, i create full stack apps and dapps with
              beautiful UI / UX. I have years of experience and many clients are
              happy with the projects carried out.
            </p>

            {/* Button */}
            <button className="px-4 py-2 mx-auto mt-12 text-white transition duration-300 ease-in-out delay-150 bg-purple-600 rounded-lg xl:ml-24 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
