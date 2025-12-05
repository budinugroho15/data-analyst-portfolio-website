'use client'

import { Navigation } from '@/components/portfolio/Navigation'
import { HeroSection } from '@/components/portfolio/HeroSection'
import { SkillsSection } from '@/components/portfolio/SkillsSection'
import { CertificatesSection } from '@/components/portfolio/CertificatesSection'
import { ProjectsSection } from '@/components/portfolio/ProjectsSection'
import { InternshipsSection } from '@/components/portfolio/InternshipsSection'
import { ContactSection } from '@/components/portfolio/ContactSection'
import { Footer } from '@/components/portfolio/Footer'
import { DataAnalyticsBackground } from '@/components/portfolio/DataAnalyticsBackground'

export default function Home() {
  return (
    <div className="relative min-h-screen text-[#0F172A]">
      <DataAnalyticsBackground />
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <CertificatesSection />
      <ProjectsSection />
      <InternshipsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}