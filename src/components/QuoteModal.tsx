import React, { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  Sparkles, 
  Building2, 
  Home, 
  Key, 
  Store, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck,
  Phone,
  Mail,
  ArrowRight,
  Info
} from 'lucide-react';
import { PropertyType, FrequencyType } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  onClose, 
  preselectedService 
}) => {
  const [propertyType, setPropertyType] = useState<PropertyType>('House');
  const [services, setServices] = useState<string[]>(['Professional Cleaning']);
  const [frequency, setFrequency] = useState<FrequencyType>('Fortnightly');
  const [bedrooms, setBedrooms] = useState('3 Bedrooms');
  const [bathrooms, setBathrooms] = useState('2 Bathrooms');
  const [approxSqFt, setApproxSqFt] = useState('');
  const [postcode, setPostcode] = useState('');
  const [notes, setNotes] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      if (!services.includes(preselectedService)) {
        setServices((prev) => [...prev, preselectedService]);
      }
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    if (services.includes(srv)) {
      if (services.length > 1) {
        setServices(services.filter((s) => s !== srv));
      }
    } else {
      setServices([...services, srv]);
    }
  };

  // Instant calculated estimate logic
  const calculateEstimate = () => {
    let base = 50;
    if (propertyType === 'Office' || propertyType === 'Commercial') base += 60;
    if (propertyType === 'Rental') base += 20;

    // Bed/Bath additions
    const bedCount = parseInt(bedrooms) || 2;
    const bathCount = parseInt(bathrooms) || 1;
    base += bedCount * 15;
    base += bathCount * 20;

    // Services
    services.forEach((s) => {
      if (s.includes('Deep Clean')) base += 85;
      else if (s.includes('Painting')) base += 140;
      else if (s.includes('Gardening')) base += 55;
      else if (s.includes('Landscaping')) base += 350;
      else if (s.includes('Pressure Washing')) base += 75;
      else if (s.includes('Maintenance')) base += 65;
      else base += 35; // standard cleaning
    });

    // Frequency discount
    let discount = 1;
    if (frequency === 'Weekly') discount = 0.85; // 15% off
    if (frequency === 'Fortnightly') discount = 0.90; // 10% off
    if (frequency === 'Monthly') discount = 0.95; // 5% off

    const total = Math.round(base * discount);
    const low = Math.round(total * 0.9);
    const high = Math.round(total * 1.15);
    return { low, high, total, discountPercent: Math.round((1 - discount) * 100) };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 border border-slate-100">
        {/* Modal Header */}
        <div className="bg-[#0f172a] text-white p-6 sm:p-8 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verdant Custom Quote Engine</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Build Your Property Care Package
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Configure multi-disciplinary services and receive an itemised quote within 60 minutes.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Quotation Transmitted
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2 mb-3">
              Thank You, {fullName || 'Valued Client'}!
            </h3>
            <p className="text-slate-600 max-w-lg mb-6 leading-relaxed">
              We have received your specifications for your <strong className="text-slate-900">{propertyType}</strong> in <strong className="text-slate-900">{postcode || 'London'}</strong>. An Estate Care Director is reviewing your schedule and will provide your confirmed quote via email ({email}) and phone.
            </p>

            <div className="w-full max-w-md bg-slate-50 rounded-2xl p-6 border border-slate-200/80 mb-8 text-left space-y-3">
              <div className="flex justify-between text-sm pb-2 border-b border-slate-200">
                <span className="text-slate-500">Property Type:</span>
                <span className="font-semibold text-slate-800">{propertyType}</span>
              </div>
              <div className="flex justify-between text-sm pb-2 border-b border-slate-200">
                <span className="text-slate-500">Services:</span>
                <span className="font-semibold text-slate-800 text-right">{services.join(', ')}</span>
              </div>
              <div className="flex justify-between text-sm pb-2 border-b border-slate-200">
                <span className="text-slate-500">Cadence:</span>
                <span className="font-semibold text-slate-800">{frequency}</span>
              </div>
              <div className="flex justify-between text-sm pt-1">
                <span className="text-slate-500">Indicative Guide:</span>
                <span className="font-bold text-emerald-800 text-base">£{estimate.low} – £{estimate.high}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleReset}
                className="px-8 py-3.5 rounded-xl bg-emerald-800 text-white font-bold text-sm hover:bg-emerald-900 transition-colors cursor-pointer"
              >
                Return to Site
              </button>
              <a
                href={`https://wa.me/447700900843?text=Hi%20Verdant,%20I%20just%20submitted%20a%20quote%20request%20for%20my%20${propertyType}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-100 flex items-center justify-center gap-2"
              >
                <span>Track via WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
            {/* Step 1: Property Type */}
            <div>
              <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {[
                  { id: 'House', label: 'House', icon: Home },
                  { id: 'Apartment', label: 'Apartment', icon: Building2 },
                  { id: 'Office', label: 'Office', icon: Building2 },
                  { id: 'Commercial', label: 'Commercial', icon: Store },
                  { id: 'Rental', label: 'Rental / HMO', icon: Key },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = propertyType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPropertyType(item.id as PropertyType)}
                      className={`p-4 rounded-2xl flex flex-col items-center justify-center gap-2 text-center transition-all cursor-pointer border ${
                        isSelected 
                          ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm' 
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-emerald-300' : 'text-slate-500'}`} />
                      <span className="text-xs font-bold">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Services */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider">
                  2. Required Services (Multi-Select)
                </label>
                <span className="text-xs text-slate-400">Select all that apply</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {[
                  'Professional Cleaning',
                  'Deep Cleaning & Tenancy',
                  'Painting & Decorating',
                  'Gardening & Lawn Care',
                  'Landscaping',
                  'Pressure Washing',
                  'Property Maintenance',
                  'Window Glazing & Cleaning'
                ].map((srv) => {
                  const isSelected = services.includes(srv);
                  return (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => toggleService(srv)}
                      className={`p-3.5 rounded-xl text-left flex items-center justify-between border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-semibold shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-medium">{srv}</span>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                        isSelected ? 'bg-emerald-700 border-emerald-700 text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Frequency */}
            <div>
              <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                3. Preferred Frequency
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5">
                {(['One-Off', 'Weekly', 'Fortnightly', 'Monthly', 'Quarterly', 'Custom'] as FrequencyType[]).map((freq) => {
                  const isSelected = frequency === freq;
                  return (
                    <button
                      key={freq}
                      type="button"
                      onClick={() => setFrequency(freq)}
                      className={`p-3 rounded-xl text-center border text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-800 text-white border-emerald-800 shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div>{freq}</div>
                      {freq === 'Weekly' && <span className="text-[10px] text-emerald-300 block font-normal mt-0.5">Save 15%</span>}
                      {freq === 'Fortnightly' && <span className="text-[10px] text-emerald-300 block font-normal mt-0.5">Save 10%</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Property Details */}
            <div>
              <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                4. Property Specifications
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Bedrooms</label>
                  <select 
                    value={bedrooms} 
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
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
                    value={bathrooms} 
                    onChange={(e) => setBathrooms(e.target.value)}
                    className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                  >
                    <option>1 Bathroom</option>
                    <option>2 Bathrooms</option>
                    <option>3 Bathrooms</option>
                    <option>4+ Bathrooms</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Approx Sq Ft (optional)</label>
                  <input
                    type="text"
                    value={approxSqFt}
                    onChange={(e) => setApproxSqFt(e.target.value)}
                    placeholder="e.g. 1,650 sq ft"
                    className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Postcode *</label>
                  <input
                    type="text"
                    required
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    placeholder="e.g. SW3 4TY"
                    className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                  />
                </div>
              </div>
              <div className="mt-3">
                <label className="block text-xs font-semibold text-slate-600 mb-1">Additional Project Notes / Special Requests</label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Key safe available; please focus on limestone patio & high skirting boards..."
                  className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                />
              </div>
            </div>

            {/* Step 5: Contact Details & Estimate Ribbon */}
            <div>
              <label className="block text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                5. Contact & Dispatch Details
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Alexander Vance"
                    className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 7700 900123"
                    className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@estatecare.co.uk"
                    className="w-full h-11 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:ring-2 focus:ring-emerald-700 outline-hidden"
                  />
                </div>
              </div>

              {/* Estimate Calculation Summary Card */}
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wide">
                    <Info className="w-4 h-4 text-emerald-600" />
                    <span>Calculated Estimate Range</span>
                    {estimate.discountPercent > 0 && (
                      <span className="bg-emerald-700 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                        {estimate.discountPercent}% Cadence Discount Applied
                      </span>
                    )}
                  </div>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1">
                    £{estimate.low} – £{estimate.high}
                    <span className="text-xs font-normal text-slate-600 ml-1.5">
                      {frequency === 'One-Off' ? 'total fixed estimate' : `per ${frequency.toLowerCase()} visit`}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Includes all labor, trade materials, eco-certified detergents & £10M public liability insurance.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>Get My Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
