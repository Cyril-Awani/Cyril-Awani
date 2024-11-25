import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['DM Mono', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation:{
        'slow-spin': 'spin 3s linear infinite',
      },
      colors: {
        btn: "var(--btn)",
        txt: "var(--txt)",
        bck: "var(--bg)",
        hvr: "var(--hvrbg)"

      },
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
};
export default config;