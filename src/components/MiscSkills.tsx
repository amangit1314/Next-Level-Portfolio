// import {
//   SiBun,
//   SiDart,
//   SiDeno,
//   SiExpress,
//   SiFlutter,
//   SiKotlin,
//   SiKubernetes,
//   SiNextdotjs,
//   SiTypescript,
// } from "react-icons/si";
// import {
//   FaAws,
//   FaDocker,
//   FaGitAlt,
//   FaGithub,
//   FaJava,
//   FaNodeJs,
//   FaPython,
//   FaReact,
// } from "react-icons/fa";
// import { DiMongodb, DiRedis } from "react-icons/di";
// import { RiTailwindCssLine } from "react-icons/ri";
// import { BiLogoPostgresql } from "react-icons/bi";
// import { IoLogoJavascript } from "react-icons/io";
// import { TbBrandReactNative, TbSql } from "react-icons/tb";
// import { FaGolang } from "react-icons/fa6";

// type Props = {
//   directionLeft: boolean;
// };

// type Skill = {
//   icon: React.ComponentType;
//   name: string;
//   proficiency?: number; // Optional field for proficiency level
//   color?: string;
// };

// const skills: Skill[] = [
//   {
//     icon: IoLogoJavascript,
//     name: "JavaScript",
//     proficiency: 100,
//     color: "yellow-400",
//   },
//   {
//     icon: SiTypescript,
//     name: "TypeScript",
//     proficiency: 100,
//     color: "blue-600",
//   },
//   {
//     icon: TbBrandReactNative,
//     name: "React Native",
//     proficiency: 100,
//     color: "sky-300",
//   },
//   { icon: SiDart, name: "Dart", proficiency: 100, color: "blue-500" },
//   { icon: SiFlutter, name: "Flutter", proficiency: 100, color: "sky-500" },
//   { icon: SiNextdotjs, name: "Next.js", proficiency: 100, color: "white" }, // Special case for white background
//   { icon: FaReact, name: "React", proficiency: 100, color: "blue-500" },
//   {
//     icon: RiTailwindCssLine,
//     name: "Tailwind CSS",
//     proficiency: 100,
//     color: "sky-500",
//   },
//   { icon: FaNodeJs, name: "Node.js", proficiency: 100, color: "green-500" },
//   { icon: SiExpress, name: "Express.js", proficiency: 100, color: "gray-500" },
//   { icon: DiMongodb, name: "MongoDB", proficiency: 100, color: "green-800" },
//   {
//     icon: BiLogoPostgresql,
//     name: "PostgreSQL",
//     proficiency: 100,
//     color: "blue-600",
//   },
//   { icon: FaAws, name: "AWS", proficiency: 100, color: "orange-400" },
//   { icon: FaDocker, name: "Docker", proficiency: 100, color: "blue-400" },
//   { icon: FaGitAlt, name: "Git", proficiency: 100, color: "orange-600" },
//   { icon: FaGithub, name: `GitHub`, proficiency: 100, color: "white" }, // Special case for white background
// ];

// export const MiscSkills = ({ directionLeft }: Props) => {
//   return (
//     <div className="flex flex-col items-center justify-between p-8 mx-[5rem]">
//       {/* tech stack text and headline */}
//       <div className="flex flex-col items-center justify-between p-8 mx-[5rem] my-8">
//         <p className="mt-12 text-base font-normal text-center text-gray-300 ">
//           Tech stack which I use
//         </p>
//         <p className="mt-2 mb-6 text-3xl font-semibold text-center xl:text-4xl text-white">
//           Skills, Technologies
//         </p>
//       </div>

//       {/* skills list */}
//       <div className="grid grid-cols-3 md:flex md:flex-wrap md:items-center md:justify-center gap-4 p-12 md:p-0">
//         {/* javascript */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <IoLogoJavascript className="text-7xl text-yellow-400" />

//           <div className="absolute z-0 px-6 py-12 w-22 h-22 transition-all  ease-in-out rounded-2xl opacity-0 group-hover:bg-yellow-400 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">
//                   JavaScript
//                 </p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* typescript */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <SiTypescript className="text-7xl text-blue-600" />

//           <div className="absolute z-0 px-6 py-12  w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-blue-600 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">
//                   TypeScript
//                 </p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* react native */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <TbBrandReactNative className="text-7xl text-sky-300" />

//           <div className="absolute z-0 px-8 py-10 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-sky-300 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">
//                   React Native
//                 </p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* next.js */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4">
//           <SiNextdotjs className="text-7xl text-white" />

//           <div className="absolute z-0 px-8 py-12 h-22 w-22 transition-all  ease-in-out rounded-2xl opacity-0 group-hover:bg-white group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-black">
//                   Next.js
//                 </p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* react */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <FaReact className="text-7xl text-blue-500" />

//           <div className="absolute z-0 px-9 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-blue-500 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">React</p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* tailwind css */}
//         {/* <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <RiTailwindCssLine className="text-7xl text-sky-500" />

//           <div className="absolute z-0 px-7 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-sky-500 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">
//                   Tailwind
//                 </p>
//                 <p className="text-xl font-bold text-white opacity-100">100%</p>
//               </div>
//             </div>
//           </div>
//         </div> */}

//         {/* node.js */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <FaNodeJs className="text-7xl text-green-500" />

//           <div className="absolute z-0 px-7 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-green-500 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">
//                   Node.js
//                 </p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* express */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <SiExpress className="text-7xl text-gray-500" />

//           <div className="absolute z-0 px-7 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-gray-500 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">
//                   Express
//                 </p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* bun */}
//         {/* <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <SiBun className="text-7xl text-[#FFFDD0]" />

//           <div className="absolute z-0 px-10 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-[#FFFDD0] group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-yellow-800">
//                   Bun
//                 </p>
//                 <p className="text-xl font-bold text-white opacity-100">100%</p>
//               </div>
//             </div>
//           </div>
//         </div> */}

//         {/* deno */}
//         {/* <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <SiDeno className="text-7xl text-white" />

//           <div className="absolute z-0 px-10 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-black group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">Deno</p>
//                 <p className="text-xl font-bold text-white opacity-100">100%</p>
//               </div>
//             </div>
//           </div>
//         </div> */}

//         {/* Golang  */}
//         {/* <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <FaGolang className="text-7xl text-cyan-500" />

//           <div className="absolute z-0 px-7 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-cyan-500 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">Golang</p>
//                 <p className="text-xl font-bold text-white opacity-100">100%</p>
//               </div>
//             </div>
//           </div>
//         </div> */}

//         {/* mongodb */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <DiMongodb className="text-7xl text-green-800" />

//           <div className="absolute z-0 px-7 py-12 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-green-800 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">
//                   MongoDB
//                 </p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* reddis */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <DiRedis className="text-7xl text-red-600" />

//           <div className="absolute z-0 px-10 py-12 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-red-600 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">Redis</p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* sql */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <TbSql className="text-7xl text-zinc-600" />

//           <div className="absolute z-0 px-11 py-12 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-zinc-600 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">SQL</p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* postgresql */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <BiLogoPostgresql className="text-7xl text-[#323a6b]" />

//           <div className="absolute z-0 px-5 py-12 w-22 h-22 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-[#323a6b] group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">
//                   PostgreSQL
//                 </p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* aws */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <FaAws className="text-7xl text-orange-400" />

//           <div className="absolute z-0 px-10 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-orange-400 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">AWS</p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* docker */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <FaDocker className="text-7xl text-blue-400" />

//           <div className="absolute z-0 px-8 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-blue-400 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">Docker</p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* kubernetes */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <SiKubernetes className="text-7xl text-blue-800" />

//           <div className="absolute z-0 px-6 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-blue-800 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">
//                   Kubernetes
//                 </p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* git */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <FaGitAlt className="text-7xl text-orange-600" />

//           <div className="absolute z-0 px-12 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-orange-600 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">Git</p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* github */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <FaGithub className="text-7xl text-white" />

//           <div className="absolute z-0 px-9 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-white group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-black">GitHub</p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* java */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <FaJava className="text-7xl text-red-500" />

//           <div className="absolute z-0 px-10 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-red-500 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">Java</p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* kotlin */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <SiKotlin className="text-7xl text-purple-600" />

//           <div className="absolute z-0 px-10 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-600 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">Kotlin</p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* dart */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <SiDart className="text-7xl text-blue-500" />
//           <div className="absolute z-0 px-10 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-blue-500 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">Dart</p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* flutter */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <SiFlutter className="text-7xl text-sky-500" />
//           <div className="absolute z-0 px-8 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-sky-500 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">
//                   Flutter
//                 </p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* python */}
//         <div className="flex justify-center items-center relative group cursor-pointer transition-all duration-300 rounded-2xl border-4 border-neutral-800 p-4 ">
//           <FaPython className="text-7xl text-yellow-500" />

//           <div className="absolute z-0 px-8 py-12 w-22 h-22 transition-all ease-in-out rounded-2xl opacity-0 group-hover:bg-yellow-500 group-hover:opacity-95">
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center space-y-1">
//                 <p className="text-xs font-thin uppercase text-white">Python</p>
//                 {/* <p className="text-xl font-bold text-white opacity-100">100%</p> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <-------------------- OLD SKILLS GRID ----------------> */}
//       {/* <div className="flex flex-col md:items-center md:flex-row md:justify-center">
//         <div className="grid grid-cols-2 md:grid-cols-6">
//           {skillsData.map((skill) => (
//             <div key={skill.altText} className="p-8">
//               <SkillWidget {...skill} directionLeft={directionLeft} />
//             </div>
//           ))}
//         </div>
//       </div> */}
//     </div>
//   );
// };

// const NewSkillItem = (icon: any) => {
//   return (
//     <div className="rounded-2xl border-4 border-neutral-800 p-4 ">{icon}</div>
//   );
// };

"use client";

import { motion } from "framer-motion";
import { Inter, Poppins } from "next/font/google";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiFlutter,
  SiKotlin,
  SiKubernetes,
  SiDart,
  SiNestjs,
  SiFastapi,
  SiJavascript,
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
import { DiMongodb, DiRedis } from "react-icons/di";
import { RiTailwindCssLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandReactNative, TbSql } from "react-icons/tb";
import { FiChevronRight, FiStar } from "react-icons/fi";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

type Skill = {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  color: string;
  category: string;
  proficiency?: number;
};

const skills: Skill[] = [
  // Frontend
  {
    icon: IoLogoJavascript,
    name: "JavaScript",
    color: "from-yellow-400 to-yellow-600",
    category: "Frontend",
    proficiency: 90,
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    color: "from-blue-500 to-blue-700",
    category: "Frontend",
    proficiency: 85,
  },
  {
    icon: FaReact,
    name: "React",
    color: "from-cyan-400 to-blue-500",
    category: "Frontend",
    proficiency: 88,
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    color: "from-gray-800 to-black",
    category: "Frontend",
    proficiency: 82,
  },
  {
    icon: RiTailwindCssLine,
    name: "Tailwind",
    color: "from-cyan-400 to-teal-500",
    category: "Frontend",
    proficiency: 92,
  },

  // Backend
  {
    icon: FaNodeJs,
    name: "Node.js",
    color: "from-green-500 to-green-700",
    category: "Backend",
    proficiency: 87,
  },
  {
    icon: SiExpress,
    name: "Express",
    color: "from-gray-600 to-gray-800",
    category: "Backend",
    proficiency: 85,
  },
  {
    icon: SiNestjs,
    name: "NestJS",
    color: "from-red-400 to-red-500",
    category: "Backend",
    proficiency: 78,
  },
  {
    icon: FaPython,
    name: "Python",
    color: "from-blue-400 to-yellow-500",
    category: "Backend",
    proficiency: 80,
  },
  {
    icon: SiFastapi,
    name: "Fast API",
    color: "from-blue-400 to-blue-500",
    category: "Backend",
    proficiency: 75,
  },

  // Mobile
  {
    icon: TbBrandReactNative,
    name: "React Native",
    color: "from-cyan-300 to-blue-500",
    category: "Mobile",
    proficiency: 83,
  },
  {
    icon: SiFlutter,
    name: "Flutter",
    color: "from-blue-400 to-cyan-500",
    category: "Mobile",
    proficiency: 70,
  },
  {
    icon: SiDart,
    name: "Dart",
    color: "from-blue-500 to-indigo-600",
    category: "Mobile",
    proficiency: 72,
  },

  // Database
  {
    icon: DiMongodb,
    name: "MongoDB",
    color: "from-green-600 to-green-800",
    category: "Database",
    proficiency: 85,
  },
  {
    icon: BiLogoPostgresql,
    name: "PostgreSQL",
    color: "from-blue-600 to-indigo-700",
    category: "Database",
    proficiency: 80,
  },
  {
    icon: DiRedis,
    name: "Redis",
    color: "from-red-500 to-red-700",
    category: "Database",
    proficiency: 78,
  },
  {
    icon: TbSql,
    name: "SQL",
    color: "from-gray-500 to-gray-700",
    category: "Database",
    proficiency: 82,
  },

  // DevOps & Tools
  {
    icon: FaAws,
    name: "AWS",
    color: "from-orange-400 to-yellow-500",
    category: "DevOps",
    proficiency: 75,
  },
  {
    icon: FaDocker,
    name: "Docker",
    color: "from-blue-400 to-blue-600",
    category: "DevOps",
    proficiency: 80,
  },
  {
    icon: SiKubernetes,
    name: "Kubernetes",
    color: "from-blue-600 to-purple-600",
    category: "DevOps",
    proficiency: 70,
  },
  {
    icon: FaGitAlt,
    name: "Git",
    color: "from-orange-500 to-red-600",
    category: "DevOps",
    proficiency: 88,
  },
  {
    icon: FaGithub,
    name: "GitHub",
    color: "from-gray-700 to-black",
    category: "DevOps",
    proficiency: 90,
  },
];

const categories = ["Frontend", "Backend", "Mobile", "Database", "DevOps"];

const floatingVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const MiscSkills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 lg:py-32 overflow-hidden px-4 md:px-8 bg-gradient-to-br from-zinc-950 via-transparent to-purple-950/10"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-cyan-600/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-20"
        >
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <motion.div
              className="flex items-center justify-center space-x-3 mb-6"
              variants={floatingVariants}
              animate="float"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span
                className={`text-sm font-semibold text-blue-400/90 tracking-widest uppercase ${poppins.className}`}
              >
                My Technical Arsenal
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            </motion.div>
            {/* <h2
              className={`${poppins.className} text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight`}
            >
              Skills & Technologies
            </h2> */}
            <h2
              className={`${poppins.className} text-3xl sm:text-5xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight`}
            >
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          {/* Enhanced Skills by Category */}
          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.15 }}
                className="space-y-8"
              >
                {/* Enhanced Category Title */}
                <div className="flex items-center space-x-6 group cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                    <h3
                      className={`text-2xl lg:text-3xl font-black text-white ${poppins.className} group-hover:bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-500`}
                    >
                      {category}
                    </h3>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-zinc-700 to-transparent group-hover:from-blue-500/50 group-hover:to-purple-500/50 transition-all duration-500" />
                  <FiChevronRight className="w-6 h-6 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-2 transition-all duration-300" />
                </div>

                {/* Enhanced Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <EnhancedSkillCard
                        key={skill.name}
                        skill={skill}
                        index={index}
                      />
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-zinc-800/40 backdrop-blur-md rounded-3xl border border-zinc-700/50 hover:border-blue-500/30 p-8 lg:p-12 transition-all duration-500">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    value: "3+",
                    label: "Years Experience",
                    color: "from-purple-400 to-pink-400",
                    icon: FiStar,
                  },
                  {
                    value: `${skills.length}+`,
                    label: "Technologies",
                    color: "from-blue-400 to-cyan-400",
                    icon: FiStar,
                  },
                  {
                    value: "15+",
                    label: "Projects Built",
                    color: "from-green-400 to-teal-400",
                    icon: FiStar,
                  },
                  {
                    value: "100%",
                    label: "Client Satisfaction",
                    color: "from-orange-400 to-red-400",
                    icon: FiStar,
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group/stat cursor-pointer"
                  >
                    <div
                      className={`text-3xl lg:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 ${poppins.className}`}
                    >
                      {stat.value}
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <stat.icon className="w-4 h-4 text-gray-400 group-hover/stat:text-blue-400 transition-colors duration-300" />
                      <div
                        className={`text-sm text-gray-400 font-medium group-hover/stat:text-white transition-colors duration-300 ${inter.className}`}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Individual Skill Card Component
const EnhancedSkillCard = ({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) => {
  const IconComponent = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.1,
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      className="group relative bg-zinc-800/40 backdrop-blur-md rounded-2xl border border-zinc-700/50 hover:border-blue-500/50 p-6 cursor-pointer overflow-hidden transition-all duration-500"
    >
      {/* Animated Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-15 rounded-2xl transition-opacity duration-500`}
      />

      {/* Hover Glow Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity duration-500`}
      />

      {/* Animated Border */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      >
        <div className="absolute inset-[1px] rounded-2xl bg-zinc-900" />
      </div>

      {/* Skill Content */}
      <div className="relative z-10 text-center space-y-4">
        {/* Enhanced Icon */}
        <div className="flex justify-center">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500`}
          >
            <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
          </motion.div>
        </div>

        {/* Name & Proficiency */}
        <div className="space-y-3">
          <div
            className={`font-bold text-white text-sm group-hover:text-white transition-colors duration-300 ${poppins.className}`}
          >
            {skill.name}
          </div>

          {/* Proficiency Bar */}
          {skill.proficiency && (
            <div className="space-y-2">
              <div className="w-full bg-zinc-700/50 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.05 + 0.5,
                    ease: "easeOut",
                  }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400 font-medium">
                  Proficiency
                </span>
                <span className="text-xs font-bold text-white">
                  {skill.proficiency}%
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Particles on Hover */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: 0,
            }}
            whileHover={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              transition: {
                duration: 1.5,
                delay: i * 0.3,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

// "use client";

// import { motion } from "framer-motion";
// import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
// import {
//   SiTypescript,
//   SiNextdotjs,
//   SiExpress,
//   SiFlutter,
//   SiKotlin,
//   SiKubernetes,
//   SiDart,
//   SiNestjs,
//   SiFastapi,
//   SiJavascript,
// } from "react-icons/si";
// import {
//   FaAws,
//   FaDocker,
//   FaGitAlt,
//   FaGithub,
//   FaJava,
//   FaNodeJs,
//   FaPython,
//   FaReact,
// } from "react-icons/fa";
// import { DiMongodb, DiRedis } from "react-icons/di";
// import { RiTailwindCssLine } from "react-icons/ri";
// import { BiLogoPostgresql } from "react-icons/bi";
// import { IoLogoJavascript } from "react-icons/io";
// import { TbBrandReactNative, TbSql } from "react-icons/tb";
// // import { poppins } from "@/lib/fonts";

// const poppins = Poppins({
//   weight: ["400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

// const inter = Inter({
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
// });

// const jetbrainsMono = JetBrains_Mono({
//   weight: ["400", "500", "600"],
//   subsets: ["latin"],
// });

// type Skill = {
//   icon: React.ComponentType<{ className?: string }>;
//   name: string;
//   color: string;
//   category: string;
// };

// const skills: Skill[] = [
//   // Frontend
//   {
//     icon: IoLogoJavascript,
//     name: "JavaScript",
//     color: "from-yellow-400 to-yellow-600",
//     category: "Frontend",
//   },
//   {
//     icon: SiTypescript,
//     name: "TypeScript",
//     color: "from-blue-500 to-blue-700",
//     category: "Frontend",
//   },
//   {
//     icon: FaReact,
//     name: "React",
//     color: "from-cyan-400 to-blue-500",
//     category: "Frontend",
//   },
//   {
//     icon: SiNextdotjs,
//     name: "Next.js",
//     color: "from-gray-800 to-black",
//     category: "Frontend",
//   },
//   {
//     icon: RiTailwindCssLine,
//     name: "Tailwind",
//     color: "from-cyan-400 to-teal-500",
//     category: "Frontend",
//   },

//   // Backend
//   {
//     icon: FaNodeJs,
//     name: "Node.js",
//     color: "from-green-500 to-green-700",
//     category: "Backend",
//   },
//   {
//     icon: SiExpress,
//     name: "Express",
//     color: "from-gray-600 to-gray-800",
//     category: "Backend",
//   },
//   {
//     icon: SiNestjs,
//     name: "NestJS",
//     color: "from-red-400 to-red-500",
//     category: "Backend",
//   },
//   {
//     icon: FaPython,
//     name: "Python",
//     color: "from-blue-400 to-yellow-500",
//     category: "Backend",
//   },
//   {
//     icon: SiFastapi,
//     name: "Fast API",
//     color: "from-blue-400 to-blue-500",
//     category: "Backend",
//   },
//   // { icon: FaJava, name: "Java", color: "from-red-500 to-orange-600", category: "Backend" },

//   // Mobile
//   {
//     icon: TbBrandReactNative,
//     name: "React Native",
//     color: "from-cyan-300 to-blue-500",
//     category: "Mobile",
//   },
//   {
//     icon: SiJavascript,
//     name: "JavaScript",
//     color: "from-yellow-400 to-yellow-500",
//     category: "Mobile",
//   },
//   {
//     icon: SiTypescript,
//     name: "TypeScript",
//     color: "from-blue-500 to-blue-600",
//     category: "Mobile",
//   },
//   {
//     icon: SiFlutter,
//     name: "Flutter",
//     color: "from-blue-400 to-cyan-500",
//     category: "Mobile",
//   },
//   {
//     icon: SiDart,
//     name: "Dart",
//     color: "from-blue-500 to-indigo-600",
//     category: "Mobile",
//   },
//   // {
//   //   icon: SiKotlin,
//   //   name: "Kotlin",
//   //   color: "from-purple-500 to-pink-600",
//   //   category: "Mobile",
//   // },

//   // Database
//   {
//     icon: DiMongodb,
//     name: "MongoDB",
//     color: "from-green-600 to-green-800",
//     category: "Database",
//   },
//   {
//     icon: BiLogoPostgresql,
//     name: "PostgreSQL",
//     color: "from-blue-600 to-indigo-700",
//     category: "Database",
//   },
//   {
//     icon: DiRedis,
//     name: "Redis",
//     color: "from-red-500 to-red-700",
//     category: "Database",
//   },
//   {
//     icon: TbSql,
//     name: "SQL",
//     color: "from-gray-500 to-gray-700",
//     category: "Database",
//   },

//   // DevOps & Tools
//   {
//     icon: FaAws,
//     name: "AWS",
//     color: "from-orange-400 to-yellow-500",
//     category: "DevOps",
//   },
//   {
//     icon: FaDocker,
//     name: "Docker",
//     color: "from-blue-400 to-blue-600",
//     category: "DevOps",
//   },
//   {
//     icon: SiKubernetes,
//     name: "Kubernetes",
//     color: "from-blue-600 to-purple-600",
//     category: "DevOps",
//   },
//   {
//     icon: FaGitAlt,
//     name: "Git",
//     color: "from-orange-500 to-red-600",
//     category: "DevOps",
//   },
//   {
//     icon: FaGithub,
//     name: "GitHub",
//     color: "from-gray-700 to-black",
//     category: "DevOps",
//   },
// ];

// const categories = ["Frontend", "Backend", "Mobile", "Database", "DevOps"];

// type Props = {
//   directionLeft?: boolean;
// };

// export const MiscSkills = ({ directionLeft }: Props) => {
//   return (
//     <section
//       id="skills"
//       className="relative py-20 overflow-hidden px-4 md:px-8"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8 }}
//           className="space-y-16"
//         >
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center space-y-4"
//           >
//             <div className="flex items-center justify-center space-x-2 mb-4">
//               <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-pink-500" />
//               <span
//                 className={`text-sm font-medium text-purple-400 tracking-wider uppercase ${jetbrainsMono.className}`}
//               >
//                 Tech Stack Which I Use
//               </span>
//               <div className="w-8 h-px bg-gradient-to-r from-pink-500 to-purple-500" />
//             </div>
//             <h2
//               className={` ${poppins.className} text-4xl pb-2 lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent ${inter.className}`}
//             >
//               Skills & Technologies
//             </h2>
//           </motion.div>

//           {/* Skills by Category */}
//           <div className="space-y-12">
//             {categories.map((category, categoryIndex) => (
//               <motion.div
//                 key={category}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
//                 className="space-y-6"
//               >
//                 {/* Category Title */}
//                 <div className="flex items-center space-x-4">
//                   <h3
//                     className={`text-xl font-semibold text-white ${inter.className}`}
//                   >
//                     {category}
//                   </h3>
//                   <div className="flex-1 h-px bg-gradient-to-r from-zinc-700 to-transparent" />
//                 </div>

//                 {/* Skills Grid */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//                   {skills
//                     .filter((skill) => skill.category === category)
//                     .map((skill, index) => (
//                       <SkillCard key={skill.name} skill={skill} index={index} />
//                     ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Skills Summary */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="text-center bg-zinc-800/30 backdrop-blur-sm rounded-2xl border border-zinc-700/30 p-8"
//           >
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               <div className="text-center">
//                 <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                   3+
//                 </div>
//                 <div className="text-sm text-gray-400">Years Experience</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//                   {skills.length}+
//                 </div>
//                 <div className="text-sm text-gray-400">Technologies</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
//                   15+
//                 </div>
//                 <div className="text-sm text-gray-400">Projects Built</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
//                   100%
//                 </div>
//                 <div className="text-sm text-gray-400">Client Satisfaction</div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // Individual Skill Card Component
// const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
//   const IconComponent = skill.icon;

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.4, delay: index * 0.05 }}
//       whileHover={{
//         scale: 1.05,
//         y: -5,
//         transition: { duration: 0.2 },
//       }}
//       className="group relative bg-zinc-800/40 backdrop-blur-sm rounded-xl border border-zinc-700/30 hover:border-purple-500/30 p-6 cursor-pointer overflow-hidden transition-all duration-300"
//     >
//       {/* Gradient Background on Hover */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}
//       />

//       {/* Skill Content */}
//       <div className="relative z-10 text-center space-y-3">
//         {/* Icon */}
//         <div className="flex justify-center">
//           <div
//             className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform duration-300`}
//           >
//             <IconComponent className="w-8 h-8 text-white drop-shadow-lg" />
//           </div>
//         </div>

//         {/* Name */}
//         <div>
//           <div className="font-medium text-white text-sm group-hover:text-white transition-colors duration-300">
//             {skill.name}
//           </div>
//         </div>
//       </div>

//       {/* Hover Effect Border */}
//       <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-sm -z-10" />
//     </motion.div>
//   );
// };
