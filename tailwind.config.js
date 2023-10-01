/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Dark: "hsl(0, 0%, 0%)",
        White: "hsl(0, 0%, 100%)",
        primary: "#00040f",
        card: "rgba(4, 11, 28, 1)",
        Border: "rgba(255, 255, 255, 1)",
      },
      fontFamily: {
        Manrope: ["Manrope", "sans - serif"],
      },
    },
  },
  plugins: [],
};
