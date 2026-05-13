/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./app/**/*.{js,ts,jsx,tsx}", // porque tus páginas están dentro de app/routes
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C2D5C",
        secondary: "#144272",
        accent: "#0E7490",
        neutral: "#F8FAFC",
        dark: "#1E293B",
        cream: "#FFFFEB",
      },
      fontFamily: {
        sans: ["Objectivity", "sans-serif", "system-ui"],// Fuente corporativa
      },
    },
  },
  plugins: [],
};
