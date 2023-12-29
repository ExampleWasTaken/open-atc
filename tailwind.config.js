/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['RedHat', 'sans-serif']
      },
      colors: {
        black: '#010909',
        white: '#ffffff',
        primary: '#d8ca28',
        secondary: '#1c41e3',
        accent: '#6453ea',
        positive: '#00c853',
        warning: '#ffc107',
        negative: '#ff3d00',
      },
    },
  },
  plugins: [],
}
