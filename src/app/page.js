
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ServicesGrid from '@/components/ServicesGrid';
import SmileGallery from '@/components/SmileGallery';
import DoctorBio from '@/components/DoctorBio';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <TrustBar />
        <ServicesGrid />
        <SmileGallery />
        <DoctorBio />
        <Testimonials />
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
