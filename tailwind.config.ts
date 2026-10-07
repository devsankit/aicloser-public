import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}', './legacy.html'],
  theme: {
    extend: {
      colors: {
        closer: {
          orange: '#ff6b2f',
          ink: '#101010',
          canvas: '#fafaf8',
        },
      },
    },
  },
  plugins: [],
};

export default config;
