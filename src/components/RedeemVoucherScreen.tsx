export function RedeemVoucherScreen({ onBack, onHome, onExplore, onScan, onPrizes, onRanking }: { onBack?: () => void, onHome?: () => void, onExplore?: () => void, onScan?: () => void, onPrizes?: () => void, onRanking?: () => void }) {
  return (
    <div className="bg-[#0a0a0a] text-slate-100 min-h-screen flex flex-col font-sans relative">
      {/* Header */}
      <header className="flex items-center justify-between p-6 sticky top-0 z-50">
        <button onClick={onBack} className="flex items-center justify-center w-10 h-10 rounded-full bg-[#00f2ff]/10 text-[#00f2ff]">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold uppercase tracking-widest">Canjear Voucher</h1>
        <div className="w-10"></div> {/* Spacer for centering */}
      </header>
      
      <main className="flex-1 px-6 pb-32 max-w-md mx-auto w-full">
        {/* Redemption Ticket Container */}
        <div className="relative mt-4">
          {/* QR Card */}
          <div className="bg-gradient-to-br from-[#ffffff] to-[#f0f0f0] rounded-xl p-8 flex flex-col items-center shadow-[0_0_40px_rgba(0,242,255,0.1)] relative">
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#0a0a0a] rounded-full z-10"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#0a0a0a] rounded-full z-10"></div>
            
            <div className="w-full aspect-square bg-white p-4 rounded-lg shadow-inner mb-6 flex items-center justify-center border-4 border-slate-100">
              <img alt="Código QR de validación" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQtqlkZrV10V9qkJ4WJec9rq1wrQfRyHMJWHBxiRxwE_yhelhk7wL4MT62EzrH1Qr9d_nY6rQ3SKQ7vUdr_6dIA1AJ5U5CDd0HOJgvuXT2KM6Q8fylEibDPGEv-LboBm61Hiy730H70r9iJ7PQ1ARGhhls8jJVcaiw-ZY3SFAB1J7pvlll_j3_uOtzgkTLpSjJp5arTpVKP4dXFAcSoxaoCWzdEz19RSGtrSwI6Yj0VHtmde0j3HxUxMTwO62yplsdAujMmASjtic"/>
            </div>
            <div className="text-center space-y-1">
              <p className="text-slate-500 text-xs font-medium uppercase tracking-[0.2em]">Código de respaldo</p>
              <p className="text-slate-900 text-4xl font-bold tracking-[0.4em] ml-[0.4em]">8 4 2 1</p>
            </div>
          </div>
          
          {/* Instruction & Divider */}
          <div className="bg-[#00f2ff]/5 rounded-b-xl px-8 pt-10 pb-8 -mt-3 border-t-2 border-dashed border-[#00f2ff]/20">
            <p className="text-center text-slate-300 text-sm leading-relaxed mb-8">
              Mostrá este código al encargado para validar tu beneficio
            </p>
            
            {/* Merchant Info */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="w-14 h-14 rounded-full bg-[#f4c025]/20 flex items-center justify-center overflow-hidden shrink-0 border-2 border-[#f4c025]">
                <img alt="Logo Café Central" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCiw8YPI2jRwHtlQxuNPlv6H6h6Jl3iR7uJOnIMAAT1CYrsvfLBjUueSKV3bbtAyqwJI-t7o3lJ-i4XRxZax78CyijqghOw8g3E13_Qr0L7RLGWR_LuXXGOgFcnzdA71FmcY8qqEx2UrrosXY6dms_sWA7wi50JF1xABkXE1O3NkjAhySNHadxkMIi0CfyS9yDv4rIs-X5z4iwqXDRczCbW2sNXdYkwkEjxDkefWVqY1NjkqWXpFVI1VxEYOPpa-6sZvvel4wkxpc"/>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg leading-tight">Café Central</h3>
                <p className="text-[#f4c025] font-medium text-sm">2x1 en Americano</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="material-symbols-outlined text-[#f4c025]">verified</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Expiration Timer */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Este código expira en</p>
          <div className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#00f2ff]/5 rounded-xl flex items-center justify-center border border-[#00f2ff]/20">
                <span className="text-2xl font-bold text-[#00f2ff]">14</span>
              </div>
              <span className="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-tighter">Minutos</span>
            </div>
            <div className="flex items-center text-2xl font-bold text-[#00f2ff] pb-6">:</div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#00f2ff]/5 rounded-xl flex items-center justify-center border border-[#00f2ff]/20">
                <span className="text-2xl font-bold text-[#00f2ff]">59</span>
              </div>
              <span className="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-tighter">Segundos</span>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation Bar */}


      {/* Anti-fraud Background Element */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-[-1] overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00f2ff] rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-wrap gap-12 rotate-12">
          <span className="text-8xl font-bold whitespace-nowrap text-[#00f2ff]">NUBO NUBO NUBO NUBO</span>
          <span className="text-8xl font-bold whitespace-nowrap text-[#00f2ff]">NUBO NUBO NUBO NUBO</span>
          <span className="text-8xl font-bold whitespace-nowrap text-[#00f2ff]">NUBO NUBO NUBO NUBO</span>
        </div>
      </div>
    </div>
  );
}
