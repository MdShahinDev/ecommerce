/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      Space: '0.3em'
    },
    extend: {
      colors: {
        'Primary': '#ff9500','Hover': '#f79a16'
      },
      fontFamily: {
        'Poppins':["Poppins", "serif"],
        'Crimson':["Crimson Pro", "serif"],
      },
      backgroundImage:{
        promotionalBanner:"url('/Promotional-Banner.jpg')"
      }
    },

  },
  plugins: [],
}