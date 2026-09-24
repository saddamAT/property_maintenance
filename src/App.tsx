/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { SERVICES } from './data/mockData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      return path === '' ? '/' : path;
    }
    return '/';
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePreselectedService, setQuotePreselectedService] = useState<string | undefined>();

  // Sync with browser navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    // If it's a hash on the home page
    if (path.startsWith('/#')) {
      const hash = path.substring(2);
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/');
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (serviceName?: string) => {
    setQuotePreselectedService(serviceName);
    setQuoteModalOpen(true);
  };

  // Match service route
  const currentSlug = currentPath.replace(/^\//, '');
  const activeService = SERVICES.find(
    (s) => s.slug === currentSlug || s.id === currentSlug
  );

  // Update dynamic SEO page title and description
  useEffect(() => {
    if (activeService) {
      document.title = activeService.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', activeService.metaDescription);
      }
    } else {
      document.title = 'Verdant Estate & Property Care – Reliable Property Services';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Reliable cleaning, decorating, gardening and property maintenance services for homes, landlords and businesses across the UK.'
        );
      }
    }
  }, [activeService]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-[#0f172a] antialiased">
      {/* Sticky Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-[116px]">
        {activeService ? (
          <ServiceDetailPage
            service={activeService}
            onBack={() => navigate('/')}
            onOpenQuote={handleOpenQuote}
            onNavigateToService={(slug) => navigate(`/${slug}`)}
          />
        ) : (
          <HomePage
            onNavigateToService={(slug) => navigate(`/${slug}`)}
            onOpenQuote={handleOpenQuote}
          />
        )}
      </main>

      {/* Reusable Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={quotePreselectedService}
      />

      {/* Floating Interactive WhatsApp Concierge */}
      <FloatingWhatsApp />

      {/* Comprehensive Footer */}
      <Footer
        onNavigate={navigate}
        onOpenQuote={handleOpenQuote}
      />
    </div>
  );
}
