'use client'

import { useState } from 'react'
import { CheckCircle2, Award, ExternalLink, Copy, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { INTERNSHIPS } from '@/data/portfolio-data'
import { SkillsList } from './SkillsList'
import { SectionNavigator } from './SectionNavigator'

export const InternshipsSection = () => {
    const [copiedId, setCopiedId] = useState<string | null>(null)

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        setCopiedId(text)
        setTimeout(() => setCopiedId(null), 2000)
    }

    // Prepare navigation items with SMALL logos (bottom of card)
    // Priority: Big logo (top) > Small logo (bottom) > No logo
    const navigationItems = INTERNSHIPS.map(internship => ({
        id: internship.id,
        title: internship.title,
        // Internships only have small logo at bottom (Rakamin)
        logo: '/logos/rakamin-logo.png',
        logoAlt: 'Rakamin Logo'
    }))

    return (
        <section id="internships" className="py-24 text-[#0F172A]">
            <SectionNavigator sectionId="internships" sectionTitle="Professional Experience" items={navigationItems} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 text-[#0F172A]">Professional Experience</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {INTERNSHIPS.map((internship, index) => (
                        <Card key={index} id={internship.id} className="border-t-0 border-x-[#E2E8F0] border-b-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-200 bg-white text-[#0F172A] relative scroll-mt-24 overflow-hidden group">

                            <CardContent className="p-8">
                                {/* Header Section with Badges */}
                                <div className="pr-36">
                                    <div className="flex items-start gap-3 mb-4">
                                        <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#5D4037] transition-colors duration-200">{internship.title}</h3>
                                    </div>

                                    {/* Two-Row Metadata Layout */}
                                    <div className="space-y-3">
                                        {/* Row 1: Badges */}
                                        <div className="flex items-center gap-2">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-[#EFEBE9] text-[#5D4037] border border-[#D7CCC8]">
                                                <CheckCircle2 className="h-3.5 w-3.5" />
                                                Verified Credential
                                            </span>
                                            {internship.certificateType && (
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]">
                                                    <Award className="h-3.5 w-3.5" />
                                                    {internship.certificateType}
                                                </span>
                                            )}
                                        </div>

                                        {/* Row 2: Date Info & Metrics */}
                                        <div className="flex items-center gap-3 flex-wrap text-sm text-[#64748B]">
                                            {internship.startDate && internship.endDate && (
                                                <span className="font-medium flex items-center gap-1.5">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#5D4037]" />
                                                    {internship.startDate} - {internship.endDate}
                                                </span>
                                            )}
                                            {internship.completionTime && (
                                                <span className="font-medium text-[#5D4037] bg-[#EFEBE9] px-2 py-0.5">
                                                    {internship.completionTime}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mt-6 text-justify">
                                    <p className="text-[#475569] leading-relaxed text-[15px]">{internship.description}</p>
                                </div>

                                {/* Skills Section with Smart Show More */}
                                {internship.skills && <SkillsList skills={internship.skills} />}

                                {/* Bottom action bar - flush to card edges */}
                                <div className="mt-8 -mx-8 -mb-8 pl-0 pr-8 flex items-center justify-between flex-wrap gap-4">
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <Button
                                            className="bg-[#5D4037] hover:bg-[#B87333] text-white px-6 py-2 h-10 shadow-sm hover:shadow transition-all duration-200"
                                            asChild
                                        >
                                            <a href={internship.verificationUrl || '#'} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-4 w-4 mr-2" />
                                                View Certificate
                                            </a>
                                        </Button>

                                        {internship.credentialId && (
                                            <div className="flex items-center gap-2 bg-white px-3 py-1.5 border border-[#E2E8F0]">
                                                <span className="text-xs text-[#64748B] font-medium">ID:</span>
                                                <span className="text-xs font-mono font-semibold text-[#0F172A]">{internship.credentialId}</span>
                                                <button
                                                    onClick={() => copyToClipboard(internship.credentialId!)}
                                                    className="ml-2 text-[#64748B] hover:text-[#B87333] transition-colors duration-200 focus:outline-none"
                                                    title="Copy ID"
                                                >
                                                    {copiedId === internship.credentialId ? (
                                                        <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                                                    ) : (
                                                        <Copy className="h-3.5 w-3.5" />
                                                    )}
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {internship.platform && (
                                        <div className="flex items-center gap-2">
                                            <span className="text-[#64748B] text-xs font-medium tracking-wide">Visit Official Page</span>
                                            <ArrowRight className="h-3.5 w-3.5 text-[#64748B]" />
                                            <a
                                                href="https://www.rakamin.com/virtual-internship-experience/kimiafarma-big-data-analytics-virtual-internship-program"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:opacity-80 transition-opacity duration-200"
                                            >
                                                <img
                                                    src="/logos/rakamin-logo.png"
                                                    alt="Rakamin Logo"
                                                    className="h-4 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200"
                                                />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
