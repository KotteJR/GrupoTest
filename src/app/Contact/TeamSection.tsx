'use client';

export function TeamSection() {
  const team = [
    {
      name: 'Carmen',
      role: 'Directora Comercial',
      email: 'carmen@ib360.tech',
      phone: '+34 636 14 71 07',
    },
    {
      name: 'Miguel',
      role: 'Especialista en Tecnología y Postventa',
      email: 'miguel@ib360.tech',
      phone: '+34 633 22 54 81',
    },
    {
      name: 'Vladimir',
      role: 'Desarrollo de Negocio & Smart Solutions',
      email: 'vladimir@ib360.tech',
      phone: '+34 646 03 88 08',
    },
  ];

  return (
    <section className="w-full mb-12">
      <div className="max-w-[1230px] mx-auto px-4 flex flex-col gap-12 items-start">
        <div className="flex flex-col gap-4">
          <p className="text-base text-[#646464]">Conoce al equipo</p>
          <h2 className="text-[2.5rem] max-md:text-[2.125rem] text-[#0f4761] leading-snug max-w-[800px]">
            Personas reales, respuestas rápidas.<br />
            Estamos aquí para ayudarte.
          </h2>
        </div>

        {/* Cards */}
        <div className="w-full">
          <div className="grid grid-cols-3 gap-6">
            {team.map(({ name, role, email, phone }) => (
              <div key={name} className="bg-[#f7f8f9] rounded-[20px] p-5 flex flex-col items-start">

                <div className="flex flex-col gap-1 w-full px-2 pb-2">
                  <div className="text-[#0f4761] text-base text-lg ">{name}</div>
                  <div className="text-[#646464] text-md">{role}</div>
                  <div className="text-[#646464] text-md">{phone}</div>
                  <div className="text-[#646464] text-md">
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
