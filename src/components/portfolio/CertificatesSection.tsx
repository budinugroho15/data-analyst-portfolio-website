'use client'

import { useState } from 'react'
import { ExternalLink, Award, CheckCircle2, BookOpen, ChevronUp, ChevronDown, Copy, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CERTIFICATES } from '@/data/portfolio-data'
import { SkillsList } from './SkillsList'
import { SectionNavigator } from './SectionNavigator'

export const CertificatesSection = () => {
    const [showCurriculum, setShowCurriculum] = useState<{ [key: number]: boolean }>({})
    const [copiedId, setCopiedId] = useState<string | null>(null)

    const toggleCurriculum = (index: number) => {
        setShowCurriculum(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        setCopiedId(text)
        setTimeout(() => setCopiedId(null), 2000)
    }

    // Prepare navigation items with BIG logos (top of card)
    const navigationItems = CERTIFICATES.map(cert => ({
        id: cert.id,
        title: cert.title,
        logo: cert.issuer === 'IBM' ? '/logos/ibm-logo.png' : cert.issuer === 'MySkill' ? '/logos/my-skill-logo.png' : undefined,
        logoAlt: `${cert.issuer} Logo`
    }))

    return (
        <section id="certificates" className="py-24 text-[#0F172A]">
            <SectionNavigator sectionId="certificates" sectionTitle="Professional Certificate" items={navigationItems} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 text-[#0F172A]">Professional Certificate</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {CERTIFICATES.map((cert, index) => {
                        return (
                            <Card key={index} id={cert.id} className="border-t-0 border-x-[#E2E8F0] border-b-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-200 bg-white text-[#0F172A] relative scroll-mt-24 overflow-hidden group">

                                <CardContent className="p-8">
                                    {/* Certificate Logo - Conditional based on issuer */}
                                    <div className="absolute top-6 right-6">
                                        <div className="w-40 h-20 flex items-center justify-center">
                                            {cert.issuer === 'IBM' ? (
                                                <img
                                                    src="/logos/ibm-logo.png"
                                                    alt="IBM Logo"
                                                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                                                />
                                            ) : cert.issuer === 'MySkill' ? (
                                                <img
                                                    src="/logos/my-skill-logo.png"
                                                    alt="MySkill Logo"
                                                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                                                />
                                            ) : null}
                                        </div>
                                    </div>

                                    {/* Header Section with Badges */}
                                    <div className="pr-48">
                                        <div className="flex items-start gap-3 mb-4">
                                            <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#5D4037] transition-colors duration-200">{cert.title}</h3>
                                        </div>

                                        {/* Two-Row Metadata Layout */}
                                        <div className="space-y-3">
                                            {/* Row 1: Badges */}
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-[#EFEBE9] text-[#5D4037] border border-[#D7CCC8]">
                                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                                    Verified Credential
                                                </span>
                                                {cert.certificateType && (
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]">
                                                        <Award className="h-3.5 w-3.5" />
                                                        {cert.certificateType}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Row 2: Date Info & Metrics */}
                                            <div className="flex items-center gap-3 flex-wrap text-sm text-[#64748B]">
                                                {cert.startDate && cert.endDate && (
                                                    <span className="font-medium flex items-center gap-1.5">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#5D4037]" />
                                                        {cert.startDate === cert.endDate ? cert.startDate : `${cert.startDate} - ${cert.endDate}`}
                                                    </span>
                                                )}
                                                {cert.completionTime && (
                                                    <span className="font-medium text-[#5D4037] bg-[#EFEBE9] px-2 py-0.5">
                                                        {cert.completionTime}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="mt-6 text-justify">
                                        <p className="text-[#475569] leading-relaxed text-[15px]">{cert.description}</p>
                                    </div>

                                    {/* Course Curriculum Accordion */}
                                    {cert.courses && (
                                        <div className="mt-6 border border-[#E2E8F0] overflow-hidden">
                                            <button
                                                onClick={() => toggleCurriculum(index)}
                                                className="w-full flex items-center justify-between px-4 py-3 bg-[#F8FAFC] hover:bg-[#F1F5F9] transition-colors duration-200"
                                            >
                                                <div className="flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
                                                    <BookOpen className="h-4 w-4 text-[#5D4037]" />
                                                    Course Curriculum
                                                    <span className="text-xs font-normal text-[#64748B] ml-1">({cert.courses.length} Courses)</span>
                                                </div>
                                                {showCurriculum[index] ? (
                                                    <ChevronUp className="h-4 w-4 text-[#64748B]" />
                                                ) : (
                                                    <ChevronDown className="h-4 w-4 text-[#64748B]" />
                                                )}
                                            </button>
                                            {showCurriculum[index] && (
                                                <div className="px-4 py-3 bg-white border-t border-[#E2E8F0]">
                                                    <ul className="grid gap-2 sm:grid-cols-2">
                                                        {cert.courses.map((course, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-sm text-[#475569]">
                                                                <span className="text-[#5D4037] mt-1 text-[10px] font-semibold min-w-[16px]">
                                                                    {idx + 1}.
                                                                </span>
                                                                <span>{course}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}


                                    {/* Simplified Skills Section - Smart Show More */}
                                    {cert.skillCategories && (
                                        <SkillsList skills={Object.values(cert.skillCategories).flat()} />
                                    )}

                                    {/* Bottom action bar - flush to card edges */}
                                    <div className="mt-8 -mx-8 -mb-8 pl-0 pr-8 flex items-center justify-between flex-wrap gap-4">
                                        <div className="flex items-center gap-4 flex-wrap">
                                            {/* Show two buttons if certificateUrl exists (for IBM), otherwise show single button */}
                                            {(cert as any).certificateUrl ? (
                                                <>
                                                    {/* Primary Button: View Certificate PDF */}
                                                    <Button
                                                        className="bg-[#5D4037] hover:bg-[#B87333] text-white px-6 py-2 h-10 shadow-sm hover:shadow transition-all duration-200"
                                                        asChild
                                                    >
                                                        <a href={(cert as any).certificateUrl} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="h-4 w-4 mr-2" />
                                                            View Certificate
                                                        </a>
                                                    </Button>

                                                    {/* Secondary Button: Verify on Coursera */}
                                                    <Button
                                                        variant="outline"
                                                        className="border-[#5D4037] text-[#5D4037] hover:bg-[#5D4037] hover:text-white px-6 py-2 h-10 transition-all duration-200"
                                                        asChild
                                                    >
                                                        <a href={cert.verificationUrl || '#'} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="h-4 w-4 mr-2" />
                                                            Verify on Coursera
                                                        </a>
                                                    </Button>
                                                </>
                                            ) : (
                                                /* Single Button: For other certificates */
                                                <Button
                                                    className="bg-[#5D4037] hover:bg-[#B87333] text-white px-6 py-2 h-10 shadow-sm hover:shadow transition-all duration-200"
                                                    asChild
                                                >
                                                    <a href={cert.verificationUrl || '#'} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="h-4 w-4 mr-2" />
                                                        View Certificate
                                                    </a>
                                                </Button>
                                            )}

                                            {cert.credentialId && (
                                                <div className="flex items-center gap-2 bg-white px-3 py-1.5 border border-[#E2E8F0]">
                                                    <span className="text-xs text-[#64748B] font-medium">ID:</span>
                                                    <span className="text-xs font-mono font-semibold text-[#0F172A]">{cert.credentialId}</span>
                                                    <button
                                                        onClick={() => copyToClipboard(cert.credentialId!)}
                                                        className="ml-2 text-[#64748B] hover:text-[#B87333] transition-colors duration-200 focus:outline-none"
                                                        title="Copy ID"
                                                    >
                                                        {copiedId === cert.credentialId ? (
                                                            <CheckCircle2 className="h-3.5 w-3.5 text-green-600" />
                                                        ) : (
                                                            <Copy className="h-3.5 w-3.5" />
                                                        )}
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        {cert.platform && (
                                            <div className="flex items-center gap-2">
                                                <span className="text-[#64748B] text-xs font-medium tracking-wide">Visit Official Page</span>
                                                <ArrowRight className="h-3.5 w-3.5 text-[#64748B]" />
                                                {cert.issuer === 'IBM' ? (
                                                    <a
                                                        href="https://www.coursera.org/professional-certificates/ibm-data-analyst"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:opacity-80 transition-opacity duration-200"
                                                    >
                                                        <img
                                                            src="/logos/coursera-logo.png"
                                                            alt="Coursera Logo"
                                                            className="h-4 w-auto"
                                                        />
                                                    </a>
                                                ) : cert.issuer === 'MySkill' ? (
                                                    <a
                                                        href="https://myskill.id/learning-path/microsoft-excel-word-powerpoint"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:opacity-80 transition-opacity duration-200"
                                                    >
                                                        <img
                                                            src="/logos/my-skill-logo.png"
                                                            alt="MySkill Logo"
                                                            className="h-4 w-auto"
                                                        />
                                                    </a>
                                                ) : null}
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
