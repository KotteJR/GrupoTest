import { Footer } from "../Footer/footer";

export default function AvisoLegal() {
  return (
    <div>
      <div className="w-full bg-white text-[#0f4761] font-sans py-24">
        <div className="max-w-[800px] mx-auto px-4">
          <h1 className="text-[2.5rem] max-md:text-[2rem] leading-[120%] mb-8">
            Aviso Legal
          </h1>
          
          <div className="space-y-6 text-[#646464] leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-[#0f4761] mb-3">1. Información General</h2>
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa que este sitio web es propiedad de:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li><strong>Razón Social:</strong> IB360 S.L.</li>
                <li><strong>CIF:</strong> B12345678</li>
                <li><strong>Domicilio:</strong> Carrer de la Innovació 12, 07010 Palma, Illes Balears, España</li>
                <li><strong>Teléfono:</strong> +34 971 123 456</li>
                <li><strong>Email:</strong> info@ib360.tech</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f4761] mb-3">2. Objeto</h2>
              <p>
                El presente aviso legal regula el uso del sitio web www.ib360.tech, que IB360 S.L. pone a disposición de los usuarios de Internet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f4761] mb-3">3. Condiciones de Uso</h2>
              <p>
                El acceso y uso de este sitio web atribuye la condición de usuario y supone la aceptación plena de todas las condiciones incluidas en este Aviso Legal. Si no está de acuerdo con alguna de estas condiciones, no utilice este sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f4761] mb-3">4. Responsabilidades</h2>
              <p>
                IB360 S.L. se reserva el derecho a realizar cambios en el sitio web sin previo aviso, al objeto de mantener actualizada su información, pudiendo limitar o denegar el acceso a dicho sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f4761] mb-3">5. Propiedad Intelectual</h2>
              <p>
                Todos los contenidos del sitio web, incluyendo a título enunciativo pero no limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a IB360 S.L.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f4761] mb-3">6. Legislación Aplicable</h2>
              <p>
                El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier conflicto que pueda surgir con motivo del acceso o uso del sitio web, IB360 S.L. y el usuario se someten a los juzgados y tribunales de Palma, Illes Balears.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 