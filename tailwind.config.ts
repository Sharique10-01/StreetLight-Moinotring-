import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Ensure this includes app directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Ensure this includes components
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["winter"],
  }
};

export default config;
