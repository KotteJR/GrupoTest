'use client';

import Image from 'next/image';
import { useCallback } from 'react';

export function HeroSection() {
  const scrollToSuccessCases = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='casosDeXito']");
    if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section
      className="relative w-full text-white font-sans overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/35 z-10" />
      
      {/* Main Content Container */}
      <div className="relative z-20 max-w-[1230px] mx-auto px-4 h-full flex flex-col justify-center">
        <div className="flex justify-between items-end">
          {/* Left Content */}
          <div className="flex flex-col gap-2 max-w-[1000px]">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-[6px] h-[6px] bg-[#f0952a] rounded-full" />
              Conectividad sin fallos para hoteles, hospitales y empresas.
            </div>

            <h1 className="text-4xl font-semibold leading-tight">
              Tecnología que cumple. Equipo que responde.
            </h1>

            <p className="text-lg text-white/90">
              Redes GPON, WiFi 6/7, IA y soluciones integrales para digitalizar hoteles, hospitales y empresas.
            </p>

            <div className="flex gap-4">
              <button className="bg-white text-[#f0952a] font-medium py-3 px-6 rounded-full flex items-center gap-2 text-sm mt-6 mb-6">
                Solicita información
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#f0952a]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M10 7L15 12L10 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-col gap-4 text-xl">
              <div>
                <p className="font-semibold">1500+</p>
                <p className="text-base font-light">Hoteles digitalizados</p>
              </div>
              <div>
                <p className="font-semibold">99.9%</p>
                <p className="text-base font-light">De disponibilidad garantizada</p>
              </div>
              <div>
                <p className="font-semibold">4.9</p>
                <p className="text-base font-light">Promedio de satisfacción</p>
              </div>
            </div>

            {/* Logos - In Left Column */}
            <div className="flex flex-col gap-4 mt-8">
              <p className="text-sm text-white/80">CONFÍAN EN NOSOTROS</p>
              <div className="w-[500px] overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'}}>
                <div className="flex gap-6 items-center animate-scroll">
                  {/* First set of logos */}
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <Image
                      key={num}
                      src={`/logo/${num}.png`}
                      alt={`logo-${num}`}
                      width={94}
                      height={30}
                      className="flex-shrink-0"
                    />
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <Image
                      key={`duplicate-${num}`}
                      src={`/logo/${num}.png`}
                      alt={`logo-${num}`}
                      width={94}
                      height={30}
                      className="flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ficha Técnica - Aligned to bottom of left content */}
          <div className="self-end">
            <div className="bg-white/10 backdrop-blur-sm border border-[#285472] rounded-xl px-3 pt-3 pb-2">
              <div className="flex items-center gap-2 text-white font-medium mb-3 text-sm">
                Descargar ficha técnica (PDF)
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              
              {/* Ficha Técnica PNG */}
              <Image
                src="/images/pdf.png"
                alt="Ficha técnica"
                width={240}
                height={120}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div
        onClick={scrollToSuccessCases}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-8 h-12 border border-white/60 bg-white/20 rounded-[20px] flex items-center justify-center backdrop-blur-md z-20 cursor-pointer"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
