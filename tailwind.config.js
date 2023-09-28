/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        accent: "white",
        background: "#201F1F",
        bgGreen : '#27B643',
        bgGray : '#ECECEC'
      },
      colors: {
        fontGray: "#9CA3AF",
      },
      textColor: {
        primary: "#27B643",
      },
      borderColor: {
        primary: "#27B643",
      },
      fontFamily: {
        catamaran: "Catamaran",
      },
      fontSize: {
        heading: "40px",
      },
    },
  },
  plugins: [],
};
