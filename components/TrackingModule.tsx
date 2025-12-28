
import React, { useState } from 'react';
import { Search, Package, MapPin, CheckCircle2, Loader2 } from 'lucide-react';

const TrackingModule: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'result'>('idle');

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;
    setStatus('loading');
    setTimeout(() => setStatus('result'), 1500);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 mt-12">
      <h3 className="text-xl font-bold mb-4 flex items-center">
        <Search className="mr-2 w-5 h-5 text-blue-400" />
        Suivi en temps réel (Démo)
      </h3>
      <form onSubmit={handleTrack} className="flex gap-2 mb-6">
        <input 
          type="text" 
          placeholder="Entrez votre N° de suivi (ex: GS-2024)"
          className="flex-grow bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
        />
        <button 
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-bold transition-all flex items-center"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Suivre'}
        </button>
      </form>

      {status === 'result' && (
        <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center justify-between p-3 bg-blue-600/20 rounded-xl border border-blue-500/30">
            <div className="flex items-center">
              <Package className="w-5 h-5 text-blue-400 mr-3" />
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold">Statut</p>
                <p className="text-sm font-bold">En transit vers Dakar</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400 uppercase font-bold">Arrivée prévue</p>
              <p className="text-sm font-bold">12 Oct. 2024</p>
            </div>
          </div>
          
          <div className="relative pl-8 space-y-4 pt-2">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-blue-500/30"></div>
            <div className="relative">
              <CheckCircle2 className="absolute -left-[26px] top-0 w-5 h-5 text-blue-500 bg-slate-900 rounded-full" />
              <p className="text-xs text-slate-400">05 Oct - 14:30</p>
              <p className="text-sm font-medium">Départ de l'entrepôt (Guangzhou)</p>
            </div>
            <div className="relative opacity-50">
              <MapPin className="absolute -left-[26px] top-0 w-5 h-5 text-slate-500 bg-slate-900 rounded-full" />
              <p className="text-xs text-slate-400">Prochaine étape</p>
              <p className="text-sm font-medium">Dédouanement Port de Dakar</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackingModule;
