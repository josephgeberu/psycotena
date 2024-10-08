import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        custum: {
          primary_100: "rgba(0,126,133,1)",
          primary_75: "rgba(0,126,133,0.75)",
          primary_50: "rgba(0,126,133,0.5)",
          primary_25: "rgba(0,126,133,0.25)",
          primary_10: "rgba(0, 150, 255, 0.1)",
          primary_5: "rgba(0,126,133,0.05)",

          secondary_100: "rgba(238,151,201,1)",
          secondary_75: "rgba(238,151,201,0.75)",
          secondary_50: "rgba(238,151,201,0.5)",
          secondary_25: "rgba(238,151,201,0.25)",
          secondary_10: "rgba(238,151,201,0.1)",
          secondary_5: "rgba(238,151,201,0.05)",

          ternary_100: "rgba(255,0,0,1)",
          ternary_75: "rgba(255,0,0,0.75)",
          ternary_50: "rgba(255,0,0,0.5)",
          ternary_25: "rgba(255,0,0,0.25)",
          ternary_10: "rgba(255,0,0,0.1)",
          ternary_5: "rgba(255,0,0,0.05)",

          gray_100: "rgba(21,23,23,1)",
          gray_75: "rgba(21,23,23,0.75)",
          gray_50: "rgba(21,23,23,0.5)",
          gray_25: "rgba(21,23,23,0.25)",
          gray_10: "rgba(21,23,23,0.1)",
          gray_5: "rgba(21,23,23,0.05)",

          gradient: {
            start: "#007E85",
            end: "#EE97C9",
          },
        },
      },
      fontSize: {
        heading_1: "61px",
        heading_2: "48.8px",
        heading_3: "39.1px",
        heading_4: "31.3px",
        heading_5: "25px",
        heading_6: "20px",
        paragraph: "16px",
        small: "12.8px",
      },
    },
  },
  plugins: [],
};
export default config;
