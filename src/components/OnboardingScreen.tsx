import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface OnboardingScreenProps {
  onComplete: () => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const skipOnboarding = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-[#101f22] text-slate-100 font-display overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 0 && <StepIntro key="stepIntro" onNext={nextStep} />}
        {step === 1 && <StepZero key="step0" onNext={nextStep} />}
        {step === 2 && <StepOne key="step1" onNext={nextStep} onSkip={skipOnboarding} />}
        {step === 3 && <StepTwo key="step2" onNext={nextStep} onPrev={prevStep} />}
        {step === 4 && <StepThree key="step3" onComplete={onComplete} onPrev={prevStep} />}
      </AnimatePresence>
    </div>
  );
}

// -----------------------------------------------------
// Step Intro: Logo presentation
// -----------------------------------------------------
const StepIntro = ({ onNext }: { onNext: () => void; key?: string }) => {
  useEffect(() => {
    const timer = setTimeout(onNext, 3000);
    return () => clearTimeout(timer);
  }, [onNext]);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className="relative flex h-full w-full flex-col items-center justify-center bg-[#0a1112] overflow-hidden max-w-md mx-auto"
      onClick={onNext}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(25, 204, 240, 0.15) 0%, rgba(10, 17, 18, 0) 70%)' }}></div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1,
          ease: "easeOut"
        }}
        className="relative px-8 w-full max-w-sm flex justify-center"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0], y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <img 
            alt="NUBO" 
            className="w-full h-auto object-contain brightness-125 drop-shadow-[0_0_40px_rgba(67,221,226,0.6)]" 
            src="https://lh3.googleusercontent.com/aida/ADBb0ujTO8OICi5dMqeWK-37zXjL6hSeOTulMvdrsKKR7Lv7fW8urGGZFy4hjQBQCW-bmlF-CYsXf4_O0ItQhwdM0ywSYtBX5yEVQNUNfY7zklBeOOxLw8wupr-o3Lf0Tu0agaQ2x5MT0tuSqiWXrkyFx_1fTiP7FwYTZTQvEuhfXtzMzEUTd3gPkulOP1Uqig7ZqBm7WpZN61bKigv5Qlb8FelxgNmMRRBpoA_yOhpNjTokkypSLIClOBqbZJwyiUC0I94KaJ2gE92bjw" 
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#19ccf0]/20 blur-[80px] -z-10 rounded-full animate-pulse"></div>
      </motion.div>
    </motion.div>
  );
};

// -----------------------------------------------------
// Step 0: "Explorar la ciudad tiene recompensa" (Hero)
// -----------------------------------------------------
const StepZero = ({ onNext }: { onNext: () => void; key?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
    className="relative flex h-full w-full flex-col bg-[#0a1112] overflow-hidden max-w-md mx-auto"
  >
    <nav className="flex items-center justify-center w-full px-6 pt-12 pb-8 z-50 shrink-0">
      <img alt="NUBO" className="h-[240px] w-auto brightness-125 drop-shadow-[0_0_20px_rgba(67,221,226,0.6)] object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0ujTO8OICi5dMqeWK-37zXjL6hSeOTulMvdrsKKR7Lv7fW8urGGZFy4hjQBQCW-bmlF-CYsXf4_O0ItQhwdM0ywSYtBX5yEVQNUNfY7zklBeOOxLw8wupr-o3Lf0Tu0agaQ2x5MT0tuSqiWXrkyFx_1fTiP7FwYTZTQvEuhfXtzMzEUTd3gPkulOP1Uqig7ZqBm7WpZN61bKigv5Qlb8FelxgNmMRRBpoA_yOhpNjTokkypSLIClOBqbZJwyiUC0I94KaJ2gE92bjw" />
    </nav>
    <main className="relative flex-1 flex flex-col px-6 pt-2 pb-6 z-10 overflow-y-auto min-h-0">
      <div className="relative w-full h-40 flex items-center justify-center mb-4">
        <div className="flex flex-col items-center gap-4">
          <div className="backdrop-blur-[16px] bg-[#19ccf0]/[0.03] border border-[#19ccf0]/20 px-5 py-2.5 rounded-full flex items-center gap-3 shadow-xl">
            <span className="material-symbols-outlined text-[#19ccf0] text-xl">location_on</span>
            <span className="text-sm font-medium tracking-wide text-[#19ccf0]/90">Próxima recompensa a 200m</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-auto text-center md:text-left">
        <h1 className="text-[2.65rem] md:text-5xl font-bold leading-[1.05] tracking-tight text-white">
          Explorar la ciudad ahora tiene <span className="text-[#19ccf0]">recompensa</span>
        </h1>
        <p className="text-lg text-slate-400 font-normal leading-relaxed max-w-[90%] mx-auto md:mx-0">
          Descubrí lugares únicos, completá retos exclusivos y ganá premios reales mientras caminás.
        </p>
      </div>
      <div className="flex flex-col gap-6 mt-10">
        <button
          onClick={onNext}
          className="w-full bg-[#19ccf0] hover:bg-[#19ccf0]/90 text-[#0a1112] h-16 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#19ccf0]/20 flex items-center justify-center gap-2 active:scale-[0.98]"
        >
          <span>Empezar a explorar</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            <div className="flex -space-x-2">
              <div className="size-6 rounded-full border-2 border-[#0a1112] bg-slate-500 overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTs7FUlMW2bldDgSRd1f0-1PQWjpxT5BYv6YkHqDfYneWlrHClByAAWBDtQ33TxtsONj8KCl9SwFpao1Be8sOJs3n4WWw6Ws-Y1B39nUrF4EWD9jkl66Nx6dI04Doli_a8onCIdQD9OKCc1JQUbRGMr6XrIuuns4qCq0zC8qN0iIYci1baIieWEGFRzZAM8uFpGhTSvQURSAKhQPVLMofeqAjqkIuNV2dM9Xfc7zkQJwSgIr4UfxY7yNVdIkqTEj64qvHqptB_42g" alt="Avatar" />
              </div>
              <div className="size-6 rounded-full border-2 border-[#0a1112] bg-slate-400 overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAHG6WD6T-LKiYos1NPWj9HncQ2NbuDGDy0zfM-F5Qn4SKJygmH5aVa5YFXGwOwR8eTP1N-22xN7PyXTZ4qHbuqs4iD8q9HrvkpGqYHlrrRyi4NlTuSZwHbbZdjyf7tNzuEp-eKC-lXkAuH2TT1TMa3vwO4_e1vfHdOTcd-dMMog8s41lrrfWcfZpd3L5kG8QCRHWJLqYMGjswUwBkvAxw55iRr-JFNCOEJUEJsCSHIHorYJex4m_DIz9mKWjxCEyTmhGqsxdKVfU" alt="Avatar" />
              </div>
              <div className="size-6 rounded-full border-2 border-[#0a1112] bg-slate-300 overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkcsfcIj1O8qEu513NkRlVX-B0hcSOBY1WXnrlkjGL27UUglGEbQQhpU8SSYKXY2YZW80wNSlm8ek0yVe6WO2Xpkd7U4gddKYfnhVEBUKFDjP_tG4wnOm6BC-DCgXFlhAH7bC-E8F2Jg2bPLjbj7IqmjCc_3pfvLpUbnVRuu5i4kJIKbfAxbveV7aCV0igKSxZqtI4e6KoRJc5zO-wc8Zsj5FBlNV1_WWSb_aqNlwGJChrW-tmWRo5VjqaPnCK3vbjiL0vue48mJo" alt="Avatar" />
              </div>
            </div>
            <span className="text-[11px] font-medium text-white/60 tracking-tight">+10k Exploradores activos</span>
          </div>
        </div>
      </div>
    </main>
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(25,204,240,0.12)_0%,transparent_80%)] opacity-40"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-3/4 opacity-50" style={{ maskImage: 'linear-gradient(to top, black 20%, transparent 90%)' }}>
        <img className="w-full h-full object-cover object-bottom filter grayscale brightness-75 contrast-125 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUNPW1HXc2sgUBlxBfLtw0j1d32nrKAqz7TyQa5rXnRj8dztclADzaRS0bUPMYp8kukqXUkXwbxeLfEFodV--Ejl321lSN3YTA5K0_eJaTn3UNEClGhNvsk-Ke2G50xQIdgaspj8UXVpvK9Rnc48I-OOrQ8fXEglZCQpFrmiBuuRIRGK3ySLLQDY4C4cjDQWRUNbeP9aFeYXrlDjVdGJ6ixsRXuj0D9MXvqDekemz2-xWeAe6LyDKWoJJ7x70888mQkiQ5x3hxHFc" alt="City" />
      </div>
    </div>
  </motion.div>
);

// -----------------------------------------------------
// Step 1: "Explorá tu ciudad, ganá recompensas"
// -----------------------------------------------------
const StepOne = ({ onNext, onSkip }: { onNext: () => void, onSkip: () => void; key?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
    className="relative flex h-full w-full flex-col bg-[#101f22] overflow-hidden max-w-md mx-auto"
  >
    <header className="flex items-center justify-between p-6 z-10 shrink-0">
      <div className="flex items-center gap-2">
        <img alt="NUBO" className="h-[72px] w-auto brightness-125 drop-shadow-[0_0_12px_rgba(67,221,226,0.6)]" src="https://lh3.googleusercontent.com/aida/ADBb0ujTO8OICi5dMqeWK-37zXjL6hSeOTulMvdrsKKR7Lv7fW8urGGZFy4hjQBQCW-bmlF-CYsXf4_O0ItQhwdM0ywSYtBX5yEVQNUNfY7zklBeOOxLw8wupr-o3Lf0Tu0agaQ2x5MT0tuSqiWXrkyFx_1fTiP7FwYTZTQvEuhfXtzMzEUTd3gPkulOP1Uqig7ZqBm7WpZN61bKigv5Qlb8FelxgNmMRRBpoA_yOhpNjTokkypSLIClOBqbZJwyiUC0I94KaJ2gE92bjw" />
      </div>
      <button onClick={onSkip} className="text-slate-400 text-sm font-medium px-4 py-1 rounded-full border border-slate-700/50 hover:bg-slate-800 transition-colors">
        Saltar
      </button>
    </header>

    <main className="flex-1 flex flex-col items-center justify-start relative px-4 pt-4 overflow-y-auto min-h-0 pb-10">
      <div className="absolute top-20 w-72 h-72 bg-[#19ccf0]/20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="relative w-full aspect-square shrink-0 max-h-[45vh]">
        <div className="w-full h-full bg-center bg-no-repeat bg-cover rounded-xl shadow-2xl shadow-[#19ccf0]/10 border border-white/5 overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAg89XhAf5aDsuaJc0bNNYHbZi7E2pSp8XKPtYoZ79DRIVRMSDJhV8N7oP95eonNwEUS0q03PEhOMdujdebfqqJJ0ReNHNzHsjTGhENWE410zNRYcMDtjYf6T33Z_Vw-6nG82OYU1oItlJ10xT3eu2qwa9A0FbB9eNkLcqsgOiYkrSSc3Opj_DgsdABLg0xNkpcKskobBOq_kNFP0SF-T9qQ1tYPAafTnKhEzoTSOHRydh60n3Y4xWaM254wNJhA8iZtNODasNNWrY')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#101f22] via-transparent to-transparent opacity-60"></div>
          <div className="absolute top-4 right-4 bg-[#19ccf0]/10 backdrop-blur-md p-2 rounded-lg border border-[#19ccf0]/20">
            <span className="material-symbols-outlined text-[#19ccf0] text-xl">token</span>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 space-y-4 text-center px-4 z-10">
        <h1 className="text-slate-100 text-3xl md:text-4xl font-bold leading-tight tracking-tight">
          Explorá tu ciudad,<br />
          <span className="text-[#19ccf0]">ganá recompensas</span>
        </h1>
        <p className="text-slate-400 text-lg font-normal leading-relaxed max-w-xs mx-auto">
          Nubo convierte tus salidas en una experiencia de juego donde cada visita tiene valor.
        </p>
      </div>
    </main>

    <footer className="p-8 pb-12 flex flex-col items-center gap-8 bg-gradient-to-t from-[#101f22] via-[#101f22]/95 to-transparent z-10 shrink-0 border-t border-white/5">
      <div className="flex items-center justify-center gap-3">
        <div className="h-1.5 w-6 rounded-full bg-[#19ccf0] shadow-[0_0_8px_rgba(25,204,240,0.6)]"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
      </div>
      <button onClick={onNext} className="w-full bg-[#19ccf0] hover:bg-[#19ccf0]/90 text-[#101f22] font-bold text-lg py-4 px-8 rounded-full transition-all active:scale-95 flex items-center justify-center gap-2">
        <span>Siguiente</span>
        <span className="material-symbols-outlined text-xl">arrow_forward</span>
      </button>
    </footer>
  </motion.div>
);

// -----------------------------------------------------
// Step 2: "Domina el Sistema"
// -----------------------------------------------------
const StepTwo = ({ onNext, onPrev }: { onNext: () => void, onPrev: () => void; key?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
    className="relative flex h-full w-full flex-col bg-[#101f22] overflow-hidden max-w-md mx-auto"
  >
    <header className="flex items-center justify-between p-6 z-10 shrink-0">
      <button onClick={onPrev} className="flex size-10 items-center justify-center rounded-full bg-slate-800 text-white transition-colors">
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
      <img alt="NUBO" className="h-[72px] w-auto brightness-125 drop-shadow-[0_0_12px_rgba(67,221,226,0.6)]" src="https://lh3.googleusercontent.com/aida/ADBb0ujTO8OICi5dMqeWK-37zXjL6hSeOTulMvdrsKKR7Lv7fW8urGGZFy4hjQBQCW-bmlF-CYsXf4_O0ItQhwdM0ywSYtBX5yEVQNUNfY7zklBeOOxLw8wupr-o3Lf0Tu0agaQ2x5MT0tuSqiWXrkyFx_1fTiP7FwYTZTQvEuhfXtzMzEUTd3gPkulOP1Uqig7ZqBm7WpZN61bKigv5Qlb8FelxgNmMRRBpoA_yOhpNjTokkypSLIClOBqbZJwyiUC0I94KaJ2gE92bjw" />
      <div className="w-10"></div>
    </header>

    <main className="flex-1 flex flex-col px-6 py-6 justify-center z-10 overflow-y-auto min-h-0">
      <div className="space-y-2 mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Domina el <span className="text-[#19ccf0]">Sistema</span>
        </h1>
        <p className="text-slate-400 text-lg">
          Visitá lugares, validá tu experiencia y recolectá ambos.
        </p>
      </div>

      <div className="space-y-6">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-[#19ccf0]/20 rounded-xl blur opacity-75"></div>
          <div className="relative flex items-center gap-4 rounded-xl bg-slate-900/80 p-5 shadow-sm ring-1 ring-slate-800">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#19ccf0]/10 border border-[#19ccf0]/30 text-[#19ccf0] shadow-[0_0_15px_rgba(25,204,240,0.3)]">
              <span className="material-symbols-outlined text-3xl font-bold">token</span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-white leading-tight">Nubo Points (NP)</h3>
              <p className="text-slate-400 text-sm leading-snug">
                Usalos para canjear premios reales en comercios asociados.
              </p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-0.5 bg-[#19ccf0]/20 rounded-xl blur opacity-75"></div>
          <div className="relative flex items-center gap-4 rounded-xl bg-slate-900/80 p-5 shadow-sm ring-1 ring-slate-800 text-left">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#19ccf0]/10 border border-[#19ccf0]/30 text-[#19ccf0] shadow-[0_0_15px_rgba(25,204,240,0.3)]">
              <span className="material-symbols-outlined text-3xl font-bold">bolt</span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-white leading-tight">Experience Points (XP)</h3>
              <p className="text-slate-400 text-sm leading-snug">
                Sumalos para subir de nivel y desbloquear beneficios exclusivos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="w-full h-32 rounded-xl bg-gradient-to-r from-[#19ccf0]/5 via-[#19ccf0]/20 to-[#19ccf0]/5 flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #19ccf0 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
          <div className="flex items-center gap-8 z-10">
            <div className="size-10 rounded-full bg-[#19ccf0] flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(25,204,240,0.6)]">
              <span className="text-xs font-black text-slate-950">NP</span>
            </div>
            <div className="h-px w-12 bg-[#19ccf0]/40 relative">
              <div className="absolute -top-1.5 -left-1.5 size-3 bg-[#19ccf0] rounded-full blur-[2px]"></div>
            </div>
            <div className="size-10 rounded-full bg-[#19ccf0] flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(25,204,240,0.6)]">
              <span className="text-xs font-black text-slate-950">XP</span>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer className="p-6 pb-12 flex flex-col gap-6 bg-slate-900/50 backdrop-blur-sm z-10 shrink-0 border-t border-white/5">
      <div className="flex justify-center gap-2">
        <div className="h-2 w-2 rounded-full bg-slate-700"></div>
        <div className="h-2 w-8 rounded-full bg-[#19ccf0] shadow-[0_0_8px_rgba(25,204,240,0.6)]"></div>
        <div className="h-2 w-2 rounded-full bg-slate-700"></div>
      </div>
      <button onClick={onNext} className="w-full h-16 rounded-full bg-[#19ccf0] text-slate-950 font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-[#19ccf0]/20 hover:brightness-110 active:scale-[0.98] transition-all">
        Siguiente
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </footer>
  </motion.div>
);

// -----------------------------------------------------
// Step 3: "Competí y compartí"
// -----------------------------------------------------
const StepThree = ({ onComplete, onPrev }: { onComplete: () => void, onPrev: () => void; key?: string }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3 }}
    className="relative flex h-full w-full flex-col bg-[#101f22] overflow-hidden max-w-md mx-auto"
  >
    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(25, 204, 240, 0.15) 0%, rgba(16, 31, 34, 0) 70%)' }}></div>

    <div className="relative flex items-center justify-between w-full p-6 pt-8 z-10 shrink-0">
      <button onClick={onPrev} className="flex size-10 items-center justify-center rounded-full bg-slate-800 text-white transition-colors">
        <span className="material-symbols-outlined text-slate-100">arrow_back</span>
      </button>
      <img alt="NUBO" className="h-[72px] w-auto brightness-125 drop-shadow-[0_0_12px_rgba(67,221,226,0.6)]" src="https://lh3.googleusercontent.com/aida/ADBb0ujTO8OICi5dMqeWK-37zXjL6hSeOTulMvdrsKKR7Lv7fW8urGGZFy4hjQBQCW-bmlF-CYsXf4_O0ItQhwdM0ywSYtBX5yEVQNUNfY7zklBeOOxLw8wupr-o3Lf0Tu0agaQ2x5MT0tuSqiWXrkyFx_1fTiP7FwYTZTQvEuhfXtzMzEUTd3gPkulOP1Uqig7ZqBm7WpZN61bKigv5Qlb8FelxgNmMRRBpoA_yOhpNjTokkypSLIClOBqbZJwyiUC0I94KaJ2gE92bjw" />
      <div className="size-10"></div>
    </div>

    <div className="flex flex-col items-center justify-center flex-1 py-8 px-6 z-10 overflow-y-auto min-h-0">
      <div className="relative w-full aspect-square max-w-[320px] mb-12 shrink-0 max-h-[40vh]">
        <div className="absolute inset-0 bg-[#19ccf0]/20 blur-[80px] rounded-full"></div>
        <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center">
          <img className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(25,204,240,0.3)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOpqvhzjqhj8-IV02Hf8xvVWXTZhBJ8bf_kqOO7nWrhAmZvMTodhtFT1R6NsZFqyLYiGczyZWcSGtc0tT8krH313FRS_oDlLJxTanfnueHL-VCvHVjiDtl7AHVG4loX0EuBujX_oKdQC_rb_3VHjSEph4kf4fXUOXFbuRM2DGV3gVQWILyOMwuKLt1oBRovGha-zpYPyShMq09Xqu8egYunezcrR1AGK7ZOZMGtv4HXjzgB1Emgcj8fKgrVRhr8hakR0KreXeyHbA" alt="3D avatars" />
        </div>
      </div>

      <div className="text-center space-y-4 px-2 max-w-sm">
        <h1 className="text-slate-100 text-4xl font-bold leading-tight tracking-tight">
          Competí y <span className="text-[#19ccf0]">compartí</span>
        </h1>
        <p className="text-slate-400 text-lg font-normal leading-relaxed">
          Unite a clubes, desafiá a tus amigos y conquistá el ranking semanal de tu ciudad.
        </p>
      </div>
    </div>

    <div className="relative flex flex-col items-center gap-8 pb-12 px-6 z-10 shrink-0 border-t border-white/5 pt-6 bg-[#101f22]/80 backdrop-blur-md">
      <div className="flex flex-row items-center justify-center gap-3">
        <div className="h-1.5 w-6 rounded-full bg-slate-700/50"></div>
        <div className="h-1.5 w-6 rounded-full bg-slate-700/50"></div>
        <div className="h-1.5 w-10 rounded-full bg-[#19ccf0] shadow-[0_0_20px_rgba(25,204,240,0.4)]"></div>
      </div>

      <button onClick={onComplete} className="w-full h-16 bg-[#19ccf0] hover:bg-[#19ccf0]/90 text-[#101f22] text-lg font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(25,204,240,0.4)] active:scale-[0.98]">
        <span>Empezar a explorar</span>
        <span className="material-symbols-outlined font-bold">rocket_launch</span>
      </button>

      <button onClick={onComplete} className="text-slate-500 font-medium text-sm hover:text-slate-300 transition-colors">
        ¿Ya tenés cuenta? <span className="text-[#19ccf0] underline underline-offset-4">Iniciá sesión</span>
      </button>
    </div>
  </motion.div>
);
