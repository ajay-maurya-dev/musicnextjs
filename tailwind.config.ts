import type { Config } from "tailwindcss";
// import svgToDataUri from "mini-svg-data-uri";
// import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import plugin from "tailwindcss/plugin";

// ✅ Plugin: Convert colors → CSS variables
const addVariablesForColors = plugin(function ({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));

  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
  );

  addBase({
    ":root": newVars,
  });
});

// ✅ Plugin: SVG Background Patterns
// const addSvgPatterns = plugin(function ({ matchUtilities, theme }) {
//   matchUtilities(
//     {
//       "bg-grid": (value: string) => ({
//         backgroundImage: `url("${svgToDataUri(
//           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}">
//             <path d="M0 .5H31.5V32"/>
//           </svg>`
//         )}")`,
//       }),

//       "bg-grid-small": (value: string) => ({
//         backgroundImage: `url("${svgToDataUri(
//           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}">
//             <path d="M0 .5H31.5V32"/>
//           </svg>`
//         )}")`,
//       }),

//       "bg-dot": (value: string) => ({
//         backgroundImage: `url("${svgToDataUri(
//           `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none">
//             <circle fill="${value}" cx="10" cy="10" r="1.6"/>
//           </svg>`
//         )}")`,
//       }),
//     },
//     {
//       values: flattenColorPalette(theme("backgroundColor")),
//       type: "color",
//     }
//   );
// });

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

 
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
      },
    },
  },


  plugins: [addVariablesForColors, addSvgPatterns],
};

export default config;