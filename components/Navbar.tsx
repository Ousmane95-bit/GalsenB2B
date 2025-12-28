
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    
    // Si c'est une ancre interne (#something)
    if (href.startsWith('#') && href !== '#') {
      const targetId = href.substring(1);
      
      // Si on est déjà sur la home page
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
        }
      } else {
        // Si on est sur une autre page, on navigue vers home + l'ancre
        // HashRouter gère déjà le hash dans l'URL
        navigate(`/${href}`);
      }
    } else if (href === '#') {
      e.preventDefault();
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <NavLink 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="flex items-center group"
                aria-label="Retourner en haut de la page d'accueil de GalsenB2B"
              >
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  <span className="text-blue-600 uppercase group-hover:text-blue-500 transition-colors">Galsen</span>
                  <span className="text-slate-800 uppercase group-hover:text-slate-600 transition-colors">B2B</span>
                </span>
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => {
                const isAnchor = item.href.startsWith('#');
                return (
                  <a
                    key={item.label}
                    href={isAnchor ? `/${item.href}` : item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    aria-label={item.ariaLabel}
                    className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </a>
                );
              })}
              <NavLink
                to="/#contact"
                onClick={(e) => handleLinkClick(e as any, '#contact')}
                aria-label="Nous contacter pour demander un devis gratuit"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Demander un devis
              </NavLink>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 -mr-2 text-slate-600 hover:text-blue-600 focus:outline-none transition-colors"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div 
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)} 
          aria-hidden="true"
        />
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-24 pb-8 px-6">
            <div className="flex-grow space-y-2">
              {NAV_ITEMS.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                  aria-label={item.ariaLabel}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-4 text-xl font-bold text-slate-800 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                  <ArrowRight className="w-5 h-5 opacity-50" />
                </a>
              ))}
            </div>
            
            <div className="mt-auto pt-8 border-t border-slate-100 space-y-4">
              <a href="tel:+221772507273" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 text-slate-600 font-bold" aria-label="Appeler notre équipe au Sénégal">
                <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+221 77 250 72 73</span>
              </a>
              <a href="mailto:contac@gaalsenb2b.com" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 text-slate-600 font-bold" aria-label="Nous envoyer un email">
                <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                  <Mail className="w-5 h-5" />
                </div>
                <span>contac@gaalsenb2b.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
