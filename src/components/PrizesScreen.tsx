import { useState } from 'react';
import { RewardDetailScreen, RewardInfo } from './RewardDetailScreen';
import { PrizeCelebrationScreen } from './PrizeCelebrationScreen';

type RewardCategory = 'Todo' | 'Gastronomía' | 'Cultura' | 'Hospedaje';
const rewardCategories: RewardCategory[] = ['Todo', 'Gastronomía', 'Cultura', 'Hospedaje'];

const rewardsData: RewardInfo[] = [
  { id: '1', category: 'Gastronomía', title: '2x1 Café Especial', points: 300, level: 1, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOMOlMoMND60i9WCfHv4uf-8bBFb3n3J6J3VSufTSPmG9vaGGbcz1eNMXkYpAgrxQu3UXTMhW5_PRgcXuCi_i5Eb1UnQPE-BhvGPOa4zVqSvNijtZziplJUdw80QfRsEp5T89ZYErXuk5nFmjsT3DnfJb_YHMLYe_BM3nQ2mtUpP5KZxEXzG_q5thbLxOi90_nl7IlBrzcRDCmJoCL0wqxAI68FZSbAiPUnRCCBEj4xwaTCbd4zIuF7jZmvS763O4uwkJFJPvtyeI', available: true, userPoints: 2450 },
  { id: '2', category: 'Gastronomía', title: 'Cena Gourmet', points: 1200, level: 3, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB86KdbUYEx4U1CzvvVkry7Bx7Jq4OvCVpgDhebQuQTubhJJfYMeI2RbXlqIj5XQUvArQ_WAS2kD816YLNtpYfoqrCVj7UJbAKZcCNh1qJ7z7EbGZlOEeSFR8DbMPd0_l7gz8vSvM2R8CvogHLe4oG_JD1ujPvax4__Wa8uFiH_9phZ4BVJkUfU0AaFOKYszXOpuoIBuvsAQ6Om0IXotzYLtt7gJGD65glreDpPfqiUdEeXO6bPlXwWTjTC1842IL8M3hJ6rFbsS5g', available: true, userPoints: 2450 },
  { id: '3', category: 'Gastronomía', title: 'Brunch Premium', points: 800, level: 4, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0ci0F1ZsqmEWhfcOBRkCdwZqspIPMkLdN9kqvzKyI-X2D3Sth8oAt049S6AG2-tPctcv4lblxHhbRk4U3hU-wnvI7lrSZDZHlZXLedhEzeUK4l0-NYqmBa5x8fERNh14YEAQIL3lA7jInobzB9wh496i8YkEVDahJ1HXq1ThEFI8xTQB_N1NZ597ICbM7yAezyvtjkGQPEsdE7HUP64YtqlMtu7yl13Nv4GDnj03xprk11FBMbGO-mfUQe-NmpWpqatlUYwr0zQw', available: false, userPoints: 2450 },
  { id: '4', category: 'Gastronomía', title: 'Wine Tasting', points: 2500, level: 5, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFnc5BijG8IwQt7G3Q9DMxs7HYS5tSN9a6wWQ0eNg2dL6k9MZI8yqld8TCwed2iAxCWeaHwoKNSQIjEIC2hUBm-O9aLtwUHZQvkUdqZkvRAJq1tVVhnQM2go2Ssy63qZDWQAMm2k8oiibm6WTqWdjb9vtXxV0xWwxUsKAEJUvJgAT2YOBiGtypYXOhDhxHya8zCw9U_cGH5F4-xQ9ThffhHydnTOWQyzEIulI4Hf2slNYueMa8J66bgLRMSIpo_BXKX7oTgEe18ak', available: false, userPoints: 2450 },
  { id: '5', category: 'Cultura', title: 'Entrada Cine', points: 500, level: 2, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFnc5BijG8IwQt7G3Q9DMxs7HYS5tSN9a6wWQ0eNg2dL6k9MZI8yqld8TCwed2iAxCWeaHwoKNSQIjEIC2hUBm-O9aLtwUHZQvkUdqZkvRAJq1tVVhnQM2go2Ssy63qZDWQAMm2k8oiibm6WTqWdjb9vtXxV0xWwxUsKAEJUvJgAT2YOBiGtypYXOhDhxHya8zCw9U_cGH5F4-xQ9ThffhHydnTOWQyzEIulI4Hf2slNYueMa8J66bgLRMSIpo_BXKX7oTgEe18ak', available: true, userPoints: 2450 },
  { id: '6', category: 'Cultura', title: 'Muestra Arte', points: 400, level: 1, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOMOlMoMND60i9WCfHv4uf-8bBFb3n3J6J3VSufTSPmG9vaGGbcz1eNMXkYpAgrxQu3UXTMhW5_PRgcXuCi_i5Eb1UnQPE-BhvGPOa4zVqSvNijtZziplJUdw80QfRsEp5T89ZYErXuk5nFmjsT3DnfJb_YHMLYe_BM3nQ2mtUpP5KZxEXzG_q5thbLxOi90_nl7IlBrzcRDCmJoCL0wqxAI68FZSbAiPUnRCCBEj4xwaTCbd4zIuF7jZmvS763O4uwkJFJPvtyeI', available: true, userPoints: 2450 },
  { id: '7', category: 'Cultura', title: 'Concierto Jazz', points: 3000, level: 6, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB86KdbUYEx4U1CzvvVkry7Bx7Jq4OvCVpgDhebQuQTubhJJfYMeI2RbXlqIj5XQUvArQ_WAS2kD816YLNtpYfoqrCVj7UJbAKZcCNh1qJ7z7EbGZlOEeSFR8DbMPd0_l7gz8vSvM2R8CvogHLe4oG_JD1ujPvax4__Wa8uFiH_9phZ4BVJkUfU0AaFOKYszXOpuoIBuvsAQ6Om0IXotzYLtt7gJGD65glreDpPfqiUdEeXO6bPlXwWTjTC1842IL8M3hJ6rFbsS5g', available: false, userPoints: 2450 },
  { id: '8', category: 'Cultura', title: 'Backstage Pass', points: 10000, level: 10, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0ci0F1ZsqmEWhfcOBRkCdwZqspIPMkLdN9kqvzKyI-X2D3Sth8oAt049S6AG2-tPctcv4lblxHhbRk4U3hU-wnvI7lrSZDZHlZXLedhEzeUK4l0-NYqmBa5x8fERNh14YEAQIL3lA7jInobzB9wh496i8YkEVDahJ1HXq1ThEFI8xTQB_N1NZ597ICbM7yAezyvtjkGQPEsdE7HUP64YtqlMtu7yl13Nv4GDnj03xprk11FBMbGO-mfUQe-NmpWpqatlUYwr0zQw', available: false, userPoints: 2450 },
  { id: '9', category: 'Hospedaje', title: 'Noche en Suite', points: 5500, level: 4, imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', available: true, userPoints: 2450 },
  { id: '10', category: 'Hospedaje', title: 'Fin de semana Spa', points: 12000, level: 8, imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', available: false, userPoints: 2450 }
];

export function PrizesScreen({ onVouchersClick, onMysteryChestClick, onPrizeFragmentsClick, onLiveAuctionsClick, onTradingMarketClick }: { onVouchersClick?: () => void, onMysteryChestClick?: () => void, onPrizeFragmentsClick?: () => void, onLiveAuctionsClick?: () => void, onTradingMarketClick?: () => void }) {
  const [activeCategory, setActiveCategory] = useState<RewardCategory>('Todo');
  const [selectedReward, setSelectedReward] = useState<RewardInfo | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

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

        <div className="px-6 py-4 sticky top-16 bg-background-dark/95 backdrop-blur-md z-40">
          <div className="flex bg-card-dark p-1 rounded-xl border border-white/5">
            <button className="flex-1 py-1.5 text-xs font-bold bg-primary text-background-dark rounded-lg">Mercado</button>
            <button onClick={onVouchersClick} className="flex-1 py-1.5 text-xs font-medium text-slate-400 border border-transparent">Mis Canjes</button>
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
                {rewardsData.filter(r => r.category === 'Gastronomía').map(renderRewardCard)}
              </div>
            </section>
          )}

          {(activeCategory === 'Todo' || activeCategory === 'Cultura') && (
            <section>
              <div className="flex items-center justify-between mb-3 px-1">
                <h2 className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">theater_comedy</span>
                  Cultura
                </h2>
                <span className="text-primary text-[10px] font-bold uppercase cursor-pointer">Ver todo</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {rewardsData.filter(r => r.category === 'Cultura').map(renderRewardCard)}
              </div>
            </section>
          )}

          {(activeCategory === 'Todo' || activeCategory === 'Hospedaje') && (
            <section>
              <div className="flex items-center justify-between mb-3 px-1">
                <h2 className="text-sm font-bold flex items-center gap-2 uppercase tracking-widest text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">hotel</span>
                  Hospedaje
                </h2>
                <span className="text-primary text-[10px] font-bold uppercase cursor-pointer">Ver todo</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {rewardsData.filter(r => r.category === 'Hospedaje').map(renderRewardCard)}
              </div>
            </section>
          )}

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
                <span className="font-display font-black text-2xl text-white drop-shadow-md leading-none">Mercado Libre</span>
                <span className="text-xs font-semibold text-slate-300 mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">swap_horiz</span>
                  Intercambiá fragmentos con otros
                </span>
              </div>
              
              <div className="w-14 h-14 rounded-full bg-teal-500/20 backdrop-blur-md flex items-center justify-center border border-teal-500/50 shadow-[0_0_15px_rgba(20,184,166,0.4)]">
                <span className="material-symbols-outlined text-3xl text-teal-100" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20 flex items-center gap-4 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(25,204,240,0.15)] group cursor-pointer" onClick={onVouchersClick}>
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
