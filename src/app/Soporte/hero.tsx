"use client";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full relative bg-white overflow-hidden text-left text-[#0f4761] font-sans">
      {/* Background Graphic */}
      <div className="absolute top-[-25rem] left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] flex items-center justify-center pointer-events-none select-none">
        <Image
          src="/heros/Group1.svg"
          alt=""
          width={1000}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-[12rem] pb-[5rem] px-4 gap-6">
        {/* Top Label */}
        <div className="flex items-center gap-2 text-sm text-[#0f4761]">
          <div className="w-1 h-1 bg-[#f0952a] rounded-full" />
          <span className="leading-snug">
              Aprende más sobre nuestros servicios de soporte
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-center md:text-[2.5rem] text-[2rem] max-md:text-[2.125rem] leading-[120%] max-w-[650px]">
        Soporte técnico 24/7: <br /> asistencia permanente con equipo propio.
        </h1>


        {/* CTA */}
        <div className="mt-6">
          <Link href="/Contact" className="bg-[#f0952a] text-white  py-3 px-6 rounded-full flex items-center gap-2 text-sm">
              Póngase en contacto con nosotros
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M10 7L15 12L10 17" stroke="#f0952a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

