import React from 'react';
import { DIGITAL_SERVICES, getIcon } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-up">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6 border border-blue-100 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Excellence Opérationnelle</span>
          </div>
          <h2 id="services-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Des Solutions <span className="text-blue-600">Technologiques</span> pour votre Croissance.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Boostez votre business avec nos pôles d'expertise en développement web IA, marketing stratégique et logistique internationale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {DIGITAL_SERVICES.map((service, index) => (
            <article 
              key={service.id} 
              onClick={() => onSelectService(service.id)}
              className="group relative p-8 lg:p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500 flex flex-col h-full overflow-hidden fade-up accelerated cursor-pointer hover:scale-[1.02] hover-bg-gradient"
              style={{ transitionDelay: `${index * 0.04}s` }}
            >
              {/* Animated Internal Glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-500/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-glow-pulse accelerated"></div>
              
              {/* Secondary Bottom Glow */}
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-cyan-400/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none accelerated"></div>

              <div className="relative mb-8 z-10">
                <div className="w-16 h-16 bg-slate-50 rounded-[1.25rem] flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 transform-gpu shadow-sm group-hover:shadow-blue-500/30">
                  {getIcon(service.icon, "w-8 h-8")}
                </div>
              </div>

              <h3 className="relative z-10 text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                {service.title}
              </h3>
              
              <p className="relative z-10 text-slate-600 mb-8 leading-relaxed flex-grow text-sm sm:text-base opacity-90">
                {service.description}
              </p>
              
              <div className="relative z-10 space-y-6">
                <div className="pt-6 border-t border-slate-100 group-hover:border-blue-100 transition-colors">
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed italic">
                    <span className="font-bold text-blue-600 not-italic uppercase tracking-wider text-[10px] mr-1">Impact :</span> 
                    {service.benefit}
                  </p>
                </div>
                
                <div 
                  className="w-full flex items-center justify-center space-x-2 py-4 px-6 bg-slate-900 text-white rounded-2xl font-bold transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-[1.02] active:scale-95 group/btn overflow-hidden hover-shine shadow-lg group-hover:shadow-blue-600/20"
                >
                  <span className="text-sm">Découvrir l'expertise</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;