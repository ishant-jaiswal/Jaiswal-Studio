
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2940&auto=format&fit=crop"
                    alt="Cinematic Wedding"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, letterSpacing: "1em" }}
                    animate={{ opacity: 1, letterSpacing: "0.3em" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-primary uppercase mb-6 text-sm md:text-base font-semibold"
                >
                    Eternal Frames
                </motion.p>

                <div className="overflow-hidden mb-6">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif italic leading-tight"
                    >
                        Crafting Your <span className="not-italic text-white">Forever</span>
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
                >
                    We are a team of passionate wedding filmmakers who believe every love story deserves a cinematic expression.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <a href="#portfolio" className="relative group overflow-hidden px-8 py-3 ring-1 ring-primary text-primary font-semibold tracking-widest uppercase inline-block">
                        <span className="relative z-10 group-hover:text-black transition-colors duration-500">Watch Our 2026 Reel</span>
                        <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ height: ["0%", "100%", "0%"], y: [0, 0, 50] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"
                ></motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
