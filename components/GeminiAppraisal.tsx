
import React, { useState } from 'react';
import { appraiseArtifact } from '../services/geminiService';
import { AppraisalResult } from '../types';

const GeminiAppraisal: React.FC = () => {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState<AppraisalResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAppraise = async () => {
    if (!description) return;
    setLoading(true);
    try {
      const appraisal = await appraiseArtifact(description);
      setResult(appraisal);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="appraisal" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-amber-500 mb-4">The Mystic Appraisal</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Found a mysterious artifact in your travels? Let our AI-powered Seers reveal its hidden powers and ancient history.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="glass-card p-8 rounded-2xl border-amber-500/20">
          <label className="block text-sm font-bold text-gray-400 mb-2 tracking-widest uppercase">Artifact Description</label>
          <textarea
            className="w-full h-48 bg-black/40 border border-white/10 rounded-xl p-4 text-gray-200 focus:border-amber-500 outline-none transition-all resize-none mb-6"
            placeholder="E.g., A rusted hilt with a glowing blue gem, smells of sea salt and lightning..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            onClick={handleAppraise}
            disabled={loading || !description}
            className="w-full gold-gradient py-4 rounded-xl text-black font-bold text-lg hover:brightness-110 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                CONSULTING THE ANCIENTS...
              </>
            ) : 'REVEAL TRUTH'}
          </button>
        </div>

        <div className="relative">
          {result ? (
            <div className="glass-card p-8 rounded-2xl border-amber-500/30 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-cinzel text-amber-500 font-bold">{result.name}</h3>
                  <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">{result.element} AFFINITY</span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500 block">POWER LEVEL</span>
                  <span className="text-xl font-bold text-white">{result.powerLevel}</span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Origin</h4>
                  <p className="text-sm text-gray-300 italic">"{result.origin}"</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">The Lore</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{result.lore}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[300px] glass-card rounded-2xl border-white/5 flex flex-col items-center justify-center text-center p-8 border-dashed">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-4 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-500 font-medium italic">The Seer awaits your description to pierce through the veil of time.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeminiAppraisal;
