"use client";

import Image from "next/image";

export function FeaturesSection() {
  const features = [
    {
      icon: "/frame-99.svg",
      title: "Soluciones 360º",
      description:
        "Desde la conectividad inicial hasta los sistemas audiovisuales, seguridad, accesos, energía, IA y soporte técnico.",
    },
    {
      icon: "/frame-991.svg",
      title: "Infraestructura propia",
      description:
        "Desarrollo de proyectos integrales bajo control directo, sin subcontratas externas no certificadas.",
    },
    {
      icon: "/frame-992.svg",
      title: "Soporte local 24/7",
      description:
        "Asistencia técnica continua, personal técnico propio en territorio, respuesta rápida.",
    },
    {
      icon: "/frame-993.svg",
      title: "Integración multisectorial",
      description:
        "Especialización en hospitality, healthcare, educación y empresas corporativas.",
    },
    {
      icon: "/frame-994.svg",
      title: "Especialización en innovación",
      description:
        "Desarrollo constante de nuevas soluciones IA, automatización, optimización de procesos.",
    },
    {
      icon: "/frame-995.svg",
      title: "Experiencia demostrada",
      description:
        "Amplio portfolio de proyectos ejecutados en hoteles, hospitales y empresas de referencia.",
    },
    {
      icon: "/frame-996.svg",
      title: "Equipo humano cercano",
      description:
        "Relación directa, acompañamiento continuo, personal cualificado con visión de largo plazo.",
    },
    {
      icon: "/frame-997.svg",
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
              <Image
                src={feature.icon}
                alt=""
                width={50}
                height={50}
                className="rounded-[10px]"
              />
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
