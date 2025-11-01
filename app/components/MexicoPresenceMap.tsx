// app/components/MexicoPresenceMap.tsx
type StatePin = {
  key: string;
  name: string;
  x: number; // porcentaje horizontal
  y: number; // porcentaje vertical
};

const PINS: StatePin[] = [
  // Noroeste / Norte
  { key: "bcn",  name: "Baja California",     x: 6,  y: 18 },
  { key: "son",  name: "Sonora",              x: 16, y: 22 },
  { key: "chih", name: "Chihuahua",           x: 28, y: 26 },
  { key: "coah", name: "Coahuila",            x: 36, y: 28 },
  { key: "sin",  name: "Sinaloa",             x: 18, y: 34 },
  // Noreste
  { key: "nl",   name: "Nuevo León",          x: 43, y: 34 },
  // Occidente / Bajío
  { key: "jal",  name: "Jalisco",             x: 28, y: 48 },
  { key: "gua",  name: "Guanajuato",          x: 34, y: 52 },
  { key: "mich", name: "Michoacán",           x: 31, y: 58 },
  { key: "que",  name: "Querétaro",           x: 38, y: 50 },
  // Centro
  { key: "mex",  name: "Estado de México",    x: 42, y: 55 },
  { key: "cdmx", name: "Ciudad de México",    x: 43, y: 58 },
  { key: "mor",  name: "Morelos",             x: 43, y: 61 },
  { key: "pue",  name: "Puebla",              x: 49, y: 58 },
  { key: "hid",  name: "Hidalgo",             x: 47, y: 52 },
  // Golfo
  { key: "ver",  name: "Veracruz",            x: 55, y: 58 },
  // Sur / Pacífico Sur
  { key: "gro",  name: "Guerrero",            x: 41, y: 66 },
  // Península
  { key: "yuc",  name: "Yucatán",             x: 78, y: 50 },
  { key: "roo",  name: "Quintana Roo",        x: 85, y: 54 },
];

export default function MexicoPresenceMap({
  activeStates = [
    "yuc","chih","cdmx","roo","bcn","que","gro","nl","jal","gua","sin",
    "coah","pue","ver","mich","mex","mor","son","hid"
  ],
  showLegend = true,
}: {
  activeStates?: string[];
  showLegend?: boolean;
}) {
  const active = new Set(activeStates);

  return (
    <div className="w-full">
      <div className="relative mx-auto max-w-xl aspect-[4/3] rounded-2xl bg-white shadow-md overflow-hidden">
        {/* Fondo sutil */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, #1C547F 2px, transparent 2px),
              radial-gradient(circle at 60% 60%, #1D4D72 2px, transparent 2px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-4 rounded-xl border border-gray-200" />

        {/* Puntos */}
        {PINS.map((pin) => {
          const isActive = active.has(pin.key);
          return (
            <div
              key={pin.key}
              className="absolute -translate-x-1/2 -translate-y-1/2 group"
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            >
              <span
                aria-hidden="true"
                className={[
                  "block w-4 h-4 md:w-5 md:h-5 rounded-full ring-2 transition",
                  isActive
                    ? "bg-[#1C547F] ring-[#1C547F]/30 group-hover:scale-110"
                    : "bg-gray-300 ring-gray-300/30 group-hover:scale-105",
                ].join(" ")}
              />
              {/* Tooltip */}
              <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-7 whitespace-nowrap rounded-md bg-black/75 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                {pin.name}
              </span>
            </div>
          );
        })}
      </div>

      {showLegend && (
        <div className="mt-4 flex items-center gap-6 justify-center text-sm text-[#144272] flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#1C547F]" />
            Presencia activa
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-gray-300" />
            Sin presencia
          </div>
        </div>
      )}
    </div>
  );
}
