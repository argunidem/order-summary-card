/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['Red Hat Display', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: {
          1000: 'hsl(225, 100%, 94%)',
          1100: 'hsl(245, 75%, 52%)',
          1200: 'hsl(224, 23%, 55%)',
        },
      },
    },
  },
  plugins: [],
};
