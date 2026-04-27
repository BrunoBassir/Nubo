export type RewardInfo = {
  id: string;
  category: string;
  title: string;
  points: number;
  level: number;
  imageUrl: string;
  available: boolean;
  userPoints: number;
};

export function RewardDetailScreen({ reward, onClose, onRedeem }: { reward: RewardInfo, onClose?: () => void, onRedeem?: () => void }) {
  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
      className="fixed inset-0 z-[500] flex items-center justify-center p-4 backdrop-blur-[12px] bg-black/80 font-sans"
    >
      <div className="w-full max-w-md bg-[#0a1416] rounded-3xl overflow-hidden shadow-2xl border border-white/10 [box-shadow:inset_0_0_10px_rgba(25,204,240,0.05),0_0_20px_rgba(0,0,0,0.4)] flex flex-col max-h-[90vh] relative">
        {/* Close Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }} 
          className="absolute top-4 right-4 z-50 size-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/10 active:scale-95 transition-all hover:bg-black/80 shadow-xl"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
          <img alt={reward.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" src={reward.imageUrl}/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1416] via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6">
            <div className="bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">{reward.category}</span>
            </div>
          </div>
        </div>
        
        <div className="px-8 pb-8 pt-6 overflow-y-auto hide-scrollbar flex-1">
          <div className="mb-6">
            <h2 className="text-3xl font-black text-white leading-tight mb-2 tracking-tight">{reward.title}</h2>
            <p className="text-slate-400 text-sm leading-relaxed">Este beneficio exclusivo te espera. Canjeá tus puntos y disfrutalo en locales adheridos de la red Nubo.</p>
          </div>

          <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/10 mb-8 shadow-inner">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Costo</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-primary tracking-tighter">{reward.points}</span>
                <span className="text-[10px] font-black text-primary uppercase">NP</span>
              </div>
            </div>
            <div className="h-10 w-[1px] bg-white/10"></div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Tu Saldo</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-slate-200 tracking-tighter">{reward.userPoints}</span>
                <span className="text-[10px] font-black text-slate-400 uppercase">NP</span>
              </div>
            </div>
          </div>

          <div className="space-y-5 mb-8">
            <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.3em] px-1">Validez y Uso</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="h-6 w-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                  <span className="text-[10px] font-black text-primary">01</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">Obtené tu código de canje instantáneo.</p>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="h-6 w-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                  <span className="text-[10px] font-black text-primary">02</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">Válido por 30 días corridos a partir hoy.</p>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="h-6 w-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                  <span className="text-[10px] font-black text-primary">03</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">Mostrá la pantalla en caja y listo.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {reward.available ? (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onRedeem?.();
                }} 
                className="w-full bg-primary py-4 h-14 rounded-2xl font-black text-[#0a1416] shadow-[0_0_20px_rgba(25,204,240,0.4)] hover:scale-[1.02] active:scale-95 transition-all text-sm uppercase tracking-widest"
              >
                Canjear Ahora
              </button>
            ) : (
              <button disabled className="w-full bg-slate-800 text-slate-500 py-4 h-14 rounded-2xl font-bold cursor-not-allowed text-xs border border-white/5 uppercase tracking-widest">
                NP Insuficientes
              </button>
            )}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClose?.();
              }} 
              className="w-full py-4 h-14 rounded-2xl font-black text-slate-500 hover:text-white transition-colors text-xs uppercase tracking-[0.2em]"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
