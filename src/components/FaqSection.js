
"use client";
import { useState } from 'react';
import { faqs } from '@/data/content';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Got Questions?</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Frequently Asked Questions</h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'border-primary bg-emerald-50/30' : 'border-slate-200 hover:border-emerald-200'
                                }`}
                        >
                            <button
                                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={`font-bold text-lg ${openIndex === index ? 'text-primary' : 'text-slate-800'}`}>
                                    {faq.question}
                                </span>
                                <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary' : 'text-slate-400'}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-transparent">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
