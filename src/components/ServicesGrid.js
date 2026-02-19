
import { services } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { clinicInfo } from '@/data/content';

export default function ServicesGrid() {
    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Comprehensive Dental Solutions</h3>
                    <p className="text-slate-600 text-lg">
                        From routine checkups to complex surgeries, we provide world-class care under one roof.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-slate-100 hover:border-teal-100 relative overflow-hidden"
                        >
                            {/* Decorative gradient blob */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 group-hover:bg-teal-100/50"></div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                                    <service.icon size={28} />
                                </div>

                                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h4>

                                <p className="text-slate-500 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto border-t border-slate-50 pt-4">
                                    <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                        Starts {service.priceRange}
                                    </span>

                                    <a
                                        href={buildWhatsAppUrl(clinicInfo.phone, `I want to know more about ${service.title}`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm font-bold text-primary hover:text-teal-700 transition-colors"
                                    >
                                        Details <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
