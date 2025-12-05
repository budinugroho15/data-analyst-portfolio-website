'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export const AnimatedLogo = () => {
    const [isHovered, setIsHovered] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    const words = ['DBS', 'have', 'a', 'good', 'day']

    const triggerAnimation = async () => {
        if (isAnimating) return

        setIsAnimating(true)

        // Sequence timings (ms)
        const sequence = [
            { index: 1, delay: 1000 }, // have
            { index: 2, delay: 1000 }, // a
            { index: 3, delay: 1000 }, // good
            { index: 4, delay: 1000 }, // day
            { index: 0, delay: 1000 }  // Back to DBS
        ]

        for (const step of sequence) {
            await new Promise(resolve => setTimeout(resolve, step.delay))
            setCurrentWordIndex(step.index)
        }

        setIsAnimating(false)
    }

    const showBrackets = isHovered || isAnimating

    return (
        <div
            className="relative cursor-pointer flex items-center h-8"
            onMouseEnter={() => {
                setIsHovered(true)
                triggerAnimation()
            }}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-center">
                <motion.span
                    layout
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                        width: showBrackets ? 'auto' : 0,
                        opacity: showBrackets ? 1 : 0
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        layout: { duration: 0.3, ease: "easeInOut" }
                    } as any}
                    className="overflow-hidden whitespace-nowrap text-2xl font-bold text-[#0F172A] font-mono"
                >
                    ['
                </motion.span>

                <motion.div
                    layout
                    className="relative overflow-hidden h-8 flex items-center"
                    transition={{ duration: 0.3, ease: "easeInOut" } as any}
                >
                    <AnimatePresence mode="popLayout">
                        <motion.span
                            key={currentWordIndex}
                            layout
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] } as any}
                            className="text-2xl font-bold tracking-tight text-[#0F172A] whitespace-nowrap block"
                        >
                            {words[currentWordIndex]}
                        </motion.span>
                    </AnimatePresence>
                </motion.div>

                <motion.span
                    layout
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                        width: showBrackets ? 'auto' : 0,
                        opacity: showBrackets ? 1 : 0
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        layout: { duration: 0.3, ease: "easeInOut" }
                    } as any}
                    className="overflow-hidden whitespace-nowrap text-2xl font-bold text-[#0F172A] font-mono"
                >
                    ']
                </motion.span>
            </div>
        </div>
    )
}
