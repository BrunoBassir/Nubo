import { useState, useEffect } from 'react';
import { RewardDetailScreen, RewardInfo } from './RewardDetailScreen';
import { PrizeCelebrationScreen } from './PrizeCelebrationScreen';
import { VouchersScreen } from './VouchersScreen';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { sampleRewards } from '../lib/seedDatabase';

type RewardCategory = 'Todo' | 'Gastronomía' | 'Atractivo' | 'Alojamiento';
const rewardCategories: RewardCategory[] = ['Todo', 'Gastronomía', 'Atractivo', 'Alojamiento'];

const mapTypeToCategory = (type: string): RewardCategory => {
  if (type === 'food') return 'Gastronomía';
  if (type === 'culture') return 'Atractivo';
  if (type === 'hotel') return 'Alojamiento';
  return 'Todo';
};

export function PrizesScreen({ onVouchersClick, onMysteryChestClick, onPrizeFragmentsClick, onLiveAuctionsClick, onTradingMarketClick }: { onVouchersClick?: () => void, onMysteryChestClick?: () => void, onPrizeFragmentsClick?: () => void, onLiveAuctionsClick?: () => void, onTradingMarketClick?: () => void }) {
  const [activeCategory, setActiveCategory] = useState<RewardCategory>('Todo');
  const [selectedReward, setSelectedReward] = useState<RewardInfo | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [prizeTab, setPrizeTab] = useState<'mercado' | 'canjes'>('mercado');
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  
  const [rewardsData, setRewardsData] = useState<RewardInfo[]>([]);
  const [loading, setLoading] = useState(true);

  // Hardcode user points for now, normally fetch from user doc
  const userPoints = 2450;

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'rewards'), (snapshot) => {
      const data: RewardInfo[] = snapshot.docs.map(doc => {
        const docData = doc.data();
        return {
          id: doc.id,
          title: docData.title,
          category: mapTypeToCategory(docData.type),
          points: docData.cost,
          level: Math.ceil(docData.cost / 1000) || 1, // mock level mapping
          imageUrl: docData.imageUrl,
          available: userPoints >= docData.cost,
          userPoints: userPoints
        };
      });
      setRewardsData(data);
      setLoading(false);
    }, (error) => {
       console.error("Error fetching rewards: ", error);
       setLoading(false);
    });

    return () => unsub();
  }, [userPoints]);

  const displayRewards = rewardsData.length > 0 ? rewardsData : sampleRewards.map(r => ({
    id: r.id,
    title: r.title,
    category: mapTypeToCategory(r.type),
    points: r.cost,
    level: Math.ceil(r.cost / 1000) || 1,
    imageUrl: r.imageUrl,
    available: userPoints >= r.cost,
    userPoints: userPoints
  }));

  const renderRewardCard = (reward: RewardInfo) => (
    <div key={reward.id} onClick={() => setSelectedReward(reward)} className={`cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group ${reward.available ? 'reward-card-active glow-border hover:shadow-[0_0_15px_rgba(25,204,240,0.15)]' : 'reward-card-locked hover:border-slate-600 border border-transparent'}`}>
      <div className="h-24 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url("${reward.imageUrl}")` }}>
        <div className="w-full h-full transition-transform duration-700 group-hover:scale-110">
          {reward.available ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-transparent to-transparent"></div>
              <div className="absolute top-2 right-2 bg-primary text-background-dark text-[8px] font-black px-1.5 py-0.5 rounded shadow-lg">DISPONIBLE</div>
            </>
          ) : (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">lock</span>
            </div>
          )}
        </div>
      </div>
      <div className={`p-3 relative z-10 ${reward.available ? 'bg-card-dark group-hover:bg-card-dark/80 transition-colors' : 'bg-card-dark/50'}`}>
        <h3 className={`text-xs font-bold line-clamp-1 mb-1 ${reward.available ? 'group-hover:text-primary transition-colors' : 'text-slate-500'}`}>{reward.title}</h3>
        <div className="flex justify-between items-center">
          <span className={`${reward.available ? 'text-primary' : 'text-slate-600'} text-[10px] font-black`}>
            {reward.points >= 1000 ? `${(reward.points / 1000).toFixed(1)}k` : reward.points} Pts
          </span>
          <span className={`${reward.available ? 'text-slate-500 group-hover:text-cyan-400 transition-colors' : 'text-slate-600'} text-[8px] uppercase font-bold`}>
            Nivel {reward.level}
          </span>
        </div>
      </div>
    </div>
  );

  // Removed early return to show fallback data
  // if (loading) {
  //    return <div className="bg-background-dark text-white flex items-center justify-center">Cargando premios...</div>;
  // }

  return (
    <>
      <main className="flex-1 pb-36 pt-4">
        {/* Points Info Summary (Moved from Top Bar) */}
        <div className="px-6 py-2 flex items-center justify-between">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Nubo Rewards</span>
          <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
            <span className="text-[10px] text-slate-400 uppercase tracking-tighter">Tus Puntos</span>
            <span className="text-sm font-bold text-primary tracking-tight">2,450</span>
          </div>
        </div>

        <div className="sticky top-0 z-20 bg-background-dark/95 backdrop-blur-md px-6 pt-4 pb-4 w-full">
          {/* Toggle Switcher - Extended */}
          <div className="flex bg-white/5 p-1 rounded-full w-full border border-white/10 overflow-x-auto hide-scrollbar gap-0.5">
            <button 
              onClick={() => setPrizeTab('mercado')}
              className={`flex-1 min-w-0 px-2 py-1.5 whitespace-nowrap rounded-full text-[11px] transition-all flex items-center justify-center gap-1 ${prizeTab === 'mercado' ? 'bg-primary text-background-dark font-bold shadow-[0_0_15px_rgba(25,204,240,0.3)]' : 'text-slate-400 font-medium hover:text-white border border-transparent'}`}
            >
              <span className="material-symbols-outlined text-[14px]">storefront</span> Mercado
            </button>
            <button 
              onClick={() => setPrizeTab('canjes')}
              className={`flex-1 min-w-0 px-2 py-1.5 whitespace-nowrap rounded-full text-[11px] transition-all flex items-center justify-center gap-1 ${prizeTab === 'canjes' ? 'bg-primary text-background-dark font-bold shadow-[0_0_15px_rgba(25,204,240,0.3)]' : 'text-slate-400 font-medium hover:text-white border border-transparent'}`}
            >
              <span className="material-symbols-outlined text-[14px]">confirmation_number</span> Mis Canjes
            </button>
          </div>
        </div>

        {prizeTab === 'mercado' ? (
          !selectedCity ? (
            <div className="px-6 pt-2 pb-10 space-y-4">
              <h2 className="text-xl font-display font-black text-white mb-6">Elegí tu ciudad</h2>
              
              <div 
                onClick={() => setSelectedCity('Rosario')}
                className="relative rounded-2xl overflow-hidden h-32 mb-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_15px_rgba(25,204,240,0.15)] border border-primary/30 group"
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=600&auto=format&fit=crop)` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 via-background-dark/40 to-transparent"></div>
                <div className="relative z-10 p-4 h-full flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-display font-black text-white leading-none">Rosario</h3>
                      <p className="text-primary text-[10px] font-bold uppercase tracking-widest mt-1">Premios Disponibles</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30">
                       <span className="material-symbols-outlined text-primary text-sm">chevron_right</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-32 mb-4 opacity-50 grayscale border border-white/10">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=600&auto=format&fit=crop)` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent"></div>
                <div className="relative z-10 p-4 h-full flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-display font-black text-white">CABA</h3>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                      <span className="material-symbols-outlined text-white text-sm">lock</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-32 mb-4 opacity-50 grayscale border border-white/10">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=600&auto=format&fit=crop)` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent"></div>
                <div className="relative z-10 p-4 h-full flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-display font-black text-white">Córdoba</h3>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                      <span className="material-symbols-outlined text-white text-sm">lock</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden h-32 mb-4 opacity-50 grayscale border border-white/10">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=600&auto=format&fit=crop)` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent"></div>
                <div className="relative z-10 p-4 h-full flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-display font-black text-white">San Francisco</h3>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                      <span className="material-symbols-outlined text-white text-sm">lock</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ) : (
          <>
            <div className="px-6 py-2 flex items-center justify-between mb-2">
              <button onClick={() => setSelectedCity(null)} className="text-slate-400 hover:text-white flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest transition-colors">
                <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                Volver a ciudades
              </button>
              <div className="flex items-center gap-1 text-primary text-xs font-bold px-2.5 py-1 bg-primary/10 rounded-full border border-primary/20">
                <span className="material-symbols-outlined text-[12px]">location_on</span>
                {selectedCity}
              </div>
            </div>
            <div className="px-6 py-2 overflow-x-auto flex gap-2 hide-scrollbar">
              {rewardCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-tight transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-primary/10 border border-primary text-primary shadow-[0_0_10px_rgba(25,204,240,0.3)]'
                      : 'bg-card-dark border border-white/10 text-slate-400 hover:bg-card-dark/80 hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="px-6 pt-6 space-y-8">
              {(activeCategory === 'Todo' || activeCategory === 'Gastronomía') && (
                <section>
                  <div className="flex items-center justify-between mb-3 px-1">
                    <h2 className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-slate-300">
                      <span className="material-symbols-outlined text-primary text-lg">restaurant</span>
                      Gastronomía
                    </h2>
                    <span className="text-primary text-[10px] font-bold uppercase cursor-pointer">Ver todo</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {displayRewards.filter(r => r.category === 'Gastronomía').map(renderRewardCard)}
                  </div>
                </section>
              )}

              {(activeCategory === 'Todo' || activeCategory === 'Atractivo') && (
                <section>
                  <div className="flex items-center justify-between mb-3 px-1">
                    <h2 className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-slate-300">
                      <span className="material-symbols-outlined text-primary text-lg">theater_comedy</span>
                      Atractivo
                    </h2>
                    <span className="text-primary text-[10px] font-bold uppercase cursor-pointer">Ver todo</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {displayRewards.filter(r => r.category === 'Atractivo').map(renderRewardCard)}
                  </div>
                </section>
              )}

              {(activeCategory === 'Todo' || activeCategory === 'Alojamiento') && (
                <section>
                  <div className="flex items-center justify-between mb-3 px-1">
                    <h2 className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-slate-300">
                      <span className="material-symbols-outlined text-primary text-lg">hotel</span>
                      Hospedaje
                    </h2>
                    <span className="text-primary text-[10px] font-bold uppercase cursor-pointer">Ver todo</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {displayRewards.filter(r => r.category === 'Alojamiento').map(renderRewardCard)}
                  </div>
                </section>
              )}

              {/* Mystery Chest Banner */}
              <div className="relative rounded-2xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-transform active:scale-95 shadow-xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-900 border border-indigo-500/30 mb-4" onClick={onMysteryChestClick}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[30px] rounded-full -mr-10 -mt-10 group-hover:bg-indigo-500/20 transition-all"></div>
                
                <div className="p-5 flex items-center justify-between z-10 relative">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">Premios Sorpresa</span>
                    </div>
                    <span className="font-display font-black text-2xl text-white drop-shadow-md leading-none mb-1">Cofre Misterioso</span>
                    <span className="text-xs font-semibold text-slate-300 mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                      Quemá 500 Nubo Points y probá tu suerte
                    </span>
                  </div>
                  
                  <div className="w-14 h-14 rounded-full bg-indigo-500/20 backdrop-blur-md flex items-center justify-center border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.4)] relative z-10">
                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f381/512.gif" alt="Cofre" className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                  </div>
                </div>
              </div>

              {/* Live Auctions Banner */}
              <div className="relative rounded-2xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-transform active:scale-95 shadow-xl bg-gradient-to-r from-red-950 via-slate-900 to-slate-900 border border-red-500/30 mb-4" onClick={onLiveAuctionsClick}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[30px] rounded-full -mr-10 -mt-10 group-hover:bg-red-500/20 transition-all"></div>
                
                <div className="p-5 flex items-center justify-between z-10 relative">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400">En Vivo Ahora</span>
                    </div>
                    <span className="font-display font-black text-2xl text-white drop-shadow-md leading-none">Subastas VIP</span>
                    <span className="text-xs font-semibold text-slate-300 mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">gavel</span>
                      Pujá con tus NP por premios únicos
                    </span>
                  </div>
                  
                  <div className="w-14 h-14 rounded-full bg-red-500/20 backdrop-blur-md flex items-center justify-center border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                    <span className="material-symbols-outlined text-3xl text-red-100" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
                  </div>
                </div>
              </div>

              {/* Prize Fragments Banner */}
              <div className="relative rounded-2xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-transform active:scale-95 shadow-xl bg-gradient-to-br from-fuchsia-900/80 to-slate-900/90 border border-fuchsia-500/30 mb-4" onClick={onPrizeFragmentsClick}>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay"></div>
                
                <div className="p-5 flex items-center justify-between z-10 relative">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-fuchsia-300 mb-1">Premios Leyenda</span>
                    <span className="font-display font-black text-2xl text-white drop-shadow-md leading-none">Fragmentos</span>
                    <span className="text-xs font-semibold text-fuchsia-200 mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">extension</span>
                      Juntá las partes y forja premios épicos
                    </span>
                  </div>
                  
                  <div className="w-16 h-16 rounded-full bg-fuchsia-500/20 backdrop-blur-md flex items-center justify-center border border-fuchsia-500/50 group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(255,0,255,0.4)]">
                    <span className="material-symbols-outlined text-4xl text-white drop-shadow-lg" style={{ fontVariationSettings: "'FILL' 1" }}>extension</span>
                  </div>
                </div>
              </div>

              {/* Trading Market Banner */}
              <div className="relative rounded-2xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-transform active:scale-95 shadow-xl bg-gradient-to-r from-teal-900 to-slate-900 border border-teal-500/30 mb-8" onClick={onTradingMarketClick}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-[30px] rounded-full -mr-10 -mt-10 group-hover:bg-teal-500/20 transition-all"></div>
                
                <div className="p-5 flex items-center justify-between z-10 relative">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-teal-400">P2P Exchange</span>
                    </div>
                    <span className="font-display font-black text-2xl text-white drop-shadow-md leading-none">Market Nubo</span>
                    <span className="text-xs font-semibold text-slate-300 mt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">swap_horiz</span>
                      Intercambiá beneficios y más
                    </span>
                  </div>
                  
                  <div className="w-14 h-14 rounded-full bg-teal-500/20 backdrop-blur-md flex items-center justify-center border border-teal-500/50 shadow-[0_0_15px_rgba(20,184,166,0.4)]">
                    <span className="material-symbols-outlined text-3xl text-teal-100" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20 flex items-center gap-4 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(25,204,240,0.15)] group cursor-pointer" onClick={() => setPrizeTab('canjes')}>
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">confirmation_number</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xs group-hover:text-primary transition-colors">Cupones Activos</h4>
                  <p className="text-[10px] text-slate-400">Tenés 2 beneficios listos para usar.</p>
                </div>
                <button className="bg-primary text-background-dark px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-tight group-hover:bg-cyan-300 transition-colors">
                  Ver Mis Canjes
                </button>
              </div>
            </div>
          </>
          )
        ) : (
          <VouchersScreen hideHeader={true} />
        )}
      </main>

      {selectedReward && !showCelebration && (
        <RewardDetailScreen
          reward={selectedReward}
          onClose={() => setSelectedReward(null)}
          onRedeem={() => {
            setShowCelebration(true);
          }}
        />
      )}

      {showCelebration && selectedReward && (
         <div className="fixed inset-0 z-[120]">
            <PrizeCelebrationScreen 
               reward={selectedReward} 
               onClose={() => {
                  setShowCelebration(false);
                  setSelectedReward(null);
               }} 
               onVouchers={() => {
                  setShowCelebration(false);
                  setSelectedReward(null);
                  if (onVouchersClick) {
                     onVouchersClick();
                  }
               }}
            />
         </div>
      )}
    </>
  );
}
