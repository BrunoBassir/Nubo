export function LevelScreen({ onLevelDetailsClick, onProfileClick, onNotificationsClick }: { onLevelDetailsClick?: () => void, onProfileClick?: () => void, onNotificationsClick?: () => void }) {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 right-0 w-full lg:max-w-md lg:mx-auto z-50 flex items-center justify-between px-6 h-16 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(25,204,240,0.1)]">
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 rounded-full border-2 border-cyan-400 overflow-hidden cursor-pointer" onClick={onProfileClick}>
            <img alt="User profile" className="w-full h-full object-cover" data-alt="Close-up portrait of a young tech professional with short dark hair, soft blue ambient studio lighting, futuristic cyber-minimalist aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-Uxo9zq4QTh7dWOoEAvTEq4wE3TZ9qZn7L6BXNWzYS2qNqgUHzzy8ZQUrvsCwdlha49ADI-PZ0RVi2-5cj_Hbmjs1kihq21zu550P0zF7exDLoGIDyPKeEPh7OjFgREvpndy6Ddibjzv2OPQHk5PcY1-VrD2Q7arvCQFfMwnY88fEh3E2VKlvMLEZSDmEBxPyQDfGJ9AA2pa_sEonZzkMeOuWyzwt4HkaK91Fuc18e7o5WLSzPPgcw_mTCSoesqDKC2VDF1Z3Vxo"/>
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-cyan-400 font-bold tracking-[0.2em] text-xl font-space-grotesk pointer-events-auto">NUBO</div>
        </div>
        
        <div className="flex items-center relative z-10">
          <button className="text-cyan-400 hover:text-cyan-300 transition-colors" onClick={onNotificationsClick}>
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>
      
      <main className="pt-20 px-4 max-w-lg mx-auto">
        {/* Progress Summary Card */}
        <section className="mb-8">
          <div className="bg-slate-800/40 border border-white/10 rounded-2xl p-5 backdrop-blur-sm shadow-[0_0_20px_rgba(25,204,240,0.05)]">
            <div className="flex justify-between items-end mb-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 mb-1 block">Rango Actual</span>
                <h2 className="text-xl font-bold text-white">Aventurero</h2>
              </div>
              <div className="text-right">
                <span className="text-xl font-black text-white">2,450 <span className="text-slate-400 font-medium text-xs">/ 3,000 XP</span></span>
              </div>
            </div>
            {/* Custom Progress Bar from Style Guidance */}
            <div className="relative w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-white/5">
              <div className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_15px_rgba(25,204,240,0.6)] rounded-full transition-all duration-1000" style={{ width: '82%' }}></div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase text-slate-400">Siguiente: Explorador</span>
              <span className="text-[10px] font-bold uppercase text-cyan-400">Faltan 550 XP</span>
            </div>
          </div>
        </section>
        
        {/* Vertical Timeline Roadmap */}
        <section className="relative mb-10">
          <h3 className="text-lg font-bold text-white mb-6">Hoja de Ruta</h3>
          {/* Continuous Line */}
          <div className="absolute left-[19px] top-12 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-400/30 to-slate-800"></div>
          
          {/* Timeline Nodes */}
          <div className="space-y-8">
            {/* Level 1: Curioso (Done) */}
            <div className="flex gap-4 relative group">
              <div className="relative z-10 shrink-0">
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_rgba(25,204,240,0.2)]">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
              </div>
              <div className="flex-1 pt-0.5">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base font-bold text-white">Curioso</h4>
                  <span className="text-[8px] font-black tracking-widest uppercase bg-cyan-400/10 px-1.5 py-0.5 rounded border border-cyan-400/20 text-cyan-400">Completado</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">Tu primer paso en el ecosistema Nubo. Desbloqueaste el radar básico.</p>
              </div>
            </div>
            
            {/* Level 2: Viajero (Done) */}
            <div className="flex gap-4 relative group">
              <div className="relative z-10 shrink-0">
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_rgba(25,204,240,0.2)]">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
              </div>
              <div className="flex-1 pt-0.5">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base font-bold text-white">Viajero</h4>
                  <span className="text-[8px] font-black tracking-widest uppercase bg-cyan-400/10 px-1.5 py-0.5 rounded border border-cyan-400/20 text-cyan-400">Completado</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">Dominio de las rutas locales. Multiplicador de XP x1.2 activado.</p>
              </div>
            </div>
            
            {/* Level 3: Aventurero (Current) */}
            <div className="flex gap-4 relative group cursor-pointer" onClick={onLevelDetailsClick}>
              <div className="relative z-10 shrink-0">
                <div className="w-10 h-10 rounded-full bg-cyan-400 border-2 border-slate-900 flex items-center justify-center text-slate-950 shadow-[0_0_15px_rgba(25,204,240,0.6)]">
                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                </div>
                {/* Current level pulse effect */}
                <div className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping"></div>
              </div>
              <div className="flex-1 min-w-0 bg-cyan-400/10 border border-cyan-400/30 rounded-xl p-3 backdrop-blur-md transition-all duration-300">
                <div className="flex items-center justify-between mb-1 gap-2">
                  <h4 className="text-base font-bold text-cyan-400 truncate">Aventurero</h4>
                  <span className="text-[8px] font-black tracking-widest uppercase whitespace-nowrap text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded border border-cyan-400/30 shrink-0">Nivel Actual</span>
                </div>
                <p className="text-xs text-slate-300 mb-3 leading-relaxed">Explorando fronteras. Has desbloqueado el acceso a Desafíos de Élite.</p>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5 shrink-0">
                    <img className="w-5 h-5 rounded-full border border-slate-800" data-alt="Female user avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGCNfQvpS-nR3acObnnCtJQa4Bz2errz-crryFrIIBxCJNcynKSGb0OUeRxxFVifbTQP1r51aBYZwsnes9tDj3uDTieEz8AmUVVvLgRKN-4ouOjZlvQzcvnrRNzsV61h7XbeBW2U7BsdwPiXEgpwuZPRGR1pmdz90sSTLa1jf55oo_hYcnj7CA9t52tK2LjxoQmenZEHUsKj9jWYWfqx4KIEd3oYfLBkcvUbdn7MjMUaUB40_J4zsjZZeyW77aGOXFutvmEntmw3E"/>
                    <img className="w-5 h-5 rounded-full border border-slate-800" data-alt="Male user avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRNtIrjQZqvWJw9MXBUCvXnNmKYB5QAFXZegJX-wp0nKpsRM-Ov-6XcRtTdA3s2nDgXe8EsWPzw0pN4Vh9VjcVtM2hQWWlNim0vZgShG1bjr_UB8c46hKX4ZPHXDMc_FZotw8i4_T8ze5hulm-jfDKIuK4buZj960KKl5B8EKRDOhGIu3ax7aGojUxncGnENDhEIdKwnFW_im61PB5q6GYubqrnbH1yFXn9bC7xt4r416lYlo2KZ_F2ysXGJCwoWUyZ_CErZla-FI"/>
                  </div>
                  <span className="text-[9px] font-bold uppercase text-slate-400 truncate">+1.2k en tu zona</span>
                </div>
              </div>
            </div>
            
            {/* Level 4: Explorador (Locked) */}
            <div className="flex gap-4 relative group opacity-60">
              <div className="relative z-10 shrink-0">
                <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-500">
                  <span className="material-symbols-outlined text-[18px]">lock</span>
                </div>
              </div>
              <div className="flex-1 pt-0.5">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base font-bold text-slate-300">Explorador</h4>
                  <span className="text-[8px] font-black tracking-widest uppercase text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">3k XP req.</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">Próximamente: Sistema de gremios y recompensas legendarias.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Upcoming Rewards Carousel */}
        <section className="mt-8 overflow-hidden pb-8">
          <h3 className="text-lg font-bold text-white mb-4">Recompensas Desbloqueables</h3>
          <div className="flex gap-3 overflow-x-auto pb-4 scroll-hide">
            {/* Reward 1 */}
            <div className="min-w-[160px] bg-slate-800/40 border border-white/10 rounded-xl overflow-hidden shadow-lg">
              <div className="h-24 relative overflow-hidden">
                <img className="w-full h-full object-cover" data-alt="Abstract digital asset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAipkELELh2rMTgzzZYHsN1MXQ_aLbYUPCOsDn72kjfRdzXp-vWrf4Jp8kLFl2RHKJAaOshj2FNwzZZ90Nd2FYodeP40WRIj6vy2TOCfCgwKacHFutxfQLYzQlpGhxig6TR4S9T03tBXNleLS9jU99fPt2jkNHRRS5zxNNIfZ2jfjQarTA0IyVoNi08GztPJd3C_Idi7wBBQOWk3xyJKZpnr4rA-HmH45rGJYjGIW4vJ6pgOsLIpGzm7l4aitm2x2bUPyFZ1Rv-m4M"/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
              <div className="p-3">
                <span className="text-[8px] font-black uppercase tracking-widest text-cyan-400 mb-0.5 block">Mítico</span>
                <h5 className="text-sm font-bold text-white">Avatar Holográfico</h5>
              </div>
            </div>
            {/* Reward 2 */}
            <div className="min-w-[160px] bg-slate-800/40 border border-white/10 rounded-xl overflow-hidden shadow-lg">
              <div className="h-24 relative overflow-hidden">
                <img className="w-full h-full object-cover" data-alt="Retro-futuristic gaming equipment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNUvwq468ZJt-2juDXgNpelN9aBGSmJZBAWzqMnXo6Np8VDCUX1VmE-uXyninO3-Af90W-2TdD1rNL77rZFoxsU2-Pz_AbtlX3MILqaclnFafVSATOLiHdaSImgPJY_jm0bzImn5vHNeFUFDxiPmMQlFvdDA3FcTNUwYGf0SGwHhPwPXzRv9the-_Hb-HJeD2wTQnPXTPe6CCjFXsFxZ-ZE48waB2PNdgHL5_DgusE_BBdxX9pt3lurPwXHYDjznmTCP2DroLdIWk"/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
              <div className="p-3">
                <span className="text-[8px] font-black uppercase tracking-widest text-[#cd7f32] mb-0.5 block">Élite</span>
                <h5 className="text-sm font-bold text-white">Booster de Energía 2x</h5>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
