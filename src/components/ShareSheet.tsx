import { useState } from 'react';

export function ShareSheet({ 
  onClose, 
  title = "Compartir esto", 
  text = "¡Mira lo que encontré en Nubo!", 
  url = "https://nubo.app" 
}: { 
  onClose: () => void, 
  title?: string, 
  text?: string, 
  url?: string 
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${text} ${url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[200] flex flex-col justify-end bg-black/60 backdrop-blur-sm lg:max-w-md lg:mx-auto">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="bg-[#1a2325] rounded-t-3xl pt-2 pb-10 px-6 relative z-10 w-full animate-slide-up shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        {/* Grabber */}
        <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-6" />
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <button onClick={onClose} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Share Options */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 rounded-full bg-[#25d366]/20 text-[#25d366] flex items-center justify-center group-hover:bg-[#25d366] group-hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M12.031 0C5.385 0 0 5.388 0 12.035c0 2.128.552 4.195 1.603 6.01L.223 23.33l5.44-1.428a11.967 11.967 0 006.368 1.834h.005C18.678 23.736 24 18.348 24 11.698 24 5.253 18.636 0 12.031 0zm0 21.724c-1.802 0-3.565-.484-5.11-1.4l-.367-.217-3.793.996.994-3.7-.238-.38A9.924 9.924 0 012.016 11.7c0-5.508 4.476-9.983 9.981-9.983 5.508 0 9.986 4.475 9.986 9.983 0 5.508-4.478 9.983-9.986 9.983h-.001zm5.48-7.5l-3.003-1.488c-.282-.14-.486-.21-.69.093-.205.303-.843 1.049-1.032 1.263-.19.214-.378.24-.66.098-2.316-1.162-3.8-2.617-4.66-4.103-.195-.333.197-.312.484-.888.093-.187.047-.35-.047-.538-.093-.186-.69-1.666-.945-2.28-.248-.597-.5-.516-.69-.526-.183-.007-.393-.008-.602-.008-.21 0-.555.078-.846.398C4.557 6.745 3.65 7.55 3.65 9.204c0 1.654 1.218 3.25 1.385 3.473.168.223 2.378 3.626 5.76 5.083.803.344 1.432.553 1.92.709.805.257 1.54.22 2.115.133.645-.098 1.986-.813 2.268-1.597.282-.784.282-1.458.197-1.597-.084-.139-.307-.221-.59-.364z"/>
              </svg>
            </div>
            <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors">WhatsApp</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 rounded-full bg-[#1da1f2]/20 text-[#1da1f2] flex items-center justify-center group-hover:bg-[#1da1f2] group-hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>
            <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors">Twitter</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 rounded-full bg-[#e1306c]/20 text-[#e1306c] flex items-center justify-center group-hover:bg-[#e1306c] group-hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>
            <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors">Instagram</span>
          </button>
          
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 rounded-full bg-[#0088cc]/20 text-[#0088cc] flex items-center justify-center group-hover:bg-[#0088cc] group-hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/>
              </svg>
            </div>
            <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors">Telegram</span>
          </button>
        </div>

        {/* Copy Link */}
        <div className="bg-[#0f1719] border border-white/10 rounded-2xl p-2 flex items-center gap-3">
          <div className="flex-1 truncate px-3 text-sm text-slate-400">
            {url}
          </div>
          <button 
            onClick={handleCopy}
            className={`flex items-center justify-center px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
              copied ? 'bg-primary text-[#0a1416]' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {copied ? '¡Copiado!' : 'Copiar'}
          </button>
        </div>
      </div>
    </div>
  );
}
