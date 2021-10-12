module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./misc/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: "#292929",
        secondary: "#BB86FC",
        light: "#E3E3E3",
      },
      textColor: {
        primary: "#E3E3E3",
        secondary: "#202124",
      },
      borderColor: {
        primary: "#202124",
        secondary: "#BB86FC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
