/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Inter', sans-serif"],
        manrope: ["'Manrope', sans-serif"],
      },
      colors: {
        primaryDark: "#18191b",
        secondaryDark: "#252627",
      },
    },
  },
  plugins: [],
};
