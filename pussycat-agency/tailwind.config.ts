import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'outer-space': '#464f51',
      'aquamarine': '#0ff4c6',
      'plum': '#d68fd6',
      'azure': '#F1FDFF',
      'dark': '#080808',
    },
  },
  plugins: [],
}
export default config
