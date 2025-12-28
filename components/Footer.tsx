
import React from 'react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-extrabold tracking-tight mb-6 block">
              <span className="text-blue-600 uppercase">Galsen</span>
              <span className="text-slate-800 uppercase">B2B</span>
            </span>
            <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
              L'agence qui fusionne technologie et commerce international pour bâtir les leaders de demain au Sénégal et en Afrique.
            </p>
          </div>
          
          <div>
            <nav aria-label="Navigation secondaire de pied de page">
              <h5 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wider">Plan du Site</h5>
              <ul className="space-y-4">
                {NAV_ITEMS.map(item => (
                  <li key={item.label}>
                    <a 
                      href={item.href} 
                      aria-label={item.ariaLabel}
                      className="text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-sm tracking-wider">Technique</h5>
            <p className="text-slate-500 text-sm mb-4 italic">
              Nous recommandons pour WordPress :
            </p>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li>• Elementor / Pro</li>
              <li>• AI Engine (Intégration GPT)</li>
              <li>• WPForms (Devis complexes)</li>
              <li>• Yoast SEO</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} GalsenB2B. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600" aria-label="Consulter nos mentions légales">Mentions Légales</a>
            <a href="#" className="hover:text-blue-600" aria-label="Consulter notre politique de confidentialité">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
