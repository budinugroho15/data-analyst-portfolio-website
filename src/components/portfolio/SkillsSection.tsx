import { Card, CardContent } from '@/components/ui/card'
import { SKILLS } from '@/data/portfolio-data'
import { BarChart3, Terminal, Database, LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
    'Data Analysis Tools': BarChart3,
    'Programming & Querying': Terminal,
    'Data Management': Database,
}

export const SkillsSection = () => (
    <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#0F172A]">Technical Skill</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {Object.entries(SKILLS).map(([category, skillList]) => {
                    const Icon = iconMap[category] || BarChart3
                    return (
                        <Card key={category} id={`skills-${category.toLowerCase().replace(/\s+/g, '-')}`} className="border-t-0 border-x-[#E2E8F0] border-b-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-200 bg-white scroll-mt-24 group">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 bg-[#EFEBE9] group-hover:bg-[#5D4037] transition-colors duration-200">
                                        <Icon className="h-6 w-6 text-[#5D4037] group-hover:text-white transition-colors duration-200" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0F172A]">{category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skillList.map((skill, index) => (
                                        <div key={index} className="bg-[#F1F5F9] px-3 py-1.5 text-sm font-medium text-[#475569] hover:bg-[#EFEBE9] hover:text-[#B87333] transition-colors duration-200">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>
)
