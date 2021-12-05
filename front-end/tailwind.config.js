module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'orange-red': '#F8333C',
        'light-white': '#EDE6E3',
        'neutral-gray': '#DADAD9',
        'dark-gray': '#36382E',
        'sky-blue': '#5BC3EB',
        'first-blue': '#1E5AA8'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
