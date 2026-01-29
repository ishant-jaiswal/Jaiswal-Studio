
import { motion } from 'framer-motion';
import { Heart, Aperture, Hourglass } from 'lucide-react';

const Philosophy = () => {
    const values = [
        {
            icon: <Heart size={32} />,
            title: "Intimacy",
            description: "Capturing the quiet, profound moments of connection that others might miss."
        },
        {
            icon: <Aperture size={32} />,
            title: "Artistry",
            description: "Turning every frame into a piece of cinematic art through light, color, and composition."
        },
        {
            icon: <Hourglass size={32} />,
            title: "Timelessness",
            description: "Creating films that feel as beautiful and moving in fifty years as they do today."
        }
    ];

    return (
        <section id="about" className="py-24 bg-surface text-center">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-primary text-sm uppercase tracking-widest font-semibold mb-3">Our Core Values</p>
                    <h2 className="text-3xl md:text-5xl font-serif mb-16">The Philosophy of Cinema</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="p-10 border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-sm group relative overflow-hidden"
                        >
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
