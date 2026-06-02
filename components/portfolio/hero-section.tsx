'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ContactButton, CountUp, CursorFollower, FadeIn, Magnet } from './primitives'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Tools', href: '#tools' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const STATS = [
  { value: 1, suffix: '+', label: 'Years Exp.' },
  { value: 10, suffix: '+', label: 'Projects Done' },
  { value: 3, suffix: '+', label: 'Internships' },
]

export function HeroSection() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        // Find all intersecting entries
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      // Use a horizontal line in the middle of the screen to detect active section.
      // This fixes the issue with the 800vh tall projects section never reaching a 0.4 threshold.
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── Cursor follower (desktop only) ── */}
      <CursorFollower />

      {/* ── Fixed Navbar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 md:px-10 md:py-5 transition-all duration-500"
        style={
          scrolled
            ? {
                background: 'rgba(12,12,12,0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderBottom: '1px solid rgba(215,226,234,0.07)',
              }
            : {}
        }
      >
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-black uppercase tracking-widest text-[#D7E2EA] transition-opacity hover:opacity-80 md:text-base"
        >
          Himanshu<span style={{ color: '#B600A8' }}>.</span>
        </a>

        {/* Nav links */}
        <nav className="flex items-center gap-3 sm:gap-6 md:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-[10px] font-medium uppercase tracking-wider text-[#D7E2EA]/70 transition-colors duration-200 hover:text-[#D7E2EA] sm:text-sm md:text-base"
              style={
                activeSection === link.href.slice(1)
                  ? { color: '#D7E2EA' }
                  : {}
              }
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ background: '#B600A8' }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Availability badge */}
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="glow-pulse relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-green-400">
            Available
          </span>
        </div>
      </motion.header>

      {/* ── Hero Section ── */}
      <section
        className="relative flex h-screen flex-col pt-20"
        style={{ overflowX: 'clip' }}
      >
        {/* Subtle radial background glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(182,0,168,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Hero heading */}
        <div className="flex flex-1 items-center justify-center px-6 md:px-10">
          <FadeIn delay={0.15} y={40} className="w-full text-center">
            <h1 className="hero-heading w-full whitespace-nowrap text-[9.5vw] font-black uppercase leading-none tracking-tight sm:text-[10vw] md:text-[10.5vw] lg:text-[11vw]">
              Hi, i&apos;m himanshu
            </h1>
          </FadeIn>
        </div>

        {/* Bottom bar: description + contact */}
        <div className="mt-auto flex items-end justify-between px-6 pb-4 sm:pb-6 md:px-10 md:pb-6">
          <FadeIn delay={0.35} y={20}>
            <p
              className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[280px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.35rem)' }}
            >
              A full-stack web developer driven by crafting scalable and modern digital experiences
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>

        {/* Stats row */}
        <FadeIn
          delay={0.65}
          y={20}
          className="flex flex-wrap gap-4 px-6 pb-8 sm:gap-8 md:gap-14 md:px-10 md:pb-10"
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <span
                className="font-black text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}
              >
                <CountUp to={s.value} suffix={s.suffix} />
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#D7E2EA]/40 sm:text-[10px]">
                {s.label}
              </span>
            </div>
          ))}
        </FadeIn>

        {/* Portrait */}
        <FadeIn
          delay={0.6}
          y={30}
          className="absolute left-1/2 top-1/2 z-10 w-[260px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[340px] sm:translate-y-0 md:w-[420px] lg:w-[500px]"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.png"
              alt="Himanshu Saini, Full-Stack Web Developer"
              className="w-full select-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 right-6 z-20 flex flex-col items-center gap-1.5 md:right-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <span
            className="font-medium uppercase tracking-[0.2em] text-[#D7E2EA]/25"
            style={{ fontSize: '9px' }}
          >
            Scroll
          </span>
          <div className="h-7 w-px bg-gradient-to-b from-[#D7E2EA]/25 to-transparent" />
        </motion.div>
      </section>
    </>
  )
}
