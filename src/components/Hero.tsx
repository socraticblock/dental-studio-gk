import { FC } from 'react';
import { motion } from 'framer-motion';

const Hero: FC = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-white">
      <div className="container flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-7xl lg:text-[6.5rem] leading-[1.05] mb-10">
            Trusted Dental <br />
            Care In Your <br />
            <span className="font-serif italic text-secondary">Community</span>
          </h1>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive dental care for all ages. Our team is dedicated 
            to helping you achieve a healthy, beautiful smile through personalized treatment.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl shadow-primary/20">
              Get Your Appointment
            </button>
          </div>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-azure -z-10 rounded-l-[100px]"></div>
    </section>
  );
};

export default Hero;
