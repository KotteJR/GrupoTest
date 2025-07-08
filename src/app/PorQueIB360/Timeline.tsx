"use client";

const timelineItems = [
  {
    year: "2003",
    title: "Fundación en Palma de Mallorca",
    description:
      "Inicio de nuestra aventura tecnológica en Baleares, con un enfoque en soluciones de infraestructura para el sector hotelero.",
    side: "left",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#f0952a"/>
        <path d="M12 18h16l-2-4H14l-2 4zm0 0v10a2 2 0 002 2h12a2 2 0 002-2V18M16 14V8a2 2 0 012-2h2a2 2 0 012 2v6" stroke="white" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    year: "2008",
    title: "Expansión de servicios de telecomunicaciones",
    description:
      "Comenzamos a ofrecer soluciones de redes WiFi, IPTV y telefonía adaptadas a grandes instalaciones.",
    side: "right",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#f0952a"/>
        <path d="M14 16v8M20 12v16M26 16v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="20" r="2" fill="white"/>
        <circle cx="20" cy="20" r="2" fill="white"/>
        <circle cx="26" cy="20" r="2" fill="white"/>
        <path d="M16 20h2M22 20h2" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    year: "2012",
    title: "Primer contrato hospitalario",
    description:
      "Diversificamos nuestros servicios tecnológicos con la firma de nuestro primer contrato con un centro hospitalario.",
    side: "left",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#f0952a"/>
        <path d="M20 12v16M12 20h16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <rect x="14" y="14" width="12" height="12" rx="2" stroke="white" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    year: "2016",
    title: "Centro de operaciones 24/7 y equipo de soporte propio",
    description:
      "Establecimos un sistema de soporte técnico permanente con técnicos propios, garantizando asistencia continua.",
    side: "right",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#f0952a"/>
        <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M20 12v4M20 24v4M28 20h-4M16 20h-4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="2" fill="white"/>
      </svg>
    ),
  },
  {
    year: "2019",
    title: "Soluciones de energía e inteligencia artificial",
    description:
      "Incorporamos soluciones energéticas inteligentes y sistemas de IA para la optimización operativa.",
    side: "left",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#f0952a"/>
        <path d="M16 12l4 8-4 8M24 12l-4 8 4 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="16" r="1.5" fill="white"/>
        <circle cx="20" cy="20" r="1.5" fill="white"/>
        <circle cx="20" cy="24" r="1.5" fill="white"/>
      </svg>
    ),
  },
  {
    year: "2023",
    title: "Dos décadas de innovación tecnológica",
    description:
      "Celebramos 20 años transformando la tecnología en valor real para nuestros clientes.",
    side: "right",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#f0952a"/>
        <path d="M20 8l2.5 7.5h7.5l-6 4.5 2.5 7.5L20 23l-6.5 4.5L16 20l-6-4.5h7.5L20 8z" fill="white"/>
      </svg>
    ),
  },
  {
    year: "2025",
    title: "Enfoque en sostenibilidad y expansión internacional",
    description:
      "Nuestra misión actual: impulsar la eficiencia energética y expandir nuestro modelo de soporte a nuevos mercados.",
    side: "left",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="#f0952a"/>
        <circle cx="20" cy="20" r="9" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M14 20c0-6 3-8 6-8s6 2 6 8-3 8-6 8-6-2-6-8z" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M12 20h16M20 11v18" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export function TimelineSection() {
  return (
    <section className="w-full bg-white text-[#0f4761] font-sans py-14">
      <div className="max-w-[1230px] mx-auto px-4">
        <div className="mb-12">
          <p className="text-[#646464] text-[1.125rem] mb-2">Nuestra Historia</p>
          <h2 className="text-[2.375rem]  leading-[120%]">
            Nuestra Historia: Más de dos décadas de crecimiento e innovación tecnológica
          </h2>
        </div>

        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute top-0 left-1/2 w-[2px]  bg-[#f0952a] h-full -translate-x-1/2 z-0" />

          {/* Timeline entries */}
          {timelineItems.map((item, idx) => (
            <div key={idx} className="relative z-10 mb-16">
              <div
                className={`${
                  item.side === "left"
                    ? "mr-[calc(50%+120px)]"
                    : "ml-[calc(50%+120px)]"
                }`}
              >
                <div className="bg-[#f7f8f9] p-6 rounded-[15px]">
                  <p className="text-[#f0952a] font-semibold text-[1.125rem] mb-2">{item.year}</p>
                  <h3 className="text-[1.25rem] font-medium mb-2">{item.title}</h3>
                  <p className="text-[1.125rem] text-[#0f4761] leading-[150%]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Icon on center line */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
