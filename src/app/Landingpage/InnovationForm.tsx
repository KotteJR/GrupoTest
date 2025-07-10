'use client';

export function InnovationForm() {
  return (
    <section className="w-full py-18 mb-6">
      <div className="max-w-[1230px] mx-auto px-4">
        <div className="flex flex-col gap-5 mb-12">
          <div className="flex justify-center">
            <div className="inline-block bg-[#fdf4ea] text-[#f0952a] text-sm px-4 py-2 rounded-full w-fit mb-2">
              INNOVACIÓN Y IA
            </div>
          </div>
          <h2 className="md:text-[2.5rem] text-[2rem] max-md:text-[2.125rem] leading-[120%] text-[#0f4761] text-center">
          Lo que hoy es innovación, mañana será imprescindible.
          </h2>
        </div>

        <div className="flex bg-[#f7f8f9] rounded-[20px] p-12 relative max-[850px]:flex-col max-[850px]:p-6 max-[850px]:gap-6">
          {/* Left Side - Innovation Information (Overlapping) */}
          <div className="absolute left-0 top-0 bg-[#f0952a] text-white p-12 w-[45%] rounded-[20px] z-10 h-full flex flex-col justify-center max-[850px]:relative max-[850px]:w-full max-[850px]:p-6 max-[850px]:h-auto">
            {/* Background curved lines */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-80">
              <svg width="120%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0">
                <circle cx="350" cy="50" r="120" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.15"/>
                <circle cx="350" cy="50" r="90" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.2"/>
                <circle cx="350" cy="50" r="60" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.25"/>
                <circle cx="50" cy="250" r="80" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.1"/>
                <circle cx="50" cy="250" r="50" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.15"/>
              </svg>
            </div>
            
            <div className="space-y-6 max-[850px]:space-y-4 relative z-10">
              {/* AI Features */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Red Inteligente</div>
                  <div className="text-white">Optimización automática de redes</div>
                </div>
              </div>

              {/* Predictive Analytics */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Análisis Predictivo</div>
                  <div className="text-white">Prevención de incidencias</div>
                </div>
              </div>

              {/* Smart Experience */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Experiencia Mejorada</div>
                  <div className="text-white">Usuario siempre conectado</div>
                </div>
              </div>

              {/* 24/7 Support */}
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 flex items-center justify-center mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-white/70 mb-1">Soporte IA</div>
                  <div className="text-white">Asistencia inteligente 24/7</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form Content */}
          <div className="ml-auto w-[55%] pl-8 flex flex-col justify-center max-[850px]:w-full max-[850px]:ml-0 max-[850px]:pl-0 relative">
            
           <div className="mb-8 relative z-10">
               <p className="text-[#646464] text-base leading-[1.6]">
                 Inteligencia artificial que optimiza redes, predice incidencias y mejora la experiencia en entornos hoteleros, hospitalarios y corporativos.
               </p>
             </div>
             
            <form className="space-y-4 w-full relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-[850px]:grid-cols-1">
                <div>
                  <label className="block text-sm text-[#0f4761] mb-1">Nombre</label>
                <input 
                  type="text" 
                  placeholder="Nombre" 
                    className="w-full h-[45px] rounded-[10px] bg-white px-4 text-[#646464] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
                />
                </div>
                <div>
                  <label className="block text-sm text-[#0f4761] mb-1">Empresa</label>
                <input 
                  type="text" 
                  placeholder="Empresa" 
                    className="w-full h-[45px] rounded-[10px] bg-white px-4 text-[#646464] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#0f4761] mb-1">Correo electrónico <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  placeholder="Correo electrónico *"
                  required
                  className="w-full h-[45px] rounded-[10px] bg-white px-4 text-[#646464] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0f4761] focus:border-transparent"
                />
              </div>
              
              <div className="flex justify-start pt-2">
                <button
                  type="submit"
                  className="bg-[#0f4761] text-white rounded-[10px] px-8 py-3 hover:bg-[#0d3c52] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0f4761]/30 focus:ring-offset-2"
                >
                  Reserva tu demo ahora
              </button>
            </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}


