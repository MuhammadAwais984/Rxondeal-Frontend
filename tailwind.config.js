module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: { "bounce-slow": "bounce 6s infinite" },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
