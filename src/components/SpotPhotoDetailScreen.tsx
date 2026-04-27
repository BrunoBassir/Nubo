import { useState, useRef, useEffect } from 'react';

export function SpotPhotoDetailScreen({ onBack }: { onBack?: () => void }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 flex flex-col w-full lg:max-w-md lg:mx-auto relative dark">
      {/* Top Header - Glassmorphic over image */}
      <header className="fixed top-0 z-50 bg-slate-950/40 backdrop-blur-md border-b border-white/10 px-4 h-14 flex items-center justify-between w-full lg:max-w-md">
        <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span className="text-xs font-bold uppercase tracking-widest text-slate-200 text-shadow-sm">Café Central</span>
        <div className="relative" ref={menuRef}>
          <button onClick={() => setShowMenu(!showMenu)} className="flex items-center justify-center size-10 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
          
          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute top-12 right-0 w-48 bg-slate-900 border border-white/10 rounded-xl shadow-2xl py-1 z-50 overflow-hidden transform origin-top-right transition-all animate-in fade-in zoom-in-95 duration-200">
              <button 
                onClick={() => {
                  if(navigator.share) {
                    navigator.share({ title: 'Café Central', text: 'Mirá esta foto increíble en Nubo', url: window.location.href });
                  } else {
                    alert('Compartiendo...');
                  }
                  setShowMenu(false);
                }} 
                className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors"
               >
                <span className="material-symbols-outlined text-[18px]">share</span>
                <span className="text-sm font-medium">Compartir foto</span>
              </button>
              <button 
                onClick={() => { alert('Foto guardada en el dispositivo'); setShowMenu(false); }}
                className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors"
               >
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span className="text-sm font-medium">Descargar</span>
              </button>
              <div className="h-px w-full bg-white/10 my-1"></div>
              <button 
                onClick={() => { alert('Gracias por reportar esta foto. Nuestro equipo la revisará.'); setShowMenu(false); }}
                className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-red-500/10 text-red-400 transition-colors"
               >
                <span className="material-symbols-outlined text-[18px]">flag</span>
                <span className="text-sm font-medium">Reportar foto</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main scrollable area */}
      <main className="flex-1 overflow-y-auto pb-36">
        {/* Photo Section */}
        <div className="relative w-full aspect-[4/5] bg-slate-900">
           <img 
            alt="Cafe Interior" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHXpauFYnnTrhLHZmH_yP71tbdpQGlypLTCpvMajr7FFvWG6eo4zFNE6IbMGQk6ZsTEH6MZzMBmZCldeflXHOgctEpHNHNFVr_EPFq3SodYFpcRUatVM5qIK8kOLlKVxo3xVC-D1hb-M6kPm2M5ATnpBxvraQuuqy3ZzNOi3tAnIS6dWTWNP7auHo4pE_0nzWz7AHPYZ9TeajPzP4gPvBG41su2lwejsafTCEpaAtTsWQqPa43IPRyydu2OQKNPenPevkYR4zI4AY" 
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="px-4 -mt-6 relative z-10 space-y-5">
          {/* User Info & Actions Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="size-12 rounded-full border-2 border-[#00f2ff] overflow-hidden shadow-[0_0_10px_rgba(0,242,255,0.4)] relative">
                 <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgvAeXjxY1Rt_lDsWFjSECqppFs1nBSKoq19XLdFme7BLX1M3vASKB7jbo4f4FBwUYyDZpA0R9BpD-Ns9pf770ONFKpG4sgfl01dBBgadeJ1EvLWj-G99zpaqJpuoV3VFgrTCKZkMk9APyVmMDrcxgZrmyvKoTJgglKZafHBSL7DzBrg5_wUxHo0ap26X3tgOLw3i5OBkPGAsOBbG4X2AOKGkmsnD_OfjO3O2JlVsAb4ik-D1VE3U4HJYZlw77LZAFWBAmW3xm03Y"/>
               </div>
               <div>
                 <h2 className="text-sm font-bold leading-tight">Alex M.</h2>
                 <p className="text-[10px] text-[#00f2ff] uppercase tracking-widest font-black">Explorador Nivel 4</p>
               </div>
            </div>
            {/* Actions */}
            <div className="flex gap-2">
              <button 
                onClick={() => setLiked(!liked)} 
                className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${liked ? 'bg-red-500/20 text-red-500 relative' : 'bg-white/5 text-slate-300'}`}
              >
                {liked && <div className="absolute inset-0 bg-red-500/20 blur-md rounded-full -z-10 animate-pulse"></div>}
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: liked ? '"FILL" 1' : '"FILL" 0' }}>favorite</span>
                <span className="text-[10px] font-bold mt-1">245</span>
              </button>
              <button className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 text-slate-300 transition-all hover:bg-white/10">
                <span className="material-symbols-outlined text-xl">chat_bubble</span>
                <span className="text-[10px] font-bold mt-1">12</span>
              </button>
              <button 
                onClick={() => setSaved(!saved)} 
                className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${saved ? 'bg-[#00f2ff]/20 text-[#00f2ff]' : 'bg-white/5 text-slate-300'}`}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: saved ? '"FILL" 1' : '"FILL" 0' }}>bookmark</span>
                <span className="text-[10px] font-bold mt-1">Guardar</span>
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="glass-card p-4 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <span className="material-symbols-outlined text-8xl">format_quote</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed relative z-10 w-11/12">
              El ambiente acá es increíble ☕️🪴. Pasé toda la tarde trabajando y la conexión WIFI volaba. Definitivamente el mejor Flat White de la zona.
            </p>
            <div className="flex gap-2 mt-4 relative z-10">
              <span className="text-xs font-bold text-[#00f2ff] bg-[#00f2ff]/10 px-2.5 py-1 rounded-md">#specialtycoffee</span>
              <span className="text-xs font-bold text-[#00f2ff] bg-[#00f2ff]/10 px-2.5 py-1 rounded-md">#coworking</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-4 uppercase tracking-widest font-bold">Hace 2 días</p>
          </div>

          {/* Characteristics (badges) */}
          <div className="space-y-3">
             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Lo destacado del lugar</h3>
             <div className="flex flex-wrap gap-2">
               <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/20 text-xs font-medium text-slate-200">
                 <span className="material-symbols-outlined text-sm text-[#00f2ff]">wifi</span>
                 Wi-Fi Rápido
               </div>
               <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/20 text-xs font-medium text-slate-200">
                 <span className="material-symbols-outlined text-sm text-[#00f2ff]">chair</span>
                 Sillones Cómodos
               </div>
               <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/40 text-xs font-medium text-slate-200">
                 <span className="material-symbols-outlined text-sm text-purple-400">volume_up</span>
                 Música Alta
               </div>
               <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/20 text-xs font-medium text-slate-200">
                 <span className="material-symbols-outlined text-sm text-[#00f2ff]">outlet</span>
                 Enchufes Disponibles
               </div>
               <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/20 text-xs font-medium text-slate-200">
                 <span className="material-symbols-outlined text-sm text-[#00f2ff]">pets</span>
                 Pet Friendly
               </div>
             </div>
          </div>

          {/* Validation Info Box */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700">
             <div className="size-10 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0 border border-yellow-400/30 shadow-[0_0_10px_rgba(250,204,21,0.2)]">
               <span className="material-symbols-outlined text-yellow-500">stars</span>
             </div>
             <div>
               <p className="text-xs text-slate-300 font-medium">Esta foto fue validada in-situ con QR.</p>
               <p className="text-[10px] text-yellow-500 font-bold uppercase tracking-widest mt-0.5">Visita certificada</p>
             </div>
          </div>
        </div>
      </main>
    </div>
  )
}
