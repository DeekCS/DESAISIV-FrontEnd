/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#F4F2ED',
        secondary: '#F3F4F6',
        tertiary: '#F3F4F6',
      },
    },
  },
  plugins: [],
}
