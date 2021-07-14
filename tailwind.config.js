module.exports = {
  purge: ['src/**/*.{js,jsx,ts,tsx}', 'public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#DCF2EF',
          300: '#B6E5DD',
          400: '#91D7CC',
          500: '#6BCABA',
          600: '#45BDA8',
          700: '#379888',
          800: '#297366',
          900: '#1C4D45'
        },
        heading: '#262566'
      },
      width: {
        dialog: '72rem',
        tooltip: '30rem'
      },
      minHeight: {
        50: '50rem'
      },
      gridTemplateColumns: {
        'content': '1fr 35%'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')]
}
