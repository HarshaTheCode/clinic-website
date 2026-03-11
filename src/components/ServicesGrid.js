
import { services, clinicInfo } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function ServicesGrid() {
    // Layout configuration: Top row (2 items), Bottom row (3 items)
    const bentoServices = [
        {
            ...services.find(s => s.id === 'general'),
            layoutClass: "md:col-span-1 lg:col-span-3",
            variant: "default"
        },
        {
            ...services.find(s => s.id === 'kids'),
            layoutClass: "md:col-span-1 lg:col-span-3",
            variant: "default"
        },
        {
            ...services.find(s => s.id === 'ortho'),
            layoutClass: "md:col-span-1 lg:col-span-2",
            variant: "default"
        },
        {
            ...services.find(s => s.id === 'cosmetic'),
            layoutClass: "md:col-span-1 lg:col-span-2",
            variant: "highlight" // This will be our dark, premium card
        },
        {
            ...services.find(s => s.id === 'implants'),
            layoutClass: "md:col-span-1 lg:col-span-2",
            variant: "default"
        },
        {
            ...services.find(s => s.id === 'rootcanal'),
            layoutClass: "md:col-span-2 lg:col-span-6",
            variant: "default"
        }
    ];

    return (
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Soft Gradient Blobs */}
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[100px] opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[100px] opacity-60"></div>

                {/* Fine Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: 'linear-gradient(#059669 1px, transparent 1px), linear-gradient(to right, #059669 1px, transparent 1px)',
                        backgroundSize: '32px 32px'
                    }}>
                </div>

                {/* Radial Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/0 via-slate-50/0 to-slate-50/80"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
                        World-Class Care
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Our Expertise
                    </h3>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                        Precision dentistry tailored to your needs. From routine hygiene to advanced cosmetic transformations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    {bentoServices.map((service) => {
                        const isHighlight = service.variant === 'highlight';

                        return (
                            <div
                                key={service.id}
                                className={`
                                    ${service.layoutClass}
                                    ${isHighlight
                                        ? 'bg-primary text-white ring-4 ring-primary/20'
                                        : 'bg-white text-slate-900 border border-slate-100 hover:border-emerald-200/60'
                                    }
                                    rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between
                                `}
                            >
                                {/* Decorative Blob Animation */}
                                <div className={`absolute top-0 right-0 w-40 h-40 rounded-bl-[150px] -mr-12 -mt-12 transition-transform duration-700 ease-out group-hover:scale-125
                                    ${isHighlight
                                        ? 'bg-emerald-800/20'
                                        : 'bg-emerald-50/80 group-hover:bg-emerald-100/60'
                                    }
                                `}></div>

                                <div className="relative z-10">
                                    {/* Icon Container */}
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 shadow-sm
                                        ${isHighlight
                                            ? 'bg-white/10 text-white backdrop-blur-sm'
                                            : 'bg-emerald-50 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-emerald-200'
                                        }
                                    `}>
                                        <service.icon size={32} strokeWidth={1.5} />
                                    </div>

                                    {/* Content */}
                                    <div className="mb-8">
                                        <h4 className={`text-2xl font-bold mb-3 tracking-tight
                                            ${isHighlight ? 'text-white' : 'text-slate-900'}
                                        `}>
                                            {service.title}
                                        </h4>
                                        <p className={`text-base leading-relaxed
                                            ${isHighlight ? 'text-emerald-50/90' : 'text-slate-500'}
                                        `}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Footer: Price & Link */}
                                <div className={`flex items-center justify-between pt-6 border-t mt-auto relative z-10
                                    ${isHighlight ? 'border-white/10' : 'border-slate-100'}
                                `}>
                                    <span className={`text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider
                                        ${isHighlight
                                            ? 'bg-white/20 text-white backdrop-blur-md'
                                            : 'bg-slate-50 text-slate-500 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors'
                                        }
                                    `}>
                                        Starts {service.priceRange}
                                    </span>

                                    <a
                                        href={buildWhatsAppUrl(clinicInfo.phone, `I want to know more about ${service.title}`)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3
                                            ${isHighlight
                                                ? 'text-white hover:text-emerald-200'
                                                : 'text-primary hover:text-emerald-700'
                                            }
                                        `}
                                    >
                                        Details <ArrowUpRight size={18} />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
