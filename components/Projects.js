import React from "react";
import ProjectFeature2 from "../components/ProjectFeature2";

function Projects() {
  return (
    <div>
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

        <div className="p-8 mx-auto max-w-7xl sm:px-0">
          <div className="sm:w-9/12 sm:mx-auto ">
            {/* Tabs */}
            <div
              // x-data="{
              //   openTab: 1,
              //   activeClasses: 'border-l, border-t, border-r, rounded-t text-blue-700,
              //   inactiveClasses: 'text-blue-500 hover:text-blue-800
              // }"
              role="tablist"
              aria-label="Tabs"
              className="
          relative w-[3xl] mx-auto h-12 grid grid-cols-3 px-[3xl] rounded-full overflow-hidden shadow-2xl shadow-900/20 transition items-center bg-gray-600/20 
          "
            >
              {/* <div className="z-0 h-10 p-6 transition bg-purple-500 rounded-full "></div> */}
              <button
                role="tab"
                aria-controls="panel-1"
                id="tab-1"
                tabIndex="1"
                className="relative z-10 block h-10 px-6 bg-transparent rounded-full tab "
              >
                <a href="#appContent">
                  <span className="text-white">App</span>
                </a>
              </button>
              <button
                role="tab"
                aria-controls="panel-2"
                id="tab-2"
                tabIndex="2"
                className="relative block h-10 px-6 rounded-full tab "
              >
                <a href="#webContent">
                  <span className="text-white">Web</span>
                </a>
              </button>
              <button
                role="tab"
                aria-controls="panel-3"
                id="tab-3"
                tabIndex="3"
                className="relative block h-10 px-6 rounded-full tab "
              >
                <a href="#otherContent">
                  <span className="text-white">Other</span>
                </a>
              </button>
            </div>
            {/* Tab content */}
            <div className="relative mt-6 rounded-3xl bg-gray-500/20">
              <div
                // x-show="openTab === 1"
                label="App"
                role="tabpanel"
                id="appContent"
                className="p-6 transition duration-300 tabpanel "
              >
                <h2 className="text-xl font-semibold text-white">
                  App Content
                </h2>
                <p className="grid gap-3 mt-4 text-gray-600 sm:grid-cols-2 md:grid-cols-2">
                  {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                magnam blanditiis architecto facilis eligendi omnis sed, modi ex
                ratione maxime. Quidem repellat quam quo corrupti libero id,
                quaerat culpa distinctio! */}
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
                    title={"Instagram Clone"}
                    desc={
                      "A Instagram Clone mobile application build with Flutter, Firebase Auth, Cloud Firestore and a lot of patience and love."
                    }
                    img={
                      "https://cdn.dribbble.com/users/1133834/screenshots/14693648/media/aae45e859d7f96e16c6213f90a8ded93.png?compress=1&resize=1200x900&vertical=top"
                    }
                  ></ProjectFeature2>
                </p>
              </div>
              <div
                label="Web"
                // x-show="openTab === 2"
                role="tabpanel"
                id="webContent"
                className="absolute top-0 invisible p-6 transition duration-300 opacity-0 tabpanel "
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  Web Content
                </h2>
                <p className="mt-4 text-gray-600 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  magnam blanditiis architecto facilis eligendi omnis sed, modi
                  ex ratione maxime. Quidem repellat quam quo corrupti libero
                  id, quaerat culpa distinctio!
                </p>
              </div>
              <div
                // x-show="openTab === 3"
                label="Other"
                role="tabpanel"
                id="otherContent"
                className="absolute top-0 invisible p-6 transition duration-300 opacity-0 tabpanel "
              >
                <h2 className="text-xl font-semibold text-gray-800">
                  Other Content
                </h2>
                <p className="mt-4 text-gray-600 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  magnam blanditiis architecto facilis eligendi omnis sed, modi
                  ex ratione maxime. Quidem repellat quam quo corrupti libero
                  id, quaerat culpa distinctio!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
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
      </div> */}
      </section>
    </div>
  );
}

export default Projects;
