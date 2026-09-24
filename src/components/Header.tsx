import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/mockData';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Top Bar Strip */}
      <div className="bg-[#0f172a] text-slate-300 text-xs font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6 truncate">
            <a 
              href={`tel:${COMPANY_INFO.phoneNumeric}`} 
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Phone:</span> {COMPANY_INFO.phoneDisplay}
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappNumeric}?text=Hello%20Verdant,%20I%20would%20like%20to%20request%20a%20quote`} 
              target="_blank" 
              rel="noreferrer" 
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden lg:inline">WhatsApp:</span> {COMPANY_INFO.whatsapp}
            </a>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              <span>London & Home Counties</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-slate-300 text-[11px] font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Residential & Commercial
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('/')} 
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold text-xl shadow-xs group-hover:bg-emerald-900 transition-colors">
              <Sparkles className="w-5 h-5 text-emerald-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                VERDANT
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-700 leading-tight mt-1">
                Estate & Property Care
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            <button
              onClick={() => handleNavClick('/')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                currentPath === '/' 
                  ? 'text-emerald-800 bg-emerald-50/80 font-bold' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => {
                  if (currentPath === '/') {
                    const el = document.getElementById('services-directory');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    handleNavClick('/services');
                  }
                }}
                className={`px-3 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer ${
                  currentPath.startsWith('/services') || SERVICES.some(s => currentPath === `/${s.slug}`)
                    ? 'text-emerald-800 bg-emerald-50/80 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 mb-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Our Specialized Disciplines
                  </div>
                  <div className="grid grid-cols-1 gap-0.5">
                    {SERVICES.map((s) => (
                      <button
                        key={s.slug}
                        onClick={() => handleNavClick(`/${s.slug}`)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl text-left hover:bg-emerald-50/70 text-slate-700 hover:text-emerald-900 transition-colors group cursor-pointer"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-800 group-hover:text-emerald-800">
                            {s.name}
                          </div>
                          <div className="text-xs text-slate-400">
                            {s.subtitle}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#packages-and-pricing"
              onClick={(e) => {
                if (currentPath !== '/') {
                  e.preventDefault();
                  handleNavClick('/#packages-and-pricing');
                }
              }}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
            >
              Packages & Pricing
            </a>

            <a
              href="#maintenance-plans"
              onClick={(e) => {
                if (currentPath !== '/') {
                  e.preventDefault();
                  handleNavClick('/#maintenance-plans');
                }
              }}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
            >
              Maintenance Plans
            </a>

            <a
              href="#commercial-and-landlords"
              onClick={(e) => {
                if (currentPath !== '/') {
                  e.preventDefault();
                  handleNavClick('/#commercial-and-landlords');
                }
              }}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
            >
              Commercial & Landlords
            </a>

            <a
              href="#how-it-works"
              onClick={(e) => {
                if (currentPath !== '/') {
                  e.preventDefault();
                  handleNavClick('/#how-it-works');
                }
              }}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
            >
              How It Works
            </a>

            <a
              href="#reviews"
              onClick={(e) => {
                if (currentPath !== '/') {
                  e.preventDefault();
                  handleNavClick('/#reviews');
                }
              }}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
            >
              Reviews
            </a>

            <a
              href="#contact-and-faq"
              onClick={(e) => {
                if (currentPath !== '/') {
                  e.preventDefault();
                  handleNavClick('/#contact-and-faq');
                }
              }}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
            >
              Contact & FAQ
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneNumeric}`}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm font-bold hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Call Now</span>
            </a>

            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-sm font-bold shadow-sm hover:bg-emerald-800 active:scale-98 transition-all cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3 pb-6 border-b border-slate-100">
            <button
              onClick={() => handleNavClick('/')}
              className="text-left font-bold text-slate-900 text-base py-1"
            >
              Home
            </button>

            <div className="pt-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Services</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2 border-l-2 border-emerald-500/30">
                {SERVICES.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => handleNavClick(`/${s.slug}`)}
                    className="text-left text-sm font-medium text-slate-700 hover:text-emerald-700 py-1"
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="#packages-and-pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left font-semibold text-slate-700 py-1"
            >
              Packages & Pricing
            </a>
            <a
              href="#maintenance-plans"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left font-semibold text-slate-700 py-1"
            >
              Maintenance Plans
            </a>
            <a
              href="#commercial-and-landlords"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left font-semibold text-slate-700 py-1"
            >
              Commercial & Landlords
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left font-semibold text-slate-700 py-1"
            >
              How It Works
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left font-semibold text-slate-700 py-1"
            >
              Customer Reviews
            </a>
            <a
              href="#contact-and-faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left font-semibold text-slate-700 py-1"
            >
              Contact & FAQ
            </a>
          </div>

          <div className="pt-6 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3.5 rounded-xl bg-emerald-700 text-white font-bold text-center shadow-md hover:bg-emerald-800"
            >
              Get a Free Quote
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneNumeric}`}
              className="w-full py-3 rounded-xl border border-slate-300 text-slate-800 font-bold text-center hover:bg-slate-50 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Call +44 (0) 20 7946 0921</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumeric}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-50 text-emerald-800 font-bold text-center hover:bg-emerald-100 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Priority Concierge</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
