import Head from 'next/head';
import Script from 'next/script';
import AboutSection  from '../components/AboutSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import MiscSkills from '../components/MiscSkills';

export default function Home() {
  return (
    <div className="h-screen overflow-x-hidden text-white bg-black snap-y snap-mandatory">
      <Head>
        <title>Aman Soni</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Script src="https://unpkg.com/@rive-app/webgl" />
      <Script
        type="module"
        src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js"
      />
      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js" />
      <Header />
      <HeroSection />
      <AboutSection />
      <MiscSkills />
      <Skills />
      {/* <ProjectsSection /> */}
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* JSX for Fonts */}
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Poppins, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
