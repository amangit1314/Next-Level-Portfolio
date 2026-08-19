import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

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
    name: "Instagram",
    url: "https://www.instagram.com/soni.amanic",
    icon: <FaInstagram className="text-xl" />,
    color: "text-rose-400 hover:text-rose-300",
  },
  {
    name: "X",
    url: "https://x.com/amanshipss",
    icon: <FaXTwitter className="text-xl" />,
    color: "text-sky-400 hover:text-sky-300",
  },
];
