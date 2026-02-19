
import { trustStats } from '@/data/content';

export default function TrustBar() {
    return (
        <section className="bg-white py-12 border-b border-slate-100 relative z-20 -mt-8 mx-4 lg:mx-auto max-w-7xl rounded-2xl shadow-xl shadow-slate-200/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
                {trustStats.map((stat) => (
                    <div key={stat.id} className="flex flex-col items-center justify-center text-center px-4 group">
                        <div className="mb-4 p-3 bg-emerald-50 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <stat.icon size={28} />
                        </div>
                        <h3 className="text-3xl font-extrabold text-slate-900 mb-1">{stat.value}</h3>
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
