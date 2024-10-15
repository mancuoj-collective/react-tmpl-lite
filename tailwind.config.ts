import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
        serif: ['Source Serif 4', ...defaultTheme.fontFamily.serif],
        mono: ['Monaspace Xenon', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
} satisfies Config
