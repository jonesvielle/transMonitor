/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#979797",
        light: "#F7F8FA",
        green: "#27AE60",
        blue: "#1875F0",
        white: "#FFF",
        darkGrey: "#7F8FA4",
      },
    },
  },
  plugins: [],
};
