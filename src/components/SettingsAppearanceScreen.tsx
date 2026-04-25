export function SettingsAppearanceScreen({ onBack }: { onBack?: () => void }) {
  return (
    <div className="bg-background-dark text-slate-100 min-h-screen flex flex-col w-full lg:max-w-md lg:mx-auto relative dark">
      <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/10 px-6 h-16 flex items-center shadow-lg">
        <button onClick={onBack} className="material-symbols-outlined text-slate-400 hover:text-[#00f2ff] transition-colors mr-3">
          arrow_back
        </button>
        <h1 className="text-lg font-bold tracking-tight">Apariencia</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4 space-y-6">
        <section>
          <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/5 border border-white/10 p-2">
            <button className="w-full flex items-center justify-between p-3 hover:bg-white/5 transition-colors rounded-xl">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">light_mode</span>
                <span className="font-medium text-sm">Claro</span>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-3 bg-white/5 transition-colors rounded-xl">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#00f2ff]">dark_mode</span>
                <span className="font-medium text-sm text-[#00f2ff]">Oscuro</span>
              </div>
              <span className="material-symbols-outlined text-[#00f2ff]">check</span>
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-white/5 transition-colors rounded-xl">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">settings_system_daydream</span>
                <span className="font-medium text-sm">Sistema</span>
              </div>
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-3 ml-2">El tema oscuro ayuda a reducir el consumo de batería en pantallas OLED.</p>
        </section>
      </main>
    </div>
  );
}
