
import { doctorBio } from '@/data/content';
import { Award, GraduationCap, Clock } from 'lucide-react';

export default function DoctorBio() {
    return (
        <section id="doctor" className="py-24 bg-teal-900 text-white relative overflow-hidden">
            {/* Background patterned overlay */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div className="order-2 md:order-1 space-y-8 animate-in slide-in-from-left duration-700">
                        <div>
                            <h3 className="text-teal-400 font-bold uppercase tracking-wider text-sm mb-2">Meet Your Expert</h3>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{doctorBio.name}</h2>
                            <p className="text-teal-200 text-xl font-medium">{doctorBio.designation}</p>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-teal-800/50 p-4 rounded-xl backdrop-blur-sm border border-teal-700">
                                <GraduationCap className="text-teal-300 mb-2" />
                                <p className="text-sm text-teal-100">{doctorBio.qualification}</p>
                            </div>
                            <div className="bg-teal-800/50 p-4 rounded-xl backdrop-blur-sm border border-teal-700">
                                <Clock className="text-teal-300 mb-2" />
                                <p className="text-sm text-teal-100">{doctorBio.experience}</p>
                            </div>
                        </div>

                        <p className="text-teal-100/90 leading-relaxed text-lg">
                            {doctorBio.about}
                        </p>

                        <ul className="space-y-3">
                            {doctorBio.specialties.map((spec, i) => (
                                <li key={i} className="flex items-center gap-3 text-teal-50">
                                    <Award className="text-teal-400 w-5 h-5" />
                                    {spec}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="order-1 md:order-2 flex justify-center md:justify-end animate-in slide-in-from-right duration-700 relative">
                        <div className="relative w-full max-w-sm aspect-[3/4]">
                            <div className="absolute inset-0 border-2 border-teal-500 rounded-2xl transform translate-x-4 translate-y-4"></div>
                            <div className="absolute inset-0 bg-teal-800 rounded-2xl overflow-hidden shadow-2xl">
                                {/* Placeholder Doctor Image */}
                                <img
                                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
                                    alt={doctorBio.name}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-xl shadow-xl max-w-[200px]">
                                <p className="font-bold text-4xl text-primary">15+</p>
                                <p className="text-sm font-medium text-slate-500">Years of medical excellence</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
