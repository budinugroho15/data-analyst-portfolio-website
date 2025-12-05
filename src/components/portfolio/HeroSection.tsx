import { Button } from '@/components/ui/button'

export const HeroSection = () => (
    <section id="about" className="pt-24 min-h-screen flex items-center justify-center text-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block mb-4 px-4 py-1.5 bg-[#F1F5F9] border border-[#E2E8F0]">
                    <span className="text-sm font-semibold text-[#5D4037] tracking-wide uppercase">Data Analyst</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0F172A] mb-8">
                    About me
                </h1>

                <p className="text-lg md:text-xl text-[#475569] mb-10 max-w-3xl mx-auto leading-relaxed">
                    I'm <span className="font-semibold text-[#0F172A]">Dwi Budi Setyonugroho</span>, a junior data analyst with a Geological Engineering degree and IBM Data Analyst Professional Certificate. Holding a Microsoft Excel certificate and proficient in SQL, Python (pandas, numpy, matplotlib, seaborn, scikit-learn), and Power BI, I specialize in transforming complex datasets into actionable insights that drive business growth. With strong problem-solving abilities and business acumen, I leverage advanced analytics and data visualization to optimize operations and support strategic decision-making.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        size="lg"
                        className="bg-[#5D4037] hover:bg-[#B87333] text-white text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                        asChild
                    >
                        <a href="#projects">View Projects</a>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#B87333] text-lg transition-all duration-200"
                        asChild
                    >
                        <a href="#contact">Contact Me</a>
                    </Button>
                </div>

            </div>
        </div>
    </section>
)
