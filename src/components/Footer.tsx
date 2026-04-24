import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-32 pb-16 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 overflow-hidden rounded-2xl">
                <img src="/logo.jpg" alt="Dental Studio G.K Logo" className="w-full h-full object-cover scale-110" />
              </div>
              <span className="text-3xl font-bold font-serif tracking-tight">Dental Studio G.K</span>
            </div>
            
            <h3 className="text-5xl font-serif mb-12 leading-tight">Trusted Dental <br /> Care In Your <br /> <span className="italic text-secondary">Community</span></h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-6">Contact Us</p>
                <ul className="space-y-4 text-white/70">
                  <li className="text-xl text-white">599 50 15 00</li>
                  <li>info@dentalstudiogk.com</li>
                  <li>18 Evdoshvili St, Tbilisi</li>
                </ul>
              </div>
              <div>
                <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-6">Follow Us</p>
                <ul className="space-y-4 text-white/70">
                  <li><a href="#" className="hover:text-secondary transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-secondary transition-colors">Facebook</a></li>
                  <li><a href="#" className="hover:text-secondary transition-colors">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-primary-dark/50 backdrop-blur-xl p-10 md:p-14 rounded-[32px] border border-blue-800/30 shadow-2xl"
          >
            <h4 className="text-3xl font-serif mb-8 text-white">Book Your Appointment</h4>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[2px] text-white/40">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-primary-dark/40 border border-blue-700/50 rounded-xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-secondary transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[2px] text-white/40">Service</label>
                    <select className="w-full bg-primary-dark/40 border border-blue-700/50 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-secondary transition-colors appearance-none">
                      <option>General Exam</option>
                      <option>Orthodontics</option>
                      <option>Implantology</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[2px] text-white/40">Date</label>
                    <input type="date" className="w-full bg-primary-dark/40 border border-blue-700/50 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-secondary transition-colors" />
                 </div>
              </div>
              <div className="pt-4">
                <button className="w-full bg-secondary text-primary font-bold py-5 rounded-xl hover:bg-white transition-all shadow-lg text-lg">
                  Confirm Booking
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-xs font-bold uppercase tracking-widest">
           <p>© 2026 Dental Studio G.K. Designed by <a href="https://www.genezisi.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4">www.genezisi.com</a></p>
           <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
