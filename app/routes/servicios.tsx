import type { Route } from "./+types/servicios";
import { Shield, FileText, Scale, Briefcase, LucideScale } from "lucide-react";

import defensaImg from "../images/imagen_muestra_1.jpeg";
import devolucionesImg from "../images/imagen_muestra_2.jpeg";
import auditoriasImg from "../images/imagen_muestra_3.jpeg";
import consultoriaImg from "../images/imagen_muestra_4.jpeg";
import { useState } from "react";

export const meta: Route.MetaFunction = () => [
  { title: "Servicios - TaxBusiness" },
  {
    name: "description",
    content:
      "Devoluciones de impuestos, defensa fiscal, auditorías SAT, consultoría jurídica, comercio exterior e ingeniería fiscal con T.I.",
  },
  {
    name: "keywords",
    content:
      "devolución de impuestos, defensa fiscal, SAT, consultoría jurídica, comercio exterior",
  },
];

const servicios = [
  {
    icon: Shield,
    title: "Defensa Fiscal",
    desc: "Protección legal en cualquier etapa procesal.",
    img: defensaImg,
    detalles: ["PAE-embargos y garantías.",
               "Recursos de revocación.",
               "Demandas de nulidad.",
               "Amparos y revisiones.",
               "Incidentes y quejas.",
               "Revision administrativa."
               ],
      
      
      
  },
  {
    icon: FileText,
    title: "Devolución de Impuestos",
    desc: "IVA, ISR y recuperación de saldos a favor.",
    img: devolucionesImg,
    detalles: [ "Devoluciones de IVA e ISR, de saldos a favor y pagos indebidos.",
               "Resolvemos rezagos y dificultades actualizando a las empresas.",
               "Sector exportador, alimentos, automotriz, farmacéutico y más."
              ],
  },
  {
    icon: Scale,
    title: "Auditorías SAT",
    desc: "Aclaración de observaciones y acuerdos.",
    img: auditoriasImg,
    detalles: ["Diagnóstico estratégico.",
               "Interpretación jurídica.",
               "Aclaración de observaciones.",
               "Protección de sus derechos.",
               "Orientación en autocorrección.",
               "Acuerdos Conclusivos y quejas."
              ],
  },
  {
    icon: Briefcase,
    title: "Consultoría Jurídica",
    desc: "Opinión profesional y estrategia integral.",
    img: consultoriaImg,
    detalles: ["Interpretación de disposiciones.",
               "Acuerdos conclusivos y quejas.",
               "Integración de consultas al SAT.",
               "Invitaciones y requerimientos.",
               "Aclaración de observaciones.",
               "Orientación integral en tramites"
              ],
  },
  {
    icon: FileText,
    title: "Diagnóstico estratégico",
    desc: "Auditorías fiscales preventivas.",
    img: defensaImg,
    detalles: ["Devoluciones.",
               "Auditorias fiscales.",
               "Actos administrativos.",
               "Reformas a disposiciones.",
               "Blindaje integral preventivo.",
               "Casos especiales de tributación",
    ],
  },
  {
    icon: Scale,
    title: "Soluciones fiscales",
    desc: "Diagnóstico y planeación fiscal.",
    img: consultoriaImg,
    detalles: ["Criterios favorables.",
               "Devoluciones blindadas.",
               "Diagnostico y estrategia.",
               "Aclaración de observaciones.",
               "Prevenir riesgos contingentes.",
               "Nulificar creditos improcedentes",
    ],
  },
];

export default function Servicios() {

  const [abierto, setAbierto] = useState<string | null>(null);

  const toggleServicio = (title: string) => {
    setAbierto(abierto === title ? null : title);
  };

  return (
    <section className="p-8 bg-neutral">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-[#2C2D5C] mb-10">
          Nuestros Servicios
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map(({ icon: Icon, title, desc, img, detalles }) => (
            <div
              key={title}
              onClick={() => toggleServicio(title)}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-70 object-cover"
              />
              <div className="p-8 text-center">
                <Icon className="text-primary w-10 h-10 mx-auto" />
                <h3 className="text-2xl text-gray-800 font-bold">{title}</h3>
                <p className="text-gray-700 font-bold text-xl">{desc}</p>
                <button 
                  onClick={() => toggleServicio(title)} 
                  className="mt-4 pt-2 text-center font-semibold hover:underline"
                >
                  {abierto === title ? "Ver menos" : "Ver más"}
                </button>
                {/* Detalles desplegables */}
                {abierto === title && detalles && (
                  <ul className="mt-4 text-left text-xl text-gray-700 space-y-1">
                    {detalles.map((d, i) => (
                      <li
                        key={i}
                        className="pl-3 border-l-2 border-accent hover:text-primary transition"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/contacto"
            className="bg-cyan-700 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold text-white transition"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
