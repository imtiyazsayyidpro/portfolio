import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-pill bg-surface px-4 py-2 text-[14px] font-semibold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Approach />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
