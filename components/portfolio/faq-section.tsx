'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from './primitives'

const FAQS = [
  {
    question: 'What is your typical turnaround time?',
    answer:
      'It depends on the complexity of the project. A standard landing page takes 1-2 weeks, while a full-stack MERN application can take 4-8 weeks. I always provide a clear timeline before we begin.',
  },
  {
    question: 'Do you handle both design and development?',
    answer:
      'Yes! I handle the entire product lifecycle from UI/UX design to full-stack development using Next.js, React, and Node.js. You get a complete, production-ready product without needing to hire a separate designer.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer:
      'My core stack is the MERN stack (MongoDB, Express.js, React.js, Node.js) along with Next.js, TypeScript, and TailwindCSS. I also integrate modern AI tools and WebGL/3D interfaces when needed to make your product stand out.',
  },
  {
    question: 'Do you work with agencies or startups?',
    answer:
      "Both! I've worked closely with startups to build their MVPs from scratch, and I also collaborate with established agencies as a specialized full-stack developer to help them deliver high-quality code faster.",
  },
  {
    question: 'What is your pricing model?',
    answer:
      "I offer both project-based pricing for clear, scoped builds and hourly/retainer rates for ongoing development. Let's hop on a call or send me a message through the contact form to discuss your specific needs and budget.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#0C0C0C] px-5 py-24 sm:px-8 sm:py-32 md:px-10"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(182,0,168,0.5) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Heading */}
        <FadeIn y={40} className="mb-16 text-center md:mb-20">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B600A8]">
            Got Questions?
          </span>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            FAQ
          </h2>
        </FadeIn>

        {/* Accordion list */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i

            return (
              <FadeIn key={i} delay={i * 0.1} y={20}>
                <div
                  className={`group rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-[#B600A8]/30 bg-white/[0.04]'
                      : 'border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02]'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 p-6 text-left sm:p-8"
                  >
                    <span
                      className={`text-lg font-medium tracking-wide transition-colors sm:text-xl md:text-2xl ${
                        isOpen ? 'text-[#D7E2EA]' : 'text-[#D7E2EA]/70 group-hover:text-[#D7E2EA]'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`relative flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-10 sm:w-10 ${
                        isOpen
                          ? 'border-[#B600A8]/50 bg-[#B600A8]/10 text-[#B600A8]'
                          : 'border-white/10 bg-transparent text-[#D7E2EA]/50 group-hover:border-white/20 group-hover:text-[#D7E2EA]'
                      }`}
                    >
                      <motion.svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </motion.svg>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8">
                          <p className="max-w-3xl font-light leading-relaxed text-[#D7E2EA]/60 sm:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
