import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Menu from './components/Menu';
import Experience from './components/Experience';
import Footer from './components/Footer';
import AIChatWidget from './components/AIChatWidget';

function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-gold-500/30 selection:text-gold-200">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Menu />
        <Experience />
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}

export default App;
