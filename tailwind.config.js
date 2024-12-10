/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
<<<<<<< HEAD
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
=======

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          900: "#3B2411", 
        },
      },
      fontFamily: {
        cinzel: ['"Cinzel Decorative"', 'serif'], 
      },
    },
>>>>>>> feat/landingpage
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#4F3017",
          secondary: "#ED7D31",
          neutral: "#161616",
          success: "#32E750",
          error: "#E40513",
        },
      },
    ],
  },
<<<<<<< HEAD
  plugins: [daisyui],
};

=======
  plugins: [require("daisyui")],
};
>>>>>>> feat/landingpage
