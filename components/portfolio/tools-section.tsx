'use client'

import { motion } from 'framer-motion'
import { FadeIn } from './primitives'

const TOOL_CATEGORIES = [
  {
    category: 'Frontend',
    color: '#B600A8',
    tools: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Material UI', level: 75 },
    ],
  },
  {
    category: 'Backend',
    color: '#7621B0',
    tools: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 82 },
      { name: 'MongoDB', level: 88 },
    ],
  },
  {
    category: 'Tools & Others',
    color: '#BE4C00',
    tools: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Postman', level: 80 },
      { name: 'Antigravity IDE', level: 85 },
      { name: 'CLI', level: 80 },
    ],
  },
  {
    category: 'Languages',
    color: '#0084FF',
    tools: [
      { name: 'C', level: 80 },
      { name: 'C++', level: 85 },
    ],
  },
  {
    category: 'AI & Productivity Tools',
    color: '#00B86B',
    tools: [
      { name: 'ChatGPT', level: 90 },
      { name: 'GitHub Copilot', level: 85 },
      { name: 'Cursor', level: 80 },
      { name: 'Claude', level: 85 },
      { name: 'Gemini', level: 80 },
      { name: 'Notion', level: 90 },
    ],
  },
]

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[#D7E2EA]/80">{name}</span>
        <span className="text-xs font-black text-[#D7E2EA]/40">{level}%</span>
      </div>
      <div className="h-0.5 w-full overflow-hidden rounded-full bg-[#D7E2EA]/10">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        />
      </div>
    </div>
  )
}

export function ToolsSection() {
  return (
    <section
      id="tools"
      className="relative overflow-hidden bg-[#0C0C0C] px-5 py-24 sm:px-8 sm:py-32 md:px-10 md:py-40"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#D7E2EA 1px, transparent 1px), linear-gradient(90deg, #D7E2EA 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <FadeIn y={40} className="mb-16 text-center md:mb-24">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B600A8]">
            My Arsenal
          </span>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 140px)' }}
          >
            Tools
          </h2>
        </FadeIn>

        {/* Categories grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {TOOL_CATEGORIES.map((cat, catIdx) => (
            <FadeIn key={cat.category} delay={catIdx * 0.1} y={30}>
              <div
                className="flex flex-col gap-6 rounded-2xl border border-[#D7E2EA]/8 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#D7E2EA]/15 md:p-8"
              >
                {/* Category header */}
                <div className="flex items-center gap-3">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                  />
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D7E2EA]/50">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill bars */}
                <div className="flex flex-col gap-4">
                  {cat.tools.map((tool) => (
                    <SkillBar
                      key={tool.name}
                      name={tool.name}
                      level={tool.level}
                      color={cat.color}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
