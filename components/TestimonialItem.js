import React from 'react'

export default function  TestimonialItem({ name, post, url }) {
  return (
    <div className="flex items-center w-3/12 p-2 px-6 m-6 rounded-lg cursor-pointer align-center bg-slate-800 bg-opacity-60 bg-clip-padding hover:shadow-sm hover:shadow-pink-600 backdrop-filter-blur">
      <img className="items-center bg-white rounded-full w-14 h-14" src={url} />
      <div className="flex flex-col justify-between ">
        <h3 className="pl-4 text-lg font-semibold ">{name}</h3>
        <p className="w-auto pb-4 pl-4 text-sm">{post}</p>
      </div>
    </div>
  )
}