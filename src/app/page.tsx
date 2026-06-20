// "use client";

// import React, { useState, useEffect } from "react";

// import {
//   AboutSection,
//   Contact,
//   Experience,
//   Footer,
//   Header,
//   HeroSection,
//   MobileBottomNav,
//   Projects,
//   Skills,
//   Testimonials,
// } from "@/components/export";

// const Home = () => {
//   const [activeSection, setActiveSection] = useState("home");
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // NEW

//   // Handle active section detection
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = [
//         "home",
//         "about",
//         "skills",
//         "experience",
//         "projects",
//         "contact",
//       ];
//       const current = sections.find((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });

//       if (current) {
//         setActiveSection(current);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (path: string) => {
//     const element = document.querySelector(path);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <main className="flex flex-col min-h-screen bg-gradient-to-b from-theme-bg-primary via-theme-bg-secondary to-theme-bg-primary overflow-x-hidden">
//       {/* JSON-LD Structured Data */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Person",
//             "name": "Aman Soni",
//             "url": "https://amansoni.dev",
//             "sameAs": [
//               "https://github.com/amangit1314",
//               "https://linkedin.com/in/aman-soni"
//             ],
//             "jobTitle": "AI Engineer & Full-Stack Architect",
//             "description": "Portfolio of Aman Soni, an experienced AI Engineer and Full-Stack Architect specializing in document extraction, agentic workflows, and Next.js applications.",
//             "knowsAbout": [
//               "Artificial Intelligence",
//               "Agentic AI",
//               "Large Language Models",
//               "Vertex AI",
//               "Next.js",
//               "Full-Stack Development",
//               "Python",
//               "Scrapling",
//               "Pydantic"
//             ]
//           })
//         }}
//       />

//       {/* Header */}
//       <header className="fixed top-0 left-0 right-0 z-50">
//         <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
//       </header>

//       {/* Main content */}
//       <div className="pt-20 flex flex-col items-center">
//         <section id="home" className="w-full max-w-7xl">
//           <HeroSection />
//         </section>

//         <section id="about" className="w-full max-w-7xl">
//           <AboutSection />
//         </section>

//         <section id="skills" className="w-full max-w-7xl">
//           <Skills />
//         </section>

//         <section id="experience" className="w-full max-w-7xl">
//           <Experience />
//         </section>

//         <section id="projects" className="w-full max-w-7xl">
//           <Projects />
//         </section>
//       </div>

//       {/* Testimonials */}
//       <section className="w-full max-w-7xl mx-auto">
//         <Testimonials />
//       </section>

//       <section id="contact" className="w-full max-w-7xl mx-auto">
//         <Contact />
//       </section>

//       {/* Footer */}
//       <footer className="mt-16 w-full border-t border-zinc-800/50 relative bg-gradient-to-b from-theme-bg-secondary to-theme-bg-primary border-t border-theme-border/50 overflow-hidden">
//         <Footer />
//       </footer>

//       {/* Mobile Bottom Navigation */}
//       {!isMenuOpen && ( // HIDE WHEN MENU OPEN
//         <MobileBottomNav
//           activeSection={activeSection}
//           onNavClick={handleNavClick}
//         />
//       )}
//     </main>
//   );
// };

// export default Home;


"use client";

import React, { useState, useEffect } from "react";

import {
  AboutSection,
  Contact,
  Experience,
  Footer,
  Header,
  HeroSection,
  MobileBottomNav,
  Projects,
  Skills,
  Testimonials,
} from "@/components/export";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        if (!element) return false;

        const rect = element.getBoundingClientRect();

        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (path: string) => {
    const element = document.querySelector(path);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-theme-bg-primary via-theme-bg-secondary to-theme-bg-primary">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <Header
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </header>

      {/* Content Wrapper */}
      <div className="pt-20">
        <section
          id="home"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <HeroSection />
        </section>

        <section
          id="about"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <AboutSection />
        </section>

        <section
          id="skills"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <Skills />
        </section>

        <section
          id="experience"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <Experience />
        </section>

        <section
          id="projects"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <Projects />
        </section>

        <section
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <Testimonials />
        </section>

        <section
          id="contact"
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <Contact />
        </section>
      </div>

      <footer className="mt-16 w-full overflow-hidden border-t border-theme-border/50 bg-gradient-to-b from-theme-bg-secondary to-theme-bg-primary">
        <Footer />
      </footer>

      {!isMenuOpen && (
        <MobileBottomNav
          activeSection={activeSection}
          onNavClick={handleNavClick}
        />
      )}
    </main>
  );
};

export default Home;