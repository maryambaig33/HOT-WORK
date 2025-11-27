import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-hotDark/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-display font-bold italic tracking-tighter text-white">
              HOT<span className="text-hotOrange">WORX</span>
            </div>
            <div className="hidden md:flex items-center text-xs text-gray-400 ml-4 border-l border-gray-600 pl-4">
               <MapPin size={14} className="mr-1 text-hotOrange" />
               Houston Katy Green
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 font-display uppercase tracking-widest text-lg">
            <a href="#workouts" className="hover:text-hotOrange transition-colors">Workouts</a>
            <a href="#benefits" className="hover:text-hotOrange transition-colors">Benefits</a>
            <a href="#membership" className="hover:text-hotOrange transition-colors">Membership</a>
            <button className="bg-hotOrange hover:bg-orange-600 text-white px-6 py-2 rounded-sm font-bold skew-x-[-10deg] transition-transform active:scale-95">
              <span className="block skew-x-[10deg]">Free Session</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-hotDark border-b border-white/10 py-4 px-4 flex flex-col space-y-4">
          <a href="#workouts" onClick={() => setMobileMenuOpen(false)} className="text-xl font-display uppercase">Workouts</a>
          <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="text-xl font-display uppercase">Benefits</a>
          <a href="#membership" onClick={() => setMobileMenuOpen(false)} className="text-xl font-display uppercase">Membership</a>
          <button className="bg-hotOrange w-full py-3 font-display uppercase font-bold text-xl">
            Claim Free Session
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
