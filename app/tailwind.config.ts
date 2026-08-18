import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#a37400',
          light: '#f0b52e',
          dark: '#7a4d1a',
        },
        neutral: {
          DEFAULT: '#e9e2d7',
          light: '#fdfcf9',
          dark: '#3d3326',
        },
        accent: {
          DEFAULT: '#573d02',
          light: '#f08c0e',
        },
      },
    },
  },
  plugins: [],
};

export default config;
