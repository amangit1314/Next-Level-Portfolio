import Image from "next/image";
import { CiMobile2 } from "react-icons/ci";
import { RiFlutterFill } from "react-icons/ri";
import { IoFileTrayFull } from "react-icons/io5";
import { HiOutlineServerStack } from "react-icons/hi2";

function AboutSection() {
  return (
    <div className="flex flex-col items-center justify-center p-8 mx-[5rem] my-16 align-middle about max-w-7xl">
      <div className="flex flex-col items-center justify-between p-8 mx-[5rem] my-8">
        <p className="mt-12 text-base font-normal text-center text-gray-300">
          Get To Know More
        </p>
        <p className="mt-2  text-3xl font-semibold text-white text-center xl:text-4xl">
          About Me
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-center ">
        {/* left */}
        <div className="hidden lg:flex xl:flex">
          <div className="lg:visible xl:visible relative w-full max-w-xs mx-auto lg:mt-0 xl:mt-0 lg:mx-0 xl:mx-0 h-80 lg:w-80 lg:h-80 lg:max-w-lg xl:max-w-xl">
            <div className="relative shadow-lg w-full h-full overflow-hidden rounded-xl lg:rounded-2xl">
              <Image
                className="h-40 w-[15rem] object-cover lg:w-96 lg:h-96 rounded-lg relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] ease-in-out transition-all duration-300 hover:scale-105"
                src="/images/aman-pro.jfif"
                alt="Profile"
                width={320}
                height={160}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-col m-10 xl:w-8/12 w-full about-right md:ml-4 px-12 md:p-8">
          {/* Experience List */}
          <ExperienceList />

          {/* Content text */}
          <div className="px-4 md:px-0 xl:max-w-[460px] w-full">
            <p className="px-4 md:px-0 w-full md:text-base line-clamp-4 md:ml-12 text-gray-300">
              My name is Aman Soni and I am a Full Stack Developer. As a
              full-stack developer, I create full stack expereince with
              beautiful UI / UX with my 3 years of experience building projects
              my clients are happy with the projects carried out. So I can
              provide you ensurance and quality both in my work.
            </p>

            {/* Button */}
            <button className="px-4 py-2 mt-6 md:ml-3 text-white transition duration-300 ease-in-out delay-150 bg-purple-600 rounded-lg md:mx-auto xl:ml-12 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

const ExperienceList = () => {
  return (
    <div className="flex items-start justify-start w-full h-auto mb-6 overflow-x-auto rounded-lg scroll-smooth p-12 md:p-0 md:mr-0 xl:ml-12 space-x-2  md:space-x-4 hover:shadow-md">
      <ExperienceItem
        field="Full Stack dev"
        duration={3}
        icon={<IoFileTrayFull size={42} />}
      />
      <ExperienceItem
        field="Backend dev"
        duration={3}
        icon={<HiOutlineServerStack size={42} />}
      />
      <ExperienceItem
        field="Mobile app dev"
        duration={3}
        icon={<CiMobile2 size={42} />}
      />
    </div>
  );
};

const ExperienceItem = ({ field, duration, icon }: any) => {
  return (
    <div className="px-2 text-gray-100 transition-all duration-200 ease-in-out delay-150 bg-zinc-800 cursor-pointer hover:shadow-lg py-4 w-28 min-h-40 md:w-36 rounded-xl hover:bg-purple-500 hover:text-white md:h-65 space-y-2">
      <button className="flex justify-center items-center mt-2 mx-auto">
        {icon || <RiFlutterFill size={42} />}
      </button>

      <div className="flex justify-center items-center mx-auto">
        <div className="mt-1 justify-start items-center">
          <div className="text-sm font-bold text-center">{field}</div>
          <div className="text-xs xl:text-sm text-center ">
            {duration || 2} Year of exp
          </div>
        </div>
      </div>
    </div>
  );
};
