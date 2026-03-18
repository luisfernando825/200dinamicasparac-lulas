import { 
  CheckCircle2, 
  ChevronDown, 
  ShieldCheck, 
  Smartphone, 
  Users, 
  Clock, 
  Search,
  BookOpen,
  HeartHandshake,
  MessageCircle,
  Gift,
  Star,
  Zap,
  ArrowRight,
  ArrowDown,
  X,
  Play,
  Flame,
  Church,
  Bird,
  MessageSquareX,
  LightbulbOff,
  Frown,
  Cross
} from 'lucide-react';
import { useState, useEffect, memo, useRef } from 'react';
import { VSLPlayer } from './components/VSLPlayer';

const CrossIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3v18" />
    <path d="M7 8h10" />
  </svg>
);

const DoveIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 7h-4a2 2 0 0 0-2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h4a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 1-2-2V9a2 2 0 0 0-2-2z" />
  </svg>
);

const TimerBanner = memo(() => {
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-brand-purple to-indigo-900 text-white py-2 sm:py-2.5 px-2 relative z-50 shadow-md border-b border-white/10">
      <div className="container mx-auto flex flex-row items-center justify-center gap-2 sm:gap-4">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-amber-500"></span>
          </div>
          <span className="uppercase tracking-wider text-xs sm:text-sm font-bold text-white/90">
            Oferta especial encerra em:
          </span>
        </div>
        
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Minutes */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded px-2 py-1 sm:px-2.5 sm:py-1 flex items-center justify-center shadow-inner">
            <span className="font-mono text-lg sm:text-xl font-bold text-white tracking-tight">
              {minutes.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs text-white/70 ml-0.5 font-medium uppercase">m</span>
          </div>
          
          {/* Separator */}
          <span className="text-base sm:text-lg font-bold text-white/50 animate-pulse pb-0.5">:</span>
          
          {/* Seconds */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded px-2 py-1 sm:px-2.5 sm:py-1 flex items-center justify-center shadow-inner">
            <span className="font-mono text-lg sm:text-xl font-bold text-white tracking-tight">
              {seconds.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs text-white/70 ml-0.5 font-medium uppercase">s</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default function App() {
  const [isUpsellModalOpen, setIsUpsellModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-purple selection:text-white">
      
      {/* Top Timer Banner */}
      <TimerBanner />

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-20 lg:pb-24 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-purple/10 via-white to-white"></div>
        
        {/* Elementos Evangélicos de Fundo */}
        <CrossIcon className="absolute top-8 left-4 sm:top-12 sm:left-8 md:left-20 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 text-brand-purple/5 -rotate-12 pointer-events-none" />
        <DoveIcon className="absolute bottom-12 right-4 sm:bottom-20 sm:right-8 md:right-20 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 text-brand-blue/5 rotate-12 pointer-events-none" />
        <Flame className="absolute top-24 right-8 sm:top-32 sm:right-12 md:right-32 w-12 h-12 sm:w-16 sm:h-16 text-orange-500/5 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          <div className="flex flex-col items-center text-center">
            
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple-dark text-[10px] sm:text-xs font-bold tracking-wide uppercase mb-6 sm:mb-8">
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>MATERIAL DIGITAL • ACESSO IMEDIATO</span>
            </div>
            
            <h1 className="text-[42px] sm:text-6xl md:text-7xl lg:text-[80px] font-black tracking-tight text-slate-900 mb-10 sm:mb-14 leading-[1.1] sm:leading-[1.05] text-balance mx-auto">
              +200 Dinâmicas Prontas para <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-purple-600 to-brand-blue drop-shadow-sm">Engajar Jovens e Crianças</span> na Sua Célula
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-16 sm:mb-20 max-w-2xl mx-auto leading-relaxed font-medium px-2 sm:px-0">
              Pare de perder horas procurando ideias. Use dinâmicas simples que quebram o gelo e fazem os jovens participarem.
            </p>
            
            <div className="flex flex-col items-center gap-3 mb-10 sm:mb-12 w-full sm:w-auto mt-8 sm:mt-12">
              <a href="#planos" className="inline-flex items-center justify-center gap-2 w-[90%] sm:w-auto px-6 py-3.5 bg-brand-purple hover:bg-brand-purple-dark text-white rounded-xl font-bold text-[15px] sm:text-base transition-all shadow-lg shadow-brand-purple/30 hover:shadow-xl hover:shadow-brand-purple/40 hover:-translate-y-0.5 group transform-gpu">
                ACESSAR AS +200 DINÂMICAS
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform transform-gpu" />
              </a>
              <span className="text-xs sm:text-sm font-medium text-slate-500">
                🔥 Apenas R$9,90 • acesso imediato
              </span>
            </div>
            
            <div className="pt-6 sm:pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" decoding="async" fetchPriority="high" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start text-xs sm:text-sm">
                  <div className="flex text-yellow-400 mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />)}
                  </div>
                  <span className="font-bold text-slate-700">+500 líderes já usam</span>
                </div>
              </div>

            </div>

            {/* VSL NO HERO */}
            <div className="mt-12 sm:mt-16 w-full max-w-4xl mx-auto flex flex-col items-center">
              <VSLPlayer />
              
              <div className="mt-6 flex items-center justify-center gap-2.5 text-sm sm:text-base font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-6 py-3 rounded-full shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-500">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                ACESSO IMEDIATO VIA WHATSAPP
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NOVO: SEÇÃO DE FRUSTRAÇÕES */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">
              LÍDERES SEM UTILIZAR AS +200 DINÂMICAS
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-16 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-2xl shadow-sm border-2 border-blue-500 flex flex-col gap-4 items-center hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-600 transition-all duration-300 group cursor-default transform-gpu">
              <div className="w-full rounded-xl overflow-hidden bg-slate-100">
                <img src="https://i.imgur.com/9Ze80hV.png" alt="Silêncio constrangedor" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              </div>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium text-center px-2 pb-2">
                Você faz uma pergunta… olha para o grupo… e ninguém responde.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border-2 border-blue-500 flex flex-col gap-4 items-center hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-600 transition-all duration-300 group cursor-default transform-gpu">
              <div className="w-full rounded-xl overflow-hidden bg-slate-100">
                <img src="https://i.imgur.com/zXZ9erh.png" alt="Jovens perdendo o interesse" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              </div>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium text-center px-2 pb-2">
                Alguns começam a mexer no celular, outros ficam quietos esperando a reunião acabar.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border-2 border-blue-500 flex flex-col gap-4 items-center hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-600 transition-all duration-300 group cursor-default transform-gpu">
              <div className="w-full max-w-[200px] aspect-square rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center p-4">
                <img src="https://i.imgur.com/leQVQJ1.png" alt="Falta de ideias para cada reunião" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 transform-gpu" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              </div>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium text-center px-2 pb-2">
                Toda semana você precisa pensar em algo novo para manter o grupo interessado.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border-2 border-blue-500 flex flex-col gap-4 items-center hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-600 transition-all duration-300 group cursor-default transform-gpu">
              <div className="w-full rounded-xl overflow-hidden bg-slate-100">
                <img src="https://i.imgur.com/SUuLCWr.png" alt="Horas tentando preparar algo" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              </div>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium text-center px-2 pb-2">
                Você passa muito tempo procurando ideias na internet ou tentando improvisar uma atividade.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm border-2 border-blue-500 flex flex-col gap-4 items-center hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-600 transition-all duration-300 group cursor-default md:col-span-2 md:max-w-lg md:mx-auto w-full transform-gpu">
              <div className="w-full rounded-xl overflow-hidden bg-slate-100">
                <img src="https://i.imgur.com/xXVNekZ.png" alt="Reuniões que não engajam" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              </div>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium text-center px-2 pb-2">
                A célula acontece… mas parece mais uma conversa parada do que um encontro vivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DA SOLUÇÃO E MOCKUP */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-brand-purple uppercase tracking-widest mb-6">
              A Solução
            </h2>
            <div className="w-14 h-14 rounded-full bg-brand-purple/10 flex items-center justify-center animate-bounce">
              <ArrowDown className="w-8 h-8 text-brand-purple" />
            </div>
          </div>

          {/* Mockup Image */}
          <div className="w-full max-w-4xl mx-auto relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-brand-blue/20 rounded-[3rem] blur-3xl -z-10 transform rotate-2 scale-105"></div>
            <img src="https://i.imgur.com/ZS9ggsf.webp" alt="Mockup do Material" className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>



      {/* 4. SEÇÃO DE CATEGORIAS */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <DoveIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] text-slate-200/40 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dinâmicas para cada momento</h2>
            <p className="text-slate-600">Organizadas por categorias para você achar exatamente o que precisa em segundos.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { name: "Quebra-gelo", image: "https://i.imgur.com/GuNo45n.webp" },
              { name: "Edificação", image: "https://i.imgur.com/NXxc8qs.webp" },
              { name: "Comunhão", image: "https://i.imgur.com/bd9txsV.webp" },
              { name: "Evangelismo", image: "https://i.imgur.com/pvKtydZ.webp" },
              { name: "Oração", image: "https://i.imgur.com/sTAXzFo.webp" },
              { name: "Reflexão", image: "https://i.imgur.com/RjY8r1H.webp" }
            ].map((cat, i) => (
              <div key={i} className="flex flex-col items-center justify-center bg-white rounded-2xl border-2 border-brand-purple/20 shadow-sm text-center hover:shadow-xl hover:shadow-brand-purple/20 hover:-translate-y-2 hover:scale-105 hover:border-brand-purple/60 transition-all duration-300 overflow-hidden transform-gpu">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE BÔNUS */}
      <section className="py-20 bg-white text-slate-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-purple/10 mb-6 shadow-sm border border-brand-purple/20">
              <span className="text-3xl">🎁</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Você também vai receber <br className="hidden md:block" />
              <span className="text-brand-purple">
                TUDO isso de presente:
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Esses bônus sozinhos já valeriam mais de <span className="font-bold text-brand-purple">R$97</span>.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "20 Perguntas Cristãs para Quebrar o Gelo",
                image: "https://i.imgur.com/VALZZ4Z.webp",
                oldPrice: "29,90"
              },
              {
                title: "15 Dinâmicas Bíblicas Extras",
                image: "https://i.imgur.com/7Kk0T6d.webp",
                oldPrice: "39,90"
              },
              {
                title: "Guia: Como conduzir uma célula que engaja jovens",
                image: "https://i.imgur.com/fbD0Z1g.webp",
                oldPrice: "49,90"
              },
              {
                title: "Certificado de Conclusão de Célula",
                image: "https://i.imgur.com/xzgKTkh.webp",
                oldPrice: "19,90"
              },
              {
                title: "30 Jogos Bíblicos para Crianças",
                image: "https://i.imgur.com/clOlq1Z.webp",
                oldPrice: "39,90"
              }
            ].map((bonus, i) => (
              <div key={i} className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden flex flex-col group hover:border-brand-purple/50 transition-all duration-300 max-w-[340px] mx-auto sm:max-w-none w-full shadow-lg hover:shadow-xl hover:shadow-brand-purple/10 hover:-translate-y-1 transform-gpu">
                <div className="aspect-[4/5] relative overflow-hidden bg-slate-50 p-4 flex items-center justify-center border-b-2 border-slate-100">
                  <img 
                    src={bonus.image} 
                    alt={bonus.title} 
                    className={`w-full h-full object-contain transition-transform duration-500 drop-shadow-2xl transform-gpu ${i === 4 ? 'scale-125 group-hover:scale-[1.35]' : 'group-hover:scale-105'}`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4 bg-brand-purple text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg z-10">
                    Bônus {i + 1}
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex flex-col items-center justify-center bg-white text-center flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-snug">{bonus.title}</h3>
                  <div className="flex flex-col items-center justify-center gap-1 mt-auto">
                    <span className="text-sm text-slate-500 line-through decoration-red-500/50">De R$ {bonus.oldPrice}</span>
                    <span className="text-[#22C55E] font-black text-xl uppercase tracking-wide">Por Grátis</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DEPOIMENTOS */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O que estão dizendo</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Veja o impacto que o material está causando em outras células.</p>
          </div>
        </div>
        
        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden group gap-6">
          <div className="animate-marquee flex shrink-0 gap-6 w-max group-hover:[animation-play-state:paused] will-change-transform">
            {[
              "https://i.imgur.com/G2N7Obn.webp",
              "https://i.imgur.com/0BpEt95.webp",
              "https://i.imgur.com/kCw4DTm.webp",
              "https://i.imgur.com/dqfCDDD.webp",
              "https://i.imgur.com/G2N7Obn.webp",
              "https://i.imgur.com/0BpEt95.webp",
              "https://i.imgur.com/kCw4DTm.webp",
              "https://i.imgur.com/dqfCDDD.webp"
            ].map((imgUrl, i) => (
              <div key={i} className="w-[280px] sm:w-[320px] md:w-[400px] shrink-0 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <img 
                  src={imgUrl} 
                  alt={`Depoimento ${i + 1}`} 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="800"
                />
              </div>
            ))}
          </div>
          <div className="animate-marquee flex shrink-0 gap-6 w-max group-hover:[animation-play-state:paused] will-change-transform" aria-hidden="true">
            {[
              "https://i.imgur.com/G2N7Obn.webp",
              "https://i.imgur.com/0BpEt95.webp",
              "https://i.imgur.com/kCw4DTm.webp",
              "https://i.imgur.com/dqfCDDD.webp",
              "https://i.imgur.com/G2N7Obn.webp",
              "https://i.imgur.com/0BpEt95.webp",
              "https://i.imgur.com/kCw4DTm.webp",
              "https://i.imgur.com/dqfCDDD.webp"
            ].map((imgUrl, i) => (
              <div key={i} className="w-[280px] sm:w-[320px] md:w-[400px] shrink-0 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <img 
                  src={imgUrl} 
                  alt={`Depoimento ${i + 1}`} 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="800"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO DE PLANOS */}
      <section id="planos" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Escolha o melhor plano</h2>
            <p className="text-slate-600">Pagamento único. Acesso vitalício.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto items-center">
            
            {/* Plano Simples */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">Plano Simples</h3>
                <div className="mt-4 flex items-baseline text-4xl font-extrabold text-slate-900">
                  <span className="text-2xl font-medium text-slate-500 mr-1">R$</span>9,90
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "+200 dinâmicas bíblicas",
                  "Acesso imediato",
                  "PDF organizado"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => setIsUpsellModalOpen(true)}
                className="w-full py-3.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl transition-colors"
              >
                ADQUIRIR O PLANO SIMPLES
              </button>
            </div>

            {/* Plano Completo */}
            <div className="bg-white p-8 rounded-[20px] border-2 border-brand-purple shadow-2xl shadow-brand-purple/20 flex flex-col h-full relative transform md:-translate-y-4 hover:scale-105 transition-all duration-300 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 px-5 py-1.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-widest shadow-lg whitespace-nowrap flex items-center gap-1.5 border border-amber-300">
                ⭐ MAIS POPULAR ENTRE LÍDERES
              </div>
              
              <div className="text-center mb-8 mt-4">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Plano Completo</h3>
                <div className="text-xs font-bold text-brand-purple uppercase tracking-[0.2em] mb-2">HOJE POR APENAS</div>
                <div className="flex items-center justify-center text-6xl font-black text-slate-900 drop-shadow-sm">
                  <span className="text-2xl font-medium text-slate-500 mr-1.5 -mt-6">R$</span>24,90
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "+200 dinâmicas bíblicas",
                  <span key="bonus" className="font-bold text-slate-900">Todos os bônus</span>,
                  "Atualizações futuras",
                  "Material extra",
                  "Suporte prioritário via WhatsApp"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm md:text-base">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="https://pay.wiapy.com/KyGiCuIevD" className="w-full py-4 px-4 sm:px-6 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 text-sm sm:text-base uppercase tracking-wide">
                <Cross className="w-5 h-5 opacity-80" />
                <span>QUERO O PLANO COMPLETO</span>
                <Cross className="w-5 h-5 opacity-80" />
              </a>
            </div>

          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm md:text-base text-slate-600 font-medium text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">✅</span> Acesso imediato do Drive após a compra
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg">🔒</span> Pagamento 100% seguro
            </div>
          </div>
        </div>
      </section>

      {/* 7. GARANTIA */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <img 
            src="https://i.imgur.com/MeA4A3f.webp" 
            alt="Selo de Garantia de 7 Dias" 
            className="w-32 md:w-40 h-auto mx-auto mb-6 drop-shadow-md hover:scale-105 transition-transform transform-gpu"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            width="160"
            height="160"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Teste por 7 dias sem risco</h2>
          <p className="text-slate-600 text-lg">Se você não gostar do material ou achar que não serve para a sua célula, devolvemos 100% do seu valor. Sem perguntas.</p>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 bg-slate-800 relative overflow-hidden">
        <CrossIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] text-slate-700/30 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Como recebo o material?", a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para baixar o PDF completo e os bônus." },
              { q: "Funciona para qualquer igreja?", a: "Sim! As dinâmicas são baseadas em princípios cristãos universais e podem ser adaptadas para qualquer denominação ou grupo de jovens." },
              { q: "Preciso imprimir?", a: "Não é obrigatório. O material é otimizado para leitura no celular ou tablet, mas você pode imprimir se preferir." },
              { q: "Posso usar toda semana?", a: "Com certeza. Com +200 dinâmicas bíblicas, você tem material suficiente para quase 4 anos de encontros semanais sem repetir." },
              { q: "Como funciona a garantia?", a: "Você tem 7 dias para avaliar o material. Se não estiver satisfeito, basta enviar um e-mail para nosso suporte e reembolsaremos o valor integral." }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="py-24 bg-white text-center relative overflow-hidden">
        <DoveIcon className="absolute top-10 left-10 w-24 h-24 text-brand-blue/5 -rotate-12 pointer-events-none" />
        <CrossIcon className="absolute bottom-10 right-10 w-32 h-32 text-brand-purple/5 rotate-12 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Pare de perder tempo pensando no que fazer na célula.</h2>
          <p className="text-xl text-slate-600 mb-10">Tenha um arsenal de dinâmicas prontas na palma da sua mão e foque no que realmente importa: pastorear seus jovens.</p>
          
          <a href="#planos" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-5 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-xl font-bold text-xl transition-all shadow-lg shadow-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/40 hover:-translate-y-1 transform-gpu">
            ACESSAR AS DINÂMICAS AGORA
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-900 text-slate-400 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} +200 Dinâmicas para Célula. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* UPSELL MODAL */}
      {isUpsellModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="bg-white rounded-[20px] shadow-2xl shadow-brand-purple/20 w-full max-w-md p-6 relative animate-in fade-in zoom-in duration-300 border-2 border-brand-purple flex flex-col">
            <button 
              onClick={() => setIsUpsellModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 px-5 py-1.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-widest shadow-lg whitespace-nowrap flex items-center gap-1.5 border border-amber-300 z-20">
              ⭐ MAIS POPULAR ENTRE LÍDERES
            </div>
            
            <div className="text-center mb-5 mt-4">
              <p className="text-amber-600 font-bold text-sm md:text-base mb-2 animate-pulse">
                ⏳ Espere! Antes de sair veja essa oferta exclusiva
              </p>
              <h3 className="text-xl font-bold text-slate-900 mb-2 drop-shadow-sm">Plano Completo</h3>
              <div className="text-[10px] font-bold text-brand-purple uppercase tracking-[0.2em] mb-1">HOJE POR APENAS</div>
              <div className="flex items-center justify-center text-5xl font-black text-slate-900 drop-shadow-sm">
                <span className="text-xl font-medium text-slate-500 mr-1.5 -mt-4">R$</span>16,90
              </div>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              {[
                "+200 dinâmicas bíblicas para célula",
                "Todos os bônus exclusivos",
                "Atualizações futuras grátis",
                "Material extra para líderes",
                "Suporte prioritário via WhatsApp"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-2 mt-auto">
              <a 
                href="https://pay.wiapy.com/zSVDS2fcRa" 
                className="w-full py-3 px-4 sm:px-6 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 text-sm sm:text-base uppercase tracking-wide"
              >
                <Cross className="w-5 h-5 opacity-80" />
                <span>QUERO O PLANO COMPLETO</span>
                <Cross className="w-5 h-5 opacity-80" />
              </a>
              <a 
                href="https://pay.wiapy.com/zgx-OQDgo1"
                className="w-full py-1.5 px-4 text-slate-500 hover:text-slate-700 font-medium text-xs transition-colors underline decoration-slate-300 hover:decoration-slate-500 underline-offset-4 block text-center"
              >
                Não, obrigado. Quero apenas o plano simples.
              </a>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5528999535962"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Contato pelo WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.062 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </a>

    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string, key?: number | string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
      >
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600">{answer}</p>
      </div>
    </div>
  );
}
