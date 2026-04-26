import { useAuth } from '../contexts/AuthContext';

export function GlobalTopNavBar({ onProfileClick, onNotificationsClick }: { onProfileClick: () => void, onNotificationsClick: () => void }) {
  const { user } = useAuth();
  
  return (
    <header className="fixed top-0 left-0 right-0 w-full lg:max-w-md lg:mx-auto z-[60] flex items-center justify-between px-6 h-16 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(25,204,240,0.1)]">
      <div className="flex items-center gap-3 cursor-pointer relative z-10" onClick={onProfileClick}>
        <div className="w-10 h-10 rounded-full border-2 border-cyan-400 overflow-hidden hover:scale-105 active:scale-95 transition-transform flex items-center justify-center bg-cyan-400/20 text-cyan-400">
          {user?.photoURL ? (
            <img 
              alt={user.displayName || "User"} 
              className="w-full h-full object-cover" 
              src={user.photoURL} 
            />
          ) : (
            <span className="material-symbols-outlined text-2xl">person</span>
          )}
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-cyan-400 font-bold tracking-[0.2em] text-xl font-space-grotesk pointer-events-auto">NUBO</div>
      </div>
      
      <div className="flex items-center relative z-10">
        <button onClick={onNotificationsClick} className="material-symbols-outlined text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors flex items-center justify-center">notifications</button>
      </div>
    </header>
  );
}
