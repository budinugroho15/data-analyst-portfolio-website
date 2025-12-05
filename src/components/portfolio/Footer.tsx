'use client'

import { Linkedin, Github, Instagram, ArrowUp } from 'lucide-react'
import { CONTACT_INFO } from '@/data/portfolio-data'

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white border-t border-[#E2E8F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold text-[#0F172A] mb-3">Dwi Budi Setyonugroho</h3>
                        <p className="text-[#64748B] text-sm leading-relaxed mb-4">
                            Entry-level Data Analyst passionate about transforming complex data into actionable insights that drive business growth and innovation.
                        </p>
                        <div className="flex items-center gap-3">
                            <a
                                href={CONTACT_INFO.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-[#F1F5F9] text-[#64748B] hover:bg-[#B87333] hover:text-white transition-all duration-200"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a
                                href="https://github.com/dwibudisetyonugroho"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-[#F1F5F9] text-[#64748B] hover:bg-[#B87333] hover:text-white transition-all duration-200"
                                aria-label="GitHub"
                            >
                                <Github className="h-4 w-4" />
                            </a>
                            <a
                                href="https://www.instagram.com/budinugroho_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-[#F1F5F9] text-[#64748B] hover:bg-[#B87333] hover:text-white transition-all duration-200"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-[#64748B] text-sm hover:text-[#B87333] transition-colors duration-200">About</a>
                            </li>
                            <li>
                                <a href="#skills" className="text-[#64748B] text-sm hover:text-[#B87333] transition-colors duration-200">Skills</a>
                            </li>
                            <li>
                                <a href="#certificates" className="text-[#64748B] text-sm hover:text-[#B87333] transition-colors duration-200">Certificates</a>
                            </li>
                            <li>
                                <a href="#projects" className="text-[#64748B] text-sm hover:text-[#B87333] transition-colors duration-200">Projects</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#64748B] text-sm hover:text-[#B87333] transition-colors duration-200 break-all">
                                    {CONTACT_INFO.email}
                                </a>
                            </li>
                            <li>
                                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-[#64748B] text-sm hover:text-[#B87333] transition-colors duration-200">
                                    {CONTACT_INFO.phone}
                                </a>
                            </li>
                            <li className="text-[#64748B] text-sm">
                                {CONTACT_INFO.location}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[#64748B] text-sm">
                        © {currentYear} Dwi Budi Setyonugroho. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm font-medium text-[#64748B] hover:text-[#B87333] transition-colors duration-200 group"
                        aria-label="Back to top"
                    >
                        Back to top
                        <div className="p-1.5 bg-[#F1F5F9] group-hover:bg-[#B87333] transition-colors duration-200">
                            <ArrowUp className="h-3 w-3 group-hover:text-white transition-colors duration-200" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    )
}
