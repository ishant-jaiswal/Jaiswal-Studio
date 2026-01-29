
import { Instagram, Youtube, Facebook } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <img src={logo} alt="Jaiswal Studio" className="h-16 w-auto mb-3 mix-blend-screen" />
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Preserving elegance, frame by frame.</p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Youtube size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
                </div>

                <p className="text-gray-600 text-[10px] uppercase tracking-wider">
                    © 2026 Jaiswal Studio. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
