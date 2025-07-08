'use client';

import Image from 'next/image';

export function InnovationForm() {
  return (
    <section className="w-full py-24 relative">
      {/* SVG Background */}
      <div className="absolute top-[-25rem] left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] flex items-center justify-center pointer-events-none select-none z-[-1]">
        <Image
          src="/heros/Group1.svg"
          alt=""
          width={1000}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="max-w-[1230px] mx-auto px-4 flex items-stretch justify-between gap-20 mt-40">
        {/* Left Content - Title and Description */}
        <div className="flex flex-col justify-start max-w-[500px]">
          <h2 className="text-[2.5rem] text-[#0f4761]  leading-snug max-w-[800px] mb-4">
            Contacta con IB360
          </h2>

          <p className="text-lg text-[#646464]">
            Si deseas más información sobre nuestras soluciones, solicitar una demo o realizar cualquier consulta, ponte en contacto con nuestro equipo. <br />
            <br />
            Te responderemos en el menor plazo posible.
          </p>
        </div>

        {/* Right Content - Form */}
        <div className="flex flex-col justify-center max-w-[600px]">
          {/* Form */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-2.5">
              <div className="flex-1">
                <label className="block text-sm  text-[#0f4761] mb-1">
                  Nombre completo *
                </label>
                <input 
                  type="text" 
                  placeholder="Nombre completo *" 
                  required
                  className="w-full h-[45px] bg-[#f3f3f3] rounded-[10px] px-4 text-sm text-[#646464] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm  text-[#0f4761] mb-1">
                  Empresa *
                </label>
                <input 
                  type="text" 
                  placeholder="Empresa *" 
                  required
                  className="w-full h-[45px] bg-[#f3f3f3] rounded-[10px] px-4 text-sm text-[#646464] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex gap-2.5">
              <div className="flex-1">
                <label className="block text-sm  text-[#0f4761] mb-1">
                  Cargo (opcional)
                </label>
                <input 
                  type="text" 
                  placeholder="Cargo (opcional)" 
                  className="w-full h-[45px] bg-[#f3f3f3] rounded-[10px] px-4 text-sm text-[#646464] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm  text-[#0f4761] mb-1">
                  Email *
                </label>
                <input 
                  type="email" 
                  placeholder="Email *" 
                  required
                  className="w-full h-[45px] bg-[#f3f3f3] rounded-[10px] px-4 text-sm text-[#646464] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm  text-[#0f4761] mb-1">
                Teléfono *
              </label>
              <input 
                type="tel" 
                placeholder="Teléfono *" 
                required
                className="w-full h-[45px] bg-[#f3f3f3] rounded-[10px] px-4 text-sm text-[#646464] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
              />
            </div>

            <div className="flex gap-2.5">
              <div className="relative flex-1">
                <label className="block text-sm  text-[#0f4761] mb-1">
                  Sector *
                </label>
                <select 
                  required
                  className="w-full h-[45px] bg-[#f3f3f3] rounded-[10px] px-4 pr-10 text-sm text-[#646464] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent appearance-none"
                >
                  <option value="">Sector *</option>
                  <option value="hoteles">Hoteles</option>
                  <option value="hospitales">Hospitales</option>
                  <option value="corporativo">Corporativo</option>
                  <option value="otros">Otros</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 9L1.5 4.5h9z" fill="#646464"/>
                  </svg>
                </div>
              </div>

              <div className="relative flex-1">
                <label className="block text-sm  text-[#0f4761] mb-1">
                  Motivo de contacto *
                </label>
                <select 
                  required
                  className="w-full h-[45px] bg-[#f3f3f3] rounded-[10px] px-4 pr-10 text-sm text-[#646464] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent appearance-none"
                >
                  <option value="">Motivo de contacto *</option>
                  <option value="solicitar-informacion">Solicitar información</option>
                  <option value="solicitar-demo">Solicitar demo</option>
                  <option value="asistencia-tecnica">Asistencia técnica</option>
                  <option value="otro">Otro</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 9L1.5 4.5h9z" fill="#646464"/>
                  </svg>
                </div>
              </div>
            </div>

            <button className="w-full h-[45px] bg-[#0f4761] text-white rounded-[10px] text-sm  hover:bg-[#0d3c52] transition-colors duration-200 mt-2">
              Enviar solicitud
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
