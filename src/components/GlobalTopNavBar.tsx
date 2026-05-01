import { useAuth } from '../contexts/AuthContext';

export function GlobalTopNavBar({ onProfileClick, onNotificationsClick }: { onProfileClick: () => void, onNotificationsClick: () => void }) {
  const { user } = useAuth();
  
  return (
    <header className="fixed top-0 left-0 right-0 w-full lg:max-w-md lg:mx-auto z-[60] flex items-center justify-between px-6 h-16 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(25,204,240,0.1)]">
      <div className="flex items-center gap-2 cursor-pointer relative z-10" onClick={onProfileClick}>
        <div className="w-9 h-9 rounded-full border-2 border-cyan-400 overflow-hidden hover:scale-105 active:scale-95 transition-transform flex items-center justify-center bg-cyan-400/20 text-cyan-400">
          {user?.photoURL ? (
            <img 
              alt={user.displayName || "User"} 
              className="w-full h-full object-cover" 
              src={user.photoURL} 
            />
          ) : (
            <span className="material-symbols-outlined text-xl">person</span>
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 font-bold uppercase leading-none mb-0.5">Nivel 14</span>
          <span className="text-sm font-bold text-white leading-none truncate max-w-[80px]">
            {user?.displayName ? user.displayName.split(' ')[0] : 'Explorador'}
          </span>
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          alt="NUBO" 
          className="h-[42px] w-auto brightness-125 drop-shadow-[0_0_12px_rgba(67,221,226,0.6)] pointer-events-auto" 
          src="https://lh3.googleusercontent.com/aida/ADBb0ujTO8OICi5dMqeWK-37zXjL6hSeOTulMvdrsKKR7Lv7fW8urGGZFy4hjQBQCW-bmlF-CYsXf4_O0ItQhwdM0ywSYtBX5yEVQNUNfY7zklBeOOxLw8wupr-o3Lf0Tu0agaQ2x5MT0tuSqiWXrkyFx_1fTiP7FwYTZTQvEuhfXtzMzEUTd3gPkulOP1Uqig7ZqBm7WpZN61bKigv5Qlb8FelxgNmMRRBpoA_yOhpNjTokkypSLIClOBqbZJwyiUC0I94KaJ2gE92bjw" 
        />
      </div>
      
      <div className="flex items-center relative z-10">
        <button onClick={onNotificationsClick} className="material-symbols-outlined text-cyan-400 cursor-pointer hover:text-cyan-300 transition-colors flex items-center justify-center">notifications</button>
      </div>
    </header>
  );
}
