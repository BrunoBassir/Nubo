import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function PrizeFragmentsScreen({ onBack, onOpenVouchers }: { onBack: () => void, onOpenVouchers: () => void }) {
  const [stage, setStage] = useState<'explaining' | 'inserting' | 'forging' | 'revealed'>('explaining');

  const handleForge = () => {
    setStage('inserting');
    
    // Animate the core dropping in
    setTimeout(() => {
      setStage('forging');
      // After intense spinning, reveal the prize
      setTimeout(() => {
        setStage('revealed');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-[#050B14] min-h-screen flex flex-col text-slate-100 relative overflow-hidden pb-32">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 w-full lg:max-w-md lg:mx-auto z-50 flex items-center justify-between px-6 h-16 bg-[#050B14]/80 backdrop-blur-md border-b border-white/5">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white">close</span>
        </button>
        <span className="font-bold text-sm tracking-widest uppercase text-white">Forja de Reliquias</span>
        <div className="w-10" />
      </header>

      <main className="flex-1 w-full px-6 pt-24 flex flex-col items-center justify-center relative">
        
        {/* Artifact Visual Container */}
        <div className="relative w-64 h-64 mb-16 flex items-center justify-center [perspective:1000px]">
            {/* Ambient glows behind the artifact */}
            <AnimatePresence>
                {stage === 'forging' && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1.5 }}
                        exit={{ opacity: 0, scale: 2 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute inset-0 bg-orange-500/20 blur-[50px] rounded-full z-0" 
                    />
                )}
                {stage === 'revealed' && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 2 }}
                        className="absolute inset-0 bg-fuchsia-500/30 blur-[60px] rounded-full z-0" 
                    />
                )}
            </AnimatePresence>

            {/* --- Astrolabe / Gyroscope Rings --- */}
            
            {/* Outer Ring - Fragment 1 */}
            <motion.div 
                animate={
                  stage === 'forging' ? { rotateX: 360, rotateZ: 360 } : 
                  stage === 'revealed' ? { scale: 0, opacity: 0 } : 
                  { rotateX: 65, rotateZ: 360 }
                }
                transition={{ duration: stage === 'forging' ? 1.5 : 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-56 h-56 rounded-full border-t-[3px] border-r-[3px] border-fuchsia-500 border-l-[3px] border-l-fuchsia-500/20 border-b-[3px] border-b-transparent shadow-[0_0_25px_rgba(217,70,239,0.4),inset_0_0_20px_rgba(217,70,239,0.2)] [transform-style:preserve-3d] z-10"
            >
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#f0abfc]" />
            </motion.div>

            {/* Middle Ring - Fragment 2 */}
            <motion.div 
                animate={
                  stage === 'forging' ? { rotateY: -360, rotateX: -180 } : 
                  stage === 'revealed' ? { scale: 0, opacity: 0 } : 
                  { rotateY: 65, rotateX: -360 }
                }
                transition={{ duration: stage === 'forging' ? 1 : 16, repeat: Infinity, ease: "linear" }}
                className="absolute w-44 h-44 rounded-full border-r-[3px] border-b-[3px] border-blue-400 border-t-[3px] border-t-blue-400/20 border-l-[3px] border-l-transparent shadow-[0_0_20px_rgba(96,165,250,0.4),inset_0_0_20px_rgba(96,165,250,0.2)] [transform-style:preserve-3d] z-10"
            >
                <div className="absolute bottom-0 right-1/2 w-3 h-3 bg-white rounded-full translate-x-1/2 translate-y-1/2 shadow-[0_0_15px_#93c5fd]" />
            </motion.div>

            {/* Inner Ring - Fragment 3 */}
            <motion.div 
                animate={
                  stage === 'forging' ? { rotateX: 180, rotateY: 360, rotateZ: 360 } : 
                  stage === 'revealed' ? { scale: 0, opacity: 0 } : 
                  { rotateX: 45, rotateY: 45, rotateZ: 360 }
                }
                transition={{ duration: stage === 'forging' ? 0.8 : 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 rounded-full border-b-[3px] border-l-[3px] border-emerald-400 border-r-[3px] border-r-emerald-400/20 border-t-[3px] border-t-transparent shadow-[0_0_20px_rgba(52,211,153,0.4),inset_0_0_15px_rgba(52,211,153,0.2)] [transform-style:preserve-3d] z-10"
            >
                <div className="absolute top-1/2 left-0 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#6ee7b7]" />
            </motion.div>

            {/* Center Core Slot */}
            <div className="absolute w-12 h-12 rounded-full border-2 border-orange-500/20 bg-orange-500/5 [transform-style:preserve-3d] flex items-center justify-center z-0">
               {stage === 'explaining' && (
                 <motion.div animate={{ rotate: 180 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                   <span className="material-symbols-outlined text-orange-500/40" style={{ fontVariationSettings: "'FILL' 1" }}>blur_on</span>
                 </motion.div>
               )}
            </div>

            {/* The Missing Core - Fragment 4 */}
            <AnimatePresence>
                {(stage === 'inserting' || stage === 'forging') && (
                    <motion.div 
                        initial={{ opacity: 0, y: -250, scale: 0.1, rotateZ: -180 }}
                        animate={
                            stage === 'inserting' ? { opacity: 1, y: 0, scale: 1, rotateZ: 0 } :
                            { opacity: [1, 1, 0], scale: [1, 1.2, 5], filter: ['brightness(1)', 'brightness(2)', 'brightness(5)'] }
                        }
                        transition={{ 
                            duration: stage === 'inserting' ? 1.5 : 3,
                            type: stage === 'inserting' ? 'spring' : 'tween',
                            bounce: 0.5
                        }}
                        className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-red-600 shadow-[0_0_60px_rgba(249,115,22,0.8)] z-20 flex items-center justify-center overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/30 blur-sm animate-pulse" />
                        <div className="w-6 h-6 bg-white rounded-full blur-[2px] shadow-[0_0_10px_white]" />
                        <motion.div
                           animate={{ scale: [1, 1.3, 1] }}
                           transition={{ duration: 0.4, repeat: Infinity }}
                           className="absolute inset-0 border-2 border-white rounded-full opacity-60"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Shockwaves effect during forging */}
            <AnimatePresence>
                {stage === 'forging' && (
                    <>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: [0, 1, 0], scale: [0, 4, 8] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.5, ease: 'easeOut' }}
                        className="absolute w-20 h-20 rounded-full border-4 border-orange-400/50 z-30"
                    />
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: [0, 0.8, 0], scale: [0, 3, 6] }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'easeOut' }}
                        className="absolute w-20 h-20 rounded-full border-2 border-fuchsia-400/50 z-30"
                    />
                    </>
                )}
            </AnimatePresence>

            {/* Revealed Prize Animation */}
            <AnimatePresence>
                {stage === 'revealed' && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
                    >
                         <div className="bg-gradient-to-b from-fuchsia-950 to-slate-950 p-1 rounded-3xl border border-fuchsia-500/50 shadow-[0_0_60px_rgba(217,70,239,0.3)] w-72 text-center pointer-events-auto relative overflow-hidden">
                           
                           {/* Sparkle effects */}
                           <div className="absolute -top-10 -right-10 w-32 h-32 bg-fuchsia-500/40 blur-[30px] rounded-full mix-blend-screen" />
                           <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-500/30 blur-[30px] rounded-full mix-blend-screen" />

                           <img 
                              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                              alt="Prize" 
                              className="w-full h-44 object-cover rounded-t-[1.35rem] opacity-90 border-b border-fuchsia-500/20"
                           />
                           <div className="p-6 relative z-10">
                            <h2 className="text-fuchsia-300 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Item Legendario</h2>
                            <h3 className="text-white text-2xl font-display font-black leading-tight mb-6">Pase Vitalicio <br/><span className="text-fuchsia-400">Fiestas Bresh</span></h3>
                            <button onClick={onOpenVouchers} className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white font-black uppercase tracking-widest text-[11px] py-4 rounded-xl shadow-[0_4px_20px_rgba(217,70,239,0.4)] hover:scale-105 hover:from-fuchsia-500 hover:to-purple-500 active:scale-95 transition-all">
                                Reclamar Voucher
                            </button>
                           </div>
                         </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>

        {/* Info Text & Action */}
        <AnimatePresence mode="wait">
            {stage === 'explaining' && (
                <motion.div 
                    key="explaining"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center w-full max-w-sm"
                >
                    <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-gradient-to-r from-fuchsia-500/10 to-orange-500/10 border border-fuchsia-500/20 rounded-full mb-6">
                        <span className="material-symbols-outlined text-[16px] text-fuchsia-400">explore</span>
                        <span className="text-xs font-bold text-fuchsia-100 uppercase tracking-widest">3 de 4 Componentes</span>
                    </div>

                    <h1 className="text-3xl lg:text-4xl font-display font-black text-white mb-4 leading-tight">
                        Armá la <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-orange-400">Astro-Reliquia</span>
                    </h1>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 px-2">
                        Los premios legendarios son tan exclusivos que están protegidos por astrolabios de energía. <br/><br/>
                        <strong className="text-white font-medium">¡Encontraste el núcleo que faltaba para activarla!</strong>
                    </p>

                    <button 
                        onClick={handleForge}
                        className="w-full relative overflow-hidden group bg-slate-900 border border-fuchsia-500/40 text-fuchsia-300 font-black uppercase tracking-widest text-sm py-5 rounded-2xl transition-all hover:border-fuchsia-400/80 hover:shadow-[0_0_30px_rgba(217,70,239,0.2)] active:scale-95 shadow-xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/20 to-fuchsia-500/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-lg">bolt</span>
                            Sincronizar Núcleo Radial
                        </span>
                    </button>
                </motion.div>
            )}

            {stage === 'inserting' && (
                <motion.div 
                    key="inserting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                >
                    <h2 className="text-xl font-display font-black text-fuchsia-400 animate-pulse">Alineando componentes...</h2>
                </motion.div>
            )}

            {stage === 'forging' && (
                <motion.div 
                    key="forging"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                >
                    <h2 className="text-2xl font-display font-black text-white tracking-[0.2em] uppercase blur-[1px] animate-pulse">Sobrecarga de Energía...</h2>
                </motion.div>
            )}
        </AnimatePresence>

      </main>
    </div>
  );
}
