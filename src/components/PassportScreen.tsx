import { motion } from 'motion/react';

export function PassportScreen({ onBack }: { onBack: () => void }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    show: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }
  };

  const stamps = [
    { title: "Café Central", date: "24/05/2026", color: "text-[#19ccf0]", border: "border-[#19ccf0]/40", bg: "bg-[#19ccf0]/5", rotation: "-rotate-6", icon: "local_cafe" },
    { title: "Museo MACBA", date: "20/05/2026", color: "text-purple-400", border: "border-purple-400/40", bg: "bg-purple-400/5", rotation: "rotate-3", icon: "museum" },
    { title: "La Trattoria", date: "15/05/2026", color: "text-orange-400", border: "border-orange-400/40", bg: "bg-orange-400/5", rotation: "rotate-6", icon: "restaurant" },
    { title: "Neon Garden", date: "10/05/2026", color: "text-emerald-400", border: "border-emerald-400/40", bg: "bg-emerald-400/5", rotation: "-rotate-3", icon: "local_bar" },
    { title: "Hotel Savoy", date: "02/05/2026", color: "text-amber-400", border: "border-amber-400/40", bg: "bg-amber-400/5", rotation: "rotate-12", icon: "hotel" },
    { locked: true }
  ];

  return (
    <div className="bg-background-dark min-h-screen pb-32">
      <header className="fixed top-0 left-0 right-0 w-full lg:max-w-md lg:mx-auto z-50 flex items-center justify-between px-6 h-16 bg-background-dark/80 backdrop-blur-xl border-b border-white/10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
          <span className="material-symbols-outlined text-white">arrow_back</span>
        </button>
        <div className="flex flex-col items-center pointer-events-none absolute left-1/2 -translate-x-1/2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Historial</span>
          <span className="font-display font-black text-white text-lg leading-none tracking-tight">PASAPORTE</span>
        </div>
        <div className="w-10"></div>
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto flex flex-col items-center">
        {/* Passport Cover / Book Feel */}
        <div className="w-full bg-slate-900 border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex flex-col items-center mb-8 relative z-10 border-b border-dashed border-white/10 pb-6">
            <span className="material-symbols-outlined text-5xl text-primary mb-3">airplane_ticket</span>
            <h2 className="font-display font-black text-2xl uppercase tracking-widest text-slate-300">Nubo Passport</h2>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">ID: NXB-2026-92</p>
          </div>

          <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-2 gap-4 relative z-10">
            {stamps.map((stamp, idx) => (
              stamp.locked ? (
                <div key={idx} className="aspect-square rounded-2xl border-2 border-dashed border-slate-800 flex items-center justify-center bg-slate-950/30">
                  <span className="material-symbols-outlined text-slate-800 text-3xl">question_mark</span>
                </div>
              ) : (
                <motion.div key={idx} variants={itemVariants} className={`aspect-square rounded-full border-4 flex flex-col items-center justify-center p-2 relative ${stamp.border} ${stamp.bg} ${stamp.rotation} group hover:scale-105 transition-transform cursor-pointer`}>
                  <span className={`material-symbols-outlined text-3xl opacity-80 ${stamp.color}`}>{stamp.icon}</span>
                  <span className={`text-[10px] font-black uppercase text-center mt-1 w-full leading-none tracking-tighter ${stamp.color} opacity-90`}>{stamp.title}</span>
                  <span className={`text-[8px] font-bold ${stamp.color} opacity-60 mt-1`}>{stamp.date}</span>
                </motion.div>
              )
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
