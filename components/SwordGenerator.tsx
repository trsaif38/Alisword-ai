
import React, { useState } from 'react';
import { forgeLegendarySword } from '../services/geminiService';
import { GeneratedSword } from '../types';

const SwordGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<GeneratedSword | null>(null);
  const [loading, setLoading] = useState(false);

  const handleForge = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const sword = await forgeLegendarySword(prompt);
      setResult(sword);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="forge" className="py-24 px-6 bg-gradient-to-b from-transparent to-amber-900/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-amber-500 mb-4">The Forge of Legends</h2>
          <p className="text-gray-400">Provide a spark of inspiration, and the AI Forge will hammer out a legendary blade never seen before in any realm.</p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex gap-4 p-2 glass-card rounded-2xl border-white/10">
            <input
              type="text"
              className="flex-1 bg-transparent border-none outline-none px-6 py-4 text-gray-200 placeholder:text-gray-600"
              placeholder="Enter theme: Shadow Phoenix, Frozen Comet, Dragon Bone..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleForge()}
            />
            <button
              onClick={handleForge}
              disabled={loading || !prompt}
              className="gold-gradient px-8 py-4 rounded-xl text-black font-bold uppercase tracking-widest hover:brightness-110 transition-all disabled:opacity-50"
            >
              {loading ? 'FORGING...' : 'FORGE BLADE'}
            </button>
          </div>

          {result && (
            <div className="glass-card p-10 rounded-3xl border-amber-500/40 space-y-8 animate-in zoom-in duration-500">
              <div className="text-center">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2 block">FORGED SUCCESSFULY</span>
                <h3 className="text-4xl font-cinzel text-white font-bold">{result.name}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-amber-500 font-cinzel font-bold mb-2">APPEARANCE</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{result.appearance}</p>
                  </div>
                  <div>
                    <h4 className="text-amber-500 font-cinzel font-bold mb-2">EPIC HISTORY</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{result.history}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-amber-500 font-cinzel font-bold mb-2">MAGICAL ABILITIES</h4>
                  <div className="space-y-3">
                    {result.abilities.map((ability, idx) => (
                      <div key={idx} className="flex gap-3 items-start p-3 bg-white/5 rounded-lg border border-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                        <p className="text-sm text-gray-300">{ability}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 flex justify-center">
                <button className="flex items-center gap-2 px-8 py-3 border border-amber-500/50 rounded-full text-amber-500 font-bold hover:bg-amber-500 hover:text-black transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  SHARE WITH CLAN
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SwordGenerator;
