import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function HolographicCompanionScreen({ onBack }: { onBack: () => void }) {
  const [synced, setSynced] = useState(false);
  const [level, setLevel] = useState(3);
  const [energy, setEnergy] = useState(65);

  const handleSync = () => {
    if (synced) return;
    setEnergy(100);
    setSynced(true);
    setTimeout(() => {
       setLevel(4);
    }, 1500);
  };

  return (
    <main className="flex-1 flex flex-col bg-[#050B14] relative overflow-hidden h-full">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(25,204,240,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(25,204,240,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [transform:perspective(1000px)_rotateX(60deg)_translateY(-100px)_translateZ(-200px)] opacity-40"></div>
      
      {/* Header */}
      <header className="flex items-center justify-between p-6 relative z-10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md">
          <span className="material-symbols-outlined text-white">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
            <span className="font-label-caps text-cyan-400 text-[10px]">ASISTENTE IA</span>
            <span className="font-black text-sm tracking-widest text-white">NEXUS v1.2</span>
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="material-symbols-outlined text-cyan-400">memory</span>
        </div>
      </header>

      {/* Hologram Display */}
      <div className="flex-1 flex flex-col items-center justify-end pb-10 relative z-10 perspective-1000">
          
          {/* Main Holographic Entity */}
          <div className="relative w-64 h-64 flex items-center justify-center mb-16">
              
              {/* Pedestal / Base */}
              <div className="absolute -bottom-8 w-48 h-12 rounded-[100%] bg-cyan-900/40 border border-cyan-400/30 blur-[2px] shadow-[0_0_30px_rgba(25,204,240,0.3)] flex items-center justify-center">
                 <div className="w-32 h-6 rounded-[100%] bg-cyan-400/20 border border-cyan-300/50 blur-[1px]"></div>
                 {/* Beam up */}
                 <div className="absolute bottom-6 w-32 h-64 bg-gradient-to-t from-cyan-500/20 to-transparent blur-md filter [clip-path:polygon(20%_100%,80%_100%,100%_0,0_0)]"></div>
              </div>

              {/* The Companion Form */}
              <motion.div 
                 animate={{ y: [-10, 10, -10], rotateY: 360 }}
                 transition={{ y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }, rotateY: { duration: 10, repeat: Infinity, ease: 'linear' } }}
                 className="relative w-32 h-32 transform-style-3d"
              >
                  {/* Core Outer Shell */}
                  <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/80 rotate-45 shadow-[0_0_20px_rgba(25,204,240,0.5),inset_0_0_20px_rgba(25,204,240,0.3)] bg-cyan-500/10 backdrop-blur-[2px]"></div>
                  
                  {/* Inner Core */}
                  <motion.div 
                     animate={{ rotateZ: -360, scale: synced ? [1, 1.2, 1] : 1 }}
                     transition={{ rotateZ: { duration: 8, repeat: Infinity, ease: 'linear' }, scale: { duration: 1, ease: 'easeInOut' } }}
                     className="absolute inset-4 rounded-full border-2 border-dashed border-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.5)] flex items-center justify-center"
                  >
                      {/* Neural Eye/Heart */}
                      <motion.div 
                          animate={{ scale: [0.8, 1, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                          className="w-6 h-6 bg-white rounded-full shadow-[0_0_20px_#fff,0_0_40px_#22d3ee]"
                      />
                  </motion.div>

                  {/* Scanlines Overlay for Hologram feel */}
                  <div className="absolute -inset-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50 mix-blend-overlay pointer-events-none rounded-full mask-image-radial filter blur-[0.5px]"></div>
              </motion.div>
          </div>

          {/* Dialogue Box */}
          <div className="mx-6 w-full max-w-sm mb-6">
              <div className="glass-card p-4 rounded-xl relative border-l-4 border-l-cyan-400">
                 <div className="absolute -top-3 left-6 border-8 border-transparent border-b-cyan-400/20"></div>
                 <p className="text-sm text-cyan-50 font-body-md typing-effect leading-relaxed">
                    {synced 
                      ? "¡Sincronización completada! Mis sistemas han subido de nivel. Mis escáneres detectan anomalías beneficiosas cerca."
                      : "Hola Explorador. Mis sensores indican que tu nivel de energía es adecuado. ¿Sincronizamos datos?"}
                 </p>
              </div>
          </div>

          {/* Stats & Actions Area */}
          <div className="w-full px-6 flex flex-col gap-4">
             {/* Stats Row */}
             <div className="grid grid-cols-2 gap-4">
                 <div className="glass-card p-4 rounded-2xl flex flex-col">
                    <span className="font-label-caps text-cyan-400 mb-1">COMPATIBILIDAD</span>
                    <span className="font-display font-black text-2xl text-white">Nvl. {level}</span>
                    <div className="w-full bg-slate-800 h-1.5 mt-2 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} animate={{ width: synced ? '15%' : '85%' }} transition={{ duration: 1 }} className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 h-full rounded-full"></motion.div>
                    </div>
                 </div>
                 <div className="glass-card p-4 rounded-2xl flex flex-col">
                    <span className="font-label-caps text-cyan-400 mb-1">ENERGÍA CENTRAL</span>
                    <span className="font-display font-black text-2xl text-white">{energy}%</span>
                    <span className="text-[10px] text-fuchsia-400 tracking-wider font-bold mt-1">+15% Multiplicador XP</span>
                 </div>
             </div>

             {/* Action Button */}
             <button 
                onClick={handleSync}
                disabled={synced}
                className={`w-full relative overflow-hidden group font-black uppercase tracking-widest text-sm py-4 rounded-2xl transition-all shadow-xl ${
                    synced 
                      ? 'bg-slate-800 border-2 border-slate-700 text-slate-500 cursor-not-allowed' 
                      : 'bg-cyan-950 border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-900 active:scale-95'
                }`}
             >
                {synced ? (
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined">check_circle</span> Datos Sincronizados
                    </span>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">sync</span> Sincronizar Datos (-500 Pts)
                        </span>
                    </>
                )}
             </button>
          </div>
      </div>
    </main>
  );
}
