"use client";

export function SLAMaintenance() {
  return (
    <div className="w-full bg-white text-[#0f4761] font-sans py-24">
      <div className="max-w-[1230px] mx-auto px-4">
        <h2 className="text-[2rem] font-medium mb-10">
          Contratos de Mantenimiento y Acuerdos SLA
        </h2>

        <div className="rounded-[15px] bg-[#f7f8f9] p-8 flex flex-col gap-6 text-[1.25rem] leading-[150%]">
          {/* Top paragraph with bar */}
          <div className="flex gap-5">
            <div className="w-[3px] h-[25px] bg-[#f0952a] rounded-full flex-shrink-0 mt-1" />
            <p>
              En IB360 ofrecemos contratos de mantenimiento personalizados, con acuerdos de nivel de servicio (SLA)
              adaptados a cada cliente, garantizando tiempos de respuesta rápidos y resoluciones eficientes ante
              cualquier incidencia técnica.
            </p>
          </div>

          {/* List */}
          <div className="pl-8">
            <p className="mb-3">Con nuestro servicio de mantenimiento, las empresas obtienen:</p>
            <ul className="list-disc list-inside space-y-2 text-[1rem] leading-[1.6]">
              <li>
                Atención prioritaria 24/7 en incidencias de sistemas tecnológicos, comunicaciones, redes y seguridad.
              </li>
              <li>
                Acceso preferente a técnicos certificados y especializados en instalaciones hoteleras, hospitalarias y
                corporativas.
              </li>
              <li>
                Respuesta garantizada según nivel de criticidad, reduciendo al mínimo los tiempos de inactividad.
              </li>
              <li>
                Monitorización proactiva de infraestructuras: redes GPON, WiFi, IPTV, CCTV, control de accesos, energía e IA.
              </li>
              <li>
                Tranquilidad operativa total gracias a un soporte técnico continuo y personalizado.
              </li>
            </ul>
          </div>

          {/* Bottom paragraph with bar */}
          <div className="flex gap-5">
            <div className="w-[3px] h-[25px] bg-[#f0952a] rounded-full flex-shrink-0 mt-1" />
            <p>
              IB360 garantiza la continuidad de los servicios tecnológicos de sus clientes, asegurando la máxima
              disponibilidad de sus infraestructuras críticas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
