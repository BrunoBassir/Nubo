import { useState } from 'react';
import { ShareSheet } from './ShareSheet';
import { useAuth } from '../contexts/AuthContext';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';

export function ProfileScreen({ onEditProfile, onSettingsClick, onInviteFriendsClick, onViewAllAchievements, onPassportClick, onDnaClick, onCompanionClick }: { onEditProfile: () => void, onSettingsClick?: () => void, onInviteFriendsClick?: () => void, onViewAllAchievements?: () => void, onPassportClick?: () => void, onDnaClick?: () => void, onCompanionClick?: () => void }) {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const { user, loading } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const mockUser = {
    displayName: 'Marcos Urrestarazu',
    photoURL: 'https://i.pravatar.cc/150?img=33',
    email: 'explorador@nubo.app',
    level: 14,
    points: '12.4k',
    visits: 48,
    referrals: 12
  };

  const activeUser = user || mockUser;

  return (
    <>
      {isShareOpen && <ShareSheet onClose={() => setIsShareOpen(false)} title="Compartir Perfil" text="¡Mira mi perfil en Nubo!" url="https://nubo.app/u/marcosur" />}
      
      <main className="flex-1 overflow-y-auto pt-2">
        <div className="flex items-center justify-between px-6 py-2 relative w-full">
          <button onClick={onSettingsClick} className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-dark border border-white/10 hover:bg-slate-800 transition-colors z-10">
            <span className="material-symbols-outlined text-[20px]">settings</span>
          </button>
          {!user && (
             <button 
               onClick={handleGoogleSignIn}
               className="bg-primary/20 text-primary border border-primary/30 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider hover:bg-primary/30 transition-all active:scale-95 z-10"
             >
               Iniciar Sesión
             </button>
          )}
          <button onClick={() => setIsShareOpen(true)} className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-dark border border-white/10 hover:bg-slate-800 transition-colors z-10">
            <span className="material-symbols-outlined text-[20px]">share</span>
          </button>
        </div>

        {/* Profile Hero Section */}
        <section className="flex flex-col items-center px-6 pt-0 pb-8">
          <div className="relative flex items-center justify-center w-44 h-44">
            {/* Circular Progress Ring */}
            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
              <circle className="text-slate-800" cx="50" cy="50" fill="transparent" r="44" stroke="currentColor" strokeWidth="4"></circle>
              <circle className="text-primary progress-ring" cx="50" cy="50" fill="transparent" r="44" stroke="currentColor" strokeDasharray="276.46" strokeDashoffset="69.11" strokeLinecap="round" strokeWidth="4"></circle>
            </svg>
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background-dark shadow-xl bg-slate-800 flex items-center justify-center">
              {activeUser.photoURL ? (
                <img alt="Avatar de usuario" className="w-full h-full object-cover" src={activeUser.photoURL}/>
              ) : (
                <span className="material-symbols-outlined text-[64px] text-slate-500">person</span>
              )}
            </div>
            {/* Badge Overlay */}
            <div className="absolute -bottom-1 bg-primary text-background-dark px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-lg shadow-primary/20">
              Trotamundos
            </div>
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight">{activeUser.displayName}</h2>
            <p className="text-primary font-medium mt-1">Próximo Nivel: Leyenda Urbana</p>
            <div className="mt-6 flex gap-3">
              <button 
                onClick={onEditProfile}
                className="bg-primary text-background-dark px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-transform"
              >
                Editar Perfil
              </button>
              <button onClick={onInviteFriendsClick} className="bg-slate-800 text-slate-100 px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-transform border border-slate-700">
                Invitar Amigos
              </button>
            </div>
          </div>
        </section>
        
        {/* Stats Grid */}
        <section className="px-6 grid grid-cols-2 gap-3 mt-6">
          <div onClick={onPassportClick} className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 group">
            <span className="material-symbols-outlined text-3xl text-primary mb-2 group-hover:scale-110 transition-transform">airplane_ticket</span>
            <span className="text-sm font-bold tracking-tight text-white">Mi Pasaporte</span>
          </div>
          <div onClick={onViewAllAchievements} className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 group border-secondary/20 bg-secondary/5">
            <span className="material-symbols-outlined text-3xl text-secondary mb-2 group-hover:scale-110 transition-transform">emoji_events</span>
            <span className="text-sm font-bold tracking-tight text-white">Mis Logros</span>
          </div>
        </section>
        
        {/* DNA Banner */}
        <section className="px-6 mt-4">
          <div onClick={onDnaClick} className="w-full relative rounded-2xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-transform active:scale-95 shadow-xl border border-fuchsia-400/30 mb-4">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-fuchsia-600/80 -z-10"></div>
            {/* Animated mesh/glow */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay"></div>
            
            <div className="p-5 flex items-center justify-between z-10 relative">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80 mb-1">Descubrí tu</span>
                <span className="font-display font-black text-2xl text-white drop-shadow-md leading-none">ADN Nubo</span>
                <span className="text-xs font-semibold text-white/90 mt-2">¿Qué tipo de explorador sos?</span>
              </div>
              
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                <span className="material-symbols-outlined text-4xl text-white drop-shadow-lg">fingerprint</span>
              </div>
            </div>
          </div>
          
          {/* Holographic Companion Banner */}
          <div onClick={onCompanionClick} className="w-full relative rounded-2xl overflow-hidden cursor-pointer group hover:scale-[1.02] transition-transform active:scale-95 shadow-xl bg-gradient-to-r from-cyan-900 to-[#050B14] border border-cyan-500/30">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(25,204,240,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(25,204,240,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            <div className="p-5 flex items-center justify-between z-10 relative">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-1 flex items-center gap-1">
                   <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span> Sistema IA Activo
                </span>
                <span className="font-display font-black text-2xl text-white drop-shadow-md leading-none">NEXUS v1.2</span>
                <span className="text-xs font-semibold text-cyan-100/70 mt-2">Tu compañero de exploración</span>
              </div>
              
              <div className="w-16 h-16 relative flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="absolute inset-0 border border-cyan-400/50 rounded-lg rotate-45 shadow-[0_0_15px_rgba(25,204,240,0.4)]"></div>
                <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#fff,0_0_20px_#22d3ee] animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Summary Panel */}
        <section className="px-6 mt-4">
          <div className="glass-card p-4 rounded-xl grid grid-cols-3 divide-x divide-white/10">
            <div className="flex flex-col items-center text-center px-2">
              <span className="text-xl font-bold tracking-tight">12.4k</span>
              <span className="text-[9px] uppercase tracking-widest text-slate-500 mt-1 font-semibold leading-none">Puntos Totales</span>
            </div>
            <div className="flex flex-col items-center text-center px-2">
              <span className="text-xl font-bold tracking-tight text-primary drop-shadow-[0_0_8px_rgba(25,204,240,0.5)]">48</span>
              <span className="text-[9px] uppercase tracking-widest text-primary mt-1 font-bold leading-none">Visitas</span>
            </div>
            <div className="flex flex-col items-center text-center px-2">
              <span className="text-xl font-bold tracking-tight">12</span>
              <span className="text-[9px] uppercase tracking-widest text-slate-500 mt-1 font-semibold leading-none">Referidos</span>
            </div>
          </div>
        </section>
        
        {/* Achievements Horizontal Rail */}
        <section className="mt-10">
          <div className="px-6 flex justify-between items-end mb-4">
            <h3 className="text-xl font-bold tracking-tight">Logros Recientes</h3>
            <button onClick={onViewAllAchievements} className="text-primary text-sm font-medium">Ver todos</button>
          </div>
          <div className="flex gap-4 overflow-x-auto px-6 pb-2 hide-scrollbar">
            <div className="flex-none w-28 h-36 glass-card rounded-2xl flex flex-col items-center justify-center p-3 text-center border-t-primary/40">
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-primary text-3xl">nightlight</span>
              </div>
              <p className="text-xs font-bold leading-tight">Explorador Nocturno</p>
            </div>
            <div className="flex-none w-28 h-36 glass-card rounded-2xl flex flex-col items-center justify-center p-3 text-center border-t-amber-400/40">
              <div className="w-14 h-14 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-amber-400 text-3xl">coffee</span>
              </div>
              <p className="text-xs font-bold leading-tight">Café Lover</p>
            </div>
            <div className="flex-none w-28 h-36 glass-card rounded-2xl flex flex-col items-center justify-center p-3 text-center border-t-emerald-400/40">
              <div className="w-14 h-14 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-emerald-400 text-3xl">park</span>
              </div>
              <p className="text-xs font-bold leading-tight">Fanático Urbano</p>
            </div>
            <div className="flex-none w-28 h-36 glass-card rounded-2xl flex flex-col items-center justify-center p-3 text-center border-t-purple-400/40">
              <div className="w-14 h-14 rounded-full bg-purple-400/10 border border-purple-400/20 flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-purple-400 text-3xl">museum</span>
              </div>
              <p className="text-xs font-bold leading-tight">Cultura Viva</p>
            </div>
          </div>
        </section>
        
        {/* Activity Feed */}
        <section className="mt-10 px-6">
          <h3 className="text-xl font-bold tracking-tight mb-4">Actividad Reciente</h3>
          <div className="space-y-3">
            <div className="glass-card p-4 rounded-2xl flex items-center justify-between transition-all duration-300 hover:bg-slate-800/80 hover:border-slate-600 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">local_cafe</span>
                </div>
                <div>
                  <p className="font-bold text-sm group-hover:text-primary transition-colors">Visitaste Café Central</p>
                  <p className="text-xs text-slate-500">Hace 2 horas • Palermo</p>
                </div>
              </div>
              <span className="text-primary font-bold text-sm group-hover:scale-110 transition-transform">+50 pts</span>
            </div>
            <div className="glass-card p-4 rounded-2xl flex items-center justify-between transition-all duration-300 hover:bg-slate-800/80 hover:border-slate-600 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">theater_comedy</span>
                </div>
                <div>
                  <p className="font-bold text-sm group-hover:text-primary transition-colors">Museo de Arte Moderno</p>
                  <p className="text-xs text-slate-500">Ayer • San Telmo</p>
                </div>
              </div>
              <span className="text-primary font-bold text-sm group-hover:scale-110 transition-transform">+120 pts</span>
            </div>
            <div className="glass-card p-4 rounded-2xl flex items-center justify-between opacity-70 transition-all duration-300 hover:opacity-100 hover:bg-slate-800/80 hover:border-slate-600 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">person_add</span>
                </div>
                <div>
                  <p className="font-bold text-sm group-hover:text-primary transition-colors">Invitación aceptada: Lucas</p>
                  <p className="text-xs text-slate-500">24 de Mayo</p>
                </div>
              </div>
              <span className="text-primary font-bold text-sm group-hover:scale-110 transition-transform">+250 pts</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
