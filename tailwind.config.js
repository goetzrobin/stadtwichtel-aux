const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  theme: {
    fontFamily: {
      accent: ['Unkempt', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: '#CD7464',
          '50': '#FAF0EF',
          '100': '#F5E3DF',
          '200': '#EBC7C1',
          '300': '#E1ABA2',
          '400': '#D79083',
          '500': '#CD7464',
          '600': '#BC503D',
          '700': '#923E2F',
          '800': '#672C21',
          '900': '#3D1A14'
        },
        bg: {
          DEFAULT: '#F7EDD4',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FDFBF6',
          '500': '#F7EDD4',
          '600': '#EED9A5',
          '700': '#E5C575',
          '800': '#DDB246',
          '900': '#C69825'
        },
        'astra': {
          DEFAULT: '#FAE6B6',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FDF3DC',
          '500': '#FAE6B6',
          '600': '#F6D481',
          '700': '#F3C24D',
          '800': '#EFB018',
          '900': '#C28D0D'
        },
      }
    }
  },
  plugins: [],
}
