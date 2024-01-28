import Image from "next/image";
import { FaBtc } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { HiOutlineServerStack } from "react-icons/hi2";
import { TbBrandNextjs } from "react-icons/tb";

function AboutSection() {
  return (
    <>
      <section
        id="aboutSect"
        className="flex flex-col items-center justify-center h-auto px-[5rem] mx-auto my-16 align-middle about max-w-7xl"
      >
        <div>
          <p className="mt-12 text-base font-normal text-center ">
            Get To Know More
          </p>
          <p className="mt-2 mb-6 text-3xl font-semibold text-center xl:text-4xl xl:mb-24">
            About Me
          </p>
        </div>

        <div className="flex items-center justify-center mb-6">
          {/* left */}
          <div>
            {/* Image */}
            {/* <div className="mx-auto lg:visible xl:visible">
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
            </div> */}
            <div className="lg:visible xl:visible relative w-full max-w-xs mx-auto lg:mt-0 xl:mt-0 lg:mx-0 xl:mx-0 h-80 lg:w-96 lg:h-96 lg:max-w-lg xl:max-w-xl">
              <div className="relative shadow-lg w-full h-full overflow-hidden rounded-xl lg:rounded-2xl">
                <img
                  className="object-cover w-full h-full duration-1000 ease-in-out transition-transhtmlForm transhtmlForm hover:scale-105"
                  src="/illus.png"
                  alt="Aman Soni"
                />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex-col mt-10 mb-10 text-white xl:w-8/12 about-right">
            {/* Experience List */}
            <ExperienceList />

            {/* Content text */}
            <p className="w-full ml-2 text-base line-clamp-4 xl:w-8/12 xl:ml-12 ">
              Full Stack Developer, i create full stack apps and dapps with
              beautiful UI / UX. I have years of experience and many clients are
              happy with the projects carried out.
            </p>

            {/* Button */}
            <button className="px-4 py-2 mt-6 ml-2 text-white transition duration-300 ease-in-out delay-150 bg-purple-600 rounded-lg md:mx-auto xl:ml-12 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;

const ExperienceList = () => {
  return (
    <div className="flex items-start justify-start w-full h-auto mb-6 overflow-x-auto rounded-lg scroll-smooth md:w-xl xl:ml-12 space-x-4 hover:shadow-md">
      <ExperienceItem
        field="Full Stack dev"
        duration={1}
        icon={<TbBrandNextjs size={42} />}
      />
      <ExperienceItem
        field="Backend dev"
        duration={1}
        icon={<HiOutlineServerStack size={42} />}
      />
      <ExperienceItem
        field="Flutter dev"
        duration={2}
        icon={<RiFlutterFill size={42} />}
      />
    </div>
  );
};

const ExperienceItem = ({ field, duration, icon }) => {
  return (
    <div className="px-2 pt-1 text-gray-100 transition duration-200 ease-in-out delay-150 bg-gray-600 cursor-pointer hover:shadow-lg h-36 rounded-xl hover:-translate-y-0.5 hover:bg-purple-500 hover:text-white w-65">
      <button className="items-center mt-2 ml-3">
        {icon || <RiFlutterFill size={42} />}
      </button>
      <div className="ml-[2px] mt-1">
        <div className="text-sm font-bold">Experience</div>
        <div className="text-xs xl:text-sm xl:m-1">{duration || 2} Year</div>
      </div>
      <div className="mt-1 text-xs xl:text-sm xl:m-1">
        {field || "Flutter dev"}
      </div>
    </div>
  );
}