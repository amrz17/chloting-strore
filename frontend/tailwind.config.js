/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-1": "#F2F0F1",
        "yellow-1": "#FFC633",
      },
      fontFamily: {
        IntegralCf: "Integral CF",
        SatoshiRegular: "Satoshi-Regular",
        SatoshiMedium: "Satoshi-Medium",
        SatoshiBold: "Satoshi-Bold",
      },
    },
  },
  plugins: [require("daisyui")],
};
