'use client'

import { motion } from 'framer-motion'
import { AnimatedText } from './animated-text'
import { ContactButton, FadeIn } from './primitives'

const ABOUT_TEXT =
  "Dedicated and passionate Web Developer with strong problem-solving skills and a keen interest in building responsive, user-friendly, and modern web applications. Quick learner with the ability to adapt to new challenges and technologies while delivering high-quality results through creativity, teamwork, and continuous improvement."

const SKILLS = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Firebase',
  'C++',
]

const TIMELINE = [
  { year: '2022', label: 'Started B.Tech (CSE) at GIET' },
  { year: 'Jun 24', label: 'Web Dev Intern at OctaNet Pvt. Ltd.' },
  { year: 'Aug 24', label: 'Web Dev Intern at Oasis Infobyte' },
  { year: 'Jul 25', label: 'Web Dev Intern at Webunitech' },
  { year: '2026', label: 'Expected Graduation' },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 md:px-10 md:py-40"
    >
      {/* Background decorative glow */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(182,0,168,0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Decorative corner images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="pointer-events-none absolute left-[1%] top-[4%] w-[100px] sm:left-[2%] sm:w-[140px] md:left-[4%] md:w-[180px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" className="w-full" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="pointer-events-none absolute right-[1%] top-[4%] w-[100px] sm:right-[2%] sm:w-[140px] md:right-[4%] md:w-[180px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="" className="w-full" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="pointer-events-none absolute bottom-[8%] left-[3%] w-[80px] sm:left-[6%] sm:w-[120px] md:left-[10%] md:w-[160px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="" className="w-full" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="pointer-events-none absolute bottom-[8%] right-[3%] w-[100px] sm:right-[6%] sm:w-[140px] md:right-[10%] md:w-[180px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="" className="w-full" />
      </FadeIn>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="mb-16 text-center md:mb-20">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 140px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Bio + Skills */}
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20">
          {/* Left: Bio */}
          <div className="flex flex-col gap-8">
            <AnimatedText
              text={ABOUT_TEXT}
              className="font-medium leading-relaxed text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)' }}
            />

            {/* Skills tags */}
            <FadeIn delay={0.2} y={20}>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06, borderColor: 'rgba(182,0,168,0.7)' }}
                    className="cursor-default rounded-full border border-[#D7E2EA]/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/70 transition-colors duration-200 hover:text-[#D7E2EA]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <ContactButton />
            </FadeIn>
          </div>

          {/* Right: Timeline */}
          <FadeIn delay={0.15} y={30}>
            <div className="flex flex-col gap-0">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#D7E2EA]/40">
                Journey
              </p>
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className="group relative flex gap-5 pb-8 last:pb-0"
                >
                  {/* Vertical line */}
                  {i < TIMELINE.length - 1 && (
                    <div className="absolute left-[19px] top-8 h-full w-px bg-gradient-to-b from-[#D7E2EA]/20 to-transparent" />
                  )}

                  {/* Dot */}
                  <div
                    className="relative mt-1 h-5 w-5 flex-shrink-0 rounded-full border border-[#B600A8]/60 bg-[#0C0C0C] transition-all duration-300 group-hover:bg-[#B600A8]/20"
                    style={{ boxShadow: '0 0 0 3px rgba(182,0,168,0.1)' }}
                  >
                    <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B600A8]" />
                  </div>

                  {/* Content */}
                  <div>
                    <span className="text-xs font-black tracking-widest text-[#B600A8]">
                      {item.year}
                    </span>
                    <p className="mt-0.5 text-sm font-medium text-[#D7E2EA]/70 transition-colors duration-200 group-hover:text-[#D7E2EA]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
