export function SettingsAboutScreen({ onBack }: { onBack?: () => void }) {
  return (
    <div className="bg-background-dark text-slate-100 min-h-screen flex flex-col w-full lg:max-w-md lg:mx-auto relative dark">
      <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/10 px-6 h-16 flex items-center shadow-lg">
        <button onClick={onBack} className="material-symbols-outlined text-slate-400 hover:text-[#00f2ff] transition-colors mr-3">
          arrow_back
        </button>
        <h1 className="text-lg font-bold tracking-tight">Acerca de Nubo</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-6 space-y-8">
        <div className="flex flex-col items-center justify-center pt-8 pb-4">
            <div className="w-24 h-24 bg-gradient-to-br from-[#00f2ff] to-[#00f2ff] rounded-3xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,242,255,0.3)]">
                <span className="material-symbols-outlined text-6xl text-slate-900 font-bold">cloud</span>
            </div>
            <h2 className="text-3xl font-black tracking-tighter mb-1">NUBO</h2>
            <p className="text-slate-400 text-sm">Versión 1.0.4 (Build 42)</p>
        </div>

        <section>
          <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/5 border border-white/10">
            <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
              <span className="font-medium text-sm">Términos y Condiciones</span>
              <span className="material-symbols-outlined text-slate-600">chevron_right</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
              <span className="font-medium text-sm">Política de Privacidad</span>
              <span className="material-symbols-outlined text-slate-600">chevron_right</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
              <span className="font-medium text-sm">Licencias de Código Abierto</span>
              <span className="material-symbols-outlined text-slate-600">chevron_right</span>
            </button>
          </div>
        </section>

        <div className="text-center text-slate-500 text-xs">
            <p>© 2024 Nubo App.</p>
            <p>Todos los derechos reservados.</p>
        </div>
      </main>
    </div>
  );
}
