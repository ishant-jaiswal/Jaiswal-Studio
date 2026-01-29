import { motion } from 'framer-motion';
import { Check, Heart, Zap, Clock, Play, Database, Drone, Camera } from 'lucide-react';

const Investment = () => {
    return (
        <div className="pt-24 pb-24 bg-[#0a0a0a] min-h-screen text-gray-200">
            {/* Header */}
            <div className="container mx-auto px-6 text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block border border-primary/30 rounded-full px-6 py-2 mb-6"
                >
                    <span className="text-primary text-xs uppercase tracking-[0.2em]">Cinematic Excellence</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-serif text-white mb-6 font-thin"
                >
                    Investment
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    Every frame is a legacy. We offer bespoke cinematic storytelling for couples who value art, emotion, and timeless elegance.
                </motion.p>
            </div>

            {/* Pricing Cards */}
            <div className="container mx-auto px-6 mb-32">
                <div className="grid lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">

                    {/* Silver */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#111] p-10 rounded-2xl border border-white/5 h-full flex flex-col hover:border-white/10 transition-colors"
                    >
                        <span className="text-primary text-[10px] uppercase tracking-widest font-bold mb-4 block">The Essential</span>
                        <h3 className="text-4xl font-serif text-white mb-8 font-light">Silver</h3>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-8 border-b border-white/10 pb-4">6 Hours Coverage</p>

                        <ul className="space-y-5 mb-12 flex-grow">
                            <li className="flex gap-4 items-center text-sm font-light text-gray-300">
                                <span className="bg-[#1a1a1a] p-1 rounded-full"><Camera size={12} className="text-primary" /></span> 1 Lead Cinematographer
                            </li>
                            <li className="flex gap-4 items-center text-sm font-light text-gray-300">
                                <span className="bg-[#1a1a1a] p-1 rounded-full"><Play size={12} className="text-primary" /></span> 3-5 Minute Highlight Film
                            </li>
                            <li className="flex gap-4 items-center text-sm font-light text-gray-300">
                                <span className="bg-[#1a1a1a] p-1 rounded-full"><Database size={12} className="text-primary" /></span> Digital Gallery Delivery
                            </li>
                        </ul>

                        <div className="mt-auto">
                            <p className="text-primary text-xl font-serif mb-6">Starts at <span className="font-bold">$3,500</span></p>
                            <button className="w-full py-4 border border-white/10 text-white text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
                                Enquire Now
                            </button>
                        </div>
                    </motion.div>

                    {/* Platinum (Center) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#111] p-10 rounded-2xl border border-primary/50 relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(207,185,98,0.05)]"
                    >
                        <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary text-black text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest rounded-full shadow-lg shadow-primary/20">
                            Most Popular
                        </div>

                        <span className="text-primary text-[10px] uppercase tracking-widest font-bold mb-4 block">The Masterpiece</span>
                        <h3 className="text-5xl font-serif text-white mb-8 font-light">Platinum</h3>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-8 border-b border-white/10 pb-4">Full Day Coverage</p>

                        <ul className="space-y-5 mb-12">
                            <li className="flex gap-4 items-center text-sm font-light text-gray-300">
                                <span className="bg-[#1a1a1a] p-1 rounded-full"><Camera size={12} className="text-primary" /></span> 2 Cinematographers + Assistant
                            </li>
                            <li className="flex gap-4 items-center text-sm font-light text-gray-300">
                                <span className="bg-[#1a1a1a] p-1 rounded-full"><Play size={12} className="text-primary" /></span> 10-12 Minute Feature Film
                            </li>
                            <li className="flex gap-4 items-center text-sm font-light text-gray-300">
                                <span className="bg-[#1a1a1a] p-1 rounded-full"><Drone size={12} className="text-primary" /></span> Advanced Drone Cinematography
                            </li>
                            <li className="flex gap-4 items-center text-sm font-light text-gray-300">
                                <span className="bg-[#1a1a1a] p-1 rounded-full"><Database size={12} className="text-primary" /></span> Full Raw Footage Archive
                            </li>
                            <li className="flex gap-4 items-center text-sm font-light text-gray-300">
                                <span className="bg-[#1a1a1a] p-1 rounded-full"><Zap size={12} className="text-primary" /></span> 4K Luxury USB Presentation Box
                            </li>
                        </ul>

                        <div className="mt-auto">
                            <p className="text-primary text-xl font-serif mb-6">Starts at <span className="font-bold">$6,200</span></p>
                            <button className="w-full py-4 bg-primary text-black text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 font-bold shadow-lg shadow-primary/20">
                                Enquire Now
                            </button>
                        </div>
                    </motion.div>

                    {/* Gold */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-[#111] p-10 rounded-2xl border border-white/5 h-full flex flex-col hover:border-white/10 transition-colors"
                    >
                        <span className="text-primary text-[10px] uppercase tracking-widest font-bold mb-4 block">The Signature</span>
                        <h3 className="text-4xl font-serif text-white mb-8 font-light">Gold</h3>
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-8 border-b border-white/10 pb-4">8 Hours Coverage</p>

                        <ul className="space-y-5 mb-12 flex-grow">
                            <li className="flex gap-4 items-center text-sm font-light text-gray-300">
                                <span className="bg-[#1a1a1a] p-1 rounded-full"><Camera size={12} className="text-primary" /></span> 2 Lead Cinematographers
                            </li>
                            <li className="flex gap-4 items-center text-sm font-light text-gray-300">
                                <span className="bg-[#1a1a1a] p-1 rounded-full"><Play size={12} className="text-primary" /></span> 5-7 Minute Highlight Film
                            </li>
                            <li className="flex gap-4 items-center text-sm font-light text-gray-300">
                                <span className="bg-[#1a1a1a] p-1 rounded-full"><Drone size={12} className="text-primary" /></span> Drone Footage Included
                            </li>
                        </ul>

                        <div className="mt-auto">
                            <p className="text-primary text-xl font-serif mb-6">Starts at <span className="font-bold">$4,800</span></p>
                            <button className="w-full py-4 border border-white/10 text-white text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
                                Enquire Now
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Enhancements */}
            <div className="container mx-auto px-6 mb-24 max-w-7xl">
                <h2 className="text-2xl font-serif text-white mb-12">Bespoke Enhancements</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#111] p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all group"
                    >
                        <Heart className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500" size={24} fill="currentColor" />
                        <h4 className="text-lg font-bold text-white mb-3">Engagement Sessions</h4>
                        <p className="text-sm text-gray-500 leading-relaxed font-light">
                            A cinematic love story film captured before your wedding day to celebrate your unique connection.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#111] p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all group"
                    >
                        <Zap className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500" size={24} fill="currentColor" />
                        <h4 className="text-lg font-bold text-white mb-3">Same-day Edits</h4>
                        <p className="text-sm text-gray-500 leading-relaxed font-light">
                            Experience the magic of your ceremony shared as a cinematic teaser during your evening reception.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#111] p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all group"
                    >
                        <Clock className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500" size={24} />
                        <h4 className="text-lg font-bold text-white mb-3">Express Delivery</h4>
                        <p className="text-sm text-gray-500 leading-relaxed font-light">
                            Prioritized post-production with your cinematic feature delivered within 14 business days.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Investment;
