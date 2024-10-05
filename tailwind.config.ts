import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        cardo: ['var(--font-cardo)'],
        sans: ['var(--font-geist-sans)'],
        'zen-dots': ['var(--font-zen-dots)'],
      },
    },
  },
  plugins: [],
};
export default config;
