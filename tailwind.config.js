/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  safelist: [
    'opacity-100',
    'opacity-0',
    '-translate-y-10',
    'translate-y-0',
  ],
  plugins: [],
};


