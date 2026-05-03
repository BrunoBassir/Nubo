import { Scanner } from '@yudiel/react-qr-scanner';
import { GlobalTopNavBar } from './GlobalTopNavBar';

export function ScanQRScreen({ onProfileClick, onNotificationsClick, onManualCodeClick, onValidate }: { onProfileClick?: () => void, onNotificationsClick?: () => void, onManualCodeClick?: () => void, onValidate?: () => void }) {
  return (
    <>
      <GlobalTopNavBar 
        onProfileClick={() => onProfileClick && onProfileClick()}
        onNotificationsClick={() => onNotificationsClick && onNotificationsClick()}
      />

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
