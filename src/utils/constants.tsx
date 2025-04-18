import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const EXPERIENCES = [
  {
    year: "Aug 2024 - Present",
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
      "Typsecript",
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
      "Typsecript",
    ],
  },
  {
    year: "July 2022 - Sep 2022",
    role: "Software Dev Intern",
    company: "E2V - Employment Express Verband",
    companyLink: "http://employmentexpress.net/",
    description:
      "I was working as a sofware dev intern at E2V on their online app where they sell their courses and manage students and all their coupon codes there.",
    technologies: ["Node.js", "Express.js", "AWS", "Typsecript"],
  },
  {
    year: "Jun 2022 - July 2022",
    role: "Mobile App Dev Intern",
    company: "Om Logistics Ltd.",
    companyLink: "https://omlogistics.co.in/",
    description:
      "Developed a visitor management app for the OM Logistics internship using Flutter. Streamlined visitor registration and enhanced security measures. ",
    technologies: ["Flutter", "Dart", "Node.js", "Typsecript", "AWS"],
  },
];

export const PROJECTS = [
  {
    title: "SnapCart: E-Commerce Platform",
    image: "/images/jpg/ecommerce.jpg",
    link: "https://merchandise-store-7qciq13ic-gitaman8481s-projects.vercel.app/store",
    description:
      "A fully functional e-commerce platform with features like product listing, shopping cart, and user authentication.",
    technologies: [
      "Next.js",
      "Tailwins",
      "React",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "SendGrid",
    ],
  },
  {
    title: "Coursewave: Learning Platform",
    image: "/images/png/lms.png",
    link: "https://www.coursewave.in",
    description:
      "A learning platform with features such as intructor dashboard, community articles, sessions, user dashboard, community chat.",
    technologies: [
      "Next.js",
      "Taiwlind",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "Zustand",
      "Stripe",
    ],
  },

  {
    title: "LuxeTick",
    image: "/images/png/watch2.png",
    link: "https://amangit1314.github.io/watches_web/",
    description:
      "An exclusive online platform dedicated to luxury timepieces. Catering to discerning watch enthusiasts and collectors. Key Features: Curated luxury collection, Exclusive Auctions, Virtual try-on, Watch Customization, Collector's Hub, Expert Reviews & Articles.",
    technologies: [
      "Next.js",
      "Tailwind",
      "TypeScript",
      "SendGrid",
      "Sanity",
      "Framer",
    ],
  },
  {
    title: "SnapCart: E-Commerce App",
    image: "/images/webp/ecomm-app.webp",
    link: "https://github.com/amangit1314/Ecommerce-App",
    description:
      "A store ecommerce app for individual small product manfucatureres or an individual store to sell there products, here user can do all stuff like he does in any ecommerce app.",
    technologies: ["Flutter", "Dart", "Provider", "Firebase", "Talk.to"],
  },
];

export const TESTIMONIALS = [
  {
    personImg:
      "data:image/jpeg;base64,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",
    personName: "Rajat Dabral",
    personRole: "Co-Founder & CTO, Tempo",
    comment:
      "A amazing person to work with who give his best shot on every opportunity and brings different and inovative solutions to the problem statment. He can also lead team of different midsets and take the best out of them according to their calabour.",
  },
  {
    personImg:
      "https://media.licdn.com/dms/image/D5603AQFM46BXNz2vsw/profile-displayphoto-shrink_400_400/0/1716734361694?e=1723680000&v=beta&t=CFJLf8xMkbhxotZ_382qDIMRB5d0LnpRq0Nz3Fw_r8g",
    personName: "Ankit Sharma",
    personRole: "Founder & CEO, E2V",
    comment:
      "Aman is not just a skilled developer but also a fantastic team player. Hi's collaborative spirit and positive attitude made work with him joyfull. I'm confident that Aman will be a valuable asset to any team he join. I'm confident that Aman will be a valuable asset to any team he join.",
  },
  {
    personImg:
      "data:image/jpeg;base64,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",
    personName: "Vikas Kumar Sinha",
    personRole: "Manager, Om Logistics",
    comment:
      "A generous person who has a passion to work with different mindsets and also lead them too according to their calabour, this person is a hard working personality.  I'm confident that Aman will be a valuable asset to any team he join.",
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
  {
    name: "YouTube",
    url: "https://youtube.com/yourchannel",
    icon: <FaYoutube className="text-xl" />,
    color: "text-red-500 hover:text-red-400",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/soni.amanic",
    icon: <FaInstagram className="text-xl" />,
    color: "text-rose-400 hover:text-rose-300",
  },
  {
    name: "X",
    url: "https://x.com/Hulk131469",
    icon: <FaTwitter className="text-xl" />,
    color: "text-sky-400 hover:text-sky-300",
  },
];

export const CONTACT = {
  address: "Bihar, India ",
  phoneNo: "+91 9444444444 ",
  email: "rajababu@example.com",
};

export const SKILLS = [
  {
    imageSrc: "https://www.svgrepo.com/show/217740/android.svg",
    altText: "android",
    href: "https://developer.android.com",
  },
  {
    imageSrc:
      "https://camo.githubusercontent.com/0284811e53986767e921295dd0b7959c2dde6472f762f618268005e032b88de8/68747470733a2f2f63646e2e66726565626965737570706c792e636f6d2f6c6f676f732f6c617267652f32782f6b6f746c696e2d312d6c6f676f2d706e672d7472616e73706172656e742e706e67",
    altText: "Kotlin",
    href: "https://developer.android.com",
  },
  {
    imageSrc: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
    altText: "flutter",
    href: "https://developer.android.com",
  },
  {
    imageSrc: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
    altText: "Dart",
    href: "https://dart.dev/guides",
  },
  {
    imageSrc: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    altText: "Firebase",
    href: "https://developer.android.com",
  },
  {
    imageSrc: "https://vectorified.com/images/icon-react-native-24.png",
    altText: "React Native",
    href: "https://developer.android.com",
  },

  {
    imageSrc: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    altText: "git",
    href: "https://developer.android.com",
  },
  {
    imageSrc:
      "https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png",
    altText: "Github",
    href: "https://developer.android.com",
  },
  {
    imageSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    altText: "Java",
    href: "https://developer.android.com",
  },
  {
    imageSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    altText: "HTML",
    href: "https://developer.android.com",
  },
  {
    imageSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    altText: "CSS",
    href: "https://developer.android.com",
  },
  {
    imageSrc: "https://www.scottbrady91.com/img/logos/tailwind.png",
    altText: "tailwindCSS",
    href: "https://developer.android.com",
  },

  {
    imageSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    altText: "JavaScript",
    href: "https://developer.android.com",
  },
  {
    imageSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    altText: "TypeScript",
    href: "https://developer.android.com",
  },
  {
    imageSrc:
      "data:image/png;base64,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",
    altText: "React.js",
    href: "https://developer.android.com",
  },
  // {
  //     imageSrc:
  //         "https://i.pinimg.com/originals/c6/6a/d3/c66ad30b55d9395fc0413f0f14bd9730.png",
  //     altText: "Node.js",
  //     href: "https://developer.android.com",
  // },
  {
    imageSrc:
      "https://camo.githubusercontent.com/07bdba96ec84b459bc6832e9450faac158e164811e9fc3cffe5d6373f2d320da/68747470733a2f2f63646e2e73616e6974792e696f2f696d616765732f3831706f637077382f70726f64756374696f6e2f613936633166353366343033316262313565336638353337626461356163303239346539356663652d313830783138302e7376673f683d3830266669743d6d6178266175746f3d666f726d6174",
    altText: "next.js",
    href: "https://nextjs.org/docs",
  },
  {
    imageSrc:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    altText: "Redux",
    href: "https://developer.android.com",
  },
  {
    imageSrc:
      "data:image/jpeg;base64,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",
    altText: "React Query",
    href: "https://developer.android.com",
  },
  {
    imageSrc:
      "https://camo.githubusercontent.com/b67b6830e4fe2686eee3706938670bcbd3df3f2e8bb78a259459395dc6144e41/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f392f39362f536f636b65742d696f2e7376672f3130323470782d536f636b65742d696f2e7376672e706e67",
    altText: "Socket.io",
    href: "https://developer.android.com",
  },
  // {
  //     imageSrc:
  //         "data:image/png;base64,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",
  //     altText: "Prisma",
  //     href: "https://developer.android.com",
  // },
  // {
  //     imageSrc:
  //         "https://p7.hiclipart.com/preview/396/90/545/postgresql-database-logo-computer-icons-replication-software-developer.jpg",
  //     altText: "PostgreSQL",
  //     href: "https://developer.android.com",
  // },
  // {
  //     imageSrc:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWp7pd1Qt0VYxUZY5tqPMemwjZN5DVMFkLWQ&usqp=CAU",
  //     altText: "MongoDB",
  //     href: "https://developer.android.com",
  // },
  // {
  //     imageSrc:
  //         "data:image/png;base64,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",
  //     altText: "Redis",
  //     href: "https://developer.android.com",
  // },
  // {
  //     imageSrc:
  //         "https://camo.githubusercontent.com/a13ca5b988ada41839ebe4f88455e63419a1b56fcb5eda207794cd1649a61d2c/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
  //     altText: "Postman",
  //     href: "https://developer.android.com",
  // },
  // {
  //     imageSrc:
  //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
  //     altText: "Docker",
  //     href: "https://developer.android.com",
  // },
  // {
  //     imageSrc:
  //         "data:image/jpeg;base64,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",
  //     altText: "AWS",
  //     href: "https://developer.android.com",
  // },
];
