/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif", ...defaultTheme.fontFamily.sans],
        nunitobd: ["Nunito Bold", "sans-serif", ...defaultTheme.fontFamily.sans],
        tradegothic: ['"Trade Gothic LT"', ...defaultTheme.fontFamily.sans],
        tradegothicbd: ['"Trade Gothic LT Bold"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xxs': '.60rem',
        'xs': '.77rem',
        'l': '1.2rem',
        'xl': '3rem', // 24px
        'xxl': '4rem',  // 32px
        'giant': '8rem', // 64px
      },
      screens: {
        'lg': '1200px',
        'md': '900px'
      },
    },
  },
  plugins: [],
};