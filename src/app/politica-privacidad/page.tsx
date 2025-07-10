import { Footer } from "../Footer/footer";

export default function PoliticaPrivacidad() {
  return (
    <div>
      <div className="w-full bg-white text-[#0f4761] font-sans py-24">
        <div className="max-w-[800px] mx-auto px-4">
          <h1 className="text-[2.5rem] max-md:text-[2rem] leading-[120%] mb-8">
            Política de Privacidad
          </h1>
          
          <div className="space-y-6 text-[#646464] leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-[#0f4761] mb-3">1. Responsable del Tratamiento</h2>
              <p>
                El responsable del tratamiento de sus datos personales es:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li><strong>IB360 S.L.</strong></li>
                <li><strong>CIF:</strong> B12345678</li>
                <li><strong>Dirección:</strong> Carrer de la Innovació 12, 07010 Palma, Illes Balears, España</li>
                <li><strong>Email:</strong> info@ib360.tech</li>
                <li><strong>Teléfono:</strong> +34 971 123 456</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f4761] mb-3">2. Finalidad del Tratamiento</h2>
              <p>
                Los datos personales que nos proporcione se utilizarán para las siguientes finalidades:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Gestionar las consultas realizadas a través del formulario de contacto</li>
                <li>Proporcionar información sobre nuestros servicios</li>
                <li>Mantener la relación comercial y contractual</li>
                <li>Cumplir con las obligaciones legales aplicables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f4761] mb-3">3. Base Legal</h2>
              <p>
                El tratamiento de sus datos se basa en:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>El consentimiento del interesado para el envío de comunicaciones comerciales</li>
                <li>La ejecución de un contrato en el que el interesado es parte</li>
                <li>El cumplimiento de una obligación legal aplicable al responsable del tratamiento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f4761] mb-3">4. Conservación de Datos</h2>
              <p>
                Los datos personales se conservarán durante el tiempo necesario para cumplir con las finalidades para las que se recabaron y para determinar las posibles responsabilidades que se pudieran derivar de dichas finalidades y del tratamiento de los datos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f4761] mb-3">5. Derechos del Interesado</h2>
              <p>
                Los interesados tienen derecho a:
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Solicitar el acceso a los datos personales</li>
                <li>Solicitar su rectificación o supresión</li>
                <li>Solicitar la limitación de su tratamiento</li>
                <li>Oponerse al tratamiento</li>
                <li>Solicitar la portabilidad de los datos</li>
              </ul>
              <p className="mt-2">
                Para ejercer estos derechos, puede contactar con nosotros en: <strong>info@ib360.tech</strong>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f4761] mb-3">6. Seguridad</h2>
              <p>
                IB360 S.L. ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#0f4761] mb-3">7. Modificaciones</h2>
              <p>
                IB360 S.L. se reserva el derecho a modificar la presente política para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 