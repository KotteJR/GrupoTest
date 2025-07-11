"use client";

export function ContactFormSection() {
  return (
    <section className="w-full py-18 mb-6 bg-white font-sans">
      <div className="max-w-[1230px] mx-auto px-4">
        <div className="flex flex-col gap-5 mb-16">
          <h2 className="md:text-[2.5rem] text-[2rem] max-md:text-[2.125rem] leading-[120%] text-[#0f4761] text-center">
            Ponte en contacto con nosotros!
        </h2>
          <p className="text-[#646464] text-[1.125rem] leading-[130%] text-center">
          IB360 mantiene un roadmap abierto y en continua evolución en el desarrollo de soluciones avanzadas. <br /> Forme parte del futuro de la digitalización inteligente.
        </p>
      </div>

        <div className="flex bg-[#f7f8f9] rounded-[20px] p-12 relative max-[850px]:flex-col max-[850px]:p-6 max-[850px]:gap-6">



          
          {/* Left Side - Contact Information (Overlapping) */}
          <div className="absolute left-0 top-0 bg-[#0f4761] text-white p-12 w-[45%] rounded-[20px] z-10 h-full flex flex-col justify-center max-[850px]:relative max-[850px]:w-full max-[850px]:p-6 max-[850px]:h-auto">
            {/* Background curved lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
              <svg width="120%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0">
                <circle cx="350" cy="50" r="120" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.15"/>
                <circle cx="350" cy="50" r="90" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.2"/>
                <circle cx="350" cy="50" r="60" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.25"/>
                <circle cx="50" cy="250" r="80" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.1"/>
                <circle cx="50" cy="250" r="50" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.15"/>
              </svg>
            </div>
            
            <h3 className="text-[1.5rem] font-semibold mb-8 max-[850px]:mb-4 max-[850px]:text-[1.25rem] relative z-10">Información de contacto</h3>
            
            <div className="space-y-8 max-[850px]:space-y-4 relative z-10">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Email</div>
                  <div className="text-white ">hello@ib360.tech</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Teléfono</div>
                  <div className="text-white ">+34 971 123 456</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Dirección</div>
                  <div className="text-white ">Carrer de la Innovació 12<br />07010 Palma, Illes Balears</div>
                </div>
              </div>

              {/* Working hours */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Horario de atención</div>
                  <div className="text-white ">8:00 – 23:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form Content */}
          <div className="ml-auto w-[55%] pl-8 flex items-center max-[850px]:w-full max-[850px]:ml-0 max-[850px]:pl-0 relative">
            
            <form className="space-y-4 w-full relative z-10">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-[850px]:grid-cols-1">
                <div>
                  <label className="block text-sm  text-[#0f4761] mb-1">Tu nombre</label>
        <input
          type="text"
                    placeholder="Tu nombre"
                    className="w-full h-[45px] rounded-[10px] bg-white px-4 text-[#646464] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
        />
                </div>
                <div>
                  <label className="block text-sm  text-[#0f4761] mb-1">Tu email <span className="text-red-500">*</span></label>
        <input
          type="email"
                    placeholder="Tu email *"
                    required
                    className="w-full h-[45px] rounded-[10px] bg-white px-4 text-[#646464] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
        />
                </div>
              </div>

              <div>
                <label className="block text-sm  text-[#0f4761] mb-1">Asunto <span className="text-red-500">*</span></label>
        <input
          type="text"
                  placeholder="Asunto *"
                  required
                  className="w-full h-[45px] rounded-[10px] bg-white px-4 text-[#646464] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
        />
              </div>

              <div>
                <label className="block text-sm  text-[#0f4761] mb-1">Tu mensaje</label>
        <textarea
                  rows={2}
                  placeholder="Tu mensaje - Por favor incluye toda la información relevante"
                  className="w-full rounded-[10px] bg-white p-4 text-[#646464] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent resize-none"
        />
              </div>

              <div className="flex justify-start pt-2">
        <button
          type="submit"
                  className="bg-[#0f4761] text-white rounded-[10px] px-8 py-3  hover:bg-[#0d3c52] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0f4761]/30 focus:ring-offset-2"
        >
                  Enviar mensaje
        </button>
              </div>
      </form>
          </div>
        </div>
      </div>
    </section>
  );
}