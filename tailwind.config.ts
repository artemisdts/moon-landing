/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-1': 'var( --black-1)',
        'black-100': 'var(--black-100)',
        'blue-berry': 'var(--blue-berry)',
        'blue-label': 'var(--blue-label)',
        'green-apple': 'var(--green-apple)',
        'pink-blinders': 'var(--pink-blinders)',
        'primary-color-blue': 'var(--primary-color-blue)',
        'stroke-color-dark-mode': 'var(--stroke-color-dark-mode)',
        'surface-color-dark-mode': 'var(--surface-color-dark-mode)',
        text: 'var(--text)',
        'toggle-handle-color': 'var(--toggle-handle-color)',
        'variable-collection-black-10': 'var(--variable-collection-black-10)',
        'green-aplle': 'var(--variable-collection-green-aplle)',
        'variable-collection-text': 'var(--variable-collection-text)',
        'white-10': 'var(--white-10)',
        'white-30': 'var(--white-30)',
        'white-50': 'var(--white-50)',
        'white-80': 'var(--white-80)',
        'white-fuck-background': 'var(--white-fuck-background)',
      },
      borderRadius: {
        eliptical: '22% 50% 16% 73% / 55% 74% 40% 61%',
      },
      boxShadow: {
        'switch-shadow': 'var(--switch-shadow)',
      },
      backgroundImage: {
        gradientBG: "url('../assets/background.png')",
        reverseGradientBG: "url('../assets/background-2.svg')",
        spaceBoy: "url('../assets/imgs/space-boy.png')",
        gusto: "url('../assets/imgs/apps/gusto.png')",
        aboutUs: "url('../assets/imgs/rocket.png')",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      maxWidth: {
        'content-broken-10': 'calc(52.125rem - 5%)',
      },
      scale: {
        '125': '1.25',
      },
      gridTemplateColumns: {
        comingSoon: '4.75rem 1fr 9rem',
      },
    },
  },
  plugins: [],
}
