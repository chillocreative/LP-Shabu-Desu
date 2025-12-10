import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-stone-950 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <span className="text-gold-500 uppercase tracking-widest text-sm">Our Philosophy</span>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-100 leading-tight">
                Simplicity is the Ultimate Sophistication
              </h2>
            </div>
            <p className="text-stone-400 leading-loose text-lg font-light">
              At SHABU DESU, we believe that the highest quality ingredients require the least intervention.
              Our broth is a clear canvas, meticulously prepared to honor the essence of our premium Wagyu
              and garden-fresh vegetables.
            </p>
            <p className="text-stone-400 leading-loose text-lg font-light">
              Dining with us is not just a meal; it is a ritual of patience, appreciation, and shared warmth.
            </p>

            <div className="pt-4">
              <img src="/signature-stamp.png" alt="Signature" className="opacity-50 invert w-24 h-auto" />
            </div>
          </motion.div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12"
              >
                <img
                  src="/shabu-pot.png"
                  alt="Atmosphere"
                  className="w-full h-80 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src="/wagyu-plate.png"
                  alt="Chef Preparation"
                  className="w-full h-80 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-stone-800/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
