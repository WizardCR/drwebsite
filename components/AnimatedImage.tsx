'use client'

import { motion } from 'framer-motion'

type Direction = 'left' | 'right' | 'top' | 'bottom'

const clipVariants = {
  left: {
    hidden: { clipPath: 'inset(0 100% 0 0)' },
    visible: { clipPath: 'inset(0 0 0 0)' }
  },
  right: {
    hidden: { clipPath: 'inset(0 0 0 100%)' },
    visible: { clipPath: 'inset(0 0 0 0)' }
  },
  top: {
    hidden: { clipPath: 'inset(0 0 100% 0)' },
    visible: { clipPath: 'inset(0 0 0 0)' }
  },
  bottom: {
    hidden: { clipPath: 'inset(100% 0 0 0)' },
    visible: { clipPath: 'inset(0 0 0 0)' }
  }
}

export default function AnimatedImage({
  src,
  alt,
  direction = 'bottom',
  index = 0
}: {
  src: string
  alt: string
  direction?: Direction
  index?: number
}) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className="w-full h-auto object-cover"
      variants={clipVariants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '20%' }}
      transition={{
        duration: 1.3,
        delay: index * 1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    />
  )
}
