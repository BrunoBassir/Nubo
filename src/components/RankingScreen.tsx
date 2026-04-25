import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function RankingScreen({ onReferidosClick, onWeeklyPrizeClick }: { onReferidosClick?: () => void, onWeeklyPrizeClick?: () => void }) {
  const [rankingTab, setRankingTab] = useState<'global' | 'semanal' | 'clubes' | 'referidos'>('global');

  return (
    <>
      {/* Header Section */}
      <div className="sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 pt-4 pb-4 lg:max-w-md lg:mx-auto w-full">
        {/* Toggle Switcher - Extended */}
        <div className="flex bg-slate-200 dark:bg-white/5 p-1 rounded-full w-full border border-slate-300 dark:border-white/10 mb-2 overflow-x-auto hide-scrollbar gap-0.5">
          <button 
            onClick={() => setRankingTab('global')}
            className={`flex-1 min-w-0 px-1.5 py-1.5 whitespace-nowrap rounded-full text-[10px] transition-all flex items-center justify-center gap-1 ${rankingTab === 'global' ? 'bg-white dark:bg-cyber-cyan text-slate-900 dark:text-background-dark font-bold neon-glow shadow-md' : 'text-slate-500 dark:text-slate-400 font-medium hover:text-white border border-transparent'}`}
          >
            <span className="material-symbols-outlined text-[13px]">public</span> Global
          </button>
          <button 
            onClick={() => setRankingTab('semanal')}
            className={`flex-1 min-w-0 px-1.5 py-1.5 whitespace-nowrap rounded-full text-[10px] transition-all flex items-center justify-center gap-1 ${rankingTab === 'semanal' ? 'bg-white dark:bg-cyber-cyan text-slate-900 dark:text-background-dark font-bold neon-glow shadow-md' : 'text-slate-500 dark:text-slate-400 font-medium hover:text-white border border-transparent'}`}
          >
            <span className="material-symbols-outlined text-[13px]">calendar_month</span> Semanal
          </button>
          <button 
            onClick={() => setRankingTab('clubes')}
            className={`flex-1 min-w-0 px-1.5 py-1.5 whitespace-nowrap rounded-full text-[10px] transition-all flex items-center justify-center gap-1 ${rankingTab === 'clubes' ? 'bg-white dark:bg-cyber-cyan text-slate-900 dark:text-background-dark font-bold neon-glow shadow-md' : 'text-slate-500 dark:text-slate-400 font-medium hover:text-white border border-transparent'}`}
          >
            <span className="material-symbols-outlined text-[13px]">groups</span> Clubes
          </button>
          <button 
            onClick={() => setRankingTab('referidos')}
            className={`flex-1 min-w-0 px-1.5 py-1.5 whitespace-nowrap rounded-full text-[10px] transition-all flex items-center justify-center gap-1 ${rankingTab === 'referidos' ? 'bg-white dark:bg-cyber-cyan text-slate-900 dark:text-background-dark font-bold neon-glow shadow-md' : 'text-slate-500 dark:text-slate-400 font-medium hover:text-white border border-transparent'}`}
          >
             <span className="material-symbols-outlined text-[13px]">person_add</span> Referidos
          </button>
        </div>
      </div>
      
      <main className="flex-1 px-4 pb-40 overflow-hidden relative">
        <AnimatePresence mode="wait">
        <motion.div
           key={rankingTab}
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -20 }}
           transition={{ duration: 0.2 }}
        >
        {rankingTab === 'global' && (
          <div>
            {/* Top 3 Podium Section */}
            <section className="podium-gradient relative py-8 flex items-end justify-center gap-4 mb-8">
          {/* Rank 2 */}
          <motion.div 
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.1, type: "spring" }}
             className="flex flex-col items-center gap-2 mb-4"
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-2 border-slate-400 overflow-hidden bg-slate-800 shadow-lg">
                <img className="w-full h-full object-cover" data-alt="Avatar of user ranked second" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ-nzBXCGN49zSpXo3hAah1x9X6WEJuLKqpCsCG634ELEay4bbfwpXXT0ckasrczQNU_4Jb9WgwypuWDSet8L7Zuu_8xoFoqTFMLrIbduCpeU3_y5NOsJ6-9Uiqwb1Ei-szsX6c2PxbskGD-AUaEyl8OiClKMAlcKflu7sfZ9RPJBMkGqT096DCV6-Xe45c1okClsv4PlOcgcO6JFpvwO9DYIJ3wknkB5r04OaEEb3EP8g-1y9IbvVJDZazpM7_Efc4RLsqQ_i4Ac"/>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-400 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">2</div>
            </div>
            <div className="text-center">
              <p className="font-bold text-sm truncate w-20">@alex_nubo</p>
              <p className="text-cyber-cyan font-bold text-xs uppercase tracking-wider">2.5k pts</p>
            </div>
          </motion.div>
          
          {/* Rank 1 - Highlighted */}
          <motion.div 
             initial={{ y: 50, opacity: 0, scale: 0.8 }}
             animate={{ y: 0, opacity: 1, scale: 1 }}
             transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
             className="flex flex-col items-center gap-3 z-10"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-cyber-cyan rounded-full blur-md opacity-30 animate-pulse"></div>
              <div className="relative w-28 h-28 rounded-full border-4 border-cyber-cyan overflow-hidden bg-slate-800 shadow-xl neon-glow">
                <img className="w-full h-full object-cover" data-alt="Avatar of user ranked first" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpbi3FzQy-YbCT8262IsUBIUwoZJYcn8bsJVPRoEFRMkAOH8kXMUGMSzPQ662aN_4ACzSTrTMVV-jEwDhFJl1oB-PrC3UcJLnguTamAqUWMWO89byi92QznpSVr56iebaTz1WCBR2580IkAycZu9gfeGBuEHaBUcKQkmyAmVpxQjE9PjEWoVje-QXciuVlmeKsUsdgNl09-KyH7-SydGAAFlhTmQUzhDntSPz8HWm-e2asCiv-f0CEXXKR-2F3YcW9ZrCqS--hdwM"/>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-cyber-cyan text-background-dark font-black rounded-full w-8 h-8 flex items-center justify-center text-sm shadow-lg">1</div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-cyber-cyan drop-shadow-[0_0_5px_rgba(25,204,240,0.8)]">
                <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1", fontSize: "32px" }}>workspace_premium</span>
              </div>
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">@crypto_king</p>
              <p className="text-cyber-cyan font-black text-sm uppercase tracking-widest">3.8k pts</p>
            </div>
          </motion.div>
          
          {/* Rank 3 */}
          <motion.div 
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.3, type: "spring" }}
             className="flex flex-col items-center gap-2 mb-4"
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-2 border-orange-700/50 overflow-hidden bg-slate-800 shadow-lg">
                <img className="w-full h-full object-cover" data-alt="Avatar of user ranked third" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeR_Cv-cJ_R6NUtXTnwdFWZgicNFx5TkubLFK3EPoHDlcZMrromrqBaVn4Sc5tIEmIsM7KPagOoOBi_CP-eJC1y3YEIP-vmwM70gPY3Vww6pOuDwWBZ2TudeUB7tWaw_NZxvro1vmbLXeXWxHlRkW_u5TPjeX5TBz3lwMHtqVagZwNJxZ9ODDS150wuaVxY4F4x2kg39-zpOSVbPBUfCG0xk4Y9DOFplCzaGxXldEtGG0q9eHBRr1AjQZhtH4VaUZM0jiWSeYuu0I"/>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-700 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">3</div>
            </div>
            <div className="text-center">
              <p className="font-bold text-sm truncate w-20">@urban_exp</p>
              <p className="text-cyber-cyan font-bold text-xs uppercase tracking-wider">1.9k pts</p>
            </div>
          </motion.div>
        </section>
        
        {/* Ranking List */}
        <div className="space-y-3">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 hover:border-cyber-cyan/30 hover:bg-cyber-cyan/5 cursor-pointer group hover:scale-[1.02]">
            <span className="font-bold text-slate-400 w-6 group-hover:text-cyber-cyan transition-colors">4</span>
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-cyber-cyan/50 transition-colors">
              <img className="w-full h-full object-cover" data-alt="User profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHAYijLp6123Vx2wEGJHh4asH9RHob_X5M1TsVH9gQADUZxbUQPYUo0HAW9phwJqlbmMunjx2KihE-GQFOaRBHrHh803tUwGPV4_CZxgAKT625NRAcIt7xk_INx_56G_Gg__wqSa02T5UuiE15mqDYPqG4BAwxtmKPfnq8ba4dQFn8Hr6OOn6VNtZft79le7NOSRKXPBsYNqdChMTRJSGREvAkqQjceadARRCpH3OeuxSQY2OAPZiD58OIDZ7gMKEQymt5xeP9vLM"/>
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm group-hover:text-cyber-cyan transition-colors">@meta_marcos</p>
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Visitó 42 lugares</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[11px] text-green-400 flex items-center gap-0.5 font-black">
                <span className="material-symbols-outlined text-base">arrow_drop_up</span> 2
              </span>
              <p className="font-bold text-cyber-cyan text-lg">1,740</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 hover:border-cyber-cyan/30 hover:bg-cyber-cyan/5 cursor-pointer group hover:scale-[1.02]">
            <span className="font-bold text-slate-400 w-6 group-hover:text-cyber-cyan transition-colors">5</span>
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-cyber-cyan/50 transition-colors">
              <img className="w-full h-full object-cover" data-alt="User profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNjBZjkFiNzDawKmekiTZfaVqh9kr2U07tphUg5xKEDkcDstcl10hisMNdKJlJJP40lQxqxFCk7ozo3hzAPk3kq8KBwsuZ-j0QqpMQ073oGvF_XadA6Jt3A5J2SEzqRED8u1uYpyYGtzsghHhks0GA7zuG_oNrKI3W8s99djhnBGwM4qXggRDEad3bw_ERtcv0pNbqALPLNOukvf3PmnxKgKYA_ImPYZWymypWynH8A9FU2yd7V5s1v8-GVCGtdAfzRavEH0wxI38"/>
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm group-hover:text-cyber-cyan transition-colors">@sofia_explorer</p>
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Visitó 38 lugares</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-slate-500 font-black">
                <span className="material-symbols-outlined text-lg">minimize</span>
              </span>
              <p className="font-bold text-cyber-cyan text-lg">1,620</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 hover:border-cyber-cyan/30 hover:bg-cyber-cyan/5 cursor-pointer group hover:scale-[1.02]">
            <span className="font-bold text-slate-400 w-6 group-hover:text-cyber-cyan transition-colors">6</span>
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-cyber-cyan/50 transition-colors">
              <img className="w-full h-full object-cover" data-alt="User profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn_QsQxY9aVirkIawXJV9doNc0Qqy1V8zaax5_W9qgclg7n8rrgNhTOos-owpqaD4jxW_xgKEz1ahs1b-foB8KgMUKOw6XNac32liv__MNHaGjv7n19XL5WfS-HflsSYE4LZ0Au14EcUYJaT2cFYo7TETCy8PPSM67Gq8n890hU7_fYloCw3K1CGwhU_hZkhqtiM5fKdhh1Onc5km_M6ifXfC4jnzPAb4yb26blQechWUPly7PcTwkO2cPf2rASWoV6XPVmnVJ2WY"/>
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm group-hover:text-cyber-cyan transition-colors">@javi_walks</p>
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Visitó 35 lugares</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[11px] text-red-400 flex items-center gap-0.5 font-black">
                <span className="material-symbols-outlined text-base">arrow_drop_down</span> 1
              </span>
              <p className="font-bold text-cyber-cyan text-lg">1,580</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 transition-all duration-300 hover:border-cyber-cyan/30 hover:bg-cyber-cyan/5 cursor-pointer group hover:scale-[1.02]">
            <span className="font-bold text-slate-400 w-6 group-hover:text-cyber-cyan transition-colors">7</span>
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-cyber-cyan/50 transition-colors">
              <img className="w-full h-full object-cover" data-alt="User profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyW_LHcuRlLdr1FMaCI6JmZkEZRm9PiA0fzVlncDJozMbT8pjtJJoJrEgq_4aXD2_a3EK3n3i5j8UMh6jN6WnL-pZKVMzaeNeGZTIa8t-Bnp4RiAAsBBIConhT3w_EKI7j-Bqg1MYNm4D3dQtJw_i-n0zWmKWoUdSJhpHY95ri8hrKz-JD_l6FH88iFngoZzx6bSMQffGAroSP8rx0qtZ3MsknAlwYTtigZNAQrwFvf8XAKX_8EbzbLbFC4_Old67xmut5HlKr400"/>
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm group-hover:text-cyber-cyan transition-colors">@laura_nubo</p>
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Visitó 31 lugares</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-cyber-cyan text-lg">1,490</p>
            </div>
          </div>
        </div>
        </div>
        )}

        {rankingTab === 'semanal' && (
          <div>
            {/* Countdown Timer Section */}
            <div className="py-6 text-center">
              <p className="text-cyber-cyan text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Termina en</p>
              <div className="flex justify-center gap-3">
                <div className="flex flex-col items-center">
                  <div className="bg-cyber-cyan/5 border border-cyber-cyan/40 rounded-xl w-14 h-14 flex items-center justify-center mb-1 neon-glow">
                    <span className="text-2xl font-bold text-cyber-cyan">02</span>
                  </div>
                  <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Días</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-cyber-cyan/5 border border-cyber-cyan/40 rounded-xl w-14 h-14 flex items-center justify-center mb-1 neon-glow">
                    <span className="text-2xl font-bold text-cyber-cyan">14</span>
                  </div>
                  <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Horas</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-cyber-cyan/5 border border-cyber-cyan/40 rounded-xl w-14 h-14 flex items-center justify-center mb-1 neon-glow">
                    <span className="text-2xl font-bold text-cyber-cyan">05</span>
                  </div>
                  <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Min</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-cyber-cyan/5 border border-cyber-cyan/40 rounded-xl w-14 h-14 flex items-center justify-center mb-1 neon-glow">
                    <span className="text-2xl font-bold text-cyber-cyan">30</span>
                  </div>
                  <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Seg</span>
                </div>
              </div>
            </div>
          
            {/* Prizes Section */}
            <section className="mb-10 w-[calc(100%+2rem)] -ml-4 pl-4 pr-1">
              <h2 className="text-sm font-bold mb-5 flex items-center gap-2 uppercase tracking-widest text-slate-400">
                <span className="material-symbols-outlined text-cyber-cyan text-xl">redeem</span>
                Premios de la Semana
              </h2>
              <div className="flex overflow-x-auto gap-4 hide-scrollbar pb-2 pr-4">
                {/* 1st Prize */}
                <div onClick={onWeeklyPrizeClick} className="min-w-[240px] bg-white/5 border border-white/10 rounded-2xl p-3 flex flex-col gap-3 shadow-xl relative overflow-hidden cursor-pointer hover:border-cyber-cyan/30 active:scale-95 transition-all">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/10 rounded-full blur-2xl"></div>
                  <div className="w-full aspect-[4/3] rounded-xl bg-cover bg-center overflow-hidden relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdYNx9pwwW-UmDiF0DbrVPm3Y-xTg3vNkYr4C6c7uad8JxNJEhz5524LGhXZrYMmnPb7AfWfPEjRjwHEvMWfJ793v7-6GyGNzzpFOBWd3JTM7SFhwfOIzUhnE_pXKnxOL5lubwmxtoTF8M5tVCZMYlMAwIrDT98a0Vul51l9juAbtxWwadFQEOCmUaIHE-mPjD2fb17e1F7Zvcy9rX5S-ZDjfqdeWVSOC7MGxcCbvsf8i5Try1lPo-IWylaDBrSuoTvDZypFPJ7Ow')" }}>
                    <div className="absolute top-2 left-2 bg-cyber-cyan text-background-dark font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">1º Puesto</div>
                  </div>
                  <div className="px-1 pb-1 relative">
                    <h3 className="font-bold text-cyber-cyan text-lg leading-tight">Noches de Hotel</h3>
                    <p className="text-xs text-slate-400 mt-1">Estancia de lujo 5 estrellas</p>
                  </div>
                </div>
                {/* 2nd Prize */}
                <div onClick={onWeeklyPrizeClick} className="min-w-[240px] bg-white/5 border border-white/10 rounded-2xl p-3 flex flex-col gap-3 shadow-lg cursor-pointer hover:border-white/30 active:scale-95 transition-all">
                  <div className="w-full aspect-[4/3] rounded-xl bg-cover bg-center overflow-hidden relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8kJnMkuLo4Pg0gfUg90igq1p60c_uXIpZGTz1MeaAIZNZmx9G9rN9C3t-dw1IKqAu2nJM93aCPegzyXwuhM4ochDnuWo8taF-ksoplKmD_1sQ8lhp33E3KD_PcWumS9OXixRH2X3eEYpTeaSaTkAhoaf9Vq2_DYzm-Xr39ajxl0p8AW204pwHD1ybPeGHfBvIo9LUX0Yp2R1kPtWW-c1VeWkkZXnkjDPORIAe1EUTUUN2sTbRHAOR9cTefuZ9Y2IYPTew4tpYgrM')" }}>
                    <div className="absolute top-2 left-2 bg-slate-700 text-slate-200 font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">2º Puesto</div>
                  </div>
                  <div className="px-1 pb-1">
                    <h3 className="font-bold text-slate-200 text-lg leading-tight">Cena Gourmet</h3>
                    <p className="text-xs text-slate-400 mt-1">Menú degustación para dos</p>
                  </div>
                </div>
              </div>
            </section>
          
            {/* Podium Semanal */}
            <section className="podium-gradient border border-cyber-cyan/10 rounded-[2rem] pt-12 pb-6 flex items-end justify-center gap-2 mb-8 relative">
              {/* 2nd Place */}
              <div className="flex flex-col items-center">
                <div className="relative mb-3">
                  <div className="w-16 h-16 rounded-full border-2 border-slate-400 p-0.5 shadow-[0_0_10px_rgba(148,163,184,0.3)] bg-background-dark">
                    <img alt="2nd place avatar" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkAcXzxbRcvkRviMnUJ1UxsjzdoEfzWE5VLz2CLHumo-r7shC0gICmh065O-yCXEwQ07_xXe2_m-Qk0yl57Nofx1x_Pv4DiF2ycPghgxr98FwN2xdp2O6l42zr6V-UciJvIlB4MnNXnHfAbWxzxRRDJGL1g3a33AdLlH9QUca4gI-neCOW-CSliGPbiIlpJ5n7qth4kR5muk3ElUN1b5-p1AdYQjRfJuCOQO_RrrMdYQa6PFQmX9xhmKVH68piYZzO0XAtR6hQnOw"/>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-slate-400 text-background-dark w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border-2 border-background-dark">2</div>
                </div>
                <p className="text-[11px] font-bold truncate w-20 text-center text-slate-300">Santi_G</p>
                <p className="text-[10px] text-slate-500 font-medium">12.450 pts</p>
              </div>

              {/* 1st Place */}
              <div className="flex flex-col items-center -translate-y-6">
                <div className="relative mb-3">
                  <div className="absolute -inset-2 bg-cyber-cyan rounded-full blur-sm opacity-30"></div>
                  <div className="w-24 h-24 rounded-full border-2 border-cyber-cyan p-1 neon-glow bg-background-dark relative">
                    <img alt="1st place avatar" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkvn5EprZfnMf8lgM1_bJMERUfwILe3H3v3m3L0jEsrZcEpmvpIrrgA795ERmgfOU5UckSwYSgmHFkXHMjzBIEzngXnwaBsgQVzoW_ZWVLqnjL6nC7jNDzh_IbQyunfjgpvzt0kGEk9S8S2B_Ig8LndFxMFMm7BNmv4wPl6ltwhSx5EWRH_sdxCiUFmIQ_8lRAluVGByrvMPtAR5ll89hUAAgMTEts7xsmMMqz4YT_KFzyLQMHQBNGGfMxrX0RoMQjrpbhRC216Ts"/>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-cyber-cyan text-background-dark w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border-4 border-background-dark">1</div>
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-cyber-cyan">
                    <span className="material-symbols-outlined fill-1 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                  </div>
                </div>
                <p className="text-sm font-black truncate w-24 text-center text-white">Elena_Urban</p>
                <p className="text-[11px] text-cyber-cyan font-black tracking-wider">14.200 PTS</p>
              </div>

              {/* 3rd Place */}
              <div className="flex flex-col items-center">
                <div className="relative mb-3">
                  <div className="w-16 h-16 rounded-full border-2 border-[#cd7f32] p-0.5 shadow-[0_0_10px_rgba(205,127,50,0.3)] bg-background-dark">
                    <img alt="3rd place avatar" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVasmEFp0DgrhuQUUis_k9izg5ZgiLwckwVG_aZCLrFe236niY2FHgcf_GnTTvZkbthwGrhTpu1hR3J_v6NMQJ8V4PwkNpoIWSUouzfnYMssHBgk4JAswzm3GEyUrRiBZYfV-yolgZ4YypuHe1o_lzEG7it9HDDKnPfvkzZRbGX56WkMVzaG0ecFOFx7TCS9ZYAFLA3d4nXoTISBRnAhGb8JDPdJBh3PFN3UdZuXv6dFVRm7Lbzg2s65vZw3iDG6h8VqHp3_yTmms"/>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-[#cd7f32] text-background-dark w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border-2 border-background-dark">3</div>
                </div>
                <p className="text-[11px] font-bold truncate w-20 text-center text-slate-300">Marc_Vlc</p>
                <p className="text-[10px] text-slate-500 font-medium">11.100 pts</p>
              </div>
            </section>

            {/* Leaderboard Semanal */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl">
                <span className="text-slate-500 font-bold w-4 text-center text-sm">4</span>
                <img alt="rank 4 avatar" className="w-11 h-11 rounded-full border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrm8nropUbl4k-3ZLcIkamPQF9WEp_z2nCVnEpNvo9-xVxcXOitPZ2pCb-rVTdrAo5iNZ6kiPETkQAMXEg6NvBuTJXNomEIbLC8Q-rTpY31QUA0hwQ5vL48cfxFLHPqnaeAO5Akcsgg75mwgdINI85nn7BRQEV0waHMyrY7_XtQntBO08bOAlH_HLnL5hRv-MKsDNusGBqc-hIX90MMnDbTKR2y4jhCE4M3fZHcXRWkZSZ2uBv8MYglCd7hOzr_HsFmIjZ2jSEGPQ"/>
                <div className="flex-1">
                  <p className="font-bold text-sm">Clara_Sky</p>
                  <p className="text-[11px] text-slate-500 font-medium">9.800 pts</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[11px] text-green-400 flex items-center gap-0.5 font-black">
                    <span className="material-symbols-outlined text-base">arrow_drop_up</span> 2
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl">
                <span className="text-slate-500 font-bold w-4 text-center text-sm">5</span>
                <img alt="rank 5 avatar" className="w-11 h-11 rounded-full border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARLKN7mNgoTOYX1gyf7XYPhk3cA5ebR_jVbR98uyv1yDNr9ObFdyW93QT6Ge_6DfNjKFo-waEmdKtUmYUMlJs3Ub5aj_1QhUgNp5t1dW9fZNmWMfY16xiFQ8stz6tAhrea8F3dLmWrul-PJphYJqn0U-MGzDJoXaciA2RcnTR3Fk2-X60SMKbO9ZqlT-c9nsQdq4ZClfUd63urBrEfb49PwalCn9INuFTpcdlQxAuGKVfjuWZZIiSqJnrLPFPyU5lR5Sk7oy3DVBo"/>
                <div className="flex-1">
                  <p className="font-bold text-sm">TechExplorer</p>
                  <p className="text-[11px] text-slate-500 font-medium">9.450 pts</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-slate-500">
                    <span className="material-symbols-outlined text-lg">minimize</span>
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl">
                <span className="text-slate-500 font-bold w-4 text-center text-sm">6</span>
                <img alt="rank 6 avatar" className="w-11 h-11 rounded-full border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIA6dFqu8qTTDWtk_HbrkgxwsZQ-oq2J2_AiJG-u_onmVyWEkLKjQH1n6ECihxKQEdh1pbCozUP1IUFiG_H0dMDBCWeMc9YpOUCz_CMvrskqXwUJLwZ3FJ9_0Syek-3OTNSgga6xNMW3nGrkvruqstRrGL8_1S_CAK0I6IEjWifIDfudI1GsbHcUMYARR9Kqxh78zX7NEqQUTD--hBu57dzCaTK3qICT5YE7oWGkaD77Gq_tH-jz1rB__bW-XX7CtzkoRQOoBcN7Q"/>
                <div className="flex-1">
                  <p className="font-bold text-sm">Nacho_Vibes</p>
                  <p className="text-[11px] text-slate-500 font-medium">8.900 pts</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[11px] text-red-400 flex items-center gap-0.5 font-black">
                    <span className="material-symbols-outlined text-base">arrow_drop_down</span> 1
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {rankingTab === 'clubes' && (
          <div className="flex flex-col mt-4">
            {/* Countdown Timer */}
            <div className="px-4 pt-2">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyber-cyan/60">Sincronización Final en</span>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-cyber-cyan/5 border border-cyber-cyan/20 rounded-lg w-14 h-14 flex items-center justify-center glow-cyan">
                      <span className="text-xl font-bold text-cyber-cyan">02</span>
                    </div>
                    <span className="text-[9px] mt-1 opacity-40 uppercase tracking-tighter">Horas</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-cyber-cyan/5 border border-cyber-cyan/20 rounded-lg w-14 h-14 flex items-center justify-center glow-cyan">
                      <span className="text-xl font-bold text-cyber-cyan">45</span>
                    </div>
                    <span className="text-[9px] mt-1 opacity-40 uppercase tracking-tighter">Minutos</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-cyber-cyan/5 border border-cyber-cyan/20 rounded-lg w-14 h-14 flex items-center justify-center glow-cyan">
                      <span className="text-xl font-bold text-cyber-cyan">12</span>
                    </div>
                    <span className="text-[9px] mt-1 opacity-40 uppercase tracking-tighter">Segundos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Versus Arena - High Tech Polish */}
            <div className="relative mt-10 px-4 overflow-hidden py-6">
              <div className="absolute inset-0 energy-trail pointer-events-none"></div>
              <div className="flex justify-between items-center relative z-10 w-[calc(100%+2rem)] -ml-4 pl-4 pr-1">
                {/* Club Alpha */}
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-cyber-cyan/20 blur-2xl rounded-full"></div>
                    <div className="w-24 h-24 rounded-full border-2 border-cyber-cyan/50 p-1 relative z-10">
                      <div className="w-full h-full rounded-full border-2 border-cyber-cyan bg-background-dark overflow-hidden glow-cyan">
                        <img className="w-full h-full object-cover" data-alt="Futuristic neon shield logo for Club Alpha" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKRcF3oUg5JCLQmIF3qBrtjzhkc0mjL_KqBnhynw2V93t6h26ut9NvJAFUpMZw9Gv31SvFNpMpcj5HnxTKychRLgZzCNGBTbTHBVcWNe-iagwqXv4GbWOwL4YC2wszNQz2SZ6HPUcvM73YZQ8u4VSB6wRHWy28My1CyraY3f1mEosGmcU-QmhIMjLlN9n-sgu5ZbnEmN1NXLAAACRDjLrcWTTRuLiJp0foIq6jAs16el_ZTV9t_90g4d-LYjw3X68j1hA_om2a6m0"/>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <h3 className="font-bold text-sm tracking-widest uppercase">Club Alpha</h3>
                    <p className="text-cyber-cyan font-black text-2xl tracking-tighter">1.2M <span className="text-[10px] font-medium opacity-50">PTS</span></p>
                  </div>
                </div>

                {/* VS Divider */}
                <div className="px-2 flex flex-col items-center">
                  <div className="w-[1px] h-12 vs-divider mb-2"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center border border-cyber-cyan/30 shadow-lg">
                    <span className="text-[10px] font-black italic text-cyber-cyan">VS</span>
                  </div>
                  <div className="w-[1px] h-12 vs-divider mt-2"></div>
                </div>

                {/* Team Beta */}
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="relative opacity-60 grayscale-[0.5]">
                    <div className="w-24 h-24 rounded-full border-2 border-slate-700 p-1">
                      <div className="w-full h-full rounded-full border-2 border-slate-600 bg-background-dark overflow-hidden">
                        <img className="w-full h-full object-cover" data-alt="Abstract geometric red and black logo for Team Beta" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfFW6FdHEBpblZLyv-Fsu3N0HDgnwk6YtnHjlA6KGvHhbt56B-HLbYdD2mqbek2o0QrfQGdPO3dDDFiEhx5gNNq2l_4TJHIcUFMWy1LfQteAi6tE--jJRAYcsgEMCu6Lf8j_gFV1yRWlyqU_oEw9GkTErSD5adgtpDf4wUwQk-oMJpx7iN3LhgePKi0O-q9kA-GvVSJdjJuNBtkLJWRHxkgjgN3OHC-qIanFTGZZL-dRpXOmci0-VstKx2_k02_i867KcqmVtcHqc"/>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-2 opacity-50">
                    <h3 className="font-bold text-sm tracking-widest uppercase">Team Beta</h3>
                    <p className="text-white font-black text-2xl tracking-tighter">980K <span className="text-[10px] font-medium opacity-50">PTS</span></p>
                  </div>
                </div>
              </div>

              {/* Tug of War Progress Bar */}
              <div className="mt-10 relative h-3 w-[calc(100%-8px)] mx-auto rounded-full bg-slate-800/50 border border-white/5 overflow-visible">
                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: '65%' }}
                   transition={{ duration: 1.5, type: 'spring' }}
                   className="absolute left-0 top-0 h-full bg-cyber-cyan rounded-l-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/0 via-white/20 to-white/40"></div>
                  {/* Neon marker */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 rounded-full bg-cyber-cyan flex items-center justify-center glow-cyan-strong border-2 border-white">
                    <span className="material-symbols-outlined text-[14px] text-background-dark font-bold">bolt</span>
                  </div>
                </motion.div>
              </div>
              
              <div className="flex justify-between mt-4 px-1">
                <span className="text-[9px] font-bold text-cyber-cyan uppercase tracking-[0.2em]">+220k de ventaja</span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">En desventaja</span>
              </div>
            </div>

            {/* User Contribution Card */}
            <div className="px-4 mt-6">
              <div className="glass-card rounded-xl p-4 flex items-center justify-between border-l-2 border-l-cyber-cyan overflow-hidden relative">
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-cyber-cyan/5 to-transparent"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-cyber-cyan/30 p-0.5">
                    <img className="w-full h-full rounded-full object-cover" data-alt="Profile photo of the user" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2q4b8h-WOGCudJ67VXxSeBiz3Qgnz7ASPS7ew2Hm8XA77tDacaJ5sVuFlnAtK0r68qThFQt2LdNgsxPDE8P0oQk7OSzyUuWG_gOnTCpnKwwxNRj03H89risfL-VEqBqAxAFTQD7C2UIbvXF-fSPA_HNiU-T-VTjZgXWjQb2WN26kybSSzGtc8jsZtk3KU9kpTlYQSJ18HH8x_nuAc1feQRhNNuiFIz07TR4dHNE17OakDtsvuYHPBY9LXVUnPAlmlpvdvIfk_ZEY"/>
                  </div>
                  <div>
                    <p className="text-[9px] text-cyber-cyan font-bold uppercase tracking-widest">Tu Aporte</p>
                    <h4 className="font-bold text-xl tracking-tighter">4,250 <span className="text-[10px] font-normal opacity-40 italic">puntos</span></h4>
                  </div>
                </div>
                <div className="text-right relative z-10">
                  <p className="text-[9px] opacity-40 uppercase tracking-widest">Rango Club</p>
                  <p className="text-2xl font-black italic text-cyber-cyan">#12</p>
                </div>
              </div>
            </div>

            {/* Top Contributors */}
            <div className="px-4 mt-8 pb-32">
              <div className="flex items-center justify-between mb-4 px-1">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2 text-white/70">
                  <span className="material-symbols-outlined text-cyber-cyan text-lg">emoji_events</span>
                  Top Contribuidores
                </h3>
                <button className="text-[10px] font-bold text-cyber-cyan uppercase hover:underline tracking-widest">Ver Todos</button>
              </div>
              <div className="space-y-2">
                {/* Top 1 */}
                <div className="flex items-center bg-white/5 p-3 rounded-lg border border-white/5 hover:border-cyber-cyan/20 transition-colors">
                  <div className="w-8 font-black italic text-cyber-cyan text-xl">01</div>
                  <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden mx-3 border border-cyber-cyan/20">
                    <img className="w-full h-full object-cover" data-alt="Profile photo of top contributor 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsaKNQqDGJyNcScgogo0-zTFCfESjX56uq-cT0GH7nvlByV1-Eu9ZJMSypa6RuvegTcBYkyNwZjvWrJCes4QACu0AMHwH3qhjL6HlC1nWAaK_eBjauS7iXnh_YyjxdFhMdzuT4HNxk9Jmsh4gFAg-zuumrHV_f0nLfTNb4IpNhUhtbvm7RobiODPWJrleqthAUVxJHTkXHMNcqDBGbu1hxvOuO7p6GCj4xI-KcZSvMYl09TjzFnERln60HV2C-35ze0UvToVU_yxg"/>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold tracking-tight">Marcus.eth</p>
                    <p className="text-[9px] opacity-40 uppercase font-medium">Líder de Escuadrón</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black italic text-cyber-cyan">24.5k</p>
                    <div className="flex justify-end text-cyber-cyan">
                      <span className="material-symbols-outlined text-[10px] fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="material-symbols-outlined text-[10px] fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    </div>
                  </div>
                </div>

                {/* Top 2 */}
                <div className="flex items-center bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="w-8 font-black italic text-slate-500 text-xl">02</div>
                  <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden mx-3 border border-white/5">
                    <img className="w-full h-full object-cover" data-alt="Profile photo of top contributor 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWECAtmEXaeueyXI6-dAblR5baQ397O-Gon_mJP4dcokk893bPdtAYgXiyD1aaeTYW7rJSyh-HoxGlTJ-l4kY8rJzVVJ4YdTe9DTNi-wcqrKvPM6AGlK2NyEI56aQn1REG2heTLnv_Sdi_gX9xw2z9XW5ee60WPA7_sji_jCHGufpmtqs1trlP9xxnqgSBW__mN4w-Auz0taaBLHu0vSdCJ_th2lbOiWiMcpZ6NT861T8XKf6bDxs6ahFN5OrBO64p0X6cqXTBXIw"/>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold tracking-tight">ElenaV</p>
                    <p className="text-[9px] opacity-40 uppercase font-medium">Elite Nubo</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black italic text-cyber-cyan">18.2k</p>
                  </div>
                </div>

                {/* Top 3 */}
                <div className="flex items-center bg-white/5 p-3 rounded-lg border border-white/5">
                  <div className="w-8 font-black italic text-slate-500 text-xl">03</div>
                  <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden mx-3 border border-white/5">
                    <img className="w-full h-full object-cover" data-alt="Profile photo of top contributor 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF7o1bCRCd-vp2iultUdu62tni5xX0ENsdZInpUdVUr3Sem3yWRGI9tgvSOg5CL_fKDtFzvBK8IpVkJ90l2ZKjHwIdlzI7-BJrDnykUJfCvRVazeyLz_l-MCy3LuWyvfcjZ54qFo-TIIFSe2lpOle39tz_DrQcP-q1Jt77iuADQojSakLe6pDn8t29fOYiAooX3kNlgbWFH5IMWv-_uaVlxOjFwMm4PjmwFy01hkiXoSxm1gLSR3tSedSaA6pai9hfebzCm47BbZU"/>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold tracking-tight">Javi_Rider</p>
                    <p className="text-[9px] opacity-40 uppercase font-medium">Explorador Pro</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black italic text-cyber-cyan">15.9k</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 w-full max-w-md mx-auto">
              <button className="w-full scan-button-gradient text-background-dark py-4 rounded-xl font-black text-lg uppercase italic tracking-tighter glow-cyan-strong flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
                <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                Sumar Puntos
              </button>
            </div>
          </div>
        )}

        {rankingTab === 'referidos' && (
          <div className="flex flex-col mt-4">
            {/* Referidos Action */}
            <div className="px-4 pt-2 pb-6">
              <div className="bg-gradient-to-br from-cyber-cyan/20 to-transparent border border-cyber-cyan/30 rounded-2xl p-5 relative overflow-hidden flex flex-col gap-4">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyber-cyan/10 rounded-full blur-3xl"></div>
                
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Ranking de Referidos</h3>
                  <p className="text-xs text-slate-400">Invita amigos y sube en el ranking. ¡Los top referidores de cada mes ganan premios exclusivos!</p>
                </div>
                
                {onReferidosClick && (
                  <button 
                    onClick={onReferidosClick}
                    className="w-full bg-cyber-cyan hover:bg-cyber-cyan/90 text-background-dark font-bold text-sm py-3 rounded-xl transition-all active:scale-[0.98] shadow-[0_0_15px_rgba(25,204,240,0.4)] flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">group_add</span>
                    Invitar Amigos
                  </button>
                )}
              </div>
            </div>

            {/* Referidos Leaderboard */}
            <div className="px-4 space-y-3 pb-32">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyber-cyan"></div>
                <div className="w-6 text-center">
                  <span className="material-symbols-outlined text-cyber-cyan text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                </div>
                <img alt="rank 1 avatar" className="w-11 h-11 rounded-full border-2 border-cyber-cyan/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkvn5EprZfnMf8lgM1_bJMERUfwILe3H3v3m3L0jEsrZcEpmvpIrrgA795ERmgfOU5UckSwYSgmHFkXHMjzBIEzngXnwaBsgQVzoW_ZWVLqnjL6nC7jNDzh_IbQyunfjgpvzt0kGEk9S8S2B_Ig8LndFxMFMm7BNmv4wPl6ltwhSx5EWRH_sdxCiUFmIQ_8lRAluVGByrvMPtAR5ll89hUAAgMTEts7xsmMMqz4YT_KFzyLQMHQBNGGfMxrX0RoMQjrpbhRC216Ts"/>
                <div className="flex-1">
                  <p className="font-bold text-sm">Elena_Urban</p>
                  <p className="text-[11px] text-slate-500 font-medium">Nivel Experto</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-black text-white">420</span>
                  <span className="text-[10px] text-cyber-cyan font-bold uppercase tracking-wider">Referidos</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl relative overflow-hidden">
                <div className="w-6 text-center">
                  <span className="text-slate-400 font-bold text-lg">2</span>
                </div>
                <img alt="rank 2 avatar" className="w-11 h-11 rounded-full border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkAcXzxbRcvkRviMnUJ1UxsjzdoEfzWE5VLz2CLHumo-r7shC0gICmh065O-yCXEwQ07_xXe2_m-Qk0yl57Nofx1x_Pv4DiF2ycPghgxr98FwN2xdp2O6l42zr6V-UciJvIlB4MnNXnHfAbWxzxRRDJGL1g3a33AdLlH9QUca4gI-neCOW-CSliGPbiIlpJ5n7qth4kR5muk3ElUN1b5-p1AdYQjRfJuCOQO_RrrMdYQa6PFQmX9xhmKVH68piYZzO0XAtR6hQnOw"/>
                <div className="flex-1">
                  <p className="font-bold text-sm">Santi_G</p>
                  <p className="text-[11px] text-slate-500 font-medium">Nivel Avanzado</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-black text-white">385</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Referidos</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl relative overflow-hidden">
                <div className="w-6 text-center">
                  <span className="text-[#cd7f32] font-bold text-lg">3</span>
                </div>
                <img alt="rank 3 avatar" className="w-11 h-11 rounded-full border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVasmEFp0DgrhuQUUis_k9izg5ZgiLwckwVG_aZCLrFe236niY2FHgcf_GnTTvZkbthwGrhTpu1hR3J_v6NMQJ8V4PwkNpoIWSUouzfnYMssHBgk4JAswzm3GEyUrRiBZYfV-yolgZ4YypuHe1o_lzEG7it9HDDKnPfvkzZRbGX56WkMVzaG0ecFOFx7TCS9ZYAFLA3d4nXoTISBRnAhGb8JDPdJBh3PFN3UdZuXv6dFVRm7Lbzg2s65vZw3iDG6h8VqHp3_yTmms"/>
                <div className="flex-1">
                  <p className="font-bold text-sm">Marc_Vlc</p>
                  <p className="text-[11px] text-slate-500 font-medium">Nivel Avanzado</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-black text-white">312</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Referidos</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.4 }} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl relative overflow-hidden opacity-50">
                <div className="w-6 text-center">
                  <span className="text-slate-500 font-bold text-sm">...</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-4 p-4 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-2xl relative overflow-hidden mt-4">
                <div className="w-6 text-center">
                  <span className="text-cyber-cyan font-bold text-sm">42</span>
                </div>
                <img alt="your avatar" className="w-11 h-11 rounded-full border-2 border-cyber-cyan/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuzvmFFo5UsI8IbpqoHA8PUbHTSWe8bZDqN8qbmspUjey6nkda5HjKTHdxL_rCAyRoaJOZKYohn08ZzmHPeyK-HcihL0hA2LUCVVTz5fCrLqNsdqS3ha1q1cziOAXQad65optoK8kRhcEHx8UjmFUwSv83yW7pFv7ELdU2B_S8kM4wLYDyeuiXBMoCxDIvE8OaDXPsDT6zIjgMZcIBi9WcffOVBk_vXddIH3foOv07y6iOsBRW2sR0lknQFBYT6iWc55C_EYY7R-c"/>
                <div className="flex-1">
                  <p className="font-bold text-sm text-white">Tú</p>
                  <p className="text-[11px] text-slate-400 font-medium">Principiante</p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-sm font-black text-cyber-cyan">14</span>
                  <span className="text-[10px] text-cyber-cyan/70 font-bold uppercase tracking-wider">Referidos</span>
                </div>
              </motion.div>

            </div>
          </div>
        )}
        </motion.div>
        </AnimatePresence>
      </main>

      {/* User Highlight Fixed Bar - Cyber Pulsing Cyan */}
      {(rankingTab === 'global' || rankingTab === 'semanal') && (
        <div className="fixed bottom-[88px] left-4 right-4 z-30 max-w-md mx-auto">
          <motion.div 
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             className="bg-slate-900/40 backdrop-blur-xl px-6 py-4 rounded-3xl flex items-center justify-between shadow-[0_0_40px_rgba(25,204,240,0.15)] text-white border border-cyber-cyan/30 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/10 to-transparent"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyber-cyan/20 rounded-full blur-[30px] animate-pulse"></div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-cyber-cyan overflow-hidden shadow-[0_0_15px_rgba(25,204,240,0.5)]">
                  <img className="w-full h-full object-cover" data-alt="Current user avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN5NitYRUNw9IB_S0I-vKHdjYhZYO__YqrLV3N7KcWSlwnxY8oyzaPZIEsiTPJZrUdvD-evUdcMSm8Fih9D5TX75c1b-jnDsoi_c4oecoIHLc6PIw5wam4WtskO3XULd52Mtnk2mozxyjYjZM-qczEEy2Lf1GB-HBfQf4xP3IhuD74CaL7VnwgrfW1H0rrh5eJeBFCoi7wTZch6qL9QO7wkZMfBHQ-PbQ5zn-gM2xlki7XVteaKRdTVV0mnrMVoKa1HO3wA2RjBls"/>
                </div>
                <div className="absolute -top-1 -right-1 bg-cyber-cyan text-background-dark font-black text-[9px] px-1.5 py-0.5 rounded-full shadow-lg">TÚ</div>
              </div>
              <div>
                <p className="font-bold text-sm leading-tight text-white">Puesto global <span className="text-cyber-cyan">#142</span></p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-0.5">Faltan 70 pts para subir</p>
              </div>
            </div>
            <div className="text-right relative z-10">
              <p className="text-2xl font-display font-black leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-cyber-cyan">1,250</p>
              <p className="text-[9px] uppercase font-bold tracking-widest text-cyber-cyan">Puntos</p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
