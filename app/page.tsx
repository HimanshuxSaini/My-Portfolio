import { HeroSection } from '@/components/portfolio/hero-section'
import { MarqueeSection } from '@/components/portfolio/marquee-section'
import { AboutSection } from '@/components/portfolio/about-section'
import { ServicesSection } from '@/components/portfolio/services-section'
import { ProjectsSection } from '@/components/portfolio/projects-section'
import { ToolsSection } from '@/components/portfolio/tools-section'
import { FaqSection } from '@/components/portfolio/faq-section'
import { ContactSection } from '@/components/portfolio/contact-section'
import { Footer } from '@/components/portfolio/footer'

export default function Page() {
  return (
    <main className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ToolsSection />
      <ProjectsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
