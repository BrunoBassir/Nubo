import { motion } from 'motion/react';

export function AchievementsScreen({ onBack }: { onBack: () => void }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  const achievements = [
    { title: "Madrugador", description: "Completa 5 visitas antes de las 9am", icon: "wb_sunny", color: "text-amber-400", badgeGlow: "shadow-[0_0_20px_rgba(251,191,36,0.4)]", borderColor: "border-amber-400/50", xp: 50, unlocked: true, progress: 5, total: 5, bgGradient: "from-amber-400/20 to-transparent" },
    { title: "Explorador", description: "Descubre 10 lugares nuevos", icon: "explore", color: "text-cyan-400", badgeGlow: "shadow-[0_0_20px_rgba(34,211,238,0.4)]", borderColor: "border-cyan-400/50", xp: 100, unlocked: true, progress: 10, total: 10, bgGradient: "from-cyan-400/20 to-transparent" },
    { title: "Socialité", description: "Invita a 3 amigos a la app", icon: "group", color: "text-emerald-400", badgeGlow: "shadow-[0_0_20px_rgba(52,211,153,0.4)]", borderColor: "border-emerald-400/50", xp: 150, unlocked: true, progress: 3, total: 3, bgGradient: "from-emerald-400/20 to-transparent" },
    { title: "Foodie", description: "Prueba 5 restaurantes diferentes", icon: "restaurant", color: "text-orange-400", badgeGlow: "shadow-[0_0_20px_rgba(251,146,60,0.4)]", borderColor: "border-orange-400/50", xp: 75, unlocked: false, progress: 2, total: 5, bgGradient: "from-orange-400/20 to-transparent" },
    { title: "Lente Mágica", description: "Sube 20 fotos a la galería", icon: "photo_camera", color: "text-purple-400", badgeGlow: "shadow-[0_0_20px_rgba(192,132,252,0.4)]", borderColor: "border-purple-400/50", xp: 200, unlocked: false, progress: 8, total: 20, bgGradient: "from-purple-400/20 to-transparent" },
    { title: "Leyenda Urbana", description: "Acumula 5000 puntos en total", icon: "military_tech", color: "text-yellow-400", badgeGlow: "shadow-[0_0_20px_rgba(250,204,21,0.4)]", borderColor: "border-yellow-400/50", xp: 500, unlocked: false, progress: 1240, total: 5000, bgGradient: "from-yellow-400/20 to-transparent" },
    { title: "Noctámbulo", description: "Visita 3 bares despues de las 00:00", icon: "nightlife", color: "text-indigo-400", badgeGlow: "shadow-[0_0_20px_rgba(129,140,248,0.4)]", borderColor: "border-indigo-400/50", xp: 120, unlocked: false, progress: 1, total: 3, bgGradient: "from-indigo-400/20 to-transparent" }
  ];

  const totalUnlocked = achievements.filter(a => a.unlocked).length;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full lg:max-w-md lg:mx-auto z-50 flex items-center justify-between px-6 h-16 bg-background-dark/80 backdrop-blur-xl border-b border-primary/20">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white">arrow_back</span>
        </button>
        <div className="flex flex-col items-center pointer-events-none absolute left-1/2 -translate-x-1/2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">Trofeos</span>
          <span className="font-display font-black text-white text-lg leading-none tracking-tight">LOGROS</span>
        </div>
        <div className="w-10"></div>
      </header>

      <main className="pt-20 px-4 max-w-2xl mx-auto pb-32 min-h-screen bg-background-dark">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-6">
          
          {/* Progress Overview - Gaming Style */}
          <motion.section variants={itemVariants} className="relative mt-2">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-50 pointer-events-none"></div>
            <div className="glass-panel border-primary/30 p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h2 className="text-[10px] font-black font-display uppercase tracking-[0.2em] text-slate-400 mb-1">Progreso Total</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black font-display tracking-tighter text-white">{totalUnlocked}</span>
                    <span className="text-xl font-bold text-slate-500">/{achievements.length}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 px-3 py-1 mt-1 rounded-md">
                    <span className="material-symbols-outlined text-primary text-sm fill-current">star</span>
                    <span className="text-xs font-bold text-primary tracking-wider">NIVEL 12</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-3 w-full bg-slate-900 rounded-full border border-slate-700/50 overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${(totalUnlocked / achievements.length) * 100}%` }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-cyan-500 to-primary rounded-full"
                >
                  <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/50 blur-[2px]"></div>
                </motion.div>
                {/* Segments */}
                <div className="absolute inset-0 flex justify-between px-2">
                  {achievements.map((_, i) => (
                    <div key={i} className="w-[1px] h-full bg-slate-900/50"></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Achievement List */}
          <div className="flex flex-col gap-3">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                  achievement.unlocked 
                    ? `bg-slate-900 border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]` 
                    : 'bg-slate-950/80 border-slate-800/50 grayscale-[0.5] opacity-80'
                }`}
              >
                {/* Background ambient glow for unlocked */}
                {achievement.unlocked && (
                  <div className={`absolute top-0 left-0 w-32 h-full bg-gradient-to-r ${achievement.bgGradient} opacity-50`}></div>
                )}

                <div className="p-4 flex items-center gap-4 relative z-10">
                  {/* Badge Icon */}
                  <div className="relative shrink-0 perspective-1000">
                    <div className={`w-16 h-16 rotate-45 rounded-xl border-2 flex items-center justify-center transition-all duration-500 relative bg-slate-900 ${
                      achievement.unlocked 
                        ? `${achievement.borderColor} ${achievement.badgeGlow}` 
                        : 'border-slate-700'
                    }`}>
                      {/* Inner glow on unlocked */}
                      {achievement.unlocked && <div className={`absolute inset-0 ${achievement.bgGradient} opacity-20`}></div>}
                      
                      <div className="-rotate-45 relative flex items-center justify-center">
                        <span className={`material-symbols-outlined text-3xl drop-shadow-md ${
                          achievement.unlocked ? achievement.color : 'text-slate-600'
                        }`}>
                          {achievement.unlocked ? achievement.icon : 'lock'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 py-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className={`font-display font-black text-sm uppercase tracking-wider ${
                        achievement.unlocked ? 'text-white' : 'text-slate-400'
                      }`}>
                        {achievement.title}
                      </h3>
                      {/* XP Reward */}
                      <div className="flex items-center gap-1">
                        <span className={`text-[10px] font-black uppercase tracking-wider ${
                          achievement.unlocked ? 'text-primary' : 'text-slate-500'
                        }`}>
                          +{achievement.xp} XP
                        </span>
                      </div>
                    </div>
                    
                    <p className={`text-[11px] leading-snug mb-3 pr-2 ${
                      achievement.unlocked ? 'text-slate-300' : 'text-slate-500'
                    }`}>
                      {achievement.description}
                    </p>

                    {/* Progress Bar for Locked */}
                    {!achievement.unlocked && (
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-slate-500 rounded-full"
                            style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 font-mono">
                          {achievement.progress}/{achievement.total}
                        </span>
                      </div>
                    )}
                    
                    {/* Unlocked Date or Status */}
                    {achievement.unlocked && (
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-primary text-[12px]">check_circle</span>
                        <span className="text-[9px] text-primary uppercase font-bold tracking-widest">Desbloqueado</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </>
  );
}
