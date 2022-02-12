import React from 'react'

function ProjectFeature({ title, desc, img }) {
  return (
    <div className="feature grid gap-12 grid-cols-2">
      <div className="content text-left">
        <p className="title text-xl font-semibold">
          {/* TODO web and mobile both */}
          {title}
        </p>
        <p className="desc leading-6 w-80 pt-6">
          {/*  */}
          {desc}
        </p>
      </div>
      {/* https://bashooka.com/wp-content/uploads/2018/11/to-do-app-ui-design-2.jpg */}
      <img
        className="w-8/12 rounded-lg h-40 object-fill"
        src={img}
        alt="Another shoe"
      />
    </div>
  )
}

export default ProjectFeature
