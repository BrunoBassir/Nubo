import { useAuth } from '../contexts/AuthContext';
import { useGlobalCity } from '../contexts/CityContext';
import { useState } from 'react';

export function GlobalTopNavBar({ onProfileClick, onNotificationsClick }: { onProfileClick: () => void, onNotificationsClick: () => void }) {
  const { user } = useAuth();
  const { selectedGlobalCity, setSelectedGlobalCity, availableCities } = useGlobalCity();
  const [showCityMenu, setShowCityMenu] = useState(false);
  
  return (
    <>
    <header className="fixed top-0 left-0 right-0 w-full lg:max-w-md lg:mx-auto z-[60] flex items-center justify-between px-6 h-16 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(25,204,240,0.1)]">
      <div className="flex items-center gap-2 cursor-pointer relative z-10" onClick={onProfileClick}>
        <div className="w-9 h-9 rounded-full border-2 border-cyan-400 overflow-hidden hover:scale-105 active:scale-95 transition-transform flex items-center justify-center bg-cyan-400/20 text-cyan-400">
          {user ? (
            <img 
              alt={user.displayName || "User"} 
              className="w-full h-full object-cover" 
              src={user.photoURL || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"} 
            />
          ) : (
            <span className="material-symbols-outlined text-xl">person</span>
          )}
        </div>
      </div>
      
      {/* Central City Selector */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <button 
          onClick={() => setShowCityMenu(true)}
          className="pointer-events-auto flex items-center gap-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-3 py-1.5 transition-all cursor-pointer backdrop-blur-md hover:border-cyan-500/30"
        >
          <span className="material-symbols-outlined text-[12px] text-cyan-400">location_on</span>
          <span className="text-[11px] font-bold text-slate-200 uppercase tracking-widest leading-none">{selectedGlobalCity}</span>
          <span className="material-symbols-outlined text-[14px] text-slate-400">expand_more</span>
        </button>
      </div>
      
      <div className="flex items-center gap-3 relative z-10">
        <button onClick={onNotificationsClick} className="cursor-pointer hover:scale-105 active:scale-95 transition-transform flex items-center justify-center">
          <img 
            alt="Notificaciones Nubo" 
            className="h-[40px] w-auto brightness-125 drop-shadow-[0_0_8px_rgba(67,221,226,0.6)]" 
            src="https://lh3.googleusercontent.com/aida/ADBb0ujTO8OICi5dMqeWK-37zXjL6hSeOTulMvdrsKKR7Lv7fW8urGGZFy4hjQBQCW-bmlF-CYsXf4_O0ItQhwdM0ywSYtBX5yEVQNUNfY7zklBeOOxLw8wupr-o3Lf0Tu0agaQ2x5MT0tuSqiWXrkyFx_1fTiP7FwYTZTQvEuhfXtzMzEUTd3gPkulOP1Uqig7ZqBm7WpZN61bKigv5Qlb8FelxgNmMRRBpoA_yOhpNjTokkypSLIClOBqbZJwyiUC0I94KaJ2gE92bjw" 
          />
        </button>
      </div>
    </header>

    {/* City Selection Modal */}
    {showCityMenu && (
      <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm lg:max-w-md lg:mx-auto">
        <div 
          className="absolute inset-0" 
          onClick={() => setShowCityMenu(false)}
        />
        <div className="w-full sm:w-[90%] bg-slate-900 border border-white/10 sm:rounded-2xl rounded-t-2xl overflow-hidden relative z-10 animate-slide-up sm:animate-fade-in shadow-2xl">
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-slate-800/50">
            <div>
              <h3 className="text-white font-display font-bold text-lg leading-tight">Ubicación Nubo</h3>
              <p className="text-slate-400 text-xs">Ajusta tu ciudad para explorar y canjear premios</p>
            </div>
            <button 
              onClick={() => setShowCityMenu(false)}
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
          <div className="p-2 max-h-[60vh] overflow-y-auto">
            {availableCities.map(city => (
              <button
                key={city}
                onClick={() => {
                  setSelectedGlobalCity(city);
                  setShowCityMenu(false);
                }}
                className={`w-full flex items-center justify-between p-4 rounded-xl mb-1 transition-colors ${selectedGlobalCity === city ? 'bg-cyan-500/10 border border-cyan-500/30' : 'hover:bg-white/5 border border-transparent'}`}
                disabled={city !== 'Rosario'}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${selectedGlobalCity === city ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-500'}`}>
                    <span className="material-symbols-outlined">{city !== 'Rosario' ? 'lock' : 'location_city'}</span>
                  </div>
                  <div className="text-left">
                    <p className={`font-bold ${selectedGlobalCity === city ? 'text-cyan-400' : city !== 'Rosario' ? 'text-slate-500' : 'text-white'}`}>{city}</p>
                    {city !== 'Rosario' && <p className="text-[10px] text-slate-500 mt-0.5 uppercase tracking-widest">Próximamente</p>}
                  </div>
                </div>
                {selectedGlobalCity === city && (
                  <span className="material-symbols-outlined text-cyan-400">check</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    )}
    </>
  );
}
