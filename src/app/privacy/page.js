
import { clinicInfo } from '@/data/content';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Privacy() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow pt-32 pb-16 px-4">
                <div className="max-w-3xl mx-auto prose prose-slate">
                    <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
                    <p className="text-slate-600 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Introduction</h2>
                    <p>
                        Welcome to {clinicInfo.name}. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                        and tell you about your privacy rights.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Data We Collect</h2>
                    <p>
                        We may collect contact information such as name, email address, and phone number when you use our contact forms
                        or booking links. We do not store sensitive medical history on this public-facing website.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. How We Use Your Data</h2>
                    <p>
                        We use your data to:
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Respond to your inquiries and appointment requests.</li>
                            <li>Improve our website and services.</li>
                            <li>Comply with legal obligations.</li>
                        </ul>
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Third-Party Links</h2>
                    <p>
                        Our website may include links to third-party websites (e.g., WhatsApp, Google Maps).
                        Clicking on those links may allow third parties to collect or share data about you.
                        We do not control these third-party websites and are not responsible for their privacy statements.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy, please contact us at: <br />
                        <strong>Email:</strong> {clinicInfo.email} <br />
                        <strong>Phone:</strong> {clinicInfo.phone}
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
