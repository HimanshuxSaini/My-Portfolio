'use client'

import { motion } from 'framer-motion'
import { FadeIn } from './primitives'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rakesh Sharma',
    role: 'Founder',
    company: 'Karigiri Woolens',
    stars: 5,
    quote:
      "Himanshu built an incredible full-stack platform for our woolen products. The custom booking system he developed using the MERN stack is flawless. His technical skills and speed of delivery completely exceeded our expectations.",
    avatar: 'RS',
    color: '#B600A8',
  },
  {
    id: 2,
    name: 'Ananya Patel',
    role: 'Product Manager',
    company: 'Sipzing AI',
    stars: 5,
    quote:
      'Working with Himanshu on our frontend was a fantastic experience. He seamlessly integrated complex AI tools and built a stunning 3D UI in Next.js that makes our product feel incredibly premium and modern.',
    avatar: 'AP',
    color: '#7621B0',
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Operations Head',
    company: 'NextBuy eCommerce',
    stars: 5,
    quote:
      'We needed a robust, scalable e-commerce architecture and Himanshu delivered exactly that. The platform runs incredibly smooth, and the frontend design is pixel-perfect. A brilliant developer with a great eye for design.',
    avatar: 'VS',
    color: '#BE4C00',
  },
  {
    id: 4,
    name: 'Neha Gupta',
    role: 'Marketing Director',
    company: 'TechNova Solutions',
    stars: 5,
    quote:
      "Himanshu is our absolute go-to full-stack developer. Whether it's setting up complex databases or crafting responsive UI/UX designs, he handles it all with extreme professionalism. He's an invaluable asset to any project.",
    avatar: 'NG',
    color: '#B600A8',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0C0C0C] px-5 py-24 sm:px-8 sm:py-32 md:px-10"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(118,33,176,0.5) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <FadeIn y={40} className="mb-16 text-center md:mb-20">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B600A8]">
            What clients say
          </span>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
          >
            Reviews
          </h2>
        </FadeIn>

        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.1} y={30}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(182,0,168,0.25)' }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-5 rounded-2xl border border-[#D7E2EA]/8 bg-white/[0.03] p-6 md:p-8"
              >
                {/* Stars */}
                <StarRating count={t.stars} />

                {/* Quote */}
                <blockquote className="flex-1 font-light leading-relaxed text-[#D7E2EA]/75"
                  style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)' }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Divider */}
                <div
                  className="h-px w-full"
                  style={{ background: 'rgba(215,226,234,0.08)' }}
                />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-black text-white"
                    style={{
                      background: `linear-gradient(135deg, ${t.color} 0%, ${t.color}88 100%)`,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#D7E2EA]">{t.name}</p>
                    <p className="text-xs text-[#D7E2EA]/40">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
