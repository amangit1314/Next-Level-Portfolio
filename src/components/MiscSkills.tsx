import {
  SiBun,
  SiDart,
  SiDeno,
  SiExpress,
  SiFlutter,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";

type Props = {
  directionLeft: boolean;
};

type Skill = {
  icon: React.ComponentType;
  name: string;
  proficiency?: number; // Optional field for proficiency level
  color?: string;
};

const skills: Skill[] = [
  {
    icon: IoLogoJavascript,
    name: "JavaScript",
    proficiency: 100,
    color: "yellow-400",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    proficiency: 100,
    color: "blue-600",
  },
  {
    icon: TbBrandReactNative,
    name: "React Native",
    proficiency: 100,
    color: "sky-300",
  },
  { icon: SiDart, name: "Dart", proficiency: 100, color: "blue-500" },
  { icon: SiFlutter, name: "Flutter", proficiency: 100, color: "sky-500" },
  { icon: SiNextdotjs, name: "Next.js", proficiency: 100, color: "white" }, // Special case for white background
  { icon: FaReact, name: "React", proficiency: 100, color: "blue-500" },
  {
    icon: RiTailwindCssLine,
    name: "Tailwind CSS",
    proficiency: 100,
    color: "sky-500",
  },
  { icon: FaNodeJs, name: "Node.js", proficiency: 100, color: "green-500" },
  { icon: SiExpress, name: "Express.js", proficiency: 100, color: "gray-500" },
  { icon: DiMongodb, name: "MongoDB", proficiency: 100, color: "green-800" },
  {
    icon: BiLogoPostgresql,
    name: "PostgreSQL",
    proficiency: 100,
    color: "blue-600",
  },
  { icon: FaAws, name: "AWS", proficiency: 100, color: "orange-400" },
  { icon: FaDocker, name: "Docker", proficiency: 100, color: "blue-400" },
  { icon: FaGitAlt, name: "Git", proficiency: 100, color: "orange-600" },
  { icon: FaGithub, name: `GitHub`, proficiency: 100, color: "white" }, // Special case for white background
];

function MiscSkills({ directionLeft }: Props) {
  return (
    <div className="flex flex-col items-center justify-between p-8 mx-[5rem]">
      {/* tech stack text and headline */}
      <div className="flex flex-col items-center justify-between p-8 mx-[5rem] my-8">
        <p className="mt-12 text-base font-normal text-center text-gray-300 ">
          Tech stack which I use
        </p>
        <p className="mt-2 mb-6 text-3xl font-semibold text-center xl:text-4xl text-white">
          Skills, Technologies
        </p>
      </div>

      {/* skills list */}
      <div className="grid grid-cols-3 md:flex md:flex-wrap md:items-center md:justify-center gap-4">
        {/* javascript */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <IoLogoJavascript className="text-7xl text-yellow-400" />

          <div className="absolute z-0 px-6 py-8 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">
                  JavaScript
                </p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* typescript */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiTypescript className="text-7xl text-blue-600" />

          <div className="absolute z-0 px-6 py-8  w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">
                  TypeScript
                </p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* react native */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <TbBrandReactNative className="text-7xl text-sky-300" />

          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">
                  React Native
                </p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* next.js */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4">
          <SiNextdotjs className="text-7xl text-white" />

          <div className="absolute z-0 px-7 py-10 h-22 w-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">
                  Next.js
                </p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* react */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaReact className="text-7xl text-blue-500" />

          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">React</p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* tailwind css */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <RiTailwindCssLine className="text-7xl text-sky-500" />

          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">
                  Tailwind
                </p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* node.js */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaNodeJs className="text-7xl text-green-500" />

          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">
                  Node.js
                </p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* express */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiExpress className="text-7xl text-gray-500" />

          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">
                  Express
                </p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* bun */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiBun className="text-7xl text-[#FFFDD0]" />

          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">Bun</p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* deno */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiDeno className="text-7xl text-white" />

          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">Deno</p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Golang  */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaGolang  className="text-7xl text-cyan-500" />

          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">Golang</p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* mongodb */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <DiMongodb className="text-7xl text-green-800" />

          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">
                  MongoDB
                </p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* postgresql */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <BiLogoPostgresql className="text-7xl text-[#323a6b]" />

          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">
                  PostgreSQL
                </p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* aws */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaAws className="text-7xl text-orange-400" />

          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">AWS</p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* docker */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaDocker className="text-7xl text-blue-400" />

          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">Docker</p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* git */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaGitAlt className="text-7xl text-orange-600" />

          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">Git</p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* github */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaGithub className="text-7xl text-white" />

          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">GitHub</p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* dart */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiDart className="text-7xl text-blue-500" />
          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">Dart</p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* flutter */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiFlutter className="text-7xl text-sky-500" />
          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">
                  Flutter
                </p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* python */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaPython className="text-7xl text-yellow-500" />

          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">Python</p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>

        {/* java */}
        <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaJava className="text-7xl text-red-500" />

          <div className="absolute z-0 px-7 py-10 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-95">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-1">
                <p className="text-xs font-thin uppercase text-white">Java</p>
                <p className="text-xl font-bold text-white opacity-100">100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <-------------------- OLD SKILLS GRID ----------------> */}
      {/* <div className="flex flex-col md:items-center md:flex-row md:justify-center">
        <div className="grid grid-cols-2 md:grid-cols-6">
          {skillsData.map((skill) => (
            <div key={skill.altText} className="p-8">
              <SkillWidget {...skill} directionLeft={directionLeft} />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default MiscSkills;

const NewSkillItem = (icon: any) => {
  return (
    <div className="rounded-2xl border-4 border-neutral-800 p-4 ">{icon}</div>
  );
};
