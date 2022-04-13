module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#445661",
        secondary: "#8AA4B9",
      },
      fontFamily: {
        karla: "'Karla', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
};
