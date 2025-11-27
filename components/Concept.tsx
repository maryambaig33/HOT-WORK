import React from 'react';
import { Flame, Sun, Activity } from 'lucide-react';

const Concept: React.FC = () => {
  return (
    <section className="py-24 bg-hotDark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-hotOrange/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-hotOrange font-display text-2xl uppercase tracking-[0.2em] mb-2">The Science</h2>
          <h3 className="text-5xl md:text-6xl font-display font-bold italic uppercase text-white">3D Training</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-hotGray p-8 rounded-sm border border-white/5 hover:border-hotOrange/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Flame size={100} />
            </div>
            <div className="w-16 h-16 bg-hotOrange/10 rounded-full flex items-center justify-center mb-6 text-hotOrange group-hover:bg-hotOrange group-hover:text-white transition-colors">
              <Flame size={32} />
            </div>
            <h4 className="text-3xl font-display font-bold uppercase mb-4 italic">Heat</h4>
            <p className="text-gray-400 leading-relaxed">
              Elevates core body temperature to accelerate metabolism and create a caloric afterburn effect that lasts long after your session.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-hotGray p-8 rounded-sm border border-white/5 hover:border-hotOrange/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Sun size={100} />
            </div>
            <div className="w-16 h-16 bg-hotOrange/10 rounded-full flex items-center justify-center mb-6 text-hotOrange group-hover:bg-hotOrange group-hover:text-white transition-colors">
              <Sun size={32} />
            </div>
            <h4 className="text-3xl font-display font-bold uppercase mb-4 italic">Infrared</h4>
            <p className="text-gray-400 leading-relaxed">
              Penetrates 1.5 inches into the skin to detoxify the body at a cellular level, reduce inflammation, and improve circulation.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-hotGray p-8 rounded-sm border border-white/5 hover:border-hotOrange/50 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Activity size={100} />
            </div>
            <div className="w-16 h-16 bg-hotOrange/10 rounded-full flex items-center justify-center mb-6 text-hotOrange group-hover:bg-hotOrange group-hover:text-white transition-colors">
              <Activity size={32} />
            </div>
            <h4 className="text-3xl font-display font-bold uppercase mb-4 italic">Exercise</h4>
            <p className="text-gray-400 leading-relaxed">
              Isometric postures and HIIT sessions led by virtual instructors to tone muscle and torch calories in just 15-30 minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;
