import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function TradingMarketScreen({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'explorar' | 'mis_ofertas'>('explorar');

  const offers = [
    { id: 1, user: '@lucia_g', userAvatar: 'https://i.pravatar.cc/150?u=lucia', giving: 'Noche de Alojamiento (Hotel Plaza)', wanting: '2500 Puntos Nubo', type: 'Voucher', time: 'Hace 5 min' },
    { id: 2, user: '@tomi_99', userAvatar: 'https://i.pravatar.cc/150?u=tomi', giving: 'Café de Especialidad (Artisan)', wanting: 'Helado 1/4 (Heladería Sur)', type: 'Intercambio', time: 'Hace 12 min' },
    { id: 3, user: '@valentina.k', userAvatar: 'https://i.pravatar.cc/150?u=valen', giving: '1000 Puntos Nubo', wanting: 'Entrada Museo Histórico', type: 'Puntos', time: 'Hace 1 hora' },
    { id: 4, user: '@maxi_dj', userAvatar: 'https://i.pravatar.cc/150?u=maxi', giving: '2x1 en Tragos (Neon Bar)', wanting: '500 Puntos Nubo', type: 'Promo', time: 'Hace 3 horas' },
  ];

    const myOffers = [
    { id: 101, giving: '2 Entradas Cine HOYTS', wanting: '1500 Puntos Nubo', type: 'Voucher', time: 'Hace 2 días', status: 'Activa' },
    { id: 102, giving: '300 Puntos Nubo', wanting: 'Café + Medialunas (La Panadería)', type: 'Puntos', time: 'Hace 1 semana', status: 'Cerrada' },
  ];

  return (
    <div className="bg-[#050B14] min-h-screen flex flex-col items-center text-slate-100">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 w-full lg:max-w-md lg:mx-auto z-50 px-6 h-16 bg-[#050B14]/90 backdrop-blur-md border-b border-white/5 flex items-center justify-between">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
            <span className="font-bold text-sm tracking-widest uppercase text-white">Market Nubo</span>
            <span className="text-[10px] text-teal-400">P2P Exchange</span>
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
                <span className="material-symbols-outlined text-[16px]">info</span> Mercado Libre y Abierto
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed max-w-[85%] relative z-10">
                Intercambiá tus vouchers, noches de hotel o puntos Nubo con la comunidad por otros beneficios que prefieras.
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
                                    offer.type === 'Voucher' ? 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30' :
                                    offer.type === 'Intercambio' ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' :
                                    offer.type === 'Puntos' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' :
                                    'bg-slate-500/10 text-slate-400 border-slate-500/30'
                                }`}>
                                    {offer.type}
                                </span>
                            </div>

                            <div className="flex items-center justify-between gap-2 px-2 bg-black/40 py-3 rounded-xl mb-4 relative">
                                <div className="flex-1 flex flex-col items-center">
                                    <span className="text-[10px] text-slate-500 uppercase font-bold mb-1">Ofrece</span>
                                    <span className="text-xs text-white font-medium text-center leading-tight">{offer.giving}</span>
                                </div>
                                
                                <div className="flex items-center justify-center bg-slate-800 rounded-full w-8 h-8 shadow-inner border border-white/5 z-10 shrink-0">
                                    <span className="material-symbols-outlined text-teal-400 text-sm">sync_alt</span>
                                </div>

                                <div className="flex-1 flex flex-col items-center">
                                    <span className="text-[10px] text-slate-500 uppercase font-bold mb-1">Busca</span>
                                    <span className="text-xs text-white font-medium text-center leading-tight">{offer.wanting}</span>
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
                    className="space-y-4"
                >
                    {myOffers.length > 0 ? (
                        myOffers.map(offer => (
                            <div key={offer.id} className={`bg-slate-900/60 border border-white/10 rounded-2xl p-4 transition-colors ${offer.status === 'Cerrada' ? 'opacity-50' : ''}`}>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-white flex items-center gap-2">
                                                Mi Oferta #{offer.id}
                                                <span className={`text-[9px] px-1.5 py-0.5 rounded border uppercase tracking-widest ${offer.status === 'Activa' ? 'bg-green-500/10 text-green-400 border-green-500/30' : 'bg-slate-500/10 text-slate-400 border-slate-500/30'}`}>{offer.status}</span>
                                            </span>
                                            <span className="text-[10px] text-slate-500">{offer.time}</span>
                                        </div>
                                    </div>
                                    <span className={`text-[10px] px-2 py-0.5 rounded border uppercase font-black tracking-wider ${
                                        offer.type === 'Voucher' ? 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30' :
                                        offer.type === 'Intercambio' ? 'bg-amber-500/10 text-amber-400 border-amber-500/30' :
                                        offer.type === 'Puntos' ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' :
                                        'bg-slate-500/10 text-slate-400 border-slate-500/30'
                                    }`}>
                                        {offer.type}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between gap-2 px-2 bg-black/40 py-3 rounded-xl mb-4 relative">
                                    <div className="flex-1 flex flex-col items-center">
                                        <span className="text-[10px] text-slate-500 uppercase font-bold mb-1">Ofrecí</span>
                                        <span className="text-xs text-white font-medium text-center leading-tight">{offer.giving}</span>
                                    </div>
                                    
                                    <div className="flex items-center justify-center bg-slate-800 rounded-full w-8 h-8 shadow-inner border border-white/5 z-10 shrink-0">
                                        <span className="material-symbols-outlined text-teal-400 text-sm">sync_alt</span>
                                    </div>

                                    <div className="flex-1 flex flex-col items-center">
                                        <span className="text-[10px] text-slate-500 uppercase font-bold mb-1">Busqué</span>
                                        <span className="text-xs text-white font-medium text-center leading-tight">{offer.wanting}</span>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <button disabled={offer.status === 'Cerrada'} className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold uppercase tracking-widest text-[11px] py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                        Editar
                                    </button>
                                    <button disabled={offer.status === 'Cerrada'} className="flex-1 bg-red-500/10 hover:bg-red-500/20 active:bg-red-500/30 border border-red-500/30 text-red-400 font-bold uppercase tracking-widest text-[11px] py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center py-20">
                            <div className="w-20 h-20 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-3xl text-slate-600">inbox</span>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Sin publicaciones activas</h3>
                            <p className="text-slate-400 text-sm max-w-[80%]">Todavía no publicaste ninguna oferta para intercambiar en el Market.</p>
                        </div>
                    )}
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
