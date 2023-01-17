/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
      spacing: {
        87.5: '21.875rem',
        108: '26rem',
      },
      colors: {
        orange: 'hsl(25, 97%, 53%)',
        'light-grey': 'hsl(217, 12%, 63%)',
        'medium-grey': 'hsl(216, 12%, 54%)',
        'medium-dark-blue': 'hsl(213, 19%, 22%)',
        'dark-blue': 'hsl(213, 19%, 18%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
        link: 'hsl(228, 45%, 44%)',
      },
      fontSize: {
        paragraph: '0.9375rem',
        'desktop-heading': '1.7rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
