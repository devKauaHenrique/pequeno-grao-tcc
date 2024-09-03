/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'rosa-principal': "#FFA9C5",
        'rosa-secundario': "#621D39",
        'rosa-terciario': "#E88DAE",
        'azul-principal': "#2971D3",
        'azul-secundario': "#003191",
        "custom-transparent": "rgba(0, 0, 0, 0.4)",
        "salmao": "#D4AA78",
        "salmao-escuro": "#ad7d44",
      },
      backgroundImage: {
        'home': "url(/assets/home.jpg)"
      },
      height: {
        'screen-minus-header-1': 'calc(100vh - 5rem)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

