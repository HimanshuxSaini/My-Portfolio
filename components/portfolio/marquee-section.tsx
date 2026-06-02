'use client'

const LOGOS = [
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', invert: true },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Supabase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
  { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'VS Code', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
  { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
]

const ROW1_ITEMS = LOGOS.slice(0, 9)
const ROW2_ITEMS = LOGOS.slice(9)

function Tile({ logo }: { logo: typeof LOGOS[0] }) {
  return (
    <div
      className="flex h-24 w-24 sm:h-32 sm:w-32 flex-shrink-0 flex-col items-center justify-center gap-3 rounded-2xl bg-white/[0.03] border border-[#D7E2EA]/5 transition-all duration-300 hover:bg-white/[0.08] hover:scale-105"
      style={{
        boxShadow: 'inset 0 0 20px rgba(182,0,168,0)',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.boxShadow =
          'inset 0 0 20px rgba(182,0,168,0.1)'
        ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(182,0,168,0.3)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.boxShadow =
          'inset 0 0 20px rgba(182,0,168,0)'
        ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(215,226,234,0.05)'
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={logo.name}
        className="h-10 w-10 sm:h-14 sm:w-14 object-contain"
        style={{ filter: logo.invert ? 'invert(1) brightness(2)' : 'none' }}
      />
      <span className="text-[10px] font-medium tracking-wider text-[#D7E2EA]/60 uppercase">
        {logo.name}
      </span>
    </div>
  )
}

function MarqueeRow({ items, reverse = false }: { items: typeof LOGOS; reverse?: boolean }) {
  const baseClasses =
    'flex min-w-full shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4 md:gap-5 md:pr-5'
  const animationClass = reverse ? 'animate-marquee-right' : 'animate-marquee-left'

  return (
    <div className="flex overflow-hidden group">
      <div className={`${baseClasses} ${animationClass} group-hover:[animation-play-state:paused]`}>
        {items.map((logo, i) => (
          <Tile key={`original-${i}`} logo={logo} />
        ))}
        {/* We duplicate the items again inside the same block just in case the screen is super wide */}
        {items.map((logo, i) => (
          <Tile key={`clone1-${i}`} logo={logo} />
        ))}
      </div>
      <div
        className={`${baseClasses} ${animationClass} group-hover:[animation-play-state:paused]`}
        aria-hidden="true"
      >
        {items.map((logo, i) => (
          <Tile key={`clone2-${i}`} logo={logo} />
        ))}
        {items.map((logo, i) => (
          <Tile key={`clone3-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  )
}

export function MarqueeSection() {
  return (
    <section
      className="bg-[#0C0C0C] pb-10 pt-20 sm:pt-28 md:pt-36"
      style={{ overflowX: 'clip' }}
    >
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
      `}</style>

      {/* Label */}
      <div className="mb-10 flex flex-col items-center gap-3 px-6 md:mb-14">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D7E2EA]/40">
          Tech Stack & Tools
        </span>
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#B600A8]/60 to-transparent" />
      </div>

      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
        <MarqueeRow items={ROW1_ITEMS} reverse={false} />
        <MarqueeRow items={ROW2_ITEMS} reverse={true} />
      </div>
    </section>
  )
}
