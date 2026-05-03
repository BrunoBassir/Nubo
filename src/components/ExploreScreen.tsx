import { useState, useEffect, useMemo } from 'react';
import { PlaceDetailScreen } from './PlaceDetailScreen';
import { Place } from './ExplorePlacesScreen';
import { collection, onSnapshot, query, limit } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { samplePlaces } from '../lib/seedDatabase';
import { useGlobalCity } from '../contexts/CityContext';

export function ExploreScreen({ onPlacesClick, onChallengesClick, onDiscoveryClick, onFeaturedDetailClick, onRadarClick, onSecretMissionsClick, onRouteClick, onValidate }: { onPlacesClick?: () => void, onChallengesClick?: () => void, onDiscoveryClick?: () => void, onFeaturedDetailClick?: () => void, onRadarClick?: () => void, onSecretMissionsClick?: () => void, onRouteClick?: () => void, onValidate?: () => void }) {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [placesData, setPlacesData] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const { selectedGlobalCity } = useGlobalCity();
  
  useEffect(() => {
    // Timeout to stop showing loading state if Firestore is slow
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const unsub = onSnapshot(query(collection(db, 'places'), limit(20)), (snapshot) => {
      const places: Place[] = snapshot.docs.map(doc => ({
        ...(doc.data() as Omit<Place, 'id'>),
        id: doc.id
      }));
      setPlacesData(places);
      setLoading(false);
      clearTimeout(timer);
    }, (error) => {
       console.error("Error fetching places: ", error);
       setLoading(false);
       clearTimeout(timer);
    });

    return () => {
      unsub();
      clearTimeout(timer);
    };
  }, []);

  const displayPlaces = useMemo(() => {
    const data = placesData.length > 0 ? placesData : samplePlaces;
    return data.filter(p => (p.city || 'Rosario') === selectedGlobalCity);
  }, [placesData, selectedGlobalCity]);

  if (selectedPlace) {
    return <PlaceDetailScreen place={selectedPlace} onClose={() => setSelectedPlace(null)} onRouteClick={onRouteClick} onValidate={onValidate} />;
  }

  return (
    <>
      <main className="flex-1 overflow-y-auto px-6 pt-8">
        <div className="flex gap-4 mt-4 h-[380px]">
          <div onClick={onPlacesClick} className="relative flex-1 group cursor-pointer overflow-hidden rounded-3xl border border-primary/20 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_25px_rgba(25,204,240,0.5)] card-glow-teal">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
            <div className="absolute inset-0 bg-primary/10 opacity-40 transition-opacity duration-300 group-hover:opacity-60"></div>
            <div className="absolute bottom-6 left-5 right-5">
              <div className="mb-2 flex justify-between items-start">
                <div className="size-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/40 group-hover:shadow-primary/60 transition-shadow duration-300">
                  <span className="material-symbols-outlined text-background-dark font-bold">storefront</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white leading-none mb-1 text-glow-teal group-hover:text-primary group-hover:drop-shadow-[0_0_10px_rgba(25,204,240,0.8)] transition-all duration-300">Lugares<br/>Nubo</h2>
              <p className="text-xs text-primary font-medium">Visitá y ganá en {selectedGlobalCity}</p>
            </div>
          </div>
          
          <div onClick={onChallengesClick} className="relative flex-1 group cursor-pointer overflow-hidden rounded-3xl border border-accent/20 transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_25px_rgba(240,162,25,0.5)] card-glow-orange">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
            <div className="absolute inset-0 bg-accent/10 opacity-40 transition-opacity duration-300 group-hover:opacity-60"></div>
            <div className="absolute bottom-6 left-5 right-5">
              <div className="mb-2 size-10 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/40 group-hover:shadow-accent/60 transition-shadow duration-300">
                <span className="material-symbols-outlined text-background-dark font-bold">military_tech</span>
              </div>
              <h2 className="text-2xl font-bold text-white leading-none mb-1 transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_10px_rgba(240,162,25,0.8)]">Desafíos<br/>Urbanos</h2>
              <p className="text-xs text-accent font-medium">Cumplí desafíos en {selectedGlobalCity}</p>
            </div>
          </div>
        </div>

        {/* Radar Banner */}
        <section className="mt-8">
          <div onClick={onRadarClick} className="relative w-full rounded-3xl overflow-hidden cursor-pointer group bg-slate-900 border border-primary/30 flex items-center shadow-[0_0_20px_rgba(25,204,240,0.1)] hover:shadow-[0_0_30px_rgba(25,204,240,0.3)] transition-all">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="absolute right-0 top-0 bottom-0 w-32 overflow-hidden flex items-center justify-end pr-6">
              <div className="w-48 h-48 rounded-full border border-primary/20 absolute -right-10 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-primary/30 flex items-center justify-center animate-[spin_6s_linear_infinite]" style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(25,204,240,0.1) 90%, rgba(25,204,240,0.5) 100%)' }}>
                  <div className="absolute top-0 bottom-1/2 left-1/2 w-[1px] bg-primary"></div>
                </div>
              </div>
            </div>

            <div className="p-6 relative z-10 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-primary text-xl drop-shadow-[0_0_8px_rgba(25,204,240,0.8)] animate-pulse">radar</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Nuevo en {selectedGlobalCity}</span>
              </div>
              <h3 className="font-display font-black text-2xl text-white mb-1 leading-tight">Radar Nubo</h3>
              <p className="text-xs text-slate-400 max-w-[200px]">Escaneá tu zona para encontrar cofres y lugares x2 XP.</p>
            </div>
          </div>
        </section>

        {/* Secret Missions Banner */}
        <section className="mt-4">
          <div onClick={onSecretMissionsClick} className="relative w-full rounded-2xl overflow-hidden cursor-pointer group bg-slate-900 border border-slate-700 flex items-center shadow-lg hover:border-slate-500 transition-all">
            <div className="p-4 relative z-10 flex-1 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-red-500 text-lg">warning</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400">Limitadas</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-0">Desafíos Secretos</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                 <span className="material-symbols-outlined text-slate-400 group-hover:text-white">chevron_right</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
              Destacado de hoy
            </h3>
          </div>
          
          <div className="relative w-full p-5 rounded-2xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex gap-4 items-center overflow-hidden transition-all duration-300 hover:border-primary/30 hover:bg-slate-900/60 hover:shadow-[0_0_20px_rgba(25,204,240,0.1)] group">
            <div className="absolute -right-12 -top-12 size-40 bg-primary/5 rounded-full blur-3xl animate-pulse group-hover:bg-primary/20 transition-colors"></div>
            <div className="relative w-24 h-24 rounded-xl bg-cover bg-center shrink-0 border border-white/10 group-hover:border-primary/50 overflow-hidden transition-colors" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400')" }}>
              <div className="absolute inset-0 bg-primary/10 rounded-xl group-hover:bg-transparent transition-colors"></div>
            </div>
            
            <div className="flex-1 relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-[0_0_8px_rgba(25,204,240,0)] group-hover:shadow-[0_0_8px_rgba(25,204,240,0.4)] transition-shadow">Desafío Especial</span>
                <span className="text-[10px] text-slate-400 font-medium">Finaliza en 4h</span>
              </div>
              <h4 className="text-lg font-bold leading-tight mb-1 group-hover:text-primary transition-colors">El Tour de los Museos</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 line-clamp-1">Visitá 3 museos hoy y obtené un bonus épico.</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-sm group-hover:animate-pulse">stars</span>
                  <span className="text-primary font-bold text-xs drop-shadow-none group-hover:drop-shadow-[0_0_5px_rgba(25,204,240,0.5)] transition-all">+500 XP</span>
                </div>
                <button onClick={onFeaturedDetailClick} className="bg-primary/10 hover:bg-primary/20 text-primary px-4 py-1.5 rounded-lg text-xs font-bold border border-transparent hover:border-primary/40 hover:shadow-[0_0_15px_rgba(25,204,240,0.2)] transition-all">
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Cerca de vos en {selectedGlobalCity}</h3>
            <span onClick={onDiscoveryClick} className="text-primary text-sm font-semibold cursor-pointer hover:drop-shadow-[0_0_5px_rgba(25,204,240,0.5)] transition-all">Ver todos</span>
          </div>
          
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
            {displayPlaces.length > 0 ? displayPlaces.slice(0, 6).map((place, i) => (
              <div key={place.id || `explore-place-${i}`} onClick={() => setSelectedPlace(place)} className="w-40 shrink-0 group cursor-pointer">
                <div 
                  className="w-full aspect-square rounded-2xl bg-cover bg-center mb-2 border border-slate-200 dark:border-slate-800 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_15px_rgba(25,204,240,0.15)] group-hover:scale-105 bg-slate-800" 
                  style={{ backgroundImage: `url('${place.imageUrl || 'https://images.unsplash.com/photo-1517248135467-4c7ed9d42339?q=80&w=400'}')` }}
                ></div>
                <p className="font-bold text-sm truncate group-hover:text-primary transition-colors">{place.name || 'Lugar'}</p>
                <p className="text-[10px] text-slate-500">{(place.subcategory || place.category) || 'Explora'} • {place.distance || 'Cerca'}</p>
              </div>
            )) : (
              <p className="text-slate-400 text-sm">No hay lugares para mostrar en esta ciudad.</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
