import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { revealItem } from "@/lib/reveal";
import portrait from "@/public/imtiyaz.jpg";

/** The person behind the work, in first person. */
export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line">
      <Container className="py-20 md:py-[120px]">
        <Reveal className="grid items-center gap-x-[88px] gap-y-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          {/* Photo: first on phones; on the right from lg, so Imtiyaz (who
              faces left) looks into the page rather than off its edge. */}
          <div
            {...revealItem()}
            className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-md bg-sand lg:order-2 lg:max-w-none"
          >
            <Image
              src={portrait}
              alt="Imtiyaz Sayyid"
              fill
              placeholder="blur"
              quality={90}
              sizes="(min-width: 1280px) 460px, (min-width: 1024px) 36vw, (min-width: 424px) 384px, calc(100vw - 40px)"
              className="object-cover"
            />
          </div>
          <div className="lg:order-1">
            <h2
              {...revealItem()}
              id="about-title"
              className="font-display text-[clamp(40px,5vw,68px)] leading-[1.02] tracking-[-0.03em]"
            >
              Hi, I&apos;m Imtiyaz.
            </h2>
            <p {...revealItem()} className="mt-8 max-w-[620px] font-display text-[22px] leading-[1.4] md:text-[24px]">
              For the past three years I&apos;ve helped small and mid-sized
              businesses in lending, manufacturing, education, e-commerce, events
              and media replace manual work with systems their teams rely on
              every day.
            </p>
            <div {...revealItem()} className="mt-6 max-w-[620px] space-y-4 text-body">
              <p>
                I start by understanding how your business really runs: who does
                what, where things get stuck, and what your team keeps doing by
                hand. Then I turn that into something simple your people will
                actually use.
              </p>
              <p>
                Based in Mumbai, I lead every project personally and bring in
                trusted specialists when the work needs it. You deal directly with
                me from the first call onwards, with no handoffs or middlemen.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
