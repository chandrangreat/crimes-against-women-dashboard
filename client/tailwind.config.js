/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0084c7",
        customGray: "#f3f3f3",
      },
    },
  },
  plugins: [],
};
