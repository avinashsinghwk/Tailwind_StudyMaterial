/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      spacing : {
        13 : '13px'
      },
      fontSize : {
        '10xl': ['9rem', { lineHeight: '1' }],
      }
    },
  },
  plugins: [],
}

