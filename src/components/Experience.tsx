import { EXPERIENCES } from "@/utils/constants";
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="flex flex-col items-center justify-between p-8 mx-[5rem] my-8">
        <p className="mt-12 text-base font-normal text-center text-gray-300 ">
          My relevant work
        </p>
        <p className="mt-2 text-3xl font-semibold text-center xl:text-4xl text-white">
          Experience
        </p>
      </div>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className=" flex flex-col lg:flex-row lg:justify-center border-t border-stroke border-neutral-800 py-6"
          >
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-gray-300">
                {experience.role} -{" "}
                <span className="cursor-pointer text-sm text-purple-400 transition-colors hover:text-purple-500">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
