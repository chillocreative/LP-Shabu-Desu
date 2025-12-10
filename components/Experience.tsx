import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/experience-bg.jpg?v=3')" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-stone-950/90"></div>

      <div className="container relative mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl text-gold-100">The Art of the "Swish"</h2>
          <p className="text-stone-300 text-lg md:text-xl font-light leading-relaxed">
            The name "Shabu Shabu" comes from the sound the ingredients make as you gently swish them through the bubbling broth.
            It is an interactive dining experience that slows down time, encouraging conversation and mindfulness.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: "01. Boil", desc: "Bring the kombu dashi broth to a gentle simmer." },
              { title: "02. Swish", desc: "Submerge the Wagyu for merely seconds. Rare is best." },
              { title: "03. Dip", desc: "Coat in sesame goma or citrus ponzu sauce." }
            ].map((step, i) => (
              <div key={i} className="bg-stone-900/50 backdrop-blur border border-stone-800 p-8 hover:border-gold-500/30 transition-colors">
                <span className="block text-gold-500 font-serif text-2xl mb-4">{step.title}</span>
                <p className="text-stone-400 font-light text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
