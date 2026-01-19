import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255, 255, 255, 0.7)",
        "glass-border": "rgba(148, 163, 184, 0.2)",
        ink: "#0f172a",
        accent: "#4f46e5"
      },
      boxShadow: {
        glass: "0 20px 60px -40px rgba(15, 23, 42, 0.6)",
        glow: "0 0 50px rgba(99, 102, 241, 0.25)"
      },
      backdropBlur: {
        glass: "18px"
      }
    }
  },
  plugins: []
};

export default config;
