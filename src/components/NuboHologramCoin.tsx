import { motion } from 'motion/react';

export function NuboHologramCoin({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ perspective: '1000px' }}>
      <motion.div
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <img 
          alt="NUBO Hologram"
          className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(25,204,240,0.8)] brightness-150"
          src="/nubo-logo.png"
        />
        {/* Holographic specular shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent mix-blend-overlay rounded-full blur-[2px]"></div>
      </motion.div>
    </div>
  );
}
