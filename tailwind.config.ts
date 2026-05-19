import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F4EEDE",
          50: "#FAF6EC",
          100: "#F7F1E2",
          200: "#F4EEDE",
          300: "#EBE3CF",
        },
        ink: {
          DEFAULT: "#171717",
          muted: "#5E5E5E",
          subtle: "#8A8A85",
        },
        forest: {
          DEFAULT: "#1F4D3C",
          dark: "#163A2D",
          light: "#2D6B54",
        },
        coal: {
          DEFAULT: "#0F1411",
          800: "#161C18",
          700: "#1E2521",
        },
        accent: {
          DEFAULT: "#E2734B",
        },
        line: "#D9D2BD",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        narrow: "680px",
        page: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
