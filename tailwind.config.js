/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#9181F4',
        'medium-blue': '#5038ed',
        'light-grey': '#F0EDFF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'login-background-image': 'var(--login-background-image)',
        'women-image': 'var(--women-image)',
      },
      backgroundColor: {
        'input-color': 'rgb(240, 237, 255, 0.8)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundPosition: {
        'bottom-4': 'right -10rem bottom',
      },
      borderColor: {
        'input-border': '#000',
      },
      transitionDuration: {
        5000: '5000ms',
      },
      width: {
        'login-women-width-container': '23rem',
        'login-women-width-container-md': '20rem',
        'women-width': '550px',
      },
      height: {
        'login-women-height-container': '400px',
        'women-height': '800px',
      },
    },
  },
  plugins: [],
}
