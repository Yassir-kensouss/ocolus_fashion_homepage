module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'ss':['Poppins'],
        's':['Prata'],
      },
      colors:{
        primary:'#293341',
        secondary:'#c91f28'
      }
    },
  },
  variants: {
    extend: {
      outline:['hover','active'],
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [],
}
