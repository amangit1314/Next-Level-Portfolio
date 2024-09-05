import React from "react";
import { PROJECTS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="flex flex-col items-center justify-between p-8 mx-[5rem] my-8">
        <p className="mt-12 text-base font-normal text-center text-gray-300 ">
          See all my projects below
        </p>
        <p className="mt-2 text-3xl font-semibold text-center xl:text-4xl text-white">
          Projects
        </p>
      </div>

      <div className="p-8 md:p-0 space-y-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="md:mb-8 flex flex-col md:flex-row md:justify-center md:space-x-10 space-y-4 md:space-y-0"
          >
            {/* only for big screens */}
            <Link
              href={project.link}
              className="hidden lg:visible lg:flex w-full lg:w-1/4"
            >
              <Image
                src={project.image}
                width={150}
                height={200}
                alt={project.title}
                className="rounded-xl w-full cursor-pointer object-cover transition-all duration-300"
              />
            </Link>

            {/* only for mobile */}
            <Link
              href={project.link}
              className="visible lg:hidden w-full max-w-screen"
            >
              <Image
                src={project.image}
                width={450}
                height={236}
                alt={project.title}
                objectFit={"cover"}
                className="rounded-xl h-[14rem] w-full cursor-pointer object-cover transition-all duration-300"
              />
            </Link>

            <div className="w-full max-w-xl lg:w-3/4">
              <Link href={project.link}>
                <h6 className="mb-2 font-semibold text-white cursor-pointer transition-all duration-300">
                  {project.title}
                </h6>
              </Link>

              <p className="mb-4 text-gray-300">{project.description}</p>

              <div className="flex md:grid md:grid-flow-col space-x-2 space-y-2 md:gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="flex justify-center h-15  items-center text-center rounded bg-neutral-900 text-gray-300 px-2 py-1 text-sm font-medium"
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

export default Project;
