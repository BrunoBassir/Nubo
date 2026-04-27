import { useState, useRef, useEffect } from 'react';

const photos = [
  {
    id: 1,
    alt: "Cafe Interior",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHXpauFYnnTrhLHZmH_yP71tbdpQGlypLTCpvMajr7FFvWG6eo4zFNE6IbMGQk6ZsTEH6MZzMBmZCldeflXHOgctEpHNHNFVr_EPFq3SodYFpcRUatVM5qIK8kOLlKVxo3xVC-D1hb-M6kPm2M5ATnpBxvraQuuqy3ZzNOi3tAnIS6dWTWNP7auHo4pE_0nzWz7AHPYZ9TeajPzP4gPvBG41su2lwejsafTCEpaAtTsWQqPa43IPRyydu2OQKNPenPevkYR4zI4AY",
    userSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgvAeXjxY1Rt_lDsWFjSECqppFs1nBSKoq19XLdFme7BLX1M3vASKB7jbo4f4FBwUYyDZpA0R9BpD-Ns9pf770ONFKpG4sgfl01dBBgadeJ1EvLWj-G99zpaqJpuoV3VFgrTCKZkMk9APyVmMDrcxgZrmyvKoTJgglKZafHBSL7DzBrg5_wUxHo0ap26X3tgOLw3i5OBkPGAsOBbG4X2AOKGkmsnD_OfjO3O2JlVsAb4ik-D1VE3U4HJYZlw77LZAFWBAmW3xm03Y",
    user: "Alex M.",
    xp: 50,
    highlight: true,
  },
  {
    id: 2,
    alt: "Coffee Cup",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo7D9TjE_chy3htL0Mjt4T_b4d16c3gLrhO9RJE9BBoMAlj-hQiIUxT3OhSDtdn3Vegd3X6YylCLN2qb9TtZ2V0hT2OA3sFwRQfdhSznN0RAU7VvHvlNw5-G7XxghjdWOkUm2sGn85ZAQqKP34JI44k3_FpbnCMiJ_hFgn2eDtFz8CCn3ejBxkmxo8NoMX_YvfkFEhyu4rgl1jwDJ_GhQ8QHPYEocun7cgI1sdsSda6qPrWbMQdHe0mQcpIAhAJioNbcKgPUB_y2c",
    userSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuA44Wssg4Wys3HQjv86iM4aqFglvhgIteS4cdp1bgqNr5MmWc0UWGJlsKZ7UidUpkvz9LUFoOftWwtv1UXGPt1xFWDBgB0xJOq_b7ml8f4Umofd5XnwVhRbQkwNAZmoYnw7UgvPkE7nBcwWkbka_jYQivApbHe-i1XashBv_uJaa_J95TYv8AwGhwPzisahtOYjERa61m2FzOmQdfN-wPV6tm6wXLaIuRoAP5FawAsAOJ0uTH4Kk1E-cGqMsIbrOLkjnefkim0G7os",
    user: "Sarah L.",
    xp: 25,
    highlight: false,
  },
  {
    id: 3,
    alt: "Minimalist Table",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsZluOlkt-87uOpnU47M_D87gC0jfvhWqrBKXHdVJm03SU1Q8MorMjMw7axGfLuMaGecpUhs9FjyQftghDG2LHRMd5SGa8vcZU6y01WYbR51RQzhx64sXDjyW_W9G2iKZrv5TuNjbgUjNctMWQKrFRH6fr5JWLw3Og5kxrHAah7oH59QeCFNvywvlQ5anLZU04S6pOfMxkacdKEACdQPbzkDd7G2KIbiKO__7HiJxA8hUdOGRjJ5lZKiuP6A0P8kzTcSB4ALWosKE",
    userSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9KQS4o3GG5sZkSJavFR2vegoSfu1HWMFZg5tP8PSxf-8wagZvJmujZmi2R7b_5_-40CYG6ULjA8K5yXMU1CP3BJEMqnQWS2Y2syy1JLr6Rjqrr2OdnQKZXW5ZqKM7rlwXltapO_uuk3EcmFu2iwqe4p4X1dBZx4BiUBZn6pM_uGUINBPKnWefcPDtURaX0Ak6ZRELn8Fv-UyvM2xzfenmcdX8Vk8Y_m1IzlT8nArc4gRqX-Rhwzk5iCG0Au1elC4oEWxZVk0cRQI",
    user: "Lucas K.",
    xp: 30,
    highlight: false,
  },
  {
    id: 4,
    alt: "Window View",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8qbZ5XV0AKFTAkY59qgZ2wDhFyRTTYSLLtAtzIfrLAOs_1tb9scIWSEO1JqoCYJBGpf9o5c6mdL3PEZbsndvu6BhZO_MFEtpROdXnr3glaLMv0tI98xlqPHLgcij6jnnEs2XAxC2D2R2J1vHSgAxmBAtbTgt-bRj008HAg_2-jkUGUhsuL9_KEdnEhSDZtfAYJKUSO6lEzzk2ETjO_KePTxkIyRrTy9QBXQHGXpvk4a4xZYlYpArctGe5__DN-LeqC9tgT2eq5hU",
    userSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzsaYMxOBwGJFq5jrw6H1N8JnFDcg3olXQLwKKy0_hBO7zv3jFbKHh9N9eYmjpPlAorFWJ-jJf3K-8xwE2zmcBNQ5j2jnHYJHYP7TjPzUPNgMpEjl62spqx4gDOC5XUVHzpvPA_u9Ity8nSfISXBf11dqEROb4daU9Gss0db5MLSTzaGXLTv3DwiOHb9e3N_m5GRr3TrvU7WKg2DSvKtwd5X0xwrzNHuLdKjVM0DW2E7UoznyMJkbfcttpmJBpyfvQomBWsm75vS8",
    user: "Maya R.",
    xp: 75,
    highlight: true,
  },
  {
    id: 5,
    alt: "Espresso Machine",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDenQOidKBtEui1m3Zr6QxHtDOEiNGrY8j5V1qVYZKus_PgVY75l_H2RzHlg-Phj1o8O4dEj8ABy_9sEAh7bwjwsnwibzXffSWCKV9Qr1gUb-AjbsDrpT5OYEp3V9-BSPYyxTLnISQFbCs_cZ3s25yOvQUYv19vuYVmOurSO_fOJWMeaslDfiSR_YPxUqq_W9768XCdlJ9aJoHFrLeykQf0LJjoq_bQrXztC1sVqIpktyqGSHhD7lwxW_yTJo9Wihjzb4nx1spUqak",
    userSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLMdwYsVcbtuD815BIx1-TzzAOqiF4AKwvw31l7oYtErDMVVqfjfj8JtevJsVBJoWpQclSxqawng9-Ks1MEk6x0YV5KRZ_UJp-2XDxE6gF-bsO0axe4Mf6TlMllHzLFzUqwxHdob3DKIOiCXG3_IFpkbR49GFMpCcgRenGOtEaQKfEF0BOaBKsqBMtw99lw7AFZQHc_0zIpeBJ9cX3y9k75STqssD5_j8ka7Dg6Spt2kGINQsj254Tx4KoA5idhJD0SEVUAkuOqpM",
    user: "Danny V.",
    xp: 15,
    highlight: false,
  },
  {
    id: 6,
    alt: "Cafe Entrance",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjs8BPfWnP9pO1ayDkMC3cdc8YgKafipvbD8BZ6O2CqHlTNW7Au1CVi7fKP8YgHFz--yNFPj3MkE3NUdtF6CJ-MoYqf0KSqeAm5VikeFVI1GpZW2Kw17pfk7g78mkB9K-23D6HXNlQwlxYC2qB2iymhP3xouGG2H1LZaG_7D5OirriiyMGgHzPqKdgONkYXHUsPiT4mKwc7DGWOdooVliB6AhKGyD9mfNSnvQUpz6ZoMqJIIt9ZgbM42S7el8foEofUhoMoHeCJV0",
    userSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAVLnFYPhkCdqC9GxOyR2OwW_a8lOk7ptstNy2WA6AKIm2AwYKSwfd7I9b938sXoSUXENEJrDYBShiW5tQkT8nLET2-TUIbVPusKJMFtoUv4aTuxzGlGBLdw1kJGY7aIDdHf66DEMsmFWdAhkMdwLHmsmLZu9A0gEJiMEi_pYb1JeghbzK1nOTymsHWCxY91PbDH0zwqWV1wIH6XK6QNFiyFKdMwCX28jBGvR4_ESQpWmQ1q8f3AlhNfSEImRqNyW_RkVQYvFtSV4",
    user: "Clara S.",
    xp: 40,
    highlight: false,
  }
];

export function SpotGalleryScreen({ onBack, onUploadProofClick, onPhotoClick }: { onBack: () => void, onUploadProofClick?: () => void, onPhotoClick?: () => void }) {
  const [activeFilter, setActiveFilter] = useState<'top' | 'recent'>('top');
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-surface text-slate-100 selection:bg-primary/30">
      {/* Top App Bar */}
      <nav className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/10 px-6 h-16 flex items-center justify-between shadow-lg lg:max-w-md lg:mx-auto w-full">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="flex items-center justify-center size-10 rounded-xl bg-surface-bright/20 hover:text-primary transition-colors active:opacity-80">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <div>
            <h1 className="text-[10px] uppercase tracking-widest text-primary font-bold">Nubo Spot</h1>
            <h2 className="text-xl font-bold leading-none tracking-tight">Café Central</h2>
          </div>
        </div>
        <div className="relative" ref={menuRef}>
          <button onClick={() => setShowMenu(!showMenu)} className="flex items-center justify-center size-10 rounded-xl bg-surface-bright/20 active:opacity-80">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
          
          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute top-12 right-0 w-48 bg-slate-900 border border-white/10 rounded-xl shadow-2xl py-1 z-50 overflow-hidden transform origin-top-right transition-all animate-in fade-in zoom-in-95 duration-200">
              <button 
                onClick={() => {
                  if(navigator.share) {
                    navigator.share({ title: 'Café Central', text: 'Mirá la galería de fotos en Nubo', url: window.location.href });
                  } else {
                    alert('Compartiendo galería...');
                  }
                  setShowMenu(false);
                }} 
                className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors"
               >
                <span className="material-symbols-outlined text-[18px]">share</span>
                <span className="text-sm font-medium">Compartir galería</span>
              </button>
              <button 
                onClick={() => { alert('Redirigiendo a información del lugar...'); setShowMenu(false); }}
                className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors"
               >
                <span className="material-symbols-outlined text-[18px]">info</span>
                <span className="text-sm font-medium">Información del lugar</span>
              </button>
              <div className="h-px w-full bg-white/10 my-1"></div>
              <button 
                onClick={() => { alert('Se reportó un problema con la galería.'); setShowMenu(false); }}
                className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-red-500/10 text-red-400 transition-colors"
               >
                <span className="material-symbols-outlined text-[18px]">flag</span>
                <span className="text-sm font-medium">Reportar problema</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Content Area */}
      <main className="px-4 lg:max-w-md lg:mx-auto w-full">
        {/* Stats/Filter Bar */}
        <div className="flex items-center justify-between py-6">
          <div className="flex flex-col">
            <span className="text-3xl font-bold tracking-tight">Galería</span>
            <span className="text-slate-500 text-sm font-medium">1.2k fotos de la comunidad</span>
          </div>
          <div className="flex bg-slate-900/80 p-1 rounded-lg border border-white/5">
            <button 
              onClick={() => setActiveFilter('top')}
              className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${activeFilter === 'top' ? 'bg-primary text-slate-950 shadow-[0_0_15px_rgba(25,204,240,0.3)]' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Top
            </button>
            <button 
              onClick={() => setActiveFilter('recent')}
              className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all ${activeFilter === 'recent' ? 'bg-primary text-slate-950 shadow-[0_0_15px_rgba(25,204,240,0.3)]' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Recientes
            </button>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 gap-3 space-y-3">
          {(activeFilter === 'top' ? photos : [...photos].reverse()).map((photo, index) => (
            <button 
              key={photo.id} 
              onClick={onPhotoClick} 
              className={`break-inside-avoid relative group overflow-hidden rounded-xl border ${photo.highlight ? 'border-primary/40 shadow-[0_0_15px_rgba(25,204,240,0.3)]' : 'border-white/10 bg-slate-900'} block text-left w-full cursor-pointer`}
            >
              <img alt={photo.alt} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" src={photo.src}/>
              <div className={`absolute inset-0 ${photo.highlight ? 'bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80' : 'bg-gradient-to-t from-slate-950/80 via-transparent to-transparent'}`}></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`size-6 rounded-full overflow-hidden ${photo.highlight ? 'border border-primary shadow-[0_0_5px_rgba(25,204,240,0.5)]' : 'bg-slate-800 border border-white/20'}`}>
                    <img alt="User" src={photo.userSrc}/>
                  </div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-tighter">{photo.user}</span>
                </div>
                <div className={`${photo.highlight ? 'bg-primary/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-black text-slate-950 shadow-[0_0_8px_rgba(25,204,240,0.6)]' : 'bg-white/10 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-black text-white border border-white/10'}`}>
                  +{photo.xp} XP
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Upload FAB (Mobile Centered Overlay) */}
      <div className="fixed bottom-28 left-1/2 -translate-x-1/2 z-40">
        <button onClick={onUploadProofClick} className="bg-slate-950/90 backdrop-blur-md border border-primary/40 text-primary flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs shadow-[0_0_20px_rgba(25,204,240,0.3)] hover:scale-105 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-sm">photo_camera</span>
          <span className="uppercase tracking-widest whitespace-nowrap">Subir mi foto</span>
        </button>
      </div>
    </div>
  );
}
