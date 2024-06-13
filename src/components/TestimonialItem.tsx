import React from "react";
import Image from "next/image";

type TestimonialItemProps = {
  name: string;
  role: string;
  imgUrl: string;
  comment: string;
};

export const TestimonialItem = ({
  name,
  role,
  imgUrl,
  comment,
}: TestimonialItemProps) => {
  return (
    <div className="flex-col items-center p-6 max-h-26 md:max-h-[15rem] h-full cursor-pointer rounded-xl max-w-sm w-full align-center bg-neutral-900 bg-opacity-80 bg-clip-padding backdrop-filter-blur space-y-4">
      <div className="flex flex-col md:flex-row justify-start items-center text-center md:text-left w-full md:space-x-4 space-y-2 md:space-y-0">
        <Image
          className="w-14 h-14 rounded-full object-cover"
          height={14}
          width={14}
          quality={100}
          src={imgUrl}
          alt={name}
        />

        <figcaption className="font-medium">
          <div className="text-base text-gray-100 dark:text-slate-100 tracking-tight">
            {name}
          </div>
          <div className="text-gray-300 line-clamp-2 text-sm font-thin">{role}</div>
        </figcaption>
      </div>

      <blockquote>
        <p className="text-base text-start text-gray-300 hover:text-slate-200 line-clamp-3 md:line-clamp-5 ">
          {/* .substring(0, 144) */}
          “{comment}”
        </p>
      </blockquote>
    </div>
  );
};
