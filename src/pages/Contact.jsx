
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageCircle, Calendar, Send } from 'lucide-react';
import contactHeroIndianV2 from '../assets/contact_hero_indian_v2.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        venue: '',
        email: '',
        story: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSendInquiry = () => {
        const { name, date, venue, email, story } = formData;
        const subject = `Wedding Inquiry: ${name} - ${date}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ADate: ${date}%0D%0AVenue: ${venue}%0D%0A%0D%0AStory:%0D%0A${story}`;

        window.location.href = `mailto:rkjaiswal221208@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden">
                {/* Increased opacity for better visibility */}
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <img
                    src={contactHeroIndianV2}
                    alt="Contact Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary uppercase tracking-[0.3em] mb-4 font-semibold"
                    >
                        Let's capture your forever
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif text-white mb-6"
                    >
                        BOOK YOUR STORY
                    </motion.h1>
                </div>
            </div>

            <div className="container mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-2 gap-16 mb-24">
                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-serif mb-8 border-b border-white/10 pb-4">Get in Touch</h2>
                        <p className="text-gray-400 mb-12 font-light leading-relaxed">
                            Every love story is unique. We'd love to hear more about your vision and how we can preserve your most cherished memories.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 bg-surface border border-white/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest font-bold mb-1 text-gray-400">Email Us</h4>
                                    <a href="mailto:rkjaiswal221208@gmail.com" className="text-lg font-serif">rkjaiswal221208@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 bg-surface border border-white/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest font-bold mb-1 text-gray-400">Studio</h4>
                                    <p className="text-lg font-serif">Sindhora Bazar, Varanasi, Uttar Pradesh, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5 group">
                                <div className="w-12 h-12 bg-surface border border-white/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest font-bold mb-1 text-gray-400">Phone</h4>
                                    <p className="text-lg font-serif">+91 9451126046</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12">
                            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Prefer instant chat?</p>
                            <a
                                href="https://wa.me/919451126046"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-[#25D366]/10 text-[#25D366] px-8 py-4 border border-[#25D366]/20 hover:bg-[#25D366] hover:text-white transition-all duration-300 rounded-sm w-full md:w-auto justify-center group"
                            >
                                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                                <span className="font-bold tracking-widest text-xs uppercase">Message on WhatsApp</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Inquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#1a1a1a] p-8 md:p-12 rounded-sm border border-white/5 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                        <h3 className="text-2xl font-serif mb-8">Inquire About Your Date</h3>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 p-3 focus:border-primary focus:bg-black/60 outline-none transition-all text-white rounded-sm"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Wedding Date</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full bg-black/40 border border-white/10 p-3 focus:border-primary focus:bg-black/60 outline-none transition-all text-white rounded-sm appearance-none"
                                        />
                                        <Calendar size={16} className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">City & Venue</label>
                                    <input
                                        type="text"
                                        name="venue"
                                        value={formData.venue}
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 p-3 focus:border-primary focus:bg-black/60 outline-none transition-all text-white rounded-sm"
                                        placeholder="Where is the magic happening?"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 p-3 focus:border-primary focus:bg-black/60 outline-none transition-all text-white rounded-sm"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Tell us your story</label>
                                <textarea
                                    rows="4"
                                    name="story"
                                    value={formData.story}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 p-3 focus:border-primary focus:bg-black/60 outline-none transition-all text-white rounded-sm resize-none"
                                    placeholder="Share a few details about your vision..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                onClick={handleSendInquiry}
                                className="w-full bg-primary text-black py-4 uppercase tracking-widest font-bold hover:bg-white hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                Send Inquiry <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <div className="text-center">
                                <p className="text-[10px] uppercase tracking-widest text-gray-600 mt-4">Responds typically within 24 hours</p>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
