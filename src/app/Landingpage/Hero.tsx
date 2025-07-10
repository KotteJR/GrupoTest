'use client';

import Image from 'next/image';
import Link from 'next/link';
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
        <div className="flex justify-between items-end max-md:block">
          {/* Left Content */}
          <div className="flex flex-col gap-2 max-w-[1000px]">
            <h1 className="md:text-[2.75rem] text-[2rem] leading-tight mb-1">
              Tecnología que cumple. <br /> Equipo que responde.
            </h1>
            <p className="text-lg text-white/90 md:max-w-[700px]">
            Soluciones tecnológicas integrales para hoteles, hospitales, residencias asistidas y empresas: redes GPON, WiFi 6/7, sistemas control paciente-enfermera, IA y digitalización completa. Conectividad, inteligencia y control en un solo partner.            </p>
            <div className="flex gap-4">
              <Link href="/Contact" className="bg-white text-[#f0952a]  py-3 px-6 rounded-full flex items-center gap-2 text-sm mt-6 mb-2 md:mb-7">
                Solicita información
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#f0952a]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M10 7L15 12L10 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
            {/* Stats */}
            <div
              className="flex-row gap-8 text-xl
                max-md:flex-row max-md:items-center max-md:gap-2
                max-md:backdrop-blur-sm max-md:rounded-2xl max-md:p-4 max-md:my-4 max-md:w-full max-md:w-full max-md:mx-auto hidden md:flex"
            >
              <div className="max-md:text-center max-md:w-full">
                <p className="font-semibold">1500+</p>
                <p className="text-base font-light">Hoteles digitalizados</p>
              </div>
              <div className="max-md:text-center max-md:w-full">
                <p className="font-semibold">99.9%</p>
                <p className="text-base font-light">De disponibilidad garantizada</p>
              </div>
              <div className="max-md:text-center max-md:w-full">
                <p className="font-semibold">4.9</p>
                <p className="text-base font-light">Promedio de satisfacción</p>
              </div>
            </div>
            {/* Logos - In Left Column */}
            <div className="flex flex-col gap-4 mt-4 md:mt-12">
              <p className="text-sm text-white/80">CONFÍAN EN NOSOTROS</p>
              <div className="w-[400px] max-sm:w-full overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'}}>
                <div className="flex gap-6 items-center animate-scroll">
                  {/* First set of logos */}
                  {[1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14].map((num) => (
                    <Image
                      key={`first-${num}`}
                      src={`/logo/${num}.png`}
                      alt={`logo-${num}`}
                      style={{filter: 'brightness(0) saturate(100%) invert(1)', minWidth: '94px'}}
                      width={94}
                      height={30}
                      className="flex-shrink-0"
                    />
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {[1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14].map((num) => (
                    <Image
                      key={`duplicate-${num}`}
                      src={`/logo/${num}.png`}
                      alt={`logo-${num}`}
                      style={{filter: 'brightness(0) saturate(100%) invert(1)', minWidth: '94px'}}
                      width={94}
                      height={30}
                      className="flex-shrink-0"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ficha Técnica - Hide on mobile */}
          <div className="self-end hidden md:block">
            <Link href="/Contact" className="bg-white/10 backdrop-blur-sm border border-[#285472] rounded-xl px-3 pt-3 pb-2 block">
              <div className="flex items-center gap-2 text-white  mb-3 text-sm">
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
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Arrow - always at bottom */}
      <div
        onClick={scrollToSuccessCases}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-8 h-12 border border-white/60 bg-white/20 rounded-[20px] items-center justify-center backdrop-blur-md z-20 cursor-pointer hidden md:flex"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
