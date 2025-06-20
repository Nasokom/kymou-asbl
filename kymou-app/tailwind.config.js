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
    // fontSize:{
    //   's':'10vh',//xl
    //   'm':'',//text-2xl
    //   'l':'',//4xl
    //   'xl':'',//4xl
    //   '2xl':''//5xl
    // },
    extend: {},
  },
  plugins: [],
}

