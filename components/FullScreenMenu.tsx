"use client";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { useEffect } from "react";
import Logo from "./Logo";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function FullscreenMenu({ isOpen, onClose }: Props) {
  const logoControls = useAnimation();

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  useEffect(() => {
    async function sequence() {
      await logoControls.start("visible");
    }
    sequence();
  }, []);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          aria-label="Main navigation"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="
            fixed
            inset-0
            z-[50]

bg-black
            flex
            items-start

          "
          onClick={onClose}
        >
          <div className="col-span-12 pb-10">
            <Logo className="w-[220px] mt-8 ml-8 text-white" controls={logoControls} />
          </div>
          <motion.ul className="space-y-8 menuList w-full mx-auto max-w-[1440px]" onClick={(e) => e.stopPropagation()}>
            {navigation.map((item) => (
              <motion.li key={item.label} variants={itemVariants}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="
                    text-[clamp(2.5rem,6vw,4rem)]
                    font-bold
                    hover:opacity-60
                    transition-opacity
                  "
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
