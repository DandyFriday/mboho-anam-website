/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        stylish: ['"Playfair Display"', 'serif'],
      },
      colors: {
        "primary" : "#0d4823",
        "orange":'#ff8832',
        "yellow": '#fcb900', 
        "yellow2": "#ff6900",       
        "secondary": "#e67817",        
        "primary2" : "#5EB670",
        "black" : "#011948",
        "black2" : "#35384B",
        "black3" : "#141115",      
        "purple": "#8558F7",
        "white": "#ffffff",
        "white2": "#fff",
        "light": "#038347"       
      },
      screens: {
        sm:"640px",
        md: "768px",
        lg: "1024pxpx",      
      },
     },
  },
  plugins: [],
}

