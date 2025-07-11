'use client';

export function LocationMap() {
  return (
    <section className="w-full py-8 mb-16">
      <div className="max-w-[1230px] mx-auto px-4 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 text-left">
          <h2 className="md:text-[2.5rem] text-[2rem] max-md:text-[2.125rem] text-[#0f4761] leading-snug">
          Visíta GrupoIB360
          </h2>
          <p className="text-lg text-[#646464] max-w-[600px]">
            Visítanos en nuestra sede física en Palma, Illes Balears. <br />
            Estamos aquí para atender a nuestros clientes corporativos locales.
          </p>
        </div>

        {/* Map and Info Container */}
        <div className="flex items-stretch justify-between gap-6 max-[768px]:flex-col">
          {/* Google Maps Embed */}
          <div className="flex-1 bg-[#f3f3f3] border-[6px] border-[#f8f8f8] rounded-[20px] overflow-hidden max-[768px]:aspect-square max-[768px]:h-auto">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.62024,39.62903,2.63024,39.63903&layer=cyclosm&marker=39.63403,2.62524"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IB360 Location - Carrer de la Innovació 12, Palma, Illes Balears"
            />
          </div>

          {/* Location Info */}
          <div className="flex flex-col gap-6 max-w-[400px] max-[768px]:max-w-none max-[768px]:grid max-[768px]:grid-cols-1 max-[768px]:gap-6 sm:max-[768px]:grid-cols-2">
            <div className="bg-[#f7f8f9] rounded-[20px] p-6">
              <h3 className="text-[#0f4761] text-xl  mb-4">
                Información de contacto
              </h3>
              
              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="text-[#0f4761]  mb-1">Dirección</h4>
                  <p className="text-[#646464] text-sm">
                    Carrer de la Innovació 12<br />
                    07010 Palma, Illes Balears<br />
                    España
                  </p>
                </div>


                <div>
                  <h4 className="text-[#0f4761]  mb-1">Email</h4>
                  <p className="text-[#646464] text-sm">
                    <a href="mailto:info@ib360.tech" className="hover:text-[#0f4761] transition-colors">
                      info@ib360.tech
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="text-[#0f4761]  mb-1">Horario de atención</h4>
                  <p className="text-[#646464] text-sm">
                    Lunes a Viernes: 9:00 - 18:00<br />
                    Sábados: 9:00 - 14:00<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#0f4761] rounded-[20px] p-6 text-white">
              <h4 className=" mb-2">¿Prefieres visitarnos?</h4>
              <p className="text-sm text-white/80 mb-4">
                Agenda una cita previa para asegurar la disponibilidad de nuestro equipo.
              </p>
              <button className="w-full bg-white text-[#0f4761] rounded-[10px] py-2 px-4 text-sm  hover:bg-gray-100 transition-colors">
                Agendar cita
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 