import React, { useState } from 'react';
import { motion } from 'motion/react';
import { auth, googleProvider } from '../lib/firebase';
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export function AuthScreen({ onBack, onSuccess }: { onBack: () => void, onSuccess?: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      if (onSuccess) onSuccess();
    } catch (err: any) {
      setError(err.message || 'Authentication error');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setError(null);
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      if (onSuccess) onSuccess();
    } catch (err: any) {
      setError(err.message || 'Google Auth error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#090f11] text-slate-100 font-sans antialiased overflow-y-auto h-screen flex flex-col w-full lg:max-w-md lg:mx-auto relative hide-scrollbar pb-24">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[#090f11]/80 backdrop-blur-xl border-b border-white/5 pt-12 pb-4 px-6 flex items-center h-24">
        <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors mr-4 p-2 -ml-2 rounded-full hover:bg-white/5">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-xl font-display font-medium">{isLogin ? 'Iniciar Sesión' : 'Registro'}</h1>
      </div>

      <div className="p-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="glass-card p-6 rounded-2xl border border-white/5"
        >
          <div className="text-center mb-8">
             <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
               <span className="material-symbols-outlined text-primary text-3xl">person</span>
             </div>
             <h2 className="font-display text-2xl mb-2">{isLogin ? 'Bienvenido a Nubo' : 'Únete a Nubo'}</h2>
             <p className="text-on-surface-variant text-sm">
               {isLogin ? 'Ingresa para continuar tu aventura.' : 'Crea una cuenta para empezar a ganar puntos.'}
             </p>
          </div>

          <form onSubmit={handleEmailAuth} className="space-y-4">
            <div>
              <label className="block text-xs text-on-surface-variant font-label-caps mb-1">Correo Electrónico</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-xs text-on-surface-variant font-label-caps mb-1">Contraseña</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
               <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs p-3 rounded-lg mt-2">
                 {error}
               </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold mt-6 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
            >
              {loading ? 'Procesando...' : (isLogin ? 'Ingresar' : 'Registrarse')}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center space-x-4">
             <div className="h-px bg-white/10 flex-1"></div>
             <span className="text-xs text-on-surface-variant font-label-caps">O CONTINÚA CON</span>
             <div className="h-px bg-white/10 flex-1"></div>
          </div>

          <button 
            onClick={handleGoogleAuth}
            disabled={loading}
            className="w-full bg-white text-black py-3 rounded-xl font-bold mt-6 flex items-center justify-center gap-2 hover:bg-slate-200 active:scale-95 transition-all disabled:opacity-50"
          >
             <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
             </svg>
             Google
          </button>

          <div className="mt-8 text-center">
            <button 
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
              }} 
              className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {isLogin ? '¿No tienes cuenta? Regístrate aquí' : '¿Ya tienes cuenta? Inicia sesión'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
