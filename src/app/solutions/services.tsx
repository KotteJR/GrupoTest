"use client";
import Image from "next/image";

export function Services() {
  const CheckIcon = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.9905 19.5H19M18.9905 19.5C18.3678 20.1175 17.2393 19.9637 16.4479 19.9637C15.4765 19.9637 15.0087 20.1537 14.3154 20.847C13.7251 21.4374 12.9337 22.5 12 22.5C11.0663 22.5 10.2749 21.4374 9.68457 20.847C8.99128 20.1537 8.52349 19.9637 7.55206 19.9637C6.76068 19.9637 5.63218 20.1175 5.00949 19.5C4.38181 18.8776 4.53628 17.7444 4.53628 16.9479C4.53628 15.9414 4.31616 15.4786 3.59938 14.7618C2.53314 13.6956 2.00002 13.1624 2 12.5C2.00001 11.8375 2.53312 11.3044 3.59935 10.2382C4.2392 9.59832 4.53628 8.96428 4.53628 8.05206C4.53628 7.26065 4.38249 6.13214 5 5.50944C5.62243 4.88178 6.7556 5.03626 7.55208 5.03626C8.46427 5.03626 9.09832 4.7392 9.73815 4.09937C10.8044 3.03312 11.3375 2.5 12 2.5C12.6625 2.5 13.1956 3.03312 14.2618 4.09937C14.9015 4.73907 15.5355 5.03626 16.4479 5.03626C17.2393 5.03626 18.3679 4.88247 18.9906 5.5C19.6182 6.12243 19.4637 7.25559 19.4637 8.05206C19.4637 9.05858 19.6839 9.52137 20.4006 10.2382C21.4669 11.3044 22 11.8375 22 12.5C22 13.1624 21.4669 13.6956 20.4006 14.7618C19.6838 15.4786 19.4637 15.9414 19.4637 16.9479C19.4637 17.7444 19.6182 18.8776 18.9905 19.5Z" fill="#F0952A"/>
      <path d="M9 13.3929C9 13.3929 10.2 14.0447 10.8 15C10.8 15 12.6 11.25 15 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const services = [
    {
      title: "Redes de Telecomunicaciones",
      description: "Diseño, instalación y mantenimiento de infraestructuras de red para servicios críticos. Cableado estructurado, racks, switches y conectividad integral para empresas, hospitales y hoteles.",
      image: "/images/3.png",
      benefits: [
        "Diseño, instalación y mantenimiento de infraestructuras de red para servicios críticos.",
        "Redes de datos estructuradas (cableado, racks, switches).",
        "Interconexión de sistemas asistenciales, administrativos y de personal.",
        "Sistemas de interfonía y megafonía para avisos y emergencias.",
        "Acceso seguro a Internet para personal, residentes, huéspedes y visitantes.",
        "Redes protegidas para videovigilancia, paciente-enfermera y equipos médicos."
      ],
      stats: [
        { value: "+500", label: "Proyectos de cableado estructurado" },
        { value: "99.9%", label: "Uptime de red en instalaciones críticas" },
        { value: "10Gbps", label: "Velocidad de backbone implementada" },
      ],
      reversed: false,
    },
    {
      title: "GPON & Fibra Óptica",
      description: "Infraestructura de fibra óptica multiservicio de alto rendimiento para datos, IPTV, WiFi, telefonía, domótica y servicios futuros.",
      image: "/images/7.png",
      benefits: [
        "Backbone de 10 Gb escalable.",
        "Arquitectura centralizada eficiente.",
        "Alta estabilidad y velocidad.",
        "Mínima intervención técnica.",
        "Solución robusta para hospitality, healthcare y empresas.",
      ],
      stats: [
        { value: "35%", label: "Reducción en tiempo de respuesta técnica" },
        { value: "35%", label: "Camas hospitalarias conectadas" },
        { value: "IP Seguro", label: "Sistema protegido para datos y contenidos IPTV" },
      ],
      reversed: true,
    },
    {
      title: "WiFi Profesional",
      description: "Redes WiFi 6, WiFi 6E y WiFi 7 diseñadas para máxima capacidad, rendimiento y cobertura.",
      image: "/images/6.png",
      benefits: [
        "Cobertura total optimizada.",
        "Control inteligente de dispositivos.",
        "Balanceo automático de carga.",
        "Seguridad avanzada.",
        "Estabilidad máxima de conexión.",
      ],
      stats: [
        { value: "+10,000", label: "Dispositivos conectados simultáneamente" },
        { value: "99.9%", label: "Disponibilidad de red garantizada" },
        { value: "70%", label: "Mejora en velocidad y eficiencia de red respecto a WiFi 5" },
      ],
      reversed: false,
    },
    {
      title: "Telefonía IP & Comunicaciones",
      description: "Soluciones flexibles de comunicaciones IP para hoteles, hospitales y empresas.",
      image: "/images/8.png",
      benefits: [
        "Voz sobre IP (VoIP).",
        "Centralitas físicas o virtuales.",
        "Extensiones móviles.",
        "Integración con PMS y sistemas corporativos.",
        "Reducción de costes operativos.",
      ],
      stats: [
        { value: "1,500+", label: "Extensiones IP activas" },
        { value: "45%", label: "Reducción en costes" },
        { value: "100%", label: "Integración total con PMS, CRM" },
      ],
      reversed: true,
    },
    {
      title: "Cabeceras TV/SAT - TV Interactiva / IPTV Profesional",
      description: "Soluciones de televisión profesional, hospitality TV e IPTV interactivo.",
      image: "/images/9.png",
      benefits: [
        "Integración con PMS y servicios de habitación.",
        "Compatibilidad con plataformas de streaming.",
        "Cabeceras IP, TDT, SAT, coaxial o fibra.",
        "Audiovisuales para salas y auditorios.",
      ],
      stats: [
        { value: "10,000+", label: "Habitaciones con IPTV" },
        { value: "4K UHD", label: "Calidad premium" },
        { value: "100%", label: "Personalización total" },
      ],
      reversed: false,
    },
    {
      title: "CCTV & Seguridad IP",
      description: "Sistemas de videovigilancia profesional adaptados a cada entorno.",
      image: "/images/5.png",
      benefits: [
        "Grabación remota 24/7.",
        "Control centralizado.",
        "Integración completa en redes de datos.",
        "Visualización remota vía dispositivos móviles.",
        "Escalabilidad total.",
      ],
      stats: [
        { value: "99%", label: "Cobertura perimetral" },
        { value: "24/7", label: "Grabación activa" },
        { value: "360°", label: "Control de espacios" },
      ],
      reversed: true,
    },
    {
      title: "Control de Accesos",
      description: "Sistemas físicos y digitales de control de accesos integrados a la operativa del cliente.",
      image: "/images/1.png",
      benefits: [
        "Cerraduras electrónicas.",
        "Integración PMS.",
        "Identificación biométrica (facial, huella).",
        "Control remoto de permisos.",
        "Máxima seguridad de usuarios.",
      ],
      stats: [
        { value: "98%", label: "Reducción de accesos no autorizados" },
        { value: "3,500+", label: "Puntos de acceso gestionados" },
        { value: "100%", label: "Integración con sistemas de gestión y seguridad existentes" },
      ],
      reversed: false,
    },
    {
      title: "Instalaciones Eléctricas & Energía",
      description: "Diseño, instalación y mantenimiento de sistemas eléctricos integrados de baja tensión.",
      image: "/images/2.png",
      benefits: [
        "Proyectos certificados de baja tensión.",
        "Autoconsumo fotovoltaico.",
        "Iluminación técnica y decorativa.",
        "Protección contra sobretensiones.",
        "Cuadros eléctricos personalizados.",
      ],
      stats: [
        { value: "25%", label: "Ahorro energético promedio tras modernización" },
        { value: "150+", label: "Proyectos eléctricos integrales ejecutados" },
        { value: "24/7", label: "Monitorización energética y mantenimiento preventivo" },
      ],
      reversed: true,
    },
    {
      title: "Equipos control paciente - Hospitales, Residencias, Centros de día",
      description: "Sistemas paciente-enfermera con tecnología avanzada que agilizan la asistencia, garantizan máxima seguridad y mejoran la experiencia tanto para residentes como para profesionales.",
      image: "/images/hospitals.jpeg",
      benefits: [
        "Mejora la eficiencia en la atención al paciente.",
        "Garantiza la seguridad tanto para residentes como para profesionales.",
        "Optimiza la comunicación y la gestión de las tareas de enfermería.",
        "Facilita la integración con otros sistemas hospitalarios.",
        "Aumenta la satisfacción del paciente y del personal."
      ],
      stats: [
        { value: "30%", label: "Reducción en tiempos de respuesta de enfermería" },
        { value: "100%", label: "Trazabilidad de avisos y alarmas" },
        { value: "+50", label: "Centros equipados con nuestra tecnología" },
      ],
      reversed: false,
    },
    {
      title: "Soporte Técnico 360º",
      description: "Cobertura técnica integral durante toda la vida del proyecto.",
      image: "/images/4.png",
      benefits: [
        "Instalación profesional.",
        "Mantenimiento preventivo y correctivo.",
        "Monitorización remota.",
        "SLA garantizados.",
        "Intervención rápida.",
      ],
      stats: [
        { value: "24/7/365", label: "Asistencia técnica continua todo el año" },
        { value: "15 min", label: "Tiempo medio de respuesta en incidencias críticas" },
        { value: "+100", label: "Instalaciones con soporte técnico activo" },
      ],
      reversed: true,
    }
  ];

  return (
    <section className="w-full bg-white text-[#0f4761] font-sans">
      <div className="max-w-[1230px] mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex items-center justify-between gap-16 py-12
              ${service.reversed ? 'flex-row-reverse' : 'flex-row'}
              max-[900px]:flex-col max-[900px]:py-8 max-[900px]:gap-4`}
          >
            {/* Image */}
            <div className="flex-shrink-0 w-[450px] h-[450px] max-[900px]:w-full max-[900px]:h-[220px]">
              <Image 
                src={service.image} 
                alt={service.title} 
                width={450} 
                height={220} 
                className="rounded-[15px] object-cover w-full h-full" 
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6 max-w-[32rem] w-full max-[900px]:max-w-none">
              <h2 className="mt-2 text-lg md:text-2xl font-medium leading-[120%]">{service.title}</h2>
              <p className="text-md leading-[130%] text-[#646464] max-[900px]:text-left">{service.description}</p>
              
              {/* Benefits */}
          <div className="flex flex-col gap-4">
                <span className="text-lg leading-[130%]">Beneficios</span>
            <div className="relative flex flex-col gap-5">
              <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-[#f0952a]/30"></div>
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="relative flex items-center gap-3">
                <CheckIcon />
                      <span className="text-md">{benefit}</span>
              </div>
                  ))}
            </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4 max-[900px]:pt-2">
                {service.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-2 text-left">
                    <div className="text-[1.5rem] font-semibold leading-[130%] text-[#f0952a] max-[900px]:text-[1.5rem]">{stat.value}</div>
                    <div className="text-sm leading-[130%] text-[#0f4761] max-[900px]:text-[0.813rem]">{stat.label}</div>
              </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
