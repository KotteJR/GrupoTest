'use client';

import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative w-full bg-[#0f4761] text-white font-sans overflow-hidden">
      {/* SVG Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[70%] flex items-start justify-center">
        <Image
          src="/heros/Footer.svg"
          alt=""
          width={1000}
          height={400}
          className="w-full h-full object-contain opacity-60 rotate-180"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1230px] mx-auto px-4 py-24">
        {/* Top CTA Button */}
        <div className="flex justify-center pb-8">
          <button className="bg-white text-[#f0952a] font-medium py-3 px-6 rounded-full flex items-center gap-2 text-sm">
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
          <h2 className="text-[2rem] font-medium mb-4 leading-tight">
            Conectividad sin fallos para<br />
            hoteles, hospitales y empresas.
          </h2>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Logo and Company Info */}
            <div className="space-y-3">
              <Image src="/logo/grupoib360white.png" alt="IB360 Logo" width={80} height={40} />
              <div className="text-sm text-white/80 space-y-1">
                <p>IB360 S.L. · CIF: B12345678</p>
                <p>Carrer de la Innovació 12, 07010 Palma, Illes Balears, España</p>
                <p>Teléfono: +34 971 123 456 · Email: <a href="mailto:info@ib360.tech" className="underline">info@ib360.tech</a></p>
              </div>
            </div>

            {/* Company Logos */}
            <div className="space-y-3">
              <p className="text-white/60 text-xs uppercase tracking-wide">CONFÍAN EN NOSOTROS</p>
              <div className="flex flex-wrap gap-6">
                {[0, 1, 2, 3].map((i) => (
                  <Image
                    key={i}
                    src={`/company-logo${i ? i : ''}.svg`}
                    alt={`Logo ${i}`}
                    width={95}
                    height={30}
                    className="object-contain"
                  />
                ))}
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs text-white/60 pt-4">
              GrupoIB360 © 2025 · Diseñado por Studio Sphere
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-8 ml-auto">
            {/* Links */}
            <div>
              <h3 className="text-white font-medium mb-3">Links</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
                <span>Soluciones</span>
                <span>Sectores</span>
                <span>Proyectos</span>
                <span>Contacto</span>
                <span>Descargas</span>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-white font-medium mb-3">Legal Links</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
                <span>Aviso Legal</span>
                <span>Política de privacidad</span>
                <span>Cookies</span>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-white font-medium mb-3">Socials</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
                <span>LinkedIn</span>
                <span>Facebook</span>
                <span>X (Formally Twitter)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
