
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import { clinicInfo, faqs } from "@/data/content";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata = {
  title: `${clinicInfo.name} | ${clinicInfo.doctor}`,
  description: clinicInfo.description,
  metadataBase: new URL('https://www.srisaiclinic.com'), // Placeholder URL
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: clinicInfo.name,
    description: clinicInfo.description,
    url: 'https://www.srisaiclinic.com',
    siteName: clinicInfo.name,
    images: [
      {
        url: 'https://www.srisaiclinic.com/og-image.jpg', // Placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: clinicInfo.name,
    description: clinicInfo.description,
    images: ['https://www.srisaiclinic.com/og-image.jpg'], // Placeholder
  },
};

export default function RootLayout({ children }) {
  // JSON-LD Generation
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": clinicInfo.name,
    "image": "https://www.srisaiclinic.com/images/clinic.jpg", // Placeholder
    "@id": "https://www.srisaiclinic.com",
    "url": "https://www.srisaiclinic.com",
    "telephone": clinicInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": clinicInfo.address.street,
      "addressLocality": clinicInfo.address.area,
      "addressRegion": clinicInfo.address.state,
      "postalCode": clinicInfo.address.zip,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4486, // Approximate for Madhapur
      "longitude": 78.3908 // Approximate for Madhapur
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/srisaiclinic",
      "https://www.instagram.com/srisaiclinic"
    ],
    "priceRange": "$$"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased text-slate-800 bg-slate-50`} suppressHydrationWarning>
        {children}
        <Script
          id="json-ld-dentist"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />
        <Script
          id="json-ld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
