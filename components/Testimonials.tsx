
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" aria-labelledby="testimonials-title">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-up">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6 border border-blue-100 uppercase tracking-widest">
            <span>Confiance & Succès</span>
          </div>
          <h2 id="testimonials-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Ce qu'ils <span className="text-blue-600">disent</span> de nous.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            La réussite de nos clients est notre meilleure carte de visite. Découvrez les retours de ceux qui nous font confiance au quotidien.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative p-8 lg:p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 flex flex-col h-full fade-up accelerated"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                  <Quote className="w-8 h-8 fill-blue-600/10" />
                </div>
                <div className="flex space-x-0.5">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-slate-600 mb-10 leading-relaxed text-lg italic flex-grow">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center space-x-4 pt-6 border-t border-slate-100">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-50 group-hover:border-blue-200 transition-colors duration-500">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
