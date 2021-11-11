module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ['motion-reduce'],
      translate: ['active', 'group-hover'],
      dropShadow: ['responsive', 'hover'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    // styled: true,
    themes: false,
    rtl: false,
  },
};
