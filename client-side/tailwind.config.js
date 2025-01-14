/**
 * @type {import('tailwindcss').TailwindConfig}
 * @see https://tailwindcss.com/docs/configuration
 */
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      colors: {
        primary: "#030324",
        secondary: "#FFCC70",
        accent: "#C850C0",
        blue1: "#4dcffe",
        darkPink: "#d20d59",
        navlink: "#FFFAF0",
        register: "#F54E25",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors, // Add custom css variables for all colors in theme.
  ],
};

/**
 * @desc Give custom key to all the color in theme and add them as css variables.
 * @example `primary` color will be available as `--primary`, `secondary` as `--secondary` and so on.
 */
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
