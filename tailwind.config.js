import tailwindAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0062FF",
          100: "#F1F6FF",
        },
        black: "#191C20",
        stroke: {
          DEFAULT: "#F9FBFF",
          100: "#E6EBF3",
        },
        success: {
          DEFAULT: "#DEFFCF",
          100: "#F5FFF1",
          200: "#EFEFEF",
          300: "#A6D092",
          400: "#547544",
        },
        warning: {
          DEFAULT: "#FFFACC",
          100: "#FFFEF3",
          200: "#EFEFEF",
          300: "#C7C080",
          400: "#726D41",
        },
        progress: {
          DEFAULT: "#FFE6C8",
          100: "#FEF6EC",
          200: "#EFEFEF",
          300: "#D8B283",
          400: "#825D30",
        },
        danger: {
          DEFAULT: "#FFDADA",
          100: "#FFF2F2",
          200: "#EFEFEF",
          300: "#D38282",
          400: "#843838",
        },

        gray: "#7F8596",
      },
    },
  },
  plugins: [tailwindAnimate],
};
