"use client";

import { 
  FaCrosshairs, 
  FaBuilding, 
  FaClock, 
  FaChartBar, 
  FaLightbulb, 
  FaTrophy, 
  FaUsers, 
  FaHandshake 
} from 'react-icons/fa';

// Icon components with React Icons
const SolutionsIcon = () => (
  <div className="w-12 h-12 bg-[#e8e9ea] rounded-lg flex items-center justify-center">
    <FaCrosshairs className="w-6 h-6 text-[#0f4761]" />
  </div>
);

const InfrastructureIcon = () => (
  <div className="w-12 h-12 bg-[#e8e9ea] rounded-lg flex items-center justify-center">
    <FaBuilding className="w-6 h-6 text-[#0f4761]" />
  </div>
);

const SupportIcon = () => (
  <div className="w-12 h-12 bg-[#e8e9ea] rounded-lg flex items-center justify-center">
    <FaClock className="w-6 h-6 text-[#0f4761]" />
  </div>
);

const IntegrationIcon = () => (
  <div className="w-12 h-12 bg-[#e8e9ea] rounded-lg flex items-center justify-center">
    <FaChartBar className="w-6 h-6 text-[#0f4761]" />
  </div>
);

const InnovationIcon = () => (
  <div className="w-12 h-12 bg-[#e8e9ea] rounded-lg flex items-center justify-center">
    <FaLightbulb className="w-6 h-6 text-[#0f4761]" />
  </div>
);

const ExperienceIcon = () => (
  <div className="w-12 h-12 bg-[#e8e9ea] rounded-lg flex items-center justify-center">
    <FaTrophy className="w-6 h-6 text-[#0f4761]" />
  </div>
);

const TeamIcon = () => (
  <div className="w-12 h-12 bg-[#e8e9ea] rounded-lg flex items-center justify-center">
    <FaUsers className="w-6 h-6 text-[#0f4761]" />
  </div>
);

const PartnersIcon = () => (
  <div className="w-12 h-12 bg-[#e8e9ea] rounded-lg flex items-center justify-center">
    <FaHandshake className="w-6 h-6 text-[#0f4761]" />
  </div>
);

export function FeaturesSection() {
  const features = [
    {
      icon: <SolutionsIcon />,
      title: "Soluciones 360º",
      description:
        "Desde la conectividad inicial hasta los sistemas audiovisuales, seguridad, accesos, energía, IA y soporte técnico.",
    },
    {
      icon: <InfrastructureIcon />,
      title: "Infraestructura propia",
      description:
        "Desarrollo de proyectos integrales bajo control directo, sin subcontratas externas no certificadas.",
    },
    {
      icon: <SupportIcon />,
      title: "Soporte local 24/7",
      description:
        "Asistencia técnica continua, personal técnico propio en territorio, respuesta rápida.",
    },
    {
      icon: <IntegrationIcon />,
      title: "Integración multisectorial",
      description:
        "Especialización en hospitality, healthcare, educación y empresas corporativas.",
    },
    {
      icon: <InnovationIcon />,
      title: "Especialización en innovación",
      description:
        "Desarrollo constante de nuevas soluciones IA, automatización, optimización de procesos.",
    },
    {
      icon: <ExperienceIcon />,
      title: "Experiencia demostrada",
      description:
        "Amplio portfolio de proyectos ejecutados en hoteles, hospitales y empresas de referencia.",
    },
    {
      icon: <TeamIcon />,
      title: "Equipo humano cercano",
      description:
        "Relación directa, acompañamiento continuo, personal cualificado con visión de largo plazo.",
    },
    {
      icon: <PartnersIcon />,
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
              {feature.icon}
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
