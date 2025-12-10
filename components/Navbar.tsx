import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Location', href: '#footer' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-stone-950/90 backdrop-blur-md py-4 border-b border-stone-800' : 'bg-transparent py-6'
      }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img src="/logo_real.png?v=3" alt="Shabu Desu Logo" className="h-20 w-auto rounded-full" />
          <div className="flex flex-col items-start">
            <span className="font-serif text-xl md:text-2xl tracking-widest text-gold-400 group-hover:text-white transition-colors">SHABU DESU</span>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-stone-400 group-hover:text-gold-400 transition-colors">Premium Hotpot</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-stone-300 hover:text-gold-400 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <a href="#reserve" className="border border-gold-500 text-gold-500 px-6 py-2 hover:bg-gold-500 hover:text-stone-900 transition-all duration-300 text-sm uppercase tracking-wider">
            Reserve
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gold-400"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-stone-950 border-t border-stone-800 overflow-hidden transition-all duration-300 ${isMobileOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col items-center py-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-stone-300 hover:text-gold-400 uppercase tracking-widest text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
