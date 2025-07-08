'use client';

export function Info() {
  return (
    <div className="w-full bg-white text-[#0f4761] font-sans py-4">
      <div className="max-w-[1230px] mx-auto px-4">
        {/* Intro Paragraph */}
        <div className="rounded-[15px] bg-[#f7f8f9] p-8 flex gap-5">
          <div className="w-[3px] h-[25px] bg-[#f0952a] rounded-full flex-shrink-0 mt-1"></div>
          <p className="text-[1.25rem] leading-[150%] text-[#0f4761]">
          Acompañamos a nuestros clientes durante toda la vida útil de sus instalaciones
          ofreciendo un soporte técnico ágil, profesional y continuado los 365 días del año. Nuestro compromiso es ofrecer tranquilidad 
          operativa con respuesta rápida ante cualquier incidencia. </p>
        </div>
        </div>
    </div>

  );
}
