import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { revealItem } from "@/lib/reveal";

/** The person behind the work, in first person. */
export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line">
      <Container className="py-20 md:py-[120px]">
        <Reveal className="grid items-center gap-x-[88px] gap-y-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/*
            TODO: replace the placeholder with the photo, e.g.
            <Image src="/imtiyaz.jpg" alt="Imtiyaz Sayyid" fill className="object-cover" />
          */}
          <div
            {...revealItem()}
            className="mx-auto flex aspect-4/5 w-full max-w-sm items-center justify-center rounded-md bg-[#e9e3d6] lg:max-w-none"
          >
            <span className="rounded-pill border border-dashed border-[#a9a08d] px-3.5 py-[7px] text-[13px] text-[#5f5a4e]">
              Photo of Imtiyaz
            </span>
          </div>
          <div>
            <h2
              {...revealItem()}
              id="about-title"
              className="font-display text-[clamp(40px,5vw,68px)] leading-[1.02] tracking-[-0.03em]"
            >
              Hi, I&apos;m Imtiyaz.
            </h2>
            <p {...revealItem()} className="mt-8 max-w-[620px] font-display text-[22px] leading-[1.4] md:text-[24px]">
              For the past three years I&apos;ve been building custom software for
              small and mid-sized businesses across lending, manufacturing,
              education, e-commerce, events and media.
            </p>
            <div {...revealItem()} className="mt-6 max-w-[620px] space-y-4 text-body">
              <p>
                What I enjoy most is the part before the code: understanding how
                a business really runs, then turning that into something simple
                people actually want to use.
              </p>
              <p>
                Based in Mumbai, I lead every project personally and bring in
                trusted specialists when the work needs it. You always work
                directly with me, without handoffs or middlemen.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
