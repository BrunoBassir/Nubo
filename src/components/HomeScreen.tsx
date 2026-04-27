import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { PlaceDetailScreen } from './PlaceDetailScreen';
import { Place } from './ExplorePlacesScreen';
import { collection, onSnapshot, query, limit } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { seedDatabase, samplePlaces } from '../lib/seedDatabase';

export function HomeScreen({ onProfileClick, onLevelClick, onRecentActivityClick, onSpotClick, onCoffeeRouteClick, onNotificationsClick, onValidate }: { onProfileClick: () => void, onLevelClick: () => void, onRecentActivityClick?: () => void, onSpotClick?: () => void, onCoffeeRouteClick?: () => void, onNotificationsClick?: () => void, onValidate?: () => void }) {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [placesData, setPlacesData] = useState<Place[]>([]);
  const [isSeeding, setIsSeeding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [seedStatus, setSeedStatus] = useState<{message: string; type: 'success' | 'error'} | null>(null);
  
  // Timeout to stop showing skeletons if Firestore is slow
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  const handleSeed = async () => {
    if (isSeeding) return;
    setIsSeeding(true);
    setSeedStatus({ message: 'Iniciando inyección...', type: 'success' });
    try {
      const result = await seedDatabase();
      setIsSeeding(false);
      if (result.success) {
        setSeedStatus({ message: '¡Datos inyectados con éxito!', type: 'success' });
        setTimeout(() => setSeedStatus(null), 5000);
      } else {
        setSeedStatus({ message: `Error: ${result.error || 'Desconocido'}`, type: 'error' });
      }
    } catch (err: any) {
      setIsSeeding(false);
      setSeedStatus({ message: `Crash: ${err.message}`, type: 'error' });
    }
  };
  
  useEffect(() => {
    const unsub = onSnapshot(query(collection(db, 'places'), limit(6)), (snapshot) => {
      const places: Place[] = snapshot.docs.map(doc => ({
        ...(doc.data() as Omit<Place, 'id'>),
        id: doc.id
      }));
      setPlacesData(places);
      setIsLoading(false);
    }, (error) => {
       console.error("Error fetching places: ", error);
       setIsLoading(false);
    });

    return () => unsub();
  }, []);

  // Determine what to display
  const displayPlaces = placesData.length > 0 ? placesData : samplePlaces.slice(0, 6);

  if (selectedPlace) {
    return <PlaceDetailScreen place={selectedPlace} onClose={() => setSelectedPlace(null)} onValidate={onValidate} onRouteClick={onCoffeeRouteClick} />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <>
      <main className="pt-8 px-6 max-w-2xl mx-auto space-y-section-gap">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-section-gap">
          
          {/* Welcome Header */}
          <motion.div variants={itemVariants} className="flex justify-between items-end mb-2">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Hola, Explorador</h1>
              <p className="text-slate-500 text-sm">¿Qué vamos a descubrir hoy?</p>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background-dark bg-slate-800 flex items-center justify-center overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Amigo" className="w-full h-full object-cover opacity-60" />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-background-dark bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary backdrop-blur-sm">
                +12
              </div>
            </div>
          </motion.div>

          {/* Daily Streak */}
          <motion.section variants={itemVariants} className="bg-slate-900 border border-orange-500/30 rounded-2xl p-4 shadow-[0_0_15px_rgba(249,115,22,0.1)] flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
               </div>
               <div>
                  <h3 className="text-white font-bold text-sm tracking-tight">Racha Activa</h3>
                  <p className="text-orange-400 font-black text-xs uppercase tracking-wider">3 Días Seguidos</p>
               </div>
            </div>
            <div className="flex gap-1">
               {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((day, i) => (
                  <div key={day} className="flex flex-col items-center gap-1">
                     <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${i < 3 ? 'bg-orange-500 text-white shadow-[0_0_8px_rgba(249,115,22,0.5)]' : 'bg-slate-800 text-slate-500'}`}>
                        {i < 3 ? <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span> : ''}
                     </div>
                     <span className="text-[8px] text-slate-500 font-bold uppercase">{day}</span>
                  </div>
               ))}
            </div>
          </motion.section>

          {/* XP Progress Bar */}
          <motion.section variants={itemVariants} className="cursor-pointer group relative" onClick={onLevelClick}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent rounded-2xl blur-xl group-hover:bg-primary/30 transition-all duration-300"></div>
            <div className="glass-card p-5 rounded-2xl relative overflow-hidden group-hover:border-primary/30 transition-all duration-300 shadow-[0_0_20px_rgba(25,204,240,0.05)] border border-white/5">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-600 flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-background-dark text-2xl font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-label-caps text-primary tracking-widest text-[10px] mb-1 opacity-80">NIVEL ACTUAL</h2>
                  <div className="flex justify-between items-end">
                    <span className="font-display text-2xl font-bold text-on-surface leading-none">Aventurero <span className="text-cyan-400">14</span></span>
                    <div className="flex items-end gap-1 text-right">
                      <span className="font-stat-main text-primary text-lg leading-none">2,450</span>
                      <span className="font-label-caps text-on-surface-variant text-[10px] pb-0.5">/ 3,000 XP</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <div className="h-3 w-full bg-slate-900/80 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '82%' }}
                    transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-primary rounded-full shadow-[0_0_10px_rgba(25,204,240,0.6)] relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.3)_50%,transparent_100%)] w-[200%] animate-[shimmer_2s_infinite]"></div>
                  </motion.div>
                </div>
                <p className="text-right text-[10px] text-cyan-400 mt-2 font-label-caps tracking-wider group-hover:text-primary transition-colors">550 XP PARA HEROE</p>
              </div>
            </div>
          </motion.section>

          {/* Featured Mission Card */}
          <motion.section variants={itemVariants} className="space-y-element-gap">
            <h2 className="font-label-caps text-cyan-400">DESAFÍO DIARIO</h2>
            <div className="glass-card p-card-padding rounded-xl relative overflow-hidden group hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(25,204,240,0.2)] transition-all duration-300">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
              <div className="flex gap-element-gap items-start relative z-10 w-full">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary-container">
                 <span className="material-symbols-outlined text-3xl">local_cafe</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-headline-md text-on-surface truncate">Explorador de Cafeína</h3>
                  <p className="font-body-md text-on-surface-variant mt-1 text-[13px] leading-tight line-clamp-2">Visita cualquier cafetería local en el centro y escanea el código QR de Nubo.</p>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1 text-primary font-stat-main whitespace-nowrap">
                      <span className="material-symbols-outlined text-sm">bolt</span>
                      +150 XP
                    </span>
                    <button onClick={onCoffeeRouteClick} className="bg-primary text-on-primary px-3 py-1.5 rounded-full font-label-caps text-[10px] hover:brightness-110 active:scale-95 transition-all shrink-0">
                      IR AHORA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Recommended Places Carousel */}
          <motion.section variants={itemVariants} className="space-y-element-gap">
            <div className="flex justify-between items-center cursor-pointer group" onClick={onSpotClick}>
              <h2 className="font-label-caps text-cyan-400 group-hover:text-cyan-300 transition-colors">LUGARES RECOMENDADOS</h2>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-cyan-300 transition-colors">arrow_forward</span>
            </div>
            <div className="flex overflow-x-auto gap-4 scroll-hide pb-4 snap-x">
              {displayPlaces.map((place, i) => (
                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }} 
                  key={place.id || `home-place-${i}`} 
                  className="w-[260px] min-w-[260px] glass-card rounded-xl overflow-hidden flex-shrink-0 cursor-pointer snap-start hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-cyan-400/30 hover:shadow-[0_0_15px_rgba(25,204,240,0.15)] group flex h-[100px]" 
                  onClick={() => setSelectedPlace(place)}
                >
                  <div className="w-[100px] h-full relative shrink-0 bg-slate-800 overflow-hidden">
                    <img 
                      alt={place.name} 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
                      src={place.imageUrl || 'https://images.unsplash.com/photo-1517248135467-4c7ed9d42339?q=80&w=400'} 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3 flex-1 flex flex-col justify-center min-w-0">
                    <h4 className="font-headline-md text-sm text-on-surface line-clamp-2 leading-tight font-bold">{place.name || 'Lugar sin nombre'}</h4>
                    <p className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-1 truncate">
                      <span className="material-symbols-outlined text-[12px]">location_on</span> 
                      {place.distance || 'Cerca de ti'}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-[10px] text-primary/80 truncate font-bold uppercase tracking-tight">{place.category || 'Categoría'}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {placesData.length === 0 && !isLoading && (
                <div className="min-w-[180px] glass-card rounded-xl border-dashed border-white/20 p-4 flex flex-col items-center justify-center text-center space-y-2 snap-start shrink-0">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Modo Demo</p>
                  <button 
                    disabled={isSeeding}
                    onClick={handleSeed}
                    className="bg-primary/20 text-primary border border-primary/30 font-black text-[9px] px-3 py-1.5 rounded-lg hover:bg-primary/30 transition-all flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[10px]">{isSeeding ? 'sync' : 'rocket_launch'}</span>
                    {isSeeding ? '...' : 'SQL INJECT'}
                  </button>
                </div>
              )}
            </div>
          </motion.section>

          {/* Recent Activity List */}
          <motion.section variants={itemVariants} className="space-y-element-gap">
            <div className="flex justify-between items-center cursor-pointer group" onClick={onRecentActivityClick}>
              <h2 className="font-label-caps text-cyan-400 group-hover:text-cyan-300 transition-colors">ACTIVIDAD RECIENTE</h2>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-cyan-300 transition-colors">arrow_forward</span>
            </div>
            <div className="space-y-3">
              <motion.div whileHover={{ x: 4 }} className="flex items-center justify-between p-3 glass-card rounded-lg border-l-4 border-l-primary hover:bg-white/5 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/5">
                    <span className="material-symbols-outlined text-cyan-400">qr_code_2</span>
                  </div>
                  <div>
                    <p className="font-body-md text-on-surface text-sm">Scan en Bookish Cafe</p>
                    <p className="text-xs text-on-surface-variant">Hace 2 horas</p>
                  </div>
                </div>
                <span className="font-stat-main text-primary">+45 XP</span>
              </motion.div>

              <motion.div whileHover={{ x: 4 }} className="flex items-center justify-between p-3 glass-card rounded-lg border-l-4 border-l-secondary hover:bg-white/5 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/5">
                    <span className="material-symbols-outlined text-secondary">emoji_events</span>
                  </div>
                  <div>
                    <p className="font-body-md text-on-surface text-sm">Logro: Madrugador</p>
                    <p className="text-xs text-on-surface-variant">Ayer, 08:30 AM</p>
                  </div>
                </div>
                <span className="font-stat-main text-secondary">+100 XP</span>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </>
  );
}
