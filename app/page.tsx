import ClientInit from "@/components/ClientInit";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import FeaturedWork from "@/components/FeaturedWork";
import OtherProjects from "@/components/OtherProjects";
import PersonalProjects from "@/components/PersonalProjects";
import ProjectIndex from "@/components/ProjectIndex";
import Stack from "@/components/Stack";
import Process from "@/components/Process";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Client-only: anchor smooth-scroll + scroll-reveal observer */}
      <ClientInit />

      <Nav />
      <Hero />
      <Intro />
      <FeaturedWork />
      <OtherProjects />
      <PersonalProjects />
      <ProjectIndex />
      <Stack />
      <Process />
      <Experience />
      <Achievements />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
