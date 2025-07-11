'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative w-full bg-[#0f4761] text-white font-sans overflow-hidden">
      {/* SVG Background - same logic as hero, but upside down and flush with top */}
      <div className="absolute top-[-25rem] left-1/2 -translate-x-1/2 w-[1200px] h-[1100px] flex items-center justify-center pointer-events-none select-none">
        <Image
          src="/heros/Footer.svg"
          alt=""
          width={1200}
          height={400}
          className="object-contain opacity-60 rotate-180"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1230px] mx-auto px-4 py-24">
        {/* Top CTA Button */}
        <div className="flex justify-center pb-8">
          <button className="bg-white text-[#f0952a]  py-3 px-6 rounded-full flex items-center gap-2 text-sm">
            Descargar ficha técnica (PDF)
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#f0952a]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-[2rem]  mb-4 leading-tight">
            Conectividad sin fallos para<br />
            hoteles, hospitales y empresas.
          </h2>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
          {/* Left Column */}
          <div className="space-y-6 flex flex-col items-start order-2 md:order-1">
            {/* Logo and Company Info */}
            <div className="space-y-3">
              <Image src="/logo/grupoib360white.png" alt="IB360 Logo" width={80} height={40} />
              <div className="text-sm text-white/80 space-y-1">
                <p>IB360 S.L. · CIF: B12345678</p>
                <p>Carrer de la Innovació 12, 07010 Palma, Illes Balears, España</p>
                <p>Teléfono: +34 971 20 15 20 · Email: <a href="mailto:info@ib360.tech" className="underline">info@ib360.tech</a></p>
              </div>
            </div>

            {/* Company Logos */}
            <div className="flex flex-col gap-4 mt-8">
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

            {/* Copyright */}
            <p className="text-xs text-white/60 pt-4">
              GrupoIB360 © 2025 · Diseñado por Respectfully Disruptive
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col md:items-end order-1 md:order-2">
            <div className="space-y-8">
              {/* Links */}
              <div className="text-left">
                <h3 className="text-white mb-3">Links</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
                  <Link href="/solutions" className="hover:text-white transition-colors">Soluciones</Link>
                  <Link href="/PorQueIB360" className="hover:text-white transition-colors">Sectores</Link>
                  <Link href="/Projects" className="hover:text-white transition-colors">Proyectos</Link>
                  <Link href="/Contact" className="hover:text-white transition-colors">Contacto</Link>
                  <Link href="/Innovation" className="hover:text-white transition-colors">Innovación</Link>
                </div>
              </div>

              {/* Legal Links */}
              <div className="text-left mb-10">
                <h3 className="text-white mb-3">Legal Links</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
                  <Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
                  <Link href="/politica-privacidad" className="hover:text-white transition-colors">Política de privacidad</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
