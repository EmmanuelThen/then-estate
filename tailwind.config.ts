import type { Config } from 'tailwindcss';
import { sky, slate, mint, blackA, blue, blueA, red } from '@radix-ui/colors';
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ...sky,
        ...slate,
        ...mint,
        ...blackA,
        ...blue,
        ...blueA,
        ...red,
        primary: '#0090FF',
        secondary: '#FFCC00',
        success: '#17c964',
        background: '#000000',
        foreground: '#ECEDEE',
        danger: '#f31260',
        warning: '#f5a524'
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
        "scrolling-banner": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - var(--gap)/2))" },
        },
        "scrolling-banner-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-50% - var(--gap)/2))" },
        },
      },
      animation: {
        backgroundShine: 'backgroundShine 2.5s linear infinite',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        "scrolling-banner": "scrolling-banner var(--duration) linear infinite",
        "scrolling-banner-vertical": "scrolling-banner-vertical var(--duration) linear infinite",
      }
    }
  },
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: '#0090FF',
            secondary: '#FF6600',
            success: '#17c964',
            background: '#000000',
            foreground: '#ECEDEE',
            danger: '#f31260',
            warning: '#f5a524'
          } // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: '#0090FF',
            secondary: '#FF6600',
            success: '#17c964',
            background: '#000000',
            foreground: '#ECEDEE',
            danger: '#f31260',
            warning: '#f5a524'
          } // dark theme colors
        },
        modern: {
          extend: 'dark', // <- inherit default values from dark theme
          colors: {
            background: '#0D001A',
            foreground: '#ffffff',
            primary: {
              50: '#3B096C',
              100: '#520F83',
              200: '#7318A2',
              300: '#9823C2',
              400: '#c031e2',
              500: '#DD62ED',
              600: '#F182F6',
              700: '#FCADF9',
              800: '#FDD5F9',
              900: '#FEECFE',
              DEFAULT: '#DD62ED',
              foreground: '#ffffff'
            },
            focus: '#F182F6'
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '1px',
              medium: '2px',
              large: '4px'
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px'
            }
          }
        }
      }
    })
  ]
};

export default config;
