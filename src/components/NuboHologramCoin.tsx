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
          src="https://lh3.googleusercontent.com/aida/ADBb0ujTO8OICi5dMqeWK-37zXjL6hSeOTulMvdrsKKR7Lv7fW8urGGZFy4hjQBQCW-bmlF-CYsXf4_O0ItQhwdM0ywSYtBX5yEVQNUNfY7zklBeOOxLw8wupr-o3Lf0Tu0agaQ2x5MT0tuSqiWXrkyFx_1fTiP7FwYTZTQvEuhfXtzMzEUTd3gPkulOP1Uqig7ZqBm7WpZN61bKigv5Qlb8FelxgNmMRRBpoA_yOhpNjTokkypSLIClOBqbZJwyiUC0I94KaJ2gE92bjw"
        />
        {/* Holographic specular shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent mix-blend-overlay rounded-full blur-[2px]"></div>
      </motion.div>
    </div>
  );
}
