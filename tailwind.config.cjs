/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "purple": '#600594',
        "blue": '#6448fe',
        "red": '#ff5252',
        "light": '#dedddf',
        "dark": '#8e8593',
        "very-dark": '#21092f'
      }
    },
    fontFamily: {
      'primary': ['Space Grotesk', 'sans-serif']
    }
  },
  plugins: [],
}