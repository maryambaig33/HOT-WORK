import React from 'react';
import { WORKOUTS } from '../constants';
import { Clock, Flame } from 'lucide-react';

const Workouts: React.FC = () => {
  return (
    <section id="workouts" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
            <h2 className="text-hotOrange font-display text-2xl uppercase tracking-[0.2em] mb-2">Our Classes</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold italic uppercase text-white">Find Your Burn</h3>
          </div>
          <p className="text-gray-400 max-w-sm mt-4 md:mt-0 text-right md:text-left">
            From zen to high intensity, our virtual instructors guide you through efficient workouts inside our patented saunas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKOUTS.map((workout) => (
            <div key={workout.id} className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer">
              {/* Background Image */}
              <img 
                src={workout.image} 
                alt={workout.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                 <div className="inline-block px-3 py-1 bg-hotOrange text-white text-xs font-bold uppercase tracking-wider mb-2 skew-x-[-10deg]">
                  <span className="block skew-x-[10deg]">{workout.type}</span>
                </div>
                <h4 className="text-4xl font-display font-bold uppercase italic mb-4 group-hover:text-hotOrange transition-colors">
                  {workout.title}
                </h4>
                
                <div className="flex items-center space-x-4 text-sm font-medium text-gray-300">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1 text-hotOrange" />
                    {workout.duration}
                  </div>
                   <div className="flex items-center">
                    <Flame size={16} className="mr-1 text-hotOrange" />
                    {workout.calories} Cal
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workouts;
