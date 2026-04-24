import { FC } from 'react';
import { motion } from 'framer-motion';
import { Building2, Microscope, Wand2 } from 'lucide-react';

const About: FC = () => {
  return (
    <section id="about" className="py-32 bg-azure/30 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl bg-white flex items-center justify-center text-secondary/10">
              <Building2 size={300} strokeWidth={0.5} />
            </div>
            {/* Absolute element */}
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[32px] shadow-2xl border border-slate-100">
              <p className="text-5xl font-serif font-bold text-secondary mb-2">15k+</p>
              <p className="text-primary font-black uppercase tracking-widest text-[10px]">Happy Patients</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight font-serif">A legacy of care, <br /><span className="italic text-secondary">digitally redefined.</span></h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">
              While our space has evolved into a state-of-the-art facility, our core 
              value remains unchanged: providing warm, family-oriented care. We've 
              invested in the world's most advanced digital dentistry tools to ensure your journey is as comfortable as it is effective.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-secondary mb-4">
                  <Microscope className="w-8 h-8" />
                </div>
                <p className="font-black text-primary uppercase tracking-widest text-xs">Digital Imaging</p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-secondary mb-4">
                  <Wand2 className="w-8 h-8" />
                </div>
                <p className="font-black text-primary uppercase tracking-widest text-xs">Painless Care</p>
              </div>
            </div>

            <button className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20">
              Discover Our Method
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
