import React from 'react';
import { ChevronDown, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Gym background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hotDark via-hotDark/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-hotDark via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-6 border border-white/20 shadow-lg">
            <div className="w-2 h-2 rounded-full bg-hotOrange animate-pulse"></div>
            <span className="text-sm font-medium tracking-wider uppercase">Houston (Katy Green) • Open 24/7</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase leading-[0.9] italic mb-6 drop-shadow-2xl">
            More Workout <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hotOrange to-yellow-500 drop-shadow-sm">Less Time</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl font-light drop-shadow-md">
            Discover 3D Training in Houston: <br/>
            <strong className="text-white">Heat + Infrared Energy + Exercise</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-hotOrange hover:bg-orange-600 text-white px-8 py-4 rounded-sm font-bold font-display text-xl uppercase tracking-widest skew-x-[-10deg] transition-all hover:scale-105 shadow-lg shadow-orange-900/20">
              <span className="block skew-x-[10deg]">Start for Free</span>
            </button>
            <button className="flex items-center justify-center space-x-3 px-8 py-4 border border-white/30 hover:bg-white/10 rounded-sm font-bold font-display text-xl uppercase tracking-widest skew-x-[-10deg] transition-all backdrop-blur-sm">
              <span className="flex items-center skew-x-[10deg]">
                <PlayCircle className="mr-2" /> Watch Tour
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/50" />
      </div>
    </div>
  );
};

export default Hero;