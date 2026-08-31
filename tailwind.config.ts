import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        coal: "#0d0d0d",
        smoke: "#151515",
        line: "rgba(255,255,255,0.12)",
        drixil: "#7B5CFF",
        volt: "#D6FF4B",
        cyan: "#55E6FF",
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        violet: "0 0 40px rgba(123,92,255,0.28)",
        hairline: "inset 0 0 0 1px rgba(255,255,255,0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
