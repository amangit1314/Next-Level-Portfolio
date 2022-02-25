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
      <div className="flex flex-col flex-1 bg-indigo-400 w-3/12 rounded-lg py-4 align-middle">
        <img className="h-20 w-20 rounded-full mb-2 " src={url} />
        <h3 className="text-xl mb-2">{name}</h3>
        <p className="text-sm w-8/12">{comment}</p>
      </div>
      <div className="flex flex-col flex-1 bg-indigo-400 w-3/12 rounded-lg py-4 items-center">
        <img className="h-20 w-20 rounded-full mb-2 " src={url} />
        <h3 className="text-xl mb-2">{name}</h3>
        <p className="text-sm w-8/12">{comment}</p>
      </div>
    </div>
  )
}

export default TestimonialItem
