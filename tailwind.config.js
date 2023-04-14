/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-cyan": "hsl(193, 38%, 86%)",
        "neon-green": "hsl(150, 100%, 66%)",

        neutral: {
          "grayish-blue": "hsl(217, 19%, 38%)",
          "dark-grayish-blue": "hsl(217, 19%, 24%)",
          "dark-blue": " hsl(218, 23%, 16%)",
        },
      },
      fontSize:{
        'quote':'28px',
      },
      inset:{
        'desktop':'36.5rem',
        'mobile':'10rem'
      },
      boxShadow: {
        '3xl': '-1px 5px 40px -1px rgba(0, 0, 0, 0.3)',
      }

    },
  },
  plugins: [],
};
