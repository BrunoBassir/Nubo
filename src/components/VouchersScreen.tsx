import { useState } from 'react';
import { RewardDetailScreen, RewardInfo } from './RewardDetailScreen';

const mockVouchers = [
  {
    id: 'v1',
    title: 'Café de cortesía',
    placeName: 'Star Urban Coffee',
    category: 'Gastronomía',
    level: 1,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOMOlMoMND60i9WCfHv4uf-8bBFb3n3J6J3VSufTSPmG9vaGGbcz1eNMXkYpAgrxQu3UXTMhW5_PRgcXuCi_i5Eb1UnQPE-BhvGPOa4zVqSvNijtZziplJUdw80QfRsEp5T89ZYErXuk5nFmjsT3DnfJb_YHMLYe_BM3nQ2mtUpP5KZxEXzG_q5thbLxOi90_nl7IlBrzcRDCmJoCL0wqxAI68FZSbAiPUnRCCBEj4xwaTCbd4zIuF7jZmvS763O4uwkJFJPvtyeI',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9FCiVhinMNHXplDpu76QVdqImIrLbJ255cK4B-h8LEzrQGS4q5vjreh5HmjAwsY2qPmzKcDN2lVyuHEXnH3RkilQxmw113mumFpeKY-8WQmGQROUBa2SYAXNoFAI0L0ou-PscPJj3Zk8V99YPsp8JyoUzmqaKdbusU5ztB-OiZdJkwz_-cuzhr0eZr_MyljYFVGd_i_DNClFDIDVUqbikhiZhGF0bDRrPRnvbWdCme7X1wsJxx0wGDw79Gm5gNElurIiHqCnaM-I',
    points: 300,
    expireDate: '12 Oct 2023',
    available: true,
    userPoints: 1250,
  },
  {
    id: 'v2',
    title: '20% Off en Cenas',
    placeName: 'Pizzería del Centro',
    category: 'Gastronomía',
    level: 2,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB86KdbUYEx4U1CzvvVkry7Bx7Jq4OvCVpgDhebQuQTubhJJfYMeI2RbXlqIj5XQUvArQ_WAS2kD816YLNtpYfoqrCVj7UJbAKZcCNh1qJ7z7EbGZlOEeSFR8DbMPd0_l7gz8vSvM2R8CvogHLe4oG_JD1ujPvax4__Wa8uFiH_9phZ4BVJkUfU0AaFOKYszXOpuoIBuvsAQ6Om0IXotzYLtt7gJGD65glreDpPfqiUdEeXO6bPlXwWTjTC1842IL8M3hJ6rFbsS5g',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBd_Hb69WeCOMujEY17l4yTnVMwvWuzLobU3I4VoYaCXmcvchB-L-k1k9_fPM9e2dP59t-hLJcjHGk8dV8PcDaIcanS9abSTCdGR9D9aM1RQw8GafNtjTw7Xt7QNXZJmwbk0T3XZ3clZ_9lY-JlVafUU9Ur8mbcxWBjc3hhswdpnOxIfyaW286RUqFF9TdI8-UWnNQWHe4RduJQkQJcDzo77QO-d7rGgZRh84wQlRYybwUjkshsdYwclz8D_vc3U8A_vNnamvnY_aA',
    points: 500,
    expireDate: '15 Oct 2023',
    available: true,
    userPoints: 1250,
  },
  {
    id: 'v3',
    title: 'Pase VIP Evento',
    placeName: 'Nubo Urban Fest',
    category: 'Atractivo',
    level: 5,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFnc5BijG8IwQt7G3Q9DMxs7HYS5tSN9a6wWQ0eNg2dL6k9MZI8yqld8TCwed2iAxCWeaHwoKNSQIjEIC2hUBm-O9aLtwUHZQvkUdqZkvRAJq1tVVhnQM2go2Ssy63qZDWQAMm2k8oiibm6WTqWdjb9vtXxV0xWwxUsKAEJUvJgAT2YOBiGtypYXOhDhxHya8zCw9U_cGH5F4-xQ9ThffhHydnTOWQyzEIulI4Hf2slNYueMa8J66bgLRMSIpo_BXKX7oTgEe18ak',
    logoUrl: '',
    points: 2500,
    expireDate: 'Mañana',
    available: false,
    userPoints: 1250,
  }
];

const mockHistoryVouchers = [
  {
    id: 'h1',
    title: 'Descuento 15% Meriendas',
    placeName: 'Café Del Sol',
    category: 'Gastronomía',
    level: 1,
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    logoUrl: '',
    points: 200,
    expireDate: 'Utilizado el 5 Oct 2023',
    available: false,
    userPoints: 1250,
  },
  {
    id: 'h2',
    title: 'Entrada Museo 2x1',
    placeName: 'Museo de Arte Moderno',
    category: 'Atractivo',
    level: 2,
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    logoUrl: '',
    points: 400,
    expireDate: 'Expiró el 10 Sep 2023',
    available: false,
    userPoints: 1250,
  }
];

export function VouchersScreen({ onHome, onExplore, onScan, onPrizes, onRanking, onRedeemVoucher, hideHeader = false }: { onHome?: () => void, onExplore?: () => void, onScan?: () => void, onPrizes?: () => void, onRanking?: () => void, onRedeemVoucher?: () => void, hideHeader?: boolean }) {
  const [selectedVoucher, setSelectedVoucher] = useState<typeof mockVouchers[0] | null>(null);
  const [activeTab, setActiveTab] = useState<'active' | 'history'>('active');

  const visibleVouchers = activeTab === 'active' ? mockVouchers : mockHistoryVouchers;

  return (
    <div className={hideHeader ? "w-full" : "bg-background-dark font-display text-slate-100 flex flex-col relative w-full"}>
      {selectedVoucher && <RewardDetailScreen reward={{...selectedVoucher, id: selectedVoucher.id}} onClose={() => setSelectedVoucher(null)} onRedeem={() => {
        setSelectedVoucher(null);
        if (onRedeemVoucher) onRedeemVoucher();
      }} />}
      
      {/* Top Header */}
      {!hideHeader && (
        <header className="px-6 py-4 flex items-center justify-between sticky top-0 bg-background-dark/95 backdrop-blur-md z-40 border-b border-white/5">
          <div className="flex items-center gap-3">
            <button onClick={onPrizes} className="flex size-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
              <span className="material-symbols-outlined text-slate-100">arrow_back</span>
            </button>
            <h1 className="text-xl font-bold tracking-tight">Mis Canjes</h1>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
              <span className="text-[10px] text-slate-400 uppercase tracking-tighter">Puntos</span>
              <span className="text-sm font-bold text-primary tracking-tight">1,250</span>
          </div>
        </header>
      )}
      
      <div className={hideHeader ? "relative flex-1 flex flex-col w-full overflow-hidden pt-2" : "relative flex-1 flex flex-col w-full overflow-hidden [background:radial-gradient(circle_at_50%_-20%,rgba(25,204,240,0.15)_0%,transparent_70%)]"}>
        <div className="px-6 py-4 flex flex-col gap-4">
          <div className="flex p-1 bg-white/5 rounded-xl border border-white/10">
            <button 
              onClick={() => setActiveTab('active')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'active' ? 'bg-primary text-background-dark shadow-[0_0_15px_rgba(25,204,240,0.3)]' : 'text-slate-400 hover:text-white'}`}
            >
              Activos
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'history' ? 'bg-primary text-background-dark shadow-[0_0_15px_rgba(25,204,240,0.3)]' : 'text-slate-400 hover:text-white'}`}
            >
              Historial
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 space-y-6">
          {visibleVouchers.map((voucher, index) => (
             <div key={voucher.id} className={`relative group ${!voucher.available || activeTab === 'history' ? 'opacity-60' : ''}`}>
              {index === 0 && activeTab === 'active' && <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-[#f4c025]/20 rounded-2xl blur opacity-30 group-hover:opacity-50 group-hover:blur-md transition duration-500"></div>}
              <div className="relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-primary/40 hover:shadow-[0_0_20px_rgba(25,204,240,0.15)] transform group-hover:scale-[1.02]">
                <div className="p-5 flex gap-4 cursor-pointer" onClick={() => setSelectedVoucher(voucher)}>
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden text-slate-500 group-hover:border-primary/30 transition-colors">
                    {voucher.logoUrl ? (
                      <img alt="Logo" className="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-300" src={voucher.logoUrl}/>
                    ) : (
                      <span className="material-symbols-outlined text-3xl group-hover:text-primary transition-colors">local_activity</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{voucher.title}</h3>
                    <p className="text-slate-400 text-sm">{voucher.placeName}</p>
                    <div className={`flex items-center gap-1 mt-2 text-[11px] font-bold ${voucher.available && activeTab === 'active' ? 'text-primary' : 'text-slate-500'} uppercase tracking-wider`}>
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      {activeTab === 'history' ? voucher.expireDate : `Expira: ${voucher.expireDate}`}
                    </div>
                  </div>
                </div>
                <div className="relative h-6 flex items-center px-0">
                  <div className="w-full border-t border-dashed border-white/20 group-hover:border-primary/30 transition-colors"></div>
                  <div className="absolute left-0 -translate-x-1/2 w-6 h-6 rounded-full bg-background-dark border-r border-white/10 group-hover:border-primary/40 transition-colors"></div>
                  <div className="absolute right-0 translate-x-1/2 w-6 h-6 rounded-full bg-background-dark border-l border-white/10 group-hover:border-primary/40 transition-colors"></div>
                </div>
                <div className="p-4 bg-white/[0.02]">
                  {activeTab === 'history' ? (
                    <div className="w-full bg-white/5 border border-white/10 text-white/50 font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                       <span className="material-symbols-outlined text-[20px]">{voucher.expireDate.includes('Expiró') ? 'event_busy' : 'check_circle'}</span>
                      <span>{voucher.expireDate.includes('Expiró') ? 'Expirado' : 'Utilizado'}</span>
                    </div>
                  ) : voucher.available ? (
                    <button onClick={() => {
                        if (index === 0) {
                          if (onRedeemVoucher) onRedeemVoucher();
                        } else {
                          setSelectedVoucher(voucher);
                        }
                      }} className={`w-full ${index === 0 ? 'bg-primary hover:bg-primary/90 text-background-dark hover:shadow-[0_0_15px_rgba(25,204,240,0.4)]' : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white hover:border-primary/50'} font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95`}>
                      <span>Canjear ahora</span>
                      <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
                    </button>
                  ) : (
                    <button className="w-full bg-white/5 border border-white/10 text-white/50 hover:bg-white/10 hover:text-white transition-colors duration-300 font-bold py-3 rounded-xl">
                      Ver detalles
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
