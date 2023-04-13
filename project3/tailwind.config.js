/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}", './public/index.html'],
  theme: {
    extend: {
      spacing: {
        '0.1': '0.063rem'
      },

      // backgroundImage: {
      //   'mobile-app': "url('https://tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg')",
      // },
      backgroundImage: theme => ({
        'mobile-app': 'url(https://landing-strapi-images-development.s3.eu-west-1.amazonaws.com/0.1.0/_next/static/media/header-background.9ad4769082d04bd13983720656975d98.png)'
      }),

      colors: {
        'brand-color': '#4c3398',
        'primary-brand-color': '#5d3ebc',
        'second-brand-color': '#7849f7',
        'brand-yellow': '#ffd300'
      },
    },
  },
  plugins: [],
}

