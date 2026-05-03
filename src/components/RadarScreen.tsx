import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function RadarScreen({ onBack }: { onBack: () => void }) {
  const [stage, setStage] = useState<'scanning' | 'found'>('scanning');
  const [blips, setBlips] = useState<{ id: number; x: number; y: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate random secret spots
    const newBlips = Array.from({ length: 3 }).map((_, i) => ({
      id: i,
      x: 15 + Math.random() * 70, // % position
      y: 15 + Math.random() * 70,
      delay: Math.random() * 2 // appearance delay
    }));
    
    setBlips(newBlips);

    const timer = setTimeout(() => {
      setStage('found');
    }, 4500); // 4.5s scanning phase

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#050B14] text-slate-100 flex flex-col items-center justify-center relative overflow-hidden font-display flex-1 w-full min-h-[100dvh]">
      
      {/* Back Button */}
      <header className="absolute top-0 left-0 right-0 w-full lg:max-w-md lg:mx-auto z-50 flex items-center px-6 h-16 bg-transparent">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md transition-colors border border-white/10">
          <span className="material-symbols-outlined text-white">close</span>
        </button>
      </header>

      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-24 z-10 text-center"
      >
        <h1 className="text-[10px] uppercase tracking-[0.3em] font-black text-primary mb-2">
          {stage === 'scanning' ? 'Escaneando sector...' : 'Análisis Completo'}
        </h1>
        <h2 className="text-3xl font-black text-white drop-shadow-[0_0_15px_rgba(25,204,240,0.5)]">
          {stage === 'scanning' ? 'Radar Nubo' : '3 Spots Ocultos'}
        </h2>
      </motion.div>

      {/* Radar UI */}
      <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
        
        {/* Outer Rings */}
        <div className="absolute inset-0 rounded-full border border-primary/20 bg-primary/5 shadow-[inset_0_0_50px_rgba(25,204,240,0.1)]"></div>
        <div className="absolute inset-8 rounded-full border border-primary/20"></div>
        <div className="absolute inset-16 rounded-full border border-primary/20"></div>
        <div className="absolute inset-24 rounded-full border border-primary/30 border-dashed"></div>
        
        {/* Crosshairs */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-[1px] bg-primary/20"></div>
          <div className="h-full w-[1px] bg-primary/20 absolute"></div>
        </div>

        {/* The Sweep */}
        <div 
          className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite]"
          style={{
            background: 'conic-gradient(from 0deg, transparent 70%, rgba(25,204,240,0.1) 90%, rgba(25,204,240,0.8) 100%)'
          }}
        >
           {/* Radar Laser Line */}
           <div className="absolute top-0 bottom-1/2 left-1/2 w-[2px] bg-primary shadow-[0_0_15px_rgba(25,204,240,1)] origin-bottom translate-x-[-50%]"></div>
        </div>

        {/* Center Pulse */}
        <div className="absolute w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(25,204,240,1)] flex items-center justify-center">
          <div className="w-full h-full bg-primary rounded-full animate-ping"></div>
        </div>

        {/* Enemy Blips */}
        <AnimatePresence>
          {blips.map((blip) => (
            <motion.div
              key={blip.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.5, 1], 
                opacity: stage === 'scanning' ? [0, 1, 0] : 1 
              }}
              transition={{ 
                delay: stage === 'scanning' ? blip.delay : 0, 
                duration: 1.5, 
                repeat: stage === 'scanning' ? Infinity : 0, 
                repeatDelay: 1.5 
              }}
              className="absolute w-3 h-3 bg-fuchsia-500 rounded-full shadow-[0_0_15px_rgba(255,0,255,1)]"
              style={{ left: `${blip.x}%`, top: `${blip.y}%` }}
            >
              {stage === 'found' && (
                <div className="absolute w-full h-full bg-fuchsia-500 rounded-full animate-ping opacity-50"></div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom Panel */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#050B14] via-[#050B14]/90 to-transparent transition-all duration-700 ${stage === 'found' ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <div className="glass-card rounded-2xl p-5 border border-fuchsia-500/30 bg-fuchsia-950/20 backdrop-blur-xl">
          <h3 className="text-lg font-bold text-white mb-1">Tesoro Encontrado</h3>
          <p className="text-xs text-slate-400 mb-4">El radar detectó 3 lugares secretos con multiplicador de X2 XP en tu zona por las próximas 2 horas.</p>
          <button className="w-full bg-primary text-slate-900 font-bold uppercase tracking-widest text-xs py-3 rounded-xl hover:shadow-[0_0_20px_rgba(25,204,240,0.4)] transition-all">
            Revelar Mapa
          </button>
        </div>
      </div>
      
    </div>
  );
}
