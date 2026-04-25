import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function ExplorerDnaScreen({ onBack }: { onBack: () => void }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // Max 20 deg tilt
      const y = (e.clientY / innerHeight - 0.5) * -20;
      setTilt({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-background-dark min-h-screen pb-32 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background-dark to-background-dark -z-10"></div>
      
      <header className="fixed top-0 left-0 right-0 w-full lg:max-w-md lg:mx-auto z-50 flex items-center justify-between px-6 h-16 bg-transparent">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md transition-colors border border-white/10">
          <span className="material-symbols-outlined text-white">arrow_back</span>
        </button>
      </header>

      <main className="w-full flex justify-center items-center px-6 mt-16 perspective-1000">
        <div className="flex flex-col items-center w-full max-w-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="mb-8 text-center"
          >
            <h1 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">Tu Arquetipo Actual</h1>
            <h2 className="font-display text-4xl font-black tracking-tight text-white drop-shadow-lg">El Nómada</h2>
            <p className="text-sm text-slate-400 mt-2 font-medium">Nunca repetís el mismo lugar dos veces.</p>
          </motion.div>

          {/* The Holographic Card */}
          <motion.div 
            className="w-full aspect-[2/3] rounded-3xl relative preserve-3d cursor-pointer group"
            animate={{ 
              rotateX: tilt.y, 
              rotateY: tilt.x
            }}
            style={{ 
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Card Background / Border */}
            <div className="absolute inset-0 rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900/80 to-slate-950/90 backdrop-blur-xl shadow-2xl overflow-hidden translate-z-0">
              
              {/* Holographic Reflection */}
              <div 
                className="absolute inset-0 opacity-30 mix-blend-color-dodge transition-transform duration-200"
                style={{
                  background: 'linear-gradient(125deg, #19ccf0 0%, #ff00ff 30%, #00ffff 70%, #19ccf0 100%)',
                  backgroundSize: '200% 200%',
                  transform: `translate(${tilt.x * 2}px, ${tilt.y * 2}px)`
                }}
              ></div>

              {/* Card Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-4xl text-primary drop-shadow-[0_0_15px_rgba(25,204,240,0.8)] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>explore</span>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block">Rareza</span>
                    <span className="text-xs font-black text-fuchsia-400 uppercase tracking-widest drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">Épico</span>
                  </div>
                </div>

                <div className="flex-1 flex justify-center items-center translate-z-50">
                  <div className="w-32 h-32 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center relative animate-[spin_20s_linear_infinite]">
                    <div className="absolute inset-1 rounded-full border-2 border-primary/20 animate-[spin_10s_linear_infinite_reverse]"></div>
                    <span className="material-symbols-outlined text-6xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse" style={{ animationDuration: '3s' }}>travel_explore</span>
                  </div>
                </div>

                <div className="translate-z-30">
                  <div className="w-full bg-black/40 rounded-xl p-4 border border-white/5 backdrop-blur-md">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-slate-400">Variedad de Lugares</span>
                      <span className="text-white font-bold">95%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[95%] shadow-[0_0_10px_rgba(25,204,240,0.8)]"></div>
                    </div>

                    <div className="flex justify-between text-xs mb-2 mt-4">
                      <span className="text-slate-400">Lealtad a un Spot</span>
                      <span className="text-white font-bold">12%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-fuchsia-500 w-[12%] shadow-[0_0_10px_rgba(255,0,255,0.8)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glossy Overlay strictly for lighting */}
            <div 
                className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-200 opacity-60 z-20"
                style={{
                  background: `radial-gradient(800px circle at ${50 + tilt.x * 2}% ${50 + tilt.y * 2}%, rgba(255,255,255,0.15), transparent 40%)`,
                }}
            ></div>
          </motion.div>

          <button className="mt-8 bg-white text-slate-900 font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            <span className="material-symbols-outlined text-lg">share</span>
            Compartir en Stories
          </button>
        </div>
      </main>
    </div>
  );
}
