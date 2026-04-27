export function SettingsPrivacyScreen({ onBack }: { onBack?: () => void }) {
  return (
    <div className="bg-background-dark text-slate-100 flex flex-col w-full lg:max-w-md lg:mx-auto relative dark">
      <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/10 px-6 h-16 flex items-center shadow-lg">
        <button onClick={onBack} className="material-symbols-outlined text-slate-400 hover:text-[#00f2ff] transition-colors mr-3">
          arrow_back
        </button>
        <h1 className="text-lg font-bold tracking-tight">Privacidad y Seguridad</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4 space-y-6">
        <section>
          <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/5 border border-white/10">
            <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">key</span>
                <span className="font-medium text-sm">Cambiar Contraseña</span>
              </div>
              <span className="material-symbols-outlined text-slate-600">chevron_right</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">phonelink_lock</span>
                <span className="font-medium text-sm">Autenticación de dos pasos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-red-400 bg-red-400/10 px-2 py-0.5 rounded-full font-medium">Inactiva</span>
                <span className="material-symbols-outlined text-slate-600">chevron_right</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">devices</span>
                <span className="font-medium text-sm">Sesiones Activas</span>
              </div>
              <span className="material-symbols-outlined text-slate-600">chevron_right</span>
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 ml-2">Datos y Privacidad</h2>
          <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/5 border border-white/10">
            <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
              <div className="flex flex-col items-start gap-1">
                <span className="font-medium text-sm">Visibilidad del Perfil</span>
                <span className="text-[10px] text-slate-400">Público (cualquiera puede ver tus logros)</span>
              </div>
              <span className="material-symbols-outlined text-slate-600">chevron_right</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <span className="font-medium text-sm text-red-500">Eliminar Cuenta</span>
              </div>
              <span className="material-symbols-outlined text-slate-600">chevron_right</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
