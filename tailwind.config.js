/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jura: ["Jura", "serif"], // Add 'Jura' as a custom font family
      },
    },
  },
  plugins: [],
};
