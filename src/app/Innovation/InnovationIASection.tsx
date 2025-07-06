'use client';

export function InnovationIASection() {
  return (
    <div className="w-full bg-white text-[#0f4761] font-sans py-10">
      <div className="max-w-[1230px] mx-auto px-4">
        {/* Intro Paragraph */}
        <div className="rounded-[15px] bg-[#f7f8f9] p-8 flex gap-5 mb-18">
          <div className="w-[3px] h-[25px] bg-[#f0952a] rounded-full flex-shrink-0 mt-1"></div>
          <p className="text-[1.25rem] leading-[150%] text-[#0f4761]">
            En IB360 entendemos la innovación como el motor de la transformación tecnológica real. Nuestro equipo trabaja en el desarrollo constante de soluciones personalizadas basadas en IA y tecnologías avanzadas, pensadas para anticipar las necesidades operativas de hoteles, hospitales y organizaciones corporativas.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="flex flex-col gap-5">
          <p className="text-[#646464] text-[1.125rem] leading-[130%]">Benefits</p>
          <h2 className="text-[2.375rem] font-medium leading-[120%] text-[#0f4761] max-w-[650px] mb-10">
            Lo Que Hacemos Por Tu Negocio con IA
          </h2>
          
          {/* Benefits Grid */}
          <div className="rounded-[20px] bg-[#f7f8f9] p-8">
            <div className="grid grid-cols-6 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                      <rect width="48" height="48" rx="8" fill="#e8e9ea"/>
                      <path d="M18 20L24 14L30 20M24 14V34" stroke="#0f4761" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  text: 'Personalización de la experiencia de huésped y paciente',
                },
                {
                  icon: (
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                      <rect width="48" height="48" rx="8" fill="#e8e9ea"/>
                      <circle cx="18" cy="18" r="4" stroke="#0f4761" strokeWidth="2"/>
                      <circle cx="30" cy="18" r="4" stroke="#0f4761" strokeWidth="2"/>
                      <circle cx="24" cy="30" r="4" stroke="#0f4761" strokeWidth="2"/>
                      <path d="M22 22L26 22M18 26L24 26M24 26L30 22" stroke="#0f4761" strokeWidth="2"/>
                    </svg>
                  ),
                  text: 'Automatización de procesos operativos, administrativos y técnicos',
                },
                {
                  icon: (
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                      <rect width="48" height="48" rx="8" fill="#e8e9ea"/>
                      <path d="M16 24L20 20L24 24L28 16L32 20" stroke="#0f4761" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <circle cx="20" cy="20" r="2" fill="#0f4761"/>
                      <circle cx="24" cy="24" r="2" fill="#0f4761"/>
                      <circle cx="28" cy="16" r="2" fill="#0f4761"/>
                      <circle cx="32" cy="20" r="2" fill="#0f4761"/>
                    </svg>
                  ),
                  text: 'Mantenimiento predictivo basado en inteligencia de datos',
                },
                {
                  icon: (
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                      <rect width="48" height="48" rx="8" fill="#e8e9ea"/>
                      <path d="M24 16L28 20L24 24L20 20L24 16Z" stroke="#0f4761" strokeWidth="2" fill="none"/>
                      <path d="M16 24L20 28L24 24L28 28L32 24" stroke="#0f4761" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  ),
                  text: 'Optimización energética mediante algoritmos de IA',
                },
                {
                  icon: (
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                      <rect width="48" height="48" rx="8" fill="#e8e9ea"/>
                      <rect x="16" y="16" width="16" height="12" rx="2" stroke="#0f4761" strokeWidth="2" fill="none"/>
                      <path d="M20 20V24M24 18V26M28 22V24" stroke="#0f4761" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M16 30H32" stroke="#0f4761" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ),
                  text: 'Análisis avanzado para toma de decisiones estratégicas',
                },
                {
                  icon: (
                    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                      <rect width="48" height="48" rx="8" fill="#e8e9ea"/>
                      <circle cx="20" cy="20" r="4" stroke="#0f4761" strokeWidth="2" fill="none"/>
                      <circle cx="28" cy="28" r="4" stroke="#0f4761" strokeWidth="2" fill="none"/>
                      <path d="M22 22L26 26" stroke="#0f4761" strokeWidth="2"/>
                      <path d="M16 24V30H22" stroke="#0f4761" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M26 18H32V24" stroke="#0f4761" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  ),
                  text: 'Desarrollo propio de soluciones a medida por sector',
                },
              ].map((benefit, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-6">
                  {benefit.icon}
                  <p className="text-[0.875rem] leading-[140%] text-[#0f4761] max-w-[140px]">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
