export function SettingsHelpScreen({ onBack }: { onBack?: () => void }) {
  return (
    <div className="bg-background-dark text-slate-100 flex flex-col w-full lg:max-w-md lg:mx-auto relative dark">
      <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/10 px-6 h-16 flex items-center shadow-lg">
        <button onClick={onBack} className="material-symbols-outlined text-slate-400 hover:text-[#00f2ff] transition-colors mr-3">
          arrow_back
        </button>
        <h1 className="text-lg font-bold tracking-tight">Ayuda y FAQ</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4 space-y-6">
        <section>
          <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/5 border border-white/10">
            <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left">
              <span className="font-medium text-sm">¿Cómo valido mi visita?</span>
              <span className="material-symbols-outlined text-slate-600">expand_more</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left">
              <span className="font-medium text-sm">¿Cómo canjeo un premio?</span>
              <span className="material-symbols-outlined text-slate-600">expand_more</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left">
              <span className="font-medium text-sm">Tengo problemas con el QR</span>
              <span className="material-symbols-outlined text-slate-600">expand_more</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left">
              <span className="font-medium text-sm">¿Cómo subo de nivel?</span>
              <span className="material-symbols-outlined text-slate-600">expand_more</span>
            </button>
          </div>
        </section>

        <section className="pt-4">
            <a href="mailto:soporte@nubo.app" className="w-full bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff] hover:bg-[#00f2ff]/20 transition-colors font-bold text-sm py-4 rounded-xl flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-xl">mail</span>
                Contactar a Soporte
            </a>
        </section>
      </main>
    </div>
  );
}
