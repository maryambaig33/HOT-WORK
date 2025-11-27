import React from 'react';
import { Check } from 'lucide-react';

const Membership: React.FC = () => {
  return (
    <section id="membership" className="py-24 bg-hotGray border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-hotOrange font-display text-2xl uppercase tracking-[0.2em] mb-2">Join the Studio</h2>
            <h3 className="text-5xl md:text-6xl font-display font-bold italic uppercase text-white mb-6">
              Sweat Everywhere
            </h3>
            <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
              Unlock 24/7 access to our infrared saunas and functional training zones. 
              With a HOTWORX membership, you're not just joining a gym; you're joining a lifestyle of accelerated results.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['24/7 Unlimited Access', 'Access to HOTWORX App', 'Global Access (Sweat Everywhere)', 'Functional Training Zone (FX Zone)'].map((item, idx) => (
                <li key={idx} className="flex items-center text-white">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-4 text-green-500">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="font-medium tracking-wide uppercase">{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full sm:w-auto bg-white text-hotDark hover:bg-gray-200 px-8 py-4 rounded-sm font-bold font-display text-xl uppercase tracking-widest skew-x-[-10deg] transition-all">
               <span className="block skew-x-[10deg]">View Membership Options</span>
            </button>
          </div>

          <div className="relative">
             <div className="absolute -inset-4 bg-hotOrange/20 blur-3xl rounded-full opacity-50"></div>
             <div className="relative bg-black border border-white/10 p-8 md:p-12 rounded-sm text-center">
               <span className="text-hotOrange font-display uppercase tracking-widest text-lg mb-2 block">Limited Time Offer</span>
               <h4 className="text-4xl md:text-5xl font-display font-bold text-white uppercase italic mb-6">
                 First Session Free
               </h4>
               <p className="text-gray-400 mb-8">
                 Experience the infrared difference yourself. No commitment required. 
                 Try a 15-minute HIIT or 30-minute Isometric session on us.
               </p>
               
               <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                 <input type="text" placeholder="Full Name" className="w-full bg-hotGray border border-white/10 p-4 text-white focus:border-hotOrange focus:outline-none placeholder-gray-500 rounded-sm" />
                 <input type="email" placeholder="Email Address" className="w-full bg-hotGray border border-white/10 p-4 text-white focus:border-hotOrange focus:outline-none placeholder-gray-500 rounded-sm" />
                 <input type="tel" placeholder="Phone Number" className="w-full bg-hotGray border border-white/10 p-4 text-white focus:border-hotOrange focus:outline-none placeholder-gray-500 rounded-sm" />
                 <button type="submit" className="w-full bg-hotOrange hover:bg-orange-600 text-white p-4 font-bold font-display text-xl uppercase tracking-widest transition-colors rounded-sm">
                   Claim Free Pass
                 </button>
               </form>
               <p className="mt-4 text-xs text-gray-600">
                 By submitting this form, you agree to receive texts and emails from HOTWORX Houston Katy Green.
               </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Membership;
