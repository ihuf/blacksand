import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Colors - Blacksand Purple & Gray Theme
        black: {
          DEFAULT: '#1D1F23',
          50: '#2A2C31',
          100: '#232528',
          200: '#1D1F23',
          300: '#17191C',
          400: '#111315',
          500: '#0B0C0E',
        },
        // Primary Purple (Blacksand Brand)
        purple: {
          DEFAULT: '#8E61A5',
          50: '#F5F0F7',
          100: '#E8DCF0',
          200: '#D1B9E1',
          300: '#BA96D2',
          400: '#A378BC',
          500: '#8E61A5',
          600: '#724E85',
          700: '#563B64',
          800: '#3A2843',
          900: '#1E1422',
        },
        // Keep sand as alias for purple for backwards compatibility
        sand: {
          DEFAULT: '#8E61A5',
          50: '#F5F0F7',
          100: '#E8DCF0',
          200: '#D1B9E1',
          300: '#BA96D2',
          400: '#A378BC',
          500: '#8E61A5',
          600: '#724E85',
          700: '#563B64',
          800: '#3A2843',
          900: '#1E1422',
        },
        // Neutral Gray Colors
        neutral: {
          white: '#FFFFFF',
          offWhite: '#F5F5F0',
          gray: '#838A91',
          darkGray: '#1D1F23',
        },
        // Gray scale
        gray: {
          DEFAULT: '#838A91',
          50: '#F5F6F7',
          100: '#E8EAEB',
          200: '#D1D4D7',
          300: '#B9BEC3',
          400: '#A2A8AF',
          500: '#838A91',
          600: '#6B7178',
          700: '#53585E',
          800: '#3B3F44',
          900: '#23262A',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-ibm-plex-arabic)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-xl': ['2rem', { lineHeight: '1.3' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.4' }],
        'heading-md': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #8E61A5 0%, #724E85 100%)',
        'gradient-purple': 'linear-gradient(135deg, #8E61A5 0%, #724E85 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1D1F23 0%, #2A2C31 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
    },
  },
  plugins: [],
};

export default config;