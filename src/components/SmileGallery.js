
import { galleryImages } from '@/data/content';

export default function SmileGallery() {
    return (
        <section id="gallery" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Real Results</h2>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Smile Transformations</h3>
                    <p className="text-slate-600 mt-4">Witness the life-changing power of healthy smiles.</p>
                </div>

                {/* Horizontal Scroll Area */}
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center bg-slate-50 rounded-3xl overflow-hidden shadow-lg border border-slate-100 relative group"
                        >
                            <div className="grid grid-cols-2 h-[300px] md:h-[400px] relative">

                                {/* Before Image */}
                                <div className="relative h-full border-r border-white">
                                    <div className="absolute top-4 left-4 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full z-10 backdrop-blur-sm">BEFORE</div>
                                    {/* Placeholder if image fails */}
                                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                        <span className="text-sm">Before Image</span>
                                    </div>
                                    {/* In a real scenario, use actual images. Using a placeholder service for demonstration if local image missing */}
                                    <img
                                        src={`https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=400&q=80`}
                                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        alt="Before"
                                    />
                                </div>

                                {/* After Image */}
                                <div className="relative h-full">
                                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">AFTER</div>
                                    <div className="w-full h-full bg-emerald-100 flex items-center justify-center text-emerald-400">
                                        <span className="text-sm">After Image</span>
                                    </div>
                                    <img
                                        src={`https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80`}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        alt="After"
                                    />
                                </div>
                            </div>

                            <div className="p-6 bg-white">
                                <h4 className="text-lg font-bold text-slate-900">{image.title}</h4>
                                <p className="text-slate-500 text-sm">{image.description}</p>
                            </div>
                        </div>
                    ))}

                    {/* Call to action card at the end of scroll */}
                    <div className="flex-shrink-0 w-[85vw] md:w-[300px] snap-center bg-primary rounded-3xl overflow-hidden shadow-lg flex items-center justify-center p-8 text-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Ready for your transformation?</h3>
                            <div className="w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
