import { useState, useEffect } from 'react';
import { ShareSheet } from './ShareSheet';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';

export function ValidationCelebrationScreen({ onClose, onHome, onExplore, onScan, onRanking, onPrizes }: { onClose: () => void, onHome: () => void, onExplore: () => void, onScan: () => void, onRanking: () => void, onPrizes: () => void }) {
  const [isShareOpen, setIsShareOpen] = useState(false);

  useEffect(() => {
    // Shoot confetti when screen mounts
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#19ccf0', '#60a5fa', '#3b82f6', '#facc15']
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#19ccf0', '#60a5fa', '#3b82f6', '#facc15']
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col overflow-x-hidden relative lg:max-w-md lg:mx-auto w-full">
      {isShareOpen && <ShareSheet onClose={() => setIsShareOpen(false)} title="Compartir Logro" text="¡He validado un nuevo lugar en Nubo y gané puntos!" url="https://nubo.app/logros/v1" />}
      {/* Top Navigation Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center p-6 justify-between z-10 w-full"
      >
        <button onClick={onClose} className="text-slate-900 dark:text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-200/50 dark:bg-primary/10 transition-colors border border-transparent dark:border-primary/20 hover:bg-slate-300 dark:hover:bg-primary/20">
          <span className="material-symbols-outlined">close</span>
        </button>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-widest flex-1 text-center pr-10 uppercase text-[10px] opacity-70">Validación Exitosa</h2>
      </motion.div>

      {/* Celebration Area */}
      <div className="relative flex flex-col items-center justify-center px-6 pt-4 pb-8 overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
        
        {/* Main Celebration Icon */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
          className="relative z-10 mb-8"
        >
          <div className="flex items-center justify-center w-52 h-52 rounded-full border border-primary/30 shadow-[inset_0_0_15px_rgba(25,204,240,0.1),0_0_20px_rgba(25,204,240,0.2)] bg-background-dark/60 backdrop-blur-md relative cyber-pulse">
            {/* Checkmark Icon */}
            <span className="material-symbols-outlined text-[110px] text-primary glow-primary font-bold">check</span>
            {/* Particles */}
            <div className="absolute -top-4 -right-2 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_#19ccf0]"></div>
            <div className="absolute top-10 -left-6 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"></div>
            <div className="absolute -bottom-6 left-12 w-4 h-4 bg-primary/40 rounded-full blur-[2px]"></div>
            <div className="absolute bottom-10 -right-8 w-2 h-2 bg-primary rounded-full"></div>
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center z-10"
        >
          <h1 className="text-slate-900 dark:text-white tracking-tight text-4xl font-bold leading-tight mb-2 glow-primary">
            ¡Visita Validada!
          </h1>
          <p className="text-slate-600 dark:text-primary/80 text-lg font-medium">Has completado el desafío urbano.</p>
        </motion.div>
      </div>

      {/* Rewards Grid */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-wrap gap-4 px-6 py-4 z-10"
      >
        <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-2xl p-5 bg-white dark:bg-card-bg border border-slate-200 dark:border-primary/20 box-glow-primary">
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-primary text-sm">bolt</span>
            <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest">XP Ganada</p>
          </div>
          <p className="text-slate-900 dark:text-white tracking-tighter text-3xl font-bold leading-tight">+250</p>
        </div>
        <div className="flex min-w-[140px] flex-1 flex-col gap-1 rounded-2xl p-5 bg-white dark:bg-card-bg border border-slate-200 dark:border-primary/20 box-glow-primary">
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-primary text-sm">toll</span>
            <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest">Nubo Points</p>
          </div>
          <p className="text-slate-900 dark:text-white tracking-tighter text-3xl font-bold leading-tight">+50</p>
        </div>
      </motion.div>

      {/* Progress Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="px-6 mb-4 z-10"
      >
        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white dark:bg-slate-800/20 border border-slate-200 dark:border-white/5 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Progreso de Nivel</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">¡Casi llegas al Nivel 12!</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-primary font-bold text-2xl leading-none">85%</span>
              <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Completado</span>
            </div>
          </div>
          {/* Custom Progress Bar */}
          <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '85%' }}
              transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
              className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(25,204,240,0.5)]"
            ></motion.div>
          </div>
          <div className="flex items-center gap-3 mt-1">
            <div className="w-10 h-10 rounded-xl bg-cover bg-center border border-primary/40 p-0.5 bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-2xl">workspace_premium</span>
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Próxima Recompensa:</p>
              <p className="text-sm text-slate-900 dark:text-slate-200 font-bold">Multiplicador x1.5 XP</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="px-6 pb-32 flex flex-col gap-3 z-10"
      >
        <button onClick={onHome} className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold text-lg py-4 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] box-glow-primary">
          ¡Genial!
        </button>
        <button onClick={() => setIsShareOpen(true)} className="w-full flex items-center justify-center gap-2 bg-transparent text-slate-600 dark:text-slate-400 font-bold text-sm py-3 rounded-full border border-slate-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all uppercase tracking-widest relative" style={{ zIndex: 60 }}>
          <span className="material-symbols-outlined text-lg">share</span>
          Compartir Logro
        </button>
      </motion.div>

      {/* Hidden background element for additional depth */}
      <div className="fixed bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none -z-0"></div>

    </div>
  );
}
