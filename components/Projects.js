import React from 'react'
import ProjectFeature from './ProjectFeature'
import ProjectFeature2 from './ProjectFeature2'

function Projects() {
  return (
    <div className="projects ml-24 mr-24 mt-24 pb-24">
      <section className="more-info" id="projects">
        <h1 className="proj-txt text-4xl mb-24 font-bold">Projects</h1>
        <ProjectFeature
          className="p-4"
          title={'Food Ordering App'}
          desc={
            'A food ordering application build with flutter, firebase auth and a lot of patience and love. Hope you will found this design usefull.'
          }
          img={
            'https://i.pinimg.com/originals/b8/6d/81/b86d81815b0a4b766e46693e7c678f43.jpg'
          }
        ></ProjectFeature>
        <div className="h-24"></div>
        <ProjectFeature
          title={'Medium Clone'}
          desc={
            'A medium blog clone application build with Next.js, Sanity CMS, TypeScript and all the crazy stuff with love. Hope you will found this build worth.'
          }
          // https://bashooka.com/wp-content/uploads/2018/11/to-do-app-ui-design-2.jpg
          img={
            'https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/old-blog-uploads/user-interface-website-examples-best-ui-designs.jpg'
          }
        ></ProjectFeature>
        <div className="h-24"></div>
        <ProjectFeature
          title={'Instagram Clone'}
          desc={
            'A Instagram Clone mobile application build with Flutter, Firebase Auth, Cloud Firestore and a lot of patience and love. Hope you will found this build interesting.'
          }
          img={
            'https://cdn.dribbble.com/users/1133834/screenshots/14693648/media/aae45e859d7f96e16c6213f90a8ded93.png?compress=1&resize=1200x900&vertical=top'
          }
        ></ProjectFeature>
      </section>
    </div>
  )
}

export default Projects
