
import { testimonials } from '@/data/content';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
    return (
        <section id="reviews" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Patient Stories</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">What Our Patients Say</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 relative group"
                        >
                            <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                <Quote size={20} className="fill-current" />
                            </div>

                            <div className="flex gap-1 text-yellow-500 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-slate-600 mb-6 italic leading-relaxed">"{review.review}"</p>

                            <div className="flex items-center gap-4 border-t border-slate-50 pt-4 mt-auto">
                                <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
                                    {/* Avatar placeholder */}
                                    <img src={`https://ui-avatars.com/api/?name=${review.name}&background=random`} alt={review.name} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                                    <p className="text-slate-400 text-xs">{review.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
