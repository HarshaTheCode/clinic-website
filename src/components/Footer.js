
import { clinicInfo, operatingHours, socialLinks } from '@/data/content';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 relative z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

                    {/* Column 1: Clinic Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-4">{clinicInfo.name}</h3>
                        <p className="text-slate-400 leading-relaxed max-w-sm">
                            Providing world-class dental care with a personalized touch. Your smile is our priority.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <span>{clinicInfo.address.street}, {clinicInfo.address.area}, <br />{clinicInfo.address.city}, {clinicInfo.address.zip}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                <a href={`tel:${clinicInfo.phone}`} className="hover:text-white transition-colors">{clinicInfo.phone}</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                                <a href={`mailto:${clinicInfo.email}`} className="hover:text-white transition-colors">{clinicInfo.email}</a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Hours */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white mb-4">Opening Hours</h4>
                        <ul className="space-y-3">
                            {operatingHours.map((slot, i) => (
                                <li key={i} className="flex justify-between border-b border-slate-800 pb-2 last:border-0">
                                    <span className="text-slate-400">{slot.day}</span>
                                    <span className="font-medium text-white">{slot.time}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6 flex gap-4">
                            <a href={socialLinks.facebook} className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href={socialLinks.instagram} className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href={socialLinks.twitter} className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Column 3: Map placeholder */}
                    <div className="h-64 bg-slate-800 rounded-xl overflow-hidden relative group">
                        {/* Embed Google Map Iframe here in production */}
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-500">
                            <span className="flex items-center gap-2">
                                <MapPin /> Google Maps Embed
                            </span>
                        </div>
                        {/* Overlay for interaction */}
                        <a
                            href={clinicInfo.address.googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold"
                        >
                            View on Google Maps
                        </a>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; 2025 {clinicInfo.name}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
