import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { revealItem } from "@/lib/reveal";

const facts = [
  { value: "3 years", label: "building software" },
  { value: "6", label: "industries" },
  { value: "10+", label: "systems shipped" },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-18 md:py-25"
    >
      <Container>
        {/* One reveal group: photo, then the text, then the fact tiles */}
        <Reveal className="grid items-center gap-14 md:grid-cols-[5fr_7fr] md:gap-16 lg:gap-24">
          {/* Photo frame, slightly rotated */}
          <div
            {...revealItem()}
            className="relative isolate mx-auto w-full max-w-72 sm:max-w-sm md:mx-0"
          >
            {/* Background: faint ledger lines with a gold margin rule */}
            <div
              aria-hidden="true"
              className="absolute -inset-x-4 -inset-y-10 -z-10 bg-ledger md:-inset-x-14 md:-inset-y-16"
            >
              <span className="absolute inset-y-[15%] left-[14%] w-px bg-highlight/30" />
            </div>
            {/*
              TODO: replace the placeholder with the photo, e.g.
              <Image src="/imtiyaz.jpg" alt="Imtiyaz Sayyid" fill
                className="object-cover" />
            */}
            <div className="relative flex aspect-4/5 rotate-[-2.5deg] items-center justify-center overflow-hidden rounded-frame border-8 border-surface bg-canvas shadow-float">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-2/3 rounded-t-pill bg-glow/70"
              />
              <span className="relative">
                <Placeholder variant="tag">[PHOTO]</Placeholder>
              </span>
            </div>
          </div>

          <div>
            <p
              {...revealItem()}
              className="font-display text-heading-lg font-normal text-stone"
            >
              About
            </p>
            <h2
              {...revealItem()}
              id="about-title"
              className="mt-4 font-display text-headline-sm font-normal tracking-display text-ink text-balance md:text-headline"
            >
              Hi, I&apos;m Imtiyaz.
            </h2>

            <div
              {...revealItem()}
              className="mt-8 max-w-prose space-y-4 text-body-lg text-stone"
            >
              <p>
                For the past three years, I&apos;ve been building custom software
                for small and mid-sized businesses across lending, manufacturing,
                education, e-commerce, events and media.
              </p>
              <p>
                What I enjoy most is the part before the code: understanding how
                a business really runs, then turning that into something simple
                that people actually want to use.
              </p>
              <p>
                Based in Mumbai, I lead every project personally and bring in
                trusted specialists when the work needs it. So you always work
                directly with me, without handoffs or middlemen.
              </p>
            </div>

            <ul className="mt-9 grid gap-3 sm:grid-cols-3">
              {facts.map((fact) => (
                <li
                  key={fact.label}
                  {...revealItem()}
                  className="rounded-card border border-mist bg-surface px-3.5 py-3.5"
                >
                  {/* Numbers count up once when they come into view */}
                  <span className="block font-display text-heading text-ink lg:text-heading-lg">
                    <CountUp value={fact.value} />
                  </span>
                  <span className="block text-label text-stone">{fact.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
