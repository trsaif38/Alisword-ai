
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card px-6 py-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center rotate-45 border-2 border-amber-300">
             <span className="text-black font-bold -rotate-45 text-xl">A</span>
          </div>
          <span className="text-2xl font-cinzel font-bold tracking-wider text-amber-500">ALISWORD</span>
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm font-semibold tracking-widest text-gray-300">
          <a href="#" className="hover:text-amber-500 transition-colors">ARMORY</a>
          <a href="#appraisal" className="hover:text-amber-500 transition-colors">APPRAISAL</a>
          <a href="#forge" className="hover:text-amber-500 transition-colors">FORGE</a>
          <button className="gold-gradient px-6 py-2 rounded text-black font-bold hover:brightness-110 transition-all shadow-lg shadow-amber-500/20">
            CONNECT WALLET
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
