'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedImage from './AnimatedImage'

type Direction = 'left' | 'right' | 'top' | 'bottom'

const directions: Direction[] = ['left', 'bottom', 'right', 'top']

type WorkItemProps = {
  work: {
    id: string
    title: string
    role: string
    href: string
    imageUrl: string
  }
  index: number
}

export default function WorkItem({ work, index }: WorkItemProps) {
  const direction = directions[index % directions.length]

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4 }}
      className="group break-inside-avoid mb-20 even:mt-24"
    >
      <Link href={work.href} className="block">
        {/* Image */}
        <div className="overflow-hidden rounded-lg">
          <AnimatedImage
            src={work.imageUrl}
            alt={work.title}
            direction={direction}
          />
        </div>

        {/* Meta */}
        <div className="mt-6">
          <h3 className="text-xl font-light leading-tight">
            {work.title}
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            {work.role}
          </p>
        </div>
      </Link>
    </motion.article>
  )
}
