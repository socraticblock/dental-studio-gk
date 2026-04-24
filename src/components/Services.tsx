import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Sparkles, Smile, ShieldCheck } from 'lucide-react';

const services = [
  { 
    title: 'Restorative Dentistry', 
    desc: 'Advanced procedures to restore the function and natural beauty of your teeth.',
    icon: <Activity className="w-8 h-8" />,
    color: 'from-blue-600 to-blue-900'
  },
  { 
    title: 'Aesthetic Practice', 
    desc: 'Personalized cosmetic treatments for a brighter, more confident smile.',
    icon: <Sparkles className="w-8 h-8" />,
    color: 'from-primary to-primary-dark'
  },
  { 
    title: 'Professional Hygiene', 
    desc: 'Deep cleaning and preventative care to maintain optimal oral health.',
    icon: <Smile className="w-8 h-8" />,
    color: 'from-blue-400 to-blue-700'
  },
  { 
    title: 'Orthodontics', 
    desc: 'Modern solutions for perfectly aligned teeth and a healthy bite.',
    icon: <ShieldCheck className="w-8 h-8" />,
    color: 'from-slate-700 to-slate-900'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-20"
        >
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-5xl md:text-6xl">Premium Dental <br /> <span className="font-serif italic text-secondary">Care Solutions</span></h2>
          </div>
          <button className="hidden md:block border-2 border-primary text-primary px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/20">
            View All Services
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative h-[450px] rounded-[40px] overflow-hidden p-10 flex flex-col justify-end border border-slate-100 shadow-xl hover:shadow-2xl transition-all"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              <div className="absolute inset-0 bg-slate-50 group-hover:bg-transparent transition-colors duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4 text-primary group-hover:text-white transition-colors duration-500">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  {service.desc}
                </p>
              </div>
              
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
