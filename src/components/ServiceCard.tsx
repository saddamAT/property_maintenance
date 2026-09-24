import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Building2, 
  Paintbrush, 
  Sprout, 
  Trees, 
  Gauge, 
  Wrench, 
  ArrowRight 
} from 'lucide-react';
import { ServiceDetail } from '../types';

interface ServiceCardProps {
  service: ServiceDetail;
  onSelect: (slug: string) => void;
  onBook: (serviceName: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect, onBook }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Paintbrush': return <Paintbrush className="w-6 h-6" />;
      case 'Sprout': return <Sprout className="w-6 h-6" />;
      case 'Trees': return <Trees className="w-6 h-6" />;
      case 'Gauge': return <Gauge className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <div className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-emerald-700/30 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 rounded-2xl bg-slate-50 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-200">
            {getIcon(service.iconName)}
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            {service.startingPrice}
          </span>
        </div>

        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
          {service.category}
        </div>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
          {service.name}
        </h3>
        <p className="text-xs text-slate-500 font-medium mb-3">
          {service.subtitle}
        </p>

        <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6">
          {service.shortDescription}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelect(service.slug)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-emerald-800 transition-colors group-hover:gap-2.5 cursor-pointer"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
        </button>

        <button
          onClick={() => onBook(service.name)}
          className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-700 hover:text-white text-slate-700 text-xs font-bold transition-all cursor-pointer"
        >
          Book
        </button>
      </div>
    </div>
  );
};
