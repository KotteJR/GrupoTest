'use client';

import Image from 'next/image';

export function DemoCTA() {
  return (
    <section className="w-full py-10">
      <div className="max-w-[1230px] mx-auto px-4">
        <div className="bg-[#0f4761] rounded-[20px] px-12 py-20 relative overflow-hidden">
          {/* SVG Background */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[90%] flex items-end justify-center">
            <Image
              src="/heros/Footer.svg"
              alt=""
              width={600}
              height={240}
              className="w-full h-full object-contain opacity-60"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center text-white gap-6">
            <h2 className="text-[2.25rem] font-medium leading-snug">
              El futuro no espera. <br />
              Digitaliza tu experiencia ahora.
            </h2>

            <p className="text-[1.125rem] text-white/70 max-w-[600px] leading-snug">
              Soluciones inmediatas, soporte local y tecnología que funciona.
              Tu transformación digital empieza hoy.
            </p>

            <div className="flex gap-4 mt-2">
              <button className="bg-white text-[#f0952a] font-medium py-3 px-6 rounded-full flex items-center gap-2 text-sm">
                I want a demo of IB360
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#f0952a]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M10 7L15 12L10 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
