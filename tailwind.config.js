/** @format */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      orange: '#ffaf60',
      blue: '#6091d3',
    },
    extend: {
      fontFamily: {
        body: ['Montserrat'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
