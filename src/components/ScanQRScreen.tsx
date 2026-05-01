import { Scanner } from '@yudiel/react-qr-scanner';

export function ScanQRScreen({ onProfileClick, onNotificationsClick, onManualCodeClick, onValidate }: { onProfileClick?: () => void, onNotificationsClick?: () => void, onManualCodeClick?: () => void, onValidate?: () => void }) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full lg:max-w-md lg:mx-auto bg-slate-950/60 backdrop-blur-md border-b border-white/10 shadow-lg flex justify-between items-center px-6 h-16 z-50">
        <div className="flex items-center gap-3 relative z-10 cursor-pointer" onClick={onProfileClick}>
          <div className="size-8 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
            <img alt="User profile photo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTII5ffbQzVA1WO03jYF1oQ_p1wdZND-eI-Kap4mccxdDIckcaVWd9kJT4Zgcun8LVEhWIE_22l9RfcAM2L2iIoEhLSrUv9-iBFViV0-jlfJiGFtRqD4zh6kcAJm1PHc3D9OkhsECKjjEUVPR-G3-OLd3LP065MZDg9BkJ8YuHR11VrBAdL8--y_Djq-k0pwHzkhPDlb3TPsj-VEn_RuXQXj18qxKYCbl9PZXtI2yEmT7ZMxnXKuU4-YIkJR2pwSdfh50YxS0_Dyo"/>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img alt="NUBO" className="h-[42px] w-auto brightness-125 drop-shadow-[0_0_12px_rgba(67,221,226,0.6)] pointer-events-auto max-w-[70vw] object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0ujTO8OICi5dMqeWK-37zXjL6hSeOTulMvdrsKKR7Lv7fW8urGGZFy4hjQBQCW-bmlF-CYsXf4_O0ItQhwdM0ywSYtBX5yEVQNUNfY7zklBeOOxLw8wupr-o3Lf0Tu0agaQ2x5MT0tuSqiWXrkyFx_1fTiP7FwYTZTQvEuhfXtzMzEUTd3gPkulOP1Uqig7ZqBm7WpZN61bKigv5Qlb8FelxgNmMRRBpoA_yOhpNjTokkypSLIClOBqbZJwyiUC0I94KaJ2gE92bjw" />
        </div>

        <div className="flex items-center gap-2 relative z-10">
          <button className="flex items-center justify-center p-2 text-slate-400 hover:text-cyan-300 transition-colors active:opacity-80" onClick={onNotificationsClick}>
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      <div className="relative flex-1 w-full bg-black flex flex-col overflow-hidden pt-16">
        <div className="px-10 pt-12 text-center z-10 relative bg-gradient-to-b from-black/80 to-transparent pb-4">
          <h1 className="text-white text-xl font-bold tracking-tight mb-2">Escanear QR</h1>
          <p className="text-slate-300/90 text-sm font-medium leading-relaxed">Alineá el código QR del local dentro del marco para sumar puntos Nubo</p>
        </div>

        <div className="flex-1 flex flex-col relative z-0">
          <Scanner 
            onScan={(result) => {
              if (result && result.length > 0) {
                if (onValidate) onValidate();
              }
            }}
            components={{
              onOff: false,
              torch: false,
              zoom: false,
              finder: false,
            }}
            styles={{
              container: { width: '100%', height: '100%' },
              video: { objectFit: 'cover' }
            }}
          />
          
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 shadow-[0_0_0_4000px_rgba(0,0,0,0.5)] rounded-3xl">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-[3px] border-l-[3px] border-primary rounded-tl-2xl neon-glow"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-[3px] border-r-[3px] border-primary rounded-tr-2xl neon-glow"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-[3px] border-l-[3px] border-primary rounded-bl-2xl neon-glow"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-[3px] border-r-[3px] border-primary rounded-br-2xl neon-glow"></div>
              
              <div className="scanner-line"></div>
            </div>
          </div>
        </div>

        <div className="glass-panel border-t border-primary/20 p-6 pb-24 space-y-5 relative z-10 bg-black/60 backdrop-blur-md">
          <button onClick={onManualCodeClick} className="w-full bg-primary hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(25,204,240,0.4)] transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined font-bold">keyboard</span>
            <span className="uppercase tracking-wide text-sm">Ingresar código manual</span>
          </button>
        </div>
      </div>
    </>
  );
}
