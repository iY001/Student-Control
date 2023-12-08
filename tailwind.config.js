/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#592c8c', // Main Color
        'sec': '#7138b2', // For Hovering - Bright Main
        'third': "#702283", // Between
        'forth': "#b135cf", // Very Brigth
        'light1': "#f3f3f3",
        'light2': "#f5f5f5",
      }
    },
  },
  plugins: [],
}
