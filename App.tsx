
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SwordCard from './components/SwordCard';
import GeminiAppraisal from './components/GeminiAppraisal';
import SwordGenerator from './components/SwordGenerator';
import { Sword } from './types';

const INITIAL_SWORDS: Sword[] = [
  {
    id: '1',
    name: 'Aetheris Edge',
    description: 'A blade forged from captured starlight. Vibrates with the hum of the cosmos.',
    price: '2,500',
    rarity: 'Legendary',
    image: 'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?q=80&w=800&auto=format&fit=crop',
    stats: { attack: 95, speed: 88, durability: 70 }
  },
  {
    id: '2',
    name: 'Iron Vow',
    description: 'The standard issue of the Royal Guard. Reliable, heavy, and lethal.',
    price: '150',
    rarity: 'Common',
    image: 'https://images.unsplash.com/photo-1550478029-775628173429?q=80&w=800&auto=format&fit=crop',
    stats: { attack: 45, speed: 40, durability: 90 }
  },
  {
    id: '3',
    name: 'Obsidian Fang',
    description: 'Crafted from the cooled magma of the Infernal Peaks. Leaves a trail of smoke.',
    price: '850',
    rarity: 'Epic',
    image: 'https://images.unsplash.com/photo-1549444310-8b01e309cc48?q=80&w=800&auto=format&fit=crop',
    stats: { attack: 82, speed: 65, durability: 85 }
  },
  {
    id: '4',
    name: 'Mist-Walker',
    description: 'A thin rapier that seems to disappear when moving quickly through the air.',
    price: '420',
    rarity: 'Rare',
    image: 'https://images.unsplash.com/photo-1618172193622-ae2d025f4128?q=80&w=800&auto=format&fit=crop',
    stats: { attack: 55, speed: 95, durability: 60 }
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-gray-200">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=1920&auto=format&fit=crop" 
            alt="Castle background" 
            className="w-full h-full object-cover opacity-30 scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-6 inline-block glass-card px-4 py-1 rounded-full border-amber-500/30 text-xs font-bold tracking-[0.3em] text-amber-500 uppercase">
            Founded in the First Age
          </div>
          <h1 className="text-6xl md:text-8xl font-cinzel font-bold mb-6 tracking-tight">
            BECOME <span className="text-amber-500">LEGEND</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 font-light leading-relaxed">
            The world's premier destination for high-fidelity artifacts, 
            mythical armaments, and AI-powered legendary forging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="gold-gradient px-10 py-4 rounded-lg text-black font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-amber-500/20">
              EXPLORE ARMORY
            </button>
            <button className="glass-card px-10 py-4 rounded-lg text-white font-bold text-lg hover:bg-white/10 transition-all border border-white/20">
              LEARN LORE
            </button>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
          <span className="text-[10px] tracking-[0.2em] mb-2 uppercase">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-amber-500 to-transparent" />
        </div>
      </section>

      {/* Armory Section */}
      <section id="armory" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-cinzel font-bold text-white mb-2 uppercase">The Royal Armory</h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Featured Artifacts Selection</p>
          </div>
          <button className="text-amber-500 font-bold border-b border-amber-500/30 pb-1 hover:border-amber-500 transition-all">
            VIEW ALL ITEMS
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {INITIAL_SWORDS.map((sword) => (
            <SwordCard key={sword.id} sword={sword} />
          ))}
        </div>
      </section>

      {/* AI Appraisal Feature */}
      <GeminiAppraisal />

      {/* AI Sword Generator Feature */}
      <SwordGenerator />

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center rotate-45 border border-amber-300">
                 <span className="text-black font-bold -rotate-45 text-sm">A</span>
              </div>
              <span className="text-xl font-cinzel font-bold tracking-wider text-amber-500">ALISWORD</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-6">
              Crafting digital excellence in fantasy weaponry since the digital dawn. 
              Our blades are forged with the precision of AI and the heart of legend.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-cinzel font-bold mb-4 uppercase text-sm tracking-widest">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Forge Manual</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Artifact Guidelines</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Marketplace Rules</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Lore Keeper</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-cinzel font-bold mb-4 uppercase text-sm tracking-widest">Community</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Discord Guild</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Governance</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2024 ALISWORD FORGE. ALL RIGHTS RESERVED BY THE COUNCIL.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gray-400">PRIVACY SCRYING</a>
            <a href="#" className="hover:text-gray-400">TERMS OF COMBAT</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
