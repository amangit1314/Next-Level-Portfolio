import { motion } from "framer-motion";
import React from "react";

function Projects() {
  return (
    <section
      className="flex-col items-center justify-between p-8 mx-auto projects max-w-7xl"
      id="projects"
    >
      <h1 className="flex my-12 text-4xl font-bold proj-txt">Projects</h1>

      {/* <div className="grid grid-cols-2 gap-5 xl:grid-cols-3">
        <ProjectFeature2
          title={"Food Ordering App"}
          desc={
            "A food ordering application build with flutter, firebase auth and a lot of patience and love. Hope you will found this design usefull."
          }
          img={
            "https://i.pinimg.com/originals/b8/6d/81/b86d81815b0a4b766e46693e7c678f43.jpg"
          }
        ></ProjectFeature2>
        <ProjectFeature2
          title={"Medium Clone"}
          desc={
            "A medium blog clone application build with Next.js, Sanity CMS, TypeScript and all the crazy stuff with love. Hope you will found this build worth."
          }
          // https://bashooka.com/wp-content/uploads/2018/11/to-do-app-ui-design-2.jpg
          img={
            "https://dpbnri2zg3lc2.cloudfront.net/en/wp-content/uploads/old-blog-uploads/user-interface-website-examples-best-ui-designs.jpg"
          }
        ></ProjectFeature2>
        <ProjectFeature2
          title={"Instagram Clone"}
          desc={
            "A Instagram Clone mobile application build with Flutter, Firebase Auth, Cloud Firestore and a lot of patience and love."
          }
          img={
            "https://cdn.dribbble.com/users/1133834/screenshots/14693648/media/aae45e859d7f96e16c6213f90a8ded93.png?compress=1&resize=1200x900&vertical=top"
          }
        ></ProjectFeature2>
      </div> */}

      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="flex-1 basis-1/3 ">
          <motion.img
            className="object-cover rounded-lg"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src="images/png/adam.png"
          />
        </div>
        <div className="flex-1 basis-1/3 ">
          <motion.img
            className="object-cover rounded-lg"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src="images/jpg/chat.jpg"
          />
        </div>
        <div className="flex-1 basis-1/3 ">
          <motion.img
            className="object-cover rounded-lg"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src="images/jpg/images.jpg"
          />
        </div>
        <div className="flex-1 basis-1/3 ">
          <motion.img
            className="object-cover rounded-lg"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src="images/jpg/sm.webp"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
