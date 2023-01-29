/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        22: '5.5rem',
        230: '57.5rem',
      },
      fontFamily: {
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
        'big-shoulders-display': ['Big Shoulders Display', 'sans-serif'],
      },
      colors: {
        'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
        'very-light-gray': 'hsl(0, 0%, 95%)',
      },
      fontSize: {
        paragraph: [
          '0.9rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0.03rem',
          },
        ],
        'card-heading': '2.5rem',
      },
    },
  },
  plugins: [],
}
