'use client'
import { motion } from 'framer-motion'

export default function CaseItem({ title }: { title: string }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover" data-cursor="hover"
      className="border-b border-neutral-800 py-20 "
    >
      <motion.h2
        variants={{ rest: { x: 0 }, hover: { x: 20 } }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="text-4xl font-light"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
        className="text-sm text-neutral-400 mt-2"
      >
        Branding / Development
      </motion.p>
    </motion.div>
  )
}
