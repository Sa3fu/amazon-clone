/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        60: "60px",
      },
      colors: {
        'amazon-blue': '#131921',
        'searchIcon': '#cd9042'
      },
      width: {
        680: "680px",
      },
    },
  },
  plugins: [],
};
