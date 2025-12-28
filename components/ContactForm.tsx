
import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, Loader2, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  initialService?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialService = 'digital' }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService,
    message: ''
  });

  // Mettre à jour le service si initialService change (via clic depuis page détail)
  useEffect(() => {
    setFormData(prev => ({ ...prev, service: initialService }));
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Récupération du nom lisible du service
    const serviceLabels: { [key: string]: string } = {
      'digital': 'Services Digitaux (Général)',
      'web': 'Développement Web & IA',
      'mobile': 'Applications Mobiles',
      'marketing': 'Marketing Digital',
      'design': 'Design Graphique',
      'video': 'Montage Vidéo',
      'logistics': 'Importation Alibaba'
    };

    const selectedServiceLabel = serviceLabels[formData.service] || formData.service;

    // Construction du message WhatsApp formaté
    const phoneNumber = "221772507273";
    const whatsappMessage = `*DEMANDE DE DEVIS - GALSENB2B*%0A%0A` +
      `*Nom :* ${formData.name}%0A` +
      `*Email :* ${formData.email}%0A` +
      `*Service :* ${selectedServiceLabel}%0A%0A` +
      `*Message :*%0A${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Simulation de délai pour le feedback visuel puis redirection
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setStatus('success');
      setFormData({ name: '', email: '', service: 'digital', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  if (status === 'success') {
    return (
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-16 text-center text-white border-8 border-blue-600/20 animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/20">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold mb-4">Redirection Réussie !</h3>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">
              Votre demande a été préparée pour WhatsApp. Si l'onglet ne s'est pas ouvert, merci de vérifier vos bloqueurs de fenêtres surgissantes.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-slate-800">
          <div className="lg:w-2/5 p-8 lg:p-16 bg-blue-600 text-white relative overflow-hidden">
            <h3 className="text-3xl font-bold mb-8 relative z-10">Commençons votre projet dès aujourd'hui.</h3>
            <p className="text-blue-100 text-lg mb-12 relative z-10">
              Prêt à digitaliser votre activité ou à importer votre premier conteneur ? Votre message nous sera envoyé directement sur WhatsApp.
            </p>
            <div className="space-y-8 relative z-10">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg"><Phone className="w-6 h-6" /></div>
                <div><p className="text-blue-200 text-sm">WhatsApp Direct</p><p className="font-bold">+221 77 250 72 73</p></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-lg"><Mail className="w-6 h-6" /></div>
                <div><p className="text-blue-200 text-sm">Support Email</p><p className="font-bold">contac@gaalsenb2b.com</p></div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-8 lg:p-16 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nom Complet</label>
                  <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Abdoulaye Diop" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="nom@entreprise.sn" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Service souhaité</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                  <option value="digital">Services Digitaux (Général)</option>
                  <option value="web">Développement Web & IA</option>
                  <option value="mobile">Applications Mobiles</option>
                  <option value="marketing">Marketing Digital</option>
                  <option value="design">Design Graphique</option>
                  <option value="video">Montage Vidéo</option>
                  <option value="logistics">Importation Alibaba</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Détails de votre besoin</label>
                <textarea rows={4} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Décrivez votre projet en quelques lignes pour nous aider à préparer le devis..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
              </div>
              <button type="submit" disabled={status === 'submitting'} className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center hover-shine overflow-hidden group">
                {status === 'submitting' ? <Loader2 className="w-6 h-6 animate-spin" /> : <>Envoyer via WhatsApp <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
              </button>
              <p className="text-center text-xs text-slate-400">
                En cliquant sur envoyer, vous serez redirigé vers l'application WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
