/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#66CC8A",

          secondary: "#377CFB",

          accent: "#EA5234",

          neutral: "#FFFFFF",

          "base-100": "#333C4D",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mali: ["Mali", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
