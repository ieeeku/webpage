import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#12181F",
        secondary: "#75787B",
        tertiary: "#00629B",
        neutral: "#FFFFFF",
        surface: "#F2F5F8",
        "on-primary": "#FFFFFF",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "500" }],
        "display-sm": ["2.75rem", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "500" }],
        h1: ["2.2rem", { lineHeight: "1.15", fontWeight: "500" }],
        body: ["0.96rem", { lineHeight: "1.55" }],
        label: ["0.72rem", { letterSpacing: "0.04em", lineHeight: "1.4" }],
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "10px",
      },
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "32px",
      },
    },
  },
  plugins: [],
};
export default config;
