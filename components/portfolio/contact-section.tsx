'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FadeIn } from './primitives'

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/HimanshuxSaini',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/himanshusaini7988/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

const PROJECT_TYPES = [
  'Frontend Development',
  'Backend Development',
  'Full-Stack App',
  'UI/UX Design',
  'AI Integration',
  'Other',
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formState, setFormState] = useState<FormState>('idle')

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.projectType) e.projectType = 'Please select a project type'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 20) e.message = 'Message too short (min 20 chars)'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setFormState('loading')

    try {
      // Using FormSubmit.co for zero-setup email forwarding
      const res = await fetch('https://formsubmit.co/ajax/780bf2ac30f6470bfa92db011962da9b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          projectType: form.projectType,
          message: form.message,
          _subject: `New Portfolio Inquiry from ${form.name}`,
        }),
      })

      if (res.ok) {
        setFormState('success')
        setForm({ name: '', email: '', projectType: '', message: '' })
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  const inputClass =
    'w-full rounded-xl border border-[#D7E2EA]/10 bg-white/5 px-5 py-3.5 text-sm text-[#D7E2EA] placeholder-[#D7E2EA]/25 outline-none transition-all duration-200 focus:border-[#B600A8]/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B600A8]/20'

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0C0C0C] px-5 py-24 sm:px-8 sm:py-32 md:px-10 md:py-40"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(ellipse, rgba(182,0,168,0.6) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <FadeIn y={40} className="mb-16 text-center md:mb-20">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B600A8]">
            Let&apos;s connect
          </span>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
          >
            Contact
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — info + socials */}
          <FadeIn delay={0.1} y={30} className="flex flex-col gap-8">
            <div>
              <h3
                className="font-black uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                Let&apos;s Work<br />
                <span style={{ color: '#B600A8' }}>Together.</span>
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-[#D7E2EA]/50 md:text-base">
                Have a project in mind? Fill out the form and I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D7E2EA]/30">
                Email
              </span>
              <a
                href="mailto:himanshu0481@gmail.com"
                className="text-base font-medium text-[#D7E2EA] transition-colors hover:text-[#B600A8]"
              >
                himanshu0481@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D7E2EA]/30">
                Follow me
              </span>
              <div className="mt-3 flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(182,0,168,0.5)' }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2.5 rounded-full border border-[#D7E2EA]/12 bg-white/5 px-4 py-2 text-xs font-medium text-[#D7E2EA]/70 transition-colors hover:text-[#D7E2EA]"
                  >
                    {social.icon}
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.2} y={30}>
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center gap-5 rounded-2xl border border-green-500/20 bg-green-500/5 p-10 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10">
                    <svg className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase text-[#D7E2EA]">Message Sent!</h4>
                    <p className="mt-2 text-sm text-[#D7E2EA]/50">
                      I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setFormState('idle')}
                    className="text-xs font-medium uppercase tracking-widest text-[#B600A8] hover:underline"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  noValidate
                >
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Project type */}
                  <div>
                    <select
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className={`${inputClass} appearance-none`}
                      style={{ backgroundImage: 'none' }}
                    >
                      <option value="" disabled>
                        Project Type
                      </option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-[#1a1a1a]">
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="mt-1 text-xs text-red-400">{errors.projectType}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                    )}
                  </div>

                  {/* Error state */}
                  {formState === 'error' && (
                    <p className="text-xs text-red-400">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={formState === 'loading'}
                    whileHover={{ scale: formState === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: formState === 'loading' ? 1 : 0.98 }}
                    className="relative overflow-hidden rounded-xl py-4 text-sm font-semibold uppercase tracking-widest text-white disabled:opacity-60"
                    style={{
                      background:
                        'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow: '0 4px 20px rgba(182,0,168,0.3)',
                    }}
                  >
                    {formState === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                          className="inline-block h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                        />
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
