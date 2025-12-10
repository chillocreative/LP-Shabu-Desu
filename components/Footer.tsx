import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-stone-950 pt-20 pb-10 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo_real.png" alt="Shabu Desu Logo" className="h-16 w-16 rounded-full" />
              <h3 className="font-serif text-2xl text-white">SHABU DESU</h3>
            </div>
            <p className="text-stone-500 font-light text-sm leading-relaxed mb-6">
              An authentic Japanese hotpot experience honoring tradition, quality, and the art of hospitality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-stone-400 hover:text-gold-500 transition"><Instagram size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-gold-500 transition"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-white uppercase tracking-widest text-sm mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-stone-400 font-light text-sm">
                <MapPin size={16} className="mt-1 text-gold-600" />
                <span>Bertam, Kepala Batas,<br />Penang, MY 13200</span>
              </div>
              <div className="flex items-center gap-3 text-stone-400 font-light text-sm">
                <Phone size={16} className="text-gold-600" />
                <span>+60 12-345 6789</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="col-span-1">
            <h4 className="text-white uppercase tracking-widest text-sm mb-6">Hours</h4>
            <div className="space-y-4 text-stone-400 font-light text-sm">
              <div className="flex items-start gap-3">
                <Clock size={16} className="mt-1 text-gold-600" />
                <div>
                  <p className="text-white">Dinner</p>
                  <p>Daily: 5:00 PM - 11:00 PM</p>
                </div>
              </div>
              <div className="ml-7">
                <p className="text-white">Lunch</p>
                <p>Fri-Sun: 11:30 AM - 2:30 PM</p>
              </div>
            </div>
          </div>

          {/* Map (Visual only) */}
          <div className="col-span-1 h-48 bg-stone-900 border border-stone-800 relative overflow-hidden group">
            <img
              src="/map-kepala-batas.png"
              alt="Map"
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-stone-950/80 px-4 py-2 text-xs uppercase tracking-widest border border-gold-500/30 text-gold-400">View on Map</span>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-600 text-xs">© 2025 SHABU DESU. All Rights Reserved.</p>
          <div className="flex gap-6 text-stone-600 text-xs uppercase tracking-wider">
            <a href="#" className="hover:text-stone-400 transition">Privacy</a>
            <a href="#" className="hover:text-stone-400 transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
