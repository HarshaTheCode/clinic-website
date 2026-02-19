import { testimonials } from '@/data/content';
import { Quote, ArrowRight, Star } from 'lucide-react';

export default function Testimonials() {
    return (
        <section id="reviews" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side - Text Content */}
                    <div className="relative">
                        {/* Decorative Element */}
                        <div className="absolute -top-16 left-0 hidden md:block animate-bounce-slow">
                            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 50C25 20 45 20 60 50C75 80 95 80 110 50" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
                                <path d="M85 25L89 35L99 36L92 44L94 54L85 49L76 54L78 44L71 36L81 35L85 25Z" fill="#FBBF24" />
                            </svg>
                        </div>

                        <div className="relative z-10 pt-8">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                                What Our <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                                    Patients Say
                                </span>
                            </h2>
                            <p className="text-slate-500 text-lg mb-8 leading-relaxed max-w-md">
                                We take pride in providing exceptional care to our patients. Here's what they have to say about their experience with Dr. Arjun and our team.
                            </p>

                            <button className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold shadow-lg shadow-emerald-200 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                                View More Stories
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Testimonial Cards Marquee */}
                    <div className="relative h-[600px] overflow-hidden mask-gradient-y">
                        {/* Gradient Masks for smooth fade in/out */}
                        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
                        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>

                        {/* Scrolling Container */}
                        <div className="animate-scroll-vertical pause-animation flex flex-col gap-6">
                            {[...testimonials, ...testimonials].map((review, index) => (
                                <div
                                    key={`${review.id}-${index}`}
                                    className="p-6 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:border-emerald-100 hover:-translate-y-1 transition-all duration-300 flex gap-4 items-start group"
                                >
                                    {/* Avatar */}
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-50 group-hover:border-emerald-100 transition-colors">
                                            <img
                                                src={`https://ui-avatars.com/api/?name=${review.name}&background=random&color=fff`}
                                                alt={review.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-bold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors">
                                                    {review.name}
                                                </h4>
                                                <div className="flex gap-0.5 mt-1">
                                                    {[...Array(review.rating)].map((_, i) => (
                                                        <Star key={i} size={12} className="fill-emerald-400 text-emerald-400" />
                                                    ))}
                                                </div>
                                            </div>
                                            <Quote size={16} className="text-slate-300 group-hover:text-emerald-200 fill-current transition-colors" />
                                        </div>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-600 group-hover:text-slate-700">
                                            "{review.review}"
                                        </p>
                                        <p className="text-xs text-slate-400 mt-2">{review.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
