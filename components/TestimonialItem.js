import React from "react";

export default function TestimonialItem({
  name,
  role,
  imgUrl,
  comment,
  projectUrl,
}) {
  return (
    <div className="flex-col items-center w-auto p-6 m-6 transition duration-200 ease-in-out delay-150 rounded-lg cursor-pointer hover:scale-110 hover:bg-purple-500 xl:w-6/12 align-center bg-slate-800 bg-opacity-60 bg-clip-padding hover:shadow-lg hover:shadow-grey-500/50 backdrop-filter-blur">
      <img
        className="items-center bg-white rounded-full w-14 h-14"
        src={imgUrl}
      />
      <div className="flex flex-col justify-between pt-4 ">
        <h3 className="pb-1 text-lg font-semibold ">{name}</h3>
        <p className="w-auto pb-4 text-sm text-gray-100">{role}</p>
        <h4 className="text-sm text-gray-200">{comment}</h4>
        <h5 className="pt-4 text-sm underline" href={projectUrl}>
          View project
        </h5>
      </div>
    </div>
  );
}
