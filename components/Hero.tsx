import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed scale-110"
        style={{
          backgroundImage: "url('/hero-shabu.jpg?v=3')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-stone-950"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img src="/logo_real.png?v=3" alt="Shabu Desu Logo" className="w-32 h-32 md:w-40 md:h-40 mb-8 mx-auto rounded-full shadow-2xl shadow-red-900/20" />
          <h2 className="text-gold-400 uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-light">
            Welcome to the sanctuary of
          </h2>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-9xl text-stone-100 mb-6"
        >
          SHABU DESU
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-xl mx-auto"
        >
          <p className="text-stone-300 font-light text-lg md:text-xl leading-relaxed">
            Experience the exquisite Japanese tradition of swish-swish hotpot with A5 Wagyu and artisanal broths.
          </p>
          <div className="flex justify-center gap-6 mt-10">
            <a href="#menu" className="border border-gold-500 text-gold-500 px-8 py-3 rounded-full hover:bg-gold-500 hover:text-stone-950 transition-all uppercase tracking-widest text-sm font-semibold">
              View Our Menu
            </a>
            <Link to="/reservation" className="bg-red-700 text-white border border-red-700 px-8 py-3 rounded-full hover:bg-red-600 transition-all uppercase tracking-widest text-sm font-semibold">
              Book Reservation
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gold-400/50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
