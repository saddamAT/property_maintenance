import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BEFORE_AFTER_GALLERY } from '../data/mockData';
import { Sliders, MapPin, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  initialIndex?: number;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ initialIndex = 0 }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(initialIndex);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentItem = BEFORE_AFTER_GALLERY[selectedItemIndex] || BEFORE_AFTER_GALLERY[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percent = (clampedX / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  return (
    <div className="w-full">
      {/* Category Selection Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {BEFORE_AFTER_GALLERY.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => {
              setSelectedItemIndex(idx);
              setSliderPosition(50);
            }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedItemIndex === idx
                ? 'bg-emerald-800 text-white shadow-sm ring-2 ring-emerald-800/20'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {item.category}
          </button>
        ))}
      </div>

      {/* Main Interactive Comparison Stage */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-200/80 max-w-5xl mx-auto">
        {/* Header details */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                {currentItem.category}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {currentItem.location}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              {currentItem.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg self-start sm:self-auto">
            <Sliders className="w-3.5 h-3.5 text-emerald-600" />
            <span>Drag slider left/right</span>
          </div>
        </div>

        {/* Image Split Container */}
        <div 
          ref={containerRef}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
          className="relative w-full h-[360px] sm:h-[480px] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-slate-100 shadow-inner"
        >
          {/* AFTER Image (Full background) */}
          <img 
            src={currentItem.afterImg} 
            alt={`After: ${currentItem.title}`}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* After Tag */}
          <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md pointer-events-none">
            After
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div 
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src={currentItem.beforeImg} 
              alt={`Before: ${currentItem.title}`}
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
            />
            {/* Before Tag */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-white font-bold text-xs uppercase tracking-wider shadow-md">
              Before
            </div>
          </div>

          {/* Drag Handle Divider Line */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-2xl pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-emerald-800 shadow-xl flex items-center justify-center border-2 border-emerald-700">
              <Sliders className="w-4 h-4 rotate-90" />
            </div>
          </div>
        </div>

        {/* Caption Description */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
            {currentItem.description}
          </p>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 shrink-0">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Verdant Guaranteed Workmanship</span>
          </div>
        </div>
      </div>
    </div>
  );
};
