/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      gray: "#848588",
      whitesmoke: "#F4F5F6",
      purple: "#5F48EA",
      white: "#fff",
      outlineButton: "#E8ECEE",
      cyan: "#08C7E0",
      red: {
        50: "#fc6565",
        500: "#f35f38",
      },
      black: {
        20: "#7D838E",
        50: "#5B5C60",
        100: "#2B343B",
        200: "#323338",
      },
      backgroundAppIcon: "#FFE0EC",
      backgroundWebIcon: "#D4E6FF",
      backgroundCreateIcon: "#FFDCC7",
      backgroundMarketIcon: "#DDE1FF",
    },
  },
  plugins: [],
};
