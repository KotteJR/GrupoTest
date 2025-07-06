"use client";

import Image from "next/image";

export function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="8" fill="#e8e9ea"/>
          <circle cx="24" cy="24" r="8" stroke="#0f4761" strokeWidth="2" fill="none"/>
          <path d="M16 16L32 32M32 16L16 32" stroke="#0f4761" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="3" fill="#0f4761"/>
        </svg>
      ),
      title: "Soluciones 360º",
      description:
        "Desde la conectividad inicial hasta los sistemas audiovisuales, seguridad, accesos, energía, IA y soporte técnico.",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="8" fill="#e8e9ea"/>
          <path d="M16 18H32V30H16V18Z" stroke="#0f4761" strokeWidth="2" fill="none"/>
          <path d="M20 22H28M20 26H28" stroke="#0f4761" strokeWidth="2" strokeLinecap="round"/>
          <path d="M24 14V18M20 14L24 18L28 14" stroke="#0f4761" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Infraestructura propia",
      description:
        "Desarrollo de proyectos integrales bajo control directo, sin subcontratas externas no certificadas.",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="8" fill="#e8e9ea"/>
          <circle cx="24" cy="24" r="8" stroke="#0f4761" strokeWidth="2" fill="none"/>
          <path d="M24 16V24L28 28" stroke="#0f4761" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 20H36M32 24H36M32 28H36" stroke="#0f4761" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Soporte local 24/7",
      description:
        "Asistencia técnica continua, personal técnico propio en territorio, respuesta rápida.",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="8" fill="#e8e9ea"/>
          <rect x="16" y="20" width="6" height="12" rx="1" stroke="#0f4761" strokeWidth="2" fill="none"/>
          <rect x="21" y="16" width="6" height="16" rx="1" stroke="#0f4761" strokeWidth="2" fill="none"/>
          <rect x="26" y="22" width="6" height="10" rx="1" stroke="#0f4761" strokeWidth="2" fill="none"/>
          <path d="M14 34H34" stroke="#0f4761" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Integración multisectorial",
      description:
        "Especialización en hospitality, healthcare, educación y empresas corporativas.",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="8" fill="#e8e9ea"/>
          <path d="M24 16L28 20L24 24L20 20L24 16Z" stroke="#0f4761" strokeWidth="2" fill="none"/>
          <circle cx="18" cy="30" r="3" stroke="#0f4761" strokeWidth="2" fill="none"/>
          <circle cx="30" cy="30" r="3" stroke="#0f4761" strokeWidth="2" fill="none"/>
          <path d="M21 20L18 27M27 20L30 27" stroke="#0f4761" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Especialización en innovación",
      description:
        "Desarrollo constante de nuevas soluciones IA, automatización, optimización de procesos.",
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
          <path d="M16 30H32" stroke="#0f4761" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Experiencia demostrada",
      description:
        "Amplio portfolio de proyectos ejecutados en hoteles, hospitales y empresas de referencia.",
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
      title: "Equipo humano cercano",
      description:
        "Relación directa, acompañamiento continuo, personal cualificado con visión de largo plazo.",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="8" fill="#e8e9ea"/>
          <rect x="16" y="18" width="16" height="12" rx="2" stroke="#0f4761" strokeWidth="2" fill="none"/>
          <circle cx="20" cy="22" r="1" fill="#0f4761"/>
          <circle cx="24" cy="22" r="1" fill="#0f4761"/>
          <circle cx="28" cy="22" r="1" fill="#0f4761"/>
          <path d="M18 26H30M20 28H28" stroke="#0f4761" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Partners tecnológicos oficiales",
      description:
        "Colaboración certificada con líderes globales: Movistar, Ibernex, TP-Link, Grandstream, Alcatel, Televes, WISI Group, HIK Vision.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#0f4761] font-sans py-20">
      <div className="max-w-[1230px] mx-auto px-4">
        <div className="bg-[#f7f8f9] rounded-[20px] p-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col gap-5 items-start">
              <div className="rounded-[10px]">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-[1.25rem] font-medium">{feature.title}</h3>
                <p className="text-[1.125rem] text-[#0f4761]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
