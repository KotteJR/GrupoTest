'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface GlobalCapturePopupProps {
  onClose?: () => void;
}

export function GlobalCapturePopup({ onClose }: GlobalCapturePopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if popup was already shown recently (24-48h control)
    const lastShown = localStorage.getItem('ib360-popup-last-shown');
    const now = Date.now();
    const cooldownPeriod = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    
    if (lastShown && (now - parseInt(lastShown)) < cooldownPeriod) {
      return; // Don't show popup if shown recently
    }

    // Show popup after 15-20 seconds of navigation
    const timer = setTimeout(() => {
      setShouldShow(true);
      setTimeout(() => setIsVisible(true), 100); // Small delay for smooth animation
    }, 17000); // 17 seconds

    // Exit intent detection (desktop only)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && window.innerWidth > 768) {
        if (!shouldShow) {
          setShouldShow(true);
          setTimeout(() => setIsVisible(true), 100);
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [shouldShow]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShouldShow(false);
      // Mark popup as shown
      localStorage.setItem('ib360-popup-last-shown', Date.now().toString());
      onClose?.();
    }, 300);
  };

  const handlePositiveAction = () => {
    // Mark popup as shown
    localStorage.setItem('ib360-popup-last-shown', Date.now().toString());
    // Navigate to contact page
    router.push('/Contact');
    handleClose();
  };

  const handleNegativeAction = () => {
    handleClose();
  };

  if (!shouldShow) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-[9998] transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Popup Container */}
      <div 
        className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-300 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="relative w-full max-w-[400px] bg-transparent rounded-2xl shadow-2xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#646464] hover:text-[#0f4761] transition-colors duration-200 z-10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Content */}
          <div className="p-8 text-center">
            {/* Icon/Logo */}
            <div className="w-16 h-16 mx-auto mb-6 bg-[#0f4761] rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="white"/>
              </svg>
            </div>

            {/* Main Message */}
            <h3 className="text-[#0f4761] text-xl font-semibold leading-tight mb-6">
              Desde la fibra hasta la IA:<br />
              un solo partner tecnológico.<br />
              <span className="text-[#ED962C]">¿Te lo contamos?</span>
            </h3>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handlePositiveAction}
                className="w-full h-12 bg-[#ED962C] text-white rounded-xl font-medium hover:bg-[#d4862a] transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <span className="text-lg">✅</span>
                Sí, quiero soluciones 360º
              </button>
              
              <button
                onClick={handleNegativeAction}
                className="w-full h-12 bg-transparent text-[#646464] rounded-xl font-medium hover:bg-[#f0f0f0] transition-colors duration-200 flex items-center justify-center gap-2 border border-[#e0e0e0]"
              >
                <span className="text-lg">❌</span>
                No, prefiero seguir recibiendo quejas
              </button>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="h-1 bg-gradient-to-r from-[#0f4761] to-[#ED962C]"></div>
        </div>
      </div>
    </>
  );
} 