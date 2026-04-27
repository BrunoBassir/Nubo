export function UploadProofScreen({ onBack, onValidate }: { onBack: () => void, onValidate?: () => void }) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 flex flex-col w-full lg:max-w-md lg:mx-auto relative">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 pt-6 pb-4 border-b border-white/5">
        <div className="flex items-center justify-between w-full">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-full bg-slate-200 dark:bg-surface-dark text-slate-900 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-slate-800 transition-colors z-10 w-12 border border-white/5">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          
          <h1 className="text-lg font-bold tracking-tight absolute inset-0 flex items-center justify-center pointer-events-none mt-2">Cargar Prueba</h1>
          
          <div className="size-10 z-10 w-12 flex justify-end"></div> {/* Spacer for symmetry */}
        </div>
      </header>

      <main className="flex-1 w-full px-6">
        {/* Challenge Progress Section */}
        <section className="mt-4 mb-8">
          <div className="flex justify-between items-end mb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-1 block">Desafío Actual</span>
              <h2 className="text-xl font-bold font-display">3 Museos de la Ciudad</h2>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-primary">2</span>
              <span className="text-slate-400 font-medium">/3</span>
            </div>
          </div>
          <div className="h-3 w-full bg-slate-200 dark:bg-surface-dark rounded-full overflow-hidden p-[2px]">
            <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(25,204,240,0.6)]" style={{ width: '66%' }}></div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            Próximo destino: Museo de Arte Moderno
          </p>
        </section>

        {/* Upload Area */}
        <section className="relative group">
          {/* Empty State / Upload Trigger */}
          <div className="relative overflow-hidden rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 hover:bg-primary/10 transition-all duration-300 py-16 px-6 flex flex-col items-center justify-center text-center cursor-pointer shadow-[0_0_15px_rgba(25,204,240,0.15)]">
            <div className="size-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 border border-primary/30 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-primary">add_a_photo</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Tomar foto o subir de galería</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[240px]">Captura una imagen nítida de la fachada o el ticket de entrada.</p>
            {/* Hidden input for real usage */}
            <input accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" type="file" />
          </div>

          {/* Preview Card (Simulated Visible after Selection - currently hidden) */}
          <div className="hidden mt-6 relative rounded-xl overflow-hidden border border-primary/30 shadow-2xl">
            <img alt="Museum Facade Preview" className="w-full h-64 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA10vtCICVoblWQo4_RVmpH_6OiTYzZ38FadySSUrAeq0qJGc5pWgLff--SoT1oTiREw83DxBq-g16ijgjVwqkP62UJFG6wCLIiWBnoetmmmrRjYHyLJtyX6EK-KtJm2dZo4zZw9fFst3XnbEoC2ENHg8ItcE5o8CE6-Sb-Es_iAaan0iz3OTN7OLKZ9eLhoazx4-lYpZziIa2Uq1HPCxv9ivfR75HUH-1GUtvCE6sC2qfsbdGitqH9Th3j26bL69WY_XBij7mbt1U" />
            <div className="absolute top-4 right-4">
              <button className="bg-black/60 backdrop-blur-md text-white text-xs font-bold py-2 px-4 rounded-full flex items-center gap-2 border border-white/20">
                <span className="material-symbols-outlined text-sm">refresh</span>
                Reintentar
              </button>
            </div>
          </div>
        </section>

        {/* Validation Requirements */}
        <section className="mt-8">
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4 px-1">Requisitos de Validación</h4>
          <div className="space-y-3">
            <div className="bg-white/5 backdrop-blur-md border border-primary/10 p-4 rounded-lg flex items-start gap-4">
              <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[16px] text-primary font-bold">check</span>
              </div>
              <div>
                <p className="text-sm font-medium">Claridad y Legibilidad</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Asegúrate de que no haya reflejos ni esté borrosa.</p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-primary/10 p-4 rounded-lg flex items-start gap-4">
              <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[16px] text-primary font-bold">check</span>
              </div>
              <div>
                <p className="text-sm font-medium">Elemento de Prueba</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Debe mostrar claramente la fachada del lugar o un ticket oficial.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Button for Photo Upload */}
        <div className="mt-8">
          <button onClick={onValidate} className="w-full bg-primary hover:bg-primary/90 text-slate-950 font-bold py-4 rounded-xl shadow-[0_4px_20px_rgba(25,204,240,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <span>Enviar Validación</span>
            <span className="material-symbols-outlined">send</span>
          </button>
          <button onClick={onBack} className="w-full py-3 mt-2 text-slate-500 dark:text-slate-400 font-medium text-sm hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
            Cancelar y volver
          </button>
        </div>
      </main>
    </div>
  );
}
