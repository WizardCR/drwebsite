"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
const scale = useMotionValue(1)
  const clickDownSound = useRef<HTMLAudioElement | null>(null);
  const clickUpSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    clickDownSound.current = new Audio("/sounds/down.mp3");
    clickUpSound.current = new Audio("/sounds/up.mp3");

    clickDownSound.current.volume = 0.5;
    clickUpSound.current.volume = 0.5;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const handleDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor="hover"]')) {
      scale.set(0.1);
      clickDownSound.current?.currentTime && (clickDownSound.current.currentTime = 0);
      clickDownSound.current?.play();
      }
    };

    const handleUp = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor="hover"]')) {
      scale.set(1);
      clickUpSound.current?.currentTime && (clickUpSound.current.currentTime = 0);
      clickUpSound.current?.play();
      }

    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    // window.addEventListener("touchstart", handleDown);
    // window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      // window.removeEventListener("touchstart", handleDown);
      // window.removeEventListener("touchend", handleUp);
    };
  }, []);

  useEffect(() => {
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor="hover"]')) {
        dotRef.current?.classList.add("is-hover");
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor="hover"]')) {
        dotRef.current?.classList.remove("is-hover");
      }
    };

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <motion.div
      className="cursor-wrapper"
      style={{
        translateX: x,
        translateY: y,
      }}
    >
      <div ref={dotRef} className="cursor-dot" />
    </motion.div>
  );
}
