import { TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { PROJECTS } from '@/data/portfolio-data'
import { SkillsList } from './SkillsList'
import { SectionNavigator } from './SectionNavigator'

export const ProjectsSection = () => {
    // Prepare navigation items (NO logos - projects don't have logos)
    const navigationItems = PROJECTS.map(project => ({
        id: project.id,
        title: project.title
        // No logo property - projects don't have logos
    }))

    return (
        <section id="projects" className="py-24">
            <SectionNavigator sectionId="projects" sectionTitle="Project Portfolio" items={navigationItems} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 text-[#0F172A]">Project Portfolio</h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {PROJECTS.map((project, index) => (
                        <Card key={index} id={project.id} className="border-t-0 border-x-[#E2E8F0] border-b-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-200 bg-white text-[#0F172A] relative scroll-mt-24 group">
                            <CardContent className="p-8">
                                <div className="flex items-start justify-between gap-4 mb-6">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#5D4037] transition-colors duration-200 mb-3">{project.title}</h3>
                                        <p className="text-[#475569] leading-relaxed">{project.description}</p>
                                    </div>
                                </div>

                                {/* Skills & Technologies with Smart Show More */}
                                {project.technologies && <SkillsList skills={project.technologies} />}

                                <div className="flex items-center gap-3 bg-[#F1F5F9] px-4 py-3 border border-[#E2E8F0]">
                                    <div className="p-2 bg-[#EFEBE9]">
                                        <TrendingUp className="h-4 w-4 text-[#5D4037]" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wide block mb-0.5">Impact</span>
                                        <span className="text-sm font-bold text-[#0F172A]">{project.impact}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
