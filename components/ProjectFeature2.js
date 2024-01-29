import { motion } from "framer-motion";
import React from "react";
function ProjectFeature2({ title, desc, img }) {
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
          <img
            className="absolute object-cover rounded-lg cursor-pointer w-12/12 h-60 bottom hover:shadow-sm hover:z-1 hover:shadow-purple-400"
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
        <img
          className="invisible object-cover w-full rounded-lg cursor-pointer xl:visible h-60"
          src={img}
          alt="Loading..."
        />
      </motion.div>
    </div>
  );
}

export default ProjectFeature2;
