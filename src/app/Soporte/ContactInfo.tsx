"use client";
import { Mail, PhoneCall, PhoneOff } from "lucide-react";

export function ContactSection() {
  return (
    <section className="w-full bg-white text-[#0f4761] font-sans">
      <div className="max-w-[1230px] mx-auto px-4 py-24 flex flex-col gap-8">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {/* Email Card */}
          <div className="bg-[#f7f8f9] p-6 rounded-[15px]">
            <div className="bg-[#e0e6ea] w-[40px] h-[40px] rounded-md flex items-center justify-center mb-4">
              <Mail className="w-5 h-5 text-[#0f4761]" />
            </div>
            <p className="text-[1.125rem]  mb-2">Vía email</p>
            <div className="text-[1.125rem] text-[#0f4761] space-y-1">
              <p>
                <a href="mailto:averias@grupoib360.com" className="underline">
                  averias@grupoib360.com
                </a>
              </p>
              <p>
                <a href="mailto:info@grupoib360.com" className="underline">
                  info@grupoib360.com
                </a>
              </p>
            </div>
          </div>

          {/* Phone (Work Hours) */}
          <div className="bg-[#f7f8f9] p-6 rounded-[15px]">
            <div className="bg-[#e0e6ea] w-[40px] h-[40px] rounded-md flex items-center justify-center mb-4">
              <PhoneCall className="w-5 h-5 text-[#0f4761]" />
            </div>
            <p className="text-[1.125rem]  mb-2">
              Vía teléfono <br />(horario laboral)
            </p>
            <p className="text-[1.125rem] text-[#0f4761]">971 20 15 20</p>
          </div>

          {/* Phone (After Hours) */}
          <div className="bg-[#f7f8f9] p-6 rounded-[15px]">
            <div className="bg-[#e0e6ea] w-[40px] h-[40px] rounded-md flex items-center justify-center mb-4">
              <PhoneOff className="w-5 h-5 text-[#0f4761]" />
            </div>
            <p className="text-[1.125rem]  mb-2">
              Vía teléfono <br />(fuera de horario laboral)
            </p>
            <p className="text-[1.125rem] text-[#0f4761]">971 20 15 20</p>
          </div>
        </div>

        {/* Automated Response Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 24/7 Availability Card */}
          <div className="border-2 border-[#0f4761]/10 rounded-[20px] p-8 bg-white">
            <div className="mb-6">
              <div className="bg-[#f0952a] text-white px-4 py-2 rounded-full text-sm  inline-block">
                Disponibilidad 24/7
              </div>
            </div>
            <p className="text-[1rem] leading-[150%] text-[#0f4761] mb-4">
              Técnico de guardia disponible los 365 días del año:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#f0952a] mt-2 flex-shrink-0"></div>
                <span className="text-[#0f4761]">Atención inmediata a eventualidades críticas.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#f0952a] mt-2 flex-shrink-0"></div>
                <span className="text-[#0f4761]">
                  Soporte fuera de horario laboral garantizado.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#f0952a] mt-2 flex-shrink-0"></div>
                <span className="text-[#0f4761]">
                  Personal técnico propio siempre localizable.
                </span>
              </div>
            </div>
          </div>

          {/* Critical Response Card */}
          <div className="border-2 border-[#0f4761]/10 rounded-[20px] p-8 bg-white">
            <div className="mb-6">
              <div className="bg-[#0f4761] text-white px-4 py-2 rounded-full text-sm  inline-block">
                Respuesta Crítica
              </div>
            </div>
            <p className="text-[1rem] leading-[150%] text-[#0f4761] mb-4">
              Protocolo de actuación para emergencias:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#f0952a] mt-2 flex-shrink-0"></div>
                <span className="text-[#0f4761]">Activación inmediata del técnico de guardia.</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#f0952a] mt-2 flex-shrink-0"></div>
                <span className="text-[#0f4761]">
                  Evaluación y solución prioritaria.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#f0952a] mt-2 flex-shrink-0"></div>
                <span className="text-[#0f4761]">
                  Comunicación continua hasta resolución.
                </span>
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
