import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "var(--bg)",
        card: "var(--card)",
        ink: "var(--ink)",
        yellow: "var(--pink)",
        coral: "var(--rose)",
        teal: "var(--teal)",
        line: "var(--line)",
        muted: "var(--muted)",
        mauve: "var(--mauve)",
        pinkLight: "var(--pink-light)",
      },
      fontFamily: {
        display: ["var(--font-hand-bold)", "cursive"],
        hand: ["var(--font-hand)", "cursive"],
        body: ["var(--font-space)", "sans-serif"],
      },
      boxShadow: {
        brut: "6px 6px 0px 0px var(--line)",
        "brut-sm": "4px 4px 0px 0px var(--line)",
        "brut-lg": "9px 9px 0px 0px var(--line)",
      },
    },
  },
  plugins: [],
};
export default config;
