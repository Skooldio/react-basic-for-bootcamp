/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        redwood: "#AA5042",
        smoke: "#100B00",
        dun: "#EBD2B4",
        copper: "#B1772F",
      },
    },
  },
  plugins: [],
};
