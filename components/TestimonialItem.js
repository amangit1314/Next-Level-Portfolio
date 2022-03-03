import React from 'react'
// ../images/jpg/7.jpg
/**
 * 
 * A really good job, all aspects of the project were followed step by step
        and with good results.
 */
function TestimonialItem({ name, comment, url }) {
  return (
    <div className="flex">
      <div className="flex flex-col w-6/12 px-4 py-4 align-middle bg-purple-400 rounded-lg">
        <img
          className="items-center w-20 h-20 p-4 mb-2 rounded-full"
          src={url}
        />
        <h3 className="pl-4 mb-2 text-xl font-bold">{name}</h3>
        <p className="w-auto p-4 text-sm">{comment}</p>
      </div>
    </div>
  )
}

export default TestimonialItem
