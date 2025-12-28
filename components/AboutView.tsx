
import React from 'react';
import { AGENCY_VALUES, TEAM_MEMBERS, MILESTONES, getIcon } from '../constants';
import { ArrowLeft, Calendar, Award, Target, Rocket, Users } from 'lucide-react';

interface AboutViewProps {
  onBack: () => void;
}

const AboutView: React.FC<AboutViewProps> = ({ onBack }) => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation & Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center text-slate-500 hover:text-blue-600 mb-12 font-bold transition-all group text-sm sm:text-base accelerated fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="bg-slate-100 p-2 rounded-full mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </div>
          Retour à l'accueil
        </button>

        {/* Hero Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="accelerated fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-black mb-8 border border-blue-100 uppercase tracking-[0.2em]">
              <Target className="w-3.5 h-3.5" />
              <span>Notre Mission</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Plus qu'une agence, un <span className="gradient-text">partenaire</span> de croissance.
            </h1>
            <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              <p className="font-medium text-slate-900">
                GalsenB2B est née d'une vision : celle de propulser le génie entrepreneurial sénégalais au sommet de l'économie numérique mondiale.
              </p>
              <p>
                À Dakar, nous avons observé que le talent ne manque pas, mais que l'accès aux outils technologiques et aux chaînes d'approvisionnement mondiales reste un défi. Nous avons bâti cette agence pour briser ces barrières.
              </p>
              <p>
                Notre approche fusionne l'expertise locale et les standards internationaux. Que ce soit pour concevoir une plateforme e-commerce intelligente ou pour sécuriser vos imports depuis Guangzhou, GalsenB2B met l'excellence au cœur de chaque interaction.
              </p>
            </div>
          </div>
          <div className="relative fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="rounded-[3.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700 border-[12px] border-white accelerated">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="L'équipe GalsenB2B en réunion stratégique" 
                className="w-full h-auto"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            </div>
            {/* Impact Floating Badge */}
            <div className="absolute -bottom-10 -right-6 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 hidden md:block animate-float accelerated">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-4 rounded-2xl text-white">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-4xl font-black text-slate-900 tracking-tighter">100%</p>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chronologie / Milestones Section */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-20 fade-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Notre <span className="text-blue-600">Trajectoire</span>
            </h2>
            <p className="text-slate-600 text-lg">
              De l'idée initiale à l'agence leader que nous sommes aujourd'hui.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MILESTONES.map((milestone, idx) => (
              <div 
                key={idx} 
                className="relative group p-8 rounded-[2rem] bg-slate-50 border border-transparent hover:border-blue-200 hover:bg-white transition-all duration-500 fade-up"
                style={{ animationDelay: `${0.4 + (idx * 0.1)}s` }}
              >
                <div className="text-blue-600 font-black text-4xl mb-6 flex items-center">
                  <span className="opacity-10 group-hover:opacity-100 transition-opacity mr-2">#</span>
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{milestone.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{milestone.description}</p>
                {/* Arrow connector for desktop */}
                {idx < MILESTONES.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-10 text-slate-200">
                    <Rocket className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-32">
          <div className="bg-blue-600 rounded-[3.5rem] p-12 lg:p-20 text-white relative overflow-hidden fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 blur-3xl pointer-events-none"></div>
            <div className="grid lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-1">
                <h2 className="text-3xl sm:text-4 font-extrabold mb-6 tracking-tight">Ce qui forge notre ADN.</h2>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  Quatre piliers fondamentaux qui assurent la pérennité de vos projets digitaux et logistiques.
                </p>
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-blue-600 bg-blue-400"></div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
                {AGENCY_VALUES.map((value, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:bg-white/20 transition-all duration-300 fade-up"
                    style={{ animationDelay: `${0.6 + (idx * 0.1)}s` }}
                  >
                    <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-xl">
                      {getIcon(value.icon, "w-6 h-6")}
                    </div>
                    <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed opacity-90">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Section - Visually Attractive */}
        <div id="team" className="relative">
          <div className="text-center max-w-3xl mx-auto mb-20 fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-900 px-4 py-1.5 rounded-full text-xs font-black mb-6 uppercase tracking-widest">
              <Users className="w-4 h-4" />
              <span>Experts & Passionnés</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Rencontrez les <span className="gradient-text">Visionnaires</span>.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Une équipe pluridisciplinaire unie par une mission commune : votre réussite commerciale au Sénégal.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {TEAM_MEMBERS.map((member, idx) => (
              <div 
                key={idx} 
                className="group relative fade-up"
                style={{ animationDelay: `${0.3 + (idx * 0.15)}s` }}
              >
                <div className="relative overflow-hidden rounded-[3rem] aspect-[4/5] shadow-xl transition-all duration-700 group-hover:shadow-2xl accelerated">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Overlay Info on Hover/Standard */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-blue-600 text-white inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                      {member.role}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-none">
                      {member.name}
                    </h3>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Footer for About Page */}
          <div className="mt-32 p-12 lg:p-20 bg-slate-950 rounded-[4rem] text-center relative overflow-hidden fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 relative z-10">
              Prêt à écrire votre propre <span className="gradient-text">histoire</span> de succès ?
            </h2>
            <button 
              onClick={onBack}
              className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 hover:scale-[1.05] active:scale-95 transition-all shadow-2xl shadow-blue-500/20 relative z-10 accelerated"
            >
              Lancer mon projet maintenant
              <Rocket className="ml-3 w-6 h-6 animate-bounce-slow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
