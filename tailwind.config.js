/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'desktopLowerScreen': {'min': '1430px', 'max': '1700px'},
      'desktopLowerScreenForLowerSize': {'min': '1295px', 'max': '1430px'},
      'desktopLowerScreenForEdgeSize': {'min': '1200px', 'max': '1295px'},
    }
  },
  plugins: [],
  important: true,
}
