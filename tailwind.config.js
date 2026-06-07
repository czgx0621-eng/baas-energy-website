/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baas: {
          chalk: '#f3f2ed',
          paper: '#fbfbf8',
          graphite: '#161b19',
          ink: '#202825',
          steel: '#64706a',
          line: '#d8ddd9',
          mineral: '#196958',
          electric: '#4fc3c8',
          lime: '#c7e673',
        },
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        industrial: '0 34px 90px rgba(10, 16, 14, 0.22)',
        console: '0 38px 110px rgba(0, 0, 0, 0.38)',
      },
      maxWidth: {
        baas: '1360px',
      },
      borderRadius: {
        baas: '4px',
      },
    },
  },
  plugins: [],
}
