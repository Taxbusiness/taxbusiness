import { FaCoins, FaGraduationCap, FaDumbbell, FaPlaneDeparture } from "react-icons/fa";

import ChessTalent_logo from "../images/ajedrez-chess-talent.png";
import inversion_chess from "../images/inversion_chess.png";
import Martinez from "../images/martinez_chess.png";
import Sion from "../images/sion_chess.png";
import Tania from "../images/tania_chess.png";
// ⬇️ Solo usamos el Tile Map (la opción B)
import MexicoSVGMap from "~/components/MexicoSVGMap";

export const meta = () => {
  return [
    { title: "México Chess Talent - TaxBusiness" },
    {
      name: "description",
      content:
        "Programa de alto rendimiento respaldado por TaxBusiness para impulsar el ajedrez mexicano a nivel internacional, reconocido por sus logros históricos y su modelo integral de formación.",
    },
    {
      name: "keywords",
      content:
        "ajedrez México, patrocinio ajedrez, talentos mexicanos, TaxBusiness, Chess Talent, México Chess Talent, CONADE",
    },
  ];
};

export default function ChessTalent() {
  // Estados activos (usa las keys de tu TileMap)
  const ACTIVE_STATES = [
    "yuc","chih","cdmx","roo","bcn","que","gro","nl","jal","gua","sin",
    "coah","pue","ver","mich","mex","mor","son","hid"
  ];
  const COVERAGE_PCT = Math.round((ACTIVE_STATES.length / 32) * 1000) / 10; // 59.4% → 59.4

  return (
    <div className="font-objectivity text-gray-800">

      {/* Hero */}
      <section
        className="relative overflow-hidden text-center text-white py-28 md:py-32"
        style={{ backgroundImage: `linear-gradient(135deg, #1C547F 0%, #1D4D72 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #ffffff 25%, transparent 25%),
              linear-gradient(-45deg, #ffffff 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #ffffff 75%),
              linear-gradient(-45deg, transparent 75%, #ffffff 75%)
            `,
            backgroundSize: "50px 50px",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-cyan-400/20 blur-3xl rounded-full animate-pulse-slow" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 animate-fadeIn">
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-2xl bg-cyan-500/30 rounded-full scale-125" />
              <img
                src={ChessTalent_logo}
                alt="México Chess Talent"
                className="relative mx-auto w-52 md:w-64 drop-shadow-2xl transition-transform duration-700 hover:scale-105"
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mt-8 mb-4 tracking-tight drop-shadow-md">
              México <span className="text-cyan-300">Chess Talent</span>
            </h1>
            <div className="h-[3px] w-28 bg-cyan-400 mx-auto mb-6 rounded-full shadow-cyan-400/40 shadow-sm" />

            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-3 leading-relaxed">
              Un modelo probado de alto rendimiento para el ajedrez nacional.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
              Con el respaldo de <strong>TaxBusiness</strong>, impulsamos a los mejores talentos mexicanos
              hacia el tablero mundial mediante un modelo integral de preparación estratégica.
            </p>

            <a
              href="/contacto"
              className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-cyan-300/30 hover:-translate-y-1"
            >
              Contáctanos
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5f5f5] to-transparent" />
      </section>

      {/* Introducción */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold text-[#1D4D72] mb-4">Introducción</h2>
          <p className="leading-relaxed text-justify text-lg text-[#144272]">
            El programa <strong>México Chess Talent (MCT)</strong> nace en diciembre de 2024 como una iniciativa de{" "}
            <strong>TaxBusiness</strong> para apoyar a jugadores de ajedrez de alto rendimiento: profesionales,
            semiprofesionales y jóvenes talentos. Su objetivo es <strong>impulsar el talento mexicano</strong>, crear
            oportunidades de patrocinio y visibilidad, y posicionar a México en los primeros lugares del ajedrez mundial.
          </p>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <img
            src={ChessTalent_logo}
            alt="México Chess Talent"
            className="mx-auto w-72 md:w-80 drop-shadow-xl transition-transform hover:scale-105"
          />
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-20 px-6 md:px-20 bg-white text-[#144272]">
        <h2 className="text-3xl font-bold text-[#1D4D72] mb-8 text-center">Misión, Visión y Valores</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-[#1C547F]">Misión</h3>
            <p>Impulsar a los talentos mexicanos de ajedrez, brindándoles respaldo, visibilidad y proyección internacional mediante un modelo integral de alto rendimiento.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-[#1C547F]">Visión</h3>
            <p>Ser el programa líder de América Latina en patrocinio de ajedrecistas, reconocido por su impacto en el desarrollo del deporte y en la formación de mentes poderosas.</p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-[#1C547F]">Valores</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Disciplina", "Estrategia", "Inclusión", "Excelencia", "Innovación"].map((valor) => (
              <span
                key={valor}
                className="bg-[#1D4D72]/10 text-[#1D4D72] px-5 py-2 rounded-full font-medium shadow-sm"
              >
                {valor}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Inversión y Transparencia */}
      <section className="py-20 px-6 md:px-20 bg-[#0B1E36] text-white text-center relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-2">INVERSIÓN Y <span className="text-[#F5B300]">TRANSPARENCIA</span></h2>
        <p className="text-gray-300 mb-12">Desde el lanzamiento:</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={inversion_chess}
              alt="Entrega de reconocimientos México Chess Talent"
              className="rounded-2xl shadow-xl w-full max-w-sm md:max-w-md hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 text-center">
            {[
              { Icon: FaCoins, text: <>CASI <span className="text-[#F5B300]">$5 MILLONES</span><br /> DE PESOS INVERTIDOS.</> },
              { Icon: FaGraduationCap, text: <>BECAS Y APOYOS<br /> DIRECTOS A JUGADORES.</> },
              { Icon: FaDumbbell, text: <>ENTRENAMIENTO<br /> ESPECIALIZADO.</> },
              { Icon: FaPlaneDeparture, text: <>VIÁTICOS E<br /> INSCRIPCIONES.</> },
            ].map(({ Icon, text }, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1D4D72] to-[#1C547F] rounded-full flex items-center justify-center">
                  <Icon className="text-2xl text-white" />
                </div>
                <p className="font-semibold text-white text-sm tracking-wide">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute top-10 -right-10 w-48 h-48 bg-[#F5B300]/20 rounded-full blur-2xl" />
      </section>

      {/* Cobertura y Participación (versión con tarjetas iguales) */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        {/* Encabezado */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1D4D72]">Cobertura Nacional y Participación</h2>
          <p className="mt-4 text-lg text-[#144272]">
            Presencia en <strong>{ACTIVE_STATES.length} estados</strong> ({COVERAGE_PCT}% de la República).
            MCT impulsa también el ajedrez femenil, con participación activa del <strong>40%</strong> de jugadoras.
          </p>
        </div>

        {/* Contenido */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Tarjeta: Mapa */}
          <div className="bg-white rounded-2xl shadow-md ring-1 ring-black/5 p-6 md:p-8 min-h-[560px] flex flex-col">
            <div className="flex items-center justify-between gap-3 mb-6">
              <h3 className="text-2xl font-semibold text-[#1C547F]">Mapa de Presencia (Estados)</h3>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C547F] bg-[#1C547F]/10 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#1C547F]" />
                Activos: {ACTIVE_STATES.length}/32
              </span>
            </div>

            {/* Contenedor para que el mapa no deforme la tarjeta */}
            <div className="flex-1">
              <MexicoSVGMap
                activeStates={[
                  "yuc","chih","cdmx","roo","bcn","que","gro","nl","jal","gua","sin",
                  "coah","pue","ver","mich","mex","mor","son","hid"
                ]}
              />
            </div>

            {/* Barra de cobertura */}
            <div className="mt-8">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span className="font-medium text-[#144272]">Cobertura nacional</span>
                <span className="tabular-nums font-semibold text-[#1C547F]">{COVERAGE_PCT}%</span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-[#1C547F] to-[#1D4D72] transition-all duration-500"
                  style={{ width: `${COVERAGE_PCT}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>{ACTIVE_STATES.length} de 32 estados</span>
                <span>Meta: 32 estados</span>
              </div>
            </div>
          </div>

          {/* Tarjeta: Donut */}
          <div className="bg-white rounded-2xl shadow-md ring-1 ring-black/5 p-6 md:p-8 min-h-[560px] flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-[#1C547F] mb-6">Participación por Género</h3>

            {/* Donut */}
            <div className="relative w-44 h-44 mb-6">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <path
                  className="text-gray-200"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-[#1D4D72]"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="60,40"
                  strokeLinecap="round"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#1C547F]">
                <span className="text-2xl font-bold tabular-nums">60%</span>
                <span className="text-sm">Hombres</span>
              </div>
            </div>

            {/* Leyenda */}
            <div className="flex gap-4 justify-center text-sm font-medium flex-wrap mb-6">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-[#1D4D72] rounded-full" />
                Hombres (60%)
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-300 rounded-full" />
                Mujeres (40%)
              </div>
            </div>

            {/* KPIs inferiores empujados al fondo para igualar alturas */}
            <div className="mt-auto grid grid-cols-2 gap-3 w-full">
              <div className="bg-[#1D4D72]/5 rounded-xl p-4 text-center">
                <div className="text-xl font-semibold text-[#1D4D72] tabular-nums">40%</div>
                <div className="text-xs text-[#144272]">Participación femenil</div>
              </div>
              <div className="bg-[#1C547F]/5 rounded-xl p-4 text-center">
                <div className="text-xl font-semibold text-[#1C547F] tabular-nums">{COVERAGE_PCT}%</div>
                <div className="text-xs text-[#144272]">Cobertura nacional</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Jugadores Destacados */}
      <section className="py-20 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#1D4D72] mb-12">Nuestros Jugadores Destacados</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              nombre: "GM José Eduardo Martínez Alcántara",
              img: Martinez,
              titulo: "Gran Maestro Internacional",
              logros: [
                "Primer mexicano en Top 100 mundial FIDE",
                "Subcampeón Continental 2025",
                "Clasificado a la Copa Mundial de Ajedrez",
              ],
            },
            {
              nombre: "IM Sión Galaviz",
              img: Sion,
              titulo: "Maestro Internacional",
              logros: [
                "Campeón Subzonal Centroamericano 2025",
                "En gira europea rumbo al título de Gran Maestro",
                "Meta: 10.º GM mexicano en la historia",
              ],
            },
            {
              nombre: "WIM Tania Miranda Rodríguez",
              img: Tania,
              titulo: "Maestra Internacional Femenina",
              logros: [
                "Campeona Subzonal Centroamericana 2025",
                "Clasificada a la Copa Mundial FIDE",
                "Referente del ajedrez femenil mexicano",
              ],
            },
          ].map((jugador) => (
            <div
              key={jugador.nombre}
              className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <img
                src={jugador.img}
                alt={jugador.nombre}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 ring-4 ring-[#1D4D72]/20"
              />
              <h3 className="text-xl font-semibold text-[#1C547F] mb-1">{jugador.nombre}</h3>
              <p className="text-gray-600 mb-3 italic">{jugador.titulo}</p>
              <ul className="text-sm text-left list-disc list-inside text-gray-700 space-y-1">
                {jugador.logros.map((logro) => <li key={logro}>{logro}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Eslogan Final */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-[#1C547F] to-[#1D4D72] text-white text-center">
        <h3 className="text-4xl md:text-5xl italic font-light mb-4">“Hoy jugamos con piezas blancas”</h3>
        <p className="mt-4 text-gray-200 max-w-xl mx-auto text-lg">
          Es momento de llevar a México al tablero mundial con iniciativa y visión de futuro.
        </p>
      </section>
    </div>
  );
}
