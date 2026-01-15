"use client";

import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Logo from "@/components/Logo";
import SplitText from "@/components/SplitText";
import Container from "./Container";

export default function Hero() {
  const logoControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    async function sequence() {
      // 1. Draw logo
      await logoControls.start("visible");

      // 2. Reveal text
      textControls.start("reveal");
    }

    sequence();
  }, []);

  return (
    <Container>
      <section id="hero" className=" flex items-end pt-4  pb-24 min-h-screen">
        <div className="flex flex-col gap-[12vh] pt-12" data-cursor="hover">
          {/* <Logo
          className="w-[180px] md:w-[220px] mt-6 text-[#FFF]"
          controls={logoControls}
        /> */}

          <SplitText text="Diseñamos y construimos experiencias digitales para marcas modernas." className="text-[12vw] md:text-[6vw] leading-[1.06] pt-6 font-bold tracking-tight" />
          <div className="flex flex-row gap-[12vh]" data-cursor="hover">
            <h2 className="text-xl">
              <span className="text-xl w-full min-w-full block text-gray-500">Locación</span>
              Costa Rica
            </h2>
            <h2 className="text-xl">
              <span className="text-xl w-full min-w-full block text-gray-500">Estado</span>
              Ready to rock
            </h2>
            <h2 className="text-xl">
              <span className="text-xl w-full min-w-full block text-gray-500">Hora Local</span>
              6:30 PM +6 GMT
            </h2>
          </div>
        </div>
      </section>
    </Container>
  );
}
