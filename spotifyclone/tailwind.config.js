/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backdrop: '#121212',
        primary: '#1db954',
        active: '#282828',
        link: '#b3b3b3',
        footer: '#181818'
      },
      fontSize: {
        s: '0.813rem'
      },
      boxShadow: {
        spotify: '0 2px 4px 0 rgb(0 0 0 / 20%)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), 
    require('@tailwindcss/line-clamp'),
  ],
}

