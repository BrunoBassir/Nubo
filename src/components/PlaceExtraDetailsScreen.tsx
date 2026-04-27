import { Place } from './ExplorePlacesScreen';

export function PlaceExtraDetailsScreen({ place, onBack }: { place: Place, onBack: () => void }) {
  // Render different content based on category
  const renderContent = () => {
    switch (place.category) {
      case 'Gastronomía':
      case 'Gastronomía':
        return (
          <div className="px-6 py-6 space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Nuestro Menú</h3>
              <h2 className="text-2xl font-display font-bold">Especialidades</h2>
            </div>
            
            <div className="space-y-6">
              {place.menuItems?.length ? place.menuItems.map((item, index) => (
                <div key={index} className="flex justify-between items-start border-b border-white/5 pb-4">
                  <div className="flex-1 pr-4">
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400 line-clamp-2">{item.description}</p>
                  </div>
                  <div className="text-cyan-400 font-bold">{item.price}</div>
                </div>
              )) : (
                <div className="text-center text-sm text-slate-500">Menú no disponible</div>
              )}
            </div>
            {place.nuboPromotion && (
              <div className="bg-cyan-900/20 border border-cyan-500/20 rounded-xl p-4 mt-6">
                <h4 className="font-bold text-sm mb-2 text-cyan-400">Promoción Nubo</h4>
                <p className="text-xs text-slate-300">{place.nuboPromotion}</p>
              </div>
            )}
          </div>
        );
      case 'Alojamiento':
        return (
          <div className="px-6 py-6 space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Alojamiento</h3>
              <h2 className="text-2xl font-display font-bold">Instalaciones</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {place.amenities?.length ? place.amenities.map((amenity, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-cyan-400">check_circle</span>
                  <span className="text-xs font-bold text-center">{amenity}</span>
                </div>
              )) : (
                <div className="col-span-2 text-center text-sm text-slate-500">Instalaciones no disponibles</div>
              )}
            </div>
            
            {place.nuboPromotion && (
              <div className="bg-cyan-900/20 border border-cyan-500/20 rounded-xl p-4">
                <h4 className="font-bold text-sm mb-2 text-cyan-400">Promoción Nubo</h4>
                <p className="text-xs text-slate-300">{place.nuboPromotion}</p>
              </div>
            )}
          </div>
        );
      case 'Atractivo':
        return (
          <div className="px-6 py-6 space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Exposiciones</h3>
              <h2 className="text-2xl font-display font-bold">Cartelera Actual</h2>
            </div>
            
            <div className="space-y-4">
              {place.exhibitions?.length ? place.exhibitions.map((item, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl overflow-hidden border border-white/5">
                  <div className="h-32 bg-slate-800 relative">
                    <div className="absolute inset-0 bg-cover bg-center opacity-50 grayscale" style={{ backgroundImage: `url('${place.imageUrl}')` }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/50 font-bold uppercase tracking-widest text-xs">{item.room}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-1">Hasta {item.endDate}</div>
                    <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-400">{item.description}</p>
                  </div>
                </div>
              )) : (
                <div className="text-center text-sm text-slate-500">Exposiciones no disponibles</div>
              )}
            </div>
            
            {place.nuboPromotion && (
              <div className="bg-cyan-900/20 border border-cyan-500/20 rounded-xl p-4 mt-6">
                <h4 className="font-bold text-sm mb-2 text-cyan-400">Promoción Nubo</h4>
                <p className="text-xs text-slate-300">{place.nuboPromotion}</p>
              </div>
            )}
          </div>
        );
      default:
        return (
          <div className="px-6 py-6 text-center text-slate-400">
            Más detalles estarán disponibles pronto.
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center bg-black/90 backdrop-blur-xl font-sans overflow-hidden">
      <div className="w-full h-full sm:h-auto sm:max-h-[85vh] pb-24 md:pb-0 max-w-md bg-[#0a1416] sm:rounded-3xl flex flex-col shadow-2xl border-x sm:border border-white/10 relative">
        <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0 sticky top-0 bg-[#0a1416]/90 backdrop-blur-md z-10">
          <button onClick={onBack} className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-white">arrow_back</span>
          </button>
          <div className="flex-1 px-4 text-center">
            <h2 className="text-sm font-bold uppercase tracking-widest border-l-2 border-cyan-400 pl-2 inline-block">
              {place.category === 'Gastronomía' ? 'Menú' : 'Info'}
            </h2>
          </div>
          <div className="w-10"></div> {/* Placeholder to balance flex */}
        </header>

        <div className="flex-1 overflow-y-auto hide-scrollbar pb-20">
          {/* Header image small */}
          <div className="w-full h-32 relative">
             <div className="absolute inset-0 bg-cover bg-center opacity-40 fade-to-bottom" style={{ backgroundImage: `url('${place.imageUrl}')` }}></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a1416] to-transparent"></div>
             <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-xl font-display font-bold text-white shadow-black/50">{place.name}</h1>
             </div>
          </div>
          
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
