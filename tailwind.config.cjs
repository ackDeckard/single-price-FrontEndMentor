/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customcyan: "hsl(179, 62%, 43%)",
        customcyancard: "hsl(179, 47%, 52%)",
        customyellow: "hsl(71, 73%, 54%)",
        customlightgray: "hsl(204, 43%, 93%)",
        customgrayishblue: "hsl(218, 22%, 67%)",
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
