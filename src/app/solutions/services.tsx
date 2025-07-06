"use client";
import Image from "next/image";

export function Services() {
  const CheckIcon = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.9905 19.5H19H18.9905ZM18.9905 19.5C18.3678 20.1175 17.2393 19.9637 16.4479 19.9637C15.4765 19.9637 15.0087 20.1537 14.3154 20.847C13.7251 21.4374 12.9337 22.5 12 22.5C11.0663 22.5 10.2749 21.4374 9.68457 20.847C8.99128 20.1537 8.52349 19.9637 7.55206 19.9637C6.76068 19.9637 5.63218 20.1175 5.00949 19.5C4.38181 18.8776 4.53628 17.7444 4.53628 16.9479C4.53628 15.9414 4.31616 15.4786 3.59938 14.7618C2.53314 13.6956 2.00002 13.1624 2 12.5C2.00001 11.8375 2.53312 11.3044 3.59935 10.2382C4.2392 9.59832 4.53628 8.96428 4.53628 8.05206C4.53628 7.26065 4.38249 6.13214 5 5.50944C5.62243 4.88178 6.7556 5.03626 7.55208 5.03626C8.46427 5.03626 9.09832 4.7392 9.73815 4.09937C10.8044 3.03312 11.3375 2.5 12 2.5C12.6625 2.5 13.1956 3.03312 14.2618 4.09937C14.9015 4.73907 15.5355 5.03626 16.4479 5.03626C17.2393 5.03626 18.3679 4.88247 18.9906 5.5C19.6182 6.12243 19.4637 7.25559 19.4637 8.05206C19.4637 9.05858 19.6839 9.52137 20.4006 10.2382C21.4669 11.3044 22 11.8375 22 12.5C22 13.1624 21.4669 13.6956 20.4006 14.7618C19.6838 15.4786 19.4637 15.9414 19.4637 16.9479C19.4637 17.7444 19.6182 18.8776 18.9905 19.5Z" fill="#F0952A"/>
      <path d="M18.9905 19.5H19M18.9905 19.5C18.3678 20.1175 17.2393 19.9637 16.4479 19.9637C15.4765 19.9637 15.0087 20.1537 14.3154 20.847C13.7251 21.4374 12.9337 22.5 12 22.5C11.0663 22.5 10.2749 21.4374 9.68457 20.847C8.99128 20.1537 8.52349 19.9637 7.55206 19.9637C6.76068 19.9637 5.63218 20.1175 5.00949 19.5C4.38181 18.8776 4.53628 17.7444 4.53628 16.9479C4.53628 15.9414 4.31616 15.4786 3.59938 14.7618C2.53314 13.6956 2.00002 13.1624 2 12.5C2.00001 11.8375 2.53312 11.3044 3.59935 10.2382C4.2392 9.59832 4.53628 8.96428 4.53628 8.05206C4.53628 7.26065 4.38249 6.13214 5 5.50944C5.62243 4.88178 6.7556 5.03626 7.55208 5.03626C8.46427 5.03626 9.09832 4.7392 9.73815 4.09937C10.8044 3.03312 11.3375 2.5 12 2.5C12.6625 2.5 13.1956 3.03312 14.2618 4.09937C14.9015 4.73907 15.5355 5.03626 16.4479 5.03626C17.2393 5.03626 18.3679 4.88247 18.9906 5.5C19.6182 6.12243 19.4637 7.25559 19.4637 8.05206C19.4637 9.05858 19.6839 9.52137 20.4006 10.2382C21.4669 11.3044 22 11.8375 22 12.5C22 13.1624 21.4669 13.6956 20.4006 14.7618C19.6838 15.4786 19.4637 15.9414 19.4637 16.9479C19.4637 17.7444 19.6182 18.8776 18.9905 19.5Z" stroke="#F0952A" strokeWidth="1.5"/>
      <path d="M9 13.3929C9 13.3929 10.2 14.0447 10.8 15C10.8 15 12.6 11.25 15 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section className="w-full bg-white text-[#0f4761] font-sans">

      {/* 1. GPON & Fibra Óptica */}
      <div className="flex flex-row items-center justify-center gap-16 py-20 px-10 max-w-7xl mx-auto">
        <div className="flex-shrink-0 w-[450px] h-[450px]">
          <Image src="/images/7.png" alt="GPON" width={450} height={450} className="rounded-[15px] object-cover w-full h-full" />
        </div>
        <div className="flex flex-col gap-6 h-[550px] justify-center max-w-[32rem]">
          <h2 className="text-[1.5rem] font-medium leading-[120%]">GPON & Fibra Óptica</h2>
          <p className="text-[1.25rem] leading-[130%] text-[#646464]">
            Infraestructura de fibra óptica multiservicio de alto rendimiento para datos, IPTV, WiFi, telefonía, domótica y servicios futuros.
          </p>
          
          <div className="flex flex-col gap-4">
            <span className="text-[1.25rem] font-medium leading-[130%]">Beneficios</span>
            <div className="relative flex flex-col gap-5">
              {/* Connecting line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-[#f0952a]/30"></div>
              
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Backbone de 10 Gb escalable.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Arquitectura centralizada eficiente.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Alta estabilidad y velocidad.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Mínima intervención técnica.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Solución robusta para hospitality, healthcare y empresas.</span>
              </div>
          </div>
          </div>

          <div className="flex gap-5 pt-4">
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">35%</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Reducción en tiempo de respuesta técnica
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">35%</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Camas hospitalarias conectadas
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">IP Seguro</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Sistema protegido para datos y contenidos IPTV
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. WiFi Profesional */}
      <div className="flex flex-row-reverse items-center justify-center gap-16 py-20 px-10 max-w-7xl mx-auto">
                <div className="flex-shrink-0 w-[450px] h-[450px]">
          <Image src="/images/6.png" alt="WiFi Profesional" width={450} height={450} className="rounded-[15px] object-cover w-full h-full" />
        </div>
        <div className="flex flex-col gap-6 h-[550px] justify-center max-w-[32rem]">
          <h2 className="text-[1.5rem] font-medium leading-[120%]">WiFi Profesional</h2>
          <p className="text-[1.25rem] leading-[130%] text-[#646464]">
            Redes WiFi 6, WiFi 6E y WiFi 7 diseñadas para máxima capacidad, rendimiento y cobertura.
          </p>
          
          <div className="flex flex-col gap-4">
            <span className="text-[1.25rem] font-medium leading-[130%]">Beneficios</span>
            <div className="relative flex flex-col gap-5">
              {/* Connecting line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-[#f0952a]/30"></div>
              
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Cobertura total optimizada.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Control inteligente de dispositivos.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Balanceo automático de carga.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Seguridad avanzada.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Estabilidad máxima de conexión.</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pt-4">
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">+10,000</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Dispositivos conectados simultáneamente
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">99.9%</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Disponibilidad de red garantizada
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">70%</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Mejora en velocidad y eficiencia de red respecto a WiFi 5
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Telefonía IP */}
      <div className="flex flex-row items-center justify-center gap-16 py-20 px-10 max-w-7xl mx-auto">
                <div className="flex-shrink-0 w-[450px] h-[450px]">
          <Image src="/images/8.png" alt="Telefonía IP" width={450} height={450} className="rounded-[15px] object-cover w-full h-full" />
        </div>
        <div className="flex flex-col gap-6 h-[550px] justify-center max-w-[32rem]">
          <h2 className="text-[1.5rem] font-medium leading-[120%]">Telefonía IP & Comunicaciones</h2>
          <p className="text-[1.25rem] leading-[130%] text-[#646464]">
            Soluciones flexibles de comunicaciones IP para hoteles, hospitales y empresas.
          </p>
          
          <div className="flex flex-col gap-4">
            <span className="text-[1.25rem] font-medium leading-[130%]">Beneficios</span>
            <div className="relative flex flex-col gap-5">
              {/* Connecting line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-[#f0952a]/30"></div>
              
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Voz sobre IP (VoIP).</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Centralitas físicas o virtuales.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Extensiones móviles.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Integración con PMS y sistemas corporativos.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Reducción de costes operativos.</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pt-4">
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">1,500+</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Extensiones IP activas
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">45%</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Reducción en costes
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">100%</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Integración total con PMS, CRM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. IPTV */}
      <div className="flex flex-row-reverse items-center justify-center gap-16 py-20 px-10 max-w-7xl mx-auto">
                <div className="flex-shrink-0 w-[450px] h-[450px]">
          <Image src="/images/9.png" alt="IPTV" width={450} height={450} className="rounded-[15px] object-cover w-full h-full" />
        </div>
        <div className="flex flex-col gap-6 h-[550px] justify-center max-w-[32rem]">
          <h2 className="text-[1.5rem] font-medium leading-[120%]">TV Interactiva / IPTV Profesional</h2>
          <p className="text-[1.25rem] leading-[130%] text-[#646464]">
            Soluciones de televisión profesional, hospitality TV e IPTV interactivo.
          </p>
          
          <div className="flex flex-col gap-4">
            <span className="text-[1.25rem] font-medium leading-[130%]">Beneficios</span>
            <div className="relative flex flex-col gap-5">
              {/* Connecting line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-[#f0952a]/30"></div>
              
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Integración con PMS y servicios de habitación.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Compatibilidad con streaming.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Cabeceras IP, TDT, SAT, coaxial o fibra.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Audiovisuales para salas y auditorios.</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pt-4">
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">10,000+</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Habitaciones con IPTV
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">4K UHD</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Calidad premium
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">100%</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Personalización total
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Control de Accesos */}
      <div className="flex flex-row items-center justify-center gap-16 py-20 px-10 max-w-7xl mx-auto">
                <div className="flex-shrink-0 w-[450px] h-[450px]">
          <Image src="/images/1.png" alt="Control de Accesos" width={450} height={450} className="rounded-[15px] object-cover w-full h-full" />
        </div>
        <div className="flex flex-col gap-6 h-[550px] justify-center max-w-[32rem]">
          <h2 className="text-[1.5rem] font-medium leading-[120%]">Control de Accesos</h2>
          <p className="text-[1.25rem] leading-[130%] text-[#646464]">
            Sistemas físicos y digitales de control de accesos integrados a la operativa del cliente.
          </p>
          
          <div className="flex flex-col gap-4">
            <span className="text-[1.25rem] font-medium leading-[130%]">Beneficios</span>
            <div className="relative flex flex-col gap-5">
              {/* Connecting line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-[#f0952a]/30"></div>
              
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Cerraduras electrónicas.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Integración PMS.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Identificación biométrica (facial, huella).</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Control remoto de permisos.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Máxima seguridad de usuarios.</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pt-4">
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">98%</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Reducción de accesos no autorizados
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">3,500+</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Puntos de acceso gestionados
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">100%</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Integración con sistemas de gestión y seguridad existentes
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. CCTV */}
      <div className="flex flex-row-reverse items-center justify-center gap-16 py-20 px-10 max-w-7xl mx-auto">
                <div className="flex-shrink-0 w-[450px] h-[450px]">
          <Image src="/images/5.png" alt="CCTV" width={450} height={450} className="rounded-[15px] object-cover w-full h-full" />
        </div>
        <div className="flex flex-col gap-6 h-[550px] justify-center max-w-[32rem]">
          <h2 className="text-[1.5rem] font-medium leading-[120%]">CCTV Profesional & Videovigilancia</h2>
          <p className="text-[1.25rem] leading-[130%] text-[#646464]">
            Monitoreo de seguridad IP, grabación inteligente y control en tiempo real.
          </p>
          
          <div className="flex flex-col gap-4">
            <span className="text-[1.25rem] font-medium leading-[130%]">Beneficios</span>
            <div className="relative flex flex-col gap-5">
              {/* Connecting line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-[#f0952a]/30"></div>
              
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Grabación continua o por detección.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Cámaras HD y 4K.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Almacenamiento en red (NVR).</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Integración con sistemas de seguridad.</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pt-4">
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">99%</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Cobertura perimetral
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">24/7</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Grabación activa
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">360°</div>
              <div className="text-[0.938rem] leading-[130%] text-[#f0952a] max-w-[9.75rem]">
                Control de espacios
              </div>
            </div>
          </div>
        </div>
      </div>

      

              {/* 7. Señalética Digital */}
      <div className="flex flex-row items-center justify-center gap-16 py-20 px-10 max-w-7xl mx-auto">
                <div className="flex-shrink-0 w-[450px] h-[450px]">
          <Image src="/images/3.png" alt="Señalética Digital" width={450} height={450} className="rounded-[15px] object-cover w-full h-full" />
        </div>
        <div className="flex flex-col gap-6 h-[550px] justify-center max-w-[32rem]">
          <h2 className="text-[1.5rem] font-medium leading-[120%]">Señalética Digital & Cartelería Dinámica</h2>
          <p className="text-[1.25rem] leading-[130%] text-[#646464]">
            Comunicación visual profesional para hospitality, healthcare y empresas.
          </p>
          
          <div className="flex flex-col gap-4">
            <span className="text-[1.25rem] font-medium leading-[130%]">Beneficios</span>
            <div className="relative flex flex-col gap-5">
              {/* Connecting line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-[#f0952a]/30"></div>
              
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Pantallas informativas interactivas.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Gestión remota de contenidos (CMS).</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Señalización personalizada.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Actualización instantánea.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Integración multimedia.</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pt-4">
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">2,000+</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Pantallas instaladas en entornos corporativos y públicos
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">100%</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Actualización remota y en tiempo real del contenido
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">80%</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Incremento en la visibilidad de comunicaciones internas
              </div>
            </div>
          </div>
        </div>
      </div>

                 {/* 8. Instalaciones Eléctricas */}
       <div className="flex flex-row-reverse items-center justify-center gap-16 py-20 px-10 max-w-7xl mx-auto">
                <div className="flex-shrink-0 w-[450px] h-[450px]">
          <Image src="/images/2.png" alt="Instalaciones Eléctricas" width={450} height={450} className="rounded-[15px] object-cover w-full h-full" />
        </div>
        <div className="flex flex-col gap-6 h-[550px] justify-center max-w-[32rem]">
          <h2 className="text-[1.5rem] font-medium leading-[120%]">Instalaciones Eléctricas & Energía</h2>
          <p className="text-[1.25rem] leading-[130%] text-[#646464]">
            Diseño, instalación y mantenimiento de sistemas eléctricos integrados.
          </p>
          
          <div className="flex flex-col gap-4">
            <span className="text-[1.25rem] font-medium leading-[130%]">Beneficios</span>
            <div className="relative flex flex-col gap-5">
              {/* Connecting line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-[#f0952a]/30"></div>
              
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Proyectos certificados de baja tensión.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Autoconsumo fotovoltaico.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Iluminación técnica y decorativa.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Protección contra sobretensiones.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Cuadros eléctricos personalizados.</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pt-4">
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">25%</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Ahorro energético promedio tras modernización
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">150+</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Proyectos eléctricos integrales ejecutados
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">24/7</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Monitorización energética y mantenimiento preventivo
              </div>
            </div>
          </div>
        </div>
      </div>

              {/* 9. Soporte Técnico 360° */}
        <div className="flex flex-row items-center justify-center gap-16 py-20 px-10 max-w-7xl mx-auto">
                <div className="flex-shrink-0 w-[450px] h-[450px]">
          <Image src="/images/4.png" alt="Soporte Técnico 360°" width={450} height={450} className="rounded-[15px] object-cover w-full h-full" />
        </div>
        <div className="flex flex-col gap-6 h-[550px] justify-center max-w-[32rem]">
          <h2 className="text-[1.5rem] font-medium leading-[120%]">Soporte Técnico 360°</h2>
          <p className="text-[1.25rem] leading-[130%] text-[#646464]">
            Cobertura técnica integral durante toda la vida útil del proyecto.
          </p>
          
          <div className="flex flex-col gap-4">
            <span className="text-[1.25rem] font-medium leading-[130%]">Beneficios</span>
            <div className="relative flex flex-col gap-5">
              {/* Connecting line */}
              <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-[#f0952a]/30"></div>
              
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Instalación profesional.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Mantenimiento preventivo y correctivo.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Monitorización remota.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">SLA garantizado.</span>
              </div>
              <div className="relative flex items-center gap-3">
                <CheckIcon />
                <span className="text-[1.125rem]">Intervención rápida.</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pt-4">
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">24/7/365</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Asistencia técnica continua todo el año
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">15 min</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Tiempo medio de respuesta en incidencias críticas
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[2rem] font-semibold leading-[130%] text-[#f0952a]">+100</div>
              <div className="text-[0.938rem] leading-[130%] text-[#0f4761] max-w-[9.75rem]">
                Instalaciones con soporte técnico activo
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
