import { useState } from 'react';

export function MerchantPortalScreen({ onBack }: { onBack?: () => void }) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'promotions' | 'profile' | 'create_promo'>('dashboard');

  return (
    <div className="bg-background-dark text-slate-100 min-h-screen flex flex-col relative w-full lg:max-w-md lg:mx-auto">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between sticky top-0 bg-background-dark/95 backdrop-blur-md z-40 border-b border-white/5">
        <div className="flex items-center gap-3">
          <button onClick={() => {
            if (activeTab === 'create_promo') setActiveTab('promotions');
            else if (onBack) onBack();
          }} className="flex size-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
            <span className="material-symbols-outlined text-slate-100">arrow_back</span>
          </button>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight">{activeTab === 'create_promo' ? 'Nueva Promoción' : 'Portal Comercios'}</h1>
            <span className="text-[10px] text-fuchsia-400 font-bold uppercase tracking-widest">{activeTab === 'create_promo' ? 'Formulario' : 'Modo Comercio'}</span>
          </div>
        </div>
      </header>

      {/* Tabs */}
      {activeTab !== 'create_promo' && (
      <div className="px-6 py-4 sticky top-[72px] bg-background-dark/95 backdrop-blur-md z-30">
        <div className="flex bg-white/5 p-1 rounded-full w-full border border-white/10 overflow-x-auto hide-scrollbar gap-0.5">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`flex-1 min-w-0 px-2 py-1.5 whitespace-nowrap rounded-full text-[11px] transition-all flex items-center justify-center gap-1 ${activeTab === 'dashboard' ? 'bg-fuchsia-500 text-white font-bold shadow-[0_0_15px_rgba(217,70,239,0.3)]' : 'text-slate-400 font-medium hover:text-white border border-transparent'}`}
          >
            <span className="material-symbols-outlined text-[14px]">monitoring</span> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('promotions')}
            className={`flex-1 min-w-0 px-2 py-1.5 whitespace-nowrap rounded-full text-[11px] transition-all flex items-center justify-center gap-1 ${activeTab === 'promotions' ? 'bg-fuchsia-500 text-white font-bold shadow-[0_0_15px_rgba(217,70,239,0.3)]' : 'text-slate-400 font-medium hover:text-white border border-transparent'}`}
          >
            <span className="material-symbols-outlined text-[14px]">campaign</span> Promos
          </button>
          <button 
            onClick={() => setActiveTab('profile')}
            className={`flex-1 min-w-0 px-2 py-1.5 whitespace-nowrap rounded-full text-[11px] transition-all flex items-center justify-center gap-1 ${activeTab === 'profile' ? 'bg-fuchsia-500 text-white font-bold shadow-[0_0_15px_rgba(217,70,239,0.3)]' : 'text-slate-400 font-medium hover:text-white border border-transparent'}`}
          >
            <span className="material-symbols-outlined text-[14px]">storefront</span> Local
          </button>
        </div>
      </div>
      )}

      <main className="flex-1 overflow-y-auto pb-8 pt-2">
        {activeTab === 'dashboard' && <MerchantDashboard />}
        {activeTab === 'promotions' && <MerchantPromotions onCreatePromo={() => setActiveTab('create_promo')} />}
        {activeTab === 'profile' && <MerchantProfile />}
        {activeTab === 'create_promo' && <MerchantCreatePromo onCancel={() => setActiveTab('promotions')} onSubmit={() => setActiveTab('promotions')} />}
      </main>
    </div>
  );
}

function MerchantDashboard() {
  return (
    <div className="px-6 space-y-6">
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-fuchsia-500/10 blur-[20px] rounded-full -mr-8 -mt-8"></div>
          <span className="material-symbols-outlined text-fuchsia-400 mb-2">qr_code_scanner</span>
          <span className="text-3xl font-black">248</span>
          <span className="text-xs text-slate-400 font-medium">Escaneos (Mes)</span>
          <span className="text-[10px] text-green-400 font-bold mt-1">+12% vs mes anterior</span>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/10 blur-[20px] rounded-full -mr-8 -mt-8"></div>
          <span className="material-symbols-outlined text-cyan-400 mb-2">loyalty</span>
          <span className="text-3xl font-black">84</span>
          <span className="text-xs text-slate-400 font-medium">Canjes Usados</span>
          <span className="text-[10px] text-green-400 font-bold mt-1">+5% vs mes anterior</span>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col relative overflow-hidden col-span-2">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[30px] rounded-full -mr-16 -mt-16"></div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold">Tráfico de Visitantes</span>
            <span className="text-xs text-primary font-bold">Ver reporte</span>
          </div>
          <div className="h-32 flex items-end gap-2 mt-4 pt-4 border-t border-white/5">
            {[30, 45, 25, 60, 85, 90, 50].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-full bg-white/5 rounded-t-sm relative group-hover:bg-white/20 transition-colors" style={{ height: '100px' }}>
                  <div className="absolute bottom-0 w-full bg-primary rounded-t-sm group-hover:bg-cyan-300 transition-colors" style={{ height: `${h}%` }}></div>
                </div>
                <span className="text-[9px] text-slate-500">{'LMMJVSD'[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-bold text-sm mb-3">Últimas Actividades</h3>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Cupón Canjeado</p>
                <p className="text-xs text-slate-400">Café de especialidad gratis</p>
              </div>
              <span className="text-[10px] text-slate-500">hace {i * 15} min</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MerchantPromotions({ onCreatePromo }: { onCreatePromo: () => void }) {
  return (
    <div className="px-6 space-y-4">
      <div onClick={onCreatePromo} className="bg-gradient-to-br from-fuchsia-900/40 to-slate-900 border border-fuchsia-500/20 rounded-2xl p-4 relative overflow-hidden group cursor-pointer">
        <div className="absolute right-0 top-0 w-32 h-32 bg-fuchsia-500/20 blur-[40px] rounded-full mix-blend-screen"></div>
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-12 h-12 rounded-full bg-fuchsia-500/20 flex items-center justify-center border border-fuchsia-500/40 group-hover:scale-110 transition-transform">
             <span className="material-symbols-outlined text-fuchsia-400">add</span>
          </div>
          <div>
            <h3 className="font-bold text-white">Crear Nueva Promo</h3>
            <p className="text-xs text-fuchsia-200/80">Añade beneficios para atraer usuarios</p>
          </div>
        </div>
      </div>

      <h3 className="font-bold text-sm mt-6 mb-2">Promociones Activas</h3>
      
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 mb-1">Activa</span>
            <h4 className="font-bold">2x1 en Café Especial</h4>
            <p className="text-xs text-slate-400 mt-1">Requiere Nivel 3 (Explorador)</p>
          </div>
          <button className="material-symbols-outlined text-slate-400 hover:text-white">more_vert</button>
        </div>
        <div className="h-px w-full bg-white/5 my-3"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
             <span className="material-symbols-outlined text-primary text-[16px]">visibility</span>
             <span className="text-xs font-medium">1.2k vistas</span>
          </div>
          <div className="flex items-center gap-1.5">
             <span className="material-symbols-outlined text-cyan-400 text-[16px]">loyalty</span>
             <span className="text-xs font-medium">124 usados</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 opacity-70">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-slate-500/20 text-slate-400 border border-slate-500/20 mb-1">Pausada</span>
            <h4 className="font-bold">Postre Gratis</h4>
            <p className="text-xs text-slate-400 mt-1">Con almuerzo de lunes a viernes</p>
          </div>
          <button className="material-symbols-outlined text-slate-400 hover:text-white">more_vert</button>
        </div>
      </div>
    </div>
  );
}

function MerchantProfile() {
  return (
    <div className="px-6 space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-2xl bg-slate-800 overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80" alt="Local" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Artisan Roast House</h2>
          <p className="text-sm text-slate-400">Cafetería de Especialidad</p>
          <button className="mt-2 text-xs font-bold text-primary border border-primary/30 bg-primary/10 px-3 py-1.5 rounded-lg">Editar Info</button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-sm">Información Pública</h3>
            <span className="material-symbols-outlined text-slate-400 text-sm">edit</span>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-slate-500 text-[18px]">location_on</span>
              <p className="text-sm text-slate-300">Av. Corrientes 1234, CABA</p>
            </div>
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-slate-500 text-[18px]">schedule</span>
              <p className="text-sm text-slate-300">Lun - Vie: 08:00 - 20:00<br/>Sab: 09:00 - 22:00</p>
            </div>
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-slate-500 text-[18px]">phone</span>
              <p className="text-sm text-slate-300">+54 11 4455-6677</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-sm">Validación QR</h3>
            <button className="text-xs bg-white text-slate-900 font-bold px-3 py-1.5 rounded-lg">Imprimir QR</button>
          </div>
          <p className="text-xs text-slate-400 mb-4">Los usuarios utilizarán este código para validar su visita y obtener puntos Nubo en tu local.</p>
          <div className="w-40 h-40 mx-auto bg-white p-2 rounded-xl">
             {/* Placeholder QR */}
             <div className="w-full h-full border-4 border-slate-900 rounded-lg flex items-center justify-center p-2">
                <div className="w-full h-full bg-[linear-gradient(45deg,transparent_45%,#0f172a_45%,#0f172a_55%,transparent_55%),linear-gradient(-45deg,transparent_45%,#0f172a_45%,#0f172a_55%,transparent_55%)] bg-[length:10px_10px]"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MerchantCreatePromo({ onCancel, onSubmit }: { onCancel: () => void, onSubmit: () => void }) {
  const [promoType, setPromoType] = useState<'descuento' | 'regalo' | '2x1' | 'puntos'>('descuento');

  return (
    <div className="px-6 space-y-6 pb-6 animate-fade-in">
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tipo de Promoción</label>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => setPromoType('descuento')} className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${promoType === 'descuento' ? 'bg-fuchsia-500/20 border-fuchsia-500/50 text-white' : 'bg-white/5 border-white/10 text-slate-400'}`}>
            <span className="material-symbols-outlined">percent</span>
            <span className="text-xs font-bold">Descuento</span>
          </button>
          <button onClick={() => setPromoType('regalo')} className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${promoType === 'regalo' ? 'bg-fuchsia-500/20 border-fuchsia-500/50 text-white' : 'bg-white/5 border-white/10 text-slate-400'}`}>
            <span className="material-symbols-outlined">featured_seasonal_and_gifts</span>
            <span className="text-xs font-bold">Regalo</span>
          </button>
          <button onClick={() => setPromoType('2x1')} className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${promoType === '2x1' ? 'bg-fuchsia-500/20 border-fuchsia-500/50 text-white' : 'bg-white/5 border-white/10 text-slate-400'}`}>
            <span className="material-symbols-outlined">looks_two</span>
            <span className="text-xs font-bold">2x1</span>
          </button>
          <button onClick={() => setPromoType('puntos')} className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition-all ${promoType === 'puntos' ? 'bg-fuchsia-500/20 border-fuchsia-500/50 text-white' : 'bg-white/5 border-white/10 text-slate-400'}`}>
            <span className="material-symbols-outlined">stars</span>
            <span className="text-xs font-bold">Multiplicador</span>
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Título de la Promoción</label>
          <input type="text" placeholder="Ej: 20% OFF en cafetería" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-fuchsia-500/50" />
        </div>
        
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Descripción y Condiciones</label>
          <textarea rows={3} placeholder="Condiciones de uso, horarios válidos, etc." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-fuchsia-500/50 resize-none"></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Stock / Límite</label>
            <input type="number" placeholder="Ej: 50" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-fuchsia-500/50" />
          </div>
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Nivel Requerido</label>
            <select className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-fuchsia-500/50 appearance-none">
              <option>Todos (Nivel 1+)</option>
              <option>Explorador (Nivel 3+)</option>
              <option>Guardián (Nivel 5+)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="pt-4 flex gap-3">
        <button onClick={onCancel} className="flex-1 py-3 px-4 rounded-xl font-bold text-sm bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
          Cancelar
        </button>
        <button onClick={onSubmit} className="flex-1 py-3 px-4 rounded-xl font-bold text-sm bg-fuchsia-500 hover:bg-fuchsia-400 text-white shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all">
          Crear Promo
        </button>
      </div>
    </div>
  );
}
