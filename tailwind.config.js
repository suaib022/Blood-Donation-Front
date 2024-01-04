/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#e11d48",

          "secondary": "#06b6d4",

          "accent": "#57534e",

          "neutral": "#080306",

          "base-100": "#f9fbff",

          "info": "#0080df",

          "success": "#4ade80",

          "warning": "#eab308",

          "error": "#c9001f",
        },
      },
    ]
  },
}