/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FEFEFE",
        gleyLight: "#d8cde8",
        blackBg: "#2c203d",
        correctGreen: "#078059",
        wrongPink: "#f55a98",
        skippedColor: "#482A71C3",
        pinkLight: {
          100: "#F5DAFB",
          200: "#F0BBFC",
          300: "#EB9DFA",
          400: "#e781fb",
          500: "#E563FF",
          600: "#E052FC",
          700: "#DC40FB",
          800: "#D51EFAE4",
          900: "#D203FCAE",
        },
        blau: {
          100: "#ABE5FA",
          200: "#03bcff",
          300: "#03A4DE",
          500: "#0374FF",
          600: "#5558ff",
          700: "#5703FF",
          800: "#4D02CFB2",
          900: "#1E015269",
        },
      },
      fontFamily: {
        roboto: ['"Roboto Condensed"', "sans-serif"],
      },
      dropShadow: {
        xl: "0 0 4px rgba(0, 0, 0, 0.6)",
      },
      boxShadow: {
        xm: "1px 1px 8px 1px rgba(0, 0, 0, 0.6)",
        sm: "1px 1px 8px 4px rgba(12, 5, 32, 0.6)",
      },
      lineHeight: {
        extraLoose: "1.5",
      },
      backgroundImage: {
        "body-texture": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%237616DD'/%3E%3Cstop offset='1' stop-color='%231D0433'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%2318E0FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2318E0FF' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");`,
      },
      keyframes: {
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "slide-in-from-bottom": "slide-in-from-bottom 0.7s ease-out",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "::-webkit-progress-bar": {
          background: "#6a558a",
          borderRadius: "24px",
        },
        "::-webkit-progress-value": {
          background: "#9e5ef8",
          borderRadius: "24px",
        },
      });
    },
    function ({ addUtilities }) {
      const newUtilities = {
        ".font-synthesis-none": {
          "font-synthesis": "none",
        },
        ".text-rendering-optimizeLegibility": {
          "text-rendering": "optimizeLegibility",
        },
        ".webkit-font-smoothing-antialiased": {
          "-webkit-font-smoothing": "antialiased",
        },
        ".moz-osx-font-smoothing-grayscale": {
          "-moz-osx-font-smoothing": "grayscale",
        },
        ".webkit-text-size-adjust-100": {
          "-webkit-text-size-adjust": "100%",
        },
        ".webkit-background-clip": {
          "-webkit-background-clip": "text",
        },
        ".webkit-text-fill-color": {
          "-webkit-text-fill-color": "transparent",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
