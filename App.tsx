
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useParams, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ImportProcess from './components/ImportProcess';
import BlogPreview from './components/BlogPreview';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ServiceDetailView from './components/ServiceDetailView';
import AboutView from './components/AboutView';
import BlogDetailView from './components/BlogDetailView';
import { DIGITAL_SERVICES, BLOG_POSTS } from './constants';

// Component for Page Metadata & Scroll Management
const PageScroller: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top on page change unless there's a hash
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Small delay to ensure the target element is rendered
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

// Home View Wrapper
const HomeView: React.FC = () => {
  const navigate = useNavigate();
  const { hash } = useLocation();

  const handleSelectService = (id: string) => {
    navigate(`/service/${id}`);
  };

  const handleSelectPost = (id: string) => {
    navigate(`/blog/${id}`);
  };

  return (
    <>
      <Hero />
      <Services onSelectService={handleSelectService} />
      <Testimonials />
      <ImportProcess />
      <BlogPreview onSelectPost={handleSelectPost} />
      <ContactForm initialService={hash === '#logistics' ? 'logistics' : 'digital'} />
    </>
  );
};

// Wrapper for Service Detail to extract ID from URL
const ServiceDetailWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = DIGITAL_SERVICES.find(s => s.id === id);

  if (!service) {
    useEffect(() => navigate('/'), [navigate]);
    return null;
  }

  return (
    <ServiceDetailView 
      service={service} 
      onBack={() => navigate('/')} 
      onContact={(sId) => navigate(`/#contact`)} 
    />
  );
};

// Wrapper for Blog Detail to extract ID from URL
const BlogDetailWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    useEffect(() => navigate('/'), [navigate]);
    return null;
  }

  return (
    <BlogDetailView 
      post={post} 
      onBack={() => navigate('/#blog')} 
    />
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 bg-slate-50">
        <PageScroller />
        <Navbar />
        
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutView onBack={() => window.history.back()} />} />
            <Route path="/service/:id" element={<ServiceDetailWrapper />} />
            <Route path="/blog/:id" element={<BlogDetailWrapper />} />
          </Routes>
        </main>
        
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
};

export default App;
