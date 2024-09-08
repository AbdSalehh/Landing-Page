import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-black',
    'bg-fourth',
    'bg-third',
    'bg-white',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#fcf944",
        secondary: "#3e88ff",
        third: "#FF97D0",
        fourth: "#31BE32",
      },
    },
  },
  plugins: [],
};
export default config;
