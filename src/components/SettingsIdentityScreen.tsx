export function SettingsIdentityScreen({ onBack }: { onBack?: () => void }) {
  return (
    <div className="bg-background-dark text-slate-100 min-h-screen flex flex-col w-full lg:max-w-md lg:mx-auto relative dark">
      <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/10 px-6 h-16 flex items-center shadow-lg">
        <button onClick={onBack} className="material-symbols-outlined text-slate-400 hover:text-[#00f2ff] transition-colors mr-3">
          arrow_back
        </button>
        <h1 className="text-lg font-bold tracking-tight">Validar Identidad</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-4 border border-green-500/20">
                <span className="material-symbols-outlined text-4xl text-green-400">verified_user</span>
            </div>
            <h2 className="text-xl font-bold mb-2">Identidad Validada</h2>
            <p className="text-slate-400 text-sm mb-6">Tu nivel actual requiere validación básica. Todo está en orden.</p>
        </div>

        <section className="space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">Datos Verificados</h3>
            <div className="glass-card rounded-2xl p-4 space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                    <div>
                        <p className="text-xs text-slate-400 mb-1">Nombre Completo</p>
                        <p className="font-medium text-sm">Bruno Rearte</p>
                    </div>
                    <span className="material-symbols-outlined text-green-400">check_circle</span>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xs text-slate-400 mb-1">DNI / Pasaporte</p>
                        <p className="font-medium text-sm">38.***.***</p>
                    </div>
                    <span className="material-symbols-outlined text-green-400">check_circle</span>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
