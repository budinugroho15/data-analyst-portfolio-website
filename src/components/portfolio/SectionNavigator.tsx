'use client'

import { useState, useEffect } from 'react'

interface NavigationItem {
    id: string
    title: string
    logo?: string
    logoAlt?: string
}

interface SectionNavigatorProps {
    sectionId: string
    sectionTitle: string
    items: NavigationItem[]
}

export const SectionNavigator = ({ sectionId, sectionTitle, items }: SectionNavigatorProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const [shouldRender, setShouldRender] = useState(false)
    const [isExiting, setIsExiting] = useState(false)
    const [activeItemId, setActiveItemId] = useState<string | null>(null)

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setShouldRender(true)
                setIsExiting(false)
            }, 100)
            return () => clearTimeout(timer)
        } else if (shouldRender) {
            setIsExiting(true)
            // Calculate total exit time: max delay + animation duration
            const totalDelay = items.length * 100
            const timer = setTimeout(() => {
                setShouldRender(false)
                setIsExiting(false)
            }, 500 + totalDelay)
            return () => clearTimeout(timer)
        }
    }, [isVisible, shouldRender, items.length])

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target.id === sectionId) {
                        setIsVisible(entry.isIntersecting)
                    }
                })
            },
            { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
        )

        const cardObserver = new IntersectionObserver(
            (entries) => {
                let mostVisibleCard: string | null = null
                let maxRatio = 0

                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio
                        mostVisibleCard = entry.target.id
                    }
                })

                if (mostVisibleCard) {
                    setActiveItemId(mostVisibleCard)
                }
            },
            { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
        )

        setTimeout(() => {
            const section = document.getElementById(sectionId)
            if (section) sectionObserver.observe(section)

            items.forEach(item => {
                const card = document.getElementById(item.id)
                if (card) cardObserver.observe(card)
            })
        }, 100)

        return () => {
            sectionObserver.disconnect()
            cardObserver.disconnect()
        }
    }, [sectionId, items])

    const scrollToCard = (itemId: string) => {
        const card = document.getElementById(itemId)
        if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    if (items.length === 0 || !shouldRender) return null

    return (
        <div
            key={`navigator-${sectionId}`}
            className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
        >
            <div className="space-y-3 max-w-[280px]">
                {/* Section Title - Slides in first */}
                <div
                    className={`bg-[#5D4037] shadow-lg border border-[#5D4037] px-4 py-3 hover:shadow-xl transition-shadow duration-200 ${isExiting
                        ? 'animate-out fade-out slide-out-to-left-4 duration-500'
                        : 'animate-in fade-in slide-in-from-left-4 duration-500'
                        }`}
                    style={{
                        animationDelay: isExiting ? `${items.length * 100}ms` : '0ms',
                        animationFillMode: 'both'
                    }}
                >
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                        {sectionTitle}
                    </h3>
                </div>

                {/* Individual Card Containers - Each slides in with delay */}
                {items.map((item, index) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToCard(item.id)}
                        style={{
                            animationDelay: isExiting
                                ? `${(items.length - 1 - index) * 100}ms`
                                : `${(index + 1) * 100}ms`,
                            animationFillMode: 'both'
                        }}
                        className={`w-full flex items-center gap-3 p-3 transition-all duration-200 text-left bg-white shadow-lg border hover:shadow-xl ${isExiting
                            ? 'animate-out fade-out slide-out-to-left-4 duration-500'
                            : 'animate-in fade-in slide-in-from-left-4 duration-500'
                            } ${activeItemId === item.id
                                ? 'border-[#B87333] scale-[1.02] shadow-xl'
                                : 'border-[#E2E8F0] hover:border-[#B87333] hover:scale-[1.01]'
                            }`}
                    >
                        {item.logo && (
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                                <img
                                    src={item.logo}
                                    alt={item.logoAlt || item.title}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        )}
                        <span
                            className={`text-sm font-medium line-clamp-2 transition-colors duration-200 ${activeItemId === item.id ? 'text-[#B87333]' : 'text-[#475569]'
                                }`}
                        >
                            {item.title}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    )
}
