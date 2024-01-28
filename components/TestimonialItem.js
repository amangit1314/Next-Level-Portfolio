import React from "react";

export default function TestimonialItem({
  name,
  role,
  imgUrl,
  comment,
  projectUrl,
}) {
  return (
    <div className="flex-col items-center p-6 m-6 rounded-lg cursor-pointer w-100 align-center bg-slate-800 bg-opacity-80 bg-clip-padding backdrop-filter-blur">
      <div className="flex justify-start mb-6 w-100">
        {/* <img className="rounded-full w-14 h-14" src={imgUrl} alt={name} /> */}
        <img class="w-14 h-14 rounded-full " src={imgUrl} alt={name} />

        <figcaption class="ml-4 py-1 font-medium">
          <div class="text-slate-100 dark:text-slate-100">{name}</div>
          <div class="text-slate-700 dark:text-slate-500 line-clamp-2 text-sm">
            {role}
          </div>
        </figcaption>
      </div>
      <blockquote>
        <p class="text-md text-start text-slate-400 hover:text-slate-300 line-clamp-6 font-medium ">
          “{ comment }”
        </p>
      </blockquote>
    </div>
  );
}
