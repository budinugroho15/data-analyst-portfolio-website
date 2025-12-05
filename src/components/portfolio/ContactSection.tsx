import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO } from '@/data/portfolio-data'

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
)

export const ContactSection = () => (
    <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#0F172A]">Get in touch</h2>
            <div className="max-w-5xl mx-auto">
                <p className="text-lg text-[#475569] mb-12 text-center max-w-2xl mx-auto leading-relaxed">
                    I'm always interested in discussing new opportunities, challenging projects, or sharing insights about data analytics. Feel free to reach out!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {/* Email Card */}
                    <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="group bg-white border border-[#E2E8F0] p-6 hover:shadow-lg hover:border-[#5D4037] transition-all duration-200"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-[#EFEBE9] mb-4 group-hover:bg-[#5D4037] transition-colors duration-200">
                                <Mail className="h-6 w-6 text-[#5D4037] group-hover:text-white transition-colors duration-200" />
                            </div>
                            <h3 className="text-sm font-bold text-[#64748B] uppercase tracking-wider mb-2">Email</h3>
                            <p className="text-[#0F172A] font-medium break-all group-hover:text-[#B87333] transition-colors duration-200">{CONTACT_INFO.email}</p>
                        </div>
                    </a>

                    {/* Phone Card */}
                    <a
                        href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                        className="group bg-white border border-[#E2E8F0] p-6 hover:shadow-lg hover:border-[#5D4037] transition-all duration-200"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-[#EFEBE9] mb-4 group-hover:bg-[#5D4037] transition-colors duration-200">
                                <Phone className="h-6 w-6 text-[#5D4037] group-hover:text-white transition-colors duration-200" />
                            </div>
                            <h3 className="text-sm font-bold text-[#64748B] uppercase tracking-wider mb-2">Phone</h3>
                            <p className="text-[#0F172A] font-medium group-hover:text-[#B87333] transition-colors duration-200">{CONTACT_INFO.phone}</p>
                        </div>
                    </a>

                    {/* WhatsApp Card */}
                    <a
                        href={`https://wa.me/${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white border border-[#E2E8F0] p-6 hover:shadow-lg hover:border-[#5D4037] transition-all duration-200"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-[#EFEBE9] mb-4 group-hover:bg-[#5D4037] transition-colors duration-200">
                                <WhatsAppIcon className="h-6 w-6 text-[#5D4037] group-hover:text-white transition-colors duration-200" />
                            </div>
                            <h3 className="text-sm font-bold text-[#64748B] uppercase tracking-wider mb-2">WhatsApp</h3>
                            <p className="text-[#0F172A] font-medium group-hover:text-[#B87333] transition-colors duration-200">Chat Now</p>
                        </div>
                    </a>
                </div>

                {/* Location - Centered Bottom */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-3 bg-white border border-[#E2E8F0] rounded-full px-8 py-4 shadow-sm hover:shadow-md transition-all duration-200">
                        <div className="p-2 bg-[#F1F5F9] rounded-full">
                            <MapPin className="h-5 w-5 text-[#64748B]" />
                        </div>
                        <div>
                            <span className="text-sm font-bold text-[#64748B] uppercase tracking-wider mr-2">Based in:</span>
                            <span className="text-[#0F172A] font-medium">{CONTACT_INFO.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
