/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#F4F2ED',
        secondary: '#43C387',
        tertiary: '#E9F9F0',
      },
      textColor: {
        primary: '#3F3F3F',
        secondary: '#43C387',
        tertiary: '#E9F9F0',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
