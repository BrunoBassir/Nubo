import { motion } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import { GlobalTopNavBar } from './GlobalTopNavBar';

export function RecentActivityScreen({ onBack, onLevelAchievedClick, onProfileClick, onNotificationsClick, onFullHistoryClick }: { onBack: () => void, onLevelAchievedClick?: () => void, onProfileClick?: () => void, onNotificationsClick?: () => void, onFullHistoryClick?: () => void }) {
  const { user } = useAuth();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <>
      <GlobalTopNavBar 
        onBack={onBack}
        onProfileClick={() => onProfileClick && onProfileClick()}
        onNotificationsClick={() => onNotificationsClick && onNotificationsClick()}
      />

      <main className="pt-24 px-6 max-w-2xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <motion.section variants={itemVariants} className="mb-section-gap">
            <div className="flex items-end justify-between mb-4">
              <div>
                <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-1">Actividad Reciente</span>
                <h2 className="font-display-xl text-display-xl text-on-background">Tu Progreso</h2>
              </div>
              <div className="text-right">
                <span className="font-stat-main text-stat-main text-secondary block">1,240 NP</span>
                <span className="font-label-caps text-label-caps text-outline uppercase">Saldo Total</span>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-card-padding flex items-center gap-element-gap neon-glow border-l-4 border-l-primary hover:scale-[1.02] transition-transform">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <p className="font-headline-md text-headline-md">¡Buen trabajo!</p>
                <p className="font-body-md text-body-md text-on-surface-variant">Has ganado +240 XP esta semana.</p>
              </div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-section-gap">
            <h3 className="font-label-caps text-label-caps text-outline mb-4 flex items-center gap-2">
              Hoy
              <span className="h-px flex-1 bg-white/10"></span>
            </h3>
            <div className="space-y-3">
              <motion.div whileHover={{ scale: 1.02, x: 5 }} className="glass-card rounded-xl p-4 flex items-center justify-between hover:bg-white/5 transition-all group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-headline-md text-[16px] text-on-surface">Check-in: Green Bowl</p>
                    <p className="text-xs text-outline font-label-caps">14:30 · Restaurante Saludable</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-stat-main text-stat-main text-primary">+80 XP</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, x: 5 }} className="glass-card rounded-xl p-4 flex items-center justify-between hover:bg-white/5 transition-all group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-secondary border border-secondary/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">coffee</span>
                  </div>
                  <div>
                    <p className="font-headline-md text-[16px] text-on-surface">Canje: Cafe Latte</p>
                    <p className="text-xs text-outline font-label-caps">09:15 · Urban Brew</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-stat-main text-stat-main text-error">-150 NP</span>
                </div>
              </motion.div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-section-gap">
            <h3 className="font-label-caps text-label-caps text-outline mb-4 flex items-center gap-2">
              Ayer
              <span className="h-px flex-1 bg-white/10"></span>
            </h3>
            <div className="space-y-3">
              <motion.div whileHover={{ scale: 1.02, x: 5 }} className="relative overflow-hidden glass-card rounded-xl p-5 flex items-center justify-between border-primary/30 bg-primary/5 neon-glow cursor-pointer hover:opacity-90 transition-opacity gap-2" onClick={onLevelAchievedClick}>
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <img alt="" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAk7YeIKDWHVdzqlyBbBffYf19BdhRSBMy0iwJJaMEiDYUeVj79W0TcKQObpWiC6jvyECZz38orTpQrwC_4QcZGl5EJwI_Vnnu0UCnrZtbmmlKokL1MQUF3zMMPEaWNs0gb12b_S7cOOlY9nCc4vcmcgO66JocBkElD1U9KzY9n50FN65a7qqSq0onRkp3cjdsfHz0JF_NifvocQuGgoUPvbGrhR5IwM81lv74Lx2CVe42aLksC4S6-2Qki41MoKoZphpp0ShuGu8"/>
                </div>
                <div className="flex items-center gap-4 relative z-10 min-w-0 flex-1">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-[0_0_15px_rgba(133,228,255,0.4)] shrink-0">
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-headline-md text-[16px] md:text-headline-md text-primary truncate">Nivel Alcanzado: Aventurero</p>
                    <p className="text-xs text-primary-fixed-dim font-label-caps truncate">¡Nuevos beneficios desbloqueados!</p>
                  </div>
                </div>
                <div className="text-right relative z-10 shrink-0">
                  <span className="font-label-caps text-[8px] bg-primary/20 text-primary px-2 py-1 rounded border border-primary/30 whitespace-nowrap">LEVEL UP</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02, x: 5 }} className="glass-card rounded-xl p-4 flex items-center justify-between hover:bg-white/5 transition-all group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">qr_code_2</span>
                  </div>
                  <div>
                    <p className="font-headline-md text-[16px] text-on-surface">Exploración: Mural Urbano</p>
                    <p className="text-xs text-outline font-label-caps">18:40 · Distrito Arte</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-stat-main text-stat-main text-primary">+25 XP</span>
                </div>
              </motion.div>
            </div>
          </motion.section>

          <motion.div variants={itemVariants} className="mt-8 flex justify-center">
            <button 
              onClick={onFullHistoryClick}
              className="font-label-caps text-label-caps text-primary border border-primary/30 px-6 py-3 rounded-full hover:bg-primary/10 transition-all uppercase tracking-[0.2em] active:scale-95"
            >
              Ver historial completo
            </button>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
