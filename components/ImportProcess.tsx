
import React from 'react';
import { LOGISTICS_STEPS } from '../constants';
import { Ship, Plane, CheckCircle, ShieldCheck, Box, ArrowRight } from 'lucide-react';
import TrackingModule from './TrackingModule';

const ImportProcess: React.FC = () => {
  return (
    <section id="import" className="py-24 bg-slate-950 text-white overflow-hidden relative" aria-labelledby="import-title">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-500/5 blur-[100px] rounded-full -translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold mb-6 border border-blue-500/20 uppercase tracking-widest">
              <Box className="w-4 h-4" />
              <span>Transitaire Chine-Sénégal</span>
            </div>
            
            <h2 id="import-title" className="text-4xl sm:text-5xl font-extrabold mb-8 leading-tight">
              Importez depuis <span className="gradient-text">Alibaba</span> en toute sérénité.
            </h2>
            
            <p className="text-lg text-slate-400 mb-12 leading-relaxed">
              Nous levons les barrières de la langue, du paiement et de la douane. Notre équipe à Guangzhou réceptionne vos marchandises et assure leur acheminement jusqu'à votre porte à Dakar.
            </p>

            <div className="space-y-8">
              {LOGISTICS_STEPS.map((step, index) => (
                <div key={index} className="group relative pl-12 fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 p-8 glass-card rounded-[2rem] border border-white/5">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-600/20 p-4 rounded-2xl mb-4">
                  <Plane className="w-8 h-8 text-blue-400" />
                </div>
                <p className="font-bold">Fret Aérien</p>
                <p className="text-sm text-slate-500">7-10 jours</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-600/20 p-4 rounded-2xl mb-4">
                  <Ship className="w-8 h-8 text-blue-400" />
                </div>
                <p className="font-bold">Groupage Maritime</p>
                <p className="text-sm text-slate-500">30-45 jours</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full lg:sticky lg:top-32">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/10 blur-2xl rounded-[3rem] pointer-events-none"></div>
              <TrackingModule />
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Zéro risque de fraude</h3>
              <p className="text-blue-100 mb-6 relative z-10">
                Nous vérifions la conformité des produits avant l'expédition finale. Vous recevez ce que vous avez commandé.
              </p>
              <a href="#contact" className="inline-flex items-center text-white font-bold hover:underline relative z-10">
                Demander une cotation import
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportProcess;
