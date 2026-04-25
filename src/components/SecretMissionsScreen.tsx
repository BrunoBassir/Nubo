import { useState } from 'react';
import { motion } from 'motion/react';

export function SecretMissionsScreen({ onBack }: { onBack: () => void }) {
  const [missions] = useState([
    {
      id: 1,
      title: "Cazador de Búhos",
      description: "Escaneá el código QR en cualquier bar adherido esta noche entre las 02:00 AM y 05:00 AM.",
      reward: "Bebida x2 + 500 XP",
      timeRemaining: "12:45:00",
      difficulty: "Difícil",
      icon: "nights_stay",
      color: "fuchsia"
    },
    {
      id: 2,
      title: "Ruta del Minimalismo",
      description: "Visitá 2 museos o galerías de arte diferentes antes del viernes.",
      reward: "Pase Libre Finde + 300 XP",
      timeRemaining: "48:22:15",
      difficulty: "Media",
      icon: "palette",
      color: "cyan"
    },
    {
      id: 3,
      title: "Early Bird",
      description: "Comprá un café antes de las 08:00 AM en el distrito financiero.",
      reward: "Desayuno Extra + 150 XP",
      timeRemaining: "14:10:05",
      difficulty: "Fácil",
      icon: "wb_twilight",
      color: "orange"
    }
  ]);

  return (
    <div className="bg-background-dark min-h-screen pb-32 flex flex-col items-center relative overflow-hidden">
      
      {/* Back Button */}
      <header className="fixed top-0 left-0 right-0 w-full lg:max-w-md lg:mx-auto z-50 flex items-center px-6 h-16 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white">arrow_back</span>
        </button>
        <span className="ml-4 font-display font-black text-white text-lg">Desafíos Secretos</span>
      </header>

      <main className="w-full px-6 pt-24 pb-8 perspective-1000">
        
        <div className="mb-8 p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center shrink-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
            <span className="material-symbols-outlined text-red-500 font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
          </div>
          <div>
             <h2 className="font-bold text-white mb-1">Desafíos Limitados</h2>
             <p className="text-xs text-slate-400">Estos desafíos son temporales y de alta dificultad. Si lográs completarlos ganarás recompensas únicas que no están en el mercado.</p>
          </div>
        </div>

        <div className="space-y-4">
          {missions.map((mission, i) => (
            <motion.div 
              key={mission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-5 border bg-slate-900/50 border-${mission.color}-500/20 hover:border-${mission.color}-500/50 transition-colors group relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${mission.color}-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-${mission.color}-500/10 transition-colors`}></div>
              
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={`w-10 h-10 rounded-xl bg-${mission.color}-500/20 text-${mission.color}-400 flex items-center justify-center`}>
                   <span className="material-symbols-outlined">{mission.icon}</span>
                </div>
                <div className="text-right">
                   <div className={`text-[10px] font-black uppercase tracking-widest text-${mission.color}-400 mb-1`}>{mission.difficulty}</div>
                   <div className="text-xs font-mono text-slate-300 flex items-center justify-end gap-1">
                      <span className="material-symbols-outlined text-[14px]">timer</span>
                      {mission.timeRemaining}
                   </div>
                </div>
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-2 relative z-10">{mission.title}</h3>
              <p className="text-sm text-slate-400 mb-6 relative z-10 hidden sm:block">{mission.description}</p>
              <p className="text-sm text-slate-400 mb-6 relative z-10 sm:hidden">{mission.description}</p>

              <div className="bg-black/40 rounded-xl p-3 border border-white/5 flex justify-between items-center relative z-10">
                 <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 block mb-0.5">Recompensa</span>
                    <span className="text-sm font-bold text-white">{mission.reward}</span>
                 </div>
                 <button className={`bg-${mission.color}-500/20 hover:bg-${mission.color}-500/30 text-${mission.color}-300 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-colors`}>
                    Aceptar
                 </button>
              </div>
            </motion.div>
          ))}
        </div>

      </main>
    </div>
  );
}
