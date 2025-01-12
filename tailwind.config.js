module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        chakra: ['Chakra Petch', 'sans-serif'],
        space: ['Space Mono', 'monospace'],
      },
      colors: {
        primary: '#6C63FF',
        secondary: '#1B1B1B',
        accent: '#F3F4F6',
      },
    },
  },
  plugins: [require('daisyui')],
};