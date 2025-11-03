import { Skill } from "@/types/skill";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
  FaTwitter,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const EXPERIENCES = [
  {
    year: "Aug 2024 - June 2025",
    role: "Associate Software Engineer",
    company: "NineHertz",
    companyLink: "https://theninehertz.com/",
    description:
      "I am currently working at NineHertz as Associate Software Enginner mainly work on backend and mobile application to build, maintain and optimize them.",
    technologies: [
      "React Native",
      "Next.js",
      "Node.js",
      "Express.js",
      "AWS",
      "TypeScript",
      "Firebase",
      "PostgreSQL",
      "Artificial Intelligence",
      "Python",
    ],
  },
  {
    year: "Sep 2022 - Aug 2024",
    role: "Software Engineer",
    company: "Tempospace",
    companyLink: "https://web.tempospace.co/",
    description:
      "I was working as a sofware engineer at tempospace and my main work was to work on their rest api and backend architecture to maintain it and optimize it",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "AWS",
      "TypeScript",
    ],
  },
  {
    year: "July 2022 - Sep 2022",
    role: "Software Dev Intern",
    company: "E2V - Employment Express Verband",
    companyLink: "http://employmentexpress.net/",
    description:
      "I was working as a sofware dev intern at E2V on their online app where they sell their courses and manage students and all their coupon codes there.",
    technologies: ["Node.js", "Express.js", "AWS", "TypeScript"],
  },
  {
    year: "Jun 2022 - July 2022",
    role: "Mobile App Dev Intern",
    company: "Om Logistics Ltd.",
    companyLink: "https://omlogistics.co.in/",
    description:
      "Developed a visitor management app for the OM Logistics internship using Flutter. Streamlined visitor registration and enhanced security measures. ",
    technologies: ["Flutter", "Dart", "Node.js", "TypeScript", "AWS"],
  },
  {
    year: "Jun 2019 - August 2023",
    role: "B.Tech in Computer Science",
    company: "B K Birla Institute of Engineering & Technology",
    companyLink: "https://bkbiet.ac.in/",
    description:
      "During my college journey, I developed a strong foundation in computer science fundamentals while actively learning and practicing various programming languages and technologies. Gained hands-on experience in Java, Node.js, Express, Kotlin, Flutter, and Next.js through academic projects and self-directed learning.",
    technologies: [
      "Java",
      "Node.js",
      "Express",
      "Kotlin",
      "Flutter",
      "Next.js",
      "JavaScript",
      "TypeScript",
    ],
  },
];

// export const PROJECTS = [
//   {
//     id: "proj_01",
//     title: "Pulse: Event Management Platform",
//     image:
//       "https://cdn.dribbble.com/userupload/15504937/file/original-b951ae1c5ce45932ac0f62ec2d672208.png?resize=1504x1128&vertical=center",
//     link: "https://merchandise-store-7qciq13ic-gitaman8481s-projects.vercel.app/store",
//     code: "",
//     description:
//       "Led the development of a full-stack event management platform enabling users to discover, book, and manage event tickets. Implemented secure payment processing and real-time seat availability.",
//     technologies: [
//       "Next.js",
//       "Tailwind CSS",
//       "React",
//       "Node.js",
//       "PostgreSQL",
//       "Stripe",
//       "SendGrid",
//     ],
//     duration: "6 months",
//     role: "Full Stack Developer & Team Lead",
//     achievements: [
//       "Architected scalable booking system handling 10k+ concurrent users",
//       "Integrated secure payment processing reducing failed transactions by 30%",
//       "Mentored 3 junior developers in agile development practices",
//     ],
//   },
//   {
//     id: "proj_02",
//     title: "Eden: Personal Productivity OS",
//     image:
//       "https://cdn.dribbble.com/userupload/14316123/file/original-7e466c32372a1ab5da51234b3e9f9e98.png?resize=2048x1536&vertical=center",
//     link: "",
//     code: "",
//     description:
//       "Architected a personal operating system that unifies task management, learning, and community features into a single cohesive platform. Provides users with a centralized hub for productivity and knowledge sharing.",
//     technologies: [
//       "Next.js",
//       "Tailwind CSS",
//       "PostgreSQL",
//       "Supabase",
//       "Prisma",
//       "Zustand",
//       "Stripe",
//     ],
//     duration: "6 months",
//     role: "Associate Software Engineer & Technical Lead",
//     achievements: [
//       "Directed team through high-pressure launch, delivering 2 weeks ahead of schedule",
//       "Designed unified dashboard integrating multiple productivity modules",
//       "Built scalable community features supporting 5k+ concurrent users",
//       "Implemented adaptive UI that personalizes based on user workflow",
//     ],
//   },
//   {
//     id: "proj_03",
//     title: "SnapCart: E-Commerce Platform",
//     image: "/images/jpg/ecommerce.jpg",
//     link: "https://merchandise-store-7qciq13ic-gitaman8481s-projects.vercel.app/store",
//     code: "",
//     description:
//       "A fully functional e-commerce platform with features like product listing, shopping cart, and user authentication.",
//     technologies: [
//       "Next.js",
//       "Tailwind",
//       "React",
//       "TypeScript",
//       "Node.js",
//       "PostgreSQL",
//       "Stripe",
//       "SendGrid",
//     ],
//     duration: "6 months",
//   },
//   {
//     id: "proj_04",
//     title: "Coursewave: Learning Platform",
//     image: "/images/png/lms.png",
//     link: "https://www.coursewave.in",
//     code: "",
//     description:
//       "A learning platform with features such as intructor dashboard, community articles, sessions, user dashboard, community chat.",
//     technologies: [
//       "Next.js",
//       "Taiwlind",
//       "PostgreSQL",
//       "Supabase",
//       "Prisma",
//       "Zustand",
//       "Stripe",
//       "TypeScript",
//     ],
//     duration: "6 months",
//   },
//   {
//     id: "proj_05",
//     title: "Foodio: Food Ordering Platform",
//     image: "https://cdn.dribbble.com/userupload/9093003/file/original-fee1a2c945a901f2e85a4b4bfb67eb35.png?resize=2048x1545&vertical=center",
//     link: "https://www.coursewave.in",
//     code: "",
//     description:
//       "A learning platform with features such as intructor dashboard, community articles, sessions, user dashboard, community chat.",
//     technologies: [
//       "Next.js",
//       "Taiwlind",
//       "PostgreSQL",
//       "Supabase",
//       "Prisma",
//       "Zustand",
//       "Stripe",
//     ],
//     duration: "6 months",
//   },
//   {
//     id: "proj_06",
//     title: "Weatherly: Weather Platform",
//     image: "https://cdn.dribbble.com/userupload/22504079/file/still-c9363e288b7820ed12a91f82e032d5f6.gif?format=webp&resize=400x300&vertical=center",
//     link: "https://www.coursewave.in",
//     code: "",
//     description:
//       "A learning platform with features such as intructor dashboard, community articles, sessions, user dashboard, community chat.",
//     technologies: ["React.js", "Taiwlind", "Weather API"],
//     duration: "6 months",
//   },
//   {
//     id: "proj_07",
//     title: "Twodays: Explore chat and locate",
//     image: "/images/webp/twodays.webp",
//     link: "https://play.google.com/store/apps/details?id=ttyl.app&hl=en_US&pli=1",
//     code: "",
//     description:
//       "This is an app that we created to help people reconnect on the phone in the present and future. With this app, you are able to save voice and texts from loved ones.The quicker you download the app and start recording memories, the more realistic the conversations will be.",
//     technologies: [
//       "Flutter",
//       "Dart",
//       "BLoc",
//       "Google Maps",
//       "Firebase",
//       "HTTP",
//       "iOS",
//     ],
//     duration: "6 months",
//   },
//   {
//     id: "proj_08",
//     title: "NOW: Notes of Worship",
//     image:
//       "https://play-lh.googleusercontent.com/WB5VcX-NlcknIHtydYN0ENOk_tsSTPBfwxBoXZgLW5K-FMdIdGvln1RfvY6TILLQa7C0=w5120-h2880-rw",
//     link: "https://play.google.com/store/apps/details?id=com.notesofworship.app&hl=en_IN",
//     code: "",
//     description:
//       "This is an app that we created to help people reconnect on the phone in the present and future. With this app, you are able to save voice and texts from loved ones.The quicker you download the app and start recording memories, the more realistic the conversations will be.",
//     technologies: ["Flutter", "Dart", "BLoc", "Firebase", "HTTP", "iOS"],
//     duration: "6 months",
//   },
//   {
//     id: "proj_09",
//     title: "TTYL: Talk To You Later",
//     image:
//       "https://play-lh.googleusercontent.com/aDCXowFQkEeIO-yo1wX0pu4HMxnpnFEY2WLRwytLXvddb2Chq1khNreYT_f3dMIHjNE=w5120-h2880-rw",
//     link: "https://play.google.com/store/apps/details?id=ttyl.app&hl=en_US&pli=1",
//     code: "",
//     description:
//       "This is an app that we created to help people reconnect on the phone in the present and future. With this app, you are able to save voice and texts from loved ones.The quicker you download the app and start recording memories, the more realistic the conversations will be.",
//     technologies: ["Flutter", "Dart", "Provider", "Firebase", "Talk.to"],
//     duration: "6 months",
//   },
//   {
//     id: "proj_10",
//     title: "LuxeTick",
//     image: "/images/png/watch2.png",
//     link: "https://amangit1314.github.io/watches_web/",
//     code: "",
//     description:
//       "An exclusive online platform dedicated to luxury timepieces. Catering to discerning watch enthusiasts and collectors. Key Features: Curated luxury collection, Exclusive Auctions, Virtual try-on, Watch Customization, Collector's Hub, Expert Reviews & Articles.",
//     technologies: [
//       "Next.js",
//       "Tailwind",
//       "TypeScript",
//       "SendGrid",
//       "Sanity",
//       "Framer",
//     ],
//     duration: "6 months",
//   },
//   {
//     id: "proj_11",
//     title: "Convo: Chat application",
//     image: "/images/webp/convo.webp",
//     link: "https://play.google.com/store/apps/details?id=ttyl.app&hl=en_US&pli=1",
//     code: "",
//     description:
//       "This is an app that we created to help people reconnect on the phone in the present and future. With this app, you are able to save voice and texts from loved ones.The quicker you download the app and start recording memories, the more realistic the conversations will be.",
//     technologies: ["Flutter", "Dart", "BLoc", "Firebase", "HTTP", "iOS"],
//     duration: "6 months",
//   },
//   {
//     id: "proj_12",
//     title: "BeyongStudy: Online Education Platform App",
//     image: "https://cdn.dribbble.com/userupload/34260017/file/original-8ea32b687943b174d3495ec627cdbe25.jpg?resize=2048x1536&vertical=center",
//     link: "https://github.com/amangit1314/Ecommerce-App",
//     code: "",
//     description:
//       "A store ecommerce app for individual small product manfucatureres or an individual store to sell there products, here user can do all stuff like he does in any ecommerce app.",
//     technologies: ["Flutter", "Dart", "Provider", "Firebase", "Talk.to"],
//     duration: "6 months",
//   },
//   {
//     id: "proj_13",
//     title: "MyMentor: Online Mentorship Platform",
//     image: "/images/webp/mymentor.webp",
//     link: "https://play.google.com/store/apps/details?id=ttyl.app&hl=en_US&pli=1",
//     code: "",
//     description:
//       "This is an app that we created to help people reconnect on the phone in the present and future. With this app, you are able to save voice and texts from loved ones.The quicker you download the app and start recording memories, the more realistic the conversations will be.",
//     technologies: ["Flutter", "Dart", "Provider", "Firebase", "HTTP"],
//     duration: "6 months",
//   },
//   {
//     id: "proj_14",
//     title: "Fizzle: Social Media Platform",
//     image:
//       "https://cdn.dribbble.com/userupload/42913740/file/original-8ee96831638637868b5e77245b2c9da6.png?resize=2048x1536&vertical=center",
//     link: "https://play.google.com/store/apps/details?id=ttyl.app&hl=en_US&pli=1",
//     code: "",
//     description:
//       "This is an app that we created to help people reconnect on the phone in the present and future. With this app, you are able to save voice and texts from loved ones.The quicker you download the app and start recording memories, the more realistic the conversations will be.",
//     technologies: ["Flutter", "Dart", "Provider", "Firebase", "HTTP"],
//     duration: "6 months",
//   },
//   {
//     id: "proj_15",
//     title: "SnapCart: E-Commerce App",
//     image: "/images/webp/ecomm-app.webp",
//     link: "https://github.com/amangit1314/Ecommerce-App",
//     code: "",
//     description:
//       "A store ecommerce app for individual small product manfucatureres or an individual store to sell there products, here user can do all stuff like he does in any ecommerce app.",
//     technologies: ["Flutter", "Dart", "Provider", "Firebase", "Talk.to"],
//     duration: "6 months",
//   },
//   {
//     id: "proj_16",
//     title: "MovieMania: Movies Catelog & Ticket Booking App",
//     image:
//       "https://cdn.dribbble.com/userupload/11185902/file/original-51f34adbee9502fa3dcd385a3f6e3b2b.png?resize=2048x1547&vertical=center",
//     link: "https://play.google.com/store/apps/details?id=ttyl.app&hl=en_US&pli=1",
//     code: "",
//     description:
//       "This is an app that we created to help people reconnect on the phone in the present and future. With this app, you are able to save voice and texts from loved ones.The quicker you download the app and start recording memories, the more realistic the conversations will be.",
//     technologies: ["Flutter", "Dart", "Provider", "Firebase", "HTTP"],
//     duration: "6 months",
//   },
//   {
//     id: "proj_17",
//     title: "ReadTogether: Collaborative Reading Platform",
//     image:
//       "https://cdn.dribbble.com/userupload/15652963/file/original-57e2e4a32dd8508cc79aac7f398f500d.png?resize=1200x900&vertical=center",
//     link: "",
//     code: "",
//     description:
//       "This is an app that we created to help people reconnect on the phone in the present and future. With this app, you are able to save voice and texts from loved ones.The quicker you download the app and start recording memories, the more realistic the conversations will be.",
//     technologies: ["Flutter", "Dart", "Provider", "Firebase", "HTTP"],
//     duration: "6 months",
//   },
// ];

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

export const PROJECTS = [
  {
    id: "proj_01",
    title: "Pulse: Event Management Platform",
    image:
      "https://cdn.dribbble.com/userupload/15504937/file/original-b951ae1c5ce45932ac0f62ec2d672208.png?resize=1504x1128&vertical=center",
    link: "",
    code: "https://github.com/amangit1314/Pulse",
    description:
      "Led the development of a full-stack event management platform enabling users to discover, book, and manage event tickets. Implemented secure payment processing and real-time seat availability.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "SendGrid",
    ],
    duration: "6 months",
    role: "Full Stack Developer & Team Lead",
    achievements: [
      "Architected scalable booking system handling 10k+ concurrent users",
      "Integrated secure payment processing reducing failed transactions by 30%",
      "Mentored 3 junior developers in agile development practices",
    ],
  },
  // {
  //   id: "proj_02",
  //   title: "Eden: Personal Productivity OS",
  //   image:
  //     "https://cdn.dribbble.com/userupload/14316123/file/original-7e466c32372a1ab5da51234b3e9f9e98.png?resize=2048x1536&vertical=center",
  //   link: "",
  //   code: "",
  //   description:
  //     "Architected a personal operating system that unifies task management, learning, and community features into a single cohesive platform. Provides users with a centralized hub for productivity and knowledge sharing.",
  //   technologies: [
  //     "Next.js",
  //     "Tailwind CSS",
  //     "PostgreSQL",
  //     "Supabase",
  //     "Prisma",
  //     "Zustand",
  //     "Stripe",
  //   ],
  //   duration: "6 months",
  //   role: "Associate Software Engineer & Technical Lead",
  //   achievements: [
  //     "Directed team through high-pressure launch, delivering 2 weeks ahead of schedule",
  //     "Designed unified dashboard integrating multiple productivity modules",
  //     "Built scalable community features supporting 5k+ concurrent users",
  //     "Implemented adaptive UI that personalizes based on user workflow",
  //   ],
  // },
  {
    id: "proj_03",
    title: "SnapCart: E-Commerce Platform",
    image: "/images/jpg/ecommerce.jpg",
    link: "https://snapcart-zeta.vercel.app/",
    code: "",
    description:
      "Engineered a high-performance e-commerce platform featuring advanced product catalog, shopping cart functionality, and seamless user authentication. Optimized for conversion and user experience.",
    technologies: [
      "Next.js",
      "Tailwind",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "SendGrid",
    ],
    duration: "6 months",
    role: "Full Stack Developer",
    achievements: [
      "Built responsive product catalog with advanced filtering and search",
      "Implemented secure checkout flow reducing cart abandonment by 25%",
      "Optimized page load times achieving 95+ Lighthouse performance score",
    ],
  },
  {
    id: "proj_04",
    title: "Coursewave: Learning Platform",
    image: "/images/png/lms.png",
    // link: "https://www.coursewave.in",
    link: "https://coursewave-git-frontend-v-011-gitaman8481s-projects.vercel.app/",
    code: "",
    description:
      "Developed a comprehensive learning management system with instructor dashboards, interactive sessions, and community features. Enabled seamless knowledge sharing and student engagement.",
    technologies: [
      "Next.js",
      "Tailwind",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "Zustand",
      "Stripe",
      "TypeScript",
    ],
    duration: "6 months",
    role: "Full Stack Developer",
    achievements: [
      "Created real-time session management supporting 2k+ concurrent students",
      "Integrated community chat features increasing user engagement by 40%",
      "Built analytics dashboard providing insights on student progress",
    ],
  },
  // {
  //   id: "proj_05",
  //   title: "Foodio: Food Ordering Platform",
  //   image:
  //     "https://cdn.dribbble.com/userupload/9093003/file/original-fee1a2c945a901f2e85a4b4bfb67eb35.png?resize=2048x1545&vertical=center",
  //   link: "",
  //   code: "", /// todo: add link to code
  //   description:
  //     "Built a modern food delivery platform with real-time order tracking, restaurant management, and seamless payment integration. Enhanced user experience with intuitive interface and fast delivery tracking.",
  //   technologies: [
  //     "Next.js",
  //     "Tailwind",
  //     "PostgreSQL",
  //     "Supabase",
  //     "Prisma",
  //     "Zustand",
  //     "Stripe",
  //   ],
  //   duration: "6 months",
  //   role: "Full Stack Developer",
  //   achievements: [
  //     "Implemented real-time order tracking reducing customer support queries by 60%",
  //     "Optimized restaurant dashboard improving order processing time by 35%",
  //     "Integrated GPS tracking for accurate delivery time predictions",
  //   ],
  // },
  {
    id: "proj_06",
    title: "Weatherly: Weather Platform",
    image:
      "https://cdn.dribbble.com/userupload/22504079/file/still-c9363e288b7820ed12a91f82e032d5f6.gif?format=webp&resize=400x300&vertical=center",
    link: "https://weather-app-challange.vercel.app/",
    code: "https://github.com/amangit1314/weather-app-challange/tree/master",
    description:
      "Developed a responsive weather application with accurate forecasting, location-based services, and interactive data visualization. Provided users with comprehensive weather insights and alerts.",
    technologies: ["React.js", "Tailwind", "Weather API"],
    duration: "6 months",
    role: "Frontend Developer",
    achievements: [
      "Built responsive design working seamlessly across all device sizes",
      "Implemented caching strategy reducing API calls by 70%",
      "Created interactive weather maps with real-time data visualization",
    ],
  },
  {
    id: "proj_07",
    title: "Twodays: Explore chat and locate",
    image: "/images/webp/twodays.webp",
    link: "https://play.google.com/store/apps/details?id=ttyl.app&hl=en_US&pli=1",
    code: "",
    description:
      "Created a location-based social discovery app enabling users to connect with people nearby. Integrated real-time chat, location sharing, and community features for meaningful interactions.",
    // technologies: [
    //   "Flutter",
    //   "Dart",
    //   "BLoc",
    //   "Google Maps",
    //   "Firebase",
    //   "HTTP",
    //   "iOS",
    // ],
    technologies: [
      "React Native",
      "TypeScript",
      "expo",
      "Zustand",
      "Google Maps",
      "Firebase",
      "Axios",
      "XCode",
      "iOS",
    ],
    duration: "6 months",
    role: "Mobile Developer",
    achievements: [
      "Implemented real-time location sharing with 50m accuracy",
      "Built secure chat system handling 10k+ daily messages",
      "Optimized app performance achieving 60 FPS on low-end devices",
    ],
  },
  {
    id: "proj_08",
    title: "NOW: Notes of Worship",
    image:
      "https://play-lh.googleusercontent.com/WB5VcX-NlcknIHtydYN0ENOk_tsSTPBfwxBoXZgLW5K-FMdIdGvln1RfvY6TILLQa7C0=w5120-h2880-rw",
    link: "https://play.google.com/store/apps/details?id=com.notesofworship.app&hl=en_IN",
    code: "",
    description:
      "Developed a spiritual companion app for worship notes, prayer tracking, and religious content management. Provided users with organized space for their spiritual journey and reflections.",
    // technologies: ["Flutter", "Dart", "BLoc", "Firebase", "HTTP", "iOS"],
    technologies: [
      "React Native",
      "TypeScript",
      "expo",
      "Zustand",
      "Open Ai API",
      "Firebase",
      "Axios",
      "XCode",
      "iOS",
    ],
    duration: "6 months",
    role: "Mobile Developer",
    achievements: [
      "Created offline-first design allowing access without internet connection",
      "Implemented secure cloud sync for cross-device note accessibility",
      "Built customizable prayer tracking with reminder system",
    ],
  },
  {
    id: "proj_09",
    title: "TTYL: Talk To You Later",
    image:
      "https://play-lh.googleusercontent.com/aDCXowFQkEeIO-yo1wX0pu4HMxnpnFEY2WLRwytLXvddb2Chq1khNreYT_f3dMIHjNE=w5120-h2880-rw",
    link: "https://play.google.com/store/apps/details?id=ttyl.app&hl=en_US&pli=1",
    code: "",
    description:
      "Built a unique messaging app for scheduling messages and preserving conversations. Enabled users to send time-delayed messages and create digital memory capsules.",
    // technologies: ["Flutter", "Dart", "Provider", "Firebase", "Talk.to"],
    technologies: [
      "React Native",
      "TypeScript",
      "expo",
      "Zustand",
      "Agora SDK",
      "Open Ai API",
      "Elevenlabs API",
      "Firebase",
      "Axios",
      "XCode",
      "iOS",
    ],
    duration: "6 months",
    role: "Mobile Developer",
    achievements: [
      "Implemented scheduled messaging system with 99.9% delivery accuracy",
      "Built memory capsule feature with encrypted cloud storage",
      "Created intuitive UI reducing user onboarding time by 50%",
    ],
  },
  // {
  //   id: "proj_10",
  //   title: "LuxeTick",
  //   image: "/images/png/watch2.png",
  //   link: "",
  //   code: "https://amangit1314.github.io/watches_web/",
  //   description:
  //     "Designed and developed a luxury watch e-commerce platform with virtual try-on, exclusive auctions, and collector community features. Catered to discerning watch enthusiasts with premium experience.",
  //   technologies: [
  //     "Next.js",
  //     "Tailwind",
  //     "TypeScript",
  //     "SendGrid",
  //     "Sanity",
  //     "Framer",
  //   ],
  //   duration: "6 months",
  //   role: "Frontend Developer & Designer",
  //   achievements: [
  //     "Implemented virtual try-on feature increasing conversion by 45%",
  //     "Built exclusive auction system for rare timepieces",
  //     "Created collector community hub fostering user engagement",
  //   ],
  // },
  {
    id: "proj_11",
    title: "Convo: Chat application",
    image: "/images/webp/convo.webp",
    link: "",
    code: "https://github.com/amangit1314/convo_chat",
    description:
      "Engineered a real-time chat application with advanced messaging features, group chats, and media sharing. Focused on performance and user privacy with end-to-end encryption.",
    // technologies: ["Flutter", "Dart", "BLoc", "Firebase", "HTTP", "iOS"],
    technologies: [
      "React Native",
      "TypeScript",
      "expo",
      "Zustand",
      "Web Sockets",
      "Firebase",
      "Axios",
      "XCode",
      "iOS",
    ],
    duration: "6 months",
    role: "Mobile Developer",
    achievements: [
      "Built real-time messaging with sub-second delivery times",
      "Implemented end-to-end encryption for user privacy",
      "Created media compression reducing storage usage by 60%",
    ],
  },
  // {
  //   id: "proj_12",
  //   title: "BeyongStudy: Online Education Platform App",
  //   image:
  //     "https://cdn.dribbble.com/userupload/11448702/file/original-716536553cb53d45c7b78048355bccd9.png?resize=2048x1536&vertical=center",
  //   link: "",
  //   code: "https://github.com/amangit1314/beyond_study",
  //   description:
  //     "Developed a comprehensive educational app with course management, progress tracking, and interactive learning features. Enabled students to access quality education on mobile devices.",
  //   technologies: ["JavaScript", "React Native", "Redux", "Firebase"],
  //   duration: "6 months",
  //   role: "Mobile Developer",
  //   achievements: [
  //     "Built offline video playback for uninterrupted learning",
  //     "Implemented progress tracking with detailed analytics",
  //     "Created interactive quizzes with instant feedback system",
  //   ],
  // },
  // {
  //   id: "proj_13",
  //   title: "Eduverse: Online Mentorship Platform",
  //   image: "/images/webp/mymentor.webp",
  //   link: "",
  //   code: "https://github.com/amangit1314/beyond_study",
  //   description:
  //     "Created a mentorship platform connecting students with industry experts. Facilitated knowledge sharing through scheduled sessions, progress tracking, and resource sharing.",
  //   technologies: ["Flutter", "Dart", "Provider", "Firebase", "HTTP"],
  //   duration: "6 months",
  //   role: "Mobile Developer",
  //   achievements: [
  //     "Built session scheduling system with calendar integration",
  //     "Implemented video calling feature for remote mentorship",
  //     "Created progress tracking dashboard for both mentors and mentees",
  //   ],
  // },
  {
    id: "proj_14",
    title: "Fizzle: Social Media Platform",
    image:
      "https://cdn.dribbble.com/userupload/42913740/file/original-8ee96831638637868b5e77245b2c9da6.png?resize=2048x1536&vertical=center",
    link: "",
    code: "https://github.com/amangit1314/fizzle",
    description:
      "Developed a modern social media platform with content sharing, community building, and interactive features. Focused on creating engaging user experiences with smooth performance.",
    technologies: ["Flutter", "Dart", "Provider", "Firebase", "HTTP"],
    // technologies: [
    //   "React Native",
    //   "TypeScript",
    //   "expo",
    //   "Zustand",
    //   "Google Maps",
    //   "Firebase",
    //   "Axios",
    //   "XCode",
    //   "iOS",
    // ],
    duration: "6 months",
    role: "Mobile Developer",
    achievements: [
      "Built infinite scroll feed handling 10k+ posts efficiently",
      "Implemented real-time notifications for user engagement",
      "Created content moderation system reducing spam by 80%",
    ],
  },
  {
    id: "proj_15",
    title: "SnapCart: E-Commerce App",
    image: "/images/webp/ecomm-app.webp",
    link: "",
    code: "https://github.com/amangit1314/Ecommerce-App",
    description:
      "Engineered a mobile e-commerce application with seamless shopping experience, secure payments, and order management. Optimized for performance and user convenience on mobile devices.",
    technologies: ["Flutter", "Dart", "Provider", "Firebase", "Talk.to"],
    duration: "6 months",
    role: "Mobile Developer",
    achievements: [
      "Built responsive UI working flawlessly on 50+ device configurations",
      "Implemented push notifications increasing user retention by 35%",
      "Created order tracking system with real-time updates",
    ],
  },
  // {
  //   id: "proj_16",
  //   title: "Cue: Movies Catalog & Ticket Booking App",
  //   image:
  //     "https://cdn.dribbble.com/userupload/11185902/file/original-51f34adbee9502fa3dcd385a3f6e3b2b.png?resize=2048x1547&vertical=center",
  //   link: "https://github.com/amangit1314/Cue",
  //   code: "https://github.com/amangit1314/Cue",
  //   description:
  //     "Developed a comprehensive movie discovery and ticket booking platform with showtimes, seat selection, and theater information. Enhanced movie-going experience with seamless booking process.",
  //   technologies: ["Flutter", "Dart", "Provider", "Firebase", "HTTP"],
  //   duration: "6 months",
  //   role: "Mobile Developer",
  //   achievements: [
  //     "Built real-time seat availability with instant updates",
  //     "Integrated multiple payment gateways for flexible booking",
  //     "Created personalized recommendations increasing bookings by 40%",
  //   ],
  // },
  // {
  //   id: "proj_17",
  //   title: "Biblio: Collaborative Reading Platform",
  //   image:
  //     "https://cdn.dribbble.com/userupload/15652963/file/original-57e2e4a32dd8508cc79aac7f398f500d.png?resize=1200x900&vertical=center",
  //   link: "",
  //   code: "https://github.com/amangit1314/Biblio",
  //   description:
  //     "Created a collaborative reading platform enabling book clubs and reading communities to share insights, annotations, and discussions. Fostered interactive reading experiences among users.",
  //   technologies: ["Flutter", "Dart", "Provider", "Firebase", "HTTP"],
  //   duration: "6 months",
  //   role: "Mobile Developer",
  //   achievements: [
  //     "Built collaborative annotation system for group reading",
  //     "Implemented reading progress sync across multiple devices",
  //     "Created discussion forums increasing user engagement by 65%",
  //   ],
  // },
];

export const TESTIMONIALS = [
  {
    personImg:
      "https://media.licdn.com/dms/image/v2/C5103AQGekfjL9BovwQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1578411580815?e=2147483647&v=beta&t=XBcnv3GUKiGfcphOXUvxoptLG7T4k9i_ht9W7X9HBWs",
    personName: "Rahul Kumawat",
    personRole: "Co-Founder & Engineering Head, NineHertz",
    comment:
      "Proactive Software Engineer who provides decisive leadership during critical project phases. Skilled at managing pressure, aligning team efforts, and ensuring stability to drive projects over the finish line.",
  },
  {
    personImg:
      "data:image/jpeg;base64,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",
    personName: "Rajat Dabral",
    personRole: "Co-Founder & CTO, Tempo",
    comment:
      "He is a fantastic collaborator who consistently gives his best and develops innovative solutions to challenges. A natural leader, he excels at guiding diverse teams and leveraging individual strengths to achieve outstanding results.",
  },
  {
    personImg:
      "https://media.licdn.com/dms/image/D5603AQFM46BXNz2vsw/profile-displayphoto-shrink_400_400/0/1716734361694?e=1723680000&v=beta&t=CFJLf8xMkbhxotZ_382qDIMRB5d0LnpRq0Nz3Fw_r8g",
    personName: "Ankit Sharma",
    personRole: "Founder & CEO, E2V",
    comment:
      "Aman is both a skilled developer and a fantastic team player. His collaborative nature and positive attitude made him a joy to work with. I am confident he will be a valuable asset to any team he joins.",
  },
  {
    personImg:
      "data:image/jpeg;base64,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",
    personName: "Vikas Kumar Sinha",
    personRole: "Manager, Om Logistics",
    comment:
      "Aman is a generous and hardworking individual who excels at collaborating with diverse mindsets. He is a passionate leader who knows how to motivate his colleagues based on their individual strengths. I am confident that he will be a valuable asset to any team he is part of.",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aman-soni1",
    icon: <FaLinkedin className="text-xl" />,
    color: "text-indigo-400 hover:text-indigo-300",
  },
  {
    name: "GitHub",
    url: "https://github.com/amangit1314",
    icon: <FaGithub className="text-xl" />,
    color: "text-gray-400 hover:text-white",
  },
  // {
  //   name: "YouTube",
  //   url: "https://youtube.com/yourchannel",
  //   icon: <FaYoutube className="text-xl" />,
  //   color: "text-red-500 hover:text-red-400",
  // },
  {
    name: "Instagram",
    url: "https://www.instagram.com/soni.amanic",
    icon: <FaInstagram className="text-xl" />,
    color: "text-rose-400 hover:text-rose-300",
  },
  {
    name: "X",
    url: "https://x.com/Hulk131469",
    icon: <FaXTwitter className="text-xl" />,
    color: "text-sky-400 hover:text-sky-300",
  },
];

export const CONTACT = {
  address: "Rajasthan, India ",
  phoneNo: "+91 7023953453 ",
  email: "gitaman8481@example.com",
};

export const SKILLS: Skill[] = [
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
