import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    // Ruta raíz (Inicio)
    index("routes/home.tsx"),

    // Otras rutas pueden ser añadidas aquí
    route("servicios", "routes/servicios.tsx"),
    route("nosotros", "routes/nosotros.tsx"),
    route("contacto", "routes/contacto.tsx"),
    route("chessTalent", "routes/chessTalent.tsx"),

    // Ruta para tarjetas de presentación (dinámica)
    route("v/:slug", "routes/v.$slug.tsx"),
    // Ruta comodín para 404
    route("*", "routes/NotFound.tsx"),

    ] satisfies RouteConfig;