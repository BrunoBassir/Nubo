import { useState } from 'react';
import { Place } from './ExplorePlacesScreen';
import { PlaceExtraDetailsScreen } from './PlaceExtraDetailsScreen';

export function PlaceDetailScreen({ place, onClose, onValidate, onRouteClick }: { place: Place, onClose?: () => void, onValidate?: () => void, onRouteClick?: () => void }) {
  const [showExtraDetails, setShowExtraDetails] = useState(false);

  if (showExtraDetails) {
    return <PlaceExtraDetailsScreen place={place} onBack={() => setShowExtraDetails(false)} />;
  }

  return (
    <div 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
      className="fixed inset-0 z-[500] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-[12px] font-sans"
    >
      <div className="w-full max-w-md bg-[#0a1416] sm:rounded-3xl rounded-t-[2.5rem] overflow-hidden shadow-2xl border-t border-x sm:border border-white/10 [box-shadow:inset_0_0_10px_rgba(25,204,240,0.05),0_0_15px_rgba(25,204,240,0.2)] pb-20 max-h-[95vh] flex flex-col relative">
        {/* Close button - now higher in z-index and explicitly positioned */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }} 
          className="absolute top-6 left-6 z-[600] size-10 rounded-full bg-black/60 backdrop-blur-xl flex items-center justify-center text-white border border-white/20 active:scale-90 hover:bg-black/80 transition-all shadow-2xl"
          aria-label="Cerrar"
        >
          <span className="material-symbols-outlined text-2xl font-bold">close</span>
        </button>

        <div className="relative w-full h-64 overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${place.imageUrl}')` }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1416] via-[#0a1416]/20 to-black/30"></div>
          <div className="absolute top-6 right-6 flex justify-end items-start z-50">
            <div className="bg-[#19ccf0] text-[#050a0b] px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider flex items-center gap-1 shadow-[0_0_15px_rgba(25,204,240,0.4)]">
              <span className="material-symbols-outlined text-[14px]">distance</span>
              {place.distance}
            </div>
          </div>
        </div>

        <div className="px-6 pb-8 -mt-6 relative z-10 flex-1 overflow-y-auto hide-scrollbar">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[#19ccf0] text-[10px] font-black uppercase tracking-[0.2em]">{place.category} • {place.subcategory}</span>
              <span className="size-1 bg-slate-600 rounded-full"></span>
              <span className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-1 ${place.isOpen ? 'text-emerald-400' : 'text-red-400'}`}>
                {place.isOpen && <span className="size-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>}
                {place.isOpen ? 'Abierto ahora' : 'Cerrado'}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white leading-tight font-display">{place.name}</h2>
          </div>

          {/* Rewards Panel */}
          {(place.xpLevel || place.nuboPoints) && (
            <div className="bg-[#082f49]/20 border border-[#19ccf0]/20 rounded-2xl p-4 mb-6 transition-all duration-300 hover:bg-[#082f49]/40 hover:border-[#19ccf0]/40 hover:shadow-[0_0_15px_rgba(25,204,240,0.15)] group cursor-default">
              <h3 className="text-[#19ccf0] text-[10px] font-black uppercase tracking-[0.2em] mb-4">Recompensas por visita</h3>
              <div className="space-y-4">
                {place.xpLevel && (
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-xl bg-[#19ccf0]/10 border border-[#19ccf0]/20 flex items-center justify-center shadow-[0_0_10px_rgba(25,204,240,0.4)] group-hover:scale-110 group-hover:bg-[#19ccf0]/20 transition-all">
                      <span className="material-symbols-outlined text-[#19ccf0] text-xl">bolt</span>
                    </div>
                    <span className="font-bold text-slate-100 text-sm">{place.xpLevel} de experiencia</span>
                  </div>
                )}
                {place.nuboPoints && (
                  <div className="flex items-center gap-3 mt-4">
                    <div className="size-9 rounded-xl bg-[#19ccf0]/10 border border-[#19ccf0]/20 flex items-center justify-center shadow-[0_0_10px_rgba(25,204,240,0.4)] group-hover:scale-110 group-hover:bg-[#19ccf0]/20 transition-all">
                      <span className="material-symbols-outlined text-[#19ccf0] text-xl">payments</span>
                    </div>
                    <span className="font-bold text-slate-100 text-sm">{place.nuboPoints.replace('+', '').replace(' NUBO POINTS', '')}% Nubo Points en consumos</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Missions Panel (Example) */}
          <div className="mb-8">
            <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-3 px-1">Desafíos activos</h3>
            <div onClick={onRouteClick} className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-4 flex items-center justify-between transition-all duration-300 hover:border-[#19ccf0]/30 hover:bg-slate-900/60 hover:shadow-[0_0_15px_rgba(25,204,240,0.1)] group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full border border-[#19ccf0]/30 flex items-center justify-center p-0.5 group-hover:border-[#19ccf0]/60 transition-colors">
                  <div className="size-full rounded-full bg-[#19ccf0]/10 flex items-center justify-center group-hover:bg-[#19ccf0]/20 transition-colors">
                    <span className="material-symbols-outlined text-[#19ccf0] text-lg group-hover:scale-110 transition-transform">local_cafe</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-[#19ccf0] transition-colors">Ruta de {place.category}</p>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider group-hover:text-slate-300 transition-colors">Avanzá en tu desafío</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button onClick={onValidate} className="w-full bg-[#19ccf0] text-[#050a0b] py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(25,204,240,0.6)] hover:shadow-[0_0_25px_rgba(25,204,240,0.9)] hover:scale-[1.02] active:scale-[0.98] transition-all">
              Validar Visita
            </button>
            <button onClick={() => setShowExtraDetails(true)} className="w-full bg-slate-900/50 text-slate-200 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest border border-slate-800 hover:bg-slate-800/80 hover:border-[#19ccf0]/40 hover:text-[#19ccf0] hover:shadow-[0_0_15px_rgba(25,204,240,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-all">
              Ver {place.category === 'Gastronomía' || place.category === 'Bares' ? 'Menú' : 'Más Detalles'}
            </button>
          </div>
        </div>

        {/* Safe Area Bottom Bar Handle */}
        <div className="w-full flex justify-center pb-3 pt-2">
          <div className="w-12 h-1.5 bg-slate-800 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
