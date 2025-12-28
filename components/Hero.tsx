
import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Truck, Globe, Zap, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const frameId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (frameId.current) cancelAnimationFrame(frameId.current);
      
      frameId.current = requestAnimationFrame(() => {
        if (!heroRef.current) return;
        const scrollY = window.scrollY;
        const height = heroRef.current.offsetHeight;
        
        if (scrollY > height + 200) return;

        const bgScale = 1 + scrollY * 0.00025;
        const bgTranslateY = scrollY * 0.18;
        const patternTranslateY = scrollY * 0.08;

        document.documentElement.style.setProperty('--parallax-bg', `${bgTranslateY}px`);
        document.documentElement.style.setProperty('--parallax-scale', `${bgScale.toFixed(4)}`);
        document.documentElement.style.setProperty('--parallax-pattern', `${patternTranslateY}px`);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-52 lg:pb-48 overflow-hidden bg-slate-950">
      {/* Immersive High-Performance Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 accelerated"
          style={{ 
            transform: `translate3d(0, var(--parallax-bg), 0) scale(var(--parallax-scale))`
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            srcSet="
              https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=60&w=800 800w,
              https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600 1600w,
              https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000 2000w
            "
            sizes="100vw"
            alt="Plateforme logistique internationale et technologie" 
            className="w-full h-full object-cover opacity-30 lg:opacity-40"
            fetchPriority="high"
          />
        </div>

        <div 
          className="absolute inset-0 animate-vortex origin-center accelerated"
          style={{ transform: `translate3d(0, calc(var(--parallax-pattern) * 0.5), 0)` }}
        >
          <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] bg-blue-500/15 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-[-5%] right-[5%] w-[800px] h-[800px] bg-cyan-600/20 blur-[120px] rounded-full"></div>
        </div>
        
        <div 
          className="absolute inset-0 hero-pattern opacity-40 z-10 accelerated"
          style={{ transform: `translate3d(0, var(--parallax-pattern), 0)` }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-blue-950/20 z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-20"></div>
        <div className="absolute inset-0 bg-blue-950/40 z-20 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <div className="max-w-2xl text-white">
            <div className="fade-up inline-flex items-center space-x-3 bg-blue-600/20 backdrop-blur-xl text-blue-300 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold mb-10 border border-blue-500/30" style={{ transitionDelay: '0.1s' }}>
              <Zap className="w-4 h-4 fill-blue-400" />
              <span className="tracking-widest uppercase">Expertise Digitale & Transitaire de Confiance</span>
            </div>
            
            <h1 className="fade-up animate-breathing text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-8 tracking-tighter" style={{ transitionDelay: '0.2s' }}>
              Propulsez votre <span className="animate-shine">Business</span> au-delà des <span className="animate-shine">Frontières</span>.
            </h1>
            
            <p className="fade-up text-lg sm:text-xl text-slate-200 mb-12 leading-relaxed max-w-xl opacity-90 font-medium" style={{ transitionDelay: '0.3s' }}>
              GalsenB2B : le pont technologique et logistique haute performance entre les usines mondiales et le marché sénégalais.
            </p>
            
            <div className="fade-up flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6 mb-14" style={{ transitionDelay: '0.4s' }}>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-5 rounded-2xl font-extrabold hover:bg-blue-700 hover:scale-[1.03] active:scale-95 transition-all duration-200 group text-center hover-shine shadow-xl shadow-blue-600/20 accelerated"
              >
                Lancer mon projet
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              <a 
                href="#import" 
                className="inline-flex items-center justify-center glass-card text-white px-10 py-5 rounded-2xl font-extrabold hover:bg-white/10 hover:scale-[1.03] active:scale-95 transition-all duration-200 border border-white/20 group accelerated"
              >
                <Globe className="mr-3 w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                Sourcing Alibaba
              </a>
            </div>

            <div className="fade-up grid grid-cols-2 gap-8 pt-8 border-t border-white/10" style={{ transitionDelay: '0.5s' }}>
              <div className="flex items-center space-x-4">
                <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                <span className="text-slate-100 font-bold text-sm tracking-tight">Digital & IA de pointe</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                <span className="text-slate-100 font-bold text-sm tracking-tight">Logistique Intelligente</span>
              </div>
            </div>
          </div>
          
          <div className="mt-20 lg:mt-0 relative hidden lg:block fade-up" style={{ transitionDelay: '0.6s' }}>
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border border-white/10 animate-float bg-slate-900/50 backdrop-blur-sm group/main-img">
              <img 
                src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1200" 
                alt="Logistique internationale GalsenB2B" 
                className="w-full h-auto opacity-90 group-hover/main-img:scale-105 transition-transform duration-700 accelerated" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              
              {/* Floating Badge 1: Top Left - Digital Focus */}
              <div className="absolute -top-6 -left-6 glass-card p-5 rounded-[2rem] shadow-2xl border border-white/10 animate-float" style={{ animationDelay: '-2s' }}>
                <div className="flex items-center space-x-3">
                  <div className="bg-cyan-500 p-2.5 rounded-xl">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest leading-none mb-1">Technologie</p>
                    <p className="text-xs font-black text-white leading-none">IA & Automation</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Right - Logistics Focus (Repositioned) */}
              <div className="absolute -bottom-10 -right-8 glass-card p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/15 animate-float" style={{ animationDelay: '-0.5s' }}>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3.5 rounded-2xl shadow-lg shadow-blue-500/30">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest leading-none mb-1.5">Importation Sécurisée</p>
                    <p className="text-base font-black text-white leading-none">Chine → Sénégal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
