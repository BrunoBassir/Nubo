import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function TradingMarketScreen({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'explorar' | 'mis_ofertas'>('explorar');

  const offers = [
    { id: 1, user: '@lucia_g', userAvatar: 'https://i.pravatar.cc/150?u=lucia', giving: 'Fragmento Norte (Rojo)', wanting: 'Fragmento Este (Azul)', rarity: 'Legendario', time: 'Hace 5 min' },
    { id: 2, user: '@tomi_99', userAvatar: 'https://i.pravatar.cc/150?u=tomi', giving: 'Fragmento Sur (Verde)', wanting: 'Fragmento Oeste (Violeta)', rarity: 'Épico', time: 'Hace 12 min' },
    { id: 3, user: '@valentina.k', userAvatar: 'https://i.pravatar.cc/150?u=valen', giving: 'Fragmento Este (Azul)', wanting: 'NP (Puntos)', rarity: 'Raro', time: 'Hace 1 hora' },
    { id: 4, user: '@maxi_dj', userAvatar: 'https://i.pravatar.cc/150?u=maxi', giving: 'Fragmento Norte (Rojo)', wanting: 'Fragmento Sur (Verde)', rarity: 'Legendario', time: 'Hace 3 horas' },
  ];

  return (
    <div className="bg-[#050B14] min-h-screen flex flex-col items-center text-slate-100">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 w-full lg:max-w-md lg:mx-auto z-50 px-6 h-16 bg-[#050B14]/90 backdrop-blur-md border-b border-white/5 flex items-center justify-between">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
            <span className="font-bold text-sm tracking-widest uppercase text-white">Mercado P2P</span>
            <span className="text-[10px] text-teal-400">Intercambio de Fragmentos</span>
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400">
           <span className="material-symbols-outlined text-[18px]">swap_horiz</span>
        </div>
      </header>

      <main className="flex-1 w-full lg:max-w-md px-4 pt-24 pb-32 overflow-y-auto">
        
        {/* Info Banner */}
        <div className="bg-gradient-to-r from-teal-900/40 to-emerald-900/20 border border-teal-500/20 rounded-2xl p-4 mb-6 relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-10">
                <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
            </div>
            <h3 className="text-teal-300 font-bold text-sm mb-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">info</span> ¿Tenés piezas repetidas?
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-[85%] relative z-10">
                Intercambiá tus fragmentos con otros exploradores de tu ciudad para completar tus premios más rápido.
            </p>
        </div>

        {/* Tabs */}
        <div className="flex bg-slate-900/50 p-1 rounded-xl mb-6 border border-white/5">
            <button 
                onClick={() => setActiveTab('explorar')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'explorar' ? 'bg-slate-800 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}
            >
                Explorar Ofertas
            </button>
            <button 
                onClick={() => setActiveTab('mis_ofertas')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'mis_ofertas' ? 'bg-slate-800 text-white shadow-md' : 'text-slate-500 hover:text-slate-300'}`}
            >
                Mis Publicaciones
            </button>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
            {activeTab === 'explorar' && (
                <motion.div 
                    key="explorar"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                >
                    {offers.map(offer => (
                        <div key={offer.id} className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 hover:border-teal-500/30 transition-colors">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <img src={offer.userAvatar} alt={offer.user} className="w-8 h-8 rounded-full border border-slate-700" />
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-white">{offer.user}</span>
                                        <span className="text-[10px] text-slate-500">{offer.time}</span>
                                    </div>
                                </div>
                                <span className={`text-[10px] px-2 py-0.5 rounded border uppercase font-black tracking-wider ${
                                    offer.rarity === 'Legendario' ? 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30' :
                                    offer.rarity === 'Épico' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' :
                                    'bg-slate-500/10 text-slate-400 border-slate-500/30'
                                }`}>
                                    {offer.rarity}
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-2 px-2 bg-black/40 py-3 rounded-xl mb-4 relative">
                                <div className="flex-1 flex flex-col items-center">
                                    <span className="text-[10px] text-slate-500 uppercase font-bold mb-1">Ofrece</span>
                                    <span className="text-xs text-white font-medium text-center">{offer.giving}</span>
                                </div>
                                
                                <div className="flex items-center justify-center bg-slate-800 rounded-full w-8 h-8 shadow-inner border border-white/5 z-10 shrink-0">
                                    <span className="material-symbols-outlined text-teal-400 text-sm">sync_alt</span>
                                </div>

                                <div className="flex-1 flex flex-col items-center">
                                    <span className="text-[10px] text-slate-500 uppercase font-bold mb-1">Busca</span>
                                    <span className="text-xs text-white font-medium text-center">{offer.wanting}</span>
                                </div>
                            </div>

                            <button className="w-full bg-teal-500/10 hover:bg-teal-500/20 active:bg-teal-500/30 border border-teal-500/30 text-teal-300 font-bold uppercase tracking-widest text-[11px] py-3 rounded-xl transition-colors">
                                Proponer Intercambio
                            </button>
                        </div>
                    ))}
                </motion.div>
            )}

            {activeTab === 'mis_ofertas' && (
                <motion.div 
                    key="mis_ofertas"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                >
                    <div className="w-20 h-20 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center mb-4">
                        <span className="material-symbols-outlined text-3xl text-slate-600">inbox</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Sin publicaciones activas</h3>
                    <p className="text-slate-400 text-sm max-w-[80%]">Todavía no publicaste ningún fragmento para intercambiar.</p>
                </motion.div>
            )}
        </AnimatePresence>

      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-24 right-6 lg:right-[calc(50%-12rem)] z-50">
        <button className="bg-teal-500 hover:bg-teal-400 text-slate-950 w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-transform hover:scale-105 active:scale-95">
            <span className="material-symbols-outlined text-3xl font-bold">add</span>
        </button>
      </div>

    </div>
  );
}
