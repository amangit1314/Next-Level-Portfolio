import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function ProjectFeature2({ title, desc, img }: any) {
  return (
    <div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="justify-between visible w-auto my-1 rounded-xl xl:flex xl:items-center xl:w-6/12 xl:text-left xl:bg-transparent xl:invisible "
      >
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="relative flex visible w-auto p-4 xl:invisible"
        >
          <Image
            height={240}
            width={240}
            className="absolute object-cover rounded-lg cursor-pointer  h-60 bottom hover:shadow-sm hover:z-1 hover:shadow-purple-400"
            src={img}
            alt="Loading..."
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="relative flex invisible w-auto p-4 xl-visible"
      >
        <Image
          height={240}
          width={240}
          className="invisible object-cover w-full rounded-lg cursor-pointer xl:visible h-60"
          src={img}
          alt="Loading..."
        />
      </motion.div>
    </div>
  );
}

export default ProjectFeature2;
