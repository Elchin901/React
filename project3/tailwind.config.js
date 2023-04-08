/** @type {import('tailwindcss').Config} */
module.exports = {
  mode :'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}", './public/index.html'],
  theme: {
    extend: {
      colors: {
        'brand-color':'#4c3398',
        'primary-brand-color':'#5d3ebc',
        'second-brand-color':'#7849f7'
      },
    },
  },
  plugins: [],
}
