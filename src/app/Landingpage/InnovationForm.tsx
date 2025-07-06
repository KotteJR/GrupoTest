'use client';

import Image from 'next/image';

export function InnovationForm() {
  return (
    <section className="w-full py-24">
      <div className="max-w-[1230px] mx-auto px-4 flex items-stretch justify-between gap-20">
        {/* Left Image */}
        <div className="flex-shrink-0 w-[520px] flex-1 bg-[#f3f3f3] border-[6px] border-[#f8f8f8] rounded-[20px] overflow-hidden">
          <Image
            src="/images/ai.png"
            alt="AI Illustration"
            width={520}
            height={520}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center max-w-[600px]">
          <div className="flex flex-col gap-3">
            <div className="inline-block bg-[#fdf4ea] text-[#f0952a] text-sm px-4 py-2 rounded-full w-fit">
              INNOVACIÓN Y IA
            </div>

            <h2 className="text-[#0f4761] text-[1.75rem] font-semibold leading-snug">
              En IB360 apostamos por soluciones inteligentes que anticipan, aprenden y evolucionan.
            </h2>

            <p className="text-md text-[#646464] mb-2">
              ¿Quieres saber más? Déjanos tus datos y te avisaremos antes del lanzamiento.
            </p>

            {/* Form */}
            <div className="flex flex-col gap-2.5">
              <div className="flex gap-2.5">
                <input 
                  type="text" 
                  placeholder="Nombre" 
                  className="flex-1 h-[45px] bg-[#f3f3f3] rounded-[10px] px-4 text-sm text-[#646464] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
                />
                <input 
                  type="text" 
                  placeholder="Empresa" 
                  className="flex-1 h-[45px] bg-[#f3f3f3] rounded-[10px] px-4 text-sm text-[#646464] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
                />
              </div>
              
              <input 
                type="email" 
                placeholder="Correo electrónico" 
                className="w-full h-[45px] bg-[#f3f3f3] rounded-[10px] px-4 text-sm text-[#646464] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
              />

              <button className="w-full h-[45px] bg-[#0f4761] text-white rounded-[10px] text-sm font-medium hover:bg-[#0d3c52] transition-colors duration-200">
                Enviar
              </button>
            </div>
          </div>

          {/* AI Pitch */}
          <div className="mt-6">
            <p className="text-[#646464] text-md leading-[1.6]">
              La nueva plataforma de IB360 integra inteligencia artificial para optimizar redes, predecir incidencias y mejorar la experiencia de usuario en entornos hoteleros, hospitalarios y corporativos.
            </p>
            <p className="text-[#646464] text-md leading-[1.6] mt-3">
              Sé parte del futuro de la conectividad inteligente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
