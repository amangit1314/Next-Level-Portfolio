import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
        className="relative flex cursor-pointer group"
      >
        {/* <motion.div
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
          }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            className="object-cover w-20 h-20 p-3 transition duration-300 ease-in-out border-2 border-gray-200 rounded-full filter group-hover:grayscale"
            src={imageSrc}
            alt={altText}
            objectFit="cover"
            width={80}
            height={80}
          />
        </motion.div> */}

        <Image
          className="object-cover w-20 h-20 p-3 transition duration-300 ease-in-out border-2 border-gray-300 rounded-2xl filter group-hover:grayscale"
          src={imageSrc}
          alt={altText}
          objectFit="cover"
          width={80}
          height={80}
        />

        <div className="absolute z-0 w-20 h-20 transition-all duration-300 ease-in-out rounded-2xl opacity-0 group-hover:bg-purple-500 group-hover:opacity-80">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl font-bold text-white opacity-100">100%</p>
          </div>
        </div>
      </Link>

      <p className="text-sm tracking-tight  font-thin">{altText}</p>
    </div>
  );
};

export default SkillWidget;
