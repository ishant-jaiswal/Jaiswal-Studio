
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';

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
        <section id="contact" className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-primary text-sm uppercase tracking-widest font-semibold mb-3">Get in Touch</p>
                        <h2 className="text-4xl md:text-5xl font-serif mb-8">Let's Tell Your Story</h2>
                        <p className="text-gray-400 mb-12 font-light leading-relaxed">
                            Our 2026 & 2027 calendars are filling quickly. Reach out to discuss your cinematic vision and check availability for your date.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-surface p-3 rounded-full text-primary">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Email Us</h4>
                                    <a href="mailto:rkjaiswal221208@gmail.com" className="text-lg hover:text-primary transition-colors">rkjaiswal221208@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-surface p-3 rounded-full text-primary">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Studio</h4>
                                    <p className="text-lg text-gray-300">Sindhora Bazar, Varanasi, Uttar Pradesh, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-surface p-3 rounded-full text-primary">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Phone</h4>
                                    <p className="text-lg text-gray-300">+91 9451126046</p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <a
                                    href="https://wa.me/919451126046"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-[#25D366]/10 text-[#25D366] px-6 py-3 border border-[#25D366]/20 hover:bg-[#25D366] hover:text-white transition-all duration-300 rounded-sm w-full md:w-auto mt-4 md:mt-0 justify-center group"
                                >
                                    <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                                    <span className="font-bold tracking-widest text-xs uppercase">Message on WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-surface p-8 md:p-12 border border-white/5 rounded-sm"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-background border border-white/10 p-3 focus:border-primary outline-none transition-colors text-white"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500">Wedding Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full bg-background border border-white/10 p-3 focus:border-primary outline-none transition-colors text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-background border border-white/10 p-3 focus:border-primary outline-none transition-colors text-white"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Venue Location</label>
                                <input
                                    type="text"
                                    name="venue"
                                    value={formData.venue}
                                    onChange={handleChange}
                                    className="w-full bg-background border border-white/10 p-3 focus:border-primary outline-none transition-colors text-white"
                                    placeholder="City, Country"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Tell us your story</label>
                                <textarea
                                    rows="4"
                                    name="story"
                                    value={formData.story}
                                    onChange={handleChange}
                                    className="w-full bg-background border border-white/10 p-3 focus:border-primary outline-none transition-colors text-white"
                                    placeholder="Share a few details about your vision..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                onClick={handleSendInquiry}
                                className="w-full bg-primary text-black py-4 uppercase tracking-widest font-bold hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 group"
                            >
                                Send Inquiry <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
