
import React from 'react';
import { BlogPost } from '../constants';
import { ArrowLeft, Calendar, Tag, Share2, Clock, CheckCircle2 } from 'lucide-react';

interface BlogDetailViewProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogDetailView: React.FC<BlogDetailViewProps> = ({ post, onBack }) => {
  // Simple renderer for content (supporting headers and lists)
  const renderContent = (text: string) => {
    return text.split('\n').map((line, idx) => {
      if (line.startsWith('### ')) {
        return <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-12 mb-6 tracking-tight">{line.replace('### ', '')}</h2>;
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <h3 key={idx} className="text-xl font-bold text-slate-800 mt-8 mb-4">{line.replace(/\*\*/g, '')}</h3>;
      }
      if (line.startsWith('* ')) {
        return (
          <li key={idx} className="flex items-start mb-3 text-slate-600 leading-relaxed">
            <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
            <span>{line.replace('* ', '').replace(/\*\*/g, '')}</span>
          </li>
        );
      }
      if (line.trim() === '') return <br key={idx} />;
      
      // Handle bold text within lines
      const parts = line.split(/(\*\*.*?\*\*)/);
      const formattedLine = parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="text-slate-900 font-bold">{part.replace(/\*\*/g, '')}</strong>;
        }
        return part;
      });

      return <p key={idx} className="text-slate-600 text-lg leading-relaxed mb-6">{formattedLine}</p>;
    });
  };

  return (
    <div className="pt-24 pb-20 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="flex items-center text-slate-500 hover:text-blue-600 mb-12 font-bold transition-all group accelerated"
        >
          <div className="bg-slate-100 p-2 rounded-full mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </div>
          Retour au blog
        </button>

        {/* Header Metadata */}
        <div className="mb-10 text-center sm:text-left">
          <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 shadow-lg shadow-blue-500/20">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-[1.15] tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 text-slate-400 font-bold uppercase tracking-tighter text-xs border-y border-slate-100 py-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-blue-500" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-blue-500" />
              8 min lecture
            </div>
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-2 text-blue-500" />
              IA & E-commerce
            </div>
            <button className="flex items-center ml-auto hover:text-blue-600 transition-colors">
              <Share2 className="w-4 h-4 mr-2" />
              Partager
            </button>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative rounded-[3rem] overflow-hidden mb-16 shadow-2xl accelerated">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
        </div>

        {/* Content Body */}
        <div className="prose prose-blue prose-lg max-w-none">
          {post.content ? renderContent(post.content) : <p className="text-slate-600 italic">Contenu en cours de rédaction...</p>}
        </div>

        {/* CTA Footer */}
        <div className="mt-20 p-10 sm:p-16 bg-blue-600 rounded-[3.5rem] text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <h2 className="text-3xl font-extrabold mb-6 relative z-10">Besoin d'aide pour intégrer l'IA dans votre business avec GalsenB2B ?</h2>
          <p className="text-blue-100 mb-10 text-lg relative z-10">Nos experts à Dakar vous accompagnent pour automatiser vos ventes.</p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-100 hover:scale-[1.05] active:scale-95 transition-all shadow-xl relative z-10"
          >
            Réserver un audit gratuit
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailView;
