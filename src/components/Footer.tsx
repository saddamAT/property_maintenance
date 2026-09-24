import React from 'react';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare,
  ArrowUp
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/mockData';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenQuote: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0b1329] text-slate-300 border-t border-slate-800">
      {/* Pre-footer Callout Banner */}
      <div className="border-b border-slate-800 bg-[#070d1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">
              Ready to Upgrade Your Property Care?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Receive a Guaranteed Fixed-Price Proposal Within 60 Minutes.
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Serving premier private residences, commercial facilities, and rental portfolios across Greater London & Home Counties.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg transition-all text-center cursor-pointer"
            >
              Get a Free Quote
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneNumeric}`}
              className="w-full sm:w-auto px-6 py-4 rounded-xl border border-slate-700 hover:border-slate-500 text-white font-semibold text-sm transition-all text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">VERDANT</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                  Estate & Property Care
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Premier residential and commercial property upkeep engineered for discerning homeowners, landlords, and estate managers across London and the South East.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{COMPANY_INFO.insuranceValue}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SafeContractor Certified · DBS Vetted Technicians</span>
              </div>
            </div>

            {/* Direct Contact Snippets */}
            <div className="pt-4 space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneNumeric}`} className="hover:text-emerald-400 transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${COMPANY_INFO.whatsappNumeric}`} target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
                  WhatsApp: {COMPANY_INFO.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-emerald-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-400">{COMPANY_INFO.hours}</p>
                  <p className="text-xs text-emerald-400 font-semibold">{COMPANY_INFO.emergencyLine}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <button
                    onClick={() => {
                      onNavigate(`/${s.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-left cursor-pointer"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Sectors */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Customers</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#quote-builder" className="hover:text-emerald-400 transition-colors">
                  Residential Homeowners
                </a>
              </li>
              <li>
                <a href="#commercial-and-landlords" className="hover:text-emerald-400 transition-colors">
                  Corporate Offices & Studios
                </a>
              </li>
              <li>
                <a href="#commercial-and-landlords" className="hover:text-emerald-400 transition-colors">
                  Portfolio Landlords & HMOs
                </a>
              </li>
              <li>
                <a href="#commercial-and-landlords" className="hover:text-emerald-400 transition-colors">
                  Estate & Letting Agents
                </a>
              </li>
              <li>
                <a href="#commercial-and-landlords" className="hover:text-emerald-400 transition-colors">
                  Airbnb & Short-Stay Hosts
                </a>
              </li>
              <li>
                <a href="#commercial-and-landlords" className="hover:text-emerald-400 transition-colors">
                  Retail & Hospitality Venues
                </a>
              </li>
              <li>
                <a href="#maintenance-plans" className="hover:text-emerald-400 transition-colors">
                  Ongoing Maintenance Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company & Legal</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#about-us" className="hover:text-emerald-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-400 transition-colors">
                  Client Reviews & Audits
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-emerald-400 transition-colors">
                  Before & After Portfolio
                </a>
              </li>
              <li>
                <a href="#contact-and-faq" className="hover:text-emerald-400 transition-colors">
                  Contact Concierge
                </a>
              </li>
              <li>
                <button
                  onClick={() => alert("Privacy Policy: Verdant Estate Care adheres strictly to UK GDPR. We never share client records or access credentials with unauthorized parties.")}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Terms & Conditions: All fixed quotes are guaranteed for 30 days. Standard cancellation notice for recurring visits is 48 hours.")}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert("Cookie Notice: We only use essential technical cookies to maintain quotation progress and session preferences.")}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <span className="text-xs text-slate-500 block pt-1">
                  Service Area: {COMPANY_INFO.coverageAreas}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Registered in England & Wales</span>
            <span>·</span>
            <span>SafeContractor Certified</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
