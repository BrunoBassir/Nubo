export function ShareInviteScreen({ onClose, onHome, onExplore, onScan, onPrizes, onRanking, onViewReferrals, onInviteContacts }: { onClose?: () => void, onHome?: () => void, onExplore?: () => void, onScan?: () => void, onPrizes?: () => void, onRanking?: () => void, onViewReferrals?: () => void, onInviteContacts?: () => void }) {
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Nubo',
        text: '¡Sumate a Nubo con mi código NUBO-X92 y ganemos XP!',
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('Compartiendo código NUBO-X92...');
    }
  };

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('NUBO-X92').then(() => {
        alert('¡Código copiado al portapapeles!');
      });
    } else {
      alert('¡Código copiado al portapapeles!');
    }
  };

  return (
    <div className="bg-[#070b14] text-white font-sans relative overflow-x-hidden">
      <div className="absolute top-1/4 -left-1/4 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#19ccf0]/30 to-transparent -rotate-[35deg] pointer-events-none opacity-20"></div>
      <div className="absolute top-1/2 -left-1/3 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#19ccf0]/30 to-transparent -rotate-[35deg] pointer-events-none opacity-10"></div>
      
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(circle_at_20%_30%,rgba(25,204,240,0.08)_0%,transparent_40%),radial-gradient(circle_at_80%_70%,rgba(25,204,240,0.05)_0%,transparent_50%)]"></div>

      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between lg:max-w-md lg:mx-auto">
        <button onClick={onClose} className="size-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-white text-xl">close</span>
        </button>
        <div className="flex items-center gap-2 px-4 py-1.5 bg-[#19ccf0]/10 border border-[#19ccf0]/20 rounded-full">
          <span className="material-symbols-outlined text-[#19ccf0] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
          <span className="text-xs font-bold text-[#19ccf0] uppercase tracking-widest">Nubo Plus</span>
        </div>
      </header>

      <main className="relative z-10 pt-24 px-6 max-w-md mx-auto">
        {/* Aesthetic Hero Card instead of a giant square */}
        <div className="relative w-full rounded-[2rem] bg-gradient-to-b from-[#19ccf0]/20 to-transparent border border-[#19ccf0]/20 p-8 flex flex-col items-center justify-center mb-10 overflow-hidden shadow-[0_0_40px_rgba(25,204,240,0.15)]">
          <div className="absolute inset-0 bg-[#19ccf0]/10 blur-[50px] rounded-full scale-110"></div>
          
          <div className="relative animate-bounce drop-shadow-[0_0_20px_rgba(25,204,240,0.5)] mb-6">
            <span className="material-symbols-outlined text-[80px] text-[#19ccf0] leading-none" style={{ fontVariationSettings: "'FILL' 1, 'wght' 300" }}>redeem</span>
            <div className="absolute -top-3 -right-3 bg-white text-[#070b14] h-8 px-2 rounded-full flex items-center justify-center font-black text-xs shadow-xl border-2 border-[#19ccf0]">
              +500 XP
            </div>
          </div>

          <div className="text-center space-y-2 relative z-10">
            <h1 className="text-3xl font-black tracking-tight leading-tight">
              Expandí tu <span className="text-[#19ccf0] drop-shadow-[0_0_10px_rgba(25,204,240,0.5)]">comunidad</span>
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed font-medium px-4">
              Invitá a tus amigos y ambos ganan <span className="text-white font-bold text-[#19ccf0]">500 XP</span> cuando validen su primera visita.
            </p>
          </div>
        </div>

        <div className="mb-10 px-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tu Meta Semanal</span>
            <span className="text-[10px] font-bold text-[#19ccf0]">2/5 Amigos</span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#19ccf0] shadow-[0_0_10px_rgba(25,204,240,0.5)]" style={{ width: '40%' }}></div>
          </div>
        </div>

        <div className="mb-10">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 text-center mb-6">Compartir vía</p>
          <div className="flex items-center gap-5 overflow-x-auto px-4 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <button onClick={handleShare} className="flex flex-col items-center gap-2 group">
              <div className="size-14 rounded-full border border-[#19ccf0]/30 bg-[#19ccf0]/5 flex items-center justify-center transition-all active:scale-90 shadow-[0_0_15px_rgba(25,204,240,0.1)] group-active:bg-[#19ccf0]/20">
                <svg className="size-6 text-[#19ccf0] fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.415-8.408z"></path></svg>
              </div>
              <span className="text-[10px] text-slate-400 font-bold">WhatsApp</span>
            </button>
            <button onClick={handleShare} className="flex flex-col items-center gap-2 group">
              <div className="size-14 rounded-full border border-[#19ccf0]/30 bg-[#19ccf0]/5 flex items-center justify-center transition-all active:scale-90 shadow-[0_0_15px_rgba(25,204,240,0.1)] group-active:bg-[#19ccf0]/20">
                <svg className="size-6 text-[#19ccf0] fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
              </div>
              <span className="text-[10px] text-slate-400 font-bold text-center">Stories</span>
            </button>
            <button onClick={handleShare} className="flex flex-col items-center gap-2 group">
              <div className="size-14 rounded-full border border-[#19ccf0]/30 bg-[#19ccf0]/5 flex items-center justify-center transition-all active:scale-90 shadow-[0_0_15px_rgba(25,204,240,0.1)] group-active:bg-[#19ccf0]/20">
                <svg className="size-6 text-[#19ccf0] fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.53.26l.204-2.933 5.337-4.82c.232-.204-.05-.317-.36-.11l-6.594 4.155-2.845-.89c-.62-.194-.63-.62.13-.918l11.12-4.292c.513-.194.962.112.783.896z"></path></svg>
              </div>
              <span className="text-[10px] text-slate-400 font-bold">Telegram</span>
            </button>
            <button onClick={handleShare} className="flex flex-col items-center gap-2 group">
              <div className="size-14 rounded-full border border-[#19ccf0]/30 bg-[#19ccf0]/5 flex items-center justify-center transition-all active:scale-90 shadow-[0_0_15px_rgba(25,204,240,0.1)] group-active:bg-[#19ccf0]/20">
                <svg className="size-6 text-[#19ccf0] fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </div>
              <span className="text-[10px] text-slate-400 font-bold">Twitter</span>
            </button>
            <button onClick={handleShare} className="flex flex-col items-center gap-2 group">
              <div className="size-14 rounded-full border border-[#19ccf0]/30 bg-[#19ccf0]/5 flex items-center justify-center transition-all active:scale-90 shadow-[0_0_15px_rgba(25,204,240,0.1)] group-active:bg-[#19ccf0]/20">
                <span className="material-symbols-outlined text-[#19ccf0]">more_horiz</span>
              </div>
              <span className="text-[10px] text-slate-400 font-bold">Más</span>
            </button>
          </div>
        </div>

        <div className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 mb-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#19ccf0]/5 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#19ccf0] text-center mb-4">Tu Código Único</p>
            <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded-2xl p-5">
              <span className="text-3xl font-black tracking-[0.3em] font-mono text-white">NUBO-X92</span>
              <button onClick={handleCopy} className="size-12 bg-[#19ccf0] text-[#070b14] rounded-xl flex items-center justify-center active:scale-90 transition-transform shadow-lg shadow-[#19ccf0]/20 hover:shadow-[#19ccf0]/40">
                <span className="material-symbols-outlined font-bold text-2xl">content_copy</span>
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-20">
          <button onClick={onInviteContacts} className="w-full bg-[#19ccf0] text-[#070b14] font-black py-4 rounded-2xl shadow-[0_0_30px_rgba(25,204,240,0.4)] flex items-center justify-center gap-3 text-base uppercase tracking-wider active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined font-bold">send</span>
            INVITAR AMIGOS
          </button>
          <button onClick={onViewReferrals} className="w-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 text-sm uppercase tracking-widest active:bg-white/10 transition-colors">
            Ver mis referidos
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </main>

    </div>
  );
}
