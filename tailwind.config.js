module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // navbar
        navbar: "1fr auto 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
