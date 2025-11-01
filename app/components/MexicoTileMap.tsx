// app/components/MexicoTileMap.tsx
interface StateTile {
  key: string;
  name: string;
  label: string;
  region: string;
}

const STATES: StateTile[] = [
  // Norte
  { key: "bcn", name: "Baja California", label: "BC", region: "Norte" },
  { key: "son", name: "Sonora", label: "SON", region: "Norte" },
  { key: "chih", name: "Chihuahua", label: "CHIH", region: "Norte" },
  { key: "coah", name: "Coahuila", label: "COAH", region: "Norte" },
  { key: "nl", name: "Nuevo León", label: "NL", region: "Norte" },
  { key: "sin", name: "Sinaloa", label: "SIN", region: "Norte" },

  // Occidente / Bajío
  { key: "jal", name: "Jalisco", label: "JAL", region: "Bajío" },
  { key: "gua", name: "Guanajuato", label: "GTO", region: "Bajío" },
  { key: "mich", name: "Michoacán", label: "MICH", region: "Bajío" },
  { key: "que", name: "Querétaro", label: "QRO", region: "Bajío" },

  // Centro
  { key: "mex", name: "Estado de México", label: "E.MEX", region: "Centro" },
  { key: "cdmx", name: "Ciudad de México", label: "CDMX", region: "Centro" },
  { key: "mor", name: "Morelos", label: "MOR", region: "Centro" },
  { key: "pue", name: "Puebla", label: "PUE", region: "Centro" },
  { key: "hid", name: "Hidalgo", label: "HGO", region: "Centro" },

  // Golfo y Sureste
  { key: "ver", name: "Veracruz", label: "VER", region: "Golfo" },
  { key: "yuc", name: "Yucatán", label: "YUC", region: "Sureste" },
  { key: "roo", name: "Quintana Roo", label: "QROO", region: "Sureste" },
  { key: "gro", name: "Guerrero", label: "GRO", region: "Sur" },
];

export default function MexicoTileMap({
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
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
        {STATES.map((state) => {
          const isActive = active.has(state.key);
          return (
            <div
              key={state.key}
              title={state.name}
              className={[
                "w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-sm font-semibold transition-all duration-300",
                isActive
                  ? "bg-[#1C547F] text-white hover:bg-[#1D4D72]"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300",
                "shadow-sm hover:shadow-md cursor-default",
              ].join(" ")}
            >
              {state.label}
            </div>
          );
        })}
      </div>

      {showLegend && (
        <div className="mt-6 flex gap-6 text-sm text-[#144272] flex-wrap justify-center">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-[#1C547F] rounded"></span> Presencia activa
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-gray-300 rounded"></span> Sin presencia
          </div>
        </div>
      )}
    </div>
  );
}
