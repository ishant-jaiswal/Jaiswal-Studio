import { motion } from 'framer-motion';
import { Film, Camera, Drone, Heart, Shield, Award, Eye, ArrowRight } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Film size={32} />,
            title: "Cinematic Wedding Films",
            desc: "Masterfully edited feature films capturing every emotion of your special day with a Hollywood feel.",
            link: "#"
        },
        {
            icon: <Camera size={32} />,
            title: "Wedding Photography",
            desc: "Timeless stills that freeze moments of love and elegance forever, curated with high-end post-processing.",
            link: "#"
        },
        {
            icon: <Drone size={32} />,
            title: "Drone Coverage",
            desc: "Breathtaking 4K aerial perspectives of your venue and ceremony for a grand cinematic scale.",
            link: "#"
        },
        {
            icon: <Heart size={32} />,
            title: "Pre-Wedding Films",
            desc: "Intimate storytelling sessions that celebrate your journey and personality before the 'I Do'.",
            link: "#"
        }
    ];

    const experienceFeatures = [
        {
            icon: <Award size={24} />,
            title: "Unrivaled Quality",
            desc: "We use industry-leading 8K equipment and professional optics."
        },
        {
            icon: <Film size={24} />,
            title: "Story-Driven Editing",
            desc: "We don't just record; we weave a narrative unique to your love story."
        },
        {
            icon: <Eye size={24} />,
            title: "Discreet Presence",
            desc: "Capturing raw emotions without interrupting the natural flow of your day."
        }
    ];

    return (
        <div className="bg-[#0a0a0a] min-h-screen text-gray-200">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2940&auto=format&fit=crop"
                    alt="Services Hero"
                    className="w-full h-full object-cover absolute inset-0"
                />
                <div className="relative z-20 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif text-white mb-6 font-bold"
                    >
                        Our Services
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="w-24 h-1 bg-primary mx-auto mb-6"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-300 max-w-2xl mx-auto font-light text-lg"
                    >
                        Bespoke wedding videography and photography crafted for couples who value timeless elegance and cinematic storytelling.
                    </motion.p>
                </div>
            </div>

            {/* Bespoke Collections Grid */}
            <div className="container mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <span className="text-primary text-xs uppercase tracking-[0.2em] font-bold">Excellence in Every Frame</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-white mt-4">Bespoke Wedding Collections</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#151515] border border-white/5 p-8 rounded-sm hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                {service.desc}
                            </p>
                            <a href={service.link} className="flex items-center gap-2 text-primary text-[10px] uppercase tracking-widest font-bold group-hover:gap-3 transition-all">
                                Learn More <ArrowRight size={14} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* The Eternal Experience */}
            <div className="bg-[#111] py-24 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-[#1a1a1a] rounded-2xl p-12 md:p-16 border border-white/5 relative overflow-hidden">
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] rounded-full pointing-events-none"></div>

                        <div className="relative z-10 text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">The Eternal Experience</h2>
                            <p className="text-gray-400">Why elite couples choose our studio for their most precious memories.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 relative z-10">
                            {experienceFeatures.map((feat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 bg-surface border border-white/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6 shadow-lg shadow-black/50">
                                        {feat.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-3">{feat.title}</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-wider">
                                        {feat.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="py-24 text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Ready to capture your forever?</h2>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <a href="/contact" className="bg-primary text-black px-8 py-4 uppercase tracking-widest font-bold text-xs hover:bg-white transition-colors rounded-sm shadow-lg shadow-primary/20">
                        Check Availability
                    </a>
                    <a href="/portfolio" className="border border-white/20 text-white px-8 py-4 uppercase tracking-widest font-bold text-xs hover:bg-white hover:text-black transition-colors rounded-sm">
                        View Our Portfolio
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;
