export function SettingsPaymentsScreen({ onBack }: { onBack?: () => void }) {
  return (
    <div className="bg-background-dark text-slate-100 min-h-screen flex flex-col w-full lg:max-w-md lg:mx-auto relative dark">
      <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/10 px-6 h-16 flex items-center shadow-lg">
        <button onClick={onBack} className="material-symbols-outlined text-slate-400 hover:text-[#00f2ff] transition-colors mr-3">
          arrow_back
        </button>
        <h1 className="text-lg font-bold tracking-tight">Métodos de Pago</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="flex flex-col items-center justify-center py-10 opacity-60">
            <span className="material-symbols-outlined text-6xl mb-4 text-slate-500">credit_card_off</span>
            <p className="font-medium text-sm">No tienes métodos de pago asociados</p>
            <p className="text-xs text-slate-400 mt-2 text-center max-w-[250px]">
                Actualmente Nubo es completamente gratuito. Agregaremos opciones de pago próximamente.
            </p>
        </div>
      </main>
    </div>
  );
}
