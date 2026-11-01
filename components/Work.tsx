import { WorkShowcase } from "@/components/WorkShowcase";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="bg-band py-18 md:py-25">
      <Container>
        <SectionHeading
          id="work-title"
          title="Selected work"
          subtitle="A few highlights from the 10+ systems we've shipped. Client names are kept private, and visuals are demos with sample data."
        />
        <div className="mt-10 md:mt-12">
          <WorkShowcase />
        </div>
      </Container>
    </section>
  );
}
