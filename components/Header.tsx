"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, useAnimation, useInView, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SplitText from "@/components/SplitText";
import Logo from "./Logo";
import FullscreenMenu from "./FullScreenMenu";

export default function Header() {
  const { scrollY } = useScroll();


  // Adjust these values to taste
  const scale = useTransform(scrollY, [0, 300], [1.7, 1]);
  const x = useTransform(scrollY, [0, 300], [0, 0]);
  const y = useTransform(scrollY, [0, 300], [10, 0]);
  const opacity = useTransform(scrollY, [0, 200], [1, 1]);

  const [hidden, setHidden] = useState(false);

  const logoControls = useAnimation();
  const [menuOpen, setMenuOpen] = useState(false);

  const topLine = {
    closed: {
      rotate: 0,
      y: 0,
      scaleX: 0.75,
    },
    open: {
      rotate: 45,
      y: 6,
      scaleX: 1,
    },
  };

  const middleLine = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  };

  const bottomLine = {
    closed: {
      rotate: 0,
      y: 0,
      scaleX: 0.5,
    },
    open: {
      rotate: -45,
      y: -6,
      scaleX: 1,
    },
  };

  // HERO VISIBILITY
  const heroRef = useRef<HTMLElement | null>(null);
  const heroInView = useInView(heroRef, {
    margin: "-20% 0px -60% 0px",
  });

  //   useMotionValueEvent(scrollY, 'change', (latest) => {
  //     const previous = scrollY.getPrevious() ?? 0

  //     // hide on scroll down, show on scroll up
  //     if (latest > previous && latest > 80) {
  //       setHidden(true)
  //     } else {
  //       setHidden(false)
  //     }
  //   })

  useEffect(() => {
    async function sequence() {
      await logoControls.start("visible");
    }
    sequence();
  }, []);

  // Find hero once on mount
  useEffect(() => {
    heroRef.current = document.getElementById("hero");
  }, []);

  return (
    <motion.header
      aria-label="Site header"
      initial={false}
      animate={hidden ? "hidden" : "visible"}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      transition={{
        duration: 0.45,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="
        fixed
        top-0
        left-0
        z-50
        w-full

      "
    >
      <div className="mx-auto max-w-[1440px] px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage" className="text-lg font-light">
          {/* <motion.div
            animate={{ opacity: heroInView ? 1 : 1 }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          > */}
             <motion.div
            style={{
              scale,
              x,
              y,
              opacity,
              transformOrigin: "left top",
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
          >
            <Logo className="w-[100px] md:w-[120px] text-[#FFF]" controls={logoControls} />
          </motion.div>
        </Link>

        {/* Menu toggle */}
        {/* <button type="button" aria-expanded={menuOpen} aria-controls="navigation-menu" aria-label="Open navigation menu" onClick={() => setMenuOpen(true)} className="group flex items-center gap-3">
          <span className="text-sm font-bold text-neutral-300">MENU</span>

          <div className="flex flex-col gap-[6px]">
            <span className="block h-px w-6 bg-white origin-right scale-x-75 transition-transform" />
            <span className="block h-px w-6 bg-white transition-transform" />
            <span className="block h-px w-6 bg-white origin-right scale-x-50 transition-transform" />
          </div>
        </button> */}
      </div>
      <FullscreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </motion.header>
  );
}
