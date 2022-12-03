/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        lokiBg: "url(../background.jpg)",
      },
      colors: {
        botao1: "#0072D2",
        botao2: "#131318",
        fundodescricao: "#19191F"
      },
      height: {
        basico1: "720px"
      }
    },
  },
  plugins: [],
}