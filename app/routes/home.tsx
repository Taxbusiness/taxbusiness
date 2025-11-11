import Carrusel from "~/components/Carrusel";
import logo_chessTalent from "../images/ajedrez-chess-talent.png";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1C547F] to-[#1D4D72] text-white py-20 text-center relative">
        <h1 className="font-objectivity font-bold text-4xl md:text-6xl mb-4">
          Soluciones Fiscales Prueba 1
        </h1>
        <p className="font-objectivity text-lg md:text-xl max-w-2xl mx-auto mb-4">
          20 años brindando confianza, estrategia y resultados en defensa fiscal.
        </p>
        <p className="font-objectivity text-base md:text-lg text-gray-200 mb-8">
          Tu aliado estratégico en devoluciones, defensa y consultoría integral.
        </p>
        <a
          href="/contacto"
          className="bg-cyan-700 hover:bg-blue-600 px-8 md:px-10 py-3 md:py-4 rounded-lg font-semibold transition"
        >
          Contáctanos
        </a>
      </section>

      {/* Carrusel + Texto */}
      <section className="grid md:grid-cols-2 gap-8 py-16 px-6 md:px-10 bg-white items-center">
        <div>
          <Carrusel />
        </div>
        <div>
          <h2 className="font-objectivity font-bold text-2xl md:text-3xl text-[#1C547F] mb-4">
            Quiénes Somos
          </h2>
          <p className="font-objectivity font-medium text-lg md:text-2xl text-[#144272] leading-relaxed">
            TAXBUSINESS es una Firma especializada en la materia fiscal integrada
            por abogados y contadores calificados para identificar e instrumentar con
            éxito las mejores alternativas legales.
          </p>
        </div>
      </section>

      {/* Chess Talent */}
      <section
        className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #f5f5f5 25%, transparent 25%), 
            linear-gradient(-45deg, #f5f5f5 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, #f5f5f5 75%), 
            linear-gradient(-45deg, transparent 75%, #f5f5f5 75%)
          `,
          backgroundSize: "20px 20px, 20px 20px, 20px 20px, 20px 20px",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Texto izquierda */}
        <div>
          <h2 className="text-3xl md:text-4xl font-objectivity font-bold text-[#1C547F] mb-6 flex items-center gap-2">
            Proyecto México Chess Talent <span className="text-4xl md:text-5xl">♞</span>
          </h2>
          <p className="text-[#144272] font-objectivity font-medium text-lg md:text-xl leading-relaxed">
            El Programa <strong>México Chess Talent</strong> es una iniciativa de TaxBusiness 
            para apoyar a jugadores de ajedrez de alto rendimiento en México, 
            proporcionando recursos y oportunidades para su desarrollo competitivo 
            y personal.
          </p>
          <a 
            href="/chessTalent"
            className="mt-6 inline-block text-[#1C547F] text-base md:text-lg font-semibold hover:underline"
          >
            Conoce más sobre México Chess Talent →
          </a>
        </div>

        {/* Imagen derecha */}
        <div className="flex justify-center">
          <img
            src={logo_chessTalent}
            alt="Logotipo de México Chess Talent"
            className="w-full max-w-sm md:max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-[#FFFFFF] py-20 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-objectivity font-bold text-[#1C547F] mb-6">
            Nuestros Servicios
          </h2>
          <ul className="space-y-4 text-[#144272] font-objectivity font-medium text-lg md:text-xl">
            <li>💰 Devolución de impuestos con resultados comprobados</li>
            <li>⚖️ Defensa fiscal en todas las etapas procesales</li>
            <li>📊 Auditorías SAT con diagnóstico estratégico</li>
            <li>📑 Consultoría jurídica y soluciones integrales</li>
          </ul>

          <a 
            href="/servicios"
            className="mt-6 inline-block text-[#1C547F] text-base md:text-lg font-semibold hover:underline"
          >
            Conoce más de nuestros servicios →
          </a>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#1D4D72] text-white py-16 text-center">
        <h2 className="font-objectivity font-bold text-2xl md:text-3xl mb-4">
          Estrategia fiscal que conecta confianza con resultados
        </h2>
        <a
          href="/contacto"
          className="bg-cyan-700 hover:bg-blue-600 px-8 md:px-10 py-3 md:py-4 rounded-lg font-semibold transition w-full md:w-auto inline-block"
        >
          Agenda tu cita
        </a>
      </section>
    </div>
  );
}
