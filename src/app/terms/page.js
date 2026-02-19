
import { clinicInfo } from '@/data/content';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Terms() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow pt-32 pb-16 px-4">
                <div className="max-w-3xl mx-auto prose prose-slate">
                    <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
                    <p className="text-slate-600 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Medical Disclaimer</h2>
                    <p className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                        <strong>Important:</strong> The information provided on this website is for general informational purposes only
                        and does not constitute professional medical advice, diagnosis, or treatment. Always seek the advice of your
                        dentist or other qualified health provider with any questions you may have regarding a medical condition.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Acceptance of Terms</h2>
                    <p>
                        By accessing {clinicInfo.name}'s website, you agree to be bound by these terms of service and all applicable laws and regulations.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on
                        {clinicInfo.name}'s website for personal, non-commercial transitory viewing only.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Appointments</h2>
                    <p>
                        Appointment requests made through this website or WhatsApp are subject to confirmation. We reserve the right to
                        reschedule or cancel appointments based on doctor availability.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Modifications</h2>
                    <p>
                        {clinicInfo.name} may revise these terms of service for its website at any time without notice.
                        By using this website you are agreeing to be bound by the then current version of these terms of service.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
