
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Services = () => {
    const packages = [
        {
            name: "Silver",
            subtitle: "The Essential",
            price: "Starts at $3,500",
            features: [
                "1 Lead Cinematographer",
                "6 Hours Coverage",
                "3-5 Minute Highlight Film",
                "Digital Gallery Delivery"
            ]
        },
        {
            name: "Platinum",
            subtitle: "The Masterpiece",
            price: "Starts at $6,200",
            featured: true,
            features: [
                "2 Cinematographers + Assistant",
                "Full Day Coverage",
                "10-12 Minute Feature Film",
                "Drone Cinematography",
                "Full Raw Footage Archive",
                "4K Luxury USB Presentation Box"
            ]
        },
        {
            name: "Gold",
            subtitle: "The Signature",
            price: "Starts at $4,800",
            features: [
                "2 Lead Cinematographers",
                "8 Hours Coverage",
                "5-7 Minute Highlight Film",
                "Drone Footage Included"
            ]
        }
    ];

    return (
        <section id="investment" className="py-24 bg-surface relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary text-sm uppercase tracking-widest font-semibold mb-3"
                    >
                        Cinematic Excellence
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-5xl font-serif mb-6"
                    >
                        Integration & Investment
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light">
                        Every frame is a legacy. We offer bespoke cinematic storytelling for couples who value art, emotion, and timeless elegance.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative p-8 border ${pkg.featured ? 'border-primary bg-primary/5' : 'border-white/10 hover:border-white/20 bg-background'} transition-all duration-300 rounded-sm`}
                        >
                            {pkg.featured && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-[10px] uppercase font-bold tracking-widest px-4 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <span className="text-primary text-xs uppercase tracking-widest font-bold block mb-2">{pkg.subtitle}</span>
                                <h3 className="text-3xl font-serif mb-4">{pkg.name}</h3>
                                <p className="text-white/60 text-sm mb-6">{pkg.features[1]}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-8 border-t border-white/10">
                                <p className="text-lg font-serif mb-6">{pkg.price}</p>
                                <a
                                    href="#contact"
                                    className={`block w-full text-center py-3 text-sm uppercase tracking-widest font-semibold border ${pkg.featured ? 'bg-primary text-black border-primary hover:bg-white' : 'border-white/30 hover:border-primary hover:text-primary'} transition-all duration-300`}
                                >
                                    Enquire Now
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
