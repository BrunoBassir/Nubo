export function ChallengesScreen({ onBack, onCoffeeRouteClick, onChallengeClick }: { onBack?: () => void, onCoffeeRouteClick?: () => void, onChallengeClick?: () => void }) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col w-full lg:max-w-md lg:mx-auto">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-[#050B0D]/80 backdrop-blur-[20px] border-b border-slate-200 dark:border-[#00F2FF]/20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="flex items-center justify-center size-8 rounded-full bg-slate-200/50 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 transition-colors shrink-0">
             <span className="material-symbols-outlined text-sm">arrow_back</span>
          </button>
          <div>
            <h1 className="text-lg font-bold leading-none tracking-tight">Desafíos</h1>
            <p className="text-[10px] text-[#00F2FF]/70 font-bold uppercase tracking-widest">Nubo Cyber-Pulse</p>
          </div>
        </div>
        <div className="bg-[#00F2FF]/10 border border-[#00F2FF]/30 px-3 py-1.5 rounded-full flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00F2FF] text-sm font-bold">bolt</span>
          <span className="text-[#00F2FF] font-bold text-sm">1,250 XP</span>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pb-40">
        {/* Featured Challenge */}
        <section className="mt-6">
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-[#00F2FF]/30 shadow-[0_0_15px_rgba(0,242,255,0.3)]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBs5cd59liGweFlnfO3PrRFOPwoR3ghQHjqROvkCiCIvimUX9LwQ1Us7ysQMJJZYiGPxSDbVHyFx-Ku7bMR-THA_XBKHxTw4YEydZ8WBJZjkdq7B0iqFApkVEK_ZVPgeBwxhniKTuZmmvrTmfT2x7WQV3yfWuqNgAEh9XvrBoJCTaLNJKq3-kkxSNSD1-PysCyNZCm4SEsTjPi4HIuvorbnnbx_N8Lv7Tm66rvIAaSCPYWZn_QGS629Hk8kpG-pzLi4dvzfPAnX65k')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050B0D] via-[#050B0D]/40 to-transparent"></div>
            <div className="absolute top-4 left-4">
              <div className="bg-[#00F2FF] text-[#050B0D] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter flex items-center gap-1 shadow-lg shadow-[#00F2FF]/40">
                <span className="material-symbols-outlined text-xs">bolt</span>
                2x XP Activado
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-[#00F2FF] text-[10px] font-black mb-1 uppercase tracking-[0.2em] [text-shadow:0_0_10px_rgba(0,242,255,0.5)]">Desafío de la Semana</p>
              <h2 className="text-2xl font-bold text-white mb-2 leading-tight">Ruta Gastronómica Central</h2>
              <div className="flex items-center justify-between gap-4">
                <p className="text-slate-300 text-xs flex-1">Gana el doble de puntos visitando los mercados históricos esta semana.</p>
                <button onClick={onCoffeeRouteClick} className="bg-[#00F2FF] hover:bg-white text-[#050B0D] px-4 py-2 rounded-lg font-black text-xs transition-all whitespace-nowrap uppercase tracking-wider">
                  Ver
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Active Challenges Grid */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-xl font-bold tracking-tight">Desafíos Activos</h3>
            <span className="text-[#00F2FF] text-xs font-black tracking-widest uppercase">2 Activos</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <button onClick={onChallengeClick} className="bg-[#0D1619] border border-white/5 rounded-2xl p-3 flex flex-col gap-3 shadow-lg text-left transition-all duration-300 hover:scale-[1.03] hover:border-[#00F2FF]/40 hover:shadow-[0_0_20px_rgba(0,242,255,0.15)] group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#00F2FF]/0 via-transparent to-[#00F2FF]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="aspect-square rounded-xl bg-cover bg-center overflow-hidden relative border border-white/10">
                <div className="w-full h-full transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtmknKxfFmcGriApOdvMiNdmOAfDNH2B5DoWCmCv-cPni_d_LK4Du3r4VSnrrIJbHpXq3IbKZr-7ivym_pZ1yYkwMwwvJ7OOOzqBtFAjTxbo6fujRF8ASWN-E1PmxZaN8IvK-x6wSOS2u5NcVOJepkegvS7dVImw1Zpj1OGAUmB5sp9JDnIUXvcNWKBuccMubABApWZS_6khWk5xLnJOmmnUv-qVUAX2BYBz9EwzIdabSDhiSaisstqUgi6S15mF50R796Les4gY0')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="absolute inset-0 bg-[#050B0D]/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-2 right-2 bg-[#050B0D]/80 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] text-white font-black border border-white/20 group-hover:border-[#00F2FF]/50 transition-colors">2/5</div>
              </div>
              <div className="relative z-10">
                <h4 className="font-bold text-sm truncate text-white group-hover:text-[#00F2FF] transition-colors">Ruta del Café</h4>
                <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider group-hover:text-slate-400 transition-colors">Expira en 2 días</p>
              </div>
              <div className="mt-auto pt-2 relative z-10">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00F2FF] rounded-full shadow-[0_0_8px_rgba(0,242,255,0.6)] group-hover:shadow-[0_0_12px_rgba(0,242,255,0.9)] transition-shadow" style={{ width: '40%' }}></div>
                </div>
                <p className="text-[9px] font-black text-[#00F2FF] mt-2 uppercase tracking-widest text-shadow-[0_0_5px_rgba(0,242,255,0.3)]">40% completado</p>
              </div>
            </button>

            {/* Card 2 */}
            <button onClick={onChallengeClick} className="bg-[#0D1619] border border-white/5 rounded-2xl p-3 flex flex-col gap-3 shadow-lg text-left transition-all duration-300 hover:scale-[1.03] hover:border-[#00F2FF]/40 hover:shadow-[0_0_20px_rgba(0,242,255,0.15)] group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#00F2FF]/0 via-transparent to-[#00F2FF]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="aspect-square rounded-xl bg-cover bg-center overflow-hidden relative border border-white/10">
                <div className="w-full h-full transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJsH75Mxn3q8rSehmHhLHh15fY93QYRcbHTzWwuxVC3GE_oDFWolw0twT-TONUwTE9xPCviHDGnXCTzY2wVrZdXfyItICrW8angsHGFdhQFEgvmPyfUvuK3rkzRdkrXB94obx651Gt4CN-mYSFFAUqOUqzqVmgBIuNmB0fqfbX5C1x9ls5ij6bXi80h92Xwtoi97NNcexd6kgCjEX9OoPsyuYfqwnfqH4fiVZM4vkzRgDDLmhyLMq6EF6mKrkNZpNRttGkstIbPgM')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="absolute inset-0 bg-[#050B0D]/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-2 right-2 bg-[#050B0D]/80 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] text-white font-black border border-white/20 group-hover:border-[#00F2FF]/50 transition-colors">1/3</div>
              </div>
              <div className="relative z-10">
                <h4 className="font-bold text-sm truncate text-white group-hover:text-[#00F2FF] transition-colors">Museos de Domingo</h4>
                <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider group-hover:text-slate-400 transition-colors">Fin de semana</p>
              </div>
              <div className="mt-auto pt-2 relative z-10">
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00F2FF] rounded-full shadow-[0_0_8px_rgba(0,242,255,0.6)] group-hover:shadow-[0_0_12px_rgba(0,242,255,0.9)] transition-shadow" style={{ width: '33%' }}></div>
                </div>
                <p className="text-[9px] font-black text-[#00F2FF] mt-2 uppercase tracking-widest text-shadow-[0_0_5px_rgba(0,242,255,0.3)]">33% completado</p>
              </div>
            </button>
          </div>
        </section>

        {/* Locked / Upcoming Challenges */}
        <section className="mt-10 mb-8">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-xl font-bold opacity-40">Bloqueados</h3>
            <span className="material-symbols-outlined text-slate-600 text-xl">lock</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Locked 1 */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-3 flex flex-col gap-3 grayscale opacity-40">
              <div className="aspect-square rounded-xl bg-cover bg-center overflow-hidden relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAm6rDcMLBpSVSJ6QdYQtcKZTNvOg1-OTsV60IF13QhJgHEfAZ16_1_fhISdiKK5GZDdNtMuCoc9OqEUQnNK7JL8k8_2xrfuIB7FyDT5D07U7cD0ujAetol6XYC4kExxuEuxEPawXMn0tfSB2ibIOgRnrvG-71k5Ak0IuiREH3pg-lbccyfi-QIJ8H2c177RKLxug4B93gCp5TOs0MVBMUbyxdtOtyJXldbxle_NB2dTFACLcuMAsuFZ1ofqjiDV85Fk5efBRRSUVU')" }}>
                <div className="absolute inset-0 bg-[#050B0D]/60 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white/50 text-3xl">lock</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-sm truncate text-slate-500">Noche de Hoteles</h4>
                <div className="mt-2">
                  <span className="text-[8px] font-black bg-white/10 text-slate-400 px-2 py-0.5 rounded uppercase tracking-widest">Bloqueado</span>
                </div>
              </div>
            </div>

            {/* Upcoming 2 */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-3 flex flex-col gap-3 grayscale opacity-40">
              <div className="aspect-square rounded-xl bg-cover bg-center overflow-hidden relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxzEkFWyBP3MIeB8yxFv2KUc2TYjxH9dtUHh62YVWgEkVUQi7rE8Ccpk7Z86fUrAVHSaNLM8PxxdtwyveAkHnm959VkPrXQupKZ4fEdGaXtbt7WyJH-OkS75AkngrNnTHvPQolHrFKCqZtBmcofFWEn_n0P93UlmfJnwZvGFc8f-v_F_7oGrbG1gpCuAw5fqDonl1bUaPPiAFk7xg7o6Pwpggp8J2Bom9-QfF35QgCG6rs4j31VM6N_LlpXGQva-UdkXS5PFAxAkA')" }}>
                <div className="absolute inset-0 bg-[#050B0D]/60 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white/50 text-3xl">calendar_today</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-sm truncate text-slate-500">Tour Monumentos</h4>
                <div className="mt-2">
                  <span className="text-[8px] font-black bg-[#00F2FF]/10 text-[#00F2FF]/50 px-2 py-0.5 rounded uppercase tracking-widest">Próximamente</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
