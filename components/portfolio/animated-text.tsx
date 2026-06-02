'use client'

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

function Char({
  char,
  range,
  progress,
}: {
  char: string
  range: [number, number]
  progress: MotionValue<number>
}) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  )
}

export function AnimatedText({
  text,
  className,
  style,
}: {
  text: string
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(' ')
  let charIndex = 0
  const totalChars = text.length

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wIdx) => {
        // Add space back to word if it's not the last one
        const hasSpace = wIdx !== words.length - 1
        const wordChars = word.split('')
        
        return (
          <span key={wIdx} className="inline-block">
            {wordChars.map((char, cIdx) => {
              const start = charIndex / totalChars
              const end = (charIndex + 1) / totalChars
              charIndex++
              return (
                <Char
                  key={cIdx}
                  char={char}
                  range={[start, end]}
                  progress={scrollYProgress}
                />
              )
            })}
            {hasSpace && (() => {
              const start = charIndex / totalChars
              const end = (charIndex + 1) / totalChars
              charIndex++
              return (
                <Char
                  key="space"
                  char=" "
                  range={[start, end]}
                  progress={scrollYProgress}
                />
              )
            })()}
          </span>
        )
      })}
    </p>
  )
}
