import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    'Hello, I would like a quote for regular domestic cleaning.',
    'Need an urgent end of tenancy deep clean quotation.',
    'I would like to discuss a commercial office cleaning contract.',
    'Enquiring about garden maintenance & patio pressure washing.',
  ];

  const handleSend = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumeric}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Quick Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Box Header */}
          <div className="bg-[#006948] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center font-bold text-sm">
                  VC
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-emerald-900"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Verdant Concierge</h4>
                <p className="text-[11px] text-emerald-200">Usually replies in &lt; 5 mins</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3 max-h-80 overflow-y-auto">
            <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs text-xs text-slate-700 leading-relaxed border border-slate-100">
              <p className="font-semibold text-emerald-900 mb-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                Welcome to Verdant Estate Care
              </p>
              How can we assist with your residence or commercial property today? Select a common request or type below:
            </div>

            <div className="space-y-1.5">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 text-xs font-medium text-slate-700 hover:text-emerald-900 border border-slate-200/80 transition-all text-ellipsis overflow-hidden cursor-pointer"
                >
                  "{prompt}"
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (customMsg.trim()) handleSend(customMsg);
            }}
            className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
          >
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Type your property question..."
              className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-1 focus:ring-emerald-700 text-slate-800"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full bg-[#006948] text-white shadow-xl hover:bg-[#005238] active:scale-95 transition-all cursor-pointer border border-emerald-500/20"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
        </span>
        <MessageSquare className="w-5 h-5 text-emerald-200" />
        <span className="text-sm font-bold tracking-wide">WhatsApp Us</span>
      </button>
    </div>
  );
};
