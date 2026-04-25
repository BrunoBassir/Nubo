import { useState, useMemo } from 'react';
import { PlaceDetailScreen } from './PlaceDetailScreen';

type PlaceCategory = 'Todo' | 'Gastronomía' | 'Hotelería' | 'Cultura' | 'Bares';

export type Place = {
  id: number;
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
};

export const placesData: Place[] = [
  {
    id: 1,
    name: "Artisan Roast House",
    distance: "150m",
    category: "Gastronomía",
    subcategory: "Especialidad",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtmknKxfFmcGriApOdvMiNdmOAfDNH2B5DoWCmCv-cPni_d_LK4Du3r4VSnrrIJbHpXq3IbKZr-7ivym_pZ1yYkwMwwvJ7OOOzqBtFAjTxbo6fujRF8ASWN-E1PmxZaN8IvK-x6wSOS2u5NcVOJepkegvS7dVImw1Zpj1OGAUmB5sp9JDnIUXvcNWKBuccMubABApWZS_6khWk5xLnJOmmnUv-qVUAX2BYBz9EwzIdabSDhiSaisstqUgi6S15mF50R796Les4gY0",
    badge: "Popular",
    badgeType: "popular", // yellow
    xpLevel: "+150 XP Bonus",
    nuboPoints: null,
    isOpen: true,
  },
  {
    id: 2,
    name: "Galería de Arte Moderno",
    distance: "450m",
    category: "Cultura",
    subcategory: "Abierto",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJsH75Mxn3q8rSehmHhLHh15fY93QYRcbHTzWwuxVC3GE_oDFWolw0twT-TONUwTE9xPCviHDGnXCTzY2wVrZdXfyItICrW8angsHGFdhQFEgvmPyfUvuK3rkzRdkrXB94obx651Gt4CN-mYSFFAUqOUqzqVmgBIuNmB0fqfbX5C1x9ls5ij6bXi80h92Xwtoi97NNcexd6kgCjEX9OoPsyuYfqwnfqH4fiVZM4vkzRgDDLmhyLMq6EF6mKrkNZpNRttGkstIbPgM",
    badge: "Nuevo",
    badgeType: "new", // cyan
    xpLevel: "+50 XP",
    nuboPoints: "+5% NUBO POINTS",
    isOpen: true,
  },
  {
    id: 3,
    name: "Hotel Grand Plaza",
    distance: "800m",
    category: "Hotelería",
    subcategory: "24/7",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm6rDcMLBpSVSJ6QdYQtcKZTNvOg1-OTsV60IF13QhJgHEfAZ16_1_fhISdiKK5GZDdNtMuCoc9OqEUQnNK7JL8k8_2xrfuIB7FyDT5D07U7cD0ujAetol6XYC4kExxuEuxEPawXMn0tfSB2ibIOgRnrvG-71k5Ak0IuiREH3pg-lbccyfi-QIJ8H2c177RKLxug4B93gCp5TOs0MVBMUbyxdtOtyJXldbxle_NB2dTFACLcuMAsuFZ1ofqjiDV85Fk5efBRRSUVU",
    badge: null,
    badgeType: null,
    xpLevel: "+300 XP BONUS",
    nuboPoints: null,
    isOpen: true,
  },
  {
    id: 4,
    name: "The Neon Bar",
    distance: "1.2km",
    category: "Bares",
    subcategory: "Abre 20:00",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs5cd59liGweFlnfO3PrRFOPwoR3ghQHjqROvkCiCIvimUX9LwQ1Us7ysQMJJZYiGPxSDbVHyFx-Ku7bMR-THA_XBKHxTw4YEydZ8WBJZjkdq7B0iqFApkVEK_ZVPgeBwxhniKTuZmmvrTmfT2x7WQV3yfWuqNgAEh9XvrBoJCTaLNJKq3-kkxSNSD1-PysCyNZCm4SEsTjPi4HIuvorbnnbx_N8Lv7Tm66rvIAaSCPYWZn_QGS629Hk8kpG-pzLi4dvzfPAnX65k",
    badge: "Popular",
    badgeType: "popular",
    xpLevel: null,
    nuboPoints: "+10% NUBO POINTS",
    isOpen: false,
  },
  {
    id: 5,
    name: "La Trattoria Nostra",
    distance: "2km",
    category: "Gastronomía",
    subcategory: "Italiana",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgvAeXjxY1Rt_lDsWFjSECqppFs1nBSKoq19XLdFme7BLX1M3vASKB7jbo4f4FBwUYyDZpA0R9BpD-Ns9pf770ONFKpG4sgfl01dBBgadeJ1EvLWj-G99zpaqJpuoV3VFgrTCKZkMk9APyVmMDrcxgZrmyvKoTJgglKZafHBSL7DzBrg5_wUxHo0ap26X3tgOLw3i5OBkPGAsOBbG4X2AOKGkmsnD_OfjO3O2JlVsAb4ik-D1VE3U4HJYZlw77LZAFWBAmW3xm03Y",
    badge: "Promo",
    badgeType: "new",
    xpLevel: "+100 XP",
    nuboPoints: null,
    isOpen: true,
  },
  {
    id: 6,
    name: "Museo Histórico",
    distance: "3km",
    category: "Cultura",
    subcategory: "Historia",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8qbZ5XV0AKFTAkY59qgZ2wDhFyRTTYSLLtAtzIfrLAOs_1tb9scIWSEO1JqoCYJBGpf9o5c6mdL3PEZbsndvu6BhZO_MFEtpROdXnr3glaLMv0tI98xlqPHLgcij6jnnEs2XAxC2D2R2J1vHSgAxmBAtbTgt-bRj008HAg_2-jkUGUhsuL9_KEdnEhSDZtfAYJKUSO6lEzzk2ETjO_KePTxkIyRrTy9QBXQHGXpvk4a4xZYlYpArctGe5__DN-LeqC9tgT2eq5hU",
    badge: null,
    badgeType: null,
    xpLevel: "+20 XP",
    nuboPoints: null,
    isOpen: true,
  }
];

export function ExplorePlacesScreen({ onBack, onPlaceDetailClick, onProfileClick, onNotificationsClick, onRouteClick }: { onBack?: () => void, onPlaceDetailClick?: () => void, onProfileClick?: () => void, onNotificationsClick?: () => void, onRouteClick?: () => void }) {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [activeCategory, setActiveCategory] = useState<PlaceCategory>('Todo');

  const filteredPlaces = useMemo(() => {
    if (activeCategory === 'Todo') {
      return placesData.filter(p => p.id !== 1); // Keep Artisan out of the main list for 'Todo' as it's featured
    }
    return placesData.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const categories: PlaceCategory[] = ['Todo', 'Gastronomía', 'Hotelería', 'Cultura', 'Bares'];

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
        {activeCategory === 'Todo' && (
          <section className="mt-6">
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtmknKxfFmcGriApOdvMiNdmOAfDNH2B5DoWCmCv-cPni_d_LK4Du3r4VSnrrIJbHpXq3IbKZr-7ivym_pZ1yYkwMwwvJ7OOOzqBtFAjTxbo6fujRF8ASWN-E1PmxZaN8IvK-x6wSOS2u5NcVOJepkegvS7dVImw1Zpj1OGAUmB5sp9JDnIUXvcNWKBuccMubABApWZS_6khWk5xLnJOmmnUv-qVUAX2BYBz9EwzIdabSDhiSaisstqUgi6S15mF50R796Les4gY0')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="bg-yellow-400 text-black px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  Popular
                </div>
                <div className="bg-cyan-400 text-slate-950 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                  <span className="material-symbols-outlined text-[14px]">distance</span>
                  150m
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-cyan-400 text-[10px] font-black mb-1 uppercase tracking-[0.2em] [text-shadow:0_0_10px_rgba(25,204,240,0.5)]">Gastronomía • Especialidad</p>
                <h2 className="text-2xl font-bold text-white mb-3 leading-tight font-display">Artisan Roast House</h2>
                <div className="flex items-center justify-between">
                  <div className="bg-cyan-500/10 backdrop-blur-md px-3 py-2 rounded-lg border border-cyan-500/20">
                    <span className="text-cyan-400 font-bold text-xs">+150 XP Bonus</span>
                  </div>
                  <button onClick={() => setSelectedPlace(placesData[0])} className="bg-cyan-400 text-slate-950 px-6 py-2.5 rounded-lg font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(25,204,240,0.4)] hover:shadow-[0_0_30px_rgba(25,204,240,0.6)]">
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
              filteredPlaces.map(place => (
                <div key={place.id} onClick={() => setSelectedPlace(place)} className="bg-white/5 border border-white/10 rounded-xl p-3 flex gap-4 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:shadow-[0_0_15px_rgba(25,204,240,0.1)] hover:scale-[1.02] cursor-pointer group">
                  <div className="w-24 h-24 rounded-lg bg-cover bg-center shrink-0 relative overflow-hidden group-hover:shadow-[0_0_10px_rgba(25,204,240,0.3)] transition-shadow" style={{ backgroundImage: `url('${place.imageUrl}')` }}>
                    {place.badge && (
                      <div className={`absolute top-1 left-1 text-[8px] font-black px-1.5 py-0.5 rounded uppercase ${place.badgeType === 'popular' ? 'bg-yellow-400 text-black' : 'bg-cyan-400 text-slate-950'}`}>
                        {place.badge}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-between flex-1 py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-base leading-tight group-hover:text-cyan-400 transition-colors">{place.name}</h4>
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
