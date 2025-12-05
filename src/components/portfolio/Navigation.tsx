'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Linkedin, Github, Instagram, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NAVIGATION_ITEMS, getDropdownItems, CONTACT_INFO } from '@/data/portfolio-data'
import { AnimatedNavLink } from './AnimatedNavLink'
import { AnimatedLogo } from './AnimatedLogo'
import { motion, AnimatePresence } from 'framer-motion'

export const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [isConnectOpen, setIsConnectOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0
            }
        )

        // Use setTimeout to ensure all sections are mounted before observing
        setTimeout(() => {
            document.querySelectorAll('section[id]').forEach((section) => {
                observer.observe(section)
            })
        }, 100)

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            observer.disconnect()
        }
    }, [])

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.3,
                ease: [0.42, 0, 1, 1]
            } as any
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: [0, 0, 0.58, 1]
            } as any
        }
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-lg border-b border-[#E2E8F0]/50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-20">
                    {/* Logo Area */}
                    <div className="flex-shrink-0 w-[140px]">
                        <AnimatedLogo />
                    </div>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                        <div className="flex items-center space-x-8">
                            {NAVIGATION_ITEMS.map((item) => (
                                <div key={item.name} className="px-1 py-1">
                                    <AnimatedNavLink
                                        href={item.href}
                                        text={item.name}
                                        className={`text-base font-bold transition-colors duration-200 text-[#0F172A]`}
                                        dropdownItems={getDropdownItems(item.name)}
                                        isActive={activeSection === item.href.substring(1)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Actions - Connect Button */}
                    <div
                        className="hidden md:flex items-center w-[140px] justify-end relative z-10"
                        onMouseEnter={() => setIsConnectOpen(true)}
                        onMouseLeave={() => setIsConnectOpen(false)}
                    >
                        <Button
                            size="sm"
                            className="bg-[#5D4037] hover:bg-[#B87333] text-white text-sm font-medium px-4 py-2 transition-all duration-200 shadow-sm hover:shadow group flex items-center gap-2"
                        >
                            <motion.div
                                className="w-2 h-2 rounded-full bg-[#EF4444]"
                                animate={{ opacity: [1, 1, 0, 0] }}
                                transition={{ duration: 2, times: [0, 0.5, 0.5, 1], repeat: Infinity, ease: "linear" }}
                            />
                            Connect
                            <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isConnectOpen ? 'rotate-180' : ''
                                }`} />
                        </Button>

                        {/* Connect Dropdown Menu */}
                        <AnimatePresence>
                            {isConnectOpen && (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={dropdownVariants}
                                    className="absolute top-full right-0 pt-2 w-52 z-50"
                                >
                                    <div className="bg-white/95 backdrop-blur-xl shadow-lg border border-[#E2E8F0]/50 overflow-hidden">
                                        {/* Social Links */}
                                        <div className="py-1">
                                            <a
                                                href={CONTACT_INFO.linkedin || '#'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#EFEBE9]/30 group"
                                                onClick={() => setIsConnectOpen(false)}
                                            >
                                                <Linkedin className="h-4 w-4 text-[#0F172A]" />
                                                <span className="text-sm font-medium text-[#0F172A]">LinkedIn</span>
                                            </a>

                                            <a
                                                href="https://github.com/dwibudisetyonugroho"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#EFEBE9]/30 group"
                                                onClick={() => setIsConnectOpen(false)}
                                            >
                                                <Github className="h-4 w-4 text-[#0F172A]" />
                                                <span className="text-sm font-medium text-[#0F172A]">GitHub</span>
                                            </a>

                                            <a
                                                href="https://www.instagram.com/budinugroho_"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#EFEBE9]/30 group"
                                                onClick={() => setIsConnectOpen(false)}
                                            >
                                                <Instagram className="h-4 w-4 text-[#0F172A]" />
                                                <span className="text-sm font-medium text-[#0F172A]">Instagram</span>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#475569] hover:text-[#0F172A]"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>



            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#F8FAFC] border-t border-[#E2E8F0]">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {NAVIGATION_ITEMS.map((item) => (
                            <AnimatedNavLink
                                key={item.name}
                                href={item.href}
                                text={item.name}
                                className={`block px-3 py-2 text-base font-medium w-full ${activeSection === item.href.substring(1) ? 'text-[#5D4037] bg-[#EFEBE9]/30' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            />
                        ))}
                        <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center justify-between px-3">
                            <span className="text-sm font-medium text-[#475569]">Connect with me</span>
                            <div className="flex items-center space-x-4">
                                <a
                                    href={CONTACT_INFO.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#475569] hover:text-[#5D4037]"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://github.com/dwibudisetyonugroho"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#475569] hover:text-[#5D4037]"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.instagram.com/budinugroho_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#475569] hover:text-[#5D4037]"
                                >
                                    <Instagram className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
