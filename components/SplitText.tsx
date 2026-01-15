'use client'

import { useEffect, useRef } from 'react'
import { animate, stagger, useInView } from 'framer-motion'
import SplitType from 'split-type'
import type { ElementType } from 'react'

type Props = {
  text: string
  className?: string
  as?: ElementType
  variant?: 'hero' | 'paragraph'
}

export default function SplitText({
  text,
  className = '',
  as: Tag = 'h1',
  variant = 'hero'
}: Props) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  useEffect(() => {
    if (!ref.current || !isInView) return

// Make visible right before animating
    ref.current.style.visibility = 'visible'

    const split = new SplitType(ref.current, {
      types: 'lines',
      lineClass: 'split-line'
    })

    const lines = Array.from(
      ref.current.querySelectorAll('.split-line')
    ).map(line => {
      if (!line.firstElementChild) {
        const span = document.createElement('span')
        span.innerHTML = line.innerHTML
        line.innerHTML = ''
        line.appendChild(span)
      }
      return line.firstElementChild as HTMLElement
    })

    const isParagraph = variant === 'paragraph'

    animate(
      lines,
      {
        opacity: [0, 1],
        transform: [
          `translateY(${isParagraph ? 50 : 54}px)`,
          `translateY(${isParagraph ? -10 : -5}px)`,

        ]
      },
      {
        duration: isParagraph ? 1.1 : 0.85,
        delay: stagger(isParagraph ? 0.04 : 0.07),
        ease: [0.25, 0.1, 0.25, 1]
      }
    )

    return () => split.revert()
  }, [isInView, variant])

  return (
    <Tag ref={ref} className={className}>
      {text}
    </Tag>
  )
}
