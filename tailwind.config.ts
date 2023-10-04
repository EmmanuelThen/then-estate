import type { Config } from 'tailwindcss'
import { sky, slate, mint, blackA, blue } from '@radix-ui/colors';


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ...sky,
        ...slate,
        ...mint,
        ...blackA,
        ...blue
      },
      keyframes: {
        backgroundShine: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' }
        },
        contentShow: {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      }
    },
    animation: {
      backgroundShine: 'backgroundShine 2.5s linear infinite',
      contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
    }
  },
  plugins: [],
}
export default config
