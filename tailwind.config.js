/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ubuntu': ['Ubuntu', 'Cinzel', 'Inconsolata', 'Lobster', 'Lora', 'Tangerine']
    },
    boxShadow: {
      "custom-light": "0 0 10px #202125",
      "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
    },
    extend: {
      colors: {
        'green': {
          DEFAULT: '#00f260',
        },
        'dark': {
          DEFAULT: '#010101',
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        }
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
}
