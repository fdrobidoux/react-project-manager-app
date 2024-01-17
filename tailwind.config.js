/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "transparent": "transparent",
      "black": "#000000",
      "maroon": {
        "dark": "#110D0D",
        "semidark": "#1D1717",
        DEFAULT: "#332E2B",
        "light": "#46403E"
      },
      "classygrey": "#97918F",
      "parcheminwhite": {
        "dark": "#C8C8C8",
        DEFAULT: "#E2DFDF",
      }
    },
    extend: {},
  },
  plugins: [],
}

