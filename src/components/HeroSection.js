
import Link from 'next/link';
import { ArrowRight, PhoneCall, Calendar } from 'lucide-react';
import { clinicInfo } from '@/data/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function HeroSection() {
    return (
        <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50 pt-20">

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-100/40 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-100/40 blur-3xl rounded-full translate-y-1/4 -translate-x-1/4"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">

                {/* Content */}
                <div className="text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 border border-emerald-200 text-emerald-800 text-sm font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Accepting New Patients in Madhapur
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                        Experience <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
                            World-Class
                        </span>
                        <br />
                        Dental Care
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        {clinicInfo.description} Join thousands of happy smiles at {clinicInfo.name}.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <a
                            href={buildWhatsAppUrl(clinicInfo.phone, "Hi, I'm interested in booking a consultation.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-emerald-500/20 group"
                        >
                            <Calendar className="w-5 h-5 group-hover:block hidden" />
                            <span>Book Appointment</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href={`tel:${clinicInfo.phone}`}
                            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg transition-all hover:border-slate-300 shadow-sm hover:shadow-md"
                        >
                            <PhoneCall className="w-5 h-5 text-primary" />
                            <span>{clinicInfo.phone}</span>
                        </a>
                    </div>

                    <div className="pt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
                        <div className="flex -space-x-4">
                            {/* Local CSS avatars — no external API calls */}
                            {['R', 'S', 'A', 'K'].map((initial, i) => {
                                const colors = ['bg-emerald-500', 'bg-teal-500', 'bg-cyan-500', 'bg-green-500'];
                                return (
                                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white ${colors[i]} flex items-center justify-center text-xs font-bold text-white`}>
                                        {initial}
                                    </div>
                                );
                            })}
                        </div>
                        <p>Trusted by <span className="font-bold text-slate-800">5000+</span> patients</p>
                    </div>
                </div>

                {/* Hero Image/Visual */}
                <div className="relative animate-in fade-in zoom-in duration-1000 delay-200 hidden lg:block">
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-blue-50 rounded-[2rem] rotate-6 transform transition-transform hover:rotate-3"></div>
                        <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white transform transition-transform hover:-translate-y-2">
                            {/* Replace with actual high-quality clinic image or doctor image */}
                            <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                                {/* Placeholder for Hero Image */}
                                <img
                                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                                    alt="Modern Dental Clinic"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating Card 1 */}
                            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-emerald-50 animate-bounce-slow">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <span className="font-bold text-lg">4.9</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800">Excellent</p>
                                        <p className="text-xs text-slate-500">Google Reviews</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card 2 */}
                            <div className="absolute bottom-10 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-emerald-50">
                                <p className="text-sm font-bold text-slate-800">Best Care</p>
                                <div className="w-32 h-2 bg-slate-100 rounded-full mt-2 overflow-hidden">
                                    <div className="h-full bg-primary w-5/6 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
