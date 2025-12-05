'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

interface SkillsListProps {
    skills: string[]
}

export const SkillsList = ({ skills }: SkillsListProps) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const checkOverflow = () => {
            if (containerRef.current) {
                // Check if content height exceeds one line (32px)
                const hasOverflow = containerRef.current.scrollHeight > 32
                setShowButton(hasOverflow)
            }
        }

        // Check on mount and when skills change
        checkOverflow()

        // Recheck on window resize
        window.addEventListener('resize', checkOverflow)
        return () => window.removeEventListener('resize', checkOverflow)
    }, [skills])

    return (
        <div className="mt-6 pt-6 mb-6 border-t border-[#E2E8F0]">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider">Skills & Technologies</h4>
                {showButton && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-xs font-semibold text-[#5D4037] hover:text-[#B87333] transition-colors duration-200 uppercase tracking-wide flex items-center gap-1"
                    >
                        {isExpanded ? 'Show Less' : 'Show More'}
                        {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                    </button>
                )}
            </div>
            <div
                ref={containerRef}
                className={`flex flex-wrap gap-2 ${!isExpanded ? 'max-h-[32px] overflow-hidden' : ''}`}
            >
                {skills.map((skill, idx) => (
                    <span
                        key={idx}
                        className="px-3 py-1 bg-[#F1F5F9] text-[#475569] text-xs font-medium border border-[#E2E8F0] hover:bg-[#EFEBE9] hover:text-[#5D4037] hover:border-[#D7CCC8] transition-all duration-200"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}
