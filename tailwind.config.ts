import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '500px',
        'sm': '600px',
        'md': '690px',
        'lg': '988px',
        'xl': '1078px',
        '2xl': '1265px',
      },
      colors: {
        textPrimary: '#71767b',
        textSecondary: '#e7e9ea',
        borderGray: '#2f3336',
        inputGray: '#202327',
        iconBlue: '#1d9bf0',
        iconGreen: '#00ba7c',
        iconRed: '#f91880',
        blurBlack: '#00000084',
      },
      
    },
  },
  plugins: [],
} satisfies Config;
