import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function MysteryChestScreen({ onBack, onOpen }: { onBack: () => void, onOpen: () => void }) {
  const [stage, setStage] = useState<'idle' | 'opening' | 'opened'>('idle');
  const [prize, setPrize] = useState<{ title: string, subtitle: string, icon: string, isWinner: boolean } | null>(null);

  const possiblePrizes = [
    { title: "¡Ganaste un Viaje!", subtitle: "Estadía 5 Estrellas en Costa Nubo", icon: "flight_takeoff", isWinner: true },
    { title: "¡Suerte para la próxima!", subtitle: "Seguí participando", icon: "sentiment_dissatisfied", isWinner: false },
    { title: "¡Café Gratis!", subtitle: "Válido en cualquier sucursal", icon: "local_cafe", isWinner: true },
    { title: "Casi lo logras", subtitle: "Pero al menos te llevás 50 XP", icon: "stars", isWinner: false },
    { title: "Pase VIP", subtitle: "Acceso exclusivo por 1 mes", icon: "workspace_premium", isWinner: true }
  ];

  const handleOpen = () => {
    setStage('opening');
    // Randomize prize
    const randomPrize = possiblePrizes[Math.floor(Math.random() * possiblePrizes.length)];
    setPrize(randomPrize);

    setTimeout(() => {
      setStage('opened');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[150] bg-background-dark/95 backdrop-blur-xl flex flex-col items-center justify-center p-6 text-slate-100">
      <button onClick={onBack} className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
         <span className="material-symbols-outlined text-white">close</span>
      </button>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm relative">
         <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center mb-12"
         >
            <h1 className="text-3xl font-display font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Cofre Misterioso</h1>
            <p className="text-slate-400 mt-2 text-sm">Canjea 500 Pts por una recompensa sorpresa asegurada.</p>
         </motion.div>

         <div className="relative w-48 h-48 mb-12 flex justify-center items-center">
            {/* Background Glow */}
            <AnimatePresence>
               {stage !== 'opened' && (
                  <motion.div 
                     exit={{ opacity: 0, scale: 2 }}
                     className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full"
                  />
               )}
            </AnimatePresence>

            {/* The Chest */}
            <motion.div
               animate={{ 
                  y: stage === 'opening' ? [0, -20, 0, -10, 0] : 0, 
                  scale: stage === 'opened' ? 0 : 1,
                  rotate: stage === 'opening' ? [0, -5, 5, -5, 5, 0] : 0 
               }}
               transition={{ duration: stage === 'opening' ? 0.5 : 0.4, repeat: stage === 'opening' ? 3 : 0 }}
               className="relative z-10 w-full h-full flex flex-col items-center justify-center"
            >
               <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f381/512.gif" alt="Cofre Misterioso" className="w-[120%] h-[120%] object-contain drop-shadow-[0_0_40px_rgba(99,102,241,0.6)] mix-blend-screen mix-blend-normal" style={{ filter: 'drop-shadow(0 0 30px rgba(99,102,241,0.5))' }} />
            </motion.div>

            {/* Explosion flash */}
            <AnimatePresence>
               {stage === 'opened' && (
                  <motion.div
                     initial={{ scale: 0, opacity: 1 }}
                     animate={{ scale: 5, opacity: 0 }}
                     transition={{ duration: 0.8 }}
                     className="absolute inset-0 bg-indigo-400 rounded-full blur-xl z-20"
                  />
               )}
            </AnimatePresence>
         </div>

         {/* Prize Card Overlay */}
         <AnimatePresence>
            {stage === 'opened' && (
               <motion.div
                 initial={{ scale: 0.5, opacity: 0, y: 50 }}
                 animate={{ scale: 1, opacity: 1, y: 0 }}
                 transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                 className="absolute inset-0 z-[200] flex flex-col items-center justify-center py-6 w-full"
               >
                 <div className="bg-[#050B14] p-8 rounded-[2rem] border-2 border-indigo-400 shadow-[0_0_50px_rgba(99,102,241,0.4)] flex flex-col items-center text-center w-full relative overflow-hidden">
                   
                   {/* Background gradient & shine effect */}
                   <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 to-transparent" />
                   <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-white/0 via-indigo-400/20 to-white/0 w-[200%] h-[200%] -translate-x-[50%] -translate-y-[50%] animate-[spin_4s_linear_infinite] mix-blend-overlay" />

                   <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mb-6 border-2 border-indigo-300 relative z-10 shadow-[0_0_30px_rgba(99,102,241,0.8)]">
                      <span className="material-symbols-outlined text-4xl text-white drop-shadow-[0_0_10px_white]" style={{ fontVariationSettings: "'FILL' 1" }}>{prize?.icon || 'star'}</span>
                   </div>
                   <h2 className="text-indigo-300 text-[10px] font-black uppercase tracking-[0.2em] mb-3 relative z-10">{prize?.isWinner ? '¡Premio Legendario Mítico!' : 'Cofre Abierto'}</h2>
                   <h3 className="text-white text-3xl font-display font-black leading-tight mb-8 relative z-10 drop-shadow-lg">{prize?.title.split(' ').map((word, i) => i === 1 ? <span key={i} className="text-indigo-400"> {word} </span> : word + ' ')}<br/><span className="text-base font-sans font-medium text-slate-300">{prize?.subtitle}</span></h3>
                   
                   <button onClick={prize?.isWinner ? onOpen : onBack} className="w-full bg-white text-slate-900 font-black uppercase tracking-widest text-[11px] py-4 rounded-xl shadow-[0_4px_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95 transition-all relative z-10">
                      {prize?.isWinner ? 'Ir a Mis Vouchers' : 'Volver a intentar'}
                   </button>
                 </div>
               </motion.div>
            )}
         </AnimatePresence>

         <AnimatePresence>
            {stage === 'idle' && (
               <motion.button 
                  exit={{ opacity: 0, y: 20 }}
                  onClick={handleOpen}
                  className="w-full bg-gradient-to-r from-indigo-600 to-primary text-white font-bold uppercase tracking-widest text-xs py-4 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
               >
                  <span className="material-symbols-outlined text-sm">lock_open</span>
                  Abrir por 500 Nubo Points
               </motion.button>
            )}
         </AnimatePresence>

         <AnimatePresence>
            {stage === 'opening' && (
               <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-indigo-400 font-bold uppercase tracking-widest text-xs animate-pulse"
               >
                  Desbloqueando...
               </motion.div>
            )}
         </AnimatePresence>

      </div>
    </div>
  );
}
