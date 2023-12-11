import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  colors: {
    'blue': '#1a13f0',
    'font-white': 'efeffd',
    'black' : '1e1c1c',
  },
  plugins: [],
}
export default config
