import { FC } from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const doctors = [
  { name: 'Dr. Giorgi K.', exp: '15+ Years' },
  { name: 'Dr. Mariam T.', exp: '10+ Years' },
  { name: 'Dr. Luka B.', exp: '8+ Years' },
  { name: 'Dr. Elena S.', exp: '12+ Years' }
];

const Team: FC = () => {
  return (
    <section id="doctors" className="py-32 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">The Specialists</span>
          <h2 className="text-5xl md:text-6xl mx-auto max-w-2xl">Meet The Minds <br /> <span className="font-serif italic text-secondary">Behind Your Smile</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary rounded-[40px] p-4 text-center group border border-primary-dark shadow-2xl hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="relative aspect-square rounded-[32px] overflow-hidden mb-6 bg-primary-dark/50 flex items-center justify-center text-white/10 group-hover:text-secondary/20 transition-colors duration-500">
                <User size={120} strokeWidth={1} />
                
                {/* Floating Experience Badge */}
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full">
                  <span className="text-white text-[10px] font-black tracking-widest uppercase">{doc.exp}</span>
                </div>
              </div>
              <div className="pb-4">
                <h4 className="text-white text-2xl font-serif mb-2">{doc.name}</h4>
                <p className="text-secondary/80 text-[10px] font-black tracking-[0.2em] uppercase">Dental Expert</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
