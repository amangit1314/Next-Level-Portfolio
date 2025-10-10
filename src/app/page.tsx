// // "use client";

// // import React from "react";

// // import { Header } from "@/components/Header";
// // import { HeroSection } from "@/components/HeroSection";
// // import { AboutSection } from "@/components/AboutSection";
// // import { MiscSkills } from "@/components/MiscSkills";
// // import { Experience } from "@/components/Experience";
// // import { Testimonials } from "@/components/Testimonials";
// // import { Footer } from "@/components/Footer";
// // import { Project } from "@/components/ProjectsGithub";
// // import { Contact } from "@/components/export";

// // const Home = () => {
// //   return (
// //     <main className="flex flex-col items-center overflow-x-hidden justify-between min-h-screen md:px-8 bg-zinc-950">
// //       <div className="flex  justify-center items-center z-10 w-full text-sm md:max-w-7xl">
// //         <Header />
// //       </div>

// //       <div className="flex justify-start items-center w-full max-w-7xl">
// //         <HeroSection />
// //       </div>

// //       <div className="flex justify-center items-center w-full max-w-7xl">
// //         <AboutSection />
// //       </div>

// //       <div className="flex justify-center items-center w-full max-w-7xl mb-8">
// //         <MiscSkills directionLeft />
// //       </div>

// //       <div className="flex justify-center items-center w-full max-w-7xl mb-8">
// //         <Experience />
// //       </div>

// //       <div className="flex justify-center items-center w-full max-w-7xl mb-8">
// //         <Project />
// //       </div>

// //       <div className="flex justify-center items-center w-full max-w-7xl">
// //         <Testimonials />
// //       </div>

// //       {/* <Contact /> */}
// //       <Contact />

// //       <div className="mt-8">
// //         <Footer />
// //       </div>
// //     </main>
// //   );
// // };

// // export default Home;

// "use client";

// import React from "react";

// import { Header } from "@/components/Header";
// import { HeroSection } from "@/components/HeroSection";
// import { AboutSection } from "@/components/AboutSection";
// import { MiscSkills } from "@/components/MiscSkills";
// import { Experience } from "@/components/Experience";
// import { Testimonials } from "@/components/Testimonials";
// import { Footer } from "@/components/Footer";
// import { Project } from "@/components/ProjectsGithub";
// import { Contact } from "@/components/export";

// const Home = () => {
//   return (
//     <main className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-x-hidden">
//       {/* Header - Fixed positioning for better UX */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50">
//         <div className="max-w-7xl mx-auto px-4 md:px-8">
//           <Header />
//         </div>
//       </header>

//       {/* Main content with proper spacing from fixed header */}
//       {/* space-y-16 md:space-y-24 */}
//       <div className="pt-20 flex flex-col items-center ">

//         {/* Hero Section */}
//         <section className="w-full max-w-7xl ">
//           <HeroSection />
//         </section>

//         {/* About Section */}
//         <section className="w-full max-w-7xl ">
//           <AboutSection />
//         </section>

//         {/* Skills Section */}
//         <section className="w-full max-w-7xl ">
//           <MiscSkills
//           //  directionLeft
//             />
//         </section>

//         {/* Experience Section */}
//         <section className="w-full max-w-7xl ">
//           <Experience />
//         </section>

//         {/* Projects Section */}
//         <section className="w-full max-w-7xl ">
//           <Project />
//         </section>

//         {/* Testimonials Section */}
//         <section className="w-full max-w-7xl ">
//           <Testimonials />
//         </section>

//         {/* Contact Section */}
//         <section className="w-full max-w-7xl ">
//           <Contact />
//         </section>
//       </div>

//       {/* Footer */}
//       <footer className="mt-16 w-full bg-zinc-900/50 border-t border-zinc-800/50">
//         <div className="max-w-7xl mx-auto ">
//           <Footer />
//         </div>
//       </footer>
//     </main>
//   );
// };

// export default Home;

"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MiscSkills } from "@/components/MiscSkills";
import { Experience } from "@/components/Experience";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Project } from "@/components/ProjectsGithub";
import { Contact } from "@/components/export";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </header>

      {/* Main content */}
      <div className="pt-20 flex flex-col items-center">
        <section id="home" className="w-full max-w-7xl">
          <HeroSection />
        </section>

        <section id="about" className="w-full max-w-7xl">
          <AboutSection />
        </section>

        <section id="skills" className="w-full max-w-7xl">
          <MiscSkills />
        </section>

        <section id="experience" className="w-full max-w-7xl">
          <Experience />
        </section>

        <section id="projects" className="w-full max-w-7xl">
          <Project />
        </section>
      </div>

      {/* Testimonials */}
      <section className="w-full max-w-7xl mx-auto">
        <Testimonials />
      </section>

      <section id="contact" className="w-full max-w-7xl">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="mt-16 w-full bg-zinc-900/50 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <Footer />
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </main>
  );
};

export default Home;
