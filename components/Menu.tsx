import React from 'react';
import { MENU_COURSES } from '../constants';
import { motion } from 'framer-motion';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-stone-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-gold-500 uppercase tracking-widest text-sm">Omakase & Courses</span>
          <h2 className="font-serif text-4xl text-white">Curated Experiences</h2>
          <div className="w-24 h-[1px] bg-gold-500/50 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {MENU_COURSES.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden bg-stone-950 border border-stone-800 hover:border-gold-600/30 transition-colors duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90"
                />
                <div className="absolute top-4 right-4 bg-stone-950/80 backdrop-blur px-3 py-1 border border-gold-500/20">
                  <span className="text-gold-400 font-serif text-lg">{course.price}</span>
                </div>
              </div>
              
              <div className="p-8 relative">
                <div className="mb-4">
                  <h3 className="font-serif text-2xl text-stone-100 group-hover:text-gold-400 transition-colors">{course.name}</h3>
                  <span className="text-stone-500 text-sm font-serif italic">{course.japaneseName}</span>
                </div>
                <p className="text-stone-400 font-light text-sm leading-relaxed mb-6">
                  {course.description}
                </p>
                <button className="text-xs uppercase tracking-widest text-gold-500 hover:text-white transition-colors flex items-center gap-2">
                  View Details
                  <span className="block w-4 h-[1px] bg-current"></span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-block border border-stone-700 text-stone-300 px-8 py-3 hover:bg-stone-800 hover:border-stone-600 transition-all text-sm uppercase tracking-widest">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
