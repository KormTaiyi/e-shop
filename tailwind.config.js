/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#01AAE1",
        secondary:"#f42c37",
        brandYellow:"#fdc62e",
        brandGreen:"#2dcc6f",
        brandBlue:"#1376f4",
      }
    },
  },
  plugins: [],
}

