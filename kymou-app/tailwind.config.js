/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
  
    ],
  theme: {
    fontFamily: {

      'display': ['Plakkaat'],
    },
    extend: {
        backgroundImage: {
          '1': "url('/img/motifCreme1.svg')",
          '2': "url('/img/motifVert1.svg')",
        }
    },
  },
  plugins: [],
}

