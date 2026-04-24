/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f2c59',
          dark: '#0a1e3d',
        },
        secondary: {
          DEFAULT: '#74b9ff',
          light: '#f0f7ff',
        },
        azure: '#f0f7ff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        '32': '32px',
      },
    },
  },
  plugins: [],
}
