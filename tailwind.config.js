/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FCB426',
        'secondary': '#352C27',
        'accent': '#8D3B1E',
      },
      fontFamily: {
        'encode': ['Encode Sans Condensed', 'sans-serif'],
        'franklin': ['Libre Franklin', 'sans-serif'],
        'barcode': ['Libre Barcode 39 Text', 'monospace'],
      },
      fontSize: {
        'headline-1': ['145px', '149px'],
        'headline-2': ['100px', '89px'],
        'body-large': ['24px', '38px'],
        'body-regular': ['16px', '38px'],
      },
    },
  },
  plugins: [],
}
