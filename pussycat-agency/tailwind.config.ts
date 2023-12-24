import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'outer-space': '#464f51',
      'aquamarine': '#0ff4c6',
      'plum': '#d68fd6',
      'azure': '#F1FDFF',
    },
  },
  plugins: [],
}
export default config
