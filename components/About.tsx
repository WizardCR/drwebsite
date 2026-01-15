import Container from "@/components/Container";
import SplitText from "@/components/SplitText";
import AnimatedHr from "./AnimatedHr";

export default function About() {
  return (
    <section className="mt-[0vh]">
      <Container>
        <div className="grid grid-cols-12 gap-x-[clamp(16px,2vw,32px)]">
          <div className="col-span-12 pb-14">
            <AnimatedHr />
          </div>
          <div className="col-span-12 md:col-span-7">
            <SplitText
              text="Con más de 20 años de experiencia, nos apasiona lo que se puede lograr a través de la intersección del diseño creativo y el desarrollo de vanguardia."
              as="h2"
              variant="paragraph"
              className="text-[clamp(1.6rem,2.4vw,2.4rem)] leading-[1.4] font-light"
            />
          </div>

          <div className="col-span-12 pt-14">
            <AnimatedHr />
          </div>
        </div>
      </Container>
    </section>
  );
}
