/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      ochre: '#D17A22',
      ochret: 'rgba(209, 122, 34, 0.1)',
      white: {
        DEFAULT: '#FFFFFF',
        100: '#F9F8F8',
        200: '#F3F3F3',
        300: '#ECECEC',
        400: '#E0E0E0',
        500: '#D3D3D3',
        600: '#BDBDBD',
        700: '#9E9E9E',
        800: '#757575',
        900: '#333333'
      },
      black: {
        DEFAULT: '#000000',
        100: '#1A1A1A',
        200: '#333333',
        300: '#4D4D4D',
        400: '#666666',
        500: '#808080',
        600: '#999999',
        700: '#B3B3B3',
        800: '#CCCCCC',
        900: '#E6E6E6'
      },
      red: {
        DEFAULT: '#FF0000',
        100: '#FF3333',
        200: '#FF6666',
        300: '#FF9999',
        400: '#FFCCCC',
        500: '#FFE6E6',
        600: '#FF9999',
        700: '#FF6666',
        800: '#FF3333',
        900: '#FF0000'
      },
      green: {
        DEFAULT: '#00FF00',
        100: '#33FF33',
        200: '#66FF66',
        300: '#99FF99',
        400: '#CCFFCC',
        500: '#E6FFE6',
        600: '#99FF99',
        700: '#66FF66',
        800: '#33FF33',
        900: '#00FF00'
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {}
  },
  plugins: []
}
