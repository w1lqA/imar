/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        main: '#303034',
        main2: '#353536',
        mainblue: '#6484CD',
        mainblue2: '#567bd2',
        secondary: '#141211',
        secondary2: '#181513',
        alternative: '#E4E4E4',
        alternative2: '#DFDFDF',
      },
      animation: {
        pulse2: 'pulse2 20s ease-in-out infinite',
      },
      keyframes: {
        pulse2: {
          '0%, 100%': {transform: 'scale(1.2)'},
          '50%': {transform: 'scale(1)'},
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

