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
      colors:{
        primary:"#040407",
        gree:"#a9ff03",
        prp:"#c58fff"
      },
      fontFamily:{
        'kanit': ['Kanit','sans-serif']
      },
    },
  },
  plugins: [],
}

