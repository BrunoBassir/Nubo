import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';
import { RewardInfo } from './RewardDetailScreen';

export function PrizeCelebrationScreen({ reward, onClose, onVouchers }: { reward: RewardInfo, onClose: () => void, onVouchers: () => void }) {
  
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
        colors: ['#19ccf0', '#facc15', '#f87171', '#34d399']
      });
      confetti({
        ...defaults, particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#19ccf0', '#facc15', '#f87171', '#34d399']
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background-dark font-display text-slate-100 flex flex-col overflow-x-hidden relative lg:max-w-md lg:mx-auto w-full z-50">
      
      {/* Top Navigation Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center p-6 justify-between z-10 w-full"
      >
        <button onClick={onClose} className="text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors border border-primary/20 hover:bg-primary/20">
          <span className="material-symbols-outlined">close</span>
        </button>
        <h2 className="text-slate-100 text-lg font-bold leading-tight tracking-widest flex-1 text-center pr-10 uppercase text-[10px] opacity-70">¡Canje Exitoso!</h2>
      </motion.div>

      {/* Celebration Area */}
      <div className="relative flex flex-col items-center justify-center px-6 pt-4 pb-8 overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-yellow-500/10 blur-[80px] rounded-full"></div>
        
        {/* Main Celebration Icon/Image */}
        <motion.div 
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
          className="relative z-10 mb-8"
        >
          <div className="flex items-center justify-center w-56 h-56 rounded-full border-2 border-primary shadow-[inset_0_0_20px_rgba(25,204,240,0.2),0_0_30px_rgba(25,204,240,0.4)] bg-background-dark/80 backdrop-blur-md relative overflow-hidden">
             <img src={reward.imageUrl} alt={reward.title} className="w-full h-full object-cover opacity-80" />
            
             <div className="absolute inset-0 border-[6px] border-background-dark rounded-full"></div>
             
             {/* Particles Overlay */}
             <div className="absolute inset-0 bg-primary/10 mix-blend-color-dodge"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-black text-6xl drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                <span className="material-symbols-outlined text-6xl text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]">local_activity</span>
             </div>
          </div>
          
          <div className="absolute -top-4 -right-2 w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_15px_#facc15]"></div>
          <div className="absolute top-10 -left-6 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#19ccf0]"></div>
          <div className="absolute -bottom-6 left-12 w-5 h-5 bg-white/40 rounded-full blur-[2px]"></div>
          <div className="absolute bottom-10 -right-8 w-2 h-2 bg-primary rounded-full"></div>
        </motion.div>

        {/* Success Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center z-10"
        >
          <h1 className="text-white tracking-tight text-4xl font-extrabold leading-tight mb-3">
            ¡Premio Obtenido!
          </h1>
          <p className="text-primary/90 text-lg font-medium px-4">
            Disfrutá tu <span className="font-bold text-white">{reward.title}</span>.
          </p>
        </motion.div>
      </div>

      {/* Summary Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="px-6 mb-8 z-10"
      >
        <div className="flex flex-col p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl">
           <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Resumen de Canje</span>
              <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border border-primary/30">
                 Completado
              </div>
           </div>
           
           <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                       <span className="material-symbols-outlined text-yellow-400 text-sm">stars</span>
                    </div>
                    <span className="text-sm font-medium text-slate-300">Costo</span>
                 </div>
                 <div className="flex flex-col items-end">
                    <span className="text-lg font-black text-white">-{reward.points} <span className="text-[10px] text-slate-500 uppercase">NP</span></span>
                 </div>
              </div>

              <div className="flex justify-between items-center">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                       <span className="material-symbols-outlined text-primary text-sm">wallet</span>
                    </div>
                    <span className="text-sm font-medium text-slate-300">Nuevo Saldo</span>
                 </div>
                 <div className="flex flex-col items-end">
                    <span className="text-lg font-black text-primary">{reward.userPoints - reward.points} <span className="text-[10px] text-primary/60 uppercase">NP</span></span>
                 </div>
              </div>
           </div>
        </div>
      </motion.div>

      <div className="flex-1"></div>

      {/* Main Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="px-6 pb-12 flex flex-col gap-3 z-10"
      >
        <button onClick={onVouchers} className="w-full bg-primary hover:bg-primary/90 text-background-dark font-black text-base uppercase tracking-widest py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(25,204,240,0.3)] active:scale-95 flex items-center justify-center gap-2">
          Ver mis Vouchers
          <span className="material-symbols-outlined text-[20px]">local_activity</span>
        </button>
        <button onClick={onClose} className="w-full flex items-center justify-center gap-2 bg-transparent text-slate-400 font-bold text-sm py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-center">
          Volver a Premios
        </button>
      </motion.div>

    </div>
  );
}
