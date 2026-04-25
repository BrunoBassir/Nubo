export function ScanQRScreen({ onProfileClick, onNotificationsClick, onManualCodeClick }: { onProfileClick?: () => void, onNotificationsClick?: () => void, onManualCodeClick?: () => void }) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full lg:max-w-md lg:mx-auto bg-slate-950/60 backdrop-blur-md border-b border-white/10 shadow-lg flex justify-between items-center px-6 h-16 z-50">
        <div className="flex items-center gap-3 relative z-10 cursor-pointer" onClick={onProfileClick}>
          <div className="size-8 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
            <img alt="User profile photo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTII5ffbQzVA1WO03jYF1oQ_p1wdZND-eI-Kap4mccxdDIckcaVWd9kJT4Zgcun8LVEhWIE_22l9RfcAM2L2iIoEhLSrUv9-iBFViV0-jlfJiGFtRqD4zh6kcAJm1PHc3D9OkhsECKjjEUVPR-G3-OLd3LP065MZDg9BkJ8YuHR11VrBAdL8--y_Djq-k0pwHzkhPDlb3TPsj-VEn_RuXQXj18qxKYCbl9PZXtI2yEmT7ZMxnXKuU4-YIkJR2pwSdfh50YxS0_Dyo"/>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-cyan-400 font-black italic tracking-tighter text-xl pointer-events-auto">NUBO</span>
        </div>

        <div className="flex items-center gap-2 relative z-10">
          <button className="flex items-center justify-center p-2 text-slate-400 hover:text-cyan-300 transition-colors active:opacity-80" onClick={onNotificationsClick}>
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      <div className="relative flex-1 w-full camera-bg flex flex-col overflow-hidden pt-16">
        <div className="px-10 pt-12 text-center z-10">
          <h1 className="text-white text-xl font-bold tracking-tight mb-2">Escanear QR</h1>
          <p className="text-slate-300/90 text-sm font-medium leading-relaxed">Alineá el código QR del local dentro del marco para sumar puntos Nubo</p>
        </div>

        <div className="flex-1 flex items-center justify-center p-8 z-10">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute top-0 left-0 w-16 h-16 border-t-[3px] border-l-[3px] border-primary rounded-tl-2xl neon-glow"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-[3px] border-r-[3px] border-primary rounded-tr-2xl neon-glow"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-[3px] border-l-[3px] border-primary rounded-bl-2xl neon-glow"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-[3px] border-r-[3px] border-primary rounded-br-2xl neon-glow"></div>
            
            <div className="scanner-line"></div>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <span className="material-symbols-outlined text-primary scale-[5] animate-pulse">qr_code_scanner</span>
            </div>
            
            <div className="absolute -inset-4 border border-white/5 rounded-[2rem] pointer-events-none"></div>
          </div>
        </div>

        <div className="flex justify-center gap-16 pb-12 z-10">
          <button className="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
            <div className="size-14 rounded-full glass-panel flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(25,204,240,0.3)] transition-all">
              <span className="material-symbols-outlined text-white group-hover:text-primary">image</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 group-hover:text-slate-200">Galería</span>
          </button>
          <button className="flex flex-col items-center gap-2 group active:scale-95 transition-transform">
            <div className="size-14 rounded-full glass-panel flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(25,204,240,0.3)] transition-all">
              <span className="material-symbols-outlined text-white group-hover:text-primary">flashlight_on</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 group-hover:text-slate-200">Flash</span>
          </button>
        </div>

        <div className="glass-panel border-t border-primary/20 p-6 pb-24 space-y-5 relative z-10">
          <button onClick={onManualCodeClick} className="w-full bg-primary hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(25,204,240,0.4)] transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined font-bold">keyboard</span>
            <span className="uppercase tracking-wide text-sm">Ingresar código manual</span>
          </button>
          
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shadow-[inset_0_0_10px_rgba(25,204,240,0.2)]">
                <span className="material-symbols-outlined text-primary text-xl">stars</span>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Mi Balance</p>
                <p className="text-sm font-bold text-white">1,240 NB</p>
              </div>
            </div>
            <div className="h-8 w-[1px] bg-white/10"></div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Próximo Nivel</p>
              <div className="flex items-center gap-3">
                <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-primary shadow-[0_0_10px_rgba(25,204,240,0.8)]"></div>
                </div>
                <p className="text-sm font-bold text-white">Lvl 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
