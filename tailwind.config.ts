import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    container: {
      center: true
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1418px'
    },
    fontFamily: {
      'gteestiprodisplay': 'GTEestiProDisplay, sans-serif'
    },
    extend: {
      colors: {
        'qan-black': {
          800: '#050516',
          900: '#010107'
        },
        'qan-blue': {
          300: '#53C3E2',
          400: '#00A6D4',
          900: '#232841'
        },
        'qan-gray': {
          800: '#6C757E',
          900: '#797C7C'
        },
        'qan-green': {
          400: '#00AAA1'
        }
      }
    }
  }
}
