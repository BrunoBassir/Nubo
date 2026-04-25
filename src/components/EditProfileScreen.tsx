export function EditProfileScreen({ onBack }: { onBack: () => void }) {
  return (
    <>
      <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-background-dark/80 backdrop-blur-md lg:max-w-md lg:mx-auto w-full">
        <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
          Cerrar
        </button>
        <h1 className="text-lg font-bold tracking-tight absolute left-1/2 -translate-x-1/2">Editar Perfil</h1>
        <div className="w-[45px]"></div>
      </header>
      
      <main className="flex-1 overflow-y-auto px-6 pb-20">
        <section className="flex flex-col items-center py-8">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30">
              <img alt="Avatar de usuario" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNBtiCwyV6pI7OUWtVC1d8Ljk8FfTswM5DleqMfI7tmxUMZ8MTrKOwb6A4eN7ZQ5MBWKNdXeY4x9bNFiK1JQmItGP18SLhz4ACUut3YM2SJx8SNYRzBFeSXsbEoAs-4Y02Sr_A-owzfzgtesBI3sv-69xffPFDqFJGi4hUyPUtpe-s17iVCaMS8T4IhNsknYWwL40LnojZ_zNUq3gcUADtdIdj9jS3KrLcDct4Inq5DNvF3NKXNgaQkj9YQec-ZVnpPRxWH0z4_no"/>
            </div>
            <button className="absolute inset-0 flex items-center justify-center bg-background-dark/60 rounded-full opacity-100 transition-opacity">
              <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-background-dark text-xl font-bold">photo_camera</span>
              </div>
            </button>
          </div>
          <p className="mt-4 text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Cambiar foto</p>
        </section>
        
        <section className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] ml-1">Nombre Completo</label>
            <input className="w-full bg-input-bg border-none rounded-2xl px-5 py-4 text-slate-100 input-glow transition-all focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Tu nombre" type="text" defaultValue="Alex Rivera"/>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] ml-1">Nombre de Usuario</label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-primary font-bold">@</span>
              <input className="w-full bg-input-bg border-none rounded-2xl pl-10 pr-5 py-4 text-slate-100 input-glow transition-all focus:outline-none focus:ring-1 focus:ring-primary" placeholder="usuario" type="text" defaultValue="alex_urbano"/>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] ml-1">Fecha de Nacimiento</label>
              <div className="relative">
                <input className="w-full bg-input-bg border-none rounded-2xl px-5 py-4 text-slate-100 input-glow transition-all text-sm focus:outline-none focus:ring-1 focus:ring-primary [&::-webkit-calendar-picker-indicator]:invert-[.7] [&::-webkit-calendar-picker-indicator]:sepia-[.8] [&::-webkit-calendar-picker-indicator]:saturate-[2000%] [&::-webkit-calendar-picker-indicator]:hue-rotate-[160deg] [&::-webkit-calendar-picker-indicator]:brightness-[1] [&::-webkit-calendar-picker-indicator]:contrast-[1]" type="date" defaultValue="1995-08-15"/>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] ml-1">Género</label>
              <select className="w-full bg-input-bg border-none rounded-2xl px-5 py-4 text-slate-100 input-glow transition-all text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-primary" style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 1rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="no-binario">No binario</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] ml-1">Ciudad Principal</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 text-xl">location_on</span>
              <input className="w-full bg-input-bg border-none rounded-2xl pl-12 pr-5 py-4 text-slate-100 input-glow transition-all focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Ciudad" type="text" defaultValue="Buenos Aires, AR"/>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] ml-1">Bio</label>
            <textarea className="w-full bg-input-bg border-none rounded-2xl px-5 py-4 text-slate-100 input-glow transition-all resize-none focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Cuéntanos sobre tus exploraciones..." rows={3} defaultValue="Explorador urbano apasionado por descubrir los rincones ocultos de la ciudad. Siempre en busca del mejor café."></textarea>
          </div>
          
          <div className="space-y-3 pt-2">
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] ml-1">Intereses</label>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 rounded-full bg-primary text-background-dark font-bold text-xs transition-all border border-primary">Café</button>
              <button className="px-4 py-2 rounded-full bg-input-bg text-slate-400 font-bold text-xs transition-all border border-slate-800 hover:border-primary/50">Museos</button>
              <button className="px-4 py-2 rounded-full bg-primary text-background-dark font-bold text-xs transition-all border border-primary">Arquitectura</button>
              <button className="px-4 py-2 rounded-full bg-input-bg text-slate-400 font-bold text-xs transition-all border border-slate-800 hover:border-primary/50">Deportes</button>
              <button className="px-4 py-2 rounded-full bg-input-bg text-slate-400 font-bold text-xs transition-all border border-slate-800 hover:border-primary/50">Gastronomía</button>
              <button className="px-4 py-2 rounded-full bg-input-bg text-slate-400 font-bold text-xs transition-all border border-slate-800 hover:border-primary/50">Fotografía</button>
              <button className="px-4 py-2 rounded-full bg-input-bg text-slate-400 font-bold text-xs transition-all border border-slate-800 hover:border-primary/50">Street Art</button>
            </div>
          </div>
          
          <div className="pt-4">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em] ml-1 mb-4">Preferencias</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-input-bg/50 p-4 rounded-2xl">
                <div className="flex flex-col">
                  <span className="font-bold text-sm">Perfil Público</span>
                  <span className="text-[11px] text-slate-500">Permitir que otros vean tus logros</span>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none bg-primary">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6"></span>
                </button>
              </div>
              <div className="flex items-center justify-between bg-input-bg/50 p-4 rounded-2xl">
                <div className="flex flex-col">
                  <span className="font-bold text-sm">Notificaciones de Desafíos</span>
                  <span className="text-[11px] text-slate-500">Alertas de nuevos retos cercanos</span>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none bg-slate-700">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1"></span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-6">
            <button onClick={onBack} className="w-full bg-primary text-background-dark py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-transform">
              Guardar Cambios
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
