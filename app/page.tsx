import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowWeWork } from "@/components/HowWeWork";
import { Nav } from "@/components/Nav";
import { Problems } from "@/components/Problems";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-button bg-surface px-4 py-2 text-label font-semibold text-ink shadow-sm focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Problems />
        <Services />
        <HowWeWork />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
