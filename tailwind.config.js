/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'teal': '#01889A',
        'white': '#FFFFFF',
        'dark-cyan': '#172D33',
        'blue': '#2DB7CA',
        'dark-green': '#4B5E5E',
        'light-blue': '#E1F5F4',
        'light-second-blue': '#A6C5CE',
        'snow': '#F4FDFE',
        'tailwind-dark': '#374151',

      },
    },
  },
  plugins: [],
}