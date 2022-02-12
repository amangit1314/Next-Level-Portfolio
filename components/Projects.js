import React from 'react'
import ProjectFeature from './ProjectFeature'
import ProjectFeature2 from './ProjectFeature2'

function Projects() {
  return (
    <div className="projects ml-24 mr-24 mt-24 pb-24">
      <section className="more-info" id="projects">
        <h1 className="proj-txt text-4xl mb-24 font-bold">Projects</h1>
        <ProjectFeature
          title={'Food Ordering App'}
          desc={
            'Upper mesh material provides proper ventilation and reduction in the'
          }
          img={
            'https://i.pinimg.com/originals/b8/6d/81/b86d81815b0a4b766e46693e7c678f43.jpg'
          }
        ></ProjectFeature>
        <div className="h-24"></div>
        <ProjectFeature
          title={'Portfolio Website'}
          desc={
            'Upper mesh material provides proper ventilation and reduction in the'
          }
          img={
            'https://bashooka.com/wp-content/uploads/2018/11/to-do-app-ui-design-2.jpg'
          }
        ></ProjectFeature>
        <div className="h-24"></div>
        <ProjectFeature
          title={'Instagram Clone'}
          desc={
            'Upper mesh material provides proper ventilation and reduction in the'
          }
          img={
            'https://bashooka.com/wp-content/uploads/2018/11/to-do-app-ui-design-2.jpg'
          }
        ></ProjectFeature>
      </section>
    </div>
  )
}

export default Projects
