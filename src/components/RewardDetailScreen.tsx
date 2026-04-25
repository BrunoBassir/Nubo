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
    <div className="fixed inset-0 z-[100] flex items-end justify-center px-4 pb-10 backdrop-blur-[8px] bg-[#0a1416]/80 font-sans">
      <div className="w-full max-w-[390px] bg-[#162529] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col">
        <div className="relative h-56 w-full">
          <img alt={reward.title} className="w-full h-full object-cover" src={reward.imageUrl}/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#162529] via-transparent to-transparent"></div>
          <div className="absolute top-5 left-5">
            <div className="bg-[#0a1416]/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#19ccf0] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              <span className="text-[10px] font-bold text-[#19ccf0] uppercase tracking-wider">{reward.category}</span>
            </div>
          </div>
        </div>
        <div className="px-8 pt-2 pb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">{reward.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">Disfrutá de este beneficio exclusivo para miembros nivel {reward.level} o superior en locales adheridos.</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#0a1416]/50 rounded-2xl border border-white/5 mb-6">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Costo del canje</span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-[#19ccf0]">{reward.points}</span>
                <span className="text-[10px] font-bold text-[#19ccf0] uppercase">Pts</span>
              </div>
            </div>
            <div className="h-8 w-[1px] bg-white/10"></div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Tu saldo</span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-slate-200">{reward.userPoints}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Pts</span>
              </div>
            </div>
          </div>
          <div className="space-y-4 mb-8">
            <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3 px-1">Cómo canjear</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-[#19ccf0]/10 border border-[#19ccf0]/20 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-[#19ccf0]">1</span>
                </div>
                <p className="text-xs text-slate-300">Confirmá tu canje para obtener el código.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-[#19ccf0]/10 border border-[#19ccf0]/20 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-[#19ccf0]">2</span>
                </div>
                <p className="text-xs text-slate-300">Visitá el local antes de que expire.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-[#19ccf0]/10 border border-[#19ccf0]/20 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-[#19ccf0]">3</span>
                </div>
                <p className="text-xs text-slate-300">Presentá tu QR al momento de pagar.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {reward.available ? (
              <button onClick={onRedeem} className="w-full bg-[#19ccf0] py-4 rounded-xl font-bold text-[#0a1416] shadow-[0_0_20px_rgba(25,204,240,0.3)] hover:brightness-110 transition-all active:scale-[0.98]">
                Canjear por {reward.points} NP
              </button>
            ) : (
              <button disabled className="w-full bg-slate-800 text-slate-500 py-4 rounded-xl font-bold cursor-not-allowed text-sm">
                Nivel Insuficiente (Req: Nivel {reward.level})
              </button>
            )}
            <button onClick={onClose} className="w-full py-4 rounded-xl font-bold text-slate-400 hover:text-white transition-colors text-sm">
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
