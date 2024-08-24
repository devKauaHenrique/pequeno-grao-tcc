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
        "cinza": "#D9D9D9",
        "cinza-escuro": "#3F3F3F",
      },
      backgroundImage: {
        'home': "url(/assets/home.jpg)"
      },
      height: {
        'screen-minus-header-1': 'calc(100vh - 5rem)',
      },
      fontFamily: {
        'poppins-bold': ['Poppins-bold', 'sans-serif'],
        'poppins-medium': ['Poppins-medium', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'poppins-semibold': ['Poppins-semibold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

