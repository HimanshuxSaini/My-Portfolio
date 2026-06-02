'use client'

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { LiveProjectButton } from './primitives'

type ProjectImage = {
  src: string
  className?: string
  containerClassName?: string
}

type Project = {
  number: string
  name: string
  category: string
  tags: string[]
  year: string
  col1: [ProjectImage | string, ProjectImage | string]
  col2: ProjectImage | string
  url: string
  isGithubCard?: boolean
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Karigiri Woolen Products',
    category: 'Full-Stack',
    tags: ['MERN Stack', 'Firebase', 'Booking System'],
    year: '2026',
    col1: [
      { src: '/karigiri-1.png', className: 'object-contain p-4', containerClassName: 'bg-white' },
      { src: '/karigiri-2.png', className: 'object-contain', containerClassName: 'bg-[#7e9cb1]' }
    ],
    col2: { src: '/karigiri-3.jpg', className: 'object-cover object-top' },
    url: 'https://karigiri.vercel.app/',
  },
  {
    number: '02',
    name: 'Sipzing AI Product',
    category: 'Frontend',
    tags: ['Next.js', 'React', 'AI Tools', '3D UI'],
    year: '2025',
    col1: [
      '/sipzing-1.png',
      '/sipzing-2.png'
    ],
    col2: '/sipzing-3.png',
    url: 'https://sipzing.netlify.app/',
  },
  {
    number: '03',
    name: 'MERN-eCommerce',
    category: 'Full-Stack',
    tags: ['React.js', 'TailwindCSS', 'MongoDB'],
    year: '2024',
    col1: [
      { src: '/nextbuy-1.png' },
      { src: '/nextbuy-2.png', className: 'object-contain', containerClassName: 'bg-[#0f1115]' }
    ],
    col2: { src: '/nextbuy-3.png' },
    url: '#',
  },
  {
    number: '04',
    name: 'More Projects',
    category: 'Open Source',
    tags: ['GitHub', 'Repositories', 'Code'],
    year: '2026',
    col1: ['', ''], // Dummy data, won't be rendered
    col2: '',
    url: 'https://github.com/HimanshuxSaini',
    isGithubCard: true,
  }
]

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]'

// px height of the "peek strip" that shows for buried cards (their header row)
const PEEK_PX = 90

function ProjectCard({
  project,
  index,
  total,
  progress,
  stageHeight, // actual pixel height of the sticky stage, so we can start cards below it
}: {
  project: Project
  index: number
  total: number
  progress: MotionValue<number>
  stageHeight: number
}) {
  /**
   * Timeline (as fraction of container's scrollYProgress):
   *
   *   Card[i-1] reading zone ends at:  i/total
   *   Card[i] slide starts at:         i/total - SLIDE  (begins just before zone ends)
   *   Card[i] slide completes at:      i/total           (done RIGHT when zone ends)
   *
   * This means zero delay — by the time card[i-1] ends, card[i] is already fully in.
   */
  const SLIDE = 0.06 // 6% of total progress = fast, snappy entry

  // card 0 never moves; all others start below the stage and slide up
  const slideStart = index === 0 ? 0 : index / total - SLIDE
  const slideEnd = index === 0 ? 0 : index / total

  // Everything in px — no unit mixing, Framer Motion interpolates cleanly
  const startY = stageHeight // card starts just below the visible stage
  const endY = index * PEEK_PX // final resting y position (peek offset from top)

  const y = useTransform(
    progress,
    index === 0 ? [0, 1] : [slideStart, slideEnd],
    index === 0 ? [0, 0] : [startY, endY],
  )

  /**
   * Card height = stageHeight - (index * PEEK_PX)
   *
   * When card[i] rests at y = i * PEEK_PX its bottom is:
   *   top(y) + height = i*PEEK + (stageH - i*PEEK) = stageH  ← exactly the stage bottom ✓
   *
   * This prevents overflow:hidden from cutting off the card's bottom edge.
   */
  const cardHeight = stageHeight > 0 ? stageHeight - index * PEEK_PX : undefined

  return (
    <motion.div
      style={{ y, zIndex: index + 1, height: cardHeight }}
      className={`absolute inset-x-0 top-0 ${RADIUS} border-2 border-[#D7E2EA] bg-[#0C0C0C] flex flex-col p-4 sm:p-6 md:p-8`}
    >
      {/* Header row — always visible as peek strip when card is buried */}
      <div className="mb-4 flex flex-shrink-0 flex-wrap items-center justify-between gap-4 sm:mb-6 md:mb-8">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <span
            className="hero-heading font-black leading-none"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            {project.number}
          </span>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                {project.category}
              </span>
              <span className="rounded-full border border-[#B600A8]/30 bg-[#B600A8]/10 px-2 py-0.5 text-[10px] font-bold text-[#B600A8]">
                {project.year}
              </span>
            </div>
            <span
              className="font-medium uppercase text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2rem)' }}
            >
              {project.name}
            </span>
            <div className="mt-1 hidden gap-2 sm:flex">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/40">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <LiveProjectButton href={project.url} />
      </div>

      {project.isGithubCard ? (
        <div className="group flex flex-1 flex-col items-center justify-center gap-6 rounded-3xl border border-white/10 bg-[#121826] text-center transition-colors hover:border-[#B600A8]/30">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-20 w-20 text-[#D7E2EA] transition-transform duration-500 group-hover:scale-110 group-hover:text-[#B600A8]">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <div>
            <h3 className="hero-heading text-3xl font-black uppercase tracking-tight text-[#D7E2EA] sm:text-4xl md:text-5xl">
              Check out my GitHub
            </h3>
            <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-[#D7E2EA]/60">
              For more open-source projects, tools, and code snippets, visit my GitHub profile.
            </p>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#D7E2EA] transition-all hover:scale-105 hover:bg-[#B600A8] hover:border-[#B600A8] hover:text-white"
          >
            Visit Profile
          </a>
        </div>
      ) : (
        <div className="group flex min-h-0 flex-1 gap-3 sm:gap-4 md:gap-6">
          <div className="flex w-2/5 flex-col gap-3 sm:gap-4 md:gap-6">
            <div className={`${RADIUS} w-full flex-1 min-h-0 relative overflow-hidden ${typeof project.col1[0] !== 'string' && project.col1[0].containerClassName ? project.col1[0].containerClassName : ''}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={typeof project.col1[0] === 'string' ? project.col1[0] : project.col1[0].src || '/placeholder.svg'}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.01] ${typeof project.col1[0] !== 'string' && project.col1[0].className ? project.col1[0].className : 'object-cover'}`}
              />
            </div>
            <div className={`${RADIUS} w-full flex-[1.4] min-h-0 relative overflow-hidden ${typeof project.col1[1] !== 'string' && project.col1[1].containerClassName ? project.col1[1].containerClassName : ''}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={typeof project.col1[1] === 'string' ? project.col1[1] : project.col1[1].src || '/placeholder.svg'}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.01] ${typeof project.col1[1] !== 'string' && project.col1[1].className ? project.col1[1].className : 'object-cover'}`}
              />
            </div>
          </div>
          <div className={`${RADIUS} w-3/5 min-h-0 relative overflow-hidden ${typeof project.col2 !== 'string' && project.col2.containerClassName ? project.col2.containerClassName : ''}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={typeof project.col2 === 'string' ? project.col2 : project.col2.src || '/placeholder.svg'}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.01] ${typeof project.col2 !== 'string' && project.col2.className ? project.col2.className : 'object-cover'}`}
            />
          </div>
        </div>
      )}
    </motion.div>
  )
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  // Measure the actual pixel height of the sticky stage so cards can
  // start exactly below it (avoids mixing 'vh' and 'px' in useTransform)
  const [stageHeight, setStageHeight] = useState(800)
  useEffect(() => {
    const measure = () => {
      if (stageRef.current) setStageHeight(stageRef.current.offsetHeight)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const total = PROJECTS.length

  // Each card gets 200vh of "reading time" in the scroll runway.
  // After a card's zone ends, the next card slides up over it.
  const VH_PER_CARD = 200
  const containerHeightVh = total * VH_PER_CARD

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <h2
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </h2>

      {/* Scroll runway — provides the scroll distance for all card transitions */}
      <div
        ref={containerRef}
        className="mx-auto max-w-6xl"
        style={{ height: `${containerHeightVh}vh` }}
      >
        {/*
          Sticky stage — stays pinned while the runway scrolls.
          All cards live here as `position: absolute`.
          overflow:hidden clips cards before they slide in.
        */}
        <div
          ref={stageRef}
          className="sticky overflow-hidden"
          style={{ top: '5rem', height: '82vh' }}
        >
          <div className="relative h-full">
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.number}
                project={project}
                index={i}
                total={total}
                progress={scrollYProgress}
                stageHeight={stageHeight}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
