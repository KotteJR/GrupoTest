"use client";

export function ContactFormSection() {
  return (
    <section className="w-full py-20 bg-white font-sans mb-4">
      <div className="max-w-[1230px] mx-auto px-4">
        <div className="flex flex-col gap-5 mb-16">
          <h2 className="text-[2.375rem] font-medium leading-[120%] text-[#0f4761] text-center">
            Ponte en contacto con nosotros!
          </h2>
          <p className="text-[#646464] text-[1.125rem] leading-[130%] text-center">
            Cuéntanos sobre tu proyecto y te ayudaremos a encontrar la mejor solución
          </p>
        </div>
        
        <div className="flex bg-[#f7f8f9] rounded-[20px] p-12 relative">



          
          {/* Left Side - Contact Information (Overlapping) */}
          <div className="absolute left-0 top-0 bg-[#0f4761] text-white p-12 w-[45%] rounded-[20px] z-10 h-full flex flex-col justify-center">
            <h3 className="text-[1.5rem] font-semibold mb-8">Información de contacto</h3>
            
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3.33333 3.33334H16.6667C17.5833 3.33334 18.3333 4.08334 18.3333 5.00001V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33333C2.41667 16.6667 1.66667 15.9167 1.66667 15V5.00001C1.66667 4.08334 2.41667 3.33334 3.33333 3.33334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.3333 5L10 10.8333L1.66667 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Email</div>
                  <div className="text-white font-medium">hello@ib360.tech</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18.3083 14.1L15.9083 13.7833C15.525 13.7333 15.1417 13.8417 14.8417 14.075L12.9917 15.4833C10.675 14.2917 8.70833 12.3333 7.51667 10.0083L8.93333 8.15C9.16667 7.85 9.275 7.46667 9.225 7.08333L8.90833 4.70833C8.825 3.94167 8.18333 3.375 7.40833 3.375H5.74167C4.875 3.375 4.15833 4.09167 4.20833 4.95833C4.60833 11.2333 9.76667 16.3833 16.0417 16.7833C16.9083 16.8333 17.625 16.1167 17.625 15.25V13.5833C17.6333 12.8167 17.075 12.1833 18.3083 14.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Teléfono</div>
                  <div className="text-white font-medium">+34 971 123 456</div>
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
                  <div className="text-white font-medium">Carrer de la Innovació 12<br />07010 Palma, Illes Balears</div>
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
                  <div className="text-white font-medium">8:00 – 23:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form Content */}
          <div className="ml-auto w-[55%] pl-8 flex items-center">
            <form className="space-y-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#0f4761] mb-1">Tu nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full h-[45px] rounded-[10px] bg-white px-4 text-[#646464] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0f4761] mb-1">Tu email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    placeholder="Tu email *"
                    required
                    className="w-full h-[45px] rounded-[10px] bg-white px-4 text-[#646464] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f4761] mb-1">Asunto <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="Asunto *"
                  required
                  className="w-full h-[45px] rounded-[10px] bg-white px-4 text-[#646464] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f4761] mb-1">Tu mensaje</label>
                <textarea
                  rows={2}
                  placeholder="Tu mensaje - Por favor incluye toda la información relevante"
                  className="w-full rounded-[10px] bg-white p-4 text-[#646464] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent resize-none"
                />
              </div>

              <div className="flex justify-start  pt-2">
                <button
                  type="submit"
                  className="bg-[#0f4761] text-white rounded-[10px] px-8 py-3 font-medium hover:bg-[#0d3c52] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0f4761]/30 focus:ring-offset-2"
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