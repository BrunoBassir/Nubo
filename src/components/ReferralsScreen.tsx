import { useState } from 'react';
import { ShareSheet } from './ShareSheet';

export function ReferralsScreen({ onBack, onHome, onExplore, onScan, onPrizes, onRanking, onInviteClick }: { onBack?: () => void, onHome?: () => void, onExplore?: () => void, onScan?: () => void, onPrizes?: () => void, onRanking?: () => void, onInviteClick?: () => void }) {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#06090a] text-white font-sans font-display relative">
      {isShareOpen && <ShareSheet onClose={() => setIsShareOpen(false)} title="Compartir Nubo" text="¡Sumate a Nubo con mi código NUBO-X92 y ganemos XP!" url="https://nubo.app/invite/NUBO-X92" />}
      
      <header className="sticky top-0 z-50 bg-[#06090a]/80 backdrop-blur-xl px-6 py-4 flex items-center justify-between border-b border-white/5 lg:max-w-md lg:mx-auto w-full">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0d1317] border border-white/10 active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-white text-xl">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight text-center flex-1">Impacto Nubo</h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0d1317] border border-white/10">
          <span className="material-symbols-outlined text-white text-xl">info</span>
        </button>
      </header>
      
      <main className="flex-1 overflow-y-auto px-5 pt-6 pb-48 lg:max-w-md lg:mx-auto w-full [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[#00f2ff44] [&::-webkit-scrollbar-thumb]:rounded-full">
        <section className="mb-8">
          <div className="bg-gradient-to-br from-[#0a1118] to-[#0d1317] relative overflow-hidden border border-[#00f2ff]/10 rounded-3xl p-6 shadow-2xl">
            <div className="absolute -top-[50%] -right-[20%] w-[180px] h-[180px] bg-[radial-gradient(circle,rgba(0,242,255,0.1)_0%,transparent_70%)] blur-[30px] rounded-full pointer-events-none"></div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-[#00f2ff] rounded-full animate-pulse shadow-[0_0_8px_#00f2ff]"></div>
              <h2 className="text-[#00f2ff] text-[10px] font-bold tracking-[0.3em] uppercase">Red de Influencia</h2>
            </div>
            <div className="flex items-end justify-between">
              <div className="space-y-1">
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Invitados</p>
                <p className="text-4xl font-bold tracking-tighter">24</p>
              </div>
              <div className="h-10 w-px bg-white/5 mx-4"></div>
              <div className="space-y-1 flex-1 text-right">
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest text-right">Créditos XP</p>
                <p className="text-4xl font-bold tracking-tighter">1,200<span className="text-[#00f2ff] text-xl ml-1">XP</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* High-Tech Top 10 Section */}
        <section className="mb-10">
          <div className="bg-[#0d1317]/50 rounded-3xl p-6 border border-[#00f2ff]/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-[#00f2ff]">rebase_edit</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-[#00f2ff]/30 bg-[#00f2ff]/5 shadow-[0_0_15px_rgba(0,242,255,0.4)]">
                <span className="material-symbols-outlined text-[#00f2ff] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>leaderboard</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white tracking-tight">Progreso Top 10</h3>
                <p className="text-slate-400 text-xs">Faltan <span className="text-[#00f2ff] font-bold">3 referidos</span> para subir.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                <span className="text-[#00f2ff] flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#00f2ff] rounded-full"></span>
                  7 Reclutados
                </span>
                <span className="text-slate-500">Nivel Bronce</span>
              </div>
              <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden border border-white/5 p-0.5">
                <div className="h-full bg-gradient-to-r from-[#00f2ff]/50 to-[#00f2ff] rounded-full transition-all duration-1000 relative" style={{ width: '70%' }}>
                  <div className="absolute right-0 top-0 h-full w-4 bg-white/20 blur-sm"></div>
                </div>
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 tracking-tighter pt-1">
                <span>ACTUAL</span>
                <span>SIGUIENTE NIVEL (10)</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 px-4 py-3 bg-[#00f2ff]/5 rounded-2xl border border-[#00f2ff]/10">
              <span className="material-symbols-outlined text-[#00f2ff] text-xl">workspace_premium</span>
              <p className="text-xs text-slate-300 font-medium">Desbloquea el <span className="text-white font-bold">Badge Platinum</span> al llegar a 10.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.15em] px-1">Trazabilidad de Amigos</h3>
            <div className="flex items-center gap-1 text-[10px] font-bold text-[#00f2ff] uppercase tracking-tighter cursor-pointer">
              <span>Filtrar</span>
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </div>
          </div>
          
          {/* Validated Item */}
          <div className="flex items-center gap-4 bg-[#0d1317] p-4 rounded-2xl border border-white/5 transition-all hover:border-[#00f2ff]/10">
            <div className="relative">
              <img alt="Sofia" className="w-12 h-12 rounded-full object-cover ring-2 ring-white/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPkrjbl8ukX_lZeXoOa8fe5Qm5yQT4pwDdEkaeX2NFIq6uN0DJ05kNABlSG28qIkJJSxv9DTDW88KmCoy42P6hvo_h1soSsYB3oe-J7-JXCDB7Vw-pJ5uDxfS2QmvUgSPg920X1uSk5nTDJvE3V3P_fSMoaIc5n_BF8EMj-If-NnEb2j4BmJ8qOgKgylUcGxxRON0zECnFPS8bYgCuo0UK3c9jPiii8pFDxwntt0sWa00qW_QgLqVfaIr4a7pXxHEYaud5iB_z35c"/>
              <div className="absolute -bottom-1 -right-1 bg-[#10b981] w-5 h-5 rounded-full border-2 border-[#0d1317] flex items-center justify-center">
                <span className="material-symbols-outlined text-[10px] text-white font-black">check</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-100 truncate">Sofia Rodriguez</p>
              <p className="text-[11px] text-[#10b981] font-bold uppercase tracking-tighter">Validado</p>
            </div>
            <div className="text-right">
              <p className="text-[#10b981] font-black text-sm">+50 XP</p>
              <p className="text-[9px] text-slate-500 font-medium uppercase tracking-tighter">Hoy, 10:20</p>
            </div>
          </div>
          
          {/* Pending Item */}
          <div className="flex items-center gap-4 bg-[#0d1317] p-4 rounded-2xl border border-[#f59e0b]/30 shadow-[0_0_20px_rgba(245,158,11,0.05)]">
            <div className="relative">
              <img alt="Lucia" className="w-12 h-12 rounded-full object-cover ring-2 ring-white/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqaSpzRdRWaNFaVPg1twHOuH_Ec6bCDvGhOqxSPa1EQnGOB_kIm8ych49mR1dxmItUud-b4h8V7wa8eCJQ4rY4NLibcLofTkrxa1GeN1uEiS12Fu17jRz4GhRzedQU2IpYGoqX3TlXOyG-GhaVqPZDn6CCAMO3Mq9pLeyo3ycCXR6IR0G08ADUSQLqCN1KMOViXSm0hu9eLpWLO2dbkRsXWHczApdvMAih5xn-RbAJjcoQ-ksvpN9y3d9Bgi58rparAXUMELPy9x8"/>
              <div className="absolute -bottom-1 -right-1 bg-[#f59e0b] w-5 h-5 rounded-full border-2 border-[#0d1317] flex items-center justify-center">
                <span className="material-symbols-outlined text-[12px] text-white font-bold">priority_high</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-100 truncate">Lucia Valenzuela</p>
              <p className="text-[11px] text-[#f59e0b] font-bold uppercase tracking-tighter">Visita pendiente</p>
            </div>
            <button className="bg-[#f59e0b] text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-wider active:scale-95 transition-transform shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              Recordar
            </button>
          </div>
          
          {/* Grayed Item */}
          <div className="flex items-center gap-4 bg-[#0d1317]/40 p-4 rounded-2xl border border-dashed border-white/10 opacity-60">
            <div className="relative grayscale">
              <img alt="Carlos" className="w-12 h-12 rounded-full object-cover ring-2 ring-white/5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZyj5z-c_q3afiUSA7CTVBujEdA3ksb7jBs90G-I_Vx6d94RVTTqsTbgL0Z7yuxHah2o-SPSJGmpdNnjKwCY_4EH8qAV0JxWVrBhWnZMF5TJsB337LvK3Uy9LDqBxP41bgsKPLnT_WZdwPdgcCy2xhXwB8ZrYADhYbhO6tjOe0I1Q4wGC6v-oHCGdQ3zaC1uWsAOcDkVZz5-1wY7OWAVprJQty82CQBILFQqgtgGpcDHCHjD4X1Y1GmWC6zhNbLirZWEl1E9QPzGU"/>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-400 truncate">Carlos Maza</p>
              <p className="text-[11px] text-slate-500 font-medium">Registro pendiente</p>
            </div>
            <button className="bg-white/5 text-slate-400 text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              Re-enviar
            </button>
          </div>
        </section>
      </main>

      {/* Unified Floating Action Footer */}
      <div className="fixed bottom-[96px] left-0 right-0 p-5 pt-8 pb-6 bg-gradient-to-t from-[#06090a] via-[#06090a]/90 to-transparent z-40 lg:max-w-md lg:mx-auto">
        <div className="flex flex-col gap-3 w-full max-w-[360px] mx-auto">
          {/* Main Action Buttons */}
          <div className="flex items-center gap-3 w-full">
            <button onClick={() => setIsShareOpen(true)} className="flex-1 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-black py-3.5 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2 text-xs uppercase tracking-widest hover:bg-white/10 active:scale-95 transition-all">
              <span className="material-symbols-outlined font-black text-[18px]">share</span>
              Redes
            </button>
            <button onClick={onInviteClick} className="flex-[1.5] bg-[#19ccf0] text-[#050a0b] font-black py-3.5 rounded-xl shadow-[0_0_20px_rgba(25,204,240,0.4)] hover:shadow-[0_0_30px_rgba(25,204,240,0.6)] flex items-center justify-center gap-2 text-xs uppercase tracking-widest hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all">
              <span className="material-symbols-outlined font-black text-[18px]">person_add</span>
              Invitar Amigos
            </button>
          </div>
          
          {/* ID Banner */}
          <div className="w-full bg-slate-900/95 backdrop-blur-xl rounded-xl px-4 py-2 border border-[#19ccf0]/30 flex items-center justify-between shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-2">
              <span className="text-[#19ccf0]/80 text-[10px] font-black tracking-widest uppercase">Tu ID:</span>
              <span className="text-white font-black tracking-[0.15em] text-[13px] [text-shadow:0_0_10px_rgba(25,204,240,0.4)]">NUBO-X92</span>
            </div>
            <button onClick={() => navigator.clipboard.writeText('NUBO-X92').then(() => alert('¡Código copiado!'))} className="w-8 h-8 bg-[#19ccf0]/10 text-[#19ccf0] flex items-center justify-center rounded-lg border border-[#19ccf0]/40 hover:bg-[#19ccf0]/20 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[16px]">content_copy</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
