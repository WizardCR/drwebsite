'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AnimatedHr({
  className = ''
}: {
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-10%'
  })

  return (
    <div ref={ref} className={`w-full ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{
          duration: 0.9,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        style={{ transformOrigin: 'left' }}
        className="h-px w-full bg-neutral-800"
      />
    </div>
  )
}
