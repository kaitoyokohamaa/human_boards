module.exports = {
  purge: ["./components/**/**.tsx", "./pages/**/**.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          5: "#ee6e73",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
