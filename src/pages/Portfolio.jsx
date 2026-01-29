
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Monitor, Palette, Mic, Camera } from 'lucide-react';

const Portfolio = () => {
    const [filter, setFilter] = useState('All Stories');

    const filters = ['All Stories', 'Hindu', 'Muslim', 'Christian', 'Destination'];

    const projects = [
        {
            title: "Aarav & Ishani",
            category: "Royal Hindu Wedding",
            location: "Jaipur Palace",
            image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2787&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            title: "Zayan & Myra",
            category: "Nikah Elegance",
            location: "Dubai Desert",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2940&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            title: "Julian & Clara",
            category: "Cathedral Vows",
            location: "Rome Heritage",
            image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2940&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            title: "Sam & Maya",
            category: "Destination Wedding",
            location: "Bali Sunset",
            image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2938&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            title: "Kabir & Ananya",
            category: "Traditional Ceremony",
            location: "Varanasi Ghats",
            image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2787&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
            title: "David & Sarah",
            category: "Modern Minimalism",
            location: "London Loft",
            image: "https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=2938&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
    ];

    const filteredProjects = filter === 'All Stories'
        ? projects
        : projects.filter(p => {
            if (filter === 'Hindu') return p.category.includes('Hindu') || p.category.includes('Traditional');
            if (filter === 'Muslim') return p.category.includes('Nikah');
            if (filter === 'Christian') return p.category.includes('Cathedral') || p.category.includes('Modern');
            if (filter === 'Destination') return p.category.includes('Destination');
            return true;
        });

    const features = [
        { icon: <Monitor size={24} />, title: "Ultra 4K Quality", desc: "Every frame captured in breathtaking detail for future-proof memories." },
        { icon: <Palette size={24} />, title: "Cinematic Grading", desc: "Custom color profiles that evoke the specific emotion of your unique day." },
        { icon: <Mic size={24} />, title: "Atmospheric Sound", desc: "Pristine audio recording of vows and ambient layers for deep immersion." },
        { icon: <Camera size={24} />, title: "Story-led Editing", desc: "We don't just record clips; we weave a narrative of your love story." },
    ];

    return (
        <div className="pt-32 pb-24 bg-[#1a1818] min-h-screen text-[#e0dede]">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-l-4 border-primary pl-6">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-5xl font-serif font-bold text-white mb-2"
                        >
                            The Portfolio
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 max-w-xl italic font-light"
                        >
                            Capturing timeless stories with cinematic elegance and emotional depth.
                        </motion.p>
                    </div>
                    <motion.a
                        href="https://www.instagram.com/jaiswalstudiox?utm_source=qr&igsh=c2cwd2k0aTB1aGQ4"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 md:mt-0 px-6 py-2 bg-[#2a2a2a] hover:bg-[#333] text-white rounded-md flex items-center gap-2 transition-colors border border-white/10"
                    >
                        <Play size={16} fill="white" /> View Showreel
                    </motion.a>
                </div>

                {/* Filters */}
                <div className="mb-12 border-b border-white/10">
                    <div className="flex flex-wrap gap-8">
                        {filters.map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`text-xs font-bold uppercase tracking-widest pb-4 border-b-2 transition-all duration-300 ${filter === f ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-white'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 gap-8 mb-24"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.a
                                layout
                                key={project.title}
                                href={project.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="group relative cursor-pointer overflow-hidden aspect-[16/9] rounded-2xl block"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <span className="text-primary text-[10px] uppercase tracking-widest font-bold mb-2 block">{project.category}</span>
                                    <h3 className="text-2xl font-bold text-white leading-tight">{project.title} <span className="font-light text-gray-300">| {project.location}</span></h3>
                                </div>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Experience Detail Section */}
                <div className="border-t border-white/10 pt-16">
                    <h2 className="text-2xl font-bold font-serif mb-12 text-white">Experience the Detail</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {features.map((f, i) => (
                            <div key={i}>
                                <div className="text-primary mb-4 flex items-center gap-2">
                                    <div className="bg-[#2a2727] p-2 rounded-md">{f.icon}</div>
                                </div>
                                <h4 className="text-md font-bold text-white mb-2">{f.title}</h4>
                                <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;
