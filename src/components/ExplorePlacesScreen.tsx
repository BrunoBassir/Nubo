import { useState, useMemo, useEffect } from 'react';
import { PlaceDetailScreen } from './PlaceDetailScreen';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { samplePlaces } from '../lib/seedDatabase';

type PlaceCategory = 'Todo' | 'Gastronomía' | 'Hotelería' | 'Cultura' | 'Bares';

export type Place = {
  id: string;
  name: string;
  distance: string;
  category: string;
  subcategory: string;
  imageUrl: string;
  badge: string | null;
  badgeType: string | null;
  xpLevel: string | null;
  nuboPoints: string | null;
  isOpen: boolean;
  address?: string;
  phone?: string;
  website?: string;
  hours?: Record<string, string>;
  coordinates?: { lat: number; lng: number };
  nuboPromotion?: string;
  menuItems?: Array<{ title: string; description: string; price: string }>;
  amenities?: string[];
  exhibitions?: Array<{ title: string; description: string; endDate: string; room: string }>;
  spotGallery?: Array<{ imageUrl: string; userId: string; userName: string; xp: number }>;
  qrCode?: string;
};

export function ExplorePlacesScreen({ onBack, onPlaceDetailClick, onProfileClick, onNotificationsClick, onRouteClick }: { onBack?: () => void, onPlaceDetailClick?: () => void, onProfileClick?: () => void, onNotificationsClick?: () => void, onRouteClick?: () => void }) {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [activeCategory, setActiveCategory] = useState<PlaceCategory>('Todo');
  const [placesData, setPlacesData] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'places'), (snapshot) => {
      const places: Place[] = snapshot.docs.map(doc => ({
        ...(doc.data() as Omit<Place, 'id'>),
        id: doc.id
      }));
      setPlacesData(places);
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

  const filteredPlaces = useMemo(() => {
    if (activeCategory === 'Todo') {
      return displayPlaces.filter(p => !['place1'].includes(p.id)); // Keep Artisan out of the main list for 'Todo' as it's featured
    }
    return displayPlaces.filter(p => p.category === activeCategory);
  }, [activeCategory, displayPlaces]);

  const featuredPlace = useMemo(() => {
    return displayPlaces.find(p => p.id === 'place1') || displayPlaces[0];
  }, [displayPlaces]);

  const categories: PlaceCategory[] = ['Todo', 'Gastronomía', 'Hotelería', 'Cultura', 'Bares'];

  // Removed early return to show fallback data
  // if (loading) {
  //   return <div className="bg-background-dark min-h-screen text-white flex items-center justify-center">Cargando lugares...</div>;
  // }

  return (
    <div className="bg-background-dark text-slate-100 min-h-screen flex flex-col w-full lg:max-w-md lg:mx-auto relative">
      {selectedPlace && <PlaceDetailScreen place={selectedPlace} onClose={() => setSelectedPlace(null)} onValidate={onPlaceDetailClick} onRouteClick={onRouteClick} />}
      {/* TopAppBar */}
      <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/10 px-6 h-16 flex justify-between items-center shadow-lg shadow-cyan-900/20">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="material-symbols-outlined text-slate-400 hover:text-cyan-300 transition-colors">
            arrow_back
          </button>
          <div className="size-9 rounded-full overflow-hidden border border-cyan-500/30 cursor-pointer" onClick={onProfileClick}>
            <img alt="User profile photo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu9J5gFLzAd2Zriz9H8pHA3S7sOePseF6qydq69GcPs_i4dZ93L2-Hyjk7ptEkTaLdgbpO0piiN-VarRWaE4e372jTdZ-E0WOeQ5K_gBq4ZVcT8Kyj2PTod-6ZnZNOseeLs4XHkmDZymJKGlt7gQrbGKP1Si5gaTAXXLEHCZp3o6R1H3KjvxiRi0xoMUukxM5oJlmMa1Q-Nsgh_kOOuvmgDjmdx_SWqwkvilKh9faymwl5YdiLKfhYYHlbiZJ0IGJq2E_m7bOI_y0"/>
          </div>
          <h1 className="text-xl font-black text-cyan-400 italic tracking-tighter">NUBO</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
            <span className="material-symbols-outlined text-cyan-400 text-sm font-bold">bolt</span>
            <span className="text-cyan-400 font-bold text-xs">1,250 XP</span>
          </div>
          <button onClick={onNotificationsClick} className="material-symbols-outlined text-slate-400 hover:text-cyan-300 transition-colors">notifications</button>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto px-4 pb-12">
        <div className="mt-4 px-2">
          <div className="relative mb-6">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xl">search</span>
            <input className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 placeholder:text-slate-500 text-white" placeholder="Buscar lugares, experiencias..." type="text"/>
          </div>
          <div className="flex gap-2 overflow-x-auto scroll-hide pb-2">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === category 
                    ? 'bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(25,204,240,0.4)]' 
                    : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Featured Section (only show if 'Todo') */}
        {activeCategory === 'Todo' && featuredPlace && (
          <section className="mt-6">
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${featuredPlace.imageUrl}')` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute top-4 left-4 flex gap-2">
                {featuredPlace.badge && (
                  <div className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg ${featuredPlace.badgeType === 'popular' ? 'bg-yellow-400 text-black' : 'bg-cyan-400 text-slate-950'}`}>
                    <span className="material-symbols-outlined text-[14px]">{featuredPlace.badgeType === 'popular' ? 'star' : 'new_releases'}</span>
                    {featuredPlace.badge}
                  </div>
                )}
                <div className="bg-cyan-400 text-slate-950 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                  <span className="material-symbols-outlined text-[14px]">distance</span>
                  {featuredPlace.distance}
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-cyan-400 text-[10px] font-black mb-1 uppercase tracking-[0.2em] [text-shadow:0_0_10px_rgba(25,204,240,0.5)]">{featuredPlace.category} • {featuredPlace.subcategory}</p>
                <h2 className="text-2xl font-bold text-white mb-3 leading-tight font-display">{featuredPlace.name}</h2>
                <div className="flex items-center justify-between">
                  {featuredPlace.xpLevel && (
                    <div className="bg-cyan-500/10 backdrop-blur-md px-3 py-2 rounded-lg border border-cyan-500/20">
                      <span className="text-cyan-400 font-bold text-xs">{featuredPlace.xpLevel}</span>
                    </div>
                  )}
                  <button onClick={() => setSelectedPlace(featuredPlace)} className="bg-cyan-400 text-slate-950 px-6 py-2.5 rounded-lg font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(25,204,240,0.4)] hover:shadow-[0_0_30px_rgba(25,204,240,0.6)]">
                    Explorar
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Nearby / Filtered Places */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-5 px-2">
            <h3 className="text-lg font-bold tracking-tight uppercase">
              {activeCategory === 'Todo' ? 'Lugares Cercanos' : activeCategory}
            </h3>
            {activeCategory === 'Todo' && (
              <button className="text-cyan-400 text-xs font-bold tracking-widest uppercase flex items-center gap-1 hover:text-cyan-200 transition-colors hover:drop-shadow-[0_0_8px_rgba(25,204,240,0.6)]">
                <span className="material-symbols-outlined text-sm">map</span>
                Ver Mapa
              </button>
            )}
          </div>
          <div className="space-y-4">
            {filteredPlaces.length === 0 ? (
               <div className="text-center text-slate-500 py-10">
                 No hay lugares disponibles en esta categoría.
               </div>
            ) : (
              filteredPlaces.map((place, i) => (
                <div key={place.id || `explore-list-place-${i}`} onClick={() => setSelectedPlace(place)} className="bg-white/5 border border-white/10 rounded-xl p-3 flex gap-4 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:shadow-[0_0_15px_rgba(25,204,240,0.1)] hover:scale-[1.02] cursor-pointer group">
                  <div className="w-24 h-24 rounded-lg bg-cover bg-center shrink-0 relative overflow-hidden group-hover:shadow-[0_0_10px_rgba(25,204,240,0.3)] transition-shadow bg-slate-800" style={{ backgroundImage: `url('${place.imageUrl || 'https://images.unsplash.com/photo-1517248135467-4c7ed9d42339?q=80&w=400'}')` }}>
                    {place.badge && (
                      <div className={`absolute top-1 left-1 text-[8px] font-black px-1.5 py-0.5 rounded uppercase ${place.badgeType === 'popular' ? 'bg-yellow-400 text-black' : 'bg-cyan-400 text-slate-950'}`}>
                        {place.badge}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-base leading-tight group-hover:text-cyan-400 transition-colors">{place.name || 'Lugar'}</h4>
                        <span className="text-[10px] text-slate-500 font-medium font-display group-hover:text-cyan-400/70">{place.distance}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">{place.category} • {place.subcategory}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {place.nuboPoints && (
                        <div className="bg-cyan-500/10 border border-cyan-500/30 px-2 py-1 rounded text-[9px] font-bold text-cyan-400 uppercase">
                          {place.nuboPoints}
                        </div>
                      )}
                      {place.xpLevel && (
                        <div className="bg-white/10 px-2 py-1 rounded text-[9px] font-bold text-slate-400 uppercase">
                          {place.xpLevel}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
