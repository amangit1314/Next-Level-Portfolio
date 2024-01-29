import React, { useState } from "react";
import ProjectFeature2 from "../components/ProjectFeature2";
import Link from "next/link";
// import { Tabs, TabsList, TabsTrigger, div } from "@radix-ui/react-tabs";

function Projects() {
  const [activeTab, setActiveTab] = useState("App"); // Initialize activeTab state with "app"

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update the activeTab state when a tab is clicked
  };

  const tabs = ["App", "Web", "Other"];

  return (
    <div>
      <section
        className="flex-col items-center justify-center p-8 mx-auto projects max-w-7xl"
        id="projects"
      >
        <div className="space-y-1 my-9">
          <p className="text-base font-normal text-center ">
            See my work below
          </p>
          <p className="text-3xl font-semibold text-center xl:text-4xl xl:mb-24">
            Projects
          </p>
        </div>

        <div className="w-full md:p-8 md:mx-auto md:max-w-7xl sm:px-0">
          <div className="w-auto lg:w-[25rem] mx-auto">
            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Tabs"
              className="
                relative w-[3xl] mx-auto h-12 grid grid-cols-3 px-[3xl] rounded-full overflow-hidden shadow-2xl shadow-900/20 transition items-center bg-gray-600/20
              "
            >
              {tabs.map((tab, index) => {
                return (
                  <div
                    role="tab"
                    id={index}
                    tabIndex={tab}
                    className={`relative cursor-pointer h-10 px-6 rounded-full tab items-center flex justify-center ${
                      activeTab === tab
                        ? "bg-purple-500 shadow-xl z-20"
                        : "text-blue-500 hover:text-blue-800"
                    }`}
                    onClick={() => handleTabClick({ tab })}
                  >
                    <span className="text-white">{tab}</span>
                  </div>
                );
              })}
              {/* <button
                role="tab"
                aria-controls="webContent"
                id="tab-2"
                tabIndex="2"
                className={`relative block h-10 px-6 rounded-full tab ${
                  activeTab === "web"
                    ? "bg-purple-500 shadow-lg"
                    : "text-blue-500 hover:text-blue-800"
                }`}
                onClick={() => handleTabClick("web")}
              >
                <a href="#webContent">
                  <span className="text-white">Web</span>
                </a>
              </button>
              <button
                role="tab"
                aria-controls="otherContent"
                id="tab-3"
                tabIndex="3"
                className={`relative block h-10 px-6 rounded-full tab ${
                  activeTab === "other"
                    ? "bg-purple-500 shadow-lg"
                    : "text-blue-500 hover:text-blue-800"
                }`}
                onClick={() => handleTabClick("other")}
              >
                <a href="#otherContent">
                  <span className="text-white">Other</span>
                </a>
              </button> */}
            </div>

            {/* Tab content */}
            <div className="relative mt-6 rounded-3xl bg-gray-500/20">
              <div
                value="App"
                role="tabpanel"
                id="App"
                className={`grid grid-cols-1 md:grid-cols-2 md:gap-2  transition duration-300 tabpanel ${
                  activeTab === "App"
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
              >
                <ProjectFeature2
                  title={"Instagram Clone"}
                  desc={
                    "An Instagram Clone mobile application built with Flutter, Firebase Auth, Cloud Firestore, and a lot of patience and love."
                  }
                  img={
                    "https://cdn.dribbble.com/users/1133834/screenshots/14693648/media/aae45e859d7f96e16c6213f90a8ded93.png?compress=1&resize=1200x900&vertical=top"
                  }
                />
                <ProjectFeature2
                  title={"SnapCart"}
                  desc={
                    "An Instagram Clone mobile application built with Flutter, Firebase Auth, Cloud Firestore, and a lot of patience and love."
                  }
                  img={
                    "https://images.squarespace-cdn.com/content/v1/5c439fd8266c07ff148f5765/1600913493204-DU7B9IBR2UZ4XNNKDW8P/Top+20+Ecommerce+App+Inspiration+Ideas+%231-2.jpg"
                  }
                />
                <ProjectFeature2
                  title={"Convo Chat"}
                  desc={
                    "An Instagram Clone mobile application built with Flutter, Firebase Auth, Cloud Firestore, and a lot of patience and love."
                  }
                  img={
                    "https://cdn.dribbble.com/users/3041456/screenshots/8576930/media/60fcd4617f00554fea74d255d233d765.png?resize=400x300&vertical=center"
                  }
                />
              </div>
              <div
                value="Web"
                role="tabpanel"
                id="Web"
                className={`grid grid-cols-2 gap-6 absolute top-0 left-0 w-full p-6 transition duration-300 ${
                  activeTab === "Web"
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
              >
                {/* Web content here */}
                <ProjectFeature2
                  title={"Medium Clone"}
                  desc={
                    "An Instagram Clone mobile application built with Flutter, Firebase Auth, Cloud Firestore, and a lot of patience and love."
                  }
                  img={
                    "data:image/jpeg;base64,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"
                  }
                />
                <ProjectFeature2
                  title={"Weather App"}
                  desc={
                    "An Instagram Clone mobile application built with Flutter, Firebase Auth, Cloud Firestore, and a lot of patience and love."
                  }
                  img={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxap8eiKvEQfupro6mIaaljS1hEdSyd4GsZw&usqp=CAU"
                  }
                />
                <ProjectFeature2
                  title={"Show Website Landing Page"}
                  desc={
                    "An Instagram Clone mobile application built with Flutter, Firebase Auth, Cloud Firestore, and a lot of patience and love."
                  }
                  img={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgVsyOYwu-QNmWjeDuW49ArsKP83Av6-Lqug&usqp=CAU"
                  }
                />
              </div>
              <div
                value="Other"
                role="tabpanel"
                id="Other"
                className={`grid grid-cols-2 gap-6 absolute top-0 left-0 w-full p-6 transition duration-300 ${
                  activeTab === "Other"
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
              >
                {/* Other content here */}

                <ProjectFeature2
                  title={"Flutter blockchain App"}
                  desc={
                    "An Instagram Clone mobile application built with Flutter, Firebase Auth, Cloud Firestore, and a lot of patience and love."
                  }
                  img={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTXCvsmd0f51B6lMxXL535PA1wsrL1_FxifQ&usqp=CAU"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
