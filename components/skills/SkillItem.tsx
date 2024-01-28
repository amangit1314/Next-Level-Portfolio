import { motion } from "framer-motion";
import Link from "next/link";

interface SkillItem {
  imageSrc: string;
  altText: string;
  href: string;
  directionLeft: boolean;
}

// Reusable component for a single skill item
const SkillWidget = ({ imageSrc, altText, href, directionLeft }: SkillItem) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <Link
        href={href}
        target="_blank"
        className="relative flex cursor-pointer group xl:m-2"
      >
        <motion.img
          className="object-cover w-20 h-20 p-3 transition duration-300 ease-in-out border-2 border-gray-200 rounded-full filter group-hover:grayscale"
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src={imageSrc}
          alt={altText}
          width="40"
          height="40"
        />
        <div className="absolute z-0 w-20 h-20 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:bg-white group-hover:opacity-80">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">100%</p>
          </div>
        </div>
      </Link>
      <p className="text-sm tracking-tight  font-thin">{altText}</p>
    </div>
  );
};

export default SkillWidget;