"use client";

import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import Logo from "@/components/Logo";
import SplitText from "@/components/SplitText";
import Container from "./Container";
import CostaRicaTime from "./CostaRicaTime";

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
      <section id="hero" className=" flex items-end pt-4  pb-24 h-screen min-h-[650px]">
        <div className="flex flex-col gap-[12vh] pt-12" data-cursor="hover">
          {/* <Logo
          className="w-[180px] md:w-[220px] mt-6 text-[#FFF]"
          controls={logoControls}
        /> */}

          <SplitText text="Diseñamos y construimos experiencias digitales para marcas modernas." className="text-[12vw] md:text-[6vw] leading-[1.06] pt-6 font-bold tracking-tight" />
          <div className="flex flex-row gap-[12vh]" data-cursor="hover">
            <h2 className="text-xl font-mono text-white/60">
              <span className="text-sm w-full min-w-full block  text-gray-500">Locación</span>
              Costa Rica
            </h2>
            <h2 className="text-xl font-mono text-white/60">
              <span className="text-sm w-full min-w-full block text-gray-500">Status</span>
              Ready to rock
            </h2>
            <h2 className="text-xl font-mono text-white/60">
              <span className="text-sm w-full min-w-full block text-gray-500">Hora Local</span>
              <CostaRicaTime />
            </h2>
          </div>
        </div>
      </section>
    </Container>
  );
}
