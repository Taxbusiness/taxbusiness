import type { Route } from "./+types/contacto";

export const meta: Route.MetaFunction = () => [
  { title: "Contacto - TaxBusiness" },
  {
    name: "description",
    content:
      "Ponte en contacto con TaxBusiness. Atención en Monterrey y toda la República. Tel: 8181484384, correo: contacto@taxbusiness.com.mx.",
  },
  {
    name: "keywords",
    content:
      "contacto TaxBusiness, defensa fiscal contacto, consultoría fiscal Monterrey",
  },
];

export default function Contacto() {
  return (
    <div className="font-objectivity text-gray-800">
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#1C547F] to-[#1D4D72] text-white text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Contáctanos</h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Nuestro equipo está listo para brindarte asesoría fiscal profesional y
          soluciones confiables en todo México.
        </p>
      </section>

      {/* INFORMACIÓN DE CONTACTO */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
          {/* Columna izquierda: datos */}
          <div>
            <h2 className="text-3xl font-bold text-[#1C547F] mb-6">
              Información de contacto
            </h2>
            <div className="space-y-4 text-[#144272] text-lg">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contacto@taxbusiness.com.mx"
                  className="hover:underline text-[#1C547F]"
                >
                  contacto@taxbusiness.com.mx
                </a>
              </p>
              <p>
                <strong>Correo alterno:</strong>{" "}
                <a
                  href="mailto:erickcastillo@taxbusiness.com.mx"
                  className="hover:underline text-[#1C547F]"
                >
                  erickcastillo@taxbusiness.com.mx
                </a>
              </p>
              <p>
                <strong>Celular:</strong> 55 32 65 22 14
              </p>
              <p>
                <strong>Teléfono:</strong> 81 81 48 43 84
              </p>
              <p>
                <strong>Dirección:</strong> Av. Fundadores 955, Torre Sienna,
                San Pedro Garza García, NL.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-[#1D4D72] mb-3">
                Horarios de atención
              </h3>
              <p className="text-[#144272]">
                Lunes a Viernes: 9:00 a.m. – 6:00 p.m.  
                <br />
                Sábado y Domingo: Cerrado
              </p>
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-[#1C547F] mb-4">
              Envíanos un mensaje
            </h2>
            <p className="text-[#144272] mb-6 text-sm">
              Completa el formulario y uno de nuestros especialistas se pondrá
              en contacto contigo lo antes posible.
            </p>

            <form
              action="https://formspree.io/f/mnnlqdde"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Nombre completo"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C547F]"
                required
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C547F]"
                required
              />
              <textarea
                id="message"
                name="message"
                placeholder="Escribe tu mensaje"
                className="border border-gray-300 p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#1C547F]"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#1C547F] hover:bg-[#1D4D72] text-white py-3 rounded-lg font-semibold transition"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#1C547F] mb-6">Ubicación</h2>
        <p className="text-[#144272] mb-10">
          Visítanos en nuestras oficinas en San Pedro Garza García, Nuevo León.
        </p>
        <div className="max-w-5xl mx-auto shadow-xl rounded-xl overflow-hidden">
          <iframe
            className="w-full h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.455262679024!2d-100.3333!3d25.6572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bf7e7c3e5f3f%3A0x123456789abcdef!2sAv.%20Fundadores%20955%2C%20Torre%20Sienna%2C%20San%20Pedro%20Garza%20Garc%C3%ADa%2C%20NL!5e0!3m2!1ses!2smx!4v123456789"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
