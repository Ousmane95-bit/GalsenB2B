
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = "221772507273"; // Nouveau numéro configuré
  const message = encodeURIComponent("Bonjour GalsenB2B, je souhaiterais avoir des informations sur vos services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group flex items-center"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-3 transition-all duration-500 font-bold whitespace-nowrap">
        Besoin d'aide ?
      </span>
      <MessageCircle className="w-8 h-8" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-600"></span>
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
