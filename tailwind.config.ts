import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a2e',
        secondary: '#e8d5b7',
        accent: '#c9a86c',
        background: '#faf8f5',
        text: '#2d2d2d',
        light: '#f5f0e8',
      },
      fontFamily: {
        serif: ['Noto Serif SC', 'serif'],
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
