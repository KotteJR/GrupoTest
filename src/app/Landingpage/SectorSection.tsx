'use client';

import Image from 'next/image';

export function SectorSection() {
  const sectors = [
    {
      title: 'Hoteles',
      icon: '/icons/hotels.svg',
      image: '/images/hotels.png',
      description:
        'Redes rápidas y seguras para una experiencia de huésped impecable, desde el check-in hasta el streaming.',
    },
    {
      title: 'Hospitales y residencias asistidas',
      icon: '/icons/hospitals.svg',
      image: '/images/hospitals.jpeg',
      description:
        'Conectividad crítica para sistemas médicos, monitoreo en tiempo real y gestión eficiente.',
    },
    {
      title: 'Educación',
      icon: '/icons/education.svg',
      image: '/images/education.png',
      description:
        'Infraestructura digital que impulsa aulas conectadas, plataformas virtuales y aprendizaje sin interrupciones.',
    },
    {
      title: 'Corporativo',
      icon: '/icons/corporate.svg',
      image: '/images/corporate.png',
      description:
        'Soluciones escalables y seguras para oficinas inteligentes, colaboración remota y productividad máxima.',
    },
    {
      title: 'Viviendas de alto nivel y propiedades gestionadas',
      icon: '/icons/vivienda.svg',
      image: '/images/corporate.png',
      description:
        'Soluciones escalables y seguras para oficinas inteligentes, colaboración remota y productividad máxima.',
    },
  ];

  return (
    <section className="w-full py-10">
      <div className="max-w-[1230px] mx-auto px-4 flex flex-col items-start gap-12">
        <div className="flex flex-col items-start gap-4">
          <p className="text-base text-[#646464]">Sectores que transformamos</p>
          <h2 className="md:text-[2.5rem] text-[2rem] max-md:text-[2.125rem] text-[#0f4761] leading-snug max-w-[700px]">
            Soluciones digitales diseñadas para las necesidades de cada industria.
          </h2>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="flex gap-8 max-[768px]:gap-4 pb-6 w-max">
            {sectors.map(({ title, icon, image, description }) => (
              <div
                key={title}
                className="flex-shrink-0 w-[420px] max-[768px]:w-[280px] flex flex-col gap-6 max-[768px]:gap-4"
              >
                <div className="w-[420px] max-[768px]:w-[280px] h-[420px] max-[768px]:h-[280px]">
                  <Image
                    src={image}
                    alt={title}
                    width={1536}
                    height={1536}
                    className="w-full h-full object-cover rounded-[15px]"
                  />
                </div>
                <div className="flex flex-col gap-5 max-[768px]:gap-3">
                  <div className="flex flex-col gap-4 max-[768px]:gap-3">
                    <Image src={icon} alt={`${title} icon`} width={32} height={32} />
                    <h3 className="text-xl max-[768px]:text-lg text-[#0f4761]">{title}</h3>
                  </div>
                  <p className="text-[#646464] text-[1.125rem] max-[768px]:text-base leading-[130%]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
