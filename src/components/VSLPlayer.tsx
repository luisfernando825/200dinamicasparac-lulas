import React, { useState, useEffect, useRef } from 'react';

export function VSLPlayer() {
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Observador para detectar quando o player da LiteVideo injeta o conteúdo
    const checkReady = () => {
      if (!containerRef.current) return false;
      const lt = containerRef.current.querySelector('lt-v2');
      if (!lt) return false;
      
      // Verifica se o shadowRoot foi criado e tem conteúdo (padrão novo da LiteVideo)
      if (lt.shadowRoot && lt.shadowRoot.childNodes.length > 0) {
        return true;
      }
      
      // Verifica se injetou iframe ou video diretamente (padrão antigo)
      if (lt.querySelector('iframe, video')) {
        return true;
      }
      
      return false;
    };

    // Checa a cada 150ms
    const interval = setInterval(() => {
      if (checkReady()) {
        // Adiciona um pequeno delay para garantir que a thumbnail renderizou visualmente
        setTimeout(() => setIsReady(true), 400);
        clearInterval(interval);
      }
    }, 150);

    // Fallback de segurança: libera a tela após 4 segundos de qualquer forma
    // para garantir que o usuário nunca fique travado na tela de carregamento
    const timeout = setTimeout(() => {
      setIsReady(true);
      clearInterval(interval);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="w-full max-w-[320px] sm:max-w-sm mx-auto">
      {/* 
        Container com proporção 9:16 exata para evitar pulos na tela (layout shift) 
        enquanto o vídeo carrega em conexões mais lentas como 4G.
      */}
      <div 
        ref={containerRef}
        className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-50 aspect-[9/16] border-4 border-slate-100"
      >
        
        {/* Overlay Claro de Carregamento (Fica por cima e esconde a tela preta do player) */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-20 transition-opacity duration-500 pointer-events-none ${
            isReady ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="relative flex items-center justify-center mb-4">
            <div className="w-12 h-12 border-4 border-slate-200 rounded-full"></div>
            <div className="w-12 h-12 border-4 border-brand-purple rounded-full border-t-transparent animate-spin absolute"></div>
          </div>
          <span className="text-sm font-semibold text-slate-500 animate-pulse">
            Preparando vídeo...
          </span>
        </div>

        {/* Video Player */}
        <div 
          className="absolute inset-0 z-10 w-full h-full"
          dangerouslySetInnerHTML={{ 
            __html: '<lt-v2 v="61c297e1-9dc8-449e-a00f-a80f03381870" ar="9:16" p="ph=8&sc=0"></lt-v2>' 
          }}
        />
      </div>
    </div>
  );
}
