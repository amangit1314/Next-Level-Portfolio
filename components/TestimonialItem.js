import React from 'react'
// ../images/jpg/7.jpg
/**
 * 
 * A really good job, all aspects of the project were followed step by step
        and with good results.
 */
function TestimonialItem({ name, comment, url }) {
  return (
    <div className="flex flex-col w-2/12 px-4 py-4 mr-12 align-middle rounded-lg cursor-pointer bg-slate-600 hover:shadow-sm hover:shadow-purple-600">
      <img className="items-center w-20 h-20 p-4 mb-2 rounded-full" src={url} />
      <h3 className="pl-4 mb-2 text-xl font-bold">{name}</h3>
      <p className="w-auto p-4 text-sm">{comment}</p>
    </div>
  )
}

export default TestimonialItem
