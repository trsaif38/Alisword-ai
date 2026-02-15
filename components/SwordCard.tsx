
import React from 'react';
import { Sword } from '../types';

interface Props {
  sword: Sword;
}

const SwordCard: React.FC<Props> = ({ sword }) => {
  const rarityColors = {
    Common: 'text-gray-400',
    Rare: 'text-blue-400',
    Epic: 'text-purple-400',
    Legendary: 'text-amber-500'
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden group hover:border-amber-500/50 transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={sword.image} 
          alt={sword.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className={`text-xs font-bold uppercase tracking-widest ${rarityColors[sword.rarity]}`}>
            {sword.rarity}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-cinzel font-bold mb-2 group-hover:text-amber-500 transition-colors">{sword.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{sword.description}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">ATTACK</span>
            <div className="w-32 bg-white/5 rounded-full h-1.5 self-center overflow-hidden">
              <div className="bg-amber-500 h-full" style={{ width: `${sword.stats.attack}%` }} />
            </div>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-500">SPEED</span>
            <div className="w-32 bg-white/5 rounded-full h-1.5 self-center overflow-hidden">
              <div className="bg-blue-400 h-full" style={{ width: `${sword.stats.speed}%` }} />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <span className="text-amber-500 font-bold">{sword.price} GOLD</span>
          <button className="text-xs font-bold px-4 py-2 border border-amber-500/50 hover:bg-amber-500 hover:text-black transition-all rounded">
            ACQUIRE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwordCard;
