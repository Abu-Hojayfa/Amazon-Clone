module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        steel: {
          50: "#f7f9f9",
          100: "#eaf1f6",
          200: "#d0dfec",
          300: "#a4bed2",
          400: "#7197b1",
          500: "#567590",
          600: "#455a73",
          700: "#364356",
          800: "#232f3e",
          900: "#161b26",
        },
        olive: {
          50: "#fbf9f2",
          100: "#f8efae",
          200: "#efde6f",
          300: "#f0c24f",
          400: "#b39221",
          500: "#927410",
          600: "#765b0a",
          700: "#5b440a",
          800: "#3e2f09",
          900: "#2b1d07",
        },
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        92: "22rem",
        96: "24rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
