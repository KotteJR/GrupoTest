"use client";

export function StatsSection() {
  const stats = [
    {
      value: "15,000+",
      label: "Habitaciones conectadas",
    },
    {
      value: "1,000+",
      label: "Camas hospitalarias",
    },
    {
      value: "80%",
      label: "Recurrencia de clientes",
    },
    {
      value: "24/7",
      label: "Soporte disponible",
    },
  ];

  return (
    <section className="w-full bg-white text-[#0f4761] font-sans py-10">
      <div className="max-w-[1230px] mx-auto px-4 text-center">
        <h2 className="text-[2rem] font-medium leading-tight">
          Números que <br /> Hablan por Sí Solos
        </h2>
        <p className="text-[#646464] text-[1.125rem] mt-2 mb-12">
          Más de dos décadas de experiencia en cifras
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 justify-items-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-[2rem] font-semibold">{stat.value}</p>
              <p className="text-[1.125rem] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
