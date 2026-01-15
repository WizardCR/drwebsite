import Container from "@/components/Container";
import WorkItem from "./WorkItem";
import { works } from "@/data/works";
import SplitText from "./SplitText";

export default function WorkGrid() {
  return (
    <section className="mt-[5vh]">
      <Container>
        {/* <SplitText text="Trabajo que construye marcas, productos digitales y campañas con propósito, claridad e impacto." as="h3" variant="paragraph" className="max-w-3xl text-[clamp(1.2rem,1.9vw,2.2rem)] leading-[1.4] font-light pb-12" /> */}
        <div
          className="
            columns-1
            md:columns-2
            lg:columns-3
            gap-[clamp(24px,3vw,48px)]
          "
        >
          {works.map((work, i) => (
            <WorkItem
              key={work.id}
              work={work}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
