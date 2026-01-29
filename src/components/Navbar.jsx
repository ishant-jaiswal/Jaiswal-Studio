
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || location.pathname !== '/' ? 'bg-black/80 backdrop-blur-lg border-b border-white/5 py-2' : 'bg-transparent py-6'}`}>
            <div className="w-full px-8 md:px-12 flex justify-between items-center h-20">
                {/* Logo (Left) */}
                <Link to="/" className="flex items-center gap-4 group">
                    <img src={logo} alt="Jaiswal Studio" className="h-14 w-auto object-contain mix-blend-screen transition-transform duration-500 group-hover:scale-105" />
                    <span className="text-lg md:text-xl font-serif tracking-[0.2rem] font-medium text-white uppercase translate-y-0.5">
                        Jaiswal Studio
                    </span>
                </Link>

                {/* Right Side (Links + Button) */}
                <div className="hidden lg:flex items-center gap-12">
                    <div className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-[11px] uppercase tracking-[0.25em] font-light hover:text-primary transition-all duration-300 relative group/link ${isActive(link.href) ? 'text-primary' : 'text-white/70'}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-full h-px bg-primary transform origin-left transition-transform duration-300 ${isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100'}`}></span>
                            </Link>
                        ))}
                    </div>
                    <Link to="/investment" className="px-8 py-3 bg-primary text-black font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-[0_0_20px_rgba(207,185,98,0.2)]">
                        Book Consultation
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="lg:hidden text-white z-50 p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-t border-white/10 h-screen"
                    >
                        <div className="flex flex-col p-6 gap-8 items-center justify-center h-full">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-2xl uppercase tracking-widest hover:text-primary ${isActive(link.href) ? 'text-primary' : 'text-white'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/investment"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 px-10 py-4 bg-primary text-black font-bold uppercase text-sm tracking-widest hover:bg-white transition-all duration-300"
                            >
                                Book Consultation
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
