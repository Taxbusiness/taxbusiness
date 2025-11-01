// app/components/MexicoSVGMap.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import mexicoSVG from "../images/mexico-states.svg?raw";

type MexicoSVGMapProps = {
  activeStates?: string[];
  showLegend?: boolean;
};

// Keys cortas -> IDs del SVG
const KEY_TO_SVGID: Record<string, string> = {
  bcn: "MXBCN", bcs: "MXBCS", son: "MXSON", chih: "MXCHH", coah: "MXCOA", nl: "MXNLE",
  sin: "MXSIN", dur: "MXDUR", tam: "MXTAM", zac: "MXZAC", slp: "MXSLP",
  jal: "MXJAL", nay: "MXNAY", col: "MXCOL", mich: "MXMIC", gua: "MXGUA", que: "MXQUE", ags: "MXAGU",
  mex: "MXMEX", cdmx: "MXCMX", mor: "MXMOR", pue: "MXPUE", hid: "MXHID", tla: "MXTLA",
  ver: "MXVER", tab: "MXTAB", yuc: "MXYUC", roo: "MXROO", cam: "MXCAM", oax: "MXOAX", gro: "MXGRO", chiapas: "MXCHP",
};

// IDs del SVG -> Nombre completo (tu JSON)
const ID_TO_NAME: Record<string, string> = {
  MXAGU: "Aguascalientes", MXBCN: "Baja California", MXBCS: "Baja California Sur",
  MXCAM: "Campeche", MXCHH: "Chihuahua", MXCHP: "Chiapas", MXCMX: "Ciudad de México",
  MXCOA: "Coahuila", MXCOL: "Colima", MXDUR: "Durango", MXGRO: "Guerrero",
  MXGUA: "Guanajuato", MXHID: "Hidalgo", MXJAL: "Jalisco", MXMEX: "México",
  MXMIC: "Michoacán", MXMOR: "Morelos", MXNAY: "Nayarit", MXNLE: "Nuevo León",
  MXOAX: "Oaxaca", MXPUE: "Puebla", MXQUE: "Querétaro", MXROO: "Quintana Roo",
  MXSIN: "Sinaloa", MXSLP: "San Luis Potosí", MXSON: "Sonora", MXTAB: "Tabasco",
  MXTAM: "Tamaulipas", MXTLA: "Tlaxcala", MXVER: "Veracruz", MXYUC: "Yucatán", MXZAC: "Zacatecas",
};

export default function MexicoSVGMap({
  activeStates = [
    "yuc","chih","cdmx","roo","bcn","que","gro","nl","jal","gua","sin",
    "coah","pue","ver","mich","mex","mor","son","hid"
  ],
  showLegend = true,
}: MexicoSVGMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tip, setTip] = useState<{x:number; y:number; text:string; show:boolean}>({
    x: 0, y: 0, text: "", show: false
  });

  const activeIds = useMemo(
    () => new Set(activeStates.map(k => KEY_TO_SVGID[k]).filter(Boolean)),
    [activeStates]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Inject SVG
    el.innerHTML = mexicoSVG;
    const root = el;

    // Base style
    root.querySelectorAll<SVGElement>("[id^='MX']").forEach(node => {
      node.classList.add(
        "fill-gray-200","stroke-gray-500/30","stroke-[0.5]",
        "transition-colors","duration-200","hover:fill-gray-300","cursor-default"
      );

      // Nombre para tooltip
      const name = ID_TO_NAME[node.id] ?? node.id;
      node.setAttribute("data-name", name);
    });

    // Activos
    activeIds.forEach(id => {
      const node = root.querySelector<SVGElement>(`#${CSS.escape(id)}`);
      if (!node) return;
      node.classList.remove("fill-gray-200","hover:fill-gray-300","stroke-gray-500/30");
      node.classList.add("fill-[#1C547F]","hover:fill-[#1D4D72]","stroke-white/70","shadow","cursor-pointer");
    });

    // Tooltip handlers (sobre cualquier estado)
    const states = Array.from(root.querySelectorAll<SVGElement>("[id^='MX']"));
    const onEnter = (e: Event) => {
      const t = e.currentTarget as SVGElement;
      const name = t.getAttribute("data-name") || "";
      setTip(prev => ({ ...prev, text: name, show: true }));
    };
    const onMove = (e: Event) => {
      const me = e as MouseEvent;
      const bounds = el.getBoundingClientRect();
      setTip(prev => ({
        ...prev,
        x: me.clientX - bounds.left + 12,
        y: me.clientY - bounds.top + 12,
      }));
    };
    const onLeave = () => setTip(prev => ({ ...prev, show: false }));

    states.forEach(s => {
      s.addEventListener("mouseenter", onEnter);
      s.addEventListener("mousemove", onMove);
      s.addEventListener("mouseleave", onLeave);
    });

    return () => {
      states.forEach(s => {
        s.removeEventListener("mouseenter", onEnter);
        s.removeEventListener("mousemove", onMove);
        s.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [activeIds]);

  return (
    <div className="w-full">
      <div className="relative mx-auto max-w-2xl rounded-2xl bg-white shadow-md p-4">
        {/* Contenedor del SVG */}
        <div
          ref={containerRef}
          className="w-full [&>svg]:w-full [&>svg]:h-auto [&>svg]:select-none"
          aria-label="Mapa de México por estados"
        />
        {/* Tooltip propio */}
        {tip.show && (
          <div
            className="pointer-events-none absolute z-10 px-2 py-1 rounded-md bg-[#0B1E36] text-white text-xs shadow-md"
            style={{ left: tip.x, top: tip.y }}
          >
            {tip.text}
          </div>
        )}
      </div>

      {showLegend && (
        <div className="mt-4 flex items-center gap-6 justify-center text-sm text-[#144272] flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-[#1C547F]" /> Presencia activa
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-gray-300" /> Sin presencia
          </div>
        </div>
      )}
    </div>
  );
}
