import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function ProjectFeature({ title, desc, img }: any) {
  return (
    <div className="feature flex flex-row justify-between items-center my-12">
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
        className="content w-6/12 text-left items-center justify-between"
      >
        <p className="title text-xl font-semibold">{title}</p>
        <p className="desc leading-6 w-6/12 pt-6">{desc}</p>
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
      >
        <Image
          height={240}
          width={240}
          className="w-10/12 rounded-lg h-60 object-cover cursor-pointer"
          src={img}
          alt="Loading..."
        />
      </motion.div>
    </div>
  );
}

export default ProjectFeature;
