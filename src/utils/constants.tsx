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
    personImg: "/images/webp/rahul_kumawat_9hz.webp",
    personName: "Rahul Kumawat",
    personRole: "Co-Founder & Engineering Head, NineHertz",
    comment:
      "Proactive Software Engineer who provides decisive leadership during critical project phases. Skilled at managing pressure, aligning team efforts, and ensuring stability to drive projects over the finish line.",
  },
  {
    personImg: "/images/webp/rajat_dabral.webp",
    personName: "Rajat Dabral",
    personRole: "Co-Founder & CTO, Tempo",
    comment:
      "He is a fantastic collaborator who consistently gives his best and develops innovative solutions to challenges. A natural leader, he excels at guiding diverse teams and leveraging individual strengths to achieve outstanding results.",
  },
  {
    personImg: "/images/webp/ankit_sharma_e2v.webp",
    personName: "Ankit Sharma",
    personRole: "Founder & CEO, E2V",
    comment:
      "Aman is both a skilled developer and a fantastic team player. His collaborative nature and positive attitude made him a joy to work with. I am confident he will be a valuable asset to any team he joins.",
  },
  {
    personImg: "/images/webp/vikas_kumar_sinha_om_logistics.webp",
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

// export const SKILLS: Skill[] = [
//   // Frontend
//   {
//     icon: IoLogoJavascript,
//     name: "JavaScript",
//     color: "from-yellow-400 to-yellow-600",
//     category: "Frontend",
//     proficiency: 90,
//   },
//   {
//     icon: SiTypescript,
//     name: "TypeScript",
//     color: "from-blue-500 to-blue-700",
//     category: "Frontend",
//     proficiency: 85,
//   },
//   {
//     icon: FaReact,
//     name: "React",
//     color: "from-cyan-400 to-blue-500",
//     category: "Frontend",
//     proficiency: 88,
//   },
//   {
//     icon: SiNextdotjs,
//     name: "Next.js",
//     color: "from-gray-800 to-black",
//     category: "Frontend",
//     proficiency: 82,
//   },
//   {
//     icon: RiTailwindCssLine,
//     name: "Tailwind",
//     color: "from-cyan-400 to-teal-500",
//     category: "Frontend",
//     proficiency: 92,
//   },

//   // Backend
//   {
//     icon: FaNodeJs,
//     name: "Node.js",
//     color: "from-green-500 to-green-700",
//     category: "Backend",
//     proficiency: 87,
//   },
//   {
//     icon: SiExpress,
//     name: "Express",
//     color: "from-gray-600 to-gray-800",
//     category: "Backend",
//     proficiency: 85,
//   },
//   {
//     icon: SiNestjs,
//     name: "NestJS",
//     color: "from-red-400 to-red-500",
//     category: "Backend",
//     proficiency: 78,
//   },
//   {
//     icon: FaPython,
//     name: "Python",
//     color: "from-blue-400 to-yellow-500",
//     category: "Backend",
//     proficiency: 80,
//   },
//   {
//     icon: SiFastapi,
//     name: "Fast API",
//     color: "from-blue-400 to-blue-500",
//     category: "Backend",
//     proficiency: 75,
//   },

//   // Mobile
//   {
//     icon: TbBrandReactNative,
//     name: "React Native",
//     color: "from-cyan-300 to-blue-500",
//     category: "Mobile",
//     proficiency: 83,
//   },
//   {
//     icon: SiFlutter,
//     name: "Flutter",
//     color: "from-blue-400 to-cyan-500",
//     category: "Mobile",
//     proficiency: 70,
//   },
//   {
//     icon: SiDart,
//     name: "Dart",
//     color: "from-blue-500 to-indigo-600",
//     category: "Mobile",
//     proficiency: 72,
//   },

//   // Database

//   {
//     icon: BiLogoPostgresql,
//     name: "PostgreSQL",
//     color: "from-blue-600 to-indigo-700",
//     category: "Database",
//     proficiency: 85,
//   },
//   {
//     icon: DiMongodb,
//     name: "MongoDB",
//     color: "from-green-600 to-green-800",
//     category: "Database",
//     proficiency: 80,
//   },
//   {
//     icon: DiRedis,
//     name: "Redis",
//     color: "from-red-500 to-red-700",
//     category: "Database",
//     proficiency: 78,
//   },
//   {
//     icon: TbSql,
//     name: "SQL",
//     color: "from-gray-500 to-gray-700",
//     category: "Database",
//     proficiency: 82,
//   },

//   // DevOps & Tools
//   {
//     icon: FaAws,
//     name: "AWS",
//     color: "from-orange-400 to-yellow-500",
//     category: "DevOps",
//     proficiency: 75,
//   },
//   {
//     icon: FaDocker,
//     name: "Docker",
//     color: "from-blue-400 to-blue-600",
//     category: "DevOps",
//     proficiency: 80,
//   },
//   // {
//   //   icon: SiKubernetes,
//   //   name: "Kubernetes",
//   //   color: "from-blue-600 to-purple-600",
//   //   category: "DevOps",
//   //   proficiency: 70,
//   // },
//   {
//     icon: FaGitAlt,
//     name: "Git",
//     color: "from-orange-500 to-red-600",
//     category: "DevOps",
//     proficiency: 88,
//   },
//   {
//     icon: FaGithub,
//     name: "GitHub",
//     color: "from-gray-700 to-black",
//     category: "DevOps",
//     proficiency: 90,
//   },
// ];

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
