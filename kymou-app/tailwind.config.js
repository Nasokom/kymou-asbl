/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
     fontFamily: {
      'rec': ['RecoletaReg'],
      'rec1': 'RecoletaBold',
      'rec2':['RecoletaBlack'],
      'display':['Plakkat'],

    },
    extend: {},
  },
  plugins: [],
}

