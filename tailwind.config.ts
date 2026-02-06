import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-elegant': ['var(--font-serif-elegant)', 'serif'],
        'sans-modern': ['var(--font-sans-modern)', 'sans-serif'],
        'cormorant': ['var(--font-cormorant)'],
        'pinyon': ['var(--font-pinyon)', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;