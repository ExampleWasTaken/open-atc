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
        primary: '#0000C5',
        secondary: '#0062B8',
        accent: '#00B7D3',
        positive: '#00c853',
        warning: '#ffc107',
        negative: '#ff3d00',
      },
    },
  },
  plugins: [],
}
