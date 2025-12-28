
import React from 'react';
// Fix: Import ServiceCard from types.ts and getIcon from constants.tsx separately
import { getIcon } from '../constants';
import { ServiceCard } from '../types';
import { ArrowLeft, CheckCircle, Zap, ShieldCheck, Settings } from 'lucide-react';

interface ServiceDetailViewProps {
  service: ServiceCard;
  onBack: () => void;
  onContact: (serviceId: string) => void;
}

const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ service, onBack, onContact }) => {
  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center text-slate-500 hover:text-blue-600 mb-8 font-medium transition-colors"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Retour aux services
        </button>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          {/* Content */}
          <div>
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8">
              {getIcon(service.icon, "w-8 h-8")}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {service.longDescription || service.description}
            </p>

            {/* Features List */}
            {service.features && (
              <div className="space-y-6 mb-12">
                <h2 className="text-2xl font-bold text-slate-900">Ce que nous proposons :</h2>
                <div className="grid sm:grid-cols-1 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <div className="mt-1 bg-green-100 p-1 rounded-full mr-4 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{feature.title}</h3>
                        <p className="text-slate-500 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button 
              onClick={() => onContact(service.id)}
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
            >
              Démarrer mon projet {service.title}
            </button>
          </div>

          {/* Sidebar Info */}
          <div className="mt-16 lg:mt-0 space-y-8">
            {/* Process */}
            {service.processSteps && (
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  < Zap className="mr-3 w-5 h-5 text-blue-400" />
                  Notre Processus
                </h3>
                <div className="space-y-6">
                  {service.processSteps.map((step, idx) => (
                    <div key={idx} className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center text-sm font-bold text-blue-400 flex-shrink-0">
                        {idx + 1}
                      </div>
                      <span className="text-slate-300 font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tools */}
            {service.tools && (
              <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Settings className="mr-3 w-5 h-5 text-blue-600" />
                  Technologies & Outils
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool, idx) => (
                    <span key={idx} className="px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-sm font-bold border border-slate-100">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Trust Banner */}
            <div className="bg-blue-50 rounded-[2.5rem] p-8 border border-blue-100">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="text-lg font-bold text-slate-900 mb-2">Expertise Garantie</h4>
              <p className="text-slate-600 text-sm">
                Chaque projet est supervisé par des experts seniors pour garantir un résultat dépassant vos attentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailView;
