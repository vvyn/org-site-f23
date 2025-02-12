/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ais: {
          black: '#1F1E1E',
          'blue-gray': '#E1E8ED',
          'light-blue': '#11BBFD',
          'dark-blue': '#4565B8',
          'light-gray': '#f5f5f5',
          'dark-gray': '#444444',
          'indigo': '#24314D',
          'hover-indigo': '#374b75',
          'blue': '#3E6EFF',
          white: '#FFFFFF',
          navy: '#202042',
          gray: '#B8B8B8',
          
        },
        'ais-new': {
          'darker-blue': '#293039',
          'dark-blue': '#361CFF',
          'med-blue': '#3E6EFF',
          'light-blue': '#88CAFF',
          orange: '#FFBC85',
          'soft-black': '#293039',
          black: '#1A2025',
          white: '#FFFFFF',
          beige: '#FFF8F3',
        },
        black: 'var(--black)',
        'variable-collection-bg': 'var(--variable-collection-bg)',
        'variable-collection-black': 'var(--variable-collection-black)',
        'variable-collection-blue1': 'var(--variable-collection-blue1)',
        'variable-collection-blue2': 'var(--variable-collection-blue2)',
        'variable-collection-blue3': 'var(--variable-collection-blue3)',
        'variable-collection-dark-blue': 'var(--variable-collection-dark-blue)',
        'variable-collection-dark-blue1': 'var(--variable-collection-dark-blue1)',
        'variable-collection-orange': 'var(--variable-collection-orange)',
        white: 'var(--white)',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        hind: ['Hind Siliguri'],
        roboto: ['var(--roboto)'],
        robotoMed: ['var(--robotoMed)'],
        h1: 'var(--h1-font-family)',
        h2: 'var(--h2-font-family)',
        h3: 'var(--h3-font-family)',
        'heading-h6': 'var(--heading-h6-font-family)',
        label: 'var(--label-font-family)',
        text: 'var(--text-font-family)',
        'text-1': 'var(--text-1-font-family)',
        'text-2': 'var(--text-2-font-family)',
        'text-regular-semi-bold': 'var(--text-regular-semi-bold-font-family)',
        'text-small-link': 'var(--text-small-link-font-family)',
      },
      scale: {
        85: '0.85',
        300: '3',
        400: '4',
      },
      backgroundSize: {
        fill:'100% 100%',
        'extra-fill':'150% 150%'
      },
      margin: {
        73: '18.75rem',
      },
      boxShadow: {
        large: 'var(--large)',
        medium: 'var(--medium)',
        small: 'var(--small)',
        xlarge: 'var(--xlarge)',
        xsmall: 'var(--xsmall)',
        xxlarge: 'var(--xxlarge)',
        xxsmall: 'var(--xxsmall)',
      },
      keyframes:{
        infinislide:{
          '0%': { transform: 'translateX(1000px)' },
          '100%': { transform: 'translateX(2000px)' },
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
