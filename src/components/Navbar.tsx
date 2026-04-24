import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 overflow-hidden rounded-xl">
            <img src="/logo.jpg" alt="Dental Studio G.K Logo" className="w-full h-full object-cover scale-110" />
          </div>
          <span className="text-2xl font-bold font-serif tracking-tight text-primary">Dental Studio G.K</span>
        </div>

        <div className="hidden lg:flex items-center gap-10 font-medium text-primary/80">
          {['Home', 'About', 'Services', 'Doctors', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-secondary transition-colors text-sm uppercase tracking-widest">
              {item}
            </a>
          ))}
        </div>

        <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/20">
          Book Appointment
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
