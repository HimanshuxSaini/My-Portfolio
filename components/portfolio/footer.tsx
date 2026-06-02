'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FadeIn } from './primitives'

export function Footer() {
  const [year, setYear] = useState(2026)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-[#D7E2EA]/10 bg-[#0C0C0C] px-6 py-12 md:px-10 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
        
        {/* Left: Branding & Copyright */}
        <FadeIn y={20} className="flex flex-col items-center gap-2 md:items-start">
          <a
            href="#"
            className="text-lg font-black uppercase tracking-widest text-[#D7E2EA] transition-opacity hover:opacity-80"
          >
            Himanshu<span style={{ color: '#B600A8' }}>.</span>
          </a>
          <p className="text-xs font-medium text-[#D7E2EA]/40">
            © {year} All rights reserved.
          </p>
        </FadeIn>

        {/* Center: Scroll to top (Mobile only) */}
        <div className="md:hidden">
          <button
            onClick={scrollToTop}
            className="rounded-full border border-[#D7E2EA]/15 bg-white/5 p-3 text-[#D7E2EA]/60 transition-colors hover:text-[#D7E2EA]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Right: Quick Links */}
        <FadeIn delay={0.1} y={20} className="flex flex-col items-center gap-6 md:items-end md:gap-4">
          <div className="flex gap-6">
            <a href="#about" className="text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/60 transition-colors hover:text-[#D7E2EA]">About</a>
            <a href="#projects" className="text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/60 transition-colors hover:text-[#D7E2EA]">Projects</a>
            <a href="#tools" className="text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/60 transition-colors hover:text-[#D7E2EA]">Tools</a>
          </div>

          <button
            onClick={scrollToTop}
            className="hidden items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#B600A8] transition-all hover:gap-3 hover:text-white md:flex"
          >
            Back to top
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </FadeIn>
      </div>
    </footer>
  )
}
