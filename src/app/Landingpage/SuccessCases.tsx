'use client';

import Image from 'next/image';
import { useState } from 'react';

export function SuccessCases() {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      title: "Marriott – GPON 10 Gb",
      description: "Marriott confía en IB360 para modernizar su red de telecomunicaciones, renovar su IPTV y televisores, e integrar monitorización de servicios clave como agua, luz y piscinas.",
      image: "/images/mariott1.png"
    },
    {
      title: "Grupo Juaneda – Patient/Nurse Control",
      description: "Cobertura crítica 24/7 con redes de alta disponibilidad para entornos médicos. Instalación completa del sistema cableado de gestión de colas de espera.",
      image: "/images/juneada1.png"
    },
    {
      title: "15.000+ habitaciones conectadas",
      description: "Más de 15.000 habitaciones conectadas con tecnología IB360.",
      image: "/images/15000.png"
    },
    {
      title: "THB Hotels – Full Project",
      description: "THB apuesta por IB360 para modernizar su red GPON, WiFi 6, CCTV y cabeceras IPTV.",
      image: "/images/thb1.png"
    }
  ];

  return (
    <section
      data-scroll-to="casosDeXito"
      className="w-full py-20"
    >
      <div className="max-w-[1230px] mx-auto px-4 w-full flex flex-col items-center gap-4 text-center">
        <p className="text-base text-[#646464]">Casos de Éxito</p>
        <h2 className="text-[2.5rem] text-[#0f4761] leading-snug">
          Empresas líderes que ya <br />
          confiaron en nuestras soluciones.
        </h2>
      </div>

      <div className="max-w-[1230px] mx-auto px-4 w-full flex justify-between items-center gap-10 mt-12">
        {/* Left Side – Text */}
        <div className="flex flex-col gap-8 text-[#0f4761] text-[1.5rem] max-w-[700px]">
          {cases.map((case_, index) => (
            <div 
              key={index}
              className={`flex flex-col gap-4 cursor-pointer transition-opacity duration-300 ${
                activeCase === index ? 'opacity-100' : 'opacity-40'
              }`}
              onClick={() => setActiveCase(index)}
            >
              <h3 className="font-medium">{case_.title}</h3>
            <p className="text-lg text-[#646464]">
                {case_.description}
            </p>
          </div>
          ))}
        </div>

        {/* Right Side – Image */}
        <div className="rounded-[30px] overflow-hidden w-[700px] h-[570px]">
          <Image
            src={cases[activeCase].image}
            alt="Success Case Image"
            width={700}
            height={570}
            className="rounded-[30px] object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
