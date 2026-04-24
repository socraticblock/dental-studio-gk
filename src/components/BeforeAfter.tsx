import React, { useState, useRef, useCallback } from 'react';

const tabs = ["Aesthetic Dentistry", "Orthodontics", "Implantology", "Cleaning"];

const BeforeAfter: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section className="py-32 bg-azure/50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-5xl text-primary">Real stories <br /> <span className="font-serif italic text-secondary">Real smiles</span></h2>
        </div>

        {/* Tab System */}
        <div className="flex justify-center gap-8 mb-16 border-b border-slate-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
                activeTab === tab ? 'text-primary' : 'text-slate-400'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Draggable Slider Module */}
        <div 
          ref={containerRef}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
          className="max-w-4xl mx-auto relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-black select-none group cursor-ew-resize"
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <img src="/after.png" alt="After Treatment" className="w-full h-full object-cover pointer-events-none" />
            <div className="absolute top-8 right-8 bg-primary/80 backdrop-blur-md text-white px-5 py-2 rounded-full text-[10px] tracking-widest font-black shadow-lg border border-white/20">AFTER</div>
          </div>
          
          {/* Before Image (Clipped Overlay) */}
          <div 
            className="absolute inset-0 pointer-events-none z-10"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="/before.png" 
              alt="Before Treatment" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md text-white px-5 py-2 rounded-full text-[10px] tracking-widest font-black shadow-lg border border-white/20">BEFORE</div>
          </div>

          {/* Draggable Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white z-20 flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-primary font-black text-[14px] border-4 border-primary group-hover:scale-110 transition-transform">
              <div className="flex gap-1.5">
                <span>«</span>
                <span>»</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
           <p className="text-xl font-serif italic text-primary leading-relaxed">
             "Our transformation procedures are designed to restore not just your smile, but your confidence."
           </p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
