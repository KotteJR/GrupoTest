"use client";

import Image from "next/image";

export function ProjectsSection() {
  const CheckIcon = () => (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.9905 19.5H19H18.9905ZM18.9905 19.5C18.3678 20.1175 17.2393 19.9637 16.4479 19.9637C15.4765 19.9637 15.0087 20.1537 14.3154 20.847C13.7251 21.4374 12.9337 22.5 12 22.5C11.0663 22.5 10.2749 21.4374 9.68457 20.847C8.99128 20.1537 8.52349 19.9637 7.55206 19.9637C6.76068 19.9637 5.63218 20.1175 5.00949 19.5C4.38181 18.8776 4.53628 17.7444 4.53628 16.9479C4.53628 15.9414 4.31616 15.4786 3.59938 14.7618C2.53314 13.6956 2.00002 13.1624 2 12.5C2.00001 11.8375 2.53312 11.3044 3.59935 10.2382C4.2392 9.59832 4.53628 8.96428 4.53628 8.05206C4.53628 7.26065 4.38249 6.13214 5 5.50944C5.62243 4.88178 6.7556 5.03626 7.55208 5.03626C8.46427 5.03626 9.09832 4.7392 9.73815 4.09937C10.8044 3.03312 11.3375 2.5 12 2.5C12.6625 2.5 13.1956 3.03312 14.2618 4.09937C14.9015 4.73907 15.5355 5.03626 16.4479 5.03626C17.2393 5.03626 18.3679 4.88247 18.9906 5.5C19.6182 6.12243 19.4637 7.25559 19.4637 8.05206C19.4637 9.05858 19.6839 9.52137 20.4006 10.2382C21.4669 11.3044 22 11.8375 22 12.5C22 13.1624 21.4669 13.6956 20.4006 14.7618C19.6838 15.4786 19.4637 15.9414 19.4637 16.9479C19.4637 17.7444 19.6182 18.8776 18.9905 19.5Z" fill="#0f4761"/>
      <path d="M18.9905 19.5H19M18.9905 19.5C18.3678 20.1175 17.2393 19.9637 16.4479 19.9637C15.4765 19.9637 15.0087 20.1537 14.3154 20.847C13.7251 21.4374 12.9337 22.5 12 22.5C11.0663 22.5 10.2749 21.4374 9.68457 20.847C8.99128 20.1537 8.52349 19.9637 7.55206 19.9637C6.76068 19.9637 5.63218 20.1175 5.00949 19.5C4.38181 18.8776 4.53628 17.7444 4.53628 16.9479C4.53628 15.9414 4.31616 15.4786 3.59938 14.7618C2.53314 13.6956 2.00002 13.1624 2 12.5C2.00001 11.8375 2.53312 11.3044 3.59935 10.2382C4.2392 9.59832 4.53628 8.96428 4.53628 8.05206C4.53628 7.26065 4.38249 6.13214 5 5.50944C5.62243 4.88178 6.7556 5.03626 7.55208 5.03626C8.46427 5.03626 9.09832 4.7392 9.73815 4.09937C10.8044 3.03312 11.3375 2.5 12 2.5C12.6625 2.5 13.1956 3.03312 14.2618 4.09937C14.9015 4.73907 15.5355 5.03626 16.4479 5.03626C17.2393 5.03626 18.3679 4.88247 18.9906 5.5C19.6182 6.12243 19.4637 7.25559 19.4637 8.05206C19.4637 9.05858 19.6839 9.52137 20.4006 10.2382C21.4669 11.3044 22 11.8375 22 12.5C22 13.1624 21.4669 13.6956 20.4006 14.7618C19.6838 15.4786 19.4637 15.9414 19.4637 16.9479C19.4637 17.7444 19.6182 18.8776 18.9905 19.5Z" stroke="#0f4761" strokeWidth="1.5"/>
      <path d="M9 13.3929C9 13.3929 10.2 14.0447 10.8 15C10.8 15 12.6 11.25 15 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const projects = [
    {
      number: "01",
      title: "Marriott Son Antem",
      image: "/images/mariott.png",
      kpis: [
        "Red GPON",
        "Cabeceras IPTV",
        "Renovación TV hospitality",
      ],
    },
    {
      number: "02",
      title: "Grupo Juaneda",
      image: "/images/juneada.png",
      kpis: [
        "Red WiFi 6",
        "Seguridad",
        "Control paciente-enfermera",
      ],
    },
    {
      number: "03",
      title: "THB Hotels",
      image: "/images/thbb.png",
      kpis: [
        "GPON",
        "IPTV",
        "CCTV",
        "WiFi 6",
        "Telefonía IP",
      ],
    },
    {
      number: "04",
      title: "Roc Hotels",
      image: "/images/rocc.png",
      kpis: [
        "Renovación de infraestructuras:",
        "WiFi",
        "CCTV",
      ],
    },
    {
      number: "05",
      title: "IB Salut Son Espases",
      image: "/images/salut.png",
      kpis: [
        "Seguridad IP",
        "Control de accesos",
        "Soporte técnico",
      ],
    },
    {
      number: "06",
      title: "Rafa Nadal Academy",
      image: "/images/nadal.png",
      kpis: [
        "Cabecera digital",
        "IPTV",
      ],
    },
  ];

  return (
    <div className="w-full bg-white text-[#0f4761] font-sans py-14">
      <div className="max-w-[1230px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {projects.map((project, idx) => (
          <div key={idx} className="flex flex-col max-[768px]:mb-8">
            {/* Number badge */}
            <div className="h-[3.25rem] w-[3.25rem] bg-[#fdf4ea] rounded-[15px] flex items-center justify-center text-[#f0952a] text-sm font-semibold">
              {project.number}
            </div>
            
            {/* Project Image */}
            <div className="w-full h-[300px] bg-[#white] rounded-[15px] mt-6 overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-contain grayscale"
              />
            </div>
            
            {/* Fixed height title section */}
            <div className="h-[40px] flex items-start mt-6">
              <h3 className="text-2xl font-medium leading-tight">{project.title}</h3>
            </div>
            
            {/* KPIs section */}
            <div className="mt-4">
              <p className=" text-[1.125rem] mb-4">KPIs</p>
              <div className="relative flex flex-col gap-3">
                {/* Connecting line */}
                <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-[#0f4761]/30"></div>
                
                {project.kpis.map((kpi, i) => (
                  <div key={i} className="relative flex items-start gap-3 min-h-[32px]">
                    <div className="flex-shrink-0 mt-1">
                      <CheckIcon />
                    </div>
                    <span className="text-[0.938rem] text-[#0f4761] leading-relaxed">{kpi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
