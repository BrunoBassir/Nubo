import { useState } from 'react';

export function RankingPrizeDetailScreen({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'info' | 'ganadores'>('info');

  return (
    <div className="bg-background-dark font-display text-slate-100 min-h-screen flex flex-col relative w-full lg:max-w-md lg:mx-auto lg:border-x lg:border-white/10">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-40 px-4 py-4 flex items-center justify-between">
        <button onClick={onBack} className="flex size-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white z-10">arrow_back</span>
        </button>
        <div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1">
           <span className="material-symbols-outlined text-cyber-cyan text-sm">schedule</span>
           <span className="text-xs font-bold text-white">Termina en 2d 14h</span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative w-full aspect-square">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdYNx9pwwW-UmDiF0DbrVPm3Y-xTg3vNkYr4C6c7uad8JxNJEhz5524LGhXZrYMmnPb7AfWfPEjRjwHEvMWfJ793v7-6GyGNzzpFOBWd3JTM7SFhwfOIzUhnE_pXKnxOL5lubwmxtoTF8M5tVCZMYlMAwIrDT98a0Vul51l9juAbtxWwadFQEOCmUaIHE-mPjD2fb17e1F7Zvcy9rX5S-ZDjfqdeWVSOC7MGxcCbvsf8i5Try1lPo-IWylaDBrSuoTvDZypFPJ7Ow')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-cyber-cyan text-background-dark font-black text-xs px-3 py-1.5 rounded-full uppercase tracking-widest inline-flex items-center gap-1 mb-3">
             <span className="material-symbols-outlined text-[14px]">workspace_premium</span>
             1º Puesto Semanal
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">Noches de Hotel</h1>
          <p className="text-lg text-slate-300 font-medium">Estancia de lujo 5 estrellas en Costa Nubo</p>
        </div>
      </div>

      <div className="flex-1 bg-background-dark px-6 pb-24 -mt-2 relative z-20 rounded-t-3xl border-t border-white/10 pt-6">
         {/* Tabs */}
         <div className="flex p-1 bg-white/5 rounded-xl border border-white/10 mb-6">
            <button 
              onClick={() => setActiveTab('info')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'info' ? 'bg-cyber-cyan text-background-dark shadow-[0_0_15px_rgba(25,204,240,0.3)]' : 'text-slate-400 hover:text-white'}`}
            >
              Info del Premio
            </button>
            <button 
              onClick={() => setActiveTab('ganadores')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${activeTab === 'ganadores' ? 'bg-cyber-cyan text-background-dark shadow-[0_0_15px_rgba(25,204,240,0.3)]' : 'text-slate-400 hover:text-white'}`}
            >
              Top Aspirantes
            </button>
         </div>

         {activeTab === 'info' && (
            <div className="space-y-6">
               <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-4">¿Qué incluye?</h3>
                  <ul className="space-y-3">
                     <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-cyber-cyan mt-0.5">check_circle</span>
                        <p className="text-sm text-slate-200">2 Noches de alojamiento en Suite Premium.</p>
                     </li>
                     <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-cyber-cyan mt-0.5">check_circle</span>
                        <p className="text-sm text-slate-200">Desayuno buffet incluido para 2 personas.</p>
                     </li>
                     <li className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-cyber-cyan mt-0.5">check_circle</span>
                        <p className="text-sm text-slate-200">Acceso libre al Spa & Wellness Center.</p>
                     </li>
                  </ul>
               </div>

               <div>
                  <h3 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-3">Términos y Condiciones</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                     El premio es válido por 6 meses a partir del momento de la obtención. Sujeto a disponibilidad y reserva previa mínima de 15 días. No transferible, no canjeable por dinero.
                  </p>
               </div>
            </div>
         )}

         {activeTab === 'ganadores' && (
            <div className="space-y-4">
               <p className="text-sm text-slate-400 mb-2">Estos son los usuarios que actualmente compiten por este premio:</p>
               {/* 1st Place Simulator */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-cyber-cyan/50 bg-cyber-cyan/5">
                <span className="font-black text-cyber-cyan w-6 text-xl italic">1</span>
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-cyber-cyan relative">
                  <img className="w-full h-full object-cover" data-alt="User profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkvn5EprZfnMf8lgM1_bJMERUfwILe3H3v3m3L0jEsrZcEpmvpIrrgA795ERmgfOU5UckSwYSgmHFkXHMjzBIEzngXnwaBsgQVzoW_ZWVLqnjL6nC7jNDzh_IbQyunfjgpvzt0kGEk9S8S2B_Ig8LndFxMFMm7BNmv4wPl6ltwhSx5EWRH_sdxCiUFmIQ_8lRAluVGByrvMPtAR5ll89hUAAgMTEts7xsmMMqz4YT_KFzyLQMHQBNGGfMxrX0RoMQjrpbhRC216Ts"/>
                  <div className="absolute -bottom-1 -right-1 bg-cyber-cyan text-background-dark w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-black">
                     <span className="material-symbols-outlined text-[10px]">star</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-base text-white">Elena_Urban</p>
                  <p className="text-[11px] uppercase font-bold text-slate-500 tracking-wider">Liderando</p>
                </div>
                <div className="text-right">
                  <p className="font-black text-cyber-cyan text-xl">14.200</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">PTS</p>
                </div>
              </div>

               {/* 2nd Place Simulator */}
              <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 opacity-80">
                <span className="font-bold text-slate-400 w-6 text-lg">2</span>
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
                  <img className="w-full h-full object-cover" data-alt="User profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkAcXzxbRcvkRviMnUJ1UxsjzdoEfzWE5VLz2CLHumo-r7shC0gICmh065O-yCXEwQ07_xXe2_m-Qk0yl57Nofx1x_Pv4DiF2ycPghgxr98FwN2xdp2O6l42zr6V-UciJvIlB4MnNXnHfAbWxzxRRDJGL1g3a33AdLlH9QUca4gI-neCOW-CSliGPbiIlpJ5n7qth4kR5muk3ElUN1b5-p1AdYQjRfJuCOQO_RrrMdYQa6PFQmX9xhmKVH68piYZzO0XAtR6hQnOw"/>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm text-slate-200">Santi_G</p>
                   <p className="text-[10px] text-slate-500">A 1,750 pts del 1º</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-300 text-lg">12.450</p>
                </div>
              </div>
               
               {/* Current User Simulator */}
               <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 opacity-60">
                <span className="font-bold text-slate-500 w-6 text-sm">142</span>
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
                  <img className="w-full h-full object-cover" data-alt="User profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN5NitYRUNw9IB_S0I-vKHdjYhZYO__YqrLV3N7KcWSlwnxY8oyzaPZIEsiTPJZrUdvD-evUdcMSm8Fih9D5TX75c1b-jnDsoi_c4oecoIHLc6PIw5wam4WtskO3XULd52Mtnk2mozxyjYjZM-qczEEy2Lf1GB-HBfQf4xP3IhuD74CaL7VnwgrfW1H0rrh5eJeBFCoi7wTZch6qL9QO7wkZMfBHQ-PbQ5zn-gM2xlki7XVteaKRdTVV0mnrMVoKa1HO3wA2RjBls"/>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sm text-slate-300">Tú</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-400 text-base">1.250</p>
                </div>
              </div>
            </div>
         )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 lg:max-w-md lg:mx-auto p-4 bg-gradient-to-t from-background-dark via-background-dark to-transparent pt-12 pb-8">
         <button className="w-full bg-cyber-cyan text-background-dark font-extrabold uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(25,204,240,0.4)] active:scale-95 transition-transform">
            <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>add_location</span>
            Sumar Puntos para Ganar
         </button>
      </div>

    </div>
  );
}
