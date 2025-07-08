"use client";

export function SupportProcess() {
  const steps = [
    {
      number: "01",
      label: "Registro automático de la incidencia",
    },
    {
      number: "02",
      label: "Clasificación y priorización según criticidad",
    },
    {
      number: "03",
      label: "Respuesta inicial de evaluación",
    },
    {
      number: "04",
      label: "Despliegue de acción técnica (remota o presencial)",
    },
    {
      number: "05",
      label: "Cierre de incidencia con verificación y reporte",
    },
  ];

  return (
    <section className="w-full bg-white text-[#0f4761] font-sans py-4">
      <div className="max-w-[1230px] mx-auto px-4">
        <h2 className="text-[2rem]  mb-10">Metodología de actuación técnica</h2>

        <div className="bg-[#f7f8f9] p-8 rounded-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-left">
              <div className="bg-[#dce3e8] text-[#0f4761] rounded-md w-[40px] h-[40px] flex items-center justify-center font-semibold mb-4">
                {step.number}
              </div>
              <p className="text-[1rem] text-left">{step.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
