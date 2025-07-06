"use client";
import Image from "next/image";

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
      <div className="relative z-10 flex flex-col items-center justify-center pt-[12rem] pb-[5rem] gap-6">

        {/* Main Heading */}
        <h1 className="text-center text-[2.75rem] leading-[120%] max-w-[700px]">
        Proyectos realizados:<br />Soluciones aplicadas en el mundo real.
        </h1>

        {/* Subtitle */}
        <p className="text-center text-[1.125rem] text-[#646464] max-w-[720px] leading-snug mt-2">
        Casos reales que demuestran cómo nuestras soluciones transforman hoteles, hospitales y empresas.
        </p>

      </div>
    </section>
  );
}
