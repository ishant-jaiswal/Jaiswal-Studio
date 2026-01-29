
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const RecentWork = () => {
    const works = [
        {
            title: "The Udaipur Grandeur",
            category: "Luxury Wedding",
            image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2940&auto=format&fit=crop"
        },
        {
            title: "Varanasi Soul",
            category: "Intimate Ceremony",
            image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2787&auto=format&fit=crop"
        },
        {
            title: "Jaipur Heritage",
            category: "Royal Celebration",
            image: "https://images.unsplash.com/photo-1587271407850-8d438913d2cd?q=80&w=2942&auto=format&fit=crop"
        }
    ];

    return (
        <section id="portfolio" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-primary text-sm uppercase tracking-widest font-semibold mb-3">Our Portfolio</p>
                        <h2 className="text-3xl md:text-5xl font-serif">Recent Masterpieces</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <div className="flex gap-2">
                            {/* Arrows could go here */}
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {works.map((work, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative cursor-pointer overflow-hidden aspect-[3/4]"
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
                            <img
                                src={work.image}
                                alt={work.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />

                            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    <span className="text-primary text-xs uppercase tracking-widest font-bold mb-2 block">{work.category}</span>
                                    <h3 className="text-2xl font-serif text-white">{work.title}</h3>
                                    <div className="mt-4 flex items-center gap-2 text-white/80 text-sm uppercase tracking-wide">
                                        <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                                            <Play size={12} fill="currentColor" />
                                        </div>
                                        Watch Film
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a href="#" className="inline-block px-8 py-3 border border-white/20 hover:border-primary hover:text-primary transition-colors duration-300 uppercase tracking-widest text-sm">View All Stories</a>
                </div>
            </div>
        </section>
    );
};

export default RecentWork;
