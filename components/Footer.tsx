import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="text-3xl font-display font-bold italic tracking-tighter text-white mb-6">
              HOT<span className="text-hotOrange">WORX</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              The first ever 24-hour infrared fitness studio. Experience the power of 3D training and achieve more in less time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-hotOrange transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-hotOrange transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-hotOrange transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display uppercase tracking-widest mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="text-hotOrange mr-3 mt-1 flex-shrink-0" />
                <span>11200 Katy Fwy Ste 600,<br/>Houston, TX 77043</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-hotOrange mr-3 flex-shrink-0" />
                <span>(832) 913-6330</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-hotOrange mr-3 flex-shrink-0" />
                <span>manager.tx0099@hotworx.net</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-hotOrange transition-colors">Book a Session</a></li>
              <li><a href="#" className="hover:text-hotOrange transition-colors">Our Workouts</a></li>
              <li><a href="#" className="hover:text-hotOrange transition-colors">Franchise Info</a></li>
              <li><a href="#" className="hover:text-hotOrange transition-colors">Virtual Instructors</a></li>
              <li><a href="#" className="hover:text-hotOrange transition-colors">Shop Gear</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
             <h4 className="text-white font-display uppercase tracking-widest mb-6">Staffed Hours</h4>
             <ul className="space-y-2 text-gray-400 text-sm">
               <li className="flex justify-between"><span>Mon - Thu:</span> <span className="text-white">11:00 AM - 8:00 PM</span></li>
               <li className="flex justify-between"><span>Fri:</span> <span className="text-white">9:00 AM - 6:00 PM</span></li>
               <li className="flex justify-between"><span>Sat:</span> <span className="text-white">11:00 AM - 4:00 PM</span></li>
               <li className="flex justify-between"><span>Sun:</span> <span className="text-white">Closed</span></li>
             </ul>
             <div className="mt-4 pt-4 border-t border-white/10">
               <span className="text-hotOrange font-bold text-sm uppercase">Members Access: 24/7</span>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs text-center md:text-left">
            © 2024 HOTWORX Houston (Katy Green). All rights reserved. <br className="md:hidden"/>
            Independent Franchisee Owned and Operated.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-xs text-gray-600">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;