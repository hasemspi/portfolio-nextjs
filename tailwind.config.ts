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
        backgroundnav: "var(--navbarbackground)",
      },
    },
    container: {
      center: true, // Center the container
      padding: {
        DEFAULT: '2rem', // Standard padding for all screen sizes
        sm: '1rem',      // Padding for small screens (sm)
        md: '2rem',      // Padding for medium screens (md)
        lg: '4rem',      // Padding for large screens (lg)
        xl: '6rem',      // Padding for extra-large screens (xl)
        '2xl': '8rem',   // Padding for 2xl screens (2xl)
      },
    },
  },
 plugins: [
    require('daisyui'),
  ],
};
export default config;
