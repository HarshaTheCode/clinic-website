
"use client";
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { clinicInfo } from '@/data/content';

export default function WhatsAppButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling past hero section (approx 500px)
            if (window.scrollY > 500) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <a
            href={buildWhatsAppUrl(clinicInfo.phone, "Hi, I'd like to book an appointment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-in fade-in slide-in-from-bottom-4 group flex items-center gap-2 overflow-hidden hover:pr-6"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} className="fill-white text-[#25D366]" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-sm font-bold">Chat now</span>
        </a>
    );
}
