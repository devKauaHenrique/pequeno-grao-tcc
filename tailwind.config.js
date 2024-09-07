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
        "vermelho": "#c82633",
        "vermelho-escuro": "#9d0d16",
        "verde": "#11bf00",
        "verde-escuro": "#31743f"
      },
      backgroundImage: {
        'home': "url(/assets/home.jpg)",
        'login': "url(/assets/login.jpg)",
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

