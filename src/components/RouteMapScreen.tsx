import { useState } from 'react';

export function RouteMapScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="bg-[#090f11] font-sans text-slate-100 relative overflow-hidden flex flex-col w-full lg:max-w-md lg:mx-auto lg:border-x lg:border-white/10">
      
      {/* Header Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#090f11] via-[#090f11]/80 to-transparent flex items-center p-4 justify-between w-full pt-6 pb-10 pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <button onClick={onBack} className="flex size-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-white z-10">arrow_back</span>
          </button>
          <h1 className="text-white text-lg font-bold tracking-tight drop-shadow-md">Mapa de la Ruta</h1>
        </div>
        <div className="flex gap-2 pointer-events-auto">
          <button className="flex size-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-[#19ccf0]/20 hover:text-[#19ccf0] transition-colors group">
            <span className="material-symbols-outlined text-white group-hover:text-[#19ccf0] text-[20px] transition-all">my_location</span>
          </button>
        </div>
      </div>

      {/* Map Content - Mocked with a background image or styled div */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[#0a1112]" style={{ backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=-34.6037,-58.3816&zoom=14&size=600x800&maptype=roadmap&style=feature:all|element:geometry.fill|color:0x0c1417&style=feature:all|element:labels.text.fill|color:0x8ec3b9&style=feature:all|element:labels.text.stroke|color:0x1a3646&style=feature:administrative.country|element:geometry.stroke|color:0x4b6878&style=feature:administrative.land_parcel|element:labels.text.fill|color:0x64779e&style=feature:administrative.province|element:geometry.stroke|color:0x4b6878&style=feature:landscape.man_made|element:geometry.fill|color:0x090f11&style=feature:landscape.natural|element:geometry|color:0x020a0d&style=feature:poi|element:geometry|color:0x283d41&style=feature:poi|element:labels.text.fill|color:0x6f9ba5&style=feature:poi|element:labels.text.stroke|color:0x1d2c4d&style=feature:poi.park|element:geometry.fill|color:0x021217&style=feature:poi.park|element:labels.text.fill|color:0x3C7680&style=feature:road|element:geometry|color:0x304a7d&style=feature:road|element:labels.text.fill|color:0x98a5be&style=feature:road|element:labels.text.stroke|color:0x1d2c4d&style=feature:road.highway|element:geometry|color:0x2c6675&style=feature:road.highway|element:geometry.stroke|color:0x255763&style=feature:road.highway|element:labels.text.fill|color:0xb0d5ce&style=feature:road.highway|element:labels.text.stroke|color:0x023e58&style=feature:transit|element:labels.text.fill|color:0x98a5be&style=feature:transit|element:labels.text.stroke|color:0x1d2c4d&style=feature:transit.line|element:geometry.fill|color:0x283d41&style=feature:transit.station|element:geometry|color:0x3a4762&style=feature:water|element:geometry|color:0x0e1626&style=feature:water|element:labels.text.fill|color:0x4e6d70&key=NO_KEY')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.6 }}></div>
      </div>

      {/* Overlays / Markers */}
      <div className="absolute inset-0 z-10 pointer-events-none">
         {/* Route Line SVG Component */}
         <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 8px rgba(25,204,240,0.6))' }}>
           <path d="M120,400 Q150,300 200,320 T280,200 T180,120" fill="none" stroke="#19ccf0" strokeWidth="4" strokeDasharray="8 8" />
         </svg>

         {/* Marker 1 - Completed */}
         <div className="absolute top-[400px] left-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-auto group cursor-pointer">
            <div className="relative">
               <div className="absolute -inset-3 bg-[#19ccf0]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="size-10 bg-[#1c2528] rounded-full border-2 border-[#19ccf0] flex items-center justify-center shadow-[0_0_15px_rgba(25,204,240,0.5)]">
                 <img alt="Moka Lab Urban" className="size-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-pRnjKykyN1WJrrG7IYqBEqAsTNzXqgbzu--mFhwoldjt5tu60Hb0oVee22lAvjAoVkgYTlOv8kuZhIPzNq6abxnSHcHUiuxxaIEGzSfQeaziflX14zHabYEY4pznk7RUEwYFGcVCGejJBTz54kEccRdxeLpHtSzp1A4-xJwis6jyQpcl6UqTy28-fM-2KJffZyD1W5s47m7Tc0zUBHVd2NwMSi0sfa_UsZuHOEuow-KrqhmT2XTnzLwFSdwse_bM-D3opMa8kqM"/>
               </div>
               <div className="absolute -top-1 -right-1 size-4 bg-[#19ccf0] rounded-full flex items-center justify-center border border-[#1c2528]">
                 <span className="material-symbols-outlined text-[#090f11] text-[10px] font-bold">check</span>
               </div>
            </div>
         </div>

         {/* Marker 2 - Completed */}
         <div className="absolute top-[320px] left-[200px] -translate-x-1/2 -translate-y-1/2 pointer-events-auto group cursor-pointer">
            <div className="relative">
               <div className="size-10 bg-[#1c2528] rounded-full border-2 border-[#19ccf0] flex items-center justify-center shadow-[0_0_15px_rgba(25,204,240,0.5)]">
                 <img alt="Syphon Soul" className="size-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcwYR8_Nx_amUBpcUZU4vLayUkrLVr-4HywZNjeoSU8zqHeC7vdxhIgkfG5z_R5Pkk_wCmcCDAr9llWVf8XVpRpmSPbaPkdpnIhGuo1YzaxsriZNWoY-tqxbS5yum1AnJ1cNvQxz6kg52zrcetS-ZFYenQ-WQGTdyIadOOnfA7fAstQi6lAia5CzZbfliIgkQtwc5gskIzzx2ER_rBAD7kLmzxgzyK-074ETSR_aEubA1uN56Uj8E2PZ58xvdnAjicTQIkpL_PnUE"/>
               </div>
               <div className="absolute -top-1 -right-1 size-4 bg-[#19ccf0] rounded-full flex items-center justify-center border border-[#1c2528]">
                 <span className="material-symbols-outlined text-[#090f11] text-[10px] font-bold">check</span>
               </div>
            </div>
         </div>

         {/* Marker 3 - Current */}
         <div className="absolute top-[200px] left-[280px] -translate-x-1/2 -translate-y-1/2 pointer-events-auto group cursor-pointer z-20">
            <div className="absolute -inset-4 bg-[#19ccf0]/30 rounded-full blur-xl animate-pulse"></div>
            <div className="relative isolate shadow-[0_0_25px_rgba(25,204,240,0.8)] rounded-full">
               <div className="size-14 bg-[#1c2528] rounded-full border-[3px] border-[#19ccf0] flex items-center justify-center p-0.5 relative z-10">
                 <img alt="Brew & Co" className="size-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOWITQJuLdxyTP72LJJpubtpmEubO8P-MfSyBU39xkUTu34IYUiHp4YYyPWPEZjB3PcHccmZGzLo0hJoY0E5KTAzT1blpFnLqeuZPP-I9bB1ULl6UvpHU_qG-0J1XR-pCmJD8hNUwNCvL0T053pbrYQDORvbDPRG7x-_9bMDnHmcrRj1XfR14Dhh-3f2u-nlo8agJsXM6IyJAfkHOB77ok2b4KV3OnkcGuuNnnYO2bOUTeu1Cwo1d-yhy35aHtOrbrk0f3jTZaAo0"/>
               </div>
               {/* Label info card */}
               <div className="absolute top-1/2 left-full ml-3 -translate-y-1/2 bg-[#1c2528] border border-[#19ccf0]/40 rounded-xl p-2 w-32 shadow-xl whitespace-nowrap z-20">
                  <p className="text-white font-bold text-xs truncate">Brew & Co.</p>
                  <p className="text-[#19ccf0] text-[9px] font-black uppercase tracking-widest mt-0.5 shadow-sm">Posta Actual</p>
                  <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#1c2528] border-l border-b border-[#19ccf0]/40 rotate-45"></div>
               </div>
            </div>
         </div>

         {/* Marker 4 - Future Route */}
         <div className="absolute top-[120px] left-[180px] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <div className="relative opacity-60">
               <div className="size-10 bg-[#090f11] rounded-full border-2 border-white/20 flex items-center justify-center shadow-lg">
                 <span className="material-symbols-outlined text-slate-500 text-lg">local_cafe</span>
               </div>
               <div className="absolute -top-1 -right-1 bg-[#1c2528] rounded-full flex items-center justify-center border border-white/20 size-4">
                 <span className="material-symbols-outlined text-slate-500 text-[10px]">lock</span>
               </div>
            </div>
         </div>
      </div>

      {/* Floating Panel Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-50 pointer-events-auto bg-gradient-to-t from-[#090f11] via-[#090f11]/95 to-transparent pt-12 pb-8 px-6">
         <div className="bg-[#161d1f]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex gap-4 items-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="size-16 rounded-xl overflow-hidden shadow-md flex-shrink-0 relative">
               <img alt="Brew & Co" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOWITQJuLdxyTP72LJJpubtpmEubO8P-MfSyBU39xkUTu34IYUiHp4YYyPWPEZjB3PcHccmZGzLo0hJoY0E5KTAzT1blpFnLqeuZPP-I9bB1ULl6UvpHU_qG-0J1XR-pCmJD8hNUwNCvL0T053pbrYQDORvbDPRG7x-_9bMDnHmcrRj1XfR14Dhh-3f2u-nlo8agJsXM6IyJAfkHOB77ok2b4KV3OnkcGuuNnnYO2bOUTeu1Cwo1d-yhy35aHtOrbrk0f3jTZaAo0"/>
            </div>
            <div className="flex-1">
               <div className="flex flex-col">
                 <span className="text-[#19ccf0] text-[9px] font-black uppercase tracking-widest mb-0.5 drop-shadow">Posta 3 de 5</span>
                 <h3 className="text-white font-bold text-lg leading-tight">Brew & Co.</h3>
                 <p className="text-slate-400 text-xs mt-1">A 2.5km de tu ubicación</p>
               </div>
            </div>
         </div>
         <button className="w-full mt-4 bg-[#19ccf0] text-[#090f11] rounded-2xl font-black text-sm uppercase py-4 shadow-[0_0_20px_rgba(25,204,240,0.4)] flex items-center justify-center gap-2 hover:bg-[#19ccf0]/90 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>directions</span>
            Cómo Llegar
         </button>
      </div>

    </div>
  );
}
