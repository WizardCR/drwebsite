"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clients } from "@/data/clients";
import AnimatedHr from "./AnimatedHr";
import Container from "./Container";

export default function ClientLogoSlider() {
  // duplicate logos to create seamless loop
  const logos = [...clients, ...clients];

  return (
    <section className="mt-10 overflow-hidden">

      <Container>
         {/* <div className="col-span-12 pb-10">
          <AnimatedHr />
        </div> */}
        <div className="relative logo-mask">
          <motion.div
            className="flex items-center gap-22"
            animate={{ x: ["0%", "-124%"] }}
            transition={{
              duration: 53,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {logos.map((client, i) => (
              <div key={`${client.name}-${i}`} className="flex items-center justify-center min-w-[240px]">
                <Image src={client.logo} alt={client.name} width={220} height={60} className="opacity-60 grayscale" />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="col-span-12 pt-10">
          <AnimatedHr />
        </div>
      </Container>
    </section>
  );
}
