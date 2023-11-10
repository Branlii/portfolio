import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textShadow: {
        sm: '-3px 2px #4D4F40',
        md: '-5px 4px #4D4F40',
        lg: '-6px 5px #4D4F40',
      },
      colors: {
        backgroundPrimary: '#1B2021',
        backgroundSecondary: '#E3DCC2',
        textPrimary: '#E3DC95',
        textSecondary: '#E3DCC2',
        "text-primary-shadow": "#4D4F40",
      },
      cursor: {
        'python': `url(/python.png), pointer`,
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'text-shadow': (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
    )
  })],
}
export default config
