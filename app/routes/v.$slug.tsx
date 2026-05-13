import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { cards } from "../data/cards";
import logo from "../images/TaxBusiness_ 1C547F.png";
import { Globe } from "lucide-react";





export default function BusinessCard() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const person = slug ? cards[slug as keyof typeof cards] : null;

    useEffect(() => { 
    const timer = setTimeout(() => {
        setLoading(false);
    }, 1800); // Simula una carga de 2 segundos

    return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta
        }, []);

    if (loading) {
         return (
      <div className="min-h-screen bg-[#1C547F] flex flex-col items-center justify-center">
        <img
          src={logo}
          alt="TaxBusiness"
          className="w-64 animate-pulse"
        />

        <div className="mt-10 w-40 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white animate-loading-bar" />
        </div>
      </div>
    );
     }

  if (!person) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1C547F]">
        <h1 className="text-2xl font-bold text-white">Card not found</h1>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-[#F4F7FA] flex justify-center px-4 py-8">
    <div className="w-full max-w-6xl bg-white rounded-[2rem] shadow-2xl overflow-hidden">
      <div className="relative bg-[#1C547F] px-6 pt-8 pb-24 text-center">
        <a
          href={person.website}
          target="_blank"
          rel="noreferrer"
          aria-label="Ir al sitio web"
          className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1C547F] shadow-md hover:bg-[#EAF1F6] transition"
        >
          <Globe size={18} />
          <span>Ir al sitio</span>
        </a>

        <p className="text-white/80 text-sm tracking-widest uppercase">
          TaxBusiness
        </p>

        <div className="absolute left-0 right-0 bottom-[-55px] flex justify-center">
          <img
            src={person.image}
            alt={person.name}
            className="w-32 h-32 rounded-full border-[6px] border-white shadow-xl object-cover bg-white"
          />
        </div>
      </div>

      <div className="px-6 pt-20 pb-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#1C547F]">
            {person.name}
          </h1>

          <p className="text-gray-500 mt-1">{person.role}</p>

          <div className="w-16 h-1 bg-[#1C547F] rounded-full mx-auto my-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* IZQUIERDA */}
          <div className="w-full">
            <div className="space-y-3 text-left">
              {person.phones.map((phone, index) => (
                <InfoItem
                  key={index}
                  icon="📱"
                  label={index === 0 ? "Móvil" : "Teléfono"}
                  value={phone}
                />
              ))}

              <InfoItem icon="✉️" label="Email" value={person.email} />
              <InfoItem icon="🏢" label="Empresa" value={person.company} />
              <InfoItem icon="📍" label="Dirección" value={person.address} />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <a
                href={`https://wa.me/${person.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1C547F] text-white py-3 rounded-2xl font-semibold shadow-md hover:scale-[1.02] transition text-center"
              >
                WhatsApp
              </a>

              <a
                href={`mailto:${person.email}`}
                className="border border-[#1C547F] text-[#1C547F] py-3 rounded-2xl font-semibold hover:bg-[#1C547F] hover:text-white transition text-center"
              >
                Email
              </a>
            </div>
          </div>

          {/* DERECHA */}
          <div className="w-full text-left lg:sticky lg:top-10">
            <h2 className="text-lg font-bold text-[#1C547F] mb-3">
              Ubicación
            </h2>

            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title={`Mapa de ${person.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  person.address
                )}&output=embed`}
                className="w-full h-72 lg:h-[460px]"
                loading="lazy"
              />
            </div>

            <a
              href={person.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block w-full text-center bg-[#EAF1F6] text-[#1C547F] py-3 rounded-2xl font-semibold"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 bg-[#F8FAFC] rounded-2xl p-4 border border-gray-100">
      <div className="w-10 h-10 rounded-full bg-[#EAF1F6] flex items-center justify-center">
        {icon}
      </div>

      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-medium text-gray-800">{value}</p>
      </div>
    </div>
  );
}