'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'

const EASE = [0.25, 0.1, 0.25, 1] as const

// ─── FadeIn ────────────────────────────────────────────────────────────────
type FadeInProps = {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  as?: keyof typeof motion
  className?: string
  style?: React.CSSProperties
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  style,
}: FadeInProps) {
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: EASE }}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  )
}

// ─── Magnet ────────────────────────────────────────────────────────────────
type MagnetProps = {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
  style?: React.CSSProperties
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
  style,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      const withinX = Math.abs(distX) < rect.width / 2 + padding
      const withinY = Math.abs(distY) < rect.height / 2 + padding
      if (withinX && withinY) {
        setActive(true)
        setPos({ x: distX / strength, y: distY / strength })
      } else {
        setActive(false)
        setPos({ x: 0, y: 0 })
      }
    }

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return
      // gamma is left-to-right tilt in degrees, where right is positive
      // beta is front-to-back tilt in degrees, where front is positive
      const gamma = Math.max(-45, Math.min(45, e.gamma))
      const beta = Math.max(0, Math.min(90, e.beta)) - 45 // Assume 45 degrees is standard resting position
      
      // Calculate distances for a smooth parallax
      const distX = gamma * 4
      const distY = beta * 4

      setActive(true)
      setPos({ x: distX / strength, y: distY / strength })
    }

    window.addEventListener('mousemove', handleMove)
    if (typeof window !== 'undefined' && window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleDeviceOrientation)
    }

    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (typeof window !== 'undefined' && window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleDeviceOrientation)
      }
    }
  }, [padding, strength])

  return (
    <div ref={ref} className={className} style={style}>
      <div
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          transition: active ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}

// ─── ContactButton ─────────────────────────────────────────────────────────
export function ContactButton({ className = '' }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`inline-block rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow:
          '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid #ffffff',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </a>
  )
}

// ─── LiveProjectButton ─────────────────────────────────────────────────────
export function LiveProjectButton({
  className = '',
  href = '#',
}: {
  className?: string
  href?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-base ${className}`}
    >
      Live Project
    </a>
  )
}

// ─── CursorFollower ────────────────────────────────────────────────────────
export function CursorFollower() {
  const [pos, setPos] = useState({ x: -300, y: -300 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const onLeave = () => setVisible(false)
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [visible])

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] rounded-full"
      style={{
        width: 320,
        height: 320,
        background:
          'radial-gradient(circle, rgba(182,0,168,0.10) 0%, rgba(118,33,176,0.05) 50%, transparent 70%)',
        left: pos.x - 160,
        top: pos.y - 160,
      }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    />
  )
}

// ─── CountUp ───────────────────────────────────────────────────────────────
export function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const startTime = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * to))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [to])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
