'use client';

export function InfoCTA() {
  return (
    <div className="w-full bg-white text-[#0f4761] font-sans py-24">
      <div className="max-w-[1230px] mx-auto px-4">
        {/* Intro Paragraph */}
        <div className="rounded-[15px] bg-[#f7f8f9] p-8 flex gap-5">
          <div className="w-[3px] h-[25px] bg-[#f0952a] rounded-full flex-shrink-0 mt-1"></div>
          <p className="text-[1.125rem] leading-[150%] text-[#0f4761]">
          Creemos en una tecnología útil, fiable y sostenible. <br />
          Nuestra metodología combina análisis previo, planificación personalizada, instalación profesional y soporte técnico continuado. <br />
          Cada cliente recibe soluciones adaptadas, escalables y preparadas para los desafíos tecnológicos de su sector.
          </p>
        </div>
        </div>
    </div>

  );
}
