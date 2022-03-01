import React from 'react'

function ProjectFeature({ title, desc, img }) {
  return (
    <div className="feature flex justify-between items-cente">
      <div className="content w-6/12 text-left mt-10 justify-between">
        <p className="title text-xl font-semibold">
          {/* TODO web and mobile both */}
          {title}
        </p>
        <p className="desc leading-6 w-6/12 pt-6">
          {/*  */}
          {desc}
        </p>
      </div>

      <img
        className="w-4/12 rounded-lg h-60 object-cover cursor-pointer"
        src={img}
        alt="Loading..."
      />
    </div>
  )
}

export default ProjectFeature
