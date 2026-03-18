import React, { useState, useEffect, useRef } from 'react';
import { Loader2 } from 'lucide-react';

export function VSLPlayer() {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Função para checar se o LiteVideo já injetou o player
    const checkVideoLoad = () => {
      if (containerRef.current) {
        const ltElement = containerRef.current.querySelector('lt-v2');
        if (ltElement) {
          // Verifica se o LiteVideo já injetou o iframe ou shadow DOM
          const hasShadowRoot = !!ltElement.shadowRoot;
          const hasChildren = ltElement.children.length > 0;
          const hasContent = ltElement.innerHTML.length > 10;
          
          if (hasShadowRoot || hasChildren || hasContent) {
            // Dá um pequeno delay extra para garantir que a thumbnail renderizou visualmente
            setTimeout(() => setIsLoaded(true), 800);
            return true;
          }
        }
      }
      return false;
    };

    // Checa a cada 300ms
    const interval = setInterval(() => {
      if (checkVideoLoad()) {
        clearInterval(interval);
      }
    }, 300);

    // Fallback de segurança: remove o loader após 15 segundos
    const timeout = setTimeout(() => {
      setIsLoaded(true);
      clearInterval(interval);
    }, 15000);

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
        className="relative w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-[9/16] border-4 border-slate-100"
      >
        {/* Loading State Overlay */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center z-20 bg-slate-900 transition-opacity duration-700 pointer-events-none ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Loader2 className="w-10 h-10 animate-spin mb-4 text-brand-purple" />
          <span className="text-sm font-medium text-slate-300 animate-pulse">
            Carregando vídeo...
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
