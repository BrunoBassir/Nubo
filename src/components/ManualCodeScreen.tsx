import React, { useState } from 'react';

export function ManualCodeScreen({ onBack, onValidate }: { onBack: () => void, onValidate: () => void }) {
  const [code, setCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim().length > 0) {
      onValidate();
    }
  };

  return (
    <div className="bg-background-dark font-sans text-slate-100 flex flex-col relative w-full lg:max-w-md lg:mx-auto lg:border-x lg:border-white/10">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-white/10 relative z-10 bg-background-dark/80 backdrop-blur-md">
        <button onClick={onBack} className="flex size-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white">arrow_back</span>
        </button>
        <span className="text-sm font-bold uppercase tracking-widest text-[#19ccf0]">Ingreso Manual</span>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#19ccf0]/10 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 w-full max-w-sm backdrop-blur-xl shadow-2xl relative">
           <div className="absolute -top-10 left-1/2 -translate-x-1/2 size-20 rounded-full bg-background-dark border border-white/10 flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-4xl text-[#19ccf0]">keyboard</span>
           </div>

           <div className="mt-8 text-center mb-8">
              <h2 className="text-xl font-bold text-white mb-2">Código de Local</h2>
              <p className="text-sm text-slate-400">Pídele el código al barista para registrar tu visita y sumar puntos.</p>
           </div>

           <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                 <input 
                    type="text" 
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    placeholder="Escribí el código..." 
                    className="w-full bg-black/40 border border-[#19ccf0]/30 rounded-xl px-4 py-4 text-center text-xl font-bold text-white tracking-widest placeholder:text-slate-600 focus:outline-none focus:border-[#19ccf0] focus:ring-1 focus:ring-[#19ccf0]/50 transition-all uppercase"
                    autoFocus
                 />
              </div>

              <button 
                 type="submit" 
                 disabled={!code.trim()}
                 className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${
                    code.trim() 
                       ? 'bg-[#19ccf0] text-background-dark shadow-[0_0_20px_rgba(25,204,240,0.3)] active:scale-95 cursor-pointer' 
                       : 'bg-white/5 text-slate-500 border border-white/10 cursor-not-allowed'
                 }`}
              >
                 Validar Visita
              </button>
           </form>
        </div>
      </main>
    </div>
  );
}
