import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Calendar,
  ChevronDown,
  ArrowRight,
  MapPin,
  Check
} from 'lucide-react';
import { ServiceDetail } from '../types';
import { COMPANY_INFO, SERVICES, BEFORE_AFTER_GALLERY } from '../data/mockData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onBack: () => void;
  onOpenQuote: (serviceName?: string) => void;
  onNavigateToService: (slug: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onOpenQuote,
  onNavigateToService
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Find related before/after if matching
  const matchingGalleryIndex = BEFORE_AFTER_GALLERY.findIndex(g => 
    g.category.toLowerCase().includes(service.slug.split('-')[0]) ||
    service.name.toLowerCase().includes(g.category.toLowerCase())
  );

  return (
    <div className="w-full bg-[#fafbfc] min-h-screen pb-24">
      {/* Top Breadcrumb & Quick Back Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button 
              onClick={onBack} 
              className="inline-flex items-center gap-1 hover:text-emerald-800 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Services</span>
            </button>
            <span>/</span>
            <span className="text-slate-400">{service.category}</span>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{service.name}</span>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="text-xs text-slate-500">Need immediate booking?</span>
            <a 
              href={`tel:${COMPANY_INFO.phoneNumeric}`}
              className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Service Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200/80 pt-10 pb-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/60">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>{service.category} Specialism</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                {service.name}
              </h1>

              <p className="text-lg text-emerald-800 font-semibold mb-3">
                {service.subtitle}
              </p>

              <p className="text-base text-slate-600 leading-relaxed max-w-2xl mb-8">
                {service.fullDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
                <button
                  onClick={() => onOpenQuote(service.name)}
                  className="px-8 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get a Free Quote for {service.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneNumeric}`}
                  className="px-6 py-4 rounded-xl border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>

              {/* Key Service Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full pt-6 border-t border-slate-100">
                {service.features.slice(0, 4).map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200">
                <img 
                  src={service.heroImage} 
                  alt={service.name}
                  className="w-full h-80 sm:h-[460px] object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-xs shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 font-semibold uppercase block">Service Base Rate</span>
                    <span className="text-xl font-bold text-emerald-800">{service.startingPrice}</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">
                    Fixed Quote Guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Options Matrix */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Service Tiers</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-1">
            Transparent {service.name} Packages
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Select a tailored scope or customize every line item to your property's dimensions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.packages.map((pkg, idx) => (
            <div 
              key={idx}
              className={`flex flex-col bg-white rounded-3xl p-8 border transition-all shadow-xs hover:shadow-xl ${
                pkg.popular 
                  ? 'border-emerald-700 ring-2 ring-emerald-700/20 relative' 
                  : 'border-slate-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider">
                  Recommended Tier
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{pkg.description}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-slate-100">
                <span className="text-2xl font-extrabold text-slate-900">{pkg.price}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onOpenQuote(`${service.name} - ${pkg.name}`)}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                  pkg.popular
                    ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-800'
                }`}
              >
                Request {pkg.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Step by Step Execution Process */}
      <section className="bg-white border-y border-slate-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Our Protocol</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">
              How We Execute Your {service.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p) => (
              <div key={p.step} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white font-bold text-base flex items-center justify-center mb-4">
                  {p.step}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{p.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Interactive Showcase for this service */}
      {matchingGalleryIndex !== -1 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Real Transformation</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">
              Recent Workmanship Showcase
            </h2>
          </div>
          <BeforeAfterSlider initialIndex={matchingGalleryIndex} />
        </section>
      )}

      {/* Service-Specific FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Common Questions</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Questions About {service.name}
          </h2>
        </div>

        <div className="space-y-3">
          {service.faq.map((faq, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer hover:text-emerald-800 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-emerald-700 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Explore other services footer strip */}
      <section className="bg-slate-100 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
            Explore Other Property Care Disciplines
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {SERVICES.filter(s => s.id !== service.id).map(other => (
              <button
                key={other.slug}
                onClick={() => {
                  onNavigateToService(other.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-3 bg-white hover:bg-emerald-50 rounded-xl border border-slate-200 text-left transition-colors cursor-pointer group"
              >
                <div className="text-xs font-bold text-slate-800 group-hover:text-emerald-800">{other.name}</div>
                <div className="text-[11px] text-slate-400">{other.startingPrice}</div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
