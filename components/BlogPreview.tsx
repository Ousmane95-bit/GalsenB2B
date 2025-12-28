
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

interface BlogPreviewProps {
  onSelectPost?: (postId: string) => void;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ onSelectPost }) => {
  return (
    <section id="blog" className="py-24 bg-slate-50 relative overflow-hidden" aria-labelledby="blog-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-up">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6 border border-blue-100 uppercase tracking-widest">
            <span>Ressources & Insights</span>
          </div>
          <h2 id="blog-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Dernières <span className="text-blue-600">Actualités</span> de l'Agence.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Restez informé des dernières tendances du digital et des opportunités d'importation au Sénégal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <article 
              key={post.id} 
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 flex flex-col accelerated fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-slate-400 text-xs mb-4 font-bold uppercase tracking-tighter">
                  <div className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Tag className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                    5 min lecture
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <button 
                    onClick={() => onSelectPost?.(post.id)}
                    className="inline-flex items-center text-slate-900 font-bold text-sm group/link"
                  >
                    Lire l'article
                    <div className="ml-2 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center fade-up" style={{ animationDelay: '0.4s' }}>
          <button className="inline-flex items-center justify-center space-x-2 py-4 px-10 bg-slate-900 text-white rounded-2xl font-bold transition-all duration-300 hover:bg-blue-600 hover:scale-[1.03] shadow-xl active:scale-95 group overflow-hidden hover-shine">
            Voir tous les articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
