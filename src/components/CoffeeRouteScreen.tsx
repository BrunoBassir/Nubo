import { useState } from 'react';
import { PlaceDetailScreen } from './PlaceDetailScreen';
import { Place } from './ExplorePlacesScreen';

// Mock place for the "Localizar Parada" functionality
const mockCoffeePlace: Place = {
  id: 99,
  name: "Brew & Co.",
  distance: "2.5km",
  category: "Gastronomía",
  subcategory: "Especialidad",
  imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOWITQJuLdxyTP72LJJpubtpmEubO8P-MfSyBU39xkUTu34IYUiHp4YYyPWPEZjB3PcHccmZGzLo0hJoY0E5KTAzT1blpFnLqeuZPP-I9bB1ULl6UvpHU_qG-0J1XR-pCmJD8hNUwNCvL0T053pbrYQDORvbDPRG7x-_9bMDnHmcrRj1XfR14Dhh-3f2u-nlo8agJsXM6IyJAfkHOB77ok2b4KV3OnkcGuuNnnYO2bOUTeu1Cwo1d-yhy35aHtOrbrk0f3jTZaAo0",
  badge: "Posta 3 Desafío",
  badgeType: "featured",
  xpLevel: "+150 XP Bonus",
  nuboPoints: "10 NP",
  isOpen: true,
};

export function CoffeeRouteScreen({ onBack, onHome, onExplore, onScan, onPrizes, onRanking, onRouteMapClick }: { onBack: () => void, onHome?: () => void, onExplore?: () => void, onScan?: () => void, onPrizes?: () => void, onRanking?: () => void, onRouteMapClick?: () => void }) {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  if (selectedPlace) {
     return <PlaceDetailScreen place={selectedPlace} onClose={() => setSelectedPlace(null)} />;
  }

  return (
    <div className="bg-background-dark text-slate-100 min-h-screen flex flex-col w-full lg:max-w-md lg:mx-auto relative dark">
      {/* Header Image & NavBar */}
      <div className="relative h-72 rounded-b-[40px] overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsf34DnQ9u7xgCLyGvxgIZTZuAem_ohKUrK2nsZbcpBhy87PyaK1V0-I7wbnQ2w46iZSG1AysPNzElabkqLIcAzy12UqAtipN4pck2JFO_uFB0SmHKMH6rq_RSVxxuT1ovdGD2DkHdxo1kRV-qSSfeVjAcNkbzG1Yk34wyKDPWsNKXjyZ2j0B8vVA8P9uPe1JjHZ34XaanCzvsCFWe1k23n5wSSYZQCazbhT4DSqO0RbiNoPHf8MwxIKbH8oaUWO1tLsUJ4k-r58M')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Top bar */}
        <header className="absolute top-0 inset-x-0 z-50 px-4 h-16 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md text-white transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#00F2FF] text-sm">schedule</span>
            <span className="text-[10px] font-bold text-white tracking-widest uppercase">Expira en 2 días</span>
          </div>
        </header>

        {/* Challenge Header Info */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="bg-[#00F2FF] text-background-dark text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded inline-block mb-3 shadow-[0_0_10px_rgba(0,242,255,0.4)]">
            Desafío Activo
          </div>
          <h1 className="text-3xl font-black text-white leading-tight filter drop-shadow-md">Gastronómica Central</h1>
          <p className="text-slate-300 text-sm mt-1 font-medium filter drop-shadow">Visita 5 locales exclusivos para completar tu pasaporte y reclamar tu recompensa.</p>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto px-6 py-8 pb-32 space-y-8">
        
        {/* Progress Card */}
        <div className="glass-card p-5 rounded-3xl border border-white/10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-8xl">restaurant</span>
          </div>
          <div className="flex justify-between items-end mb-3">
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Progreso</p>
              <h2 className="text-2xl font-black text-[#00F2FF]">2 <span className="text-lg text-slate-500 font-medium">/ 5</span></h2>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-[#00F2FF] font-black uppercase tracking-widest mb-1">40% Completado</p>
            </div>
          </div>
          <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden shadow-inner mb-4">
            <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full shadow-[0_0_10px_rgba(0,242,255,0.5)]" style={{ width: '40%' }}></div>
          </div>
          <p className="text-xs text-slate-300">Te faltan 3 visitas para obtener la <strong className="text-white">Insignia Foodie</strong> y <strong className="text-[#00F2FF]">500 XP</strong>.</p>
        </div>

        {/* Checkpoints */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">flag</span>
              Checkpoints
            </h3>
            <button onClick={onRouteMapClick} className="text-xs font-bold text-[#00F2FF] bg-[#00F2FF]/10 px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-[#00F2FF]/20 transition-colors">
              <span className="material-symbols-outlined text-[14px]">explore</span>
              Mapa
            </button>
          </div>
          <div className="space-y-3">
            
            {/* Completed 1 */}
            <div className="bg-[#0D1619] border border-green-500/30 rounded-2xl p-4 flex items-center gap-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
              <div className="size-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
                <span className="material-symbols-outlined text-green-400">check_circle</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm text-white">Moka Lab Urban</h4>
                <p className="text-xs text-slate-400">Sarmiento 142</p>
              </div>
              <div className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">Hecho</div>
            </div>

            {/* Completed 2 */}
            <div className="bg-[#0D1619] border border-green-500/30 rounded-2xl p-4 flex items-center gap-4 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
              <div className="size-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
                <span className="material-symbols-outlined text-green-400">check_circle</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm text-white">Syphon Soul</h4>
                <p className="text-xs text-slate-400">Belgrano 983</p>
              </div>
              <div className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">Hecho</div>
            </div>

            {/* Pending 1 (Current action/locating) */}
            <div className="bg-white/5 border border-[#00F2FF]/30 rounded-2xl p-4 flex items-center gap-4 group hover:bg-white/10 transition-all">
              <div className="size-10 rounded-full bg-[#00F2FF]/10 flex items-center justify-center shrink-0 border border-[#00F2FF]/30 group-hover:border-[#00F2FF]/60 transition-colors">
                <span className="material-symbols-outlined text-[#00F2FF]">location_on</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm text-white">Brew & Co.</h4>
                <p className="text-xs text-[#00F2FF]">Recomendado ir ahora</p>
              </div>
              <button onClick={() => setSelectedPlace(mockCoffeePlace)} className="text-xs font-bold text-[#00F2FF] bg-[#00F2FF]/10 hover:bg-[#00F2FF]/20 transition-colors px-3 py-1.5 rounded-lg flex items-center gap-1">
                 Ver
              </button>
            </div>

            {/* Pending 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
              <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-white/5">
                <span className="material-symbols-outlined text-slate-500">radio_button_unchecked</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm text-white">Restaurante El Faro</h4>
                <p className="text-xs text-slate-400">Av. Libertador 440</p>
              </div>
            </div>

            {/* Pending 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
              <div className="size-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-white/5">
                <span className="material-symbols-outlined text-slate-500">radio_button_unchecked</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm text-white">Bistró Central</h4>
                <p className="text-xs text-slate-400">San Martín 210</p>
              </div>
            </div>

          </div>
        </section>

        {/* Benefits Box */}
        <section className="bg-accent/10 border border-accent/20 rounded-3xl p-5 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-10">
            <span className="material-symbols-outlined text-9xl text-accent">military_tech</span>
          </div>
          <h3 className="text-sm font-bold text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
            Recompensas al Completar
          </h3>
          <ul className="space-y-3 relative z-10">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-white bg-white/10 p-1.5 rounded-lg text-sm">stars</span>
              <span className="text-sm font-medium text-slate-200"><strong className="text-white">500 XP</strong> para tu nivel</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#00F2FF] bg-[#00F2FF]/10 p-1.5 rounded-lg text-sm">local_play</span>
              <span className="text-sm font-medium text-slate-200">1 Cupón de <strong className="text-[#00F2FF]">20% OFF</strong> en cena</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-yellow-400 bg-yellow-400/10 p-1.5 rounded-lg text-sm">workspace_premium</span>
              <span className="text-sm font-medium text-slate-200">Insignia exclusiva <strong className="text-yellow-400">Foodie Central</strong></span>
            </li>
          </ul>
        </section>

      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 lg:max-w-md lg:mx-auto">
        <button 
          onClick={onScan}
          className="bg-primary text-slate-950 font-bold text-sm px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(25,204,240,0.4)] flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined">qr_code_scanner</span>
          Validar Visita (QR)
        </button>
      </div>
    </div>
  );
}

