import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  Building2, 
  Sparkles, 
  Star, 
  Phone, 
  MessageSquare, 
  Mail, 
  Clock, 
  MapPin, 
  ChevronDown, 
  Home, 
  Key, 
  Store, 
  Check, 
  Info,
  BadgeCheck,
  TrendingUp,
  Award,
  Zap,
  Layers,
  Sliders
} from 'lucide-react';
import { 
  COMPANY_INFO, 
  SERVICES, 
  REVIEWS, 
  FAQS 
} from '../data/mockData';
import { ServiceCard } from '../components/ServiceCard';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { PropertyType, FrequencyType } from '../types';

interface HomePageProps {
  onNavigateToService: (slug: string) => void;
  onOpenQuote: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigateToService, 
  onOpenQuote 
}) => {
  // Packages Tab State
  const [activePackageTab, setActivePackageTab] = useState<'cleaning' | 'painting' | 'gardening'>('cleaning');

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Embedded Quote Calculator State
  const [calcProperty, setCalcProperty] = useState<PropertyType>('House');
  const [calcServices, setCalcServices] = useState<string[]>(['Cleaning', 'Gardening']);
  const [calcFreq, setCalcFreq] = useState<FrequencyType>('Fortnightly');
  const [calcBedrooms, setCalcBedrooms] = useState('3 Bedrooms');
  const [calcBathrooms, setCalcBathrooms] = useState('2 Bathrooms');
  const [calcSqFt, setCalcSqFt] = useState('');
  const [calcPostcode, setCalcPostcode] = useState('');
  const [calcNotes, setCalcNotes] = useState('');
  const [calcName, setCalcName] = useState('');
  const [calcPhone, setCalcPhone] = useState('');
  const [calcEmail, setCalcEmail] = useState('');
  const [calcSuccess, setCalcSuccess] = useState(false);

  // Contact Form State
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    propertyType: 'House',
    services: 'Professional Cleaning',
    preferredDate: '',
    frequency: 'Fortnightly',
    message: ''
  });

  const toggleCalcService = (srv: string) => {
    if (calcServices.includes(srv)) {
      if (calcServices.length > 1) {
        setCalcServices(calcServices.filter(s => s !== srv));
      }
    } else {
      setCalcServices([...calcServices, srv]);
    }
  };

  // Real-time calculation formula
  const getCalculatedPrice = () => {
    let base = 55;
    if (calcProperty === 'Office' || calcProperty === 'Commercial') base += 50;
    if (calcProperty === 'Rental') base += 15;

    const beds = parseInt(calcBedrooms) || 2;
    const baths = parseInt(calcBathrooms) || 1;
    base += beds * 15;
    base += baths * 18;

    calcServices.forEach(s => {
      if (s === 'Deep Cleaning') base += 85;
      else if (s === 'Painting') base += 130;
      else if (s === 'Gardening') base += 50;
      else if (s === 'Landscaping') base += 300;
      else if (s === 'Pressure Washing') base += 70;
      else if (s === 'Maintenance') base += 60;
      else base += 35;
    });

    let discount = 1;
    if (calcFreq === 'Weekly') discount = 0.85;
    if (calcFreq === 'Fortnightly') discount = 0.90;
    if (calcFreq === 'Monthly') discount = 0.95;

    const total = Math.round(base * discount);
    return {
      low: Math.round(total * 0.9),
      high: Math.round(total * 1.15),
      discountApplied: Math.round((1 - discount) * 100)
    };
  };

  const calcPricing = getCalculatedPrice();

  return (
    <div className="w-full overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-8 pb-16 lg:pt-14 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Trust Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-200/60">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Verified Care For Prestigious Properties</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6">
              Professional Property Care,{' '}
              <span className="text-emerald-800 font-serif italic">All in One Place.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed">
              Reliable cleaning, decorating, gardening and property maintenance services for homes, landlords and businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-700 text-white font-bold text-sm shadow-md hover:bg-emerald-800 active:scale-98 transition-all cursor-pointer group"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#services-directory"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors cursor-pointer text-center"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Points Badges Below Hero */}
            <div className="w-full pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Fully Insured (£10M)</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Professional Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Flexible Scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Residential & Commercial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Reliable Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Same-Week Bookings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Image & Floating Glass Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpkRMGcfOcDo89XcipkU2-3xmx-cSIdPVgeDWeFuJbMF2VhPlQyxf3prVAvUWTj2Tcc26ut9K-bbjPwjZYKp-M9TED8ADmP1aZD6-VxvnNdxYH1xnVnMB6KVP5uQN_4H0hrDqXo-_inzv1AbgJEIDEW8PgG9_0gu0iUENI_T2LkWhXW-efCatTIKyuwhl90Dgo98gU8-Ea-oRzknJt3oIM2tiX7RN9V8hpR0VnRtUFWRluBfIBtL8"
                alt="Contemporary architectural estate with manicured landscaping and pristine exterior"
                className="w-full h-[460px] sm:h-[540px] lg:h-[580px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Glass Stat 1: London & Home Counties */}
            <div className="absolute top-6 left-4 sm:-left-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/60 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-slate-900 leading-tight">London</p>
                <p className="text-xs text-slate-500 font-medium">& Home Counties</p>
              </div>
            </div>

            {/* Floating Glass Stat 2: Rating */}
            <div className="absolute -bottom-6 right-4 sm:right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/60 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
                <Award className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <div className="flex text-amber-500 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs font-bold text-slate-900 mt-0.5">4.9/5 Average Rating</p>
                <p className="text-[11px] text-slate-500 font-medium">420+ Verified Audits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* QUICK STATS BANNER */}
      {/* ========================================================================= */}
      <section className="w-full bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">12k+</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider mt-1">Care Hours Delivered</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">98.4%</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider mt-1">On-Time Completion</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">850+</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider mt-1">Active Recurring Estates</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">100%</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider mt-1">Eco-Conscious Formulations</div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SERVICES SECTION */}
      {/* ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="services-directory">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Our Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Comprehensive Property Care Across Every Discipline
          </h2>
          <p className="text-slate-600 text-base mt-3 leading-relaxed">
            Specialist hands for interior hygiene, structural finishing, and pristine landscape architecture—coordinated seamlessly under one master contract.
          </p>
        </div>

        {/* 8 Distinct Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              onSelect={(slug) => onNavigateToService(slug)}
              onBook={(name) => onOpenQuote(name)}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PACKAGES SECTION (TABBED MATRIX) */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#f3f6f4] py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80" id="packages-and-pricing">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Transparent Rates</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Curated Service Packages
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Choose ready-to-deploy specifications or mix across disciplines.
              </p>
            </div>

            {/* Tab Filter Controls */}
            <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs self-start md:self-auto">
              <button
                onClick={() => setActivePackageTab('cleaning')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activePackageTab === 'cleaning'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Cleaning Packages
              </button>
              <button
                onClick={() => setActivePackageTab('painting')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activePackageTab === 'painting'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Painting Packages
              </button>
              <button
                onClick={() => setActivePackageTab('gardening')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activePackageTab === 'gardening'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Gardening Packages
              </button>
            </div>
          </div>

          {/* TAB 1: Cleaning Packages */}
          {activePackageTab === 'cleaning' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-200">
              {/* Essential Clean */}
              <div className="flex flex-col bg-white rounded-3xl p-8 border border-slate-200 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Routine Upkeep</span>
                <h3 className="text-2xl font-bold text-slate-900">Essential Clean</h3>
                <p className="text-xs text-slate-500 mt-2 mb-6">Regular cleaning designed for busy family homes and weekly maintenance.</p>
                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-slate-900">From £65</span>
                  <span className="text-xs text-slate-500 font-medium"> / visit</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Regular surface cleaning</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Vacuuming of all carpets & rugs</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Dusting of surfaces & sills</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Kitchen worktops, hob & splashbacks</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Full bathroom sanitation & mirrors</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Floor hard-surface steam mopping</li>
                </ul>
                <button
                  onClick={() => onOpenQuote('Essential Clean')}
                  className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                >
                  Book Essential Clean
                </button>
              </div>

              {/* Deep Clean (Popular) */}
              <div className="flex flex-col bg-white rounded-3xl p-8 border-2 border-emerald-700 shadow-md relative">
                <div className="absolute -top-3 left-8 px-3.5 py-1 rounded-full bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider">
                  Most Requested
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">Detailed Reset</span>
                <h3 className="text-2xl font-bold text-slate-900">Deep Clean</h3>
                <p className="text-xs text-slate-500 mt-2 mb-6">Thorough reset for seasonal changes, tenancy handovers, or post-events.</p>
                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-slate-900">From £160</span>
                  <span className="text-xs text-slate-500 font-medium"> / property</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> <strong>Everything in Essential Clean</strong></li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Detailed kitchen deep cleaning</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Bathroom descaling & tile grout scrubbing</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Skirting boards wiped and cleaned</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Internal doors, handles & light switches</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Hard-to-reach areas & high cobweb removal</li>
                </ul>
                <button
                  onClick={() => onOpenQuote('Deep Clean')}
                  className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                >
                  Book Deep Clean
                </button>
              </div>

              {/* Premium Clean */}
              <div className="flex flex-col bg-white rounded-3xl p-8 border border-slate-200 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Concierge Standard</span>
                <h3 className="text-2xl font-bold text-slate-900">Premium Clean</h3>
                <p className="text-xs text-slate-500 mt-2 mb-6">White-glove executive tier including heavy interior appliances and windows.</p>
                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-slate-900">From £290</span>
                  <span className="text-xs text-slate-500 font-medium"> / property</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Complete Deep Cleaning protocol</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Full professional oven & extractor cleaning</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Fridge & freezer internal sanitisation</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Interior architectural windows & frames</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Carpet cleaning options (spot & extract)</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Upholstery revitalizing steam options</li>
                </ul>
                <button
                  onClick={() => onOpenQuote('Premium Clean')}
                  className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                >
                  Book Premium Clean
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: Painting Packages */}
          {activePackageTab === 'painting' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-200">
              <div className="flex flex-col bg-white rounded-3xl p-8 border border-slate-200 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Scuffs & Trims</span>
                <h3 className="text-2xl font-bold text-slate-900">Refresh Package</h3>
                <p className="text-xs text-slate-500 mt-2 mb-6">Targeted touch-ups of scuffed walls, doors, baseboards, and filling small holes.</p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-slate-900">Request Quote</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Surface preparation & minor plaster filling</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Caulk line renewal around frames</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Wall touch-ups with color-matched codes</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Woodwork & skirting board freshening</li>
                </ul>
                <button
                  onClick={() => onOpenQuote('Painting - Refresh Package')}
                  className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                >
                  Request Quote
                </button>
              </div>

              <div className="flex flex-col bg-white rounded-3xl p-8 border-2 border-emerald-700 shadow-md relative">
                <div className="absolute -top-3 left-8 px-3.5 py-1 rounded-full bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider">
                  Popular Transformation
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">Dedicated Space</span>
                <h3 className="text-2xl font-bold text-slate-900">Room Makeover Package</h3>
                <p className="text-xs text-slate-500 mt-2 mb-6">Full overhaul of living rooms, bedrooms, dining halls, or kitchen dining areas.</p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-slate-900">Request Quote</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Complete floor & furniture masking</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Surface sanding, skim filling & mist coats</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> 2 full coats on all interior walls</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Ceilings painted in flat anti-glare white</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Woodwork, doors & radiators finished in satin/gloss</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Optional wallpapering or accent feature walls</li>
                </ul>
                <button
                  onClick={() => onOpenQuote('Painting - Room Makeover Package')}
                  className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                >
                  Request Quote
                </button>
              </div>

              <div className="flex flex-col bg-white rounded-3xl p-8 border border-slate-200 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Turnkey Overhaul</span>
                <h3 className="text-2xl font-bold text-slate-900">Full Property Package</h3>
                <p className="text-xs text-slate-500 mt-2 mb-6">Interior and optional exterior decorating for entire residences or developments.</p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-slate-900">Request Quote</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Whole-house preparation & protection</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Multi-room coordinated scheduling</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Walls, ceilings, architraves & woodwork</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Heritage paint consultation & supply</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Optional exterior masonry & woodwork</li>
                </ul>
                <button
                  onClick={() => onOpenQuote('Painting - Full Property Package')}
                  className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                >
                  Request Quote
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: Gardening Packages */}
          {activePackageTab === 'gardening' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-200">
              <div className="flex flex-col bg-white rounded-3xl p-8 border border-slate-200 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Grounds Keeping</span>
                <h3 className="text-2xl font-bold text-slate-900">Garden Essential</h3>
                <p className="text-xs text-slate-500 mt-2 mb-6">Regular visits to keep your lawn striped and garden paths tidy.</p>
                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-slate-900">From £55</span>
                  <span className="text-xs text-slate-500 font-medium"> / visit</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Precision lawn mowing with striped finish</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Edge trimming along walkways & borders</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Garden tidy-up & hard surface leaf blowing</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Green waste bagging and recycling</li>
                </ul>
                <button
                  onClick={() => onOpenQuote('Garden Essential')}
                  className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                >
                  Book Garden Essential
                </button>
              </div>

              <div className="flex flex-col bg-white rounded-3xl p-8 border-2 border-emerald-700 shadow-md relative">
                <div className="absolute -top-3 left-8 px-3.5 py-1 rounded-full bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider">
                  Recommended Plan
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">Horticultural Care</span>
                <h3 className="text-2xl font-bold text-slate-900">Garden Care Plus</h3>
                <p className="text-xs text-slate-500 mt-2 mb-6">Complete attention for flourishing flower beds, hedges, and turf vitality.</p>
                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-slate-900">From £110</span>
                  <span className="text-xs text-slate-500 font-medium"> / visit</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Everything in Garden Essential</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Precision hedge trimming & formal shaping</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Weed control across beds, gravel & patios</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Plant care, pruning & deadheading</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Seasonal soil conditioning & mulch dressing</li>
                </ul>
                <button
                  onClick={() => onOpenQuote('Garden Care Plus')}
                  className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                >
                  Book Garden Care Plus
                </button>
              </div>

              <div className="flex flex-col bg-white rounded-3xl p-8 border border-slate-200 shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Estate Standard</span>
                <h3 className="text-2xl font-bold text-slate-900">Complete Garden Maintenance</h3>
                <p className="text-xs text-slate-500 mt-2 mb-6">Year-round grounds management for expansive private gardens and estates.</p>
                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-slate-900">From £210</span>
                  <span className="text-xs text-slate-500 font-medium"> / visit</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Lawn mowing, edging & seasonal aerating</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Full perimeter hedge trimming & topiary</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Comprehensive weed & moss suppression</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Botanical plant care, pruning & feeding</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-700 shrink-0" /> Seasonal maintenance (autumn leaves, spring scarifying)</li>
                </ul>
                <button
                  onClick={() => onOpenQuote('Complete Garden Maintenance')}
                  className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                >
                  Book Complete Maintenance
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MAINTENANCE PLANS ("Set It and Forget It") */}
      {/* ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="maintenance-plans">
        <div className="bg-[#0b1c30] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-emerald-600/20 blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl mb-12 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Recurring Peace of Mind
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-white">
              “Set It and Forget It” Property Care
            </h2>
            <p className="text-slate-300 text-base mt-3 leading-relaxed">
              Consolidate your domestic housekeeping, garden care, and property maintenance under one regular contract with priority booking and a dedicated account manager.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {/* Essential Care */}
            <div className="rounded-2xl bg-white/10 p-8 flex flex-col justify-between backdrop-blur-xs border border-white/10">
              <div>
                <h3 className="text-2xl font-bold text-white">Essential Care</h3>
                <p className="text-xs text-slate-300 mt-2 mb-6">Reliable routine upkeep for primary family residences.</p>
                <ul className="space-y-3 mb-8 text-xs text-slate-200">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Regular cleaning (weekly or fortnightly)</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Scheduled visits with dedicated cleaner</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Priority booking window for additional trades</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Fortnightly lawn mowing & garden trim</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm text-slate-300">From £189 / mo</span>
                <button
                  onClick={() => onOpenQuote('Maintenance Plan - Essential Care')}
                  className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white text-white hover:text-slate-900 font-bold text-xs transition-colors cursor-pointer"
                >
                  Select Plan
                </button>
              </div>
            </div>

            {/* Complete Care (Popular) */}
            <div className="rounded-2xl bg-white/15 p-8 flex flex-col justify-between backdrop-blur-xs border-2 border-emerald-400 relative">
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-emerald-400 text-slate-900 font-bold text-[11px] uppercase tracking-wider">
                Flagship Plan
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Complete Care</h3>
                <p className="text-xs text-slate-300 mt-2 mb-6">Our most popular combination covering interior and exterior spaces.</p>
                <ul className="space-y-3 mb-8 text-xs text-slate-200">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Regular professional cleaning</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Full ongoing garden maintenance</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Seasonal deep cleaning resets (spring & autumn)</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Preventative quarterly property health checks</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Annual gutter clearance & camera survey</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm text-emerald-300 font-bold">From £349 / mo</span>
                <button
                  onClick={() => onOpenQuote('Maintenance Plan - Complete Care')}
                  className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  Select Plan
                </button>
              </div>
            </div>

            {/* Premium Property Care */}
            <div className="rounded-2xl bg-white/10 p-8 flex flex-col justify-between backdrop-blur-xs border border-white/10">
              <div>
                <h3 className="text-2xl font-bold text-white">Premium Property Care</h3>
                <p className="text-xs text-slate-300 mt-2 mb-6">All-inclusive concierge estate upkeep for prime properties and estates.</p>
                <ul className="space-y-3 mb-8 text-xs text-slate-200">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Premium cleaning & housekeeping</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Complete estate gardening & lawn care</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Included handyman maintenance hours (8 hrs/mo)</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> On-demand decorating & painting support</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Priority 24/7 emergency service line</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Fully custom visit schedule</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm text-slate-300 font-bold">Custom Quote</span>
                <button
                  onClick={() => onOpenQuote('Maintenance Plan - Premium Estate Care')}
                  className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white text-white hover:text-slate-900 font-bold text-xs transition-colors cursor-pointer"
                >
                  Request Plan
                </button>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 pt-8 border-t border-white/10">
            <p className="text-xs sm:text-sm text-slate-300">
              Cancel or adjust frequency anytime with 14 days notice. Consolidated monthly invoicing with transparent line items.
            </p>
            <button
              onClick={() => onOpenQuote('Custom Maintenance Plan')}
              className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl transition-all shrink-0 cursor-pointer"
            >
              Build My Maintenance Plan
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CONTRACT OPTIONS STRIP */}
      {/* ========================================================================= */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Contract Options</h3>
            <p className="text-xs sm:text-sm text-slate-600">Choose the scheduling cadence that matches your household or corporate fiscal cycle.</p>
          </div>
          <button
            onClick={() => onOpenQuote('Contract Pricing')}
            className="text-xs font-bold text-emerald-800 hover:underline cursor-pointer flex items-center gap-1 self-start md:self-auto"
          >
            <span>Request Contract Pricing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
          {[
            { title: 'One-Off Service', tag: 'On Demand' },
            { title: 'Weekly', tag: 'Save 15%', highlight: true },
            { title: 'Fortnightly', tag: 'Save 10%', highlight: true },
            { title: 'Monthly', tag: 'Scheduled' },
            { title: 'Quarterly', tag: 'Seasonal' },
            { title: '6-Month Contract', tag: 'Price Lock' },
            { title: '12-Month Contract', tag: 'Max Value', highlight: true },
            { title: 'Custom Contract', tag: 'Portfolios' },
          ].map((item, i) => (
            <div 
              key={i} 
              className={`p-4 rounded-2xl border transition-all ${
                item.highlight 
                  ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-bold shadow-xs' 
                  : 'bg-white border-slate-200 text-slate-800'
              }`}
            >
              <div className="text-xs font-bold leading-tight">{item.title}</div>
              <div className={`text-[10px] mt-1 font-semibold ${item.highlight ? 'text-emerald-700' : 'text-slate-500'}`}>
                {item.tag}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. COMMERCIAL SERVICES SECTION */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#f4f7f5] py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80" id="commercial-and-landlords">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Enterprise & Business</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Commercial Property Services
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Uncompromising hygiene, exterior curb appeal, and proactive maintenance for London and South East businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Commercial Sectors Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Commercial Sectors Served</h3>
                    <p className="text-xs text-slate-500 font-medium">Bespoke SLAs & Out-of-Hours Shifts</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    'Offices',
                    'Retail Stores',
                    'Restaurants',
                    'Landlords',
                    'Property Managers',
                    'Airbnb Properties',
                    'Apartment Buildings',
                    'Commercial Properties'
                  ].map((sector, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{sector}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Commercial Disciplines</h4>
                  <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                    <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-lg">Office Cleaning</span>
                    <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-lg">Commercial Cleaning</span>
                    <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-lg">Commercial Painting</span>
                    <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-lg">Grounds Maintenance</span>
                    <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-lg">Property Maintenance</span>
                    <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-lg">Recurring Service Contracts</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenQuote('Commercial Services')}
                className="w-full py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-xs transition-all cursor-pointer text-center"
              >
                Request a Commercial Quote
              </button>
            </div>

            {/* Landlord & Property Managers Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                    <Key className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Property Care for Landlords & Property Managers</h3>
                    <p className="text-xs text-slate-500 font-medium">Turnaround speed & tenant satisfaction</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Eliminate tenancy voids with our guaranteed 48-hour turnarounds. We bundle checkout cleaning, inventory compliance, painting touch-ups, and lock replacements into a seamless handover.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    'End of tenancy cleaning',
                    'Property refreshes',
                    'Painting & decorating',
                    'Garden cleanup & pruning',
                    'Maintenance & repairs',
                    'Multi-property contracts',
                    'Regular inspections',
                    'Priority scheduling'
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenQuote('Landlord Services')}
                className="w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-xs transition-all cursor-pointer text-center"
              >
                Landlord Priority Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BUILD YOUR PACKAGE SECTION (INTERACTIVE QUOTE FORM) */}
      {/* ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto" id="quote-builder">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-xl">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              Interactive Estimator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Build Your Package
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Configure multi-disciplinary services and receive an itemised quote within 60 minutes.
            </p>
          </div>

          {calcSuccess ? (
            <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200">
              <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Quotation Received!</h3>
              <p className="text-slate-600 text-sm max-w-lg mx-auto mb-6">
                Thank you, {calcName || 'valued client'}. We have queued your specifications for your {calcProperty} in {calcPostcode || 'London'}. An Estate Director will email ({calcEmail}) and call you shortly.
              </p>
              <button
                onClick={() => setCalcSuccess(false)}
                className="px-6 py-2.5 rounded-xl bg-emerald-800 text-white font-bold text-xs"
              >
                Modify Proposal
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setCalcSuccess(true); }} className="space-y-10">
              {/* Step 1: Choose Property Type */}
              <div>
                <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Step 1: Choose Property Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[
                    { id: 'House', label: 'House', icon: Home },
                    { id: 'Apartment', label: 'Apartment', icon: Building2 },
                    { id: 'Office', label: 'Office', icon: Building2 },
                    { id: 'Commercial', label: 'Commercial Property', icon: Store },
                    { id: 'Rental', label: 'Rental Property', icon: Key },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = calcProperty === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCalcProperty(item.id as PropertyType)}
                        className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-2 border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-emerald-300' : 'text-slate-500'}`} />
                        <span className="text-xs font-bold leading-tight">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Choose Services */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Step 2: Choose Services (Multi-Select)
                  </label>
                  <span className="text-xs text-slate-500">Pick all required</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    'Cleaning',
                    'Deep Cleaning',
                    'Painting',
                    'Decorating',
                    'Gardening',
                    'Landscaping',
                    'Pressure Washing',
                    'Maintenance'
                  ].map((srv) => {
                    const isSelected = calcServices.includes(srv);
                    return (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => toggleCalcService(srv)}
                        className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className="text-xs font-semibold">{srv}</span>
                        <div className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                          isSelected ? 'bg-emerald-700 border-emerald-700 text-white' : 'border-slate-300'
                        }`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Choose Frequency */}
              <div>
                <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Step 3: Choose Frequency
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5">
                  {(['One-Off', 'Weekly', 'Fortnightly', 'Monthly', 'Quarterly', 'Custom'] as FrequencyType[]).map((freq) => {
                    const isSelected = calcFreq === freq;
                    return (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => setCalcFreq(freq)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer text-xs font-bold ${
                          isSelected
                            ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div>{freq}</div>
                        {freq === 'Weekly' && <span className="text-[10px] text-emerald-300 block font-normal">Save 15%</span>}
                        {freq === 'Fortnightly' && <span className="text-[10px] text-emerald-300 block font-normal">Save 10%</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Property Details */}
              <div>
                <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Step 4: Enter Property Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Bedrooms</label>
                    <select
                      value={calcBedrooms}
                      onChange={(e) => setCalcBedrooms(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                    >
                      <option>1 Bedroom</option>
                      <option>2 Bedrooms</option>
                      <option>3 Bedrooms</option>
                      <option>4 Bedrooms</option>
                      <option>5+ Bedrooms</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Bathrooms</label>
                    <select
                      value={calcBathrooms}
                      onChange={(e) => setCalcBathrooms(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                    >
                      <option>1 Bathroom</option>
                      <option>2 Bathrooms</option>
                      <option>3 Bathrooms</option>
                      <option>4+ Bathrooms</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Property Size (Sq Ft)</label>
                    <input
                      type="text"
                      value={calcSqFt}
                      onChange={(e) => setCalcSqFt(e.target.value)}
                      placeholder="e.g. 1,800 sq ft"
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Postcode *</label>
                    <input
                      type="text"
                      required
                      value={calcPostcode}
                      onChange={(e) => setCalcPostcode(e.target.value)}
                      placeholder="e.g. SW3 4TY"
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Additional Notes</label>
                  <input
                    type="text"
                    value={calcNotes}
                    onChange={(e) => setCalcNotes(e.target.value)}
                    placeholder="e.g. Include oven cleaning; key safe on left wall..."
                    className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                  />
                </div>
              </div>

              {/* Step 5: Contact Information */}
              <div>
                <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Step 5: Contact Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Name *</label>
                    <input
                      type="text"
                      required
                      value={calcName}
                      onChange={(e) => setCalcName(e.target.value)}
                      placeholder="Alexander Vance"
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={calcPhone}
                      onChange={(e) => setCalcPhone(e.target.value)}
                      placeholder="+44 7700 900123"
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={calcEmail}
                      onChange={(e) => setCalcEmail(e.target.value)}
                      placeholder="alex@estatecare.co.uk"
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                    />
                  </div>
                </div>

                {/* Estimate Preview & Button */}
                <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wide">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Estimated Range Indicator</span>
                      {calcPricing.discountApplied > 0 && (
                        <span className="bg-emerald-700 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                          {calcPricing.discountApplied}% Frequency Discount
                        </span>
                      )}
                    </div>
                    <div className="text-2xl font-extrabold text-slate-900 mt-0.5">
                      From £{calcPricing.low} – £{calcPricing.high}
                      <span className="text-xs font-normal text-slate-600 ml-1.5">
                        {calcFreq === 'One-Off' ? 'fixed quote guide' : `per ${calcFreq.toLowerCase()} visit`}
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Get My Free Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. HOW IT WORKS */}
      {/* ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="how-it-works">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            How It Works
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Professional property care delivered in 4 transparent, effortless steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: '1',
              title: 'Tell Us What You Need',
              desc: 'Use our 60-second interactive package builder or send photos directly via our priority WhatsApp concierge.'
            },
            {
              step: '2',
              title: 'Receive Your Quote',
              desc: 'We issue an itemized, transparent fixed quote with guaranteed pricing and clear scopes of work.'
            },
            {
              step: '3',
              title: 'Choose Your Date',
              desc: 'Pick your preferred arrival window. We accommodate key-safe access or on-site reception protocols.'
            },
            {
              step: '4',
              title: 'We Complete the Work',
              desc: 'Our vetted specialists execute the work meticulously, providing digital photo verification upon completion.'
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 font-extrabold text-xl flex items-center justify-center mb-5 border border-emerald-200/60">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. WHY CHOOSE US */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#f4f7f5] py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">The Verdant Standard</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Why Choose Us
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Built on reliability, uncompromising standards, and long-term customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BadgeCheck,
                title: 'Professional Team',
                desc: 'Thoroughly vetted, DBS-checked, and trained to architectural estate care standards.'
              },
              {
                icon: ShieldCheck,
                title: 'Fully Insured',
                desc: 'Comprehensive £10,000,000 Public Liability Insurance protecting high-value properties.'
              },
              {
                icon: Info,
                title: 'Transparent Quotes',
                desc: 'Itemized specifications with zero hidden surcharges or surprise travel expenses.'
              },
              {
                icon: Clock,
                title: 'Reliable Scheduling',
                desc: 'Guaranteed arrival slots and punctual execution with real-time status updates.'
              },
              {
                icon: Layers,
                title: 'Flexible Contracts',
                desc: 'From one-off deep cleans to 12-month multi-property plans with easy cancellation.'
              },
              {
                icon: Building2,
                title: 'Residential & Commercial',
                desc: 'Equipped to serve private townhouses, commercial headquarters, and residential portfolios.'
              },
              {
                icon: Award,
                title: 'Quality Work',
                desc: '100% satisfaction guarantee. If any detail fails our checklist, we return free within 24 hours.'
              },
              {
                icon: MessageSquare,
                title: 'Easy Communication',
                desc: 'Direct telephone line, active WhatsApp dispatch, and a dedicated account manager.'
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-emerald-700" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">{card.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed flex-1">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. BEFORE & AFTER GALLERY */}
      {/* ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="before-after">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Visual Proof</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Before & After Gallery
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Inspect our documented cleaning transformations, painting projects, garden overhauls, and patio restorations using the interactive slider.
          </p>
        </div>

        {/* Interactive Slider Component */}
        <BeforeAfterSlider />
      </section>

      {/* ========================================================================= */}
      {/* 11. TESTIMONIALS */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#f4f7f5] py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80" id="reviews">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Client Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Trusted by Homeowners, Landlords & Businesses
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Placeholder customer reviews demonstrating our dedication to premier property care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((review) => (
              <div 
                key={review.id} 
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-500 gap-0.5 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-2">
                    {review.service}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                    "{review.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">{review.author}</h5>
                    <p className="text-[11px] text-slate-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. ABOUT US */}
      {/* ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="about-us">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">About Verdant</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Property Care You Can Rely On
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Verdant helps homeowners, landlords and businesses keep their properties clean, attractive, and professionally maintained. We understand that managing separate contractors for cleaning, decorating, groundskeeping, and repairs is stressful, costly, and inefficient.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              By bringing all specialized disciplines together under one trusted umbrella, we provide consistency, high quality, and a single point of contact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-1">Reliability</h4>
                <p className="text-xs text-slate-500">Punctual arrivals, scheduled recurring dates, and dependable execution.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-1">Professionalism</h4>
                <p className="text-xs text-slate-500">Liveried vehicles, DBS vetted staff, and respect for privacy and security.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-1">Quality & Craft</h4>
                <p className="text-xs text-slate-500">Eco-certified products, commercial machinery, and laser attention to detail.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-1">Long-Term Care</h4>
                <p className="text-xs text-slate-500">Building lasting relationships with property owners and facilities directors.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
                alt="Immaculate modern estate home interior and landscaped garden"
                className="w-full h-96 sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-xs shadow-md">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Verdant Guarantee</p>
                <h4 className="text-lg font-bold text-slate-900 mt-1">One Team. Every Discipline. Zero Friction.</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Enjoy an immaculate property without the headache of coordinating independent contractors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. FAQ SECTION */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#f4f7f5] py-24 px-4 sm:px-6 lg:px-8 border-y border-slate-200/80" id="contact-and-faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Common Inquiries</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Everything you need to know about our rates, insurance, scheduling, and service execution.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <div key={i} className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-emerald-800 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-emerald-700 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 14. CONTACT SECTION */}
      {/* ========================================================================= */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Direct Inquiries</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 mb-6">
                Speak with an Estate Care Director
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                Have a bespoke residential requirement, commercial tender, or emergency property repair? Our concierge team responds within 15 minutes during operating hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase">Telephone</p>
                    <a href={`tel:${COMPANY_INFO.phoneNumeric}`} className="text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-700">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase">WhatsApp Priority</p>
                    <a href={`https://wa.me/${COMPANY_INFO.whatsappNumeric}`} target="_blank" rel="noreferrer" className="text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-700">
                      {COMPANY_INFO.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase">Email Concierge</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-700">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 mt-8 space-y-2">
              <div className="text-xs font-semibold text-slate-500 uppercase">Operating Hours</div>
              <p className="text-xs text-slate-700">{COMPANY_INFO.hours}</p>
              <p className="text-xs font-bold text-emerald-800">{COMPANY_INFO.emergencyLine}</p>
              <p className="text-xs text-slate-500 pt-2">Coverage: {COMPANY_INFO.coverageAreas}</p>
            </div>
          </div>

          {/* Right Contact & Quote Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Direct Request</h3>
            <p className="text-xs text-slate-500 mb-6">Complete the brief below and we will confirm availability and fixed pricing.</p>

            {contactSubmitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200">
                <CheckCircle2 className="w-12 h-12 text-emerald-700 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-slate-900">Message Received</h4>
                <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                  Thank you, {contactData.name}. An Estate Director will review your enquiry and contact you within 60 minutes.
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-xl bg-emerald-800 text-white font-bold text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  setContactSubmitted(true); 
                }} 
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      placeholder="eleanor@example.co.uk"
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      placeholder="+44 7700 900123"
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Postcode *</label>
                    <input
                      type="text"
                      required
                      value={contactData.postcode}
                      onChange={(e) => setContactData({ ...contactData, postcode: e.target.value })}
                      placeholder="e.g. SW1X 7XL"
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Property Type</label>
                    <select
                      value={contactData.propertyType}
                      onChange={(e) => setContactData({ ...contactData, propertyType: e.target.value })}
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                    >
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Office</option>
                      <option>Commercial Property</option>
                      <option>Rental Property</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Services Required</label>
                    <select
                      value={contactData.services}
                      onChange={(e) => setContactData({ ...contactData, services: e.target.value })}
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                    >
                      <option>Professional Cleaning</option>
                      <option>Deep Cleaning & Tenancy</option>
                      <option>Painting & Decorating</option>
                      <option>Gardening & Lawn Care</option>
                      <option>Landscaping</option>
                      <option>Pressure Washing</option>
                      <option>Property Maintenance</option>
                      <option>Multiple Combined Services</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={contactData.preferredDate}
                      onChange={(e) => setContactData({ ...contactData, preferredDate: e.target.value })}
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Frequency</label>
                    <select
                      value={contactData.frequency}
                      onChange={(e) => setContactData({ ...contactData, frequency: e.target.value })}
                      className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                    >
                      <option>One-Off Service</option>
                      <option>Weekly (Save 15%)</option>
                      <option>Fortnightly (Save 10%)</option>
                      <option>Monthly</option>
                      <option>Quarterly</option>
                      <option>Ongoing Maintenance Plan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Message / Scope Description</label>
                  <textarea
                    rows={3}
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    placeholder="Describe specific tasks, room counts, or access details..."
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  Send Inquiry & Request Pricing
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
