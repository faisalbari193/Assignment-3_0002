/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        animation: {
          typing: "typing 3s steps(25) infinite",
        },
          keyframes: {
            typing: {
              "0%": { width: "0%" },
              "100%": { width: "100%" },
            },
      },
    },
    plugins: [],
  }