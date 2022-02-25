import React from 'react'

function ProjectFeature({ title, desc, img }) {
  return (
    <div className="feature flex justify-between items-cente">
      <div className="content text-left mt-10">
        <p className="title text-xl font-semibold">
          {/* TODO web and mobile both */}
          {title}
        </p>
        <p className="desc leading-6 w-5/12 pt-6">
          {/*  */}
          {desc}
        </p>
      </div>

      <img
        className="w-4/12 rounded-lg h-60 object-cover cursor-pointer"
        src={img}
        alt="Another shoe"
      />
    </div>
  )
}

export default ProjectFeature
