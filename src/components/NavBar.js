
"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { clinicInfo } from '@/data/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'About', href: '#doctor' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">S</span>
                            </div>
                            <span className={`font-bold text-lg md:text-xl tracking-tight transition-colors ${scrolled ? 'text-slate-800' : 'text-slate-800' // Keeping text dark for readability if hero is light, adjust if hero is dark
                                }`}>
                                {clinicInfo.name}
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={buildWhatsAppUrl(clinicInfo.phone, "Hi, I'd like to book an appointment.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-teal-700 text-white px-5 py-2 rounded-full font-medium transition-transform hover:scale-105 flex items-center gap-2 text-sm shadow-lg shadow-teal-500/20"
                        >
                            <Phone size={16} />
                            Book Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-800 hover:text-primary transition-colors focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out origin-top ${isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
                }`}>
                <div className="px-4 py-6 space-y-4 flex flex-col items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-slate-800 hover:text-primary font-medium text-lg w-full text-center py-2 border-b border-gray-100 last:border-0"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={buildWhatsAppUrl(clinicInfo.phone, "Hi, I'd like to book an appointment.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-primary text-center text-white py-3 rounded-lg font-bold mt-4 shadow-lg active:scale-95 transition-transform"
                    >
                        Book Appointment
                    </a>
                </div>
            </div>
        </nav>
    );
}
