module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans', 'ui-sans-serif', 'system-ui', -'apple-system'],
      },
      keyframes: {
        fade: {
          '0%': {
            transform: 'translateY(-50px)',

            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
      },
      animation: {
        fade: 'fade 1s ease-out both',
      },
    },
    colors: {
      white: '#ffffff',
      green: '#30C88F',
      primary: '#2D314D',
      secondary: '#9597A5',
      green1: '#33D35E',
      green2: '#2AB6D9',
      background1: '#FAFAFA',
      background2: '#F4F5F7',
    },
  },
  plugins: [],
}
