'use client';

import Image from 'next/image';

export function TeamSection() {
  const team = [
    {
      name: 'Carmen López',
      role: 'Directora Comercial',
      email: 'carmen@ib360.tech',
      image: '/images/hospitals.png',
    },
    {
      name: 'Miguel Torres',
      role: 'Ingeniero de Proyectos',
      email: 'miguel@ib360.tech',
      image: '/images/corporate.png',
    },
    {
      name: 'Vladimir Ruiz',
      role: 'Soporte Técnico',
      email: 'vladimir@ib360.tech',
      image: '/images/hotels.png',
    },
    {
      name: 'Oficina IB360',
      role: 'Atención General',
      email: 'info@ib360.tech',
      image: '/images/corporate.png',
    },
  ];

  return (
    <section className="w-full py-24">
      <div className="max-w-[1230px] mx-auto px-4 flex flex-col gap-12 items-start">
        <div className="flex flex-col gap-4">
          <p className="text-base text-[#646464]">Conoce al equipo</p>
          <h2 className="text-[2.5rem] text-[#0f4761] font-medium leading-snug max-w-[800px]">
            Personas reales, respuestas rápidas.<br />
            Estamos aquí para ayudarte.
          </h2>
        </div>

        {/* Cards */}
        <div className="w-full overflow-x-auto">
          <div className="flex gap-6 pb-6 w-max">
            {team.map(({ name, role, email, image }) => (
              <div key={name} className="bg-[#f7f8f9] rounded-[20px] p-1 flex flex-col items-start w-[320px]">
                <Image
                  src={image}
                  alt={name}
                  width={354}
                  height={354}
                  className="rounded-[15px] w-full object-cover aspect-square mb-4"
                />
                <div className="flex flex-col gap-1 w-full px-2 pb-2">
                  <div className="text-[#0f4761] text-base font-medium">{name}</div>
                  <div className="text-[#646464] text-sm">{role}</div>
                  <div className="text-[#646464] text-sm">
                    Email: <a href={`mailto:${email}`} className="">{email}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
