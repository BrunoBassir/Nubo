import { useState, useMemo, useEffect } from 'react';
import { Place } from './ExplorePlacesScreen';
import { PlaceDetailScreen } from './PlaceDetailScreen';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { samplePlaces } from '../lib/seedDatabase';

type DiscoveryCategory = 'Todos' | 'Gastronomía' | 'Cultura' | 'Hotelería';

export function DiscoveryScreen({ onHome, onExplore, onScan, onPrizes, onRanking, onValidate, onRouteClick }: { onHome?: () => void, onExplore?: () => void, onScan?: () => void, onPrizes?: () => void, onRanking?: () => void, onValidate?: () => void, onRouteClick?: () => void }) {
  const [activeCategory, setActiveCategory] = useState<DiscoveryCategory>('Todos');
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
  const [showDetailScreen, setShowDetailScreen] = useState<boolean>(false);
  const [placesData, setPlacesData] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'places'), (snapshot) => {
      const places: Place[] = snapshot.docs.map(doc => ({
        ...(doc.data() as Omit<Place, 'id'>),
        id: doc.id
      }));
      setPlacesData(places);
      if (places.length > 0 && !selectedPlaceId) {
        setSelectedPlaceId(places[0].id);
      }
      setLoading(false);
    }, (error) => {
       console.error("Error fetching places: ", error);
       setLoading(false);
    });

    return () => unsub();
  }, []);

  const displayPlaces = useMemo(() => {
    return placesData.length > 0 ? placesData : samplePlaces;
  }, [placesData]);

  const selectedPlace = useMemo(() => displayPlaces.find(p => p.id === selectedPlaceId) || displayPlaces[0], [displayPlaces, selectedPlaceId]);

  // Make deterministic coordinates based on string id length/chars so they are spread out
  const getCoordinates = (id: string, index: number) => {
     const positions = [
       { top: '48%', left: '62%' },
       { top: '38%', left: '22%' },
       { top: '30%', left: '75%' },
       { top: '65%', left: '50%' },
       { top: '55%', left: '30%' },
       { top: '25%', left: '40%' }
     ];
     return positions[index % positions.length];
  };

  const getIcon = (category: string) => {
     if (category === 'Gastronomía') return 'local_cafe';
     if (category === 'Cultura') return 'museum';
     if (category === 'Hospedaje') return 'hotel';
     return 'place';
  }

  const filteredPlaces = useMemo(() => {
    if (activeCategory === 'Todos') return displayPlaces;
    return displayPlaces.filter(p => p.category === activeCategory || (activeCategory === 'Gastronomía' && p.category === 'Bares'));
  }, [activeCategory, displayPlaces]);

  if (showDetailScreen && selectedPlace) {
    return <PlaceDetailScreen place={selectedPlace} onClose={() => setShowDetailScreen(false)} onValidate={onValidate} onRouteClick={onRouteClick} />;
  }

  // Removed early loading return
  // if (loading) {
  //    return <div className="bg-background-dark min-h-screen text-white flex items-center justify-center">Cargando mapa...</div>;
  // }

  return (
    <div className="bg-[#090f11] text-slate-100 font-sans antialiased overflow-hidden h-screen flex flex-col w-full lg:max-w-md lg:mx-auto relative">
      {/* Main Map Container */}
      <div className="relative flex-1 w-full overflow-hidden bg-[#090f11]">
        {/* Map Background */}
        <div className="absolute inset-0 z-0">
          <img alt="Dark cyber urban map" className="w-full h-full object-cover opacity-40 grayscale-[0.5] contrast-[1.3] brightness-[0.5] mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq55xngfWbP_Q-_69Y2Sn_7eAoXqoqnQmZMOQKgin-uOA-w06iyj-YSIAkEWmFAiQHnTRE3uD2NKnT-kICJ3_rhJ8dlaemjLAL8J9LhHJHxvAmOEdE64svJpIgjYZIsFRKshX5unz_IHDtVcyDJVRGitJwV4gP97O7Gjco-ogc2cSDPDs1qjN9DjURc9RrPgr6hwMbnUQcjWCF5PuU31WmeR-jCvrWNTwLh7shS2v_zc5KvFXtvfn1Wkala_nNbwDULlyVlpStP5I"/>
          <div className="absolute inset-0 bg-gradient-to-b from-[#090f11]/80 via-transparent to-[#090f11]/90"></div>
        </div>

        {/* Top Header & Filters */}
        <div className="absolute top-0 left-0 w-full z-20 px-5 pt-12 flex flex-col gap-4">
          <div className="bg-slate-950/60 backdrop-blur-xl border border-white/10 rounded-xl flex items-center px-4 h-14 shadow-2xl border-cyan-500/20">
            <span className="material-symbols-outlined text-[#19ccf0] mr-3 font-bold">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-white flex-1 placeholder:text-slate-600 font-medium text-base tracking-tight" placeholder="EXPLORAR CIUDAD..." type="text"/>
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10" onClick={onExplore}>
               <span className="material-symbols-outlined text-slate-400 text-xl cursor-pointer hover:text-white transition-colors">close</span>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto scroll-hide py-1">
            <button onClick={() => setActiveCategory('Todos')} className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap uppercase tracking-wider ${activeCategory === 'Todos' ? 'bg-[#19ccf0] text-background-dark shadow-[0_0_15px_rgba(25,204,240,0.5)]' : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10'}`}>Todos</button>
            <button onClick={() => setActiveCategory('Gastronomía')} className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap uppercase tracking-wider ${activeCategory === 'Gastronomía' ? 'bg-[#19ccf0] text-background-dark shadow-[0_0_15px_rgba(25,204,240,0.5)]' : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10'}`}>
              <span className="material-symbols-outlined text-lg">local_cafe</span> Cafés & Bares
            </button>
            <button onClick={() => setActiveCategory('Cultura')} className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap uppercase tracking-wider ${activeCategory === 'Cultura' ? 'bg-[#19ccf0] text-background-dark shadow-[0_0_15px_rgba(25,204,240,0.5)]' : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10'}`}>
              <span className="material-symbols-outlined text-lg">museum</span> Museos
            </button>
            <button onClick={() => setActiveCategory('Hotelería')} className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap uppercase tracking-wider ${activeCategory === 'Hotelería' ? 'bg-[#19ccf0] text-background-dark shadow-[0_0_15px_rgba(25,204,240,0.5)]' : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10'}`}>
              <span className="material-symbols-outlined text-lg">hotel</span> Hoteles
            </button>
          </div>
        </div>

        {/* Map Interaction Layer (Pins) */}
        <div className="absolute inset-0 z-10">
          {/* User Location */}
          <div className="absolute top-[65%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex items-center justify-center">
              <div className="absolute animate-pulse w-16 h-16 bg-[#19ccf0]/30 rounded-full"></div>
              <div className="relative w-5 h-5 bg-[#19ccf0] border-2 border-white rounded-full shadow-[0_0_15px_rgba(25,204,240,1)]"></div>
            </div>
          </div>

          {filteredPlaces.map((place, i) => {
            const coords = getCoordinates(place.id, i);
            const icon = getIcon(place.category);
            
            const isSelected = selectedPlaceId === place.id;
            
            return (
              <div 
                key={place.id}
                onClick={() => setSelectedPlaceId(place.id)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer ${isSelected ? 'z-20 drop-shadow-[0_0_10px_rgba(25,204,240,0.7)] scale-110' : 'z-10 opacity-70 hover:opacity-100 hover:scale-105'}`}
                style={{ top: coords.top, left: coords.left }}
              >
                <div className={`${isSelected ? 'bg-background-dark text-[#19ccf0] border-4 border-[#19ccf0] shadow-[0_0_20px_rgba(25,204,240,0.4)] w-14 h-14' : 'bg-[#19ccf0] text-background-dark w-10 h-10 border-2 border-[#19ccf0]/50'} rounded-xl flex items-center justify-center rotate-45`}>
                  <span className={`material-symbols-outlined -rotate-45 ${isSelected ? 'text-3xl font-black' : 'text-xl font-bold'}`}>{icon}</span>
                </div>
                {place.badge === "Popular" && !isSelected && (
                  <div className="absolute -top-1 -right-1 bg-white text-[#ff8a3d] text-[9px] font-black px-1.5 py-0.5 rounded-sm shadow-sm tracking-tighter">HOT</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Map Controls */}
        <div className="absolute right-5 bottom-[38%] z-20 flex flex-col gap-3">
          <button className="bg-slate-950/60 backdrop-blur-xl border border-white/10 w-12 h-12 rounded-xl flex items-center justify-center shadow-xl active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-[#19ccf0]">gps_fixed</span>
          </button>
          <button className="bg-slate-950/60 backdrop-blur-xl border border-white/10 w-12 h-12 rounded-xl flex items-center justify-center shadow-xl active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-white/70">layers</span>
          </button>
        </div>

        {/* Detail Card */}
        {selectedPlace && (
        <div className="absolute bottom-6 left-0 right-0 w-full z-30 px-5 flex justify-center mx-auto">
          <div className="w-full max-w-[380px] bg-slate-950/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden">
            <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mt-4 mb-2 cursor-pointer touch-none" onClick={() => setShowDetailScreen(true)}></div>
            <div className="px-6 pb-6 pt-2 flex flex-col gap-6">
              <div className="flex justify-between items-start" onClick={() => setShowDetailScreen(true)}>
                <div className="cursor-pointer">
                  <h2 className="text-2xl font-black text-white tracking-tight uppercase line-clamp-1">{selectedPlace.name}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-[#19ccf0]/10 text-[#19ccf0] text-[10px] font-bold px-2 py-1 rounded border border-[#19ccf0]/20 uppercase tracking-widest">{selectedPlace.distance} cerca</span>
                    <span className="text-slate-500 text-[11px] font-medium uppercase">{selectedPlace.isOpen ? 'Abierto' : 'Cerrado'}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <div className="flex items-center gap-1.5 bg-[#ff8a3d]/10 text-[#ff8a3d] border border-[#ff8a3d]/20 px-3 py-1.5 rounded-lg">
                    <span className="material-symbols-outlined text-sm fill-current">database</span>
                    <span className="text-xs font-black tracking-tighter">{selectedPlace.xpLevel || "+10 XP"}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={() => setShowDetailScreen(true)} className="flex-1 bg-[#19ccf0] text-background-dark font-black py-4 rounded-xl shadow-[0_0_20px_rgba(25,204,240,0.3)] flex items-center justify-center gap-3 active:scale-[0.97] hover:bg-[#19ccf0]/90 transition-all uppercase tracking-widest text-sm">
                  <span className="material-symbols-outlined font-bold text-[18px]">info</span>
                  Ver Detalles
                </button>
                <button className="w-[56px] h-[56px] shrink-0 bg-slate-950/60 hover:bg-slate-950 backdrop-blur-xl border border-white/10 text-[#19ccf0] rounded-xl flex items-center justify-center active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-2xl font-bold">directions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

