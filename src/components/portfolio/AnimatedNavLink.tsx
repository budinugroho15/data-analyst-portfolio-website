'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AnimatedNavLinkProps {
    href: string
    text: string
    className?: string
    onClick?: () => void
    dropdownItems?: { label: string; href: string }[]
    isActive?: boolean
}

export const AnimatedNavLink = ({ href, text, className = '', onClick, dropdownItems, isActive = false }: AnimatedNavLinkProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const hoverColor = '#EF4444' // Red accent color
    const letters = text.split('')

    const container = {
        initial: {},
        hover: {},
    }

    const child = {
        initial: {
            y: 0,
            color: '#0F172A',
        },
        hover: {
            y: 0,
            color: '#0F172A', // Keep same color on hover
            transition: {
                duration: 0,
                ease: [0.42, 0, 0.58, 1]
            } as any,
        },
    }

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
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.a
                href={href}
                className={`relative inline-flex items-center gap-2 overflow-hidden ${className}`}
                style={{ textDecoration: 'none' }}
                onClick={onClick}
                variants={container}
                initial="initial"
                whileTap={{ scale: 0.95 }}
            >
                {/* Circle Indicator - blinks for active section, shows on hover for others */}
                <motion.div
                    className={`w-2 h-2 rounded-full ${isActive ? 'animate-blink-sharp' : ''}`}
                    style={{ backgroundColor: hoverColor }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: isActive ? 1 : (isHovered ? 1 : 0),
                        scale: isActive ? 1 : (isHovered ? 1 : 0)
                    }}
                    transition={{ duration: 0, ease: "linear" }}
                />

                <span className="inline-flex">
                    {letters.map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={child}
                            className="inline-block"
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                    ))}
                </span>

                {dropdownItems && dropdownItems.length > 0 && (
                    <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
                )}
            </motion.a>

            <AnimatePresence>
                {isHovered && dropdownItems && dropdownItems.length > 0 && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="absolute top-full left-0 pt-2 w-56 z-[100]"
                    >
                        <div className="bg-white/95 backdrop-blur-xl shadow-lg border border-[#E2E8F0]/50 overflow-hidden py-1">
                            {dropdownItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="flex items-center px-4 py-2.5 text-sm font-medium text-[#0F172A] hover:bg-[#EFEBE9]/30"
                                    style={{
                                        lineHeight: '1.5',
                                        transform: 'translateZ(0)',
                                        backfaceVisibility: 'hidden',
                                        WebkitFontSmoothing: 'antialiased'
                                    }}
                                    onClick={(e) => {
                                        if (onClick) onClick()
                                        // Smooth scroll handling could be added here if needed
                                    }}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
