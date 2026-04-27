import { useState } from 'react';
import { seedDatabase } from '../lib/seedDatabase';

import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';

export function SettingsMenuScreen({ 
  onBack,
  onIdentityClick,
  onPrivacyClick,
  onPaymentsClick,
  onAppearanceClick,
  onHelpClick,
  onAboutClick,
  onAuthClick,
  onMerchantPortalClick
}: { 
  onBack?: () => void;
  onIdentityClick?: () => void;
  onPrivacyClick?: () => void;
  onPaymentsClick?: () => void;
  onAppearanceClick?: () => void;
  onHelpClick?: () => void;
  onAboutClick?: () => void;
  onAuthClick?: () => void;
  onMerchantPortalClick?: () => void;
}) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedStatus, setSeedStatus] = useState<{message: string; type: 'success' | 'error'} | null>(null);

  const handleSeed = async () => {
    setIsSeeding(true);
    setSeedStatus(null);
    const result = await seedDatabase();
    setIsSeeding(false);
    if (result.success) {
      setSeedStatus({ message: '¡Datos inyectados correctamente! Revisa tu consola de Firebase.', type: 'success' });
      // clear message after 5 seconds
      setTimeout(() => setSeedStatus(null), 5000);
    } else {
      setSeedStatus({ message: `Ocurrió un error al inyectar los datos: ${result.error}`, type: 'error' });
    }
  };

  return (
    <div className="bg-background-dark text-slate-100 flex flex-col w-full lg:max-w-md lg:mx-auto relative dark">
      {/* TopAppBar */}
      <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/10 px-6 h-16 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="material-symbols-outlined text-slate-400 hover:text-[#00f2ff] transition-colors">
            arrow_back
          </button>
          <h1 className="text-lg font-bold tracking-tight">Ajustes</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pt-6 space-y-6">
        {/* Account Section */}
        <section>
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 ml-2">Cuenta</h2>
          <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/5 border border-white/10">
            <button onClick={onIdentityClick} className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">person</span>
                <span className="font-medium text-sm">Validar Identidad</span>
              </div>
              <span className="material-symbols-outlined text-slate-600">chevron_right</span>
            </button>
            <button onClick={onPrivacyClick} className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">lock</span>
                <span className="font-medium text-sm">Privacidad y Seguridad</span>
              </div>
              <span className="material-symbols-outlined text-slate-600">chevron_right</span>
            </button>
            <button onClick={onPaymentsClick} className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">credit_card</span>
                <span className="font-medium text-sm">Métodos de Pago</span>
              </div>
              <span className="material-symbols-outlined text-slate-600">chevron_right</span>
            </button>
          </div>
        </section>

        {/* Preferences Section */}
        <section>
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 ml-2">Preferencias</h2>
          <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/5 border border-white/10">
            <div className="w-full flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">notifications</span>
                <span className="font-medium text-sm">Notificaciones</span>
              </div>
              <button 
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${notificationsEnabled ? 'bg-[#00f2ff]' : 'bg-slate-700'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${notificationsEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>
            <div className="w-full flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">location_on</span>
                <span className="font-medium text-sm">Ubicación</span>
              </div>
              <button 
                onClick={() => setLocationEnabled(!locationEnabled)}
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${locationEnabled ? 'bg-[#00f2ff]' : 'bg-slate-700'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${locationEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>
            <button onClick={onAppearanceClick} className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">palette</span>
                <span className="font-medium text-sm">Apariencia</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500">
                <span className="text-xs">Oscuro</span>
                <span className="material-symbols-outlined">chevron_right</span>
              </div>
            </button>
          </div>
        </section>

        {/* Support Section */}
        <section>
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 ml-2">Soporte</h2>
          <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/5 border border-white/10">
            <button onClick={onHelpClick} className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">help</span>
                <span className="font-medium text-sm">Ayuda y Preguntas Frecuentes</span>
              </div>
              <span className="material-symbols-outlined text-slate-600">chevron_right</span>
            </button>
            <button onClick={onAboutClick} className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">info</span>
                <span className="font-medium text-sm">Acerca de Nubo</span>
              </div>
              <span className="material-symbols-outlined text-slate-600">chevron_right</span>
            </button>
          </div>
        </section>

        {/* Developer / Testing Zone */}
        <section>
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 ml-2">Testing (Prototipo)</h2>
          <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/5 border border-white/10">
            <button 
              onClick={onMerchantPortalClick} 
              className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-fuchsia-400">storefront</span>
                <span className="font-medium text-sm text-fuchsia-400">Portal de Comercios (Roles)</span>
              </div>
            </button>
            <button 
              onClick={onAuthClick} 
              className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#00f2ff]">login</span>
                <span className="font-medium text-sm">Autenticación (Login/Sign up)</span>
              </div>
            </button>
            <button 
              onClick={() => {
                localStorage.removeItem('nubo_onboarding_completed');
                window.location.reload();
              }} 
              className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#00f2ff]">restart_alt</span>
                <span className="font-medium text-sm">Reiniciar Tutorial (Onboarding)</span>
              </div>
            </button>
            <button 
              onClick={handleSeed} 
              disabled={isSeeding}
              className={`w-full flex flex-col p-4 hover:bg-white/5 transition-colors ${isSeeding ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="flex items-center gap-3 w-full">
                <span className="material-symbols-outlined text-[#00f2ff]">{isSeeding ? 'hourglass_empty' : 'database'}</span>
                <span className="font-medium text-sm">{isSeeding ? 'Inyectando datos...' : 'Crear base de datos falsa'}</span>
              </div>
              {seedStatus && (
                <div className={`mt-2 text-xs text-left p-2 rounded ${seedStatus.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                  {seedStatus.message}
                </div>
              )}
            </button>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="pt-4">
          <button 
            onClick={async () => {
              localStorage.setItem('nubo_simulated_auth', 'false');
              await signOut(auth);
              if (onBack) onBack(); // Go back to profile which will now show signed out state
            }}
            className="w-full flex items-center justify-center p-4 rounded-2xl border border-red-500/20 text-red-500 hover:bg-red-500/10 transition-colors font-bold text-sm"
          >
            Cerrar Sesión
          </button>
          
          <div className="text-center mt-6 text-slate-600 text-xs">
            <p>Versión 1.0.4 (Build 42)</p>
          </div>
        </section>
      </main>
    </div>
  );
}
