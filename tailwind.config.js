/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        innerBoxShadow: "0px 3px 9.4px -1px #1616157D",
        outerBoxShadow: "0px 16px 23.5px -1px #00000040",
      },
    },
  },
  plugins: [],
};

// box-shadow: 0px 3px 9.4px -1px #1616157D;
// box-shadow: 0px 16px 23.5px -1px #00000040;
