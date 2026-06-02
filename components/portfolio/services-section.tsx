'use client'

import { motion } from 'framer-motion'

const SERVICES = [
  {
    number: '01',
    name: 'Frontend Development',
    price: 'React / Next.js',
    description: 'Building modern, interactive, and responsive user interfaces with seamless animations and optimal performance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: '02',
    name: 'Backend Architecture',
    price: 'Node.js / Express',
    description: 'Designing scalable APIs and robust server-side logic to power complex web applications securely.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    number: '03',
    name: 'Full-Stack Solutions',
    price: 'MERN Stack',
    description: 'Delivering end-to-end web platforms seamlessly integrating powerful frontends with scalable backend systems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
  },
  {
    number: '04',
    name: 'Database Architecture',
    price: 'MongoDB / PostgreSQL',
    description: 'Structuring and optimizing efficient databases to manage large-scale data securely and efficiently.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0v3.75C20.25 19.903 16.556 21.75 12 21.75s-8.25-1.847-8.25-4.125v-3.75" />
      </svg>
    ),
  },
  {
    number: '05',
    name: 'UI/UX Design',
    price: 'Figma / Tailwind',
    description: 'Crafting intuitive user experiences with fast production workflows using AI tools, focusing on aesthetics and user-centric flows.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: '06',
    name: 'API Development',
    price: 'REST / Graphql',
    description: 'Engineering robust and secure APIs to facilitate smooth communication between microservices and external platforms.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#1a1a1a] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="hero-heading uppercase tracking-tight text-[#D7E2EA]" style={{ fontSize: 'clamp(2.5rem, 8vw, 80px)' }}>
              Core
              <br />
              Capabilities
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-[#D7E2EA]/70">
              Transforming complex problems into elegant, scalable digital solutions using modern web technologies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={service.number}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#0C0C0C] p-8 transition-all duration-300 hover:bg-[#1a1a1a]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#B600A8]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative z-10 flex flex-col gap-8">
                <div className="flex items-center justify-between text-[#D7E2EA]/50 transition-colors duration-300 group-hover:text-[#B600A8]">
                  <span className="text-sm font-medium">{service.number}</span>
                  {service.icon}
                </div>

                <div>
                  <h3 className="mb-2 text-2xl font-bold uppercase tracking-tight text-[#D7E2EA] sm:text-3xl">
                    {service.name}
                  </h3>
                  <div className="mb-4 inline-block rounded-full border border-[#D7E2EA]/10 bg-[#D7E2EA]/5 px-3 py-1 text-xs uppercase tracking-widest text-[#D7E2EA]/70">
                    {service.price}
                  </div>
                  <p className="text-sm leading-relaxed text-[#D7E2EA]/60 sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
