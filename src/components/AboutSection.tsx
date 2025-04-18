import Image from "next/image";
import { CiMobile2 } from "react-icons/ci";
import { RiFlutterFill } from "react-icons/ri";
import { IoFileTrayFull } from "react-icons/io5";
import { HiOutlineServerStack } from "react-icons/hi2";
import Link from "next/link";

export const AboutSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-8 xl:px-20 py-16 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-base font-normal text-gray-300">Get To Know More</p>
        <p className="mt-2 text-3xl font-semibold text-white xl:text-4xl">
          About Me
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-10 lg:gap-8 xl:gap-6">
        {/* Left: Profile Image */}
        <div className="hidden lg:flex">
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px]">
            <div className="relative shadow-lg w-full h-full overflow-hidden rounded-2xl">
              <Image
                src="/images/aman_gibly.png"
                alt="Profile"
                fill
                style={{ objectPosition: "top" }}
                className="object-cover rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-3/5 space-y-8">
          {/* Experience List */}
          <ExperienceList />

          {/* Bio + Button */}
          <div className="space-y-4">
            <p className="text-sm md:text-base text-gray-300">
              My name is Aman Soni and I am a Full Stack Developer. As a
              full-stack developer, I create full stack experiences with
              beautiful UI / UX. With my 3 years of experience building projects
              my clients are happy with, I can provide both assurance and
              quality in my work.
            </p>

            {/* <button className="px-4 py-2 text-white bg-purple-600 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
              Contact Me
            </button> */}
            <Link
              href="#contact"
              scroll={true}
              className="inline-block px-4 py-2 text-white bg-purple-600 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

// ===================== ExperienceList =========================

const ExperienceList = () => {
  return (
    <div className="flex items-center justify-start gap-4 overflow-x-auto w-full px-2 py-4">
      <ExperienceItem
        field="Full Stack dev"
        duration={3}
        icon={<IoFileTrayFull size={38} />}
      />
      <ExperienceItem
        field="Backend dev"
        duration={3}
        icon={<HiOutlineServerStack size={38} />}
      />
      <ExperienceItem
        field="Mobile app dev"
        duration={3}
        icon={<CiMobile2 size={38} />}
      />
    </div>
  );
};

// ===================== ExperienceItem =========================

const ExperienceItem = ({
  field,
  duration,
  icon,
}: {
  field: string;
  duration: number;
  icon: JSX.Element;
}) => {
  return (
    <div className="min-w-[6.5rem] md:min-w-[8rem] text-center bg-zinc-800 text-gray-100 rounded-xl p-4 hover:bg-purple-500 hover:text-white transition-all duration-300 cursor-pointer">
      <div className="flex justify-center mb-2">{icon}</div>
      <div className="text-sm font-semibold">{field}</div>
      <div className="text-xs mt-1">{duration} Year of exp</div>
    </div>
  );
};
