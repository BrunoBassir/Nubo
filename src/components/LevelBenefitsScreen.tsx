import { motion } from 'motion/react';

export function LevelBenefitsScreen({ onBack, onProfileClick, onNotificationsClick }: { onBack: () => void, onProfileClick?: () => void, onNotificationsClick?: () => void }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full lg:max-w-md lg:mx-auto z-50 flex items-center justify-between px-6 h-16 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(25,204,240,0.1)]">
        <div className="flex items-center gap-3 relative z-10">
          <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors mr-2">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div onClick={onProfileClick} className="w-10 h-10 rounded-full border-2 border-cyan-400 overflow-hidden cursor-pointer">
            <img alt="User" className="w-full h-full object-cover" data-alt="Close-up portrait of a tech-savvy young person with futuristic holographic interface reflections on their face, cool cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSwOK9x5gv0IlDMPwd3Ot57x55qQt2n2_Z4RoWHhZOYHJFLg1wKWiWr01fvE3tYlUalveYG_Hn3LHyj9Y1r-inpRMmlwzE1ZClM7Z0JaMdimVaKUU3QHonK9qJKooRMUIfP-HbO8MF16wya8CBYoLcDMpm1DjJz-k_gRenaB0FGjCkM6G98fQpiKilixQV_J5zldKRB2QW51jyg0I1_rrPfjJUp0za6h8TxGJm4Y8ZfDOYOL8L1WvnFtRcQQ64jeCxenpuEUx1eyo"/>
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img alt="NUBO" className="h-[42px] w-auto brightness-125 drop-shadow-[0_0_12px_rgba(67,221,226,0.6)] pointer-events-auto max-w-[70vw] object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0ujTO8OICi5dMqeWK-37zXjL6hSeOTulMvdrsKKR7Lv7fW8urGGZFy4hjQBQCW-bmlF-CYsXf4_O0ItQhwdM0ywSYtBX5yEVQNUNfY7zklBeOOxLw8wupr-o3Lf0Tu0agaQ2x5MT0tuSqiWXrkyFx_1fTiP7FwYTZTQvEuhfXtzMzEUTd3gPkulOP1Uqig7ZqBm7WpZN61bKigv5Qlb8FelxgNmMRRBpoA_yOhpNjTokkypSLIClOBqbZJwyiUC0I94KaJ2gE92bjw" />
        </div>

        <div className="flex items-center relative z-10">
          <button onClick={onNotificationsClick} className="text-cyan-400 hover:text-cyan-300 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>
      
      <main className="pt-20 px-4 max-w-lg mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <motion.section variants={itemVariants} className="mb-6">
            <div className="flex flex-col gap-1 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Nivel Actual</span>
              <h2 className="text-2xl font-bold text-white tracking-tight">Beneficios Aventurero</h2>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden bg-slate-800/40 border border-white/5 flex flex-col p-4">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-10"></div>
                <img className="w-full h-full object-cover opacity-30" data-alt="Futuristic digital landscape" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdm4HtBZMri9I4EwpvB6Hqxb2wBsiSkdb-yOU9_g2l0em6NRpFbo228Yf7zaEBLBqHiykF7Tk2TF11ZOKBed6tompIMaTeqhJjYw6eM-QaW8L4BHCppSnlotyD_uvfVgdt3-hnQWzNeNdldzKviNTZ5clPE2-E_MbGG9v4O79apWE36spvhTZa3Os12RSkIiiJvvR8cHtS7-upNkVL7x6evgKI5qLn5jiYGLedlGQggcXNz_I3GwXvsa8I7HC_iG8-FLoq6BhrxdM"/>
              </div>
              <div className="relative z-20 flex flex-col gap-3">
                <div className="flex items-center justify-between w-full">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-400/20 border border-cyan-400/50">
                    <span className="material-symbols-outlined text-cyan-400 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-300">Aventurero</p>
                    <p className="text-sm font-bold text-white">850 <span className="text-cyan-400 text-xs">/ 1000 XP</span></p>
                  </div>
                </div>
                
                <div className="w-full">
                  <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/10">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                      className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(25,204,240,0.5)] rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
          
          <motion.section variants={itemVariants} className="grid grid-cols-1 gap-3 mb-8">
            <motion.div whileHover={{ scale: 1.01 }} className="bg-slate-800/40 border border-white/10 rounded-xl p-4 flex gap-4 relative overflow-hidden transition-all duration-300">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl"></div>
              <div className="w-10 h-10 shrink-0 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-cyan-400">trending_up</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-bold text-white">Multiplicador XP x1.2</h3>
                  <span className="text-[8px] font-black uppercase text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded">Activo</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">Acelera tu crecimiento en cada actividad que realices.</p>
              </div>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.01 }} className="bg-cyan-400/5 border border-cyan-400/30 rounded-xl p-4 flex gap-4 relative overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(25,204,240,0.05)]">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl"></div>
              <div className="w-10 h-10 shrink-0 rounded-lg bg-cyan-400 border border-cyan-400 flex items-center justify-center shadow-[0_0_10px_rgba(25,204,240,0.5)]">
                <span className="material-symbols-outlined text-slate-900" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-bold text-cyan-400">Acceso Flash</h3>
                  <span className="text-[8px] font-black uppercase text-slate-900 bg-cyan-400 px-1.5 py-0.5 rounded">Top</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">Notificaciones 15 min antes de eventos públicos.</p>
              </div>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.01 }} className="bg-slate-800/40 border border-white/10 rounded-xl p-4 flex gap-4 relative overflow-hidden transition-all duration-300">
              <div className="w-10 h-10 shrink-0 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-cyan-400">support_agent</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-bold text-white">Soporte Prioritario</h3>
                  <span className="text-[8px] font-black uppercase text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[10px]">lock_open</span> Directo
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">Tiempo de respuesta menor a 2 horas.</p>
              </div>
            </motion.div>
          </motion.section>
          
          <motion.section variants={itemVariants}>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 ml-1">Próximo Nivel: Explorador</h4>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-slate-900/60 opacity-80">
                <div className="w-8 h-8 shrink-0 rounded-full bg-slate-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px] text-slate-500">lock</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-slate-300 truncate">Tienda VIP</p>
                  <p className="text-[10px] text-slate-500 truncate">Descuentos del 20% en merch oficial</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-slate-900/60 opacity-60">
                <div className="w-8 h-8 shrink-0 rounded-full bg-slate-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px] text-slate-500">lock</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-slate-300 truncate">Insignia Dorada</p>
                  <p className="text-[10px] text-slate-500 truncate">Reconocimiento destacado en Ranking Global</p>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </>
  );
}
