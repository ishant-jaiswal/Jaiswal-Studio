
import { motion } from 'framer-motion';
import { Coffee, Camera, Film } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const About = () => {
    const process = [
        {
            icon: <Coffee size={32} />,
            title: "Connection",
            desc: "We begin by understanding your unique bond. Every couple has a rhythm, and our goal is to sync with yours before we even pick up a camera."
        },
        {
            icon: <Camera size={32} />,
            title: "Production",
            desc: "On the day, we are shadow and light. Unobtrusive yet omnipresent, capturing candid emotions and grand moments with equal reverence."
        },
        {
            icon: <Film size={32} />,
            title: "Curation",
            desc: "The magic happens in the edit. We weave sound, color, and narrative into a film that doesn't just document the day, but retells the feeling."
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-background min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid lg:grid-cols-2 gap-16 items-center mb-24"
                >
                    <div className="relative">
                        <div className="absolute -inset-4 border border-primary/20 z-0 translate-x-4 translate-y-4"></div>
                        <img
                            src={profileImg}
                            alt="Cinematographer"
                            className="w-full relative z-10 grayscale hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl"
                        />
                    </div>
                    <div>
                        <span className="text-primary text-sm uppercase tracking-widest font-semibold block mb-2">The Studio</span>
                        <h1 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">We Don't Just Capture <br /> Weddings. We Create <br /><span className="italic text-primary">Cinematic Love Stories.</span></h1>
                        <p className="text-gray-400 mb-6 font-light leading-relaxed">
                            Founded by Rajesh Kumar Jaiswal, Jaiswal Studio began with a simple camera and a shared obsession for cinematic storytelling. Today, we travel worldwide to capture the most exclusive unions, bringing a fashion-forward, documentary-style approach to wedding videography.
                        </p>
                        <p className="text-gray-400 mb-8 font-light leading-relaxed">
                            Our mission is to preserve the soul of your wedding day. We don't just record events; we weave emotions, glances, and whispers into a legacy.
                        </p>
                        <div className="font-serif text-3xl italic text-white/50">Rajesh Kumar Jaiswal</div>
                    </div>
                </motion.div>

                {/* Process Section */}
                <div className="bg-surface p-12 md:p-24 rounded-sm border border-white/5">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif mb-4">The Creative Process</h2>
                        <div className="w-24 h-1 bg-primary mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {process.map((step, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-20 h-20 mx-auto bg-black rounded-full flex items-center justify-center text-primary mb-8 border border-white/10 group-hover:border-primary transition-colors duration-500">
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-serif mb-4 text-white">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-light text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
